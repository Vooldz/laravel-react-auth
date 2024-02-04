
import Products from "../components/layout/Products";
import Slider from '../components/slider/slider'
import Card from "../components/layout/Card"
import CardList from "../components/layout/CardList";

// some dummy data for testnig
const cardData = {
    img: 'https://placehold.co/800x600',
    title: 'This is a test card',
    discription: "lorem"
}

const Home = () => {
    return (
        <div className='container'>
            <Slider/>
            <Products count={8} />
            <Card data={cardData} type={'ad'} actions={[{text: 'view', class: 'primary'}]} />
            <Products count={3} />
        </div>
    )
}

export default Home