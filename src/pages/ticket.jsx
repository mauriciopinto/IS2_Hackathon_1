import React from 'react'
import {Grid, GridElement} from '../components/Grid'
import {RegularForm, FormElement} from '../components/Form'
import NavBar from '../components/NavBar'
import { getTicketDataById } from '../services/ticket'

class TicketPage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            userId: '',
            purchaseId: '',
            description: '',
            status: '',
            error: false
        }

        if (!localStorage.getItem('user')) {
            window.location.href = '/login'
        }
    }

    componentDidMount () {
        getTicketDataById (this.props.id)
        .then ((res) => {
            console.log (res)
            this.setState ({
                userId: res.data[0].userId,
                purchaseId: res.data[0].purchaseId,
                description: res.data[0].description,
                status: res.data[0].status
            })
        })
        .catch ((err) => {
            console.log (err)
            this.setState ({
                error: true
            })
        })
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="1 / 9" boxStyle={true}>
                    <NavBar />
                </GridElement>
                <GridElement gridRow="3" gridColumn="1 / 9">
                    <h1>Ticket {this.props.id}</h1>
                </GridElement>
                <GridElement gridRow="4 / 9" gridColumn="3 / 7">
                    {
                        this.state.error ? (
                            <h2>Ocurrió un error al obtener los datos. Es posible que no estés autorizado para accederlos</h2>
                        )
                        :
                        (
                            <RegularForm editable={false} submitText="">
                                <FormElement name="ID de compra :" value={this.state.purchaseId} editable={false}/>
                                <FormElement name="ID de Usuario: " value={this.state.userId} editable={false}/>
                                <FormElement name="Detalle: " value={this.state.description} editable={false} />
                                <FormElement name="Status: " value={this.state.status} editable={false} />
                            </RegularForm>
                        )
                    }
                </GridElement>
            </Grid>
        )
    }

}

export default TicketPage;