// style
import '../../styles/card.css';

const Cards = () => {
    return (
        <div className="cards-scroller">
            <div className="cards-container">
                {/* start card */}
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
                                <small className="card-rating">3.5</small>
                                <small className="card-price">200$</small>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn primary simple">add to cart</button>
                            <button className="btn secondary simple">order now</button>
                        </div>
                    </div>
                </div>
                {/* end card */}

                {/* start card */}
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
                                <small className="card-rating">3.5</small>
                                <small className="card-price">200$</small>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn primary simple">add to cart</button>
                            <button className="btn secondary simple">order now</button>
                        </div>
                    </div>
                </div>
                {/* end card */}

                {/* start card */}
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
                                <small className="card-rating">3.5</small>
                                <small className="card-price">200$</small>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn primary simple">add to cart</button>
                            <button className="btn secondary simple">order now</button>
                        </div>
                    </div>
                </div>
                {/* end card */}
            </div>
        </div>
    )
}

export default Cards