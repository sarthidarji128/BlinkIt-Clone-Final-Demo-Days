import { IoChevronBack, IoChevronForwardSharp } from 'react-icons/io5';
import './CarouselButtonGroup.css'
const CarouselButton = (props) => {
  const icon =
    props.icon === 'prev' ? (
      <IoChevronBack size={20} />
    ) : (
      <IoChevronForwardSharp size={20} />
    );
  return (
    <button
      className="bt"
      type="button"
      onClick={props.onButtonClick}
    >
      {icon}
    </button>
  );
};

const CarouselButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  return (
    <>
    <div className="w-9">
      <div>
        {currentSlide !== 0 && (
          <CarouselButton className="bt" icon="prev" onButtonClick={() => previous()} />
        )}
      </div>
      <div >
        {currentSlide < totalItems - slidesToShow && (
          <CarouselButton className="bt" icon="next" onButtonClick={() => next()} />
        )}
      </div>
      </div>
    </>
  );
};

export default CarouselButtonGroup;
