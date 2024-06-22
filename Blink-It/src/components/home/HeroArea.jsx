import React from "react";
import './HeroArea.css'
const HeroArea = () => {
    const ads = [
      {
        id: 1,
        banner: 'ad-1.png',
        banner_sm: 'ad-small-1.png',
      },
      {
        id: 2,
        banner: 'ad-2.png',
        banner_sm: 'ad-small-2.png',
      },
    ];
  
    return (
      <section>
        <img className="bannerimg" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="ad-1" />
        {/* {ads.map((ad) => (
          <div key={ad.id} className="ban">
            <img
              src={ad.banner}
              alt=""
              className="h-full w-full hidden sm:block md:ml-2"
            />
            <div>
            <img src="ad-1.p" alt="" className="h-full w-full sm:hidden md:ml-2" />
            </div>
          </div>
        ))} */}
      </section>
    );
  };
  
  export default HeroArea;
  
