export default function homeLayout({ children }) {
    return (
        <div>
            <h1>This will always render at /home/x</h1>
            <h2>{children}</h2>
        </div>
    );
}
