import {useParams} from "react-router-dom";

const product = () => {
    const {id} = useParams();

    return (
        <>
        <h2>Product N°{id}</h2>
        <Link to={"/shop"}>Continue Shopping</Link>
        </>)
}