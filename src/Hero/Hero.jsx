import "./Hero.css"
const Hero=()=>{
    return(
     <div className="hero"id="home">
        <div className="container">
        <h6>Welcome to</h6>
        <div className="title">
        {/* <img src="assests/logo.png" alt="" /> */}
        <div className="imgg"></div>
        <div><p className="heading">DuoCortex</p>
        <p className="subheading">By Medicos for Medicos</p></div>
        </div>
        <p>Dear Medicous,Boost Up Your Grades in Monotonous Subject With DuoCortex</p>
        <button class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Discover more</button>
     </div>
     </div>
    )

}
export default Hero;