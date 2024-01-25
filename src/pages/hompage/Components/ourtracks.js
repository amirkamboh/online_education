import React from 'react'
import img1 from '../../../media/Images/instgram.png'
import img2 from '../../../media/Images/facebook.png'

const Ourtracks = () => {
  return (
    <>
      <div className="our_tracks_sections">
        <div className="our_tracks_width">
            <div className="our_tracks_sections_details">
                <div className="track_section_content">
                    <h3>Our Tracks</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div className="track_section_divid">

                <div className="track_sectionD">
                <div className="track_section2">
                    <div className="track_section1_img"></div>
                    <div className="track_section1_content"> 
                        <h4>Matthew E. McNatt</h4>
                        <small>Professor @George Brown College</small>
                        <h6>Ut enim ad minim veniam, quis nost exercitation
                         ullamco laboris nisi ut allquip ex commodo.</h6>
                         <h3>Engineering Physics 
                            <span class="fa"><a href='www.facebook.com'><img src={img2} alt='img2'></img></a></span>
                            <span class="fa"><a href='www.instagram.com'><img src={img1} alt='img1'></img></a></span>
                        </h3>
                    </div>
                </div>
                </div>

                <div className="track_sectionE">
                <div className="track_sectionD">
                <div className="track_section2">
                    <div className="track_section1_img"></div>
                    <div className="track_section1_content"> 
                        <h4>Tracy D. Wright</h4>
                        <small>Professor @George Brown College</small>
                        <h6>Ut enim ad minim veniam, quis nost exercitation
                         ullamco laboris nisi ut allquip ex commodo.</h6>
                         <h3>Electrical Engineering  
                         <span class="fa"><a href='www.facebook.com'><img src={img2} alt='img2'></img></a></span>
                         <span class="fa"><a href='www.instagram.com'><img src={img1} alt='img1'></img></a></span>
                        </h3>
                    </div>
                </div>
                </div>
                </div>

                <div className="track_sectionF">
                <div className="track_sectionD">
                <div className="track_section2">
                    <div className="track_section1_img"></div>
                    <div className="track_section1_content"> 
                        <h4>Cynthia A. Nelson</h4>
                        <small>Professor @George Brown College</small>
                        <h6>Ut enim ad minim veniam, quis nost exercitation
                         ullamco laboris nisi ut allquip ex commodo.</h6>
                         <h3>Computer Secience 
                            <span class="fa"><a href='www.facebook.com'><img src={img2} alt='img2'></img></a></span>
                            <span class="fa"><a href='www.instagram.com'><img src={img1} alt='img1'></img></a></span>
                        </h3>
                    </div>
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

export default Ourtracks
