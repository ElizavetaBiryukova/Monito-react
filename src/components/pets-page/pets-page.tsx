export function PetsPage(): JSX.Element {
    return (
        <>
            <header className="header header--category header--product">
                <div className="header__menu menu">
                    <div className="menu__logo logo">
                        <a href="./index.html" className="logo__link">
                            <div className="logo__wrapper">
                                <svg className="logo__svg">
                                    <use xlinkHref="#logo" />
                                </svg>
                                <span className="logo__caption">Pets for Best</span>
                            </div>
                        </a>
                    </div>
                    <div className="menu__burger burger">
                        <div className="burger__item" />
                        <div className="burger__item" />
                        <div className="burger__item" />
                    </div>
                    <nav className="menu__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="./index.html" className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="./category.html" className="nav__link">
                                    Category
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu__search search">
                        <div className="search__logo">
                            <svg className="search__svg">
                                <use xlinkHref="#glass" />
                            </svg>
                        </div>
                        <input
                            className="search__input"
                            type="search"
                            defaultValue="Search something here!"
                        />
                    </div>
                    <div className="menu__join-community">
                        <a href="!#" className="menu__link">
                            Join the community
                        </a>
                    </div>
                    <div className="menu__currency currency">
                        <img
                            src="./images/currency/vnd.svg"
                            alt="currency"
                            className="currency__logo"
                        />
                        <div className="currency__name">VND</div>
                        <div className="currency__pointer">˅</div>
                    </div>
                </div>
            </header>
            <main className="main">
                <h1 className="visually-hidden">Monito - pet shop, product detail</h1>
                <section className="product">
                    <div className="product__path path">
                        Home &gt; Dog &gt; Large Dog &gt; Shiba Inu Sepia
                    </div>
                    <div className="product__slider slider">
                        <button className="slider__control slider__control--left">&lt;</button>
                        <button className="slider__control slider__control--right">&gt;</button>
                        <div className="slider__images-album">
                            <picture>
                                <img
                                    src="./images/slider/image 2.png"
                                    alt="dog"
                                    className="slider__image"
                                />
                            </picture>
                            <div className="slider__mini-iamges">
                                <img
                                    className="slider__mini-image slider__mini-image--current"
                                    src="./images/slider/image 4.png"
                                    alt="dog"
                                />
                                <img
                                    className="slider__mini-image"
                                    src="./images/slider/image 3.png"
                                    alt="dog"
                                />
                                <img
                                    className="slider__mini-image"
                                    src="./images/slider/image 5.png"
                                    alt="dog"
                                />
                                <img
                                    className="slider__mini-image"
                                    src="./images/slider/image 6.png"
                                    alt="dog"
                                />
                                <img
                                    className="slider__mini-image"
                                    src="./images/slider/image 7.png"
                                    alt="dog"
                                />
                                <img
                                    className="slider__mini-image"
                                    src="./images/slider/image 3.png"
                                    alt="dog"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="product__guarantee">
                        <div className="product__health">100% health guarantee for pets</div>
                        <div className="product__indification">
                            100% guarantee of pet identification
                        </div>
                    </div>
                    <div className="product__share share">
                        <p className="share__text">
                            Share <span className="share__colon">:</span>
                        </p>
                        <div className="share__icons icons icons--grey">
                            <ul className="icons__list">
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#twitter" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#youtube" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="product__code">SKU #1000078</p>
                    <h2 className="product__title">Shiba Inu Sepia</h2>
                    <p className="product__price">34.000.000 VND</p>
                    <div className="product__button-wrapper">
                        <a className="product__link" href="!#">
                            <div className="product__contact">Contact us</div>
                        </a>
                        <button className="product__chat">
                            <svg className="product__svg">
                                <use xlinkHref="#chat" />
                            </svg>
                            Chat with Monito
                        </button>
                    </div>
                    <div className="product__info info">
                        <h3 className="info__title">Information</h3>
                        <table className="info__table">
                            <tbody className="info__body">
                                <tr className="info__line">
                                    <td className="info__column">SKU</td>
                                    <td className="info__column">: #1000078</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Gender</td>
                                    <td className="info__column">: Female</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Age</td>
                                    <td className="info__column">: 2 Months</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Size</td>
                                    <td className="info__column">: Small</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Color</td>
                                    <td className="info__column">: Appricot &amp; Tan</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Vaccinated</td>
                                    <td className="info__column">: Yes</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Dewormed</td>
                                    <td className="info__column">: Yes</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Cert</td>
                                    <td className="info__column">: Yes (MKA)</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Microchip</td>
                                    <td className="info__column">: Yes</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Location</td>
                                    <td className="info__column">: Vietnam</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Published Date</td>
                                    <td className="info__column">: 12-Oct-2022</td>
                                </tr>
                                <tr className="info__line">
                                    <td className="info__column">Additional Information</td>
                                    <td className="info__column">
                                        : Pure breed Shih Tzu. Good body structure. With MKA cert and
                                        Microchip. Father from champion lineage.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="customer">
                    <h2 className="customer__title">Our lovely customer</h2>
                    <div className="customer__slider">
                        <div className="customer__slider-images">
                            <img
                                className="customer__image"
                                src="./images/customer/image_1.png"
                                alt="customer"
                            />
                            <img
                                className="customer__image"
                                src="./images/customer/image_2.png"
                                alt="customer"
                            />
                            <img
                                className="customer__image"
                                src="./images/customer/image_3.png"
                                alt="customer"
                            />
                            <img
                                className="customer__image"
                                src="./images/customer/image_4.png"
                                alt="customer"
                            />
                            <img
                                className="customer__image"
                                src="./images/customer/image_5.png"
                                alt="customer"
                            />
                        </div>
                        <div className="customer__pagination">
                            <div className="customer__dot customer__dot--current-left" />
                            <div className="customer__dot customer__dot--current-right" />
                            <div className="customer__dot" />
                            <div className="customer__dot" />
                            <div className="customer__dot" />
                            <div className="customer__dot" />
                            <div className="customer__dot" />
                        </div>
                    </div>
                </section>
                <section className="see-more">
                    <div className="see-more__text caption">
                        <p className="caption__question">Whats new?</p>
                        <h3 className="caption__title">See more puppies</h3>
                    </div>
                    <ul className="see-more__catalog catalog__cards">
                        <li className="catalog__card card">
                            <img
                                src="./images/pets/image_1.png"
                                alt="dog"
                                className="card__img"
                            />
                            <div className="card__text">
                                <h4 className="card__title">MO231 - Pomeranian White</h4>
                                <p className="card__description">
                                    <span className="card__gene">
                                        Gene:<span>Male</span>
                                    </span>
                                    <span className="card__decoration">·</span>
                                    <span className="card__age">
                                        Age:<span>02 months</span>
                                    </span>
                                </p>
                                <p className="card__value">
                                    <span className="card__price">6.900.000</span>
                                    <span className="card__currency">VND</span>
                                </p>
                            </div>
                        </li>
                        <li className="catalog__card card">
                            <img
                                src="./images/pets/image_2.png"
                                alt="dog"
                                className="card__img"
                            />
                            <div className="card__text">
                                <h4 className="card__title">MO502 - Poodle Tiny Yellow</h4>
                                <p className="card__description">
                                    <span className="card__gene">
                                        Gene:<span>Female</span>
                                    </span>
                                    <span className="card__decoration">·</span>
                                    <span className="card__age">
                                        Age:<span>02 months</span>
                                    </span>
                                </p>
                                <p className="card__value">
                                    <span className="card__price">3.900.000</span>
                                    <span className="card__currency">VND</span>
                                </p>
                            </div>
                        </li>
                        <li className="catalog__card card">
                            <img
                                src="./images/pets/image_3.png"
                                alt="dog"
                                className="card__img"
                            />
                            <div className="card__text">
                                <h4 className="card__title">MO102 - Poodle Tiny Sepia</h4>
                                <p className="card__description">
                                    <span className="card__gene">
                                        Gene:<span>Male</span>
                                    </span>
                                    <span className="card__decoration">·</span>
                                    <span className="card__age">
                                        Age:<span>02 months</span>
                                    </span>
                                </p>
                                <p className="card__value">
                                    <span className="card__price">4.000.000</span>
                                    <span className="card__currency">VND</span>
                                </p>
                            </div>
                        </li>
                        <li className="catalog__card card">
                            <img
                                src="./images/pets/image_4.png"
                                alt="dog"
                                className="card__img"
                            />
                            <div className="card__text">
                                <h4 className="card__title">MO512 - Alaskan Malamute Grey</h4>
                                <p className="card__description">
                                    <span className="card__gene">
                                        Gene:<span>Male</span>
                                    </span>
                                    <span className="card__decoration">·</span>
                                    <span className="card__age">
                                        Age:<span>02 months</span>
                                    </span>
                                </p>
                                <p className="card__value">
                                    <span className="card__price">8.900.000</span>
                                    <span className="card__currency">VND</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
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
                                        <svg className="icons__svg">
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#twitter" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="icons__item">
                                    <a className="icons__link" href="">
                                        <svg className="icons__svg">
                                            <use xlinkHref="#youtube" />
                                        </svg>
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
                                    <svg className="logo__svg">
                                        <use xlinkHref="#logo" />
                                    </svg>
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