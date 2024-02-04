// componets
import Card from './Card';

// style
import '../../styles/card.css';

const cardData = {
    img: 'https://placehold.co/800x400',
    title: 'This is a test card',
    // desc: 'somthing',
    info: {
        price: "220",
        rate: 3,
    }
}

const CardList = ({count}) => {
    return (
        <div className="cards-container">
            {[...Array(count)].map((star, index) => (
                <Card key={index} data={cardData} type={"product"} />
            ))}
        </div>
    )
}

export default CardList