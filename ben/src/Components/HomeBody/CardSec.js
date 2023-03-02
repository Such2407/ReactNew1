import React from 'react'
import Card from './Card'
import HeaderSec from './HeaderSec'

function CardSec() {
  return (
    <div className='card-sec'>
        <div className='box'>
            <HeaderSec 
            header="Trusted by 80,000+ businesses"
            para="Thousands of organizations of all sizes trust Paystack to grow their business."
            />
            <div className='row card-row sm-row md-row-grid'>
                <Card
                isBigIcon={true}
                img="pictures/For-International-Businesses_180823_165939.svg"
                header1="Paystack for "
                header2="Global Brands"
                para="We help global brands accept payments from across Africa"
                />
                <Card
                isBigIcon={true}
                img="pictures/For-Entrepreneurs_180823_165709.svg"
                header1="Paystack for"
                header2="Entrepreneurs"
                para="From startup to scale-up, we can support you at every stage of your businesses’ growth"
                />
                <Card
                isBigIcon={true}
                img="pictures/For-Large-Corporations_180823_165502.svg"
                header1="Paystack for"
                header2="Large Organizations"
                para="Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely."
                />
            </div>
        </div> 
    </div>
  )
}

export default CardSec