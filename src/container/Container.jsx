export function Container(props) {
    return (
        <div style={{ border: "solid 1px #ccc" }}>
            <div style={{ backgroundColor: "#ccc" }}>
                <span>{props.title}</span>
            </div>
            <div>{props.children}</div>
        </div>
    )
}