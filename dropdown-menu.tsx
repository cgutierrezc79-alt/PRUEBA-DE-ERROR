export type CategoryType = 'Sale' | 'Blusas' | 'Tops' | 'Jeans' | 'Pantalones' | 'Vestidos' | 'Chaquetas' | 'Sueteres';

export interface ColorOption {
  name: string;
  hex: string;
}

export interface GalleryGroup {
  name: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: CategoryType;
  imageUrl: string;
  gallery?: string[];
  galleryGroups?: GalleryGroup[];
  features: string[];
  material?: string;
  sizes?: string[];
  colors?: ColorOption[];
  inStock?: boolean;
  rating?: number;
  reviewsCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface JournalParagraph {
  type: 'p' | 'blockquote' | 'poem';
  text: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: JournalParagraph[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState =
  | { type: 'home' }
  | { type: 'product'; product: Product }
  | { type: 'journal'; article: JournalArticle }
  | { type: 'checkout' };
