import ResourceBoardCard from "@/components/resourceCard";
import Link from "next/link";

const ResourceBoard = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 gap-5 flex flex-col w-full">
      <Link href="/blog/ggdgdd">
        <ResourceBoardCard />
      </Link>
      <ResourceBoardCard />
      <ResourceBoardCard />
      <ResourceBoardCard />
    </div>
  );
};

export default ResourceBoard;
