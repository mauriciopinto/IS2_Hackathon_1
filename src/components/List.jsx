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
                                    <button onClick={() => this.props.action(e)}>Agregar al Carrito</button>
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

export class PurchaseList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return this.props.elements.length === 0 ? (
            <h3>No tienes compras/ventas</h3>
        )
        :
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
                                <h3>ID: <a href={'/purchase/' + e._id}>{e._id}</a></h3>
                                <p><strong>ID de usuario: </strong>{e.userId}</p>
                                <p><strong>Realizada en: </strong>{e.createdAt}</p>
                                <h3>Productos:</h3>
                                <ul>
                                    {
                                        e.items.map ((k, i) => {
                                                return <li
                                                    style={{
                                                        listStyleType: 'none',
                                                        borderRadius: '1em',
                                                        backgroundColor: 'gainsboro'
                                                    }}
                                                >
                                                    <p><strong>Nombre: </strong>{k.name}</p>
                                                    <p><strong>Precio unitario: </strong>S./{k.price}</p>
                                                    <p><strong>Cantidad: </strong>{k.quantity}</p>
                                                </li>
                                                
                                            }
                                        )
                                    }
                                </ul>
                                <br></br>
                                <strong>Importe total: {e.purchaseTotal}</strong>
                                <hr/>
                            </li>
                        )
                    })
                }  
            </ul>
        )
    }
}

export class TicketList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return this.props.elements.length === 0 ? (
            <h3>No tienes tickets</h3>
        )
        :
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
                                <h3>ID: <a href={'/ticket/' + e._id}>{e._id}</a></h3>
                                <p><strong>ID de compra/venta:</strong> <a href={'/purchase/' + e.purchaseId}>{e.purchaseId}</a></p>
                                <p><strong>ID de usuario: </strong>{e.userId}</p>
                                <p><strong>Detalle: </strong>{e.description}</p>
                                <p><strong>Status: </strong>{e.status}</p> 
                                <hr></hr>
                            </li>
                        )
                    })
                }  
            </ul>
        )
    }
}

export class PurchaseItemsList extends React.Component {
    constructor (props) {
        super (props)
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
                                <h3><a href={'/product/' + e.productId._id}>{e.name}</a></h3>
                                <p>Precio unitario: {e.price}</p>
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
            <h3>No hay productos</h3>
        )
    }
}