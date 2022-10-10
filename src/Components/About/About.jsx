import React from 'react'
import { Container } from 'react-bootstrap'
import GEUBG from "../../Assets/Group 34.png"
import DOT from "../../Assets/image 20.png";
import "./about.css";
const About = () => {
  return (

    <section className="about-container">
      <section className="aboutus-section">
        <div className='tocheck'>

          <h2 className="kuchbhi" >About</h2>
          <h2 >Graphic Era University</h2>
          <span class="about-span" >
            Graphic Era (Deemed to be University) is the culmination of the<br></br>
            hard work of its visionary founder, Prof. (Dr.) Kamal Ghanshala,<br></br>
            who had the dream to change the destiny of thousands of youth<br></br>
            through quality and holistic education. The premier university has<br></br>
            acquired transnational dimensions through student exchange and<br></br>
            knowledge-sharing programs with many foreign universities and<br></br>
            has been acclaimed and honoured at international forums for its<br></br>
            brilliance in upholding the highest standards of education.<br></br>
          </span>
        </div>

        <div className='DOTTED'>
          <img src={DOT}></img>
        </div>





      </section>
    </section>


  )
}

export default About