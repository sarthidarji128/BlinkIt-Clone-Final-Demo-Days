import { ProductRow } from '../../utils/types';
import ItemsCarousel from '../shared/ItemsCarousel';
import React from 'react';
import './ProductsRow.css'
const ProductsRow = ({ data, objects }) => {
  const products = objects.map(obj =>
    obj.data.products.map(product => product[0])
  )[0];

  return (
    <section>
      {data.show_header && (
        <div className="prd">
          <h2 className="font-bold text-[26px] _text-default">{data.title}</h2>
          {data.show_view_all && (
            <span className="font-bold ">
              {data.title_action}
            </span>
          )}
        </div>
      )}
      <ItemsCarousel topItems={products} />
    </section>
  );
};

export default ProductsRow;

