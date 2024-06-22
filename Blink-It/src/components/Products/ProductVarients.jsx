import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../CarouselButtonGroup';


const responsive = {
  lgdesktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1440, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const VarientItem = ({ data, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`rounded-lg max-w-[150px] border overflow-hidden leading-none ${
        data.selected ? 'border-[#b1dc9c]' : '_border-muted'
      } ${
        data.out_of_stock
          ? 'bg-gray-50 pointer-events-none'
          : 'bg-white cursor-pointer'
      }`}
    >
      <div className="py-2 px-3 flex items-center">
        <div className="w-8 pl-1">
          <input type="radio" checked={data.selected} readOnly />
        </div>
        <div>
          <p className="font-bold text-[15px]">{data.unit}</p>
          {data.out_of_stock ? (
            <span className="text-[10px] text-red-500">Out of stock</span>
          ) : (
            <span className="text-xs">
              ₹{data.price}
              <del className="ml-1 opacity-80">₹{data.mrp}</del>
            </span>
          )}
        </div>
      </div>
      {data.selected && data.offer && (
        <div className="text-[11px] text-center font-bold bg-[#ecffec] border-t border-[#b1dc9c] text-[#54b226] py-2 px-3">
          {data.offer}
        </div>
      )}
    </div>
  );
};

const ProductVarients = ({ data, onSelect }) => {
  const varientList = data.map((item) => {
    const { product_id, price, mrp, unit, offer, inventory } = item;
    return {
      product_id,
      price,
      mrp,
      unit,
      offer,
      out_of_stock: inventory === 0,
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleVarientChange = (index) => {
    setCurrentIndex(index);
    onSelect(index);
  };

  return (
    <div className="h-full flex items-center">
      <div className="relative w-full flex-1 max-w-[400px] md:max-w-[500px] mx-4 lg:-ml-2">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass="mx-2"
        >
          {varientList.map((varient, index) => (
            <VarientItem
              key={`var-${index}`}
              data={{ ...varient, selected: currentIndex === index }}
              onSelect={() => handleVarientChange(index)}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductVarients;
