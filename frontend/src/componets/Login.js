import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props)

        this.state = {email:'', password: '', errors: {}}
    }

    handleForm = (e) => {
        e.preventDefault();
    }

    handleInput = (e) => {
        e.preventDefault();

        const name = e.target.name

        const value = e.target.value

        this.setState({[name]: value})

    }

    render() {

        return(
            <div className="container">
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-header info-color white-text text-center py-4">
                                <strong>Sign in</strong>
                            </div>

                            <div className="card-body px-lg-5 pt-0">
                                <form onSubmit={this.handleForm} className="text-center">
                                    <div className="md-form">
                                        <input type="email" id="materialLoginFormEmail" name="email" onChange={this.handleInput} className="form-control"/>
                                        <label htmlFor="materialLoginFormEmail">E-mail</label>
                                    </div>


                                    <div className="md-form">
                                        <input type="password" id="materialLoginFormPassword" name="password" onChange={this.handleInput} className="form-control"/>
                                        <label htmlFor="materialLoginFormPassword">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
                                                <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember me</label>
                                            </div>
                                        </div>

                                        <div>
                                            <a href="">Forgot password?</a>
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

                                    <p>Not a member?
                                        <a href="">Register</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>

        )
    }
}

export default Login;
