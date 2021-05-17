import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "../../Styles/Home.css";
import ShowHome from '../../Hooks/ShowHome';
import lolImg from "../../img/Carousel/league-of-legends.jpg"
import { v4 as uuidv4 } from 'uuid';

const items = [
  {
    src: lolImg,
    // altText: "Slide 1",
    // caption: "Slide 1",
  },
  {
    src:
      "https://dl.lolwallpapers.net/?id=8887",
    // altText: "Slide 2",
    // caption: "Slide 2",
  },
  {
    src:
      "https://preview.redd.it/46vbxutg18561.png?width=1920&format=png&auto=webp&s=3a9cf233b1ac6647baa7dd7324b6b0f36e37d057",
    // altText: "Slide 3",
    // caption: "Slide 3",
  },
  {
    src:
      "https://preview.redd.it/46vbxutg18561.png?width=1920&format=png&auto=webp&s=3a9cf233b1ac6647baa7dd7324b6b0f36e37d057",
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          
        />
      </CarouselItem>
    );
  });

  

  return (
    <div className='Home-main'>
        <div className="container">
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

          <ShowHome></ShowHome>

        </div>
    </div>
  );
};

export default Home;

