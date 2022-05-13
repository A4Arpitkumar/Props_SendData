import mycss from './mycss.module.css';
const Contact = (props) =>{

    return(
        <div className={mycss.img}>
            <div>
                <img src={require('./pic/'+props.uiamge).default} className={mycss.img1}></img>
                <b className={mycss.p}>{props.uname}</b>
                <hr></hr>
                <p className={mycss.star}>{props.ustar}</p>
                <p className={mycss.button}>{props.ubutton}</p>
            </div>
        </div>
    )
}
export default Contact;