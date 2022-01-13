import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './SubcriptionForm.scss';


export class SubscriptionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            hasSubscription: false,
            name: '',
            data: {},
            key: ""

        }

        this.handleChange = this.handleChange.bind(this);
        this.firstNameHandler = this.firstNameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }


    firstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value

        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleChange = (event) => {

        console.log(this.state);
        alert(`${this.state.firstName} ${this.state.lastName} Subscribed successfully! `)

        this.state({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            hasSubscription: true,
        })
        event.preventDefault();
    }


    render() {
        const { t } = this.props;

        return (
            <div className="container mb-4">
                <div className="row justify-content-center mt5">
                    <div className="col-lg-4 col-md-8 col-sm-8">
                        <div className="card">
                            <div className="card-title text-center">
                                <h4 className="form-title my-4">{t('pages.about.subscription')}</h4>
                                <div className="card-body">
                                    <form className="form-data" onSubmit={this.handleChange}>
                                        <div className="form-group mx-sm-3 mb-4" >
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.firstNameHandler}
                                                id="firstName"
                                                placeholder={t('pages.about.placeholder1')}
                                            />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="lastName"
                                                value={this.state.lastName}
                                                id="lastName"
                                                placeholder={t('pages.about.placeholder2')}
                                                onChange={this.lastNameHandler} />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-4">
                                            <input
                                                className="form-control"
                                                required
                                                name="email"
                                                type="text"
                                                id="email"
                                                value={this.state.email}
                                                placeholder={t('pages.about.placeholder3')}
                                                onChange={this.emailHandler}
                                                aria-describedby="emailHelp" />
                                            <div className="alert-email ">
                                                <p
                                                    className="form-text text-danger text-muted fs-6 ">
                                                    {t("pages.about.textMuted")}</p>
                                            </div>
                                        </div>
                                        <div className="form-group mx-sm-3 mb-4">
                                            <input
                                                className="form-control"
                                                required
                                                autoComplete="on"
                                                name="password"
                                                type="password"
                                                id="password"
                                                value={this.state.password}
                                                placeholder={t('pages.about.password')}
                                                onChange={this.passwordHandler} />
                                            <div className="alert-password">
                                                <small
                                                    className="form-text text-muted">
                                                    {t("pages.about.textMuted1")}</small>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <input
                                                className="btn btn-secondary w-80 mt-2"
                                                type="submit"
                                                id="submitButton"
                                                value={t("pages.about.submit")}
                                                onClick={this.createSubscriber} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        )
    }


}



export default withTranslation()(SubscriptionForm)