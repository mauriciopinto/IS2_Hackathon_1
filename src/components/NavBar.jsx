import React from 'react'

let NavItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Perfil',
        href: '/user'
    },
    {
        text: 'Mis Compras',
        href: '/user'
    },
    {
        text: 'Mis Tickets',
        href: '/tickets'
    },
    {
        text: 'Cerrar Sesión',
        href: '/logout'
    }
]

class NavBar extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            navItems: NavItems
        }
    }

    render () {
        return (
            <nav>
                <ul style={{
                    listStyleType: 'none',
                    
                }}>
                    {
                        NavItems.map ((e, i) => {
                            return <li key={i} style={{
                                float: 'left',
                                padding: '1em'
                            }}><a href={e.href}>{e.text}</a></li>
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default NavBar;