export const products = [
  {
    id: 1,
    nombre: "Nike Air Max Plus III",
    category: "Men",
    precio: 179.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686084520/Nike_Air_Max_Plus_III_tdcide.png",
  },
  {
    id: 2,
    nombre: "Nike Air Max Plus",
    category: "Men",
    precio: 189.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085007/Zapatillas%20Products/Hombres/igukusozyjmm6ps5dabb.png",
  },
  {
    id: 3,
    nombre: "Nike Air VaporMax Plus",
    category: "Men",
    precio: 214.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085007/Zapatillas%20Products/Hombres/zb4emtmmt3bxfdvgygcv.png",
  },
  {
    id: 4,
    nombre: "Nike Court Royale 2 Next Nature",
    category: "Men",
    precio: 48.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085007/Zapatillas%20Products/Hombres/wqro3vpsjtfkiuqmxuzp.png",
  },
  {
    id: 5,
    nombre: "Nike Air Force 1 '07",
    category: "Men",
    precio: 119.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085007/Zapatillas%20Products/Hombres/fpaz2vxcijdl7uqnd7ha.png",
  },
  {
    id: 6,
    nombre: "Giannis Immortality 2",
    category: "Men",
    precio: 84.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085007/Zapatillas%20Products/Hombres/knm8oueibioqsnhsnaqk.png",
  },

  // FIN Hombres  Zapatillas

  // MUJERES  Zapatillas
  {
    id: 7,
    nombre: "Nike Air Max Plus",
    category: "Woman",
    precio: 179.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085467/Zapatillas%20Products/Mujeres/wsjxdkuleszzjkbmyozx.png",
  },
  {
    id: 8,
    nombre: "Nike Dunk High 1985",
    category: "Woman",
    precio: 139.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085468/Zapatillas%20Products/Mujeres/odywk0zsdxlbldraocrv.png",
  },
  {
    id: 9,
    nombre: "Nike Air Max 90 SE",
    category: "Woman",
    precio: 179.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085467/Zapatillas%20Products/Mujeres/ijyxohbfnum3lfkzp906.png",
  },
  {
    id: 10,
    nombre: "Air Jordan 1 Low FlyEase",
    category: "Woman",
    precio: 149.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085467/Zapatillas%20Products/Mujeres/xgggaizsz31kz8xhzocq.png",
  },
  {
    id: 11,
    nombre: "Nike Air Force 1 Mid '07",
    category: "Woman",
    precio: 139.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085468/Zapatillas%20Products/Mujeres/xbwtk6qsa80mae0p9tjt.png",
  },
  {
    id: 12,
    nombre: "Nike Air Max Alpha Trainer 4",
    category: "Woman",
    precio: 79.99,
    img: "https://res.cloudinary.com/debcgjfr8/image/upload/v1686085467/Zapatillas%20Products/Mujeres/ttquadaq0uytttunqiix.png",
  },
  // Niños  Zapatillas
  {
    id: 13,
    nombre: "Nike Air Force 1 Mid LE",
    category: "Kids",
    precio: 109.99,
    img: "src/assets/objets/zapas objet/niños/Nike_Air_Force_1_Mid_LE.png",
  },
  {
    id: 14,
    nombre: "Nike Blazer Mid '77",
    category: "Kids",
    precio: 84.99,
    img: "src/assets/objets/zapas objet/niños/Nike_Blazer_Mid__77.png",
  },
  {
    id: 15,
    nombre: "Nike Jr. Streetgato",
    category: "Kids",
    precio: 47.97,
    img: "src/assets/objets/zapas objet/niños/Nike_Jr._Streetgato.png",
  },
  {
    id: 16,
    nombre: "Nike Revolution 6",
    category: "Kids",
    precio: 35.97,
    img: "src/assets/objets/zapas objet/niños/Nike_Revolution_6.png",
  },
  {
    id: 17,
    nombre: "Jordan Flight Origin 4",
    category: "Kids",
    precio: 64.99,
    img: "src/assets/objets/zapas objet/niños/Jordan_Flight_Origin_4.png",
  },
  //OUTLET ZAPATILLAS
  {
    id: 18,
    nombre: "Nike Air Max Plus FFF",
    category: "Outlet",
    precio: 189.99,
    img: "src/assets/objets/zapas objet/Outlet/Nike_Air_Max_Plus_FFF.png",
  },
  {
    id: 19,
    nombre: "Nike Air Tuned Max",
    category: "Outlet",
    precio: 110.47,
    img: "src/assets/objets/zapas objet/Outlet/Nike Air Tuned Max.png",
  },
  {
    id: 20,
    nombre: "Nike Metcon 8",
    category: "Outlet",
    precio: 129.99,
    img: "src/assets/objets/zapas objet/Outlet/Nike_Metcon_8.png",
  },
  {
    id: 21,
    nombre: "Jordan Series",
    category: "Outlet",
    precio: 64.99,
    img: "src/assets/objets/zapas objet/Outlet/Jordan_Series.png",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
