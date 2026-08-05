import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'blusa-tull-mesh-fireirie',
    name: 'Blusa Asimetrico en Tull Mesh Fireirie',
    tagline: 'Top de tull mesh con escote bardot y bajo asimetrico',
    description: 'Top de tull mesh con escote bardot y bajo asimetrico. Incluye un top interior que solo cubre el busto, brindando seguridad y comodidad mientras resalta la transparencia del tejido en el resto de la prenda.',
    price: 25.00,
    originalPrice: 50.00,
    isSale: true,
    isNew: false,
    category: 'Sale',
    material: 'Tull Mesh',
    imageUrl: '/product-blusa-tull-1.webp',
    gallery: ['/product-blusa-tull-1.webp', '/product-blusa-tull-2.webp', '/product-blusa-tull-3.webp'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Multicolor', hex: '#C4A265' }
    ],
    features: ['Tull mesh transparente', 'Escote bardot', 'Bajo asimetrico drapeado', 'Mangas largas'],
    inStock: true,
    rating: 4.7,
    reviewsCount: 5
  },
  {
    id: 'top-crop-acanalado-lazo',
    name: 'Top Crop Acanalado con Lazo y Cuello Cuadrado',
    tagline: 'Escote cuadrado con delicado lazo blanco',
    description: 'Top crop de manga larga en tejido de hilo acanalado con escote cuadrado y un delicado lazo blanco al frente.',
    price: 27.00,
    originalPrice: 49.00,
    isSale: true,
    isNew: false,
    category: 'Sale',
    material: 'Hilo Acanalado',
    imageUrl: '/product-top-crop-lazo-1.webp',
    gallery: ['/product-top-crop-lazo-1.webp', '/product-top-crop-lazo-2.webp', '/product-top-crop-lazo-3.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Verde Salvia', hex: '#8FAE8B' }
    ],
    features: ['Tejido acanalado de punto', 'Escote cuadrado', 'Lazo blanco al frente', 'Manga larga'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 3
  },
  {
    id: 'crop-tejido-celeste-moño',
    name: 'Crop Tejido Celeste con Moño Blanco',
    tagline: 'Escote cuadrado con tierno moño blanco',
    description: 'Crop top de manga larga en tejido de hilo acanalado, con escote cuadrado al frente y en la espalda, borde blanco en el cuello y un tierno moño blanco al frente.',
    price: 27.00,
    originalPrice: 49.00,
    isSale: true,
    isNew: false,
    category: 'Sale',
    material: 'Hilo Acanalado',
    imageUrl: '/product-crop-moño-1.webp',
    gallery: ['/product-crop-moño-1.webp', '/product-crop-moño-2.webp', '/product-crop-moño-3.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Celeste', hex: '#87CEEB' }
    ],
    features: ['Tejido acanalado de punto', 'Escote cuadrado frente y espalda', 'Moño blanco al frente', 'Manga larga', 'Borde blanco en cuello'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 4
  },
  {
    id: 'crop-tejido-arena-moño',
    name: 'Crop Tejido Arena con Moño Blanco',
    tagline: 'Escote cuadrado con tierno moño blanco',
    description: 'Crop top de manga larga en tejido de hilo acanalado, con escote cuadrado al frente y en la espalda, borde blanco en el cuello y un tierno moño blanco al frente.',
    price: 27.00,
    originalPrice: 49.00,
    isSale: true,
    isNew: false,
    category: 'Sale',
    material: 'Hilo Acanalado',
    imageUrl: '/product-crop-arena-1.webp',
    gallery: ['/product-crop-arena-1.webp', '/product-crop-arena-2.webp', '/product-crop-arena-3.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Arena', hex: '#C8B896' }
    ],
    features: ['Tejido acanalado de punto', 'Escote cuadrado frente y espalda', 'Moño blanco al frente', 'Manga larga', 'Borde blanco en cuello'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 2
  },
  {
    id: 'chaqueta-crop-aviator-gris',
    name: 'Chaqueta Crop Aviator Gris con Borreguito',
    tagline: 'Estilo aviator con borreguito beige',
    description: 'Chaqueta crop estilo aviator en color gris, con exterior de cuerina, amplias solapas y bordes de borreguito beige. Cuenta con un cierre frontal asimetrico y un diseno corto que estiliza la cintura.',
    price: 45.00,
    originalPrice: 60.00,
    isSale: true,
    isNew: false,
    category: 'Chaquetas',
    material: 'Cuerina y Borreguito',
    imageUrl: '/product-aviator-1.webp',
    gallery: ['/product-aviator-1.webp', '/product-aviator-2.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Gris con Borreguito Beige', hex: '#9E9E9E' }
    ],
    features: ['Exterior de cuerina', 'Bordes de borreguito beige', 'Amplias solapas', 'Cierre frontal asimetrico', 'Diseno crop que estiliza'],
    inStock: true,
    rating: 4.7,
    reviewsCount: 3
  },
  {
    id: 'crop-top-estampado-naranjas',
    name: 'Crop Top Estampado de Naranjas',
    tagline: 'Vibrante estampado de naranjas con hojas',
    description: 'Crop top de manga corta con cuello redondo y un vibrante estampado de dos naranjas con hojas al frente. Ideal para un look casual, fresco y veraniego.',
    price: 24.00,
    isSale: false,
    isNew: true,
    category: 'Tops',
    material: 'Algodon',
    imageUrl: '/product-naranjas-1.webp',
    gallery: ['/product-naranjas-1.webp', '/product-naranjas-2.webp', '/product-naranjas-4.webp', '/product-naranjas-3.webp'],
    sizes: ['S'],
    colors: [
      { name: 'Blanco / Negro', hex: '#1A1A1A' }
    ],
    features: ['Manga corta', 'Cuello redondo', 'Estampado de naranjas con hojas', 'Tela de algodon', 'Look casual y veraniego'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 2
  },
  {
    id: 'vestido-rib-grueso-cuello',
    name: 'Vestido Rib Grueso Manga Larga con Cierre en el Cuello',
    tagline: 'Tejido RIB grueso que amolda tu silueta',
    description: 'Vestido midi de manga larga con cuello alto, confeccionado en un tejido RIB grueso y elastico que se amolda perfectamente a la silueta, destacando las curvas de forma natural. Cuenta con un practico cierre frontal en el cuello.',
    price: 29.00,
    isSale: false,
    isNew: true,
    category: 'Vestidos',
    material: 'Tejido RIB Grueso (Acanalado de Punto)',
    imageUrl: '/product-vestido-rib-1.webp',
    gallery: ['/product-vestido-rib-1.webp', '/product-vestido-rib-5.webp', '/product-vestido-rib-3.webp', '/product-vestido-rib-4b.webp', '/product-vestido-rib-4.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Cocoa', hex: '#7B4B3A' },
      { name: 'Fucsia', hex: '#C71585' },
      { name: 'Cemento', hex: '#A9A9A9' },
      { name: 'Acero', hex: '#4682B4' },
      { name: 'Blanco', hex: '#FFFFFF' }
    ],
    features: ['Manga larga', 'Cuello alto con cierre frontal', 'Tejido RIB grueso y elastico', 'Corte midi que amolda la silueta', 'Disponible en 5 colores'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 6
  },
  {
    id: 'pantalon-jean-palazzo-denim',
    name: 'Pantalon Jean Palazzo Denim con Pretina Elastica y Lazo',
    tagline: 'Corte palazzo acid wash con lazo en la cintura',
    description: 'Pantalon de corte palazzo con un moderno acabado acid wash. Cuenta con pretina con liga (elastica fruncida) para maxima comodidad y un lazo de tela anudado para ajustar a la cintura. Sus costuras verticales al frente estilizan la figura y alargan la pierna.',
    price: 40.00,
    isSale: false,
    isNew: true,
    category: 'Jeans',
    material: 'Denim (Jean)',
    imageUrl: '/product-jean-palazzo-1.webp',
    gallery: ['/product-jean-palazzo-1.webp', '/product-jean-palazzo-2.webp'],
    sizes: ['28', '32'],
    colors: [
      { name: 'Gris Acid Wash', hex: '#6B6B6B' }
    ],
    features: ['Corte palazzo', 'Acabado acid wash', 'Pretina elastica fruncida', 'Lazo de tela en cintura', 'Costuras verticales estilizan la figura'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 5
  },
  {
    id: 'top-negro-encaje-ilusion',
    name: 'Top Negro con Estampado de Encaje Ilusion',
    tagline: 'Estampado grafico que simula encaje con tirantes',
    description: 'Top de manga corta con cuello redondo y un estampado grafico en el pecho que simula un top de encaje con tirantes. Ideal para un look casual, juvenil y con mucho estilo.',
    price: 25.00,
    isSale: false,
    isNew: true,
    category: 'Tops',
    material: 'Algodon (Jersey)',
    imageUrl: '/product-top-encaje-1.webp',
    gallery: ['/product-top-encaje-1.webp', '/product-top-encaje-2.webp'],
    sizes: ['S'],
    colors: [
      { name: 'Negro con estampado blanco', hex: '#1A1A1A' }
    ],
    features: ['Manga corta', 'Cuello redondo', 'Estampado grafico de encaje', 'Tela de algodon jersey', 'Look casual y juvenil'],
    inStock: true,
    rating: 4.7,
    reviewsCount: 3
  },
  {
    id: 'cardigan-largo-rosa-capucha',
    name: 'Cardigan Largo Rosa con Capucha, Bolsillos y Broches de Madera',
    tagline: 'Cierre de broches de madera y capucha acogedora',
    description: 'Cardigan de largo medio con capucha, confeccionado en un suave y calido tejido con un delicado estampado abstracto en blanco. Destaca por su cierre frontal con broches de madera y sus amplios bolsillos delanteros practicos.',
    price: 35.00,
    isSale: false,
    isNew: true,
    category: 'Chaquetas',
    material: 'Tejido',
    imageUrl: '/product-cardigan-rosa-1.webp',
    gallery: ['/product-cardigan-rosa-1.webp', '/product-cardigan-rosa-2.webp'],
    sizes: ['L'],
    colors: [
      { name: 'Rosa Empolvado', hex: '#D4A0A0' }
    ],
    features: ['Capucha', 'Cierre con broches de madera', 'Amplios bolsillos delanteros', 'Estampado abstracto texturizado', 'Diseno holgado y acogedor'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 4
  },
  {
    id: 'pantalon-palazzo-baby-rib',
    name: 'Pantalon Palazzo Baby Rib con Pretina Elastica y Bolsillos',
    tagline: 'Corte amplio en suave Baby Rib elastico',
    description: 'Pantalon de corte amplio y comodo confeccionado en suave material Baby Rib, ideal para estirarse y adaptarse a la silueta sin perder la forma. Cuenta con pretina elastica ajustable y dos practicos bolsillos delanteros.',
    price: 10.00,
    isSale: false,
    isNew: true,
    category: 'Pantalones',
    material: 'Baby Rib',
    imageUrl: '/product-palazzo-babyrib-1.webp',
    gallery: ['/product-palazzo-babyrib-1.webp', '/product-palazzo-babyrib-2.webp'],
    sizes: ['L'],
    colors: [
      { name: 'Azul Rey / Azul Electrico', hex: '#1E3A8A' }
    ],
    features: ['Corte palazzo amplio', 'Baby Rib suave y elastico', 'Pretina elastica ajustable', 'Bolsillos delanteros', 'Diseno relajado y moderno'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 3
  },
  {
    id: 'vestido-midi-marmolado-fruncido',
    name: 'Vestido Midi Estampado Marmolado con Fruncido y Abertura',
    tagline: 'Fruncido lateral ajustable y abertura alta',
    description: 'Vestido midi de tirantes finos con escote recto, confeccionado en tela Suplex, conocida por su gran elasticidad y suavidad al tacto. Destaca por su moderno diseno de fruncido lateral ajustable con cordon y una abertura alta que le aporta un toque sensual y elegante.',
    price: 25.00,
    originalPrice: 40.00,
    isSale: true,
    isNew: false,
    category: 'Vestidos',
    material: 'Suplex',
    imageUrl: '/product-vestido-marmolado-1.webp',
    gallery: ['/product-vestido-marmolado-1.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Marmolado Morado y Blanco', hex: '#7B2D8E' }
    ],
    features: ['Tirantes finos', 'Escote recto', 'Tela Suplex elastica y suave', 'Fruncido lateral ajustable con cordon', 'Abertura alta'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 5
  },
  {
    id: 'polera-crop-hoodie-boton',
    name: 'Polera Crop Hoodie con Boton, Estampado y Liga en la Cintura',
    tagline: 'Capucha, boton en cuello y liga ajustable',
    description: 'Sudadera crop con capucha y cierre de boton en el cuello, confeccionada en suave franela reactiva. Cuenta con practicos bolsillos laterales y un diseno con liga en la cintura (pretina elastica con tope ajustable) que permite regular el ajuste y realzar la silueta.',
    price: 25.00,
    isSale: false,
    isNew: true,
    category: 'Chaquetas',
    material: 'Franela Reactiva',
    imageUrl: '/product-polera-crop-1.webp',
    gallery: ['/product-polera-crop-1.webp', '/product-polera-crop-2.webp', '/product-polera-crop-3.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Menta / Azul Marino', hex: '#3EB489' }
    ],
    features: ['Capucha', 'Cierre de boton en cuello', 'Bolsillos laterales', 'Liga ajustable en cintura', 'Franela reactiva suave'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 3
  },
  {
    id: 'sueter-punto-pedreria-calados',
    name: 'Sueter Femenino de Punto con Mangas de Pedreria y Calados',
    tagline: 'Elegante patron de calados con pedreria brillante',
    description: 'Sueter de cuello redondo con un delicado diseno en las mangas, las cuales presentan un elegante patron de calados y un sutil acabado con pedreria brillante que le aporta un toque de glamour. Confeccionado en un tejido suave y comodo, es la prenda perfecta para lograr un look casual y chic.',
    price: 39.00,
    isSale: false,
    isNew: true,
    category: 'Sueteres',
    material: 'Tejido de Punto Suave',
    imageUrl: '/product-sueter-pedreria-1.webp',
    gallery: ['/product-sueter-pedreria-1.webp', '/product-sueter-pedreria-2.webp', '/product-sueter-pedreria-3.webp', '/product-sueter-pedreria-4.webp', '/product-sueter-pedreria-5.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Azul Marino', hex: '#1B2838' },
      { name: 'Rosa', hex: '#F4C2C2' },
      { name: 'Celeste', hex: '#B0E0E6' },
      { name: 'Gris', hex: '#BEBEBE' }
    ],
    features: ['Cuello redondo', 'Mangas con calados', 'Pedreria brillante en mangas', 'Tejido de punto suave', 'Disponible en 5 colores'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 7
  },
  {
    id: 'cardigan-lana-capucha-botones',
    name: 'Cardigan Tejido Lana con Capucha y Botones',
    tagline: 'Lana gruesita con estampados geometricos',
    description: 'Cardigan largo con capucha y cierre frontal de botones, confeccionado en lana gruesita que brinda un abrigo excepcional para los dias frios. Destaca por sus llamativos estampados geometricos en bloques y motas, ademas de contar con practicos bolsillos delanteros.',
    price: 35.00,
    originalPrice: 60.00,
    isSale: true,
    isNew: false,
    category: 'Chaquetas',
    material: 'Lana Gruesita',
    imageUrl: '/product-cardigan-lana-9.webp',
    gallery: ['/product-cardigan-lana-1.webp', '/product-cardigan-lana-2.webp', '/product-cardigan-lana-3.webp', '/product-cardigan-lana-7.webp', '/product-cardigan-lana-9.webp', '/product-cardigan-lana-4.webp', '/product-cardigan-lana-5.webp', '/product-cardigan-lana-6.webp', '/product-cardigan-lana-8.webp', '/product-cardigan-lana-10.webp', '/product-cardigan-lana-11.webp'],
    galleryGroups: [
      {
        name: 'Diseno Cuadros',
        images: ['/product-cardigan-lana-9.webp', '/product-cardigan-lana-1.webp', '/product-cardigan-lana-2.webp', '/product-cardigan-lana-3.webp', '/product-cardigan-lana-7.webp']
      },
      {
        name: 'Diseno Bloques Geometricos',
        images: ['/product-cardigan-lana-4.webp', '/product-cardigan-lana-5.webp', '/product-cardigan-lana-6.webp', '/product-cardigan-lana-8.webp', '/product-cardigan-lana-10.webp', '/product-cardigan-lana-11.webp']
      }
    ],
    sizes: ['L'],
    colors: [
      { name: 'Multicolor Geometrico', hex: '#8B6F47' }
    ],
    features: ['Capucha', 'Cierre frontal de botones', 'Lana gruesita abrigadora', 'Estampados geometricos en bloques y motas', 'Bolsillos delanteros'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 6
  },
  {
    id: 'vestido-acanalado-cuello-alto',
    name: 'Vestido Acanalado con Cuello Alto',
    tagline: 'Minimalista, elegante y versatil',
    description: 'Vestido de manga larga con cuello alto, confeccionado en un suave y elastico tejido acanalado que se amolda perfectamente a la silueta, destacando las curvas de forma natural. Un diseno minimalista, elegante y versatil, ideal para combinar con botas largas y accesorios para un look de otono/invierno muy estilizado.',
    price: 29.00,
    isSale: false,
    isNew: true,
    category: 'Vestidos',
    material: 'Tejido Acanalado (suave y elastico)',
    imageUrl: '/product-vestido-acanalado-1.webp',
    gallery: ['/product-vestido-acanalado-1.webp', '/product-vestido-acanalado-2.webp'],
    sizes: ['M'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Rosa', hex: '#F4C2C2' }
    ],
    features: ['Manga larga', 'Cuello alto', 'Tejido acanalado suave y elastico', 'Diseno minimalista', 'Ideal para otono/invierno'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 3
  },
  {
    id: 'blusa-manga-corta-bordado-floral',
    name: 'Blusa Manga Corta con Bordado Floral',
    tagline: 'Bordado floral y patron panal, toque bohemio',
    description: 'Blusa de cuello redondo con manga corta y corte amplio, confeccionada en suave viscosa importada que le da una caida natural y favorecedora. Destaca por su delicado bordado que combina un patron geometrico tipo panal con flores y hojas. Fresca, comoda y con un toque bohemio.',
    price: 18.00,
    isSale: false,
    isNew: true,
    category: 'Blusas',
    material: 'Viscosa Importada',
    imageUrl: '/product-blusa-bordado-1.webp',
    gallery: ['/product-blusa-bordado-1.webp', '/product-blusa-bordado-2.webp', '/product-blusa-bordado-3.webp', '/product-blusa-bordado-4.webp'],
    sizes: ['XL'],
    colors: [
      { name: 'Beige', hex: '#D4C5A9' },
      { name: 'Celeste', hex: '#87CEEB' },
      { name: 'Durazno', hex: '#EDC9AF' },
      { name: 'Lila', hex: '#C8A2C8' }
    ],
    features: ['Cuello redondo', 'Manga corta', 'Corte amplio', 'Bordado floral con patron tipo panal', 'Viscosa importada de excelente caida', 'Oferta: 2 unidades por S/ 30.00'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 4
  },
  {
    id: 'chaleco-zara-aviador-borreguito',
    name: 'Chaleco Zara Aviador con Borreguito',
    tagline: 'Aviador abierto con borreguito beige',
    description: 'Chaleco estilo aviador abierto (sin cierre ni botones), confeccionado en cuerina con todo el interior, amplias solapas y bordes forrados en suave borreguito beige. Cuenta con practicos bolsillos diagonales con el mismo detalle. Su diseno crop y abierto lo hace super versatil para llevar sobre un sueter, polera basica o vestido, logrando un look casual, moderno y muy abrigado.',
    price: 30.00,
    isSale: false,
    isNew: true,
    category: 'Chaquetas',
    material: 'Cuerina y Borreguito',
    imageUrl: '/product-chaleco-aviador-1.webp',
    gallery: ['/product-chaleco-aviador-1.webp', '/product-chaleco-aviador-cemento-1.webp', '/product-chaleco-aviador-2.webp', '/product-chaleco-aviador-3.webp', '/product-chaleco-aviador-1b.webp'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Cemento con Borreguito Beige', hex: '#A9A9A9' },
      { name: 'Vinotinto', hex: '#722F37' }
    ],
    features: ['Estilo aviador abierto (sin cierre)', 'Cuerina con interior de borreguito beige', 'Amplias solapas y bordes forrados', 'Bolsillos diagonales con borreguito', 'Diseno crop versatil', 'Disponible en Cemento y Vinotinto'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 5
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'Si vas a buscar aprobacion... que sea unicamente la tuya',
    date: 'AGOSTO 01, 2026',
    excerpt: 'La opinion del resto pasa de moda; tu seguridad, no.',
    image: '/diario-aprobacion.webp',
    content: [
      { type: 'p', text: 'Si vas a buscar aprobacion... que sea unicamente la tuya. La opinion del resto pasa de moda; tu seguridad, no.' },
      { type: 'p', text: 'Esta frase deberia venir impresa en cada espejo de cada probador del mundo. Porque, si somos sinceras, cuantas veces hemos dejado de comprar (o de ponernos) algo que nos encantaba solo porque alguien dijo algo negativo?' },
      { type: 'p', text: 'Es curioso: pedimos opinion para todo. Para el color de una chaqueta, para unos pantalones que nos hacen felices, para un vestido que nos hace sentir poderosas. Y cuando la opinion llega, aunque no la hayamos pedido, pesa.' },
      { type: 'blockquote', text: '"La moda pasa, las modas cambian, lo que hoy es tendencia manana puede ser pasado de moda. Pero tu forma de sentirte con lo que llevas puesto... eso no pasa de moda. Eso es tuyo."' },
      { type: 'p', text: 'Por eso, la proxima vez que abras tu armario, no te preguntes que pensara la gente. Preguntate que pienso YO cuando me veo con esto. Si la respuesta es una sonrisa, compralo. Pontelo. Lucelo.' },
      { type: 'p', text: 'En COCO ROSE seleccionamos prendas para que te gusten a ti, no para que gusten a los demas. Porque creemos que cuando una mujer se viste con confianza, no necesita la aprobacion de nadie.' }
    ]
  },
  {
    id: 2,
    title: 'El espejo no miente, pero tu decides como mirarte',
    date: 'JULIO 15, 2026',
    excerpt: 'Tu cuerpo no es un problema que resolver. Es una historia que contar.',
    image: '/diario-espejo.webp',
    content: [
      { type: 'p', text: 'Hay un momento critico que todas hemos vivido: estar frente al espejo, con una prenda puesta, y sentir que lo que vemos no nos gusta. Pero aqui viene la pregunta incomoda: no nos gusta la prenda o no nos gusta como nos estamos mirando?' },
      { type: 'p', text: 'Porque el espejo no miente. Refleja lo que hay. Pero nuestra mirada si que interpreta. Y a veces, sin darnos cuenta, miramos con los ojos de la critica, de la comparacion, de la exigencia.' },
      { type: 'p', text: 'Llevamos anos entrenadas para mirarnos con lupa. Para buscar defectos donde no los hay. Pero, y si decidimos mirarnos con otros ojos? Y si el espejo se convierte en un espacio de encuentro, no de juicio?' },
      { type: 'blockquote', text: '"Tu cuerpo no es un problema que resolver. Es una historia que contar. Y cada prenda que eliges es una pagina de esa historia."' },
      { type: 'p', text: 'No se trata de enganarte ni de ignorar lo que ves. Se trata de cambiar la pregunta. En lugar de me queda bien?, preguntate me siento bien?.' },
      { type: 'p', text: 'Porque cuando te miras desde el carino, el espejo te devuelve una version mas amable de ti.' },
      { type: 'p', text: 'En COCO ROSE creemos que cada prenda que elijas debe ser un espejo de tu esencia, no un reflector de tus inseguridades.' }
    ]
  },
  {
    id: 3,
    title: 'El secreto para empezar bien el dia',
    date: 'JULIO 01, 2026',
    excerpt: 'La ropa nunca es solo ropa. Es un lenguaje silencioso.',
    image: '/diario-dia.webp',
    content: [
      { type: 'p', text: '"La ropa nunca es solo ropa. Es un lenguaje silencioso, un escudo contra el exterior y, muchas veces, el termometro de nuestro estado de animo."' },
      { type: 'p', text: 'Cuantas veces has abierto el armario y has sentido que nada te representa? No es casualidad. La ropa que eliges cada manana habla de ti antes de que digas una palabra.' },
      { type: 'p', text: 'Y lo mismo pasa con el maquillaje. Un maquillaje ligero, bien aplicado, no es para ocultar, es para potenciar.' },
      { type: 'blockquote', text: '"No es superficialidad. Es un ritual de conexion contigo misma antes de enfrentar el dia."' },
      { type: 'p', text: 'Si tu dia se siente estancado, cambia las reglas de tu vestuario o de tu neceser. No necesitas una revolucion. Basta con un color que no sueles usar, una textura que te de paz.' },
      { type: 'p', text: 'Manana, cuando te levantes, no te vistas ni te maquilles para los demas. Hazlo para la mujer que quieres ser hoy.' },
      { type: 'p', text: 'Porque al final del dia, la unica mirada que define el valor de lo que llevas puesto es la tuya.' }
    ]
  }
];

export const BRAND_NAME = 'Coco Rose';
