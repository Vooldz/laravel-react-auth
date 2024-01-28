
// componets
import Card from './Card';

// style
import '../../styles/card.css';

const CardList = () => {
    return (
        <div className="cards-scroller">
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList