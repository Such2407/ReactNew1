import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='bg-light section'>
        <div className='box'>
            <div className='hero'>
                <div className='row ds'>
                    <div className='hero-left'>
                        <div className='big-header'> Modern online and offline payments for Africa</div>
                        <div className='hero-para'>
                           Paystack helps businesses in Africa get paid by anyone, anywhere in the world
                        </div>
                        <div className='hero-btn-box'>
                            <div className='hero-btn'>
                                <Link>Create a free accout</Link>
                            </div>
                            <div className='hero-nbg-btn'>
                                <Link>Create a free accout</Link>
                            </div>
                        </div>
                    </div>
                    <div className='hero-section-img'>
                            <img src='pictures/Screenshot_2023-02-21_144103-removebg-preview.png' className='hero-img'/> 
                    </div>
                </div>
                <div className='trustee'>
                    <div className='row sm-row'>
                        <div className='trustee-left'>
                            <div className='trustee-left-para'>Trusted by over 70,000 businesses</div>
                            <div className='row trustee-icons'>
                            <img src='pictures/Dominos-Plain.svg' className='dom'/>
                            <img src='pictures/MTN-Plain.svg' className='mtn'/>
                            <img src='pictures/Bolt-Stack-Blue_200304_153027.svg' className='bolt'/>
                            <img src='pictures/Axa-mansard-_-Plain.svg' className='axa'/>
                            </div>
                        </div>
                        <div className='trustee-right'>
                            <div className='row'>
                                <div className='trustee-right-text'>
                                    <div>Watch MTN Chief Transformation Officer, Olubayo</div>
                                    <div className='indented'>Adekanmbi, discuss working with Paystack</div>
                                </div>
                                <i class="fa-sharp fa-solid fa-circle-play icon-colur"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero