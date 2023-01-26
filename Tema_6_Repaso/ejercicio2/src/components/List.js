
export default function List(props) {
    
    const {category, products} = props;
    return(
        <div>
            <h2>{category}</h2>
            <ul className="list-group">
                {
                    products.map(({id, brand, model, price}) => (
                        <li className="list-group" key={id}>
                            {brand} {model} Precio: {price}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}