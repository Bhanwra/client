export default function TextSection(props) {
    return (
        <div className="mb-5">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}