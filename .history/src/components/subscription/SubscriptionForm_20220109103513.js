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
            <div className="container my-4 border border-dark rounded text-center">

                <form className="form-data" onSubmit={this.handleChange}>
                    <h4 className="title my-4" style={{ color: '#042801' }}>{t('pages.about.subscription')}</h4>
                    <div className="form-group mx-sm-3 mb-2 text-center" >
                        <input
                            className="form-control-lg"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.firstNameHandler}
                            id="firstName"
                            placeholder={t('pages.about.placeholder1')}
                            style={{ width: '370px', color: '#042801' }}

                        />
                    </div>
                    <div className="form-group mx-sm-3 mb-2 text-center">
                        <input
                            className="form-control-lg"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            id="lastName"
                            placeholder={t('pages.about.placeholder2')}
                            style={{ width: '370px', color: '#042801' }}
                            onChange={this.lastNameHandler} />
                    </div>
                    <div className="form-group mx-sm-3 mb-2 text-center">
                        <input
                            className="form-control-lg"
                            required
                            name="email"
                            type="text"
                            id="email"
                            value={this.state.email}
                            style={{ width: '370px', color: '#042801' }}
                            placeholder={t('pages.about.placeholder3')}
                            onChange={this.emailHandler}
                            aria-describedby="emailHelp" />
                        <small
                            className="form-text text-muted text-center">
                            {t("pages.about.textMuted")}</small>
                    </div>
                    <div className="form-group mx-sm-3 mb-2 text-center">
                        <input
                            className="form-control-lg"
                            required
                            autoComplete="on"
                            name="password"
                            type="password"
                            id="password"
                            value={this.state.password}
                            style={{ width: '370px', color: '#042801' }}
                            placeholder={t('pages.about.password')}
                            onChange={this.passwordHandler} />
                        <small
                            className="form-text text-muted text-center">
                            {t("pages.about.textMuted1")}</small>
                    </div>
                    <div className="form-group mx-sm-3 mb-2 text-center">
                        <input
                            className="btn btn-primary mt-2"
                            style={{ width: '370px' }}
                            type="submit"
                            id="submitButton"
                            value={t("pages.about.submit")}
                            onClick={this.createSubscriber} />
                    </div>
                </form>

            </div >

        )
    }


}



export default withTranslation()(SubscriptionForm)