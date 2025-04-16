
export default function Productcard(props) {
    return (
        <div className="product-card">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button>Add to Card</button>
        </div>
    )
}