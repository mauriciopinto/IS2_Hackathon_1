import React from 'react'

export class Grid extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div 
                style={
                {
                    display: 'grid',
                    gridTemplateRows: 'repeat(' + this.props.rows + ', 1fr)',
                    gridTemplateColumns: 'repeat(' + this.props.columns + ', 1fr)',
                    height: '100%',
                    width: '100%',
                }
            }
            >
                {this.props.children}
            </div>
        )
    }
}

export class GridElement extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div
                style={
                    this.props.boxStyle ?
                    {
                        gridRow: this.props.gridRow,
                        gridColumn: this.props.gridColumn,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
                        backgroundColor: 'white',
                        borderRadius: '0.5em',
                        overflow: this.props.overflow
                    }
                    :
                    {
                        gridRow: this.props.gridRow,
                        gridColumn: this.props.gridColumn,
                        overflow: this.props.overflow
                    }
            }
            >
                {this.props.children}
            </div>
        )
    }
}