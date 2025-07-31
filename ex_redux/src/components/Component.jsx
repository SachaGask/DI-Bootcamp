function Button(props) {
    return (
        <button className="bouton">{props.children}</button>
    );
}

export default function Component() {
    return (
        <>
            <Button>Texte child</Button>
        </>
    );
}