import React from "react";
import { RegularForm } from "../components/Form";

class Register extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            email: '',
            password: '',
            repeatedPassword: '',
            validPassword: true,
            showError: false,
            errorMessage: ''
        }
    }

    render () {
        return (
            <RegularForm>
                <input type="text" placeholder="Usuario" />
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <input type="contraseña" placeholder="Repita su Contraseña" />
                <button type="submit">Registrarse</button>
            </RegularForm>
        )
    }
}

export default Register