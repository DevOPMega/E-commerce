import { useState, useEffect } from "react";

function Carousel() {
    const [carouselNum, setCarouselNum] = useState(1);

    function moveCarouselBackward(){
        if (carouselNum===1){
            setCarouselNum(7);
        }else{
            setCarouselNum(carouselNum-1);
        }
    } 
    function moveCarouselForward(){
        if (carouselNum===7){
            setCarouselNum(1);
        }else{
            setCarouselNum(carouselNum+1);
        }
    } 

    return (
        <div className="carousel">
            <button className="carousel-btn carousel-left" onClick={()=>moveCarouselBackward()}>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <button className="carousel-btn carousel-right" onClick={()=>moveCarouselForward()}>
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>

            {
                <img src={"./images/carousel-" + carouselNum + ".jpg"} alt="" />
            }
        </div>
    )
}

export default Carousel;