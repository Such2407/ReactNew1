import React, { useState    } from 'react'
import { navLeft, navRight } from './NavItems'
// import { Link } from 'react-router-dom'
import Btn from '../HomeBody/Btn'
import DropdownNav from './DropdownNav'
import DropdownText from './DropdownText'

function NavBar() {

  const [dropmenu, setdropmenu] = useState(false)
function toggle2(){
    setdropmenu(predrop => !predrop)
    console.log("hi");
    console.log(dropmenu);
}
 
 
  const navLink1 = navLeft.map(item =>{
    if(item.title == "Why Paystack"){
      return (
        <DropdownNav
         title={item.title}
         dpIcon={item.dpIcon}
         text={<DropdownText
                  leftside=""
                  icon1="pictures/why_choose_paystack_db.svg"
                  icon2="pictures/success_rates_db.svg"
                  icon3="pictures/demo_db.svg"
                  icon1Head= "Why Choose Paystack"
                  icon2Head= "Success Rates"
                  icon3Head= "Demo"
                  icon1Body="Over 80,000 businesses trust Paystack. Here’s why."
                  icon2Body= "Big ideas in payments, explained in simple English"
                  icon3Body="See the Paystack Checkout Form and Dashboard in action"
                  rightH1="YOUR GROWTH STAGE"
                  rightH2="YOUR BUSINESS TYPE"
                  rightB1="For Entrepreneurs"
                  rightB2="For Corporates"
                  rightB3="For Global Brands"
                  rightB4="For Startups"
                  rightB7="For Fintechs"
                  rightB8="For Schools"
                  rightB9="For Betting"
              />}
         path={item.path}
         />
        
      )
    }
    if(item.title == "Learn"){
      return (
        <DropdownNav
        title={item.title}
        dpIcon={item.dpIcon}
        text={<DropdownText
          icon1="pictures/blog_db.svg"
          icon2="pictures/guides_db.svg"
          icon3="pictures/tutorials_db.svg"
          icon4="pictures/decode_fintech_db.svg"
          icon1Head= "Blog"
          icon2Head= "Guides"
          icon3Head= "Video Tutorials"
          icon4Head= "Decode Fintech"
          icon1Body="Original lessons about making the internet work for your business"
          icon2Body= "Big ideas in payments, explained in simple English"
          icon3Body="Quick video tutorials on how to use Paystack"
          icon4Body= "The trade email newsletter and podcast for leaders in African fintech"
          rightH1="COMPANY"
          rightB1="About Us"
          rightB2="Subscribe"
          rightB3="Compliance"
          rightB4="Careers"
          rightB5="Brand"
          rightB6="Media Kit"
      />}
        path={item.path}
        
        />
      )
            
    }
    return (
            <DropdownNav
            title={item.title}
            dpIcon={item.dpIcon}
            path={item.path}
            />
    )
  });

  const navLink2 = navRight.map(item =>{
    if(item.title == "Developer"){
      return(
        <DropdownNav
        title={item.title}
        dpIcon={item.dpIcon}
        text={<DropdownText
          leftDrop= {false}
          rightB1="Overview"
          rightB2="Documentation"
          rightB3="Integrations"
          rightB4="Status Page"
      />}
        path={item.path}
        
        />
  )
    }
    if(item.title == "Support"){
      return(
        <DropdownNav
        title={item.title}
        dpIcon={item.dpIcon}
        text={<DropdownText
          leftDrop= {false}
          rightB1="Quick Help"
          rightB2="Contact Us"
          rightB3="Why was I"
          rightB4="Debited?"
      />}
        path={item.path}
        
        />
  )
    }
    return(
      <DropdownNav
      title={item.title}
      dpIcon={item.dpIcon}
      path={item.path}
      
      />
    )
})
 return (
      <div className='nav-bar'>
          <div className='row dp-none sm-block2'>
              <div className='dp-none sm-block'>
                <div className='paystack-icon-box'><img src='pictures/paystackIcon.png' className='paystack'/></div>
              </div>
              <div onClick={toggle2} className='md-line dp-none sm-block pointer'>
                <div className='mene-line'></div>
                <div className='mene-line'></div>
                <div className='mene-line'></div>
              </div>
          </div>
        <div className={!dropmenu ? 'sm-dp-none' : "sm-block"}>
              <div className='row sm-block sm-dp-block-r sm-bg'>
                <div className='left sm-block'>
                  <div className='row'>
                  <div className='paystack-icon-box sm-dp-none'><img src='pictures/paystackIcon.png' className='paystack'/></div>
                <div className='row sm-block nav-link-left'> {navLink1}</div>
                  </div>
                </div>
                <div className='right sm-block'>
                  {navLink2}
                  <div className='sm-dp-none'><Btn /></div>
                  <img src='pictures/OIP__1_-removebg-preview.png' className='nija-flag sm-dp-none'/>
                </div> 
              </div>
        </div>
      </div>
  )
}

export default NavBar