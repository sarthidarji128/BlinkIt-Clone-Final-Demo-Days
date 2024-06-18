import ChemistProducts from '../lib/data/products/chemistProducts.json';
import DairyProducts from '../lib/data/products/dairyProducts.json';
import SnacksProducts from '../lib/data/products/snacksProducts.json';

const convertTextToURLSlug = (text) => {
  const clearText = text.replace(/[&\/\\#,+()$~%.":*?<>{}]/g, '').toLowerCase();
  return clearText.replace(/\s/g, "-")
}

const getCategoryLink = (category) => {
  const cat = convertTextToURLSlug(category.title);
  const sub = category.subcategories[0];
  const subcat = convertTextToURLSlug(sub.title);
  return `category/${cat}/${subcat}/${category.id}/${sub.id}`
}

const shuffleItems = (unshuffled) => {
  if (unshuffled === undefined) return []
  let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled;
}

const getProductForCart = (product) => {
  const { product_id, name, price, mrp, unit, image_url } = product;
  return {
    id: product_id.toString(),
    title: name,
    subTitle: unit,
    image: image_url || '',
    price,
    mrp,
  }
}

const getProducts = () => {
  const products = [...ChemistProducts, ...DairyProducts, ...SnacksProducts];
  return products;
}

const getProductById = (id) => {
  if(id) {
    const product = getProducts().filter((item) => item.id === id)[0]
    return product || null
  }
}

export { convertTextToURLSlug, getCategoryLink, shuffleItems, getProductForCart, getProductById }
