import logo from './logo.svg';
import './App.css';
import Contact from './contact';
import About from './about';
import mycss from './mycss.module.css';



const arr_data = [

  {"image":"1.jpg","name":"React JS","star":"⭐⭐⭐⭐⭐","button":"Know More..!"},
  {"image":"2.jpg","name":"Node JS","star":"⭐⭐⭐⭐⭐","button":"Know More..!"},
  {"image":"3.jpg","name":"Angular JS","star":"⭐⭐⭐⭐⭐","button":"Know More..!"},
  {"image":"4.jpg","name":"JS Development","star":"⭐⭐⭐⭐⭐","button":"Know More..!"},
  {"image":"5.jpg","name":"Android Development","star":"⭐⭐⭐⭐⭐","button":"Know More..!"},
  {"image":"6.jpg","name":"Web Development","star":"⭐⭐⭐⭐⭐","button":"Know More..!"}  
];


const arr = [

  {"image":"7.jpg","p1":"Industry Experts ",    "p2":"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
  {"image":"8.jpg","p1":"Latest Curriculum",    "p2":"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."},
  {"image":"9.jpg","p1":"Latest Technology",    "p2":"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."},
  {"image":"10.jpg","p1":"Interview Assistance","p2":"At the end of each training,our training instructor will go through the possible technical questions you may be asked."},
  {"image":"11.jpg","p1":"Free Upgradation",    "p2":"We will be provided free upgradation for any newer version of the course you have."},
  {"image":"12.jpg","p1":"Lifetime Support",    "p2":"We will provide you lifetime support on all the courses you learned from us."}
 
];

function App() {
  return (
     <div>
        
      <div>
      {
          arr_data.map((item) => {

            return(
                <Contact uiamge={item.image} uname={item.name} ustar={item.star} ubutton={item.button}/>
            )

          })}

      </div>
      <div>
      
      <p>READ OUR DIFFERENCE</p>
      <p>WHY CHOOSE CREATIVE</p>
      </div>
        
        <div>
        { 
          arr.map((item) => {

            return(
                <About aiamge={item.image} p1={item.p1} p2={item.p2} />
            )

          })
        }
        </div>

        
    </div>
  );
}
export default App;
