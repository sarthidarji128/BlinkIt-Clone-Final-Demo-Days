import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { showCart } from '../../store/ui';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const { billAmount, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
      onClick={() => dispatch(showCart())}
    >
      <FaShoppingCart size={24} className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none">
        {totalQuantity === 0 ? (
          <span className="">My Cart</span>
        ) : (
          <>
            <span className="tracking-tight">{totalQuantity} items</span>
            <span className="tracking-tight mt-0.5">₹{billAmount}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CartButton;
