import React from 'react'
import { FormElement, RegularForm } from '../components/Form'
import { Grid, GridElement } from '../components/Grid'
import { PurchaseList } from '../components/List'
import NavBar from '../components/NavBar'
import { getAllPurchases, getPurchasesByUserId } from '../services/purchase'

class PurchaseListPage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            purchaseId: '',
            items: []
        }

        if (!localStorage.getItem('user')) {
            window.location.href = '/login'
        }
    }

    componentDidMount () {
        let userData = JSON.parse (localStorage.getItem('user'))

        if (userData.role === "ADMIN"){
            getAllPurchases ()
            .then ((res) => {
                this.setState ({
                    items: res.data
                })
            })
            .catch ((err) => {
                console.log (err)
            })
        } else {
            getPurchasesByUserId (userData._id)
            .then ((res) => {
                this.setState({
                    items: res.data
                })
            })
            .catch ((err) => {
                console.log (err)
            })
        }
        
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>

                <GridElement gridRow="2" gridColumn="1 / 9">
                    <h1>Compras</h1>
                </GridElement>

                <GridElement gridRow="3 / 11" gridColumn="1 / 9" overflow="scroll" boxStyle={true}>
                    <PurchaseList elements={this.state.items} />
                </GridElement>
            </Grid>
        )
    }
}

export default PurchaseListPage;