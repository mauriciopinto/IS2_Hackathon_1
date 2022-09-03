import React from 'react'
import { RegularForm } from '../components/Form'

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
            <RegularForm handleSubmit={this.submitLogin}>
                <input type="text" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <button type='submit'>Ingresar</button>
            </RegularForm>
        )
    }
}

export default Login;