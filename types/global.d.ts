declare global {
  interface IPlan {
    title: string;
    price: number;
    features: string[];
    color: string;
    bgColor: string;
    icon: string;
  }
  interface WordPressPost {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    slug: string;

    author: string;
    date: string;
    slug: string;
    featuredImage: number;
    _embedded?: {
      "wp:featuredmedia"?: {
        source_url: string;
      }[];
      author?: {
        name: string;
      }[];
    };
  }

  interface WordPressCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "category";
    parent: number;
  }
}
export default global;
