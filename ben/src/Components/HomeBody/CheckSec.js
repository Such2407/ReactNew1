import React from 'react'

function CheckSec(props) {
  return (
    <div className='check-sec-box'>
        <div className='row4'>
            <div className={props.show ? 'checksec-left' : "checksec-left"}>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card1 &&<span className='check-text'>{props.card1}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card2 &&<span className='check-text'>{props.card2}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card3 &&<span className='check-text'>{props.card3}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card4 &&<span className='check-text'>{props.card4}</span>}
                </div>
            </div>
            { props.show &&<div className='checksec-right'>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card5 &&<span className='check-text'>{props.card5}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card6 &&<span className='check-text'>{props.card6}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card7 &&<span className='check-text'>{props.card7}</span>}
                </div>
                <div>
                    <span className='check-icon-span'><i class="fa-solid fa-check check-icon"></i></span>
                    {props.card8 &&<span className='check-text'>{props.card8}</span>}
                </div>
            </div>}
        </div>
    </div>
  )
}

export default CheckSec