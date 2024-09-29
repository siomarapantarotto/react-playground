export default function Title({title, subtitle}) {

    return (
        // short way to create a fragment on elements that don't carry props inside
        <>
            <h1 className="title">{title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </>
    )
}

/*
// using props instead of destructuring
export default function Title(props) {

    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    )
}
*/