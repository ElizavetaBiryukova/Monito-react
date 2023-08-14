import firstCustomer from '../../assets/images/customer/image_1.png'
import secondCustomer from '../../assets/images/customer/image_2.png'
import thirdCustomer from '../../assets/images/customer/image_3.png'
import fourthCustomer from '../../assets/images/customer/image_4.png'
import fifthCustomer from '../../assets/images/customer/image_5.png'

export function Customers(): JSX.Element {
    return (
        <>
            <section className="customer">
                <h2 className="customer__title">Our lovely customer</h2>
                <div className="customer__slider">
                    <div className="customer__slider-images">
                        <img
                            className="customer__image"
                            src={firstCustomer}
                            alt="customer"
                        />
                        <img
                            className="customer__image"
                            src={secondCustomer}
                            alt="customer"
                        />
                        <img
                            className="customer__image"
                            src={thirdCustomer}
                            alt="customer"
                        />
                        <img
                            className="customer__image"
                            src={fourthCustomer}
                            alt="customer"
                        />
                        <img
                            className="customer__image"
                            src={fifthCustomer}
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
        </>

    )
}