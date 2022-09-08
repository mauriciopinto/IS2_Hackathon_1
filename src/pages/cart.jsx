import React from 'react'
import { GridElement, Grid } from '../components/Grid'
import { CartList } from '../components/List'
import NavBar from '../components/NavBar'
import { postPurchase } from '../services/purchase'

class CartPage extends React.Component {
    constructor (props) {
        super (props)
    }

    clearCart () {
        localStorage.removeItem ('cart')
        localStorage.setItem ('total', 0)
        window.location.href = "/checkout"
    }

    purchase () {
        let userId = JSON.parse (localStorage.getItem ('user'))._id
        let cart = JSON.parse (localStorage.getItem ('cart'))

        let purchaseData = {
            userId: userId,
            items: cart
        }

        postPurchase (purchaseData)
        .then ((res) => {
            console.log (res)
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>
                <GridElement gridRow="3 / 8" gridColumn="3 / 7" boxStyle={true}>
                    <CartList elements={JSON.parse (localStorage.getItem('cart'))}/>
                </GridElement>
                <GridElement gridRow="9" gridColumn="5">
                    <button onClick={this.clearCart}>Vaciar Carrito</button>
                </GridElement>
                <GridElement gridRow="9" gridColumn="4">
                    <button onClick={this.purchase}>Comprar</button>
                </GridElement>
            </Grid>
        )
    }
}

export default CartPage;