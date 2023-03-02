import {CarouselCardData} from "../Data/CarouselCardData";
import {useState} from "react";

function CarouselCard(){
    const [carouselScroll, setCarouselScroll]=useState(0);

    function carouselMoveLeft(){
        if (carouselScroll!==0){
            setCarouselScroll(carouselScroll+1024)
        }
    }
    function carouselMoveRight(){
        if(carouselScroll!=(-3072)){
            setCarouselScroll(carouselScroll-1024)
        }
        
    }

    return (
        <div className="carousel-card-container">
            <h2>Today's Deal</h2>
            <button className="carousel-card-btn carousel-card-btn-left" onClick={()=>carouselMoveLeft()}>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <button className="carousel-card-btn carousel-card-btn-right" onClick={()=>carouselMoveRight()}>
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>
            <div className="carousel-card-roller" >
                {CarouselCardData.map(data=>(
                    <div className="carousel-card" style={{left: carouselScroll+"px"}}>
                        <img className="carousel-card-img" src={`./images/${data.imgURL}.jpg`} alt="" />
                        <div className="carousel-card-discount">
                            <span>Up to {data.discount}% off</span>
                            <span>Deal of the Day</span>
                        </div>
                        <div className="carousel-card-desc">
                            {data.imgDesc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselCard;