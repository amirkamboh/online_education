import React from 'react'
import logo from '../../media/Images/Logo_Education.png'

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_section_width">
            <div className="footer_section_divid">
                <div className="footer_logo_content">
                    <img src={logo} alt=''></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy a 
                        type specimen book.</p>
                </div>
                <div className="footer_menu">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>How to Work?</li>
                        <li>Populer Course</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div className="footer_menu">
                <h3>Courses</h3>
                    <ul>
                        <li>Categories</li>
                        <li>Ofline Course</li>
                        <li>Vidio Course</li>
                    </ul>
                </div>
                <div className="footer_menu">
                <h3>Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Career</li>
                        <li>Privacy </li>
                    </ul>
                </div>
                <div className="footer_menu">
                <h3>Contac Info</h3>
                    <ul>
                        <li>+0913-705-3875</li>
                        <li>ElizabethJ@jourrapide.com</li>
                        <li>4808 Skinner Hollow Road
                            Days Creek, OR 97429</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer_copyright">
            <p>BookStore All Right Reserved, 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer
