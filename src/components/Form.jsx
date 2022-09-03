import React from 'react'

export class RegularForm extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <form onSubmit={this.props.onSubmit}>
                <table>
                    <tbody>
                        {
                            this.props.children.map ((e, i) => {
                                return <td key={i}>e</td>
                            })
                        }
                    </tbody>
                </table>
            </form>
        )
    }
}