import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../CarouselButtonGroup';
import React from 'react';
import './ProductGallery.css'
const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1440, min: 1024 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

const ProductGallery = ({ images }) => {
  const [coverIndex, setCoverIndex] = useState(0);
  return (
    <div className="flex flex-col mb-6 lg:mb-0 lg:border-b border-gray-200">
      <div className="hidden lg:flex justify-center">
        <img
          src={images[coverIndex]}
          className="h-96 w-96 object-contain"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="relative mx-10">
          <div className="lg:w-80% mt-2.5 mb-8 mx-auto lg:h-76">
            <div className="flex-1 overflow-auto">
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<CarouselButtonGroup />}
                shouldResetAutoplay={false}
                infinite={false}
                renderDotsOutside={true}
                dotListClass={'lg:hidden -bottom-4'}
                showDots={true}
                itemClass="text-center"
              >
                {images?.map((item, i) => (
                  <div
                    key={i}
                    className={`w-96 h-96 lg:h-16 lg:w-16 mx-auto rounded-lg cursor-pointer ${
                      coverIndex === i ? 'border-green-600 border' : 'border-gray-200'
                    } overflow-hidden`}
                    onClick={() => setCoverIndex(i)}
                  >
                    <img
                      src={item}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
