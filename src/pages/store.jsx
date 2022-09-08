import React from 'react'
import { RegularList } from '../components/List'
import NavBar from '../components/NavBar'
import { Grid, GridElement } from '../components/Grid'
import { getAllProducts } from '../services/product'

class Store extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            items: [],
            empty: false,
            cartAmount: 0,
        }
    }

    componentDidMount () {
        getAllProducts ()
        .then ((res) => {
            this.setState({
                items: res.data
            })
        })
    }

    addToCart (item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        let present = false
        for (let i = 0; i < cart.length; ++i) {
            let p = cart[i]
            if (p.productId === item._id) {
                p.quantity = p.quantity + 1
                present = true
            }
        }
        if (!present) {
            cart.push ({
                productId: item._id,
                productName: item.name,
                quantity: 1
            })
        }
        localStorage.setItem('cart', JSON.stringify (cart))
        let total = parseInt (localStorage.getItem ('total')) || 0
        total = total + 1
        localStorage.setItem ('total', total)
        window.location.href = '/'
    }

    render () {
        return (
        <>
            <Grid rows="10" columns="8">
                <GridElement gridRow="1" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>
                <GridElement gridRow="2" gridColumn="1 / 9">
                    <h1>Compra en la tienda</h1>
                </GridElement>
                <GridElement gridRow="3 / 11" gridColumn="1 / 9" overflow="scroll">
                    <RegularList elements={this.state.items} action={this.addToCart}/>
                </GridElement>
            </Grid>
        </>
        )
    }
}

export default Store