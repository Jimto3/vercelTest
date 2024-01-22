import Link from "next/link";

export default async function aboutPost({ params }) {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const posts = await data.json();
    console.log(posts);
    return (
        <div>
            <h1>{`You are looking at post: ${params.id}`}</h1>
            <Link href="/about">Back</Link>
            <br></br>
            <h2>{posts.title}</h2>
            <br></br>
            <h3>{posts.body}</h3>
        </div>
    );
}
