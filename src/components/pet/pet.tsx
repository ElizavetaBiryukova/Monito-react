import firstSlider from '../../assets/images/slider/image 2.png'
import secondSlider from '../../assets/images/slider/image 4.png'
import thirdSlider from '../../assets/images/slider/image 3.png'
import fourthSlider from '../../assets/images/slider/image 5.png'
import fifthSlider from '../../assets/images/slider/image 6.png'
import sixthSlider from '../../assets/images/slider/image 7.png'
import seventhSlider from '../../assets/images/slider/image 3.png'
import { ReactComponent as Facebook } from '../../assets/images/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/images/icons/youtube.svg'
import { ReactComponent as Chat } from '../../assets/images/icons/chat.svg'
import { Currensy } from '../../types/types';

type PetProps = {
    сurrensy: Currensy;
}

export function Pet({ сurrensy }: PetProps): JSX.Element {
    return (
        <>
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
                                src={firstSlider}
                                alt="dog"
                                className="slider__image"
                            />
                        </picture>
                        <div className="slider__mini-iamges">
                            <img
                                className="slider__mini-image slider__mini-image--current"
                                src={secondSlider}
                                alt="dog"
                            />
                            <img
                                className="slider__mini-image"
                                src={thirdSlider}
                                alt="dog"
                            />
                            <img
                                className="slider__mini-image"
                                src={fourthSlider}
                                alt="dog"
                            />
                            <img
                                className="slider__mini-image"
                                src={fifthSlider}
                                alt="dog"
                            />
                            <img
                                className="slider__mini-image"
                                src={sixthSlider}
                                alt="dog"
                            />
                            <img
                                className="slider__mini-image"
                                src={seventhSlider}
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
                <p className="product__code">SKU #1000078</p>
                <h2 className="product__title">Shiba Inu Sepia</h2>
                <p className="product__price">34.000.000 {сurrensy.name}</p>
                <div className="product__button-wrapper">
                    <a className="product__link" href="!#">
                        <div className="product__contact">Contact us</div>
                    </a>
                    <button className="product__chat">
                        <Chat />
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
        </>
    )
}