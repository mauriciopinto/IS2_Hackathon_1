import React from 'react'

export class RegularList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <ul>
                {
                    this.props.items.map ((e, i) => {
                        return <li key={i}>e</li>
                    })
                }  
            </ul>
        )
    }
}