import React from 'react'
import NavBar from '../components/NavBar';

class ProfilePage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            username: '',
            email: '',
            role: '',
        }
    }

    render () {
        return (
            <>
            <NavBar />
            <h1>Perfil de {this.state.username}</h1>
            <p>{this.state.username}</p>
            <p>{this.state.email}</p>
            <p>{this.state.role}</p>
            </>
        )
    }
}

export default ProfilePage;