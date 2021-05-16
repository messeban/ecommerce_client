import React from 'react'
import './ContainerCards.css'
function ContainerCards(props) {
    return (
        <div className='containerCards'>
            {props.children}
        </div>
    )
}

export default ContainerCards
