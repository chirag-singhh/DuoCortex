// 
import "./SubHero.css";

const SubHero = () => {
  return (
    <div className="sub"id="about">
      <div className="grid-container">
        <div className="grid-item images">
          <img src="Final/src/assets/imga.png" alt="" />
        </div>
        <div className="grid-item neww">
          <p><span>What is</span></p>
          <p className="tittleee">DuoCortex</p>
          <p className="h3">The Ultimate Study Buddy For Medicos</p>
          <p className="highlight-red">Connect with fellow medicos from around the world to teach, learn, and discuss various medical topics. Dive into an interactive and engaging study environment. Sign up today and transform your learning experience</p>
          {/* <div className="mainicons">
          <div className="icons">
            <div>🔔</div>
            <h2>Automated Notification</h2>
          </div>
          <div className="icons">
          <div>👥</div>
            <h2>Optiminal Pairing</h2>
          </div>
          </div> */}
 

          <p className="bold">Global Medical Community: Collaborate with peers from medical colleges across the globe.</p>
          <p className="bold">Personalized Study Sessions: Schedule and customize your study sessions with ease</p>
          <button  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Discover More</button>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
