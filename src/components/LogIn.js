import React, { Component } from 'react';
import './LogIn.css';

const formValid = (formErrors) => {
    let valid = true;

    Object.values(formErrors).forEach(
        val => {
            val.length > 0 && (valid = false)
        }
    );

    return valid
}

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user: null,
            pass: null,
            formErrors: {
                user: "",
                pass: ""
            }
        }
    }
    
    changeHandler = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value)

        switch (name) {
            case 'user':
                formErrors.user = value.length < 6 ? 'Minimum 6 characters required' : "";
                break;
            case 'pswd':
                formErrors.pass = value.length < 8 ? 'Minimum 8 characters required' : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => {
            console.log(name + ' updated; state: ')
            console.log(this.state)
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        if (formValid(this.state.formErrors) && !(this.state.user === null) && !(this.state.pass === null)) {
            console.log(`
            ---Submitting:
                -Username: ${this.state.user}
                -Password: ${this.state.pass}
            `)
        } else {
            console.error('Form Invalid')
        }
        /*
        let infoSent = false
        (backend connection variable).post('HERE GOES LINK OF POSTS', this.toSent)
        */
    }

    render() {
        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Entre a su cuenta</h1>
                    <form onSubmit={this.submitHandler} noValidate>
                        <div className="username">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input 
                                type="text" 
                                className={formErrors.user.length > 0 ? "error" : null}
                                placeholder="Introduzca su usuario"
                                name="user" 
                                noValidate
                                onChange={this.changeHandler}
                            />
                            {formErrors.user.length > 0 && (
                                <span className="errorMessage">
                                    {formErrors.user}
                                </span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                type="password" 
                                className={formErrors.pass.length > 0 ? "error" : null}
                                placeholder="Introduzca su contraseña"
                                name="pswd" 
                                noValidate
                                onChange={this.changeHandler}
                            />
                            {formErrors.pass.length > 0 && (
                                <span className="errorMessage">
                                    {formErrors.pass}
                                </span>
                            )}
                        </div>
                        <div className="logIn">
                        <button type="submit">Entrar</button>
                        { /* on positive response from server,
                             go over to FirstScreen */ }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn
