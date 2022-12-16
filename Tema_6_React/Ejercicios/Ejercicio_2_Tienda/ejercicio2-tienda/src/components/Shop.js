import List from "./List"

export default function Shop() {

    const shop = {

        electronica: [
            {id: 27, products: "Televisor", brand: "LG", model: "XP7302", price: 399},
            {id: 28, products: "Equipo HI - FI", brand: "Samsung", model: "VF235", price: 179},
            {id: 29, products: "Televisor", brand: "Sony", model: "Bravia-173", price: 498},
        ],
        alimentacion: [
            {id: 30, products: "Galletas", brand: "María", price: 0.99},
            {id: 31, products: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, products: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, products: "Pasta", brand: "Gallo", price: 0.90},
        ],
        mascotas: [
            {id: 34, products: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, products: "Arena de gato", brand: "Limpior", price: 1.10},
        ]
    };


    return (
        <div>
            <List category="electronica" products={shop.electronica}/>
            <List />
            <List />
        </div>

    )
}





