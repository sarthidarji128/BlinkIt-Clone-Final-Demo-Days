import { useState } from 'react';
import { IoCaretForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { getProductForCart } from '../../utils/helper';
import { allFeatures } from '../BrandPromotion';
import { AddToCartButton } from '../shared';
import Breadcrumb from './Breadcrumb';
import ProductGallery from './ProductGallery';
import ProductInfoList from './ProductInfoList';
import ProductVarients from './ProductVarients';
import { ProductItemDetailed } from '../../utils/types';
import React from 'react';
import BrandPromotion from '../BrandPromotion';
import './ProductDetails.css'
// Ensure the path '../BrandPromotion' is correct relative to the location of ProductDetails.jsx

const ProductDetails = (props) => {
  const { product, varients } = props;
  const allVarients = [product, ...varients];
  const [itemIndex, setItemIndex] = useState(0);
  const currentProduct = allVarients[itemIndex];
  const productAsCartItem = getProductForCart(currentProduct);

  return (
    <div className="relative grid lg:grid-cols-2 lg:border-b border-gray-200 -mt-2">
      <div className="lg:border-r border-gray-200">
        <ProductGallery images={currentProduct.sliding_images} />
        <div className="hidden lg:block px-4 lg:px-0 pt-8">
          <h4 className="text-2xl font-bold text-gray-800">Product Details</h4>
          <ProductInfoList {...currentProduct.attribute_collection} />
        </div>
      </div>
      <div className="static lg:block">
        <div className="relative top-0 lg:sticky lg:top-20">
          <div className="px-4 lg:pl-12 lg:pt-8">
            <Breadcrumb {...currentProduct} />
            <h1 className="text-4xl leading-tight py-3">{currentProduct.name}</h1>
            <Link to="/" className="text-green-700 font-semibold text-lg flex items-center">
              {currentProduct.brand} <IoCaretForwardSharp size={14} className="ml-1" />
            </Link>
            <div className="mt-4 mb-6">
              <ProductVarients data={allVarients} onSelect={(e) => setItemIndex(e)} />
            </div>
            <div className="my-4 h-12 w-32">
              <AddToCartButton size="lg" product={productAsCartItem} />
            </div>
            <div className="lg:hidden mt-8">
              <h4 className="text-2xl font-medium text-gray-600">Product Details</h4>
              <ProductInfoList {...currentProduct.attribute_collection} />
            </div>
            <div className="pb-4 hidden lg:block">
              <h4 className="font-bold text-gray-800 text-base py-3">
                Why shop from WinkIt?
              </h4>
              {allFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <div>
                    <img className="w-12 h-12" src={feat.imgSrc} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-black text-sm">{feat.text}</h5>
                    <p className="text-xs text-gray-500">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
