/* eslint-disable react/prop-types */

import Card from './Card'
// import CardList from './CardList';

// some dummy data for testing
const cardData = {
    img: 'https://placehold.co/800x400',
    title: 'This is a test card',
    // desc: 'somthing',
    info: {
        price: "220",
        rate: 3,
    }
}

const Products = ({count}) => {
    return (
        <section>
            <h1 className="section-title">title</h1>
            <div className="card-list">
                {[...Array(count)].map((card, idx) => (
                    <Card key={idx} data={cardData} type={"product"} />
                ))}
            </div>
        </section>
    )
}

export default Products