import React from "react";
import { RegularForm } from "../components/Form";
import { Grid, GridElement } from "../components/Grid";
import { NoticeBox } from "../components/Notice"
import { postUserRegister } from '../services/user'

let passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

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

        this.checkPassword = this.checkPassword.bind(this)
        this.matchPasswords = this.matchPasswords.bind(this)
        this.submitRegister = this.submitRegister.bind(this)
    }

    checkPassword (e) {
        let password = e.target.value

        if (password.match(passwordRegex)) {
            this.setState({
                errorMessage: '', 
                showError: false,
                password: password,
                validPassword: true
            })
        } else {
            this.setState({
                errorMessage: <div>
                                <p>La contraseña de 8 o más caracteres debe contener al menos: </p>
                                <ul>
                                    <li>1 Mayúscula</li>
                                    <li>1 Minúscula</li>
                                    <li>1 Número</li>
                                </ul>
                               </div>,
                showError: true,
                password: false,
                validPassword: false
            })
        }
    }

    matchPasswords (e) {
        let secondPassword = e.target.value

        if (secondPassword === this.state.password) {
            this.setState({
                repeatedPassword: true,
                showError: false,
                errorMessage: <></>
            })
        } else {
            this.setState({
                repeatedPassword: false,
                showError: true,
                errorMessage: <p>Las contraseñas no son iguales</p>
            })
        }
    }

    submitRegister (e) {
        e.preventDefault()
        
        let showError = this.state.showError
        let repeatedPassword = this.state.repeatedPassword
        let validPassword = this.state.validPassword
        
        if (!showError || repeatedPassword || validPassword) {
        
            let userData = {
                username: e.target[0].value,
                email: this.state.email,
                password: this.state.password,
                role: 'Client'
            }

            postUserRegister (userData)
            .then ((res) => {
                if (res.status == 200) {
                    window.location.href = '/login'
                }
                else {
                    console.log("bad request")
                }
            })
            .catch ((err) => console.log (err))
        }
    }

    render () {
        return (
            <Grid rows="10" columns="8">
                <GridElement gridRow="1 / 2" gridColumn="2 / 8">
                    <h1>Ingresa tus datos y regístrate</h1>
                </GridElement>
                <GridElement gridRow="3 / 8" gridColumn="3 / 7" boxStyle={true}>
                    <RegularForm handleSubmit={this.submitRegister}>
                        <h3>Llena tus datos</h3>
                        <input type="text" placeholder="Usuario" name="uname"/>
                        <input type="email" placeholder="Correo" name="email"/>
                        <input type="password" placeholder="Contraseña" onChange={this.checkPassword} name="pwd"/>
                        <input type="password" placeholder="Repita su Contraseña" onChange={this.matchPasswords} name="pwdRepeat"/>
                        <button type="submit">Registrarse</button>
                    </RegularForm>
                    <NoticeBox show={this.state.showError}>
                        {
                            this.state.errorMessage
                        }
                    </NoticeBox>
                </GridElement>
            </Grid>
        )
    }
}

export default Register;