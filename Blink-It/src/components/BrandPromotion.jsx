import { IoCheckmarkCircle } from 'react-icons/io5';
import Feat1 from '../assets/images/promo-feat-1.webp';
import Feat2 from '../assets/images/promo-feat-2.avif';
import Feat3 from '../assets/images/promo-feat-3.avif';
import Feat4 from '../assets/images/promo-feat-4.webp';
import AppStoreLogo from '../assets/images/app-store.webp';
import PlayStoreLogo from '../assets/images/play-store.webp';
import './BrandPromotion.css'


const PromoFeature = (props) => {
  return (
    <div className="_border border rounded-2xl p-8 flex flex-col items-center gap-3">
      <img className="w-[100px] h-[100px] mb-4" src={props.imgSrc} alt="" />
      <h5 className="text-black font-bold text-sm text-center">{props.text}</h5>
      <p className="text-xs _text-default text-center">{props.description}</p>
    </div>
  );
};

const BrandPromotion = () => {
  return (
    <section className="py-6 mt-8">
      <div className="_container">
        <div className="flex flex-col gap-8 lg:border-t _border-muted lg:pt-20">
          <div className="py-10 px-4 rounded-2xl">
            <div className="lg:flex items-center justify-around h-full">
              <div className="hidden lg:flex flex-col justify-start w-[480px] relative">
                <div className="translate-y-32 -translate-x-16">
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold tracking-wide mb-6">
                  Get the BlinkIt app
                </h2>
                <div className="text-lg space-y-2">
                  <div className="flex items-center">
                    <IoCheckmarkCircle
                      size={20}
                      className="text-green-600 mr-3"
                    />{' '}
                    <span>Miss live order tracking</span>
                  </div>
                  <div className="flex items-center">
                    <IoCheckmarkCircle
                      size={20}
                      className="text-green-600 mr-3"
                    />{' '}
                    <span>Miss latest feature updates</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center  p-3 mt-6 gap-3 rounded-xl">
                  <div>
                    <img src="https://blink-it-by-arshad-gaurav-ayush-rohit-shubham.netlify.app/images/Profile.png" alt="" width={105} height={50} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-extrabold text-lg max-w-[300px] _text-default">
                      Simple way to download the WinkIt app
                    </p>
                    <span className="text-sm _text-default">
                      Scan QR code and download now
                    </span>
                  </div>
                </div>
                <div className="block lg:hidden mt-6">
                  <h4 className="font-semibold text-md leading-none mb-4">
                    Download the WinkIt App Now
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b _border-light pt-2 pb-10">
            <p className="text-sm _text-default">
              "WinkIt" is owned & managed by "WinkIt Commerce Private Limited"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export const allFeatures = [
    {
      imgSrc: Feat1,
      text: 'Superlazy Delivery',
      description:
        'Get your order delivered to your doorstep at the earliest from dark stores near you.',
    },
    {
      imgSrc: Feat2,
      text: 'Worst Prices & Offers',
      description:
        'Costlier prices than your local supermarket, great cashback offers to top it off.',
    },
    {
      imgSrc: Feat3,
      text: 'Narrow Assortment',
      description:
        'Choose from 000+ products across food, personal care, household & other categories',
    },
    {
      imgSrc: Feat4,
      text: 'Difficult Returns/Refund',
      description:
        'Satisfied with a product? Return it at the doorstep & get a refund within years.',
    },
  ];

export default BrandPromotion;

// src/components/BrandPromotion.jsx

// src/components/BrandPromotion.jsx
