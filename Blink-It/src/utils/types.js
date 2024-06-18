// SubCategory Type
const SubCategory = {
    id: 0,
    title: '',
    image: '',
    icon: '',
    subcategories: []
  };
  
  // InnerSubCategory Type
  const InnerSubCategory = {
    id: 0,
    title: '',
    image: ''
  };
  
  // Category Type
  const Category = {
    id: 0,
    title: '',
    image: '',
    color: '',
    icon: '',
    subcategories: [SubCategory]
  };
  
  // DiscountOffer Type
  const DiscountOffer = {
    button_cta_text: '',
    bank_name: '',
    subtitle: '',
    offer_color: '',
    bottomsheet_image_url: '',
    offer: {
      key: '',
      value: ''
    },
    text_color: '',
    content: [{
      data: [],
      heading: ''
    }],
    bg_color: '',
    image_url: '',
    icon_url: '',
    title: '',
    deeplink: ''
  };
  
  // ProductRow Type
  const ProductRow = {
    data: undefined,
    objects: []
  };
  
  // ProductItem Interface
  const ProductItem = {
    rating: 0,
    type_id: 0,
    sbc_offer: '',
    default_product_id: 0,
    has_details: false,
    sts_visibility: false,
    mapping_id: 0,
    merchant_type: '',
    sbc_price: 0,
    unit: '',
    pricing_comment: '',
    level1_category: [],
    unit_price: 0,
    unit_type: '',
    rating_count: 0,
    badges: [],
    line_1: '',
    sbc_enabled: false,
    type: '',
    brand: '',
    inventory: 0,
    recommended_purchase_quantity: 0,
    offer: '',
    price: 0,
    incentives: [],
    sts_sbc_savings: null,
    discount: 0,
    level0_category: [],
    rating_star_color: null,
    pl_flag: false,
    product_tags: [],
    video_meta: [],
    line_2: '',
    name: '',
    rating_flag: false,
    mrp: 0,
    leaf_category: {
      parent_id: 0,
      level: '',
      name: '',
      id: 0
    },
    received_at_ts: 0,
    product_id: 0,
    image_url: '',
    group_id: 0,
    next_available_at: {
      next_available_ts: '',
      next_available_text: ''
    },
    combo_flag: false
  };
  
  // Attribute Interface
  const Attribute = {
    title: '',
    url: undefined,
    detail: '',
    value: '',
    help_text: '',
    type: ''
  };
  
  // AttributeCollection Interface
  const AttributeCollection = {
    attributes: [Attribute],
    title: ''
  };
  
  // Value Interface
  const Value = {
    mapping_id: 0,
    selected: false,
    enabled: false,
    name: '',
    value: undefined
  };
  
  // Option Interface
  const Option = {
    values: [Value],
    type: 0,
    title: ''
  };
  
  // PidMapping Interface
  const PidMapping = {};
  
  // LevelCategory Interface
  const LevelCategory = {
    id: 0,
    name: ''
  };
  
  // LeafCategory Interface
  const LeafCategory = {
    id: 0,
    name: '',
    level: ''
  };
  
  // Reviews Interface
  const Reviews = {
    reviews_list: [],
    show_new_badge: false,
    title: ''
  };
  
  // ProductItemDetailed Interface
  const ProductItemDetailed = {
    rating: 0,
    attribute_collection: [AttributeCollection],
    mrp: 0,
    has_details: false,
    mapping_id: 0,
    brand_id: 0,
    merchant_type: '',
    sbc_price: undefined,
    b2b_inventory: 0,
    badges: [],
    options: [Option],
    pid_mapping: PidMapping,
    derived_attributes: undefined,
    pricing_comment: '',
    level1_category: [LevelCategory],
    unit_price: 0,
    unit_type: '',
    rating_count: 0,
    unit: '',
    line_1: '',
    line_2: '',
    type: '',
    brand: '',
    inventory: 0,
    recommended_purchase_quantity: undefined,
    offer: '',
    price: 0,
    incentives: [],
    user_message_limit: 0,
    level0_category: [LevelCategory],
    rating_star_color: '',
    type_id: 0,
    merchant_id: 0,
    pl_flag: false,
    name: '',
    sbc_enabled: false,
    product_id: 0,
    rating_count_text: undefined,
    rating_flag: false,
    sbc_offer: '',
    leaf_category: {
      parent_id: 0,
      level: '',
      name: '',
      id: 0
    },
    received_at_ts: 0,
    reviews: Reviews,
    rating_text_color: '',
    image_url: '',
    sbc_unit_price: 0,
    title: '',
    group_id: 0,
    combo_flag: undefined,
    sliding_images: []
  };
  
  // CartProduct Type
  const CartProduct = {
    id: '',
    title: '',
    subTitle: '',
    image: '',
    price: 0,
    mrp: 0
  };
  
  // CartItem Type
  const CartItem = {
    product: CartProduct,
    quantity: 0,
    totalPrice: 0,
    billPrice: 0,
    discount: 0
  };
  
  // Exporting types and interfaces
  export {
    SubCategory,
    InnerSubCategory,
    Category,
    DiscountOffer,
    ProductRow,
    ProductItem,
    Attribute,
    AttributeCollection,
    Value,
    Option,
    PidMapping,
    LevelCategory,
    LeafCategory,
    Reviews,
    ProductItemDetailed,
    CartProduct,
    CartItem
  };
  