"use client";

// import BlogPagination from "@/components/pagination/BlogPagination";
import { useBlog } from "@/context/BlogContext";
import ResourceBoard from "@/domain/resources/resource_board";
import { fetchPosts, fetchPostsByCategory } from "@/lib/blog";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ResourcePage = () => {
  const { category, page, query, handlePage } = useBlog();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  // const posts = await fetchPosts();
  const router = useRouter();

  useEffect(() => {
    const fetchPostData = async () => {
      let fetchedPosts;
      if (query) {
        // fetchedPosts = await fetchPostsBySearch(query, page);
      } else if (category === 0 || !category) {
        fetchedPosts = await fetchPosts(page);
      } else {
        // alert(`{category} ${category} - {query} ${query}`);
        fetchedPosts = await fetchPostsByCategory(category, page);
      }

      if (fetchedPosts) {
        setPosts(fetchedPosts.posts);
        setTotalPages(fetchedPosts.totalPosts);
      }
    };

    fetchPostData();
  }, [category, page, query]);

  const handlePageChange = (page: number) => {
    handlePage(page);
    router.push(
      `/blog?page=${page}&category=${category === 0 ? "" : category}`
    );

    // router.push(`/blog?page=${page}&category=${category}`);
  };

  return (
    <main className="w-full flex-col gap-7 flex justify-center items-center ">
      <ResourceBoard posts={posts} />
      <div className="flex justify-between items-center mt-6 py-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="mr-4 px-4 gap-3 items-center border-[1px] w-[101px] border-neutral-3 rounded-lg p-2"
        >
          Previous
        </button>
        <div>
          {page} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className="ml-4 px-4 gap-3 items-center border-[1px] w-[101px] border-neutral-3 rounded-lg p-2"
        >
          Next
        </button>
      </div>

      {/* <BlogPagination totalPosts={totalPages} /> */}
    </main>
  );
};

export default ResourcePage;
