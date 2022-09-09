import React from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridElement } from '../components/Grid'
import { FormElement, RegularForm } from '../components/Form'
import { getPurchaseDataById } from '../services/purchase'
import { PurchaseItemsList } from '../components/List'
import { postTicket } from '../services/ticket'

class PurchasePage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            id: props.id,
            items: [],
            date: '',
            userId: '',
            total: '',
            error: false
        }

        this.createTicket = this.createTicket.bind (this)

        if (!localStorage.getItem('user')) {
            window.location.href = '/login'
        }
    }

    componentDidMount () {
        getPurchaseDataById (this.props.id)
        .then ((res) => {
            console.log (res)
            this.setState ({
                userId: res.data.userId,
                date: res.data.createdAt,
                total: res.data.purchaseTotal,
                items: res.data.items
            })
        })
        .catch ((err) => {
            console.log (err)
            this.setState ({
                error: true
            })
        })
    }

    createTicket (e) {
        e.preventDefault()
        console.log (e)

        let ticketData = {
            purchaseId: this.props.id,
            userId: JSON.parse (localStorage.getItem('user'))._id,
            description: e.target[0].value
        }

        postTicket (ticketData)
        .then ((res)=> {
            console.log (res)
            window.location.href = '/'
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
                <GridElement gridRow="3" gridColumn="1 / 9">
                    <h1>Compra {this.props.id}</h1>
                </GridElement>

                <GridElement gridRow="4 / 11" gridColumn="1 / 7" overflow="scroll" boxStyle={true}>

                {
                        this.state.error ? (
                            <h2>Ocurrió un error al obtener los datos. Es posible que no estés autorizado para accederlos</h2>
                        )
                        :
                        (
                            <RegularForm editable={false} submitText="">
                                <FormElement name="Realizado en :" value={this.state.date} editable={false}/>
                                <FormElement name="ID de Usuario: " value={this.state.userId} editable={false}/>
                                <PurchaseItemsList elements={this.state.items} />
                                <FormElement name="Total" value={this.state.total} editable={false}/>
                            </RegularForm>
                        )
                    
                }
                </GridElement>
                
                <GridElement gridRow="4" gridColumn="7 / 9">
                    <strong>Envía un reclamo</strong>
                </GridElement>

                <GridElement gridRow="4 / 11" gridColumn="7 / 9">
                    <RegularForm handleSubmit={this.createTicket} submitText="Enviar" editable={true}>
                        <label htmlFor="Ticket">Detalles</label>
                        <textArea placeholder="Escribe tu reclamo" name="Ticket" style={{height: '300px'}}/>
                    </RegularForm>
                </GridElement>
            </Grid>
        )
    }
}

export default PurchasePage;