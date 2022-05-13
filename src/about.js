import mycss from './mycss.module.css';
const About = (props) => {

    return(
        <div className={mycss.pro1}>
            <div>
                {/* <img src={require('./img/'+props.aiamge).default} className={mycss.img1}></img>
                <b className={mycss.p}>{props.aname}</b>
                <hr></hr>
                <p className={mycss.star}>{props.astar}</p>
                <p className={mycss.button}>{props.abutton}</p> */}

            
                <img src={require('./pic/'+props.aiamge).default} className={mycss.pro}></img><br></br>
                <b className={mycss.pp}>{props.p1}</b>
                <p className={mycss.pp1}>{props.p2}</p>
            </div>
        </div>
    )
}
export default About;


{/* <div className={mycss.m5}>
<img src="https://th.bing.com/th/id/OIP.TBJw08lx_JPkWfPo5WiH3AHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" style={{width:"100px",height:"100px",marginTop:"10px"}}></img>
<h3>Free Upgradation</h3>
<h6 style={{width:"200px",marginLeft:"50px"}}>We will be provided free upgradation for any newer version of the course you have.</h6>
</div> */}