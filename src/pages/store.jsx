import React from 'react'
import { RegularList } from '../components/List'

class Store extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            items: [],
            empty: false
        }
    }

    render () {
        return (
            <RegularList elements={this.state.items} />
        )
    }
}

export default Store