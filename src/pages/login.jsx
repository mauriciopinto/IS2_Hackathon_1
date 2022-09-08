import React from 'react'
import { RegularForm } from '../components/Form'
import { Grid, GridElement } from '../components/Grid'

class Login extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            showError: false
        }
    }

    submitLogin (e) {
        e.preventDefault ()
        console.log ("Logging in", e)
    }

    render () {
        return (
            <Grid rows="10" columns="8">

                <GridElement gridRow="1 / 2" gridColumn="4 / 6">
                    <h1
                        style={{
                            verticalAlign: 'middle'
                        }}
                    >Ingresa a la tienda</h1>
                </GridElement>

                <GridElement gridRow="3" gridColumn="4 / 6" boxStyle={true}>
                    <RegularForm handleSubmit={this.submitLogin}>
                        <h3>Ingresa tus datos</h3>
                        <input type="text" placeholder="Usuario" name='uname'/>
                        <input type="password" placeholder="Contraseña" name='pwd'/>
                        <button 
                            type='submit' 
                        >Ingresar</button>
                        <a href="/register">Registrarse</a>
                    </RegularForm>
                </GridElement>

            </Grid>
        )
    }
}

export default Login;