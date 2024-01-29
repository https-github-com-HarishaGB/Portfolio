import React from "react";
import img from "../images/gbimg.jpg";

const About = () =>{
    return(
        <div className="about">
            <h1>About Me</h1>
            {/* <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
            <img src={img} alt="wealth"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Labore quaerat aperiam ut veritatis voluptas, quae rem ipsam officia, 
                voluptatibus cum commodi quibusdam accusantium nemo. hai gb Tempora ea id sunt quasi ut?
            </p>
        </div>
    )
}


export default About