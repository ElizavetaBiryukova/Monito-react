export function CardProduct(): JSX.Element {
    return (
        <>
            <li className="catalog__card card">
                <img
                    src="./images/products/image_1.png"
                    alt="products"
                    className="card__img"
                />
                <div className="card__text">
                    <h4 className="card__title">Reflex Plus Adult Cat Food Salmon</h4>
                    <p className="card__description">
                        <span className="card__product">
                            Product:<span>Dog food</span>
                        </span>
                        <span className="card__decoration">·</span>
                        <span className="card__size">
                            Size:<span>385gm</span>
                        </span>
                    </p>
                    <p className="card__value">
                        <span className="card__price">140.000</span>
                        <span className="card__currency">VND</span>
                    </p>
                </div>
                <div className="card__prize">Free Toy &amp; Free Shaker</div>
            </li>
        </>
    )
}