import image1 from "./Images/slide1.jpg"
import image2 from "./Images/slide2.jpg"
import image3 from "./Images/slide3.jpg"
import image4 from "./Images/slide4.jpg"
import image6 from "./Images/slide6.jpg"
import image7 from "./Images/slide7.jpg"
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { useState } from "react";
import CategoryHome from "../CategoryHome"


export const SplashPage = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    // const handleNextSlide = () => {
    //     setSlideIndex((prevIndex) => (prevIndex + 1) % imageCount);
    // };
    
    // const handlePrevSlide = () => {
    //     setSlideIndex((prevIndex) =>
    //       prevIndex === 0 ? imageCount - 1 : prevIndex - 1
    //     );
    // };
    
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
                <div className="image-div">
                    <img src={image4} alt="img"></img>
                    <div className="image-des1">
                        <div className="des-main">
                            Must-Have Minis
                        </div>
                        <div className="des-below">
                            Can't miss beauty at great values.
                        </div>
                    </div>
                </div>

                <div className="image-div">
                    <img src={image3} alt="img"></img>
                    <div className="image-des2">
                        <div className="des-main">
                            Ultra-Hydrating SPF
                        </div>
                        <div className="des-below">
                            The ultimate skincare must-have.
                        </div>
                    </div>
                </div>

                <div className="image-div">
                    <img src={image2} alt="img"></img>
                    <div className="image-des3">
                        <div className="des-main">
                            NEW Isle of Paradise Body Care 
                        </div>
                        <div className="des-below">
                            Clease, exfoliate, and moisturize with skincare-powered formulas.
                        </div>
                    </div>
                </div>

                <div className="image-div">
                    <img src={image1} alt="img"></img>
                    <div className="image-des4">
                        <div className="des-main">
                            This Just In
                        </div>
                        <div className="des-below">
                            The latest beauty from the hottest brands.
                        </div>
                    </div>
                </div>

                <div className="image-div">
                    <img src={image6} alt="img"></img>
                    <div className="image-des5">
                        <div className="des-main">
                            Sunscreen under $25
                        </div>
                        <div className="des-below">
                            Hydrating formulas that boost glow too.
                        </div>

                    </div>
                </div>

                <div className="image-div">
                    <img src={image7} alt="img"></img>
                    <div className="image-des6">
                        <div className="des-main">
                            Just In: Strawberry Shortcake Clean Cleansing Balm
                        </div>
                        <div className="des-below">
                            Farmacy's bestselling, makeup-melting Green Clean formula in a delicious, new scent. Only at Sephora.
                        </div>

                    </div>
                </div>

            </div>

            <div id="right-arrow" onClick={handleNextSlide}>
                <VscChevronRight />
            </div>

        </div>

        <div className="cate-name" id="eyes-section">
            Eyes
        </div>
        <div>
            <CategoryHome category={'Eyes'}/>
        </div>

        <div className="cate-name" id="lips-section">
            Lips
        </div>
        <div>
            <CategoryHome category={'Lips'}/>
        </div>


        <div className="cate-name" id="cheek-section">
            Cheek
        </div>
        <div>
            <CategoryHome category={'Cheek'}/>
        </div>
        

        </>

    )
}

