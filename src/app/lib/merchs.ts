const MERCHS = [
  {
    name: "Drawstring Bag",
    slug: "drawstring-bag",
    price: "12",
    color: "black, white",
    size: "6*8inch",
    description: "Strong 210D ripstop nylon drawstring bagAvailable in multiple sizesEasy-to-close durable drawstring Sturdy, reusable, and resilient"


  },
  {
    name:"Merch Hoodie",
    slug:"Hoodie",
    price:"$50",
    color:"black",
    size:"XS",
    description:"Fabric blend of Supima Cotton and Micromodal.",
  },
  {
    name:"",
    slug:"",
    price:"",
    color:"",
    size:"",
    description:"", 
  },
  {
    name:"",
    slug:"",
    price:"",
    color:"",
    size:"",
    description:"", 
  },
  {
    name:"",
    slug:"",
    price:"",
    color:"",
    size:"",
    description:"", 
  },
  {
    name:"",
    slug:"",
    price:"",
    color:"",
    size:"",
    description:"", 
  },
];

export function getPosts() {
  return MERCHS;
}


export function getPostBySlug(slug: string) {
  return MERCHS.find((merch) => merch.slug === slug);
}