import React, { Component } from 'react'

export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            task: null
        }
    }
    
    componentDidMount() {
        const { task } = this.props.match.params

        fetch(`http://localhost:3000/proyects/${task}`)
            .then((task) => {
                this.setState(() => ({ task }))
            })
    }

    render() {
        return (
            <div>
                This is the description of a given task
            </div>
        )
    }
}

export default Task
