export default function getID({ params }) {
    return (
        <div>
            <h1>{`Homepage/${params.id}`}</h1>
        </div>
    );
}
