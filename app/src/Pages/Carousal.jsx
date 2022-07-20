import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div style={{margin:"0 230px 0 230px",height:"130px"}}>
        <h2 style={{marginLeft:"-800px"}}>Employers of Choice</h2>
        <Slider {...settings}>
          <div>
            <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/july/JpYoK5TOwijxrufQCDo0F2jYc6sImQgHW6Befx8f.jpeg" alt="" />
          </div>
          <div>
          <img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/I32QY2OzbvdjaGT1p5mPc7YPDdxkEOAMeyIt3vHT.jpeg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}