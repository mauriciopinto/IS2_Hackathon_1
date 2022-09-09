import React from 'react'

let notLoggedNavItems = [
    {
        text: 'Inicio',
        href: '/'
    },
    {
        text: 'Iniciar Sesión',
        href: '/login'
    }
]

let clientNavItems = [
    {
        text: 'Inicio',
        href: '/'
    },
    {
        text: 'Perfil',
        href: '/user'
    },
    {
        text: 'Mis Compras',
        href: '/purchase_list/'
    },
    {
        text: 'Mis Tickets',
        href: '/ticket_list'
    },
    {
        text: 'Cerrar Sesión',
        href: '/logout'
    }
]

let adminNavItems = [
    {
        text: 'Inicio',
        href: '/'
    },
    {
        text: 'Perfil',
        href: '/user'
    },
    {
        text: 'Ventas',
        href: '/purchase_list'
    },
    {
        text: 'Tickets',
        href: '/ticket_list'
    },
    {
        text: 'Cerrar Sesión',
        href: '/logout'
    }
]

class NavBar extends React.Component {
    constructor (props) {
        super (props)

        let user = localStorage.getItem('user')
        if (user) {
            user = JSON.parse (user)
            if (user.role === "ADMIN") {
                this.state = {
                    navItems: adminNavItems
                }
            } else {
                this.state = {
                    navItems: clientNavItems
                }
            }
        } else {
            this.state = {
                navItems: notLoggedNavItems
            }
        }
    }

    render () {
        return (
            <nav>
                <ul style={{
                    listStyleType: 'none',
                    
                }}>
                    {
                        this.state.navItems.map ((e, i) => {
                            return <li key={i} style={{
                                float: 'left',
                                padding: '1em'
                            }}><a href={e.href}>{e.text}</a></li>
                        })
                    }
                    <li><a href='/checkout'>{'Carrito(' + localStorage.getItem('total') + ')'}</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;