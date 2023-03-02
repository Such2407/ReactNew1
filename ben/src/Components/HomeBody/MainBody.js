import React from 'react'
import Card2Sec from './Card2Sec'
import CardSec from './CardSec'
import ImgSec from './ImgSec'
import LastSsc from './LastSsc'
import PoweringSec from './PoweringSec'
import TextSec from './TextSec'

function MainBody() {
  return (
    <div className='mg'>
        <TextSec
        img="pictures/Collect-Payments-for-Multiple-Channels-1.1.gif" 
        showHeader={true}
        h1="Delight customers with a seamless payments experience"
        h2="Enjoy phenomenal transaction success rates"
        p1="Give your customers the gift of modern, frictionless, painless payments. 
            Integrate Paystack once and let your customers pay you however they want."
        p2="We automatically route payments through the most optimal channels, 
            ensuring the highest transaction success rates in the market."
        showCheck={true}
        />
        <ImgSec 
        img="pictures/Robust-Suite-of-APIs-Opt.png"
        showHeader={false}
        h1="Build custom payments experiences with well-documented APIs"
        p1="Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of
            thousands of customers. If you can imagine it, you can build it with Paystack."
        showCheck={true}
        />
        <div className='imgSec'>
        <TextSec
        video={true}
        showHeader={false}
        h1="Protect yourself and your customers with advanced fraud detection"
        h2="Detailed reporting for accounting, reconciliation, and audits"
        p1="Give your customers the gift of modern, frictionless, painless payments. 
            Integrate Paystack once and let your customers pay you however they want."
        p2="Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."
        showCheck={false}
        />
        </div>
        <div className='card-bg'>
        <CardSec />
        </div>
        <PoweringSec />
        <div className='card-bg2'>
        <Card2Sec />
        </div>
        <LastSsc />
    </div>
  )
}

export default MainBody
