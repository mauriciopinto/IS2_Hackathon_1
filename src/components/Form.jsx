import React from 'react'

export class RegularForm extends React.Component {
    constructor (props) {
        super (props) 
    }

    render () {
        let stext = this.props.submitText.length == 0 ? 'Submit' : this.props.submitText
        return this.props.editable ? (
            <form 
                onSubmit={this.props.handleSubmit} 
                style={{
                    padding: '1.5em'
                }}
            >
                <table>
                    <tbody>
                        {
                            this.props.children.map ((e, i) => {
                                return <tr><td key={i}>{e}</td></tr>
                            })
                        }
                    </tbody>
                </table>
                <button type="submit">{stext}</button>
            </form>
        )
        :
        (
            <form 
                onSubmit={this.props.handleSubmit} 
                style={{
                    padding: '1.5em'
                }}
            >
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

export class FormElement extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        let e = this.props
        if (this.props.editable) {
            return (
                <>
                    <label htmlFor={e.name}>{e.name}</label>
                    <br/>
                    <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
                </>
            )
        } else {
            return (
            <>
                <label htmlFor={e.name} style={{fontWeight: 'bold'}}>{e.name}</label>
                <p id={this.props.id} name={e.name}>{e.value}</p>
            </>
            )
        }
    }
}