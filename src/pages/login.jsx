import React from 'react'
import { FormElement, RegularForm } from '../components/Form'
import { Grid, GridElement } from '../components/Grid'
import { userLogin } from '../services/user'
import NavBar from '../components/NavBar'

class Login extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            showError: false
        }
    }

    submitLogin (e) {
        e.preventDefault()

        let loginData = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        userLogin (loginData)
        .then ((res) => {
            if (res.status === 200) {
                localStorage.setItem('total', 0)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', res.data.token)
                window.location.href = "/"
            } else {
                console.log (res)
            }
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
                <GridElement gridRow="3" gridColumn="4 / 6">
                    <h1
                        style={{
                            verticalAlign: 'middle'
                        }}
                    >Ingresa a la tienda</h1>
                </GridElement>

                <GridElement gridRow="4 / 8" gridColumn="3 / 7" boxStyle={true}>
                    <h3>Ingresa tus datos</h3>
                    <RegularForm handleSubmit={this.submitLogin} editable={true} submitText="Ingresar">
                        <FormElement type="text" placeholder="Usuario" name='Username' editable={true}/>
                        <FormElement type="password" placeholder="Contraseña" name='Password' editable={true}/>
                    </RegularForm>
                </GridElement>
                <GridElement gridRow="9" gridColumn="5 / 5">
                    <a href="/register" style={{margin: '1em'}}>Registrarse</a>
                </GridElement>

            </Grid>
        )
    }
}

export default Login;