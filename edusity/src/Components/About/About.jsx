import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nuturing Tomorrow's Leaders Today</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi qui soluta sint! Natus delectus earum tenetur, nobis aspernatur ab suscipit iste corrupti, recusandae placeat odit laudantium aut quisquam nulla.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus qui incidunt vitae ab alias eum cupiditate delectus itaque error, labore nisi, quaerat iusto tenetur, dignissimos eius odit facilis sequi nihil neque minus praesentium. Officiis?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate, error odio expedita cumque maiores, mollitia necessitatibus aspernatur laboriosam repellendus blanditiis fuga, ipsam vitae. Expedita blanditiis voluptates ea odio dolor?</p>
        </div>
    </div>
  )
}

export default About