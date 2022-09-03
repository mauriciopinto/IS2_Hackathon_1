import React from 'react'
import { RegularList } from '../components/List'

let sampleItems = [
    {
        id: '1',
        name: 'Pelota de futbol',
        description: 'Una pelota para jugar futbol',
        stock: 10
    },
    {
        id: '2',
        name: 'Pelota de basquet',
        description: 'Una pelota para jugar basquet',
        stock: 5
    },
    {
        id: '3',
        name: 'Pelota de voley',
        description: 'Una pelota para jugar voley',
        stock: 20
    }
]

class Store extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            items: sampleItems,
            empty: false,
            cartAmount: 0,
        }
    }

    addToCart (item) {
        console.log (item)
    }

    render () {
        return (
        <>
            <h1>Compra en la tienda</h1>
            <a href="/logout">Cerrar Sesion</a>
            <RegularList elements={this.state.items} action={this.addToCart}/>
        </>
        )
    }
}

export default Store