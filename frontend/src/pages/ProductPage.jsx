import { useState, useEffect } from 'react';
import AnnouncementBar from '../components/product/AnnouncementBar';
import ProductHeader from '../components/product/ProductHeader';
import ProductHero from '../components/product/ProductHero';
import ProductFeatures from '../components/product/ProductFeatures';
import ProductReviews from '../components/product/ProductReviews';
import ProductFAQ from '../components/product/ProductFAQ';
import ProductFooter from '../components/product/ProductFooter';
import StickyAddToCart from '../components/product/StickyAddToCart';

export default function ProductPage() {
  const [showStickyCart, setShowStickyCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState('2-magnets');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCart(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <AnnouncementBar />
      <ProductHeader />
      
      <main className="pb-12">
        <ProductHero 
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductFeatures />
        <ProductReviews />
        <ProductFAQ />
      </main>
      
      <ProductFooter />
      
      <StickyAddToCart 
        show={showStickyCart}
        selectedColor={selectedColor}
        quantity={quantity}
      />
    </div>
  );
}