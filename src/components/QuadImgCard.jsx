import {QuadImgData} from "../Data/QuadImgData";

function QuadImgCard() {
    return (
        <div className="quad-img-card-container">
            {
                QuadImgData.map(data => (
                    <div className="quad-img-cards">
                        <h2>{data.title}</h2>
                        <div className="card-img">
                            <figure>
                                <img src={`./images/${data.img[0].imgURL}.jpg`} alt="" />
                                <figcaption>{data.img[0].imgCaption}</figcaption>
                            </figure>
                            <figure>
                                <img src={`./images/${data.img[1].imgURL}.jpg`} alt="" />
                                <figcaption>{data.img[1].imgCaption}</figcaption>
                            </figure>
                            <figure>
                                <img src={`./images/${data.img[2].imgURL}.jpg`} alt="" />
                                <figcaption>{data.img[2].imgCaption}</figcaption>
                            </figure>
                            <figure>
                                <img src={`./images/${data.img[3].imgURL}.jpg`} alt="" />
                                <figcaption>{data.img[3].imgCaption}</figcaption>
                            </figure>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default QuadImgCard;