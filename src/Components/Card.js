import React, { Fragment } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

const Card = ({busque}) => {
    console.log(busque)
    return (
        <Fragment>
         <Flipped flipId="full-screen-square">
        <div className="card mt-4" >
        <img src={busque.images.downsized_medium.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{busque.title}</h5>
           
            
        </div>
        </div>
        </Flipped>
        </Fragment>
    )
}

export default Card;