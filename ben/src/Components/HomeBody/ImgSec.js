import React from 'react'
import CheckSec from './CheckSec'
import HeaderSec from './HeaderSec'

function ImgSec(props) {
  return (
    <div className='box container'>
        {props.showHeader && <HeaderSec />}
        <div className='text-sec container imgSec'>
            <div className='row2 sm-row'>
                <div className='text-sec-right'>
                {props.h1 &&<div className='big-header2'>{props.h1}</div>}
                    {props.p1 &&<div>
                        {props.p1}
                    </div>}
                    {props.showCheck && <div>
                        <CheckSec
                        card1="Collect one-time and recurring payments from your app or website"
                        card2="Make instant transfers"
                        card3="Retrieve all your transaction and customer data"
                        card4="Verify the identity of customers"
                        show={false}
                        />
                    </div>}
                    {props.h2 &&<div className='big-header2 mt'>{props.h2}</div>}
                    {props.p2 &&<div>
                        {props.p2}
                    </div>}
                </div>
                <div className='text-sec-left'>
                    <img src={props.img} className='img-gif'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImgSec