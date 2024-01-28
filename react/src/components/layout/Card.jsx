import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <Link>
            <div className="card">
                <div className="card-img">
                    <img src="*" alt="/" />
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <h4 className="card-title">card title</h4>
                        <p className='card-desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ullam atque soluta commodi et pariatur iure culpa sapiente amet quisquam.
                        </p>
                        <div className="card-info">
                            <small className="card-rating">
                                <div className='rating-stars'>
                                    {[...Array(5)].map((star, index) => (
                                        <FaStar
                                            key={index}
                                            color={index < 3.5 ? '#ffc107' : '#e4e5e9'}

                                            style={{ cursor: 'pointer' }}
                                        />
                                    ))}
                                </div>
                                <div className='rating-number'>
                                    3.5
                                </div>
                            </small>
                            <small className="card-price">200$</small>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="primary simple">add to cart</button>
                        <button className="secondary simple">order now</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card