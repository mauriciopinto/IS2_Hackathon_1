import React from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridElement } from '../components/Grid'

class PurchasePage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            id: '',
            items: [],
            date: '',
            status: ''
        }

        
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="1 / 8">
                    <NavBar />
                </GridElement>
                <GridElement gridRow="3 / 9" gridColumn="3 / 7">
                    <h1>Compra {this.state.id}</h1>
                </GridElement>
            </Grid>
        )
    }
}

export default PurchasePage;