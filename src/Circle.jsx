
//Destructure the incoming properties
export function Circle({ bgColor = "blue", radius = 50 }) {
    return (
        <div className="circle" style={{ backgroundColor: bgColor, width: radius, height: radius }} ></div>
    )
}