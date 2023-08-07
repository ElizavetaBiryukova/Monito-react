export function Card(): JSX.Element {
    return (
        <>
            <li className="catalog__card card">
                <img src="./images/pets/image_1.png" alt="dog" className="card__img" />
                <div className="card__text">
                    <h4 className="card__title">MO231 - Pomeranian White</h4>
                    <p className="card__description">
                        <span className="card__gene">
                            Gene: <span className="card__gene card__gene--bold">Male</span>
                        </span>
                        <span className="card__decoration">·</span>
                        <span className="card__age">
                            Age: <span className="card__age card__age--bold">02 months</span>
                        </span>
                    </p>
                    <p className="card__value">
                        <span className="card__price">6.900.000</span>
                        <span className="card__currency">VND</span>
                    </p>
                </div>
            </li>
        </>

    )
}