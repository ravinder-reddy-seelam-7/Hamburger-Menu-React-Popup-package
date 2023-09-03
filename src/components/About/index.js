// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-about"
      />
    </div>
  </>
)

export default About
