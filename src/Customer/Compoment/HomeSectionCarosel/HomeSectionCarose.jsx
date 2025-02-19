import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";


const HomeSectionCarosel = ({data,sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
