import React from 'react'
import Card from './Card'
import HeaderSec from './HeaderSec'

function Card2Sec() {
  return (
    <div className='card-sec'>
        <div className='box'>
            <HeaderSec 
            header="Backed by strong global partners"
            para="Paystack is backed by notable investors as well as some of the best payments companies on the planet."
            />
            <div className='row card-row sm-row md-row-grid'>
                <Card
                isBigIcon={false}
                shareHolderImg="pictures/patrick-collison-headshot.jpg"
                shareHolderName="Patrick Collison"
                shareHolderPosition="CEO, Stripe"
                img="pictures/Stripe.png"
                para="Paystack is highly technical and fanatically customer oriented. 
                      We’re excited to back such people in one of the world’s fastest-growing regions."
                />
                <Card
                isBigIcon={false}
                shareHolderImg="pictures/otto-williams.jpeg"
                shareHolderName="Otto Williams"
                shareHolderPosition="Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa"
                img="pictures/Visa-_-Color.png"
                para="Our investment in Paystack aligns with the kind of investments we look for - 
                      those that will help extend our reach into the global commerce ecosystem"
                />
                <Card
                isBigIcon={false}
                shareHolderImg="pictures/michael-siebel-headshot.jpeg"
                shareHolderName="Michael Seibel"
                shareHolderPosition="CEO, Partner, Y Combinator"
                img="pictures/ycombinator-logo.png"
                para="As YC's first Nigerian startup Paystack leads the charge of great companies 
                      coming out of Africa, powering modern payments for an entire continent."
                />
            </div>
        </div> 
    </div>
  )
}

export default Card2Sec