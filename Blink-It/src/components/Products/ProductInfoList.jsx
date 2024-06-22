import React from 'react';
import { Attribute, AttributeCollection } from '../../utils/types';
import './ProductInfoList.css'
const ProductInfoList = (props = []) => {
  const allAttr = [];
  Object.values(props).forEach((prop) => allAttr.push(...prop.attributes));
  const disclaimerIndex = allAttr.findIndex(
    (item) => item.title === 'Disclaimer'
  );
  if (disclaimerIndex > -1) {
    allAttr.push(allAttr.splice(disclaimerIndex, 1)[0]);
  }

  return (
    <div className="py-4">
      <dl>
        {allAttr.map((attr, i) => (
          <React.Fragment key={i}>
            <dt className="text-sm font-extrabold text-black mb-2">
              {attr.title}
            </dt>
            <dd className="text-sm mb-4 text-gray-700">{attr.value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
};

export default ProductInfoList;
