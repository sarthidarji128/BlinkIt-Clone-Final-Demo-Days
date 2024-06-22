import { useNavigate } from 'react-router-dom';
import AddToCartButton from './shared/AddToCartButton';
import { CartProduct, ProductItem } from '../utils/types';
import { convertTextToURLSlug } from '../utils/helper';
import './ProductCard.css'
const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const { product_id, name, unit, price, mrp, image_url, discount, offer } = data;

  const cartProduct = {
    id: product_id.toString(),
    title: name,
    subTitle: unit,
    image: image_url,
    price,
    mrp,
  };

  const handleProductClick = () => {
    const pname = convertTextToURLSlug(data.name);
    navigate(`/prn/${pname}/prid/${data.product_id}`);
  };

  return (
  <div className="f" onClick={handleProductClick}>
      <div className='man'>
      {offer && (
        <div>{offer}</div>
      )}
      <div className="prdimg">
        <img src={image_url} alt="" className="h-full w-full p-2" />
      </div>
      <div className="con">
        <div className="prdtxt">
          {name}
        </div>
        
        <div className="prdunit">{unit}</div>
        <div className="prdis">
          {discount ? (
            <div className="g">
              <span className="text-[14px] _text-default font-semibold leading-none">
                ₹{price}
              </span>
              <del className="text-xs text-gray-400">₹{mrp}</del>
            </div>
          ) : (
            <div>
              <span className="text-[14px] _text-default">₹{mrp}</span>
            </div>
          )}
          </div>
            <div className="h-9 w-[90px]">
            <AddToCartButton product={cartProduct} />
            </div>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
