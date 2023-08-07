import { ReactComponent as Facebook } from '../../assets/images/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/images/icons/youtube.svg'
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg'

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__subcribe subcribe">
                        <p className="subcribe__title">
                            Register now so you don't miss our programs
                        </p>
                        <div className="subcribe__form">
                            <input
                                type="text"
                                className="subcribe__input"
                                defaultValue="Enter your Email"
                            />
                            <button className="subcribe__button">Subcribe Now</button>
                        </div>
                    </div>
                    <div className="footer__menu ">
                        <nav className="footer__nav">
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="./index.html" className="footer__link">
                                        Home
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="./category.html" className="footer__link">
                                        Category
                                    </a>
                                </li>
                                <li className="footer__nav-item">About</li>
                                <li className="footer__nav-item">Contact</li>
                            </ul>
                        </nav>
                        <div className="footer__icons icons">
                            <ul className="icons__list">
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <Facebook />
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <Instagram />
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__info">
                        <div className="footer__copyright">
                            © 2022 Monito. All rights reserved.
                        </div>
                        <div className="footer__logo logo logo--footer">
                            <a href="!#" className="logo__link">
                                <div className="logo__wrapper">
                                    <Logo />
                                    <span className="logo__caption">Pets for Best</span>
                                </div>
                            </a>
                        </div>
                        <ul className="footer__service service__list">
                            <li className="service__item">Terms of Service</li>
                            <li className="service__item">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}