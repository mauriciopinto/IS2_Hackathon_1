import React from 'react'
import { RegularList } from '../components/List'
import NavBar from '../components/NavBar'
import { Grid, GridElement } from '../components/Grid'

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
            <Grid rows="10" columns="8">
                <GridElement gridRow="1" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>
                <GridElement gridRow="2" gridColumn="1 / 9">
                    <h1>Compra en la tienda</h1>
                </GridElement>
                <GridElement gridRow="3 / 10" gridColumn="1 / 9">
                    <RegularList elements={this.state.items} action={this.addToCart}/>
                </GridElement>
            </Grid>
        </>
        )
    }
}

export default Store