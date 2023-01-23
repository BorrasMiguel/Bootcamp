function Lista(props){
    return (
        <>
            <h2>{props.categoria}</h2>
            {
                props.productos.map(({id, marca, modelo, precio, producto})=>{
                    return <p key={id}>{producto} {marca} {modelo} - Precio: {precio} €</p>
                })
            }
        </>
        );
}

export default Lista;