import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/posts";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPage = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return (
    <>
      <h1>Blog Posts</h1>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((post: IPost, index: number) => (
          <li key={index} className="border p-4">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/blog/${post.id}/${post.title}`} className="text-blue-500 hover:underline">
              View in Detail
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
