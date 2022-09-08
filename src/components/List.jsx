import React from 'react'

export class RegularList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <ul
            style={{
                listStyleType: 'none'
            }}
            >
                {
                    this.props.elements.map ((e, i) => {
                        return  <li key={i}>
                                    <h3>{e.name}</h3>
                                    <p>{e.description}</p>
                                    <p>Stock: {e.stock}</p>
                                    <button onClick={() => this.props.action(e)}>Comprar</button>
                                    <hr/>
                                </li>
                    })
                }  
            </ul>
        )
    }
}