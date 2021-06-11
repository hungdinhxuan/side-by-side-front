import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "../../Styles/Home.css";
import ShowHome from "../../Hooks/ShowHome";
import lolImg from "../../img/Carousel/league-of-legends.jpg";
import { v4 as uuidv4 } from "uuid";
import Anh1 from "../../img/Carousel/1.gif";
import Anh2 from "../../img/Carousel/2.gif";
import Anh3 from "../../img/Carousel/3.gif";
import Anh4 from "../../img/Carousel/4.gif";

const items = [
  {
    src: Anh4,
    // altText: "Slide 1",
    // caption: "Slide 1",
  },
  {
    src: Anh1,
    // altText: "Slide 2",
    // caption: "Slide 2",
  },
  {
    src: Anh2,
    // altText: "Slide 3",
    // caption: "Slide 3",
  },
  {
    src: Anh3,
    // altText: "Slide 4",
    // caption: "Slide 4",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={uuidv4()}
      >
        <img src={item.src} alt={item.altText} style={{width: "100vw", height: "50vh"}} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="Home-main">
      <div>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>

        <div className="container">
          
          <ShowHome></ShowHome>
        </div>
      </div>
    </div>
  );
};

export default Home;
