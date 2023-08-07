import sheba from '../../assets/images/brends/sheba.png'
import whiskas from '../../assets/images/brends/whiskas.png'
import bakers from '../../assets/images/brends/bakers.png'
import felix from '../../assets/images/brends/felix.png'
import good_boy from '../../assets/images/brends/good_boy.png'
import butcher from '../../assets/images/brends/butcher.png'
import pedigree from '../../assets/images/brends/pedigree.png'

export function BrendsSection(): JSX.Element {
    return (
        <>
            <section className="brends">
                <div className="brends__text caption caption--line">
                    <p className="caption__question">Proud to be part of</p>
                    <h3 className="caption__title">Pet Sellers</h3>
                </div>
                <div className="brends__view view">
                    <a href="!#" className="view__link">
                        <div className="view__sign">View all our sellers &gt;</div>
                    </a>
                </div>
                <ul className="brends__list">
                    <li className="brends__item">
                        <img src={sheba} alt="sheba" />
                    </li>
                    <li className="brends__item">
                        <img src={whiskas} alt="whiskas" />
                    </li>
                    <li className="brends__item">
                        <img src={bakers} alt="bakers" />
                    </li>
                    <li className="brends__item">
                        <img src={felix} alt="felix" />
                    </li>
                    <li className="brends__item">
                        <img src={good_boy} alt="good boy" />
                    </li>
                    <li className="brends__item">
                        <img src={butcher} alt="butchers" />
                    </li>
                    <li className="brends__item">
                        <img src={pedigree} alt="pedigree" />
                    </li>
                </ul>
            </section>
        </>
    )
}