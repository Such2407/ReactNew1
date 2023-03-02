import React from 'react'
import CheckSec from './CheckSec'
import HeaderSec from './HeaderSec'

function TextSec(props) {
  return (
    <div className='box container'>
        {props.showHeader && <HeaderSec 
            header="Simple, easy payments"
            para="Building a business is hard. Getting paid shouldn't be."
        />}
        <div className='text-sec container'>
            <div className='row2 sm-row'>
            {props.img &&<div className='text-sec-left'>
                    <img src={props.img} className='img-gif'/>
                </div>}
                {props.video &&<div className='text-sec-left'>
                    <video className='video-play' autoPlay muted loop>
                    <source src='./video/Advanced-Fraud-Protection.mp4' type='video/ogg'>
            
                    </source>
                   </video>
                </div>}
                <div className='text-sec-right'>
                {props.h1 &&<div className='big-header2'>{props.h1}</div>}
                    {props.p1 &&<div>
                        {props.p1}
                    </div>}
                    {props.showCheck && <div>
                        <CheckSec
                        card1="Card"
                        card2="Bank Account"
                        card3="Bank Transfer"
                        card4="USSD"
                        card5="Apple Pay"
                        card6="Visa QR"
                        card7="Mobile Money"
                        card8="POS"
                        show={true}
                        />
                    </div>}
                    {props.h2 &&<div className='big-header2 mt'>{props.h2}</div>}
                    {props.p2 &&<div>
                        {props.p2}
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextSec