/* eslint-disable react/prop-types */


//components
import Modal from 'react-modal'
import Card from '../layout/Card'
import Search from '../layout/Search'
import NavLinks from '../layout/NavLinks'

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

const Popup = ({ isOpen, openModal, type }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={openModal}
            className={`popup ${type}`}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,.7)"
                }
            }}
        >
            {type === "window-products" && (
                <div>
                    <h1 className='mb'>inboxed products</h1>
                    <div className="card-list">
                        {[...Array(6)].map((card, idx) => (
                            <Card key={idx} data={cardData} type={"product"} />
                        ))}
                    </div>
                </div>
            )}
            {type === "window-search" && (
                <div>
                    <Search style={'mb'} />
                    <div className="card-list">
                        {/* 
                         */}
                    </div>
                </div>
            )}
            {type === "list" && (
                <>
                    <NavLinks style={"column"} />
                    <div>
                    </div>
                </>
            )}
        </Modal >
    )
}

export default Popup