import Card from "../layout/Card";
import './slider.css'

const cardData = {
    img: 'https://placehold.co/600x400',
    title: 'This is a test card',
}

const Slider = () => {
    return (
        <div className="slider">
            <Card
                data={cardData}
                type={"backgrounded"}
                actions={[
                    { text: "view", class: 'secondary', link: '' }
                ]}
            />
            <ul className="bullets">
                {[...Array(4)].map((ele, idx) => (
                    <li key={idx}></li>
                ))}
            </ul>
        </div>
    )
}

export default Slider