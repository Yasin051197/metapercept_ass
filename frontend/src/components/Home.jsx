import React from 'react'
import Navbar from './Navbar'
import "../Css/Home.css"
import data from "../class.json"
import random from "../Assets/img_avatar.png"

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="banner">
            <br />
            <br />
            <p id="title">Title</p>
            <p id="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button>Read Me</button>
        </div>
        <div>
            <p id="class_title">Classes</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <div id="cards">
                {data.map((el)=>(
                    <div key={el.ID}>
                        <img src={random} alt={el.ID} />
                        <h2>{el.Name}</h2>
                        <p>{el.ShortDesc}</p>
                        <button style={{padding:"5px"}}>View</button>
                    </div>
                ))}
            </div>
            <div id="footer">
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
            </div>
        </div>
    </div>
  )
}

export default Home