import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <p>This is my Home Page</p>
            <Link href="/about">About</Link>
        </div>
    );
}
