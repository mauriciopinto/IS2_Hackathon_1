import React from 'react'
import { getAllTickets, getTicketsByUserId } from '../services/ticket'
import { Grid, GridElement } from '../components/Grid'
import NavBar from '../components/NavBar'
import { TicketList } from '../components/List'

class TicketListPage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            items: []
        }

        if (!localStorage.getItem('user')) {
            window.location.href = '/login'
        }
    }

    componentDidMount () {
        let userData = JSON.parse (localStorage.getItem('user'))

        if (userData.role === "ADMIN"){
            getAllTickets ()
            .then ((res) => {
                console.log (res)
                this.setState ({
                    items: res.data
                })
            })
            .catch ((err) => {
                console.log (err)
            })
        } else {
            getTicketsByUserId (userData._id)
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
                <GridElement gridRow="1 / 2" gridColumn="1 / 9">
                    <NavBar />
                </GridElement>

                <GridElement gridRow="2" gridColumn="1 / 9">
                    <h1>Tickets</h1>
                </GridElement>

                <GridElement gridRow="3 / 11" gridColumn="1 / 9" overflow="scroll" boxStyle={true}>
                    <TicketList elements={this.state.items} />
                </GridElement>
            </Grid>
        )
    }
}

export default TicketListPage;