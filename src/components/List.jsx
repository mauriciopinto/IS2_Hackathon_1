import React from 'react'

export class RegularList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <ul
            style={{
                listStyleType: 'none',
            }}
            >
                {
                    this.props.elements.map ((e, i) => {
                        return  <li key={i}>
                                    <h3><a href={'/product/' + e._id}>{e.name}</a></h3>
                                    <p>{e.description}</p>
                                    <p>Stock: {e.stock}</p>
                                    <p>Precio: {e.price}</p>
                                    <button onClick={() => this.props.action(e)}>Comprar</button>
                                    <hr/>
                                </li>
                    })
                }  
            </ul>
        )
    }
}

export class CartList extends React.Component {
    constructor (props) {
        super (props)
        console.log (props.elements)
    }

    render () {
        return this.props.elements ? 
         (
            <ul
                style={{
                listStyleType: 'none',
            }}
            >
                {
                    this.props.elements.map ((e, i) => {
                        return (
                            <li key={i}>
                                <h3><a href={'/product/' + e.productId}>{e.productName}</a></h3>
                                <p>Cantidad: {e.quantity}</p>
                                <hr/>
                            </li>
                        )
                    })
                }  
            </ul>
        )
        :
        (
            <h3>No hay productos en el carrito</h3>
        )
    }
}