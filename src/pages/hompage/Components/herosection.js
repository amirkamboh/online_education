import React from 'react'
import smartfuture from '../../../media/Images/smart_future.png'
import onlinetest from '../../../media/Images/online_test.png'
import exampaper from '../../../media/Images/exam_paper.png'
import certificate from '../../../media/Images/certificate.png'

const Herosection = () => {
  return (
    <>
       <div className="hero_sections">
        <div className="hero_sections_wide">
           <div className="hero_sections_divided">
            <div className="hero_sections_content">
                <h2>The <span>Smart</span> <br/>Choice For <span>Future</span> </h2>
                <p>Elearn is a global training provider based across the UK that specialises 
                    in accredited and bespoke training courses. Get the Best Health plan for
                    Yourself, Family or Parents. We crush the...</p>
                 <div className="hero_sections_searchbar">
                 <input type="text" placeholder="Search for a Location..." name="search" />
                 <button type="submit">Continue</button>
                 </div>   
            </div>
            <div className="hero_sections_image">
                <img src={smartfuture} alt=''></img>
            </div>
           </div>
        <div className="hero_section_banner_card">   
        <div className="hero_section_banner">
            <div className="banner_section_divid">
                <div className="hero_banner_section_cards">
                    <img src={onlinetest} alt='onlinetest'></img>
                    <div className="hero_banner_section_cards_content">
                        <h3>Learn The Latest Skills</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                             It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="hero_banner_section_cards">
                    <img src={exampaper} alt='exampaper'></img>
                    <div className="hero_banner_section_cards_content">
                    <h3>Get Ready For a Career</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                             It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="hero_banner_section_cards">
                    <img src={certificate} alt='certificate'></img>
                    <div className="hero_banner_section_cards_content">
                    <h3>Earn a Certificate</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                             It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
       </div>
    </>
  )
}

export default Herosection
