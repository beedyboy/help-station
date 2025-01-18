"use client";

import { use, useEffect, useState } from "react";
import ImageTemplate from "@/components/image";
import { fetchPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetails = ({ params }: PageProps) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const [blog, setBlog] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const post = await fetchPostBySlug(slug as string);
          setBlog(post.data[0]);
        } catch (error) {
          console.error("Failed to fetch blog post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  // Extract the necessary fields
  const { title, content, excerpt, date, _embedded } = blog;
  const featuredImage =
    _embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/placeholder-image.jpg";
  const authorName = _embedded?.author?.[0]?.name || "Unknown Author";

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Blog Image */}
      <div className="w-full rounded-md overflow-hidden relative h-[280px] bg-cyan-700">
        <ImageTemplate src={featuredImage} />
        <div className="p-4 absolute h-[81px] text-white backdrop-blur-lg w-full bottom-0 bg-[#FFFFFF4D] bg-gradient-to-r flex justify-between">
          <div>
            <p className="text-xs font-semibold leading-4">{authorName}</p>
            <p className="text-sm font-normal">
              {new Date(date).toDateString()}
            </p>
          </div>
          <p className="text-xs font-semibold leading-4">Report</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold leading-10 text-neutral-1 text-2xl">
          {title.rendered}
        </h3>
        <p
          className="text-[#797B89] text-lg leading-8 font-normal"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        ></p>
      </div>

      {/* Blog Content */}
      <div
        className="text-[#797B89] text-lg leading-7 font-normal py-5"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      ></div>
    </div>
  );
};

export default BlogDetails;
