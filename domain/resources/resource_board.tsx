import ResourceBoardCard from "@/components/resourceCard";
import Link from "next/link";
import img from "@/public/images/help_station_about.svg";

interface ResourceBoardProps {
  posts: WordPressPost[];
}

const ResourceBoard: React.FC<ResourceBoardProps> = ({ posts }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 gap-5 flex flex-col w-full">
      {posts?.length ? (
        posts.map((post) => {
          const featuredImage =
            post.featuredImage ||
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            img;

          return (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <ResourceBoardCard
                title={post.title.rendered}
                excerpt={post.excerpt.rendered}
                author={"Author Name"} 
                date={post.date}
                slug={post.slug}
                featuredImage={featuredImage}
              />
            </Link>
          );
        })
      ) : (
        <p>No resources found.</p>
      )}
    </div>
  );
};

export default ResourceBoard;
