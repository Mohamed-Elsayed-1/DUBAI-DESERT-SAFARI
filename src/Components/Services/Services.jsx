import './Services.css';
import { FaImage } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

export const Services = () => {
  return (
    <section className='services-section'>
      <div className="container">
        <div className="services-item">
          <FaImage className='services-icon'/>
          <h3>Adventures</h3>
        </div>
        <div className="services-item">
          <HiMiniUsers className='services-icon'/>
          <h3>Family tours</h3>
        </div>
        <div className="services-item">
          <BsFillBuildingsFill className='services-icon'/>
          <h3>City cards</h3>
        </div>
        <div className="services-item">
          <AiOutlineGlobal className='services-icon'/>
          <h3>Multy-day trips</h3>
        </div>
      </div>
    </section>
  )
}
