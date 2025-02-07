const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL;

export const fetcher = async <T>(endpoint: string): Promise<{ data: T; total: number }> => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${endpoint}`);
  }
  // return res.json();
   // Get the total number of posts from the header
  //  const totalPosts = res.headers.get("X-WP-Total");
   const totalPosts = res.headers.get("x-wp-totalpages");
  
   // Parse the response body as JSON
   const data = await res.json();
   
   // Return both the data and the total posts count
   return { data, total: totalPosts ? parseInt(totalPosts) : 0 };
};

export const fetchPosts = async (pageNumber: number = 1, perPage: number = 2, searchTerm: string = '') => {
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: pageNumber.toString(),
    search: searchTerm,
  });
  const { data, total } = await fetcher<WordPressPost[]>(`/posts?_embed=true&${params.toString()}`);
  return { posts: data, totalPosts: total };
};

export const fetchPostsByCategory = async (category: number, page: number) => {
  const { data, total } = await fetcher<WordPressPost[]>(`/posts?_embed=true&categories=${category}&page=${page}`);
  return { posts: data, totalPosts: total };
}; 

export const fetchPostBySlug = (slug: string) =>
  fetcher<WordPressPost[]>(`/posts?slug=${slug}&_embed=true`);

export const getCategories = () => fetcher<WordPressCategory[]>('/categories');


 