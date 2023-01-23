
export default function ShoppingList(props) {    

  const {category, products} = props;

  return (
    <div>
      <h2>{category}</h2>
      <ul className="list-group">{products.map(({id, name, brand, model, price}) => {
            return (<li key={id} className="list-group-item"> 
                      {name} {brand} {model}. Price: {price}$
                    </li>)
      })}
      </ul>
    </div>
  )
}

// Deconstrucion de objetos en JS
// export default function List(products, category) {
//   return (
//     <div>
//       <h2>{category}</h2>
//       <ul>{products.map(product => {
//           return (<li>{id} {name} {model}. Price: {price} $</li>)
//         })}
//       </ul>
//     </div>
//   )
// }



