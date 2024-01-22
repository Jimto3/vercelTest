import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>NextJS app</h1>
            <Link href="/home">Home</Link>
        </div>
    );
}
