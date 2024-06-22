import { ItemsCarousel } from '../home';
import React from 'react';
import './MoreProducts.css'
const MoreProducts = ({ title, products }) => {
  return (
    <section className="mt-2">
      <div className="flex items-center justify-between h-16">
        <h2 className="font-semibold text-[24px] _text-default px-4 lg:px-0">
          {title}
        </h2>
      </div>
      <ItemsCarousel topItems={products} />
    </section>
  );
};

export default MoreProducts;
