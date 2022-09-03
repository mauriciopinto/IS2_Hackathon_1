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
                                return <tr><td key={i}>{e}</td></tr>
                            })
                        }
                    </tbody>
                </table>
            </form>
        )
    }
}