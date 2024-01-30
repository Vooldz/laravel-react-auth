/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = ({ data, type, actions }) => {
    return (
        <Link className={`card  ${type}`}>
            {data.img && (
                <div className="card-img">
                    <img src={data.img} alt="/" />
                </div>
            )}
            <div className="card-body">
                <div className="card-text">
                    {data.title && (
                        <h4 className="card-title">card title</h4>
                    )}
                    {data.desc && (
                        <p className='card-desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ullam atque soluta commodi et pariatur iure culpa sapiente amet quisquam.
                        </p>
                    )}
                    {data.info && (
                        <div className="card-info">
                            {data.info.rate && (
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
                            )}
                            {data.info.price && (
                                <small className="card-price">200$</small>
                            )}
                        </div>
                    )}
                </div>

                {actions && (
                    <div className="card-actions">
                        {actions.map(action => (
                            <Link key={action.text} className={`button simple ${action.class}`}>{action.text}</Link>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}

export default Card