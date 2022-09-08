import React from 'react'

export class NoticeBox extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return this.props.show ? (
            <div style={{
                backgroundColor: 'LightPink',
                color: 'red',
                border: '2px solid red',
                fontWeight: 'bold',
                margin: '1em',
                padding: '1em'
            }}>
                {this.props.children}
            </div>
        )
        :
        (
            <></>
        )
    }
}