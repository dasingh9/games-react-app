export function FlexContainer(props) {
    return (
        <div className="flex-container">
            {props.children}
        </div>
    )
}

export function Welcome(props) {

    return (
        <div>
            {props.callback()}
        </div>
    );
}