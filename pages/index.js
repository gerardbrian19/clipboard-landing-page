import React, {Component} from 'react'
import Head from 'next/head'

export default class Index extends Component {

    render() {
        return (
            <div id="App">
                <Head>
                    <title>Frontend Mentor | clipboard-landing-page</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:400,600&display=swap" rel="stylesheet"/>
                </Head>
                <main id="main-content">
                    <header className="header">
                        <div className="container container--header">
                            <img src="/static/images/logo.svg" alt="Copy Logo" className="header__logo"/>
                            <h1 className="header__title ">
                                A history of everything you copy</h1>
                            <p className="header__description text-gray">Clipboard allows you to track and organize everything you 
                                        copy. Instantly access your clipboard on all your devices.</p>
                            <div className="header__buttons">
                                <a href="" className="btn btn--green">Download for iOS</a>
                                <a href="" className="btn btn--blue">Download for Mac</a>
                            </div>
                        </div>
                    </header>

                    <section id="features">
                        <div className="container padbot">
                            <h2 className="primary-text">Keep track of your snippets</h2>
                            <p className="support-text text-gray">
                                Clipboard instantly stores any item you copy in the cloud, 
                                        meaning you can access your snippets immediately on all your 
                                        devices. Our Mac and iOS apps will help you organize everything.</p>
                        </div>

                        <div className="wide-container">
                            <div className="wide-container__hero">
                                <img src="/static/images/image-computer.png" alt="" className="hero__img"/>
                            </div>
                            <div className="wide-container__content">
                                <h3 className="small-title">Quick Search</h3>
                                <p className="small-title__desc text-gray">
                                    Easily search your snippets by content, category, web address, application, and more.
                                </p>
                                <h3 className="small-title">iCloud Sync</h3>
                                <p className="small-title__desc text-gray">
                                    Instantly saves and syncs snippets across all your devices.
                                </p>
                                <h3 className="small-title">Complete History</h3>
                                <p className="small-title__desc text-gray">
                                    Retrieve any snippets from the first moment you started using the app.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="devices" className="padbot">
                        <h2 className="primary-text">
                            Access Clipboard anywhere</h2>
                        <p className="support-text text-gray padbot">
                            Whether you’re on the go, or at your computer, you can access all your Clipboard 
                                  snippets in a few simple clicks.
                        </p>
                        <div className="container">
                            <img src="/static/images/image-devices.png" alt="Devices supported" className="devices__img"/>
                        </div>
                    </section>

                    <section id="companies" className="padbot">
                        <h2 className="primary-text">
                            Supercharge your workflow</h2>
                        <p className="support-text text-gray padbot">We’ve got the tools to boost your productivity.</p>

                        <div className="container container--icons">
                            <div className="icon__wrapper">
                                <img src="/static/images/icon-text.svg" alt="blacklist icon" className="icon__img"/>
                                <h3 className="icon-title">Create Blacklists</h3>
                                <p className="icon-title__desc">
                                    Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                            </div>
                            <div className="icon__wrapper">
                                <img src="/static/images/icon-blacklist.svg" alt="blacklist icon" className="icon__img"/>
                                <h3 className="icon-title">
                                    Plain text snippets</h3>
                                <p className="icon-title__desc">
                                    Remove unwanted formatting from copied text for a consistent look.
                                </p>
                            </div>
                            <div className="icon__wrapper">
                                <img src="/static/images/icon-preview.svg" alt="blacklist icon" className="icon__img"/>
                                <h3 className="icon-title">Sneak Preview</h3>
                                <p className="icon-title__desc">
                                    Quick preview of all snippets on your Clipboard for easy access.          .</p>
                            </div>
                        </div>

                        <div className="container container--companies">
                            <img src="/static/images/logo-google.png" alt="Company Logo" className="company-logo"/>
                            <img src="/static/images/logo-ibm.png" alt="Company Logo" className="company-logo"/>
                            <img src="/static/images/logo-microsoft.png" alt="Company Logo" className="company-logo"/>
                            <img src="/static/images/logo-hp.png" alt="Company Logo" className="company-logo"/>
                            <img src="/static/images/logo-vector-graphics.png" alt="Company Logo" className="company-logo"/>
                        </div>

                        <div className="container container--clipboard">
                            <h2 className="primary-text">
                                Clipboard for iOS and Mac OS</h2>
                            <p className="support-text text-gray">
                                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                                        and you’re ready to start adding to your clipboard.</p>

                            <div className="header__buttons">
                                <a href="" className="btn btn--green">Download for iOS</a>
                                <a href="" className="btn btn--blue">Download for Mac</a>
                            </div>
                        </div>
                    </section>

                    <footer id="footer">
                        <div className="container container--footer">
                            <img src="/static/images/logo.svg" alt="Footer logo" className="footer-logo"/>
                            <ul className="footer__items">
                                <li>
                                    <a href="" className="footer__links">FAQs</a>
                                </li>
                                <li>
                                    <a href="" className="footer__links">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="footer__items">
                                <li>
                                    <a href="" className="footer__links">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="" className="footer__links">Press Kit</a>
                                </li>
                            </ul>
                            <ul className="footer__items up">
                                <li>
                                    <a href="" className="footer__links">Install Guide</a>
                                </li>
                            </ul>

                            <ul className="footer__items social">
                                <li>
                                    <a href="" className="footer__links">
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__links">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__links">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p className="attribution">
                        Challenge by
                        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                Coded by
                        <a href="#">Gerard Gueco</a>.
                    </p>


                </main>
            </div>
        )
    }
}
