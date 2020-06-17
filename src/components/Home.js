import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            proyects: [],
            errorMsg: ''
        }
    }
    
    componentDidMount() { // this method is only executed the first time the component is mounted
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({proyects: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {
        const { proyects, errorMsg } = this.state

        return (
            <div>
                List of Proyects
                {
                    proyects.length ? 
                        proyects.map(proyect => 
                            <ul>
                                <li key={proyect.id}>
                                    <Link to={"/proyects/"+proyect.id}>{proyect.title}</Link>
                                </li>
                            </ul>) :
                        null
                }
                {
                    errorMsg ? 
                        <div>{errorMsg}</div> :
                        null
                }
            </div>
        )
    }
}

export default Home
