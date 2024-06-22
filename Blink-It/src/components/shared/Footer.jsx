import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { convertTextToURLSlug, getCategoryLink } from '../../utils/helper';
import AppStoreLogo from '../../assets/images/app-store.webp';
import PlayStoreLogo from '../../assets/images/play-store.webp';
import Brands from '../../lib/data/brandsList.json';
import Categories from '../../lib/data/categories.json';
import './Footer.css'

const UsefulLinks = [
  'About',
  'Careers',
  'Blog',
  'Press',
  'Lead',
  'Value',
  'Privacy',
  'Terms',
  'FAQs',
  'Security',
  'Mobile',
  'Contact',
  'Partner',
  'Express',
  'Local',
  'Spotlight',
  'Warehouse',
  'Deliver',
];

const PaymentPartners = [
  {
img:'data:image/png;base64,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',
    alt: 'MobikWik',
  },
  {
img: 'data:image/png;base64,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',
    alt: 'PayTm',
  },
  {
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf5rQoOt87qU25VDboIWw9KtxP0rfs6XSqw&s',
    alt: 'Visa',
  },
  {
img: 'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667',
    alt: 'Mastercard',
  },
  {
img: 'https://cdn.icon-icons.com/icons2/1178/PNG/512/maestro_82062.png',
    alt: 'Maestro',
  },
  {
img: 'https://cdn0.iconfinder.com/data/icons/payment-method/480/rupay_payment_card_bank-512.png',
    alt: 'RuPay',
  },
  {
img: 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2023/11/amex-logo.png?fit=2000%2C1311&ssl=1',
    alt: 'American Express',
  },
  {
img: 'data:image/jpeg;base64,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poqeFvRkbcD/AJWra1rzu3dOIiG0eiwI7dtFWC7TGeqt0fGcfikj+An3xyV2PkZaeJRmlZatFs60zSSB4t/FcDkcZ5cPwUrcvNaNTLEY6wlEMMcEbYoo2Rxt5NawAAfILXnv3lPw17pa6K7UpprhTMniPZ46eoPZSpe1J3WWJiJ8oZLsnsnH41LVV9M7tuS8x7HqtuOfl1qYiVftR5h3bLpChtLw8VVyq3+auskkb/TnH4qjJntk8xH9E4rEO3FTRQcoYWR/yMA/JUxr7Jza0+f8vcBEWndrbS3agloq+ATQSjDmnt6g9ipVtNZ3BMRPlwrLoS0WOvbW251ZHM0Y5z5Dh4IxzCtycnJkrqyMUiHrfdD2K+TGespCyod9qWF244+6YuTlxxqs9i1Ky5MGyvTkcgc/9NkA/ZfNyP4BWzz80wjGKqWWq0W+zwcC20cVPH3DG8z7nqVq2va87mVkREeG8PKiyygICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD//2Q==',
    alt: 'Sodexo',
  },
  {
img: 'data:image/png;base64,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',
    alt: 'BHIM UPI',
  },
  {
img: 'data:image/png;base64,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',
    alt: 'Net Banking',
  },
  {
img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABIFBMVEX19fX///+KLwAAAAD/+/qmenqFLAB7FgDu7u7z9vP49vmJKgDx8fF3GBn38ur///2ldGyGIgCPRT6DHABwAACCJgCpc2q3k43czMl2AADo6Oifa1+wgHmOKQDq5N7HpZyhoaGRkZHWu7CGSzzExMQsLCxGRkbV1dXf399YWFjn3NPay8GTSDgSEhJvb28bGxuOOA5jAACtra2YVk9kZGSEhITny8w8PDzXwq+QV0bFqJS7nI2ZYlOnaViFNR9hGhiHMyeEOi6aYFqDAABZAAB9QkCKLBX//u92LxiBNTOSQC6ohHyYVUOKVU2PHACAPzeUVjmkfmf06ti6j4CTaGnErqmXDACZbVE9AADUr7FNAABwHQ9wHwC1cWuUdGtmJhnvWJvhAAATQ0lEQVR4nO1dDVvayBbOkGy+NzFNUkiE8CEIgkr9YG2r61ZtaSut3tXl7r133bv//1/cc2YCBAwQVpP2Pg+viiGZzJx3zsyZMx+ZcNwaa6yxxhprrPFdQPYzSUXOJJVM0tFlPQs2sizrWSSj66kno8tQylIvZzLmWAZcuCz0AmUsE73o6ZPBWpl+jfGz4KJnkgqXSUFG7adfKSkXP/0cgyTST4XLpCGDupINFS6DdICMnoHl9+En7SqDld9PnQxaygz8GD+LVHQ9E38sA4vM0TYsfTJyJu0+ejAZKAasSxZ2jMvGUfaz6cNkoRiOy6DhX2ONNdZYY4011lhjjbSgAhSF/iOmYOi+LlPAgSGYBE5zHL2chTCY9t+8FThwQISKShQ5aBdqb0+LG2cUG8XTt7VCO1AUAS5jP1Fld6QJHL95Wo9EUQgXdMrFzWvJ864k27JKJcuypSvPk65/LpY7AWcqippBr5fOdTyFDBSu9jD/87kk2VouVyrlxoBjTbMl6fzn/LBtZELmCcUMQYzh4LIvWdqEhEgx/pLTLKl/NBjK5NlkTgNQU+7Kl+dQrFBsbcRHQy7jL/QAit31ZdkAc6BwQiamYBXQWk8+Fm/P3YhOFkFzz2/zH79X7RDy9hfrRhOX8wgLnHZj/fKWfJd0jNefvBLWiKRkNKg/Je/Ta+NbS/4IQnvDsViGJ9YM/bScjbbwraUPAXUFagtn1LakEpQwMTEVSgdu0ErSVs2AKJTUW9AlUJkAanAvWauwmIYl3QchmW9p2GjqKulseqXlMs+H5m12iErz5tuSURWzdi1piat9LBlNuq6ZCnVQvy0Zs/zOTl7rYwF1x35XNmmE34gH+2ec9l2wx09jA1ba7Z8K01FnSYbWfMXML2zxRU1MauA0N28q45gzge9HvVDVPLUXCiu+evUqIRlRtE/N0JrJfhbTIv707ItQXmzGxFdiYjLgfXplVtL0LJZd0BVEUTY1yVqmlxXIiCWpxsj4Gcy+yXSCnx2D784VLqxF7gvjkpgMhLMuCqgXP4MpXj2y4E6FBq79xV4oHTJxk6qFwX7TVv0sJsXpKMskGdXclBZl82pqGUHaNOUM5l597E5HsozkvUVFLCxjK3IRc06epD84gEsVphJpewtaSpHasZW5QOOrSe20qdBp9zEZBUfHtqxH7eHk+4p1PxKDax0JSsoepx8dTDMUlZy6Wim2mNFzr2gbs1z2R1kBGeSeElVJsftJG7FxtcSRyPbnODuFo2Q4FPOKlTJxIbSZ9jY8nbM+txUuvZ4NLrjzJ2tUwSybGzcxvUoqi6ZprxLW/lg2pZJbNLnUhqJxgZofWdkFXDrXsW6MZluW5bqaiw6muwzSlG6YWjCHtIuOmZZmYoY4jaItzhZ5gH3xQ34FbJw/JoNxinbRSMkAUDM2bflJ59oNiUz4iDnvskNWgXAqTe4Xw0Mk4153UhpNk+VHy5T0vC3OUIHCIV22TUJMMykXk5gvxqO2YzIU0kBPTTUzLTIp7IYyiJrtTVAgq5FRyFnEJEYzxt1NSzWP1vQq5XHxkN68rdVeh1CIuqJmdqMDIVE2Xjmr7mawORrB0HYL5gQqZHZyLoDgx3jvThPtn4PUaaDjrwodpxTKAGTisjwZIZPU+iWXWrAISuhXiCWngz5N+hOf+r03ajBF6azTac9AT0jHJAMUG5vO0gisnUHLeK+raspkMPrgizUuHSXbOXAmJsBBvCgk1I3w1cq51nRDilFr4I5bXwI15dFaBXVfcECAUAbLKlkaBRwiNOvGG5okEZn2ixvpxebLjSgu3dASOIXUh55B9Ub5w9F8nF0ebbRJMjLDvjfofDSnYOTBUmLr453iHHvKZDihEI9xnTGSGrSiN/g4cwp0esusi/27gROe6XJRlISiLoVxuWsQozMFg5BT5l2UXqVNBqD47UUSmskbmvbntyY5vdiNANxl0jlgtsVpZ7AiZfihOA+DQXmFRrPstYl5ZmtgNBhKJS/PEfN9SKaWvhNg3ntiTF9FpCat9GMtMReSfyeTu+jwriaWrgOVfGWjcVJeSXdCABRP/mGVYsCy9kYqo3+2HKBAY7PIkddexIuBBtN7rY7OuUck3WENKMREutiKwRuKrYFpJjIQpkA6FzWV/Ho17ZVJA4HcOYyaS7BZC5HCc6VgXoxPwWI5E2rGHEpgSd7NTO5ofUMRri3mKpncmEwaT7CpqhpsTUulmISLflUSWQAgk38TEMWbHXnzOqZwysqZZ0zIQP/w2dmA69d2OsECCIkaf9UkwebAIB2PGY4xclKRkI4TklHH/swTl43NI/OTs7u5AGUjiWJUhXQ+gQs3sEWXOv4u/YU/+wF49jXW0EzqTBpzHKqi/ORorg2w4BMP6Bf6gSevPsd1cGKKGak9QMhm57FbFJIRc85PUQPw7FwYmVxJchzm7c/Cc26DZK2mkP86z5CYbYlpJkomBTDNnN/X5uB1LSEXrDICMeNAzBoaADEjMoO5PotJEnr/pG2XSQwZbE3NPJvESp8M13bEfHxjwlGOCXvMtXeduKAqXFLOtdysAUiHjGA42u7rdjsIWmNAHyaAX26FUSZuMKfKoJ9DLbOWcwwhbc0ETs6idX2q5w9/Uo2LFS9WZPmoONsvG5MJm5mcE3Bpk+GciVsYDmqU0HsvOfkVyLTBI53DhdyH876OkToZk9lN2hKwOQhr9wvisrACGVpl5pC5DtfhSSRlMpxKaPVkExqUDPSi2BiAQIVB0yAIdNBZmJP5cKX41SDmeGjaFDCoKlB7poQ9zdIuSXkMAMiczaxk0C6MSL6q5t3wv7/9tpFvz+tB42nu0w+UFP3eyW/89tughg4rnuow51O0z8yUB2eAzOlMF+TqHkeYmVzwe3r7bvP+168HL4bxVpqeCw7KIyPeufz0j1/zv7o/bgSKiho9/SerjVenRE114AwcTa7mTJNxOuPGRSV3F5//LXOCwLXtz8P4UqaCBoa/UBeOM0n54Pc2RCoYpwebUPJMjlzcMMvi1NS0DYCq3s2SCSYtZfvg6CMrP4rRv4xtSfAaeXfbpmokg38N6TlFIf928ngOewVhvGrqHoBqXGuPNBO6BHf/+SE8Aj61P2ojfyVSWwCKmfcu2MBH+V8FqGV4XiXKr5dQ+YzbG0ZG2+XSJoOjzRtSdNZc1C7aikBhbn2IuGaBmzeFGHDBvSdaZ21OMDsHkdZGqN0WuM6WS5swMWe/FNIeOUdCWGmiawCuzvPlt2/L5fL9X+1xgYNeyflZOQang+srMVeyt+7L5aM3URPxk1QsPrDFeKAcr8alTUbFVf+upo3XAEHvsKRJoV+zQabIROc7J5DYhIgogQ80NTtdcCSpxJaw4KwC2IVnIRNrhqiIOF7BbUzWmeFwoCaK7CmAiF0DMoWp1WiaOOI/mu2HZvHciAx/COXo6Ia0AaZs0bh2Ui7mnHH+EYpSdOqOktHw4yBgdZz+CUVv7qIZmvm5nLXFqRMyxhcLYwkffXKKS4QwuYh/MGdJJ4YwL17Mx+6L3Ws3ZlEPkjHC6o+f7T9Kmig+DhkBkGE3UHNdmyZ/vUAGwG0yMir4ktY84JSZ5cbLqB20ybicmbcuG5BeQMh6MMZkgHwkHK6ImisDwpaiZPQ5yzopGUebn50gn2ZpjwEF5KoIGczKmfnmqiRqFhRBKy4wQ8kpE1YrFBI83ESHz3LzBWAZ9zAh4+NeWvM1Y1/Z8bBYjtJjCX7YfzyET9d6Xw578e1bBwegXFeSXHotDC5F73Qt+/3InNXes0sQGG5BaHNEYLh6mNLMnIEoJGNMz5lOAS+9jMfGyz8/UOGE4eWfL//78s+NTfiZExjDw7VL6qMZ+aOXGzNXFshAMSIjz66Cn8V8g/j9IKz5Pu5ztXC081kS09PNlZCMrC97BuLZ0nqGiBYmgOv6lo2oP0daqJpniGd+AhzbD3bpUvunpwR/Qrp1j5WxBPtBR++p7B/3Dtlxs1pnl1rV/eOqT4hcqTbh62GlEt7CwYX9OieQeqXaAkr1aoXdUKFowWGdHVbq/iG9GVjXq4c+nMD74apcZQEOMV78rxMCnzIkd1jpRcjotJCtQEbe3uN5vruDx3qP76I4pN6Fc3yjRVpdHnke89sstH9CQ/dk0uP5fTgBd9DI6id7iBOgVuW7eMhXWzt8mElV/phr8JgGnOvJYYAG2efxoAsJHfINCHvY4KsRMnSp9fJpmwkZEOrkuMHTSJonPI/Z52/zjV4PU2vtTZPZCUPX8b5GHW/fY2QafGN7G67WQXJ+G3ByGCWzw1X4E8iowy7flHkMu729g2ROtiHjGgKheQORTiTz/YRzaZNbaCT6Do3lEHJ9B641qZyV7p48Q0am2dva5vc5EBmye6KZBt/EG/keaoaNpzWnyLT4Paq2Pc7nu+H5faotiEpG1dTrJ3xlLJjOPVrTu4yMzHRS3QFp5X3+pMFDTWmBzgUo3nVuhkyzgV+hNO7oSKZbiZKpU80hTXZqmoxO9vhj4u/zPWGKDEe11SL6CV8FpvpEsvlOzDwyLZQoRHOvcbiP6ftd/qRabyItKPrNOkjFyDCRQdxtILMHavKr02T2+X25CnncBMySgQ+ZBgMyPQzAQfDtZqu5z/M6Fotul69ExkgTPzEUS+aQP/Z7/AlICxURS1wdyTDEkGmAcg57cWQojmfJgL7rh2hV/DDOFgTnGyddVjh8rHGtCReS+HnBODLyDpTYOi1nYEt7O3ugdCCzs7/fa8SSgSzd2Z4YgAmZvf39/ePKLBmwZ70K39OBzN42hNiXqQFA48OxvOQrU21G0jnbCBmslqRZr2PtPa700Dhy0I7IreoeX/f3+Ap0Jo4nZA4nZFrUgk+ROaZkui3f9+VZMvB5so2hoJhVZQiB3LfrlW4Yqs5MaYTMqprhmI57J10SFg++Sw53epBSE1Lxpw1Ai7YDYACOOSTD9TB4lEyDWrO9WAOAuQXqpGQiBgDMTkN+HjKkC5njH2I5gr/efu94j29CqlVdBkmbs+1MAxoSGfKySpAMaW5HyFSazR5Pr3Sxejd9IFPFgxbHyMjQjEFzSzXTwvNIRkdjVnkmMlBSu409lBsLHEf8BljXHTBVcLL7qNGsstB7TUaGVCLFrNuF4r8tY5hGt9vdq0CjuQcH3WOfkUFFYmw+RgLnTxgZ/5jnuechg/LwGA2YX+pJnfANHVRP7RFUKZr8yDSHoTFgj5IZCRI6QPy+TptxiirqjVrFFlplMmqMx9asgZnk0zh7z0QGJG6iRYQeHYsDzDt8NpmPSL8QcPjGoZvY/oxPgVM7ukvnxhFQcCQ80PEUi42GEMLzPgZgifjjhJ9K5ulY5VmHxEhIReHi14F8VyCJltbi857fWtIkUBM8mIorVuNmVb47cAmmCDCIOfjhu8eGoHBLZ9ZxNw7zL2kFuKsE/ttwJXvq+4GQbNWzbHxaMNb8aOj5FZvQgE982pQNlrsuHTK2LFeMLMLEp7DZyDMOveOYumhZYnjz4iTxyeLoALz2AGSE5WRk2by15w52Px79LmkPohsni2uFFEeggazYSQE8WYKoEuMPYLL0yVRV1mXzrx8T468HnGxCwbV+f3L6yrZGDwRH2LApDs26upqE7Pct1A+cdqXkyf74PoFaOBVf62CsgPLXvkXnztzfX98F4clg+PLDRd+ybTc6kwvsbLvUv/jwsjYKeHf3+ncsaJpm97fKq6TLJdjYSRVwlFBNDmKcfu1LmOG281CstX2OTbkYuJHm0YvrvutadH2t615fvzjaLJbxIRmFujpBrfjg2KhCu//19I6skCyXZJUAXtfBpiUFbmtoDC/PJahmYunKkS7ztUKgK9QlMoN2rVbODxD5fHnYadP1qCanBEFhmL98cCR8vMOWztnOjSukq6S05AFyORgOjiSJlnzb884vf8iXa4VOYHCjEYjRJDRnBJ0C8Nu4PPc8CZ9hBMt+NKgFKT+RkRh0q1m9MBzcep5FrYEkefb5BRQpVMhwjHw+P4Cid3FueyFzy/MuBsOCTL7xPm3TEFSobK1CfuvAwUULuKjODef0rP45Rb9Pm1c0CjlKRHIOLqBM+oIqpPX4/9+Fgs+jGkG7XLxwHFyGkQvbnnFLw77j9KslXTnORbHcDgy6H/J3RoUCPSGBE3BH4M1r+mTtlX1zEzbAYNLg+Mrz4ML15ttOwGHQb7bX3CqAGm90amCcz76cv2Pe1LvzL2eb9+VaB5/j/NbyrY5JV9OcrHDEnf++u51zl8AIG6FHbR0+6/297GiaEGPRwy3+lLHDHrnyfw+VNd9rPDuetmd4UmTyQja6a1M2b2JNPxFd97N48RemksH7Xv0MtuvE1WMZvL4yG/XLWdTLBItuniOV6E5qqWH5yq5nSUX3M0hlehPN1FLRM3gFd0ZlLJv3VuNujennGDRhmdTKR3uCppEKfUlq2mxknb7fJ2UyNL+WL4Z7KvxUHmGfBVrLDN7BnX524X7jfhY7G2fyglxMIgvTL2eRiv/kN0Ulw9Jl0M+CbDacz+ptv5m8hnmNNdZYY4011lhjjf8bZPDeG0RGkw+ZvF9JTmGDw8fAHlVGHZHlZP4HnVSUC4qfDAsAAAAASUVORK5CYII=',
    alt: 'Cash on Delivery',
  },
  {
img: 'data:image/jpeg;base64,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',
    alt: 'WinkIt cash',
  },
];

const Footer = () => {
  const allCategories = Categories.map((cat) => ({
    id: cat.id,
    text: cat.title,
    link: getCategoryLink(cat),
  }));

  const allBrands = Brands.map((brand) => ({
    text: brand,
    link: convertTextToURLSlug(brand),
  }));

  return (
    <footer>
      <div className="_container space-y-6">
        <div className="flex flex-col md:flex-row gap-4 pb-2">
          <div className="flex-1">
            <h3 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Categories
            </h3>
            <div className="cat">
              {allCategories.map((cat) => (
                <div
                  className="xyz"
                  key={cat.id}
                >
                  <Link src="#" className='nk' to={cat.link}>{cat.text}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Useful Links
            </h4>
            <div className="cat">
              {UsefulLinks.map((link, i) => (
                <div
                  className="cursor-pointer text-[15px] _text-default w-[50%] xs:w-[33%]"
                  key={i}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold my-6 text-lg">Brands</h4>
          <div className="cat">
            {allBrands.map((brand, i) => (
              <Link key={i} to={`brand/${brand.link}`}>
                <span className="">{brand.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold my-6 text-lg">Payment partners</h4>
          <div className="cat">
            {PaymentPartners.map((partner, i) => (
              <div key={i}>
                <div className="catt">
                  {partner.alt ? (
                    <img
                      src={partner.img}
                      alt={partner.alt}
                      className="imgc"
                    />
                  ) : (
                    <span className="text-xs _text-default text-center leading-tight">
                      {partner.alt}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcfcfc] py-6 mt-2 min-h-[60px]">
        <div className="_container">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <div className="flex flex-1 md:flex-row items-center gap-2">
              <h4 className="font-bold text-md leading-none lg:mr-4 _text-default">
                Download App
              </h4>
              <div className="cat">
                <img
                  src={AppStoreLogo}
                  alt="App store"
                  className="ig"
                />

                <img
                  src={PlayStoreLogo}
                  alt="Play store"
                  className="ig"
                />
              </div>
            </div>
            <br />
            <div className="cat">
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
