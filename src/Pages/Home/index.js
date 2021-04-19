import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "../../Styles/Home.css";

const items = [
  {
    src:
      "https://playerduo.com/api/upload-service/images/a48c649e-8fa3-4ff3-b3e6-275fc298aed3__2ced2e60-5d8f-11eb-a34e-dd03c3a22289__player_album.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src:
      "https://dl.lolwallpapers.net/?id=8887",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src:
      "https://preview.redd.it/46vbxutg18561.png?width=1920&format=png&auto=webp&s=3a9cf233b1ac6647baa7dd7324b6b0f36e37d057",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src:
      "https://preview.redd.it/46vbxutg18561.png?width=1920&format=png&auto=webp&s=3a9cf233b1ac6647baa7dd7324b6b0f36e37d057",
    altText: "Slide 4",
    caption: "Slide 4",
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
        key={item.src}
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
        </div>
    </div>
  );
};

export default Home;
// export default function Home() {
//     return (
//         <div style={{height: '400px'}}>
//             <h1>Home page</h1>
//         </div>
//     )
// }
