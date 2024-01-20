import React from 'react'
import LearnImg from '../../../media/Images/workingwomen.PNG'

const Learnsection = () => {
  return (
    <>
       <div className="learning_experience_section">
         <div className="learning_experience_width">
            <div className="leaning_experience_divid">
                <div className="learning_experience_img">
                  <img src={LearnImg} alt="" />
                </div>
                <div className="learning_experience_content">
                  <h2>Premium <span>Learning</span> </h2> <h3>Experience</h3>
            
                <div className='learning_experience_content_divid'>
            
                    <div className="learning_experience_smallcard">
                    <div className="learning_experience_smallcard_layout"></div>
                    </div>
                    <div className="learning_experience_smallhead">
                      <h3>Easily Accessible</h3>
                      <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>

                    <div className="learning_experience_smallcard">
                    <div className="learning_experience_smallcard_layout"></div>
                    </div>
                    <div className="learning_experience_smallhead">
                      <h3>Fun Learning Expe</h3>
                      <p>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>

                  </div>
                </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default Learnsection
