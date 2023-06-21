import image1 from "./Images/slide1.jpg"
import image2 from "./Images/slide2.jpg"
import image3 from "./Images/slide3.jpg"
import image4 from "./Images/slide4.jpg"
import image6 from "./Images/slide6.jpg"
import image7 from "./Images/slide7.jpg"
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { useState } from "react";


export const SplashPage = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % imageCount);
    };
    
    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex === 0 ? imageCount - 1 : prevIndex - 1
        );
    };
    
    const imageCount = 6;
  

    return  (
        <> 
        <div className="wrapper">
            <div id="left-arrow" onClick={handlePrevSlide}>
                <VscChevronLeft />
            </div>
            <div className="carousel" style={{
            transform: `translateX(-${slideIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out"}}>
                <img src={image4} alt="img"></img>
                <img src={image3} alt="img"></img>
                <img src={image2} alt="img"></img>
                <img src={image1} alt="img"></img>
                <img src={image6} alt="img"></img>
                <img src={image7} alt="img"></img>
                <img src={image4} alt="img"></img>
                <img src={image3} alt="img"></img>
                <img src={image2} alt="img"></img>
                <img src={image1} alt="img"></img>
                <img src={image6} alt="img"></img>
                <img src={image7} alt="img"></img>

            </div>

            <div id="right-arrow" onClick={handleNextSlide}>
                <VscChevronRight />
            </div>

        </div>


        </>

    )
}

