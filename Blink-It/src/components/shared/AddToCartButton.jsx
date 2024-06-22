import React from 'react';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addItem, removeItem } from '../../store/cart';
import { CartProduct } from '../../utils/types';
import './AddToCartButton.css'
const AddToCartButton = ({ product, size }) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const itemInCart = cartItems.find(
    (item) => item.product.id === product.id
  );
  const itemCount = itemInCart ? itemInCart.quantity : 0;

  const add = (e) => {
    e.stopPropagation();
    dispatch(addItem({ ...product }));
  };

  const remove = (e) => {
    e.stopPropagation();
    dispatch(removeItem(product.id));
  };

  const handleItemAdd = (e) => {
    e.stopPropagation();
    dispatch(addItem({ ...product }));
  };

  return itemCount > 0 ? (
    <div className="l">
      <button onClick={(e) => remove(e)} type="button" className="b">
        <IoRemoveSharp size={18} className="text-white" />
      </button>
      <span className="flex items-center justify-center text-white">
        {itemCount}
      </span>
      <button onClick={(e) => add(e)} type="button" className="b">
        <IoAddSharp size={18} className="text-white" />
      </button>
    </div>
  ) : (
    <button type="button" className=" btn" onClick={(e) => handleItemAdd(e)}>
      Add
    </button>
  );
};

export default AddToCartButton;
