import { useState } from 'react';
import { Star, Shield, Truck, Clock, Check, Minus, Plus, ShoppingCart, Heart, Share2, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { toast } from 'sonner';

const PRODUCT = {
  name: 'Snaprig GymBag M1',
  subtitle: 'Crossbody Shoulder Bag with Water Bottle Holder & Phone Pocket',
  originalPrice: 79.99,
  discount: 50,
  rating: 4.8,
  reviewCount: 1247,
  soldCount: '2.3K+',
  stockCount: 23,
  images: [
    'https://customer-assets.emergentagent.com/job_1476c465-a242-4fac-a123-cc38619c6fa5/artifacts/9i2vjw3l_39a128af-4b51-41bb-a000-077a893a6a22.webp',
    'https://customer-assets.emergentagent.com/job_1476c465-a242-4fac-a123-cc38619c6fa5/artifacts/qzoiuc99_27780cf4-cbca-480b-8ed1-8caa7634a554.webp'
  ],
  variants: [
    { name: '2 Magnets', value: '2-magnets', variantId: '56970937532761', price: 38.46, originalPrice: 76.92 },
    { name: '3 Magnets', value: '3-magnets', variantId: '56970937565529', price: 40.30, originalPrice: 80.60 }
  ],
  shopifyStore: 'snapr-3.myshopify.com'
};

export default function ProductHero({ selectedColor, setSelectedColor, quantity, setQuantity }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Set default to 2 magnets if not already set
  if (!selectedColor) {
    setSelectedColor('2-magnets');
  }

  const handleAddToCart = () => {
    toast.success('Added to cart!', {
      description: `${quantity} x ${PRODUCT.name} (${selectedColor})`,
      action: {
        label: 'View Cart',
        onClick: () => console.log('View cart clicked')
      }
    });
  };

  const handleBuyNow = () => {
    toast.success('Proceeding to checkout...', {
      description: 'Redirecting you to secure checkout'
    });
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg group">
            <img 
              src={PRODUCT.images[selectedImage]} 
              alt={PRODUCT.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-destructive text-destructive-foreground shadow-lg text-sm font-bold px-3 py-1">
                -{PRODUCT.discount}% OFF
              </Badge>
              <Badge className="bg-success text-success-foreground shadow-lg text-sm font-bold px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                BEST SELLER
              </Badge>
            </div>
            
            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button 
                size="icon" 
                variant="secondary"
                className="rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-background"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
              <Button 
                size="icon" 
                variant="secondary"
                className="rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-background"
                onClick={() => toast.success('Link copied to clipboard!')}
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Thumbnail images */}
          <div className="grid grid-cols-4 gap-3">
            {PRODUCT.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index 
                    ? 'border-primary shadow-md scale-105' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Trust badges */}
          <Card className="p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <Shield className="w-6 h-6 mx-auto text-success" />
                <p className="text-xs font-medium">30-Day Guarantee</p>
              </div>
              <div className="space-y-1">
                <Truck className="w-6 h-6 mx-auto text-primary" />
                <p className="text-xs font-medium">Free Shipping</p>
              </div>
              <div className="space-y-1">
                <Clock className="w-6 h-6 mx-auto text-accent" />
                <p className="text-xs font-medium">Fast Delivery</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Product Details */}
        <div className="space-y-6">
          {/* Title & Rating */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {PRODUCT.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {PRODUCT.subtitle}
            </p>
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(PRODUCT.rating) 
                        ? 'fill-accent text-accent' 
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
                <span className="ml-2 font-semibold">{PRODUCT.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({PRODUCT.reviewCount.toLocaleString()} reviews)
              </span>
              <Badge variant="secondary" className="font-semibold">
                {PRODUCT.soldCount} sold
              </Badge>
            </div>
          </div>
          
          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                ${PRODUCT.salePrice.toFixed(2)}
              </span>
              <span className="text-2xl text-muted-foreground line-through">
                ${PRODUCT.originalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              You save <span className="font-semibold text-success">${(PRODUCT.originalPrice - PRODUCT.salePrice).toFixed(2)} ({PRODUCT.discount}%)</span>
            </p>
          </div>
          
          {/* Stock warning */}
          <Card className="p-4 bg-destructive/10 border-destructive/20">
            <div className="flex items-center gap-2 text-destructive">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">
                Only {PRODUCT.stockCount} left in stock - Order soon!
              </span>
            </div>
          </Card>
          
          {/* Variant selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">
              Option: <span className="text-muted-foreground font-normal">{selectedColor}</span>
            </label>
            <div className="flex gap-3">
              {PRODUCT.variants.map((variant) => (
                <button
                  key={variant.value}
                  onClick={() => setSelectedColor(variant.value)}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all ${
                    selectedColor === variant.value
                      ? 'border-primary bg-primary text-primary-foreground shadow-md scale-105'
                      : 'border-border hover:border-primary hover:bg-muted'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">Quantity:</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="rounded-r-none"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-6 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  disabled={quantity >= 10}
                  className="rounded-l-none"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                (Max 10 per order)
              </span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <Button 
              size="lg" 
              className="w-full text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              BUY NOW - ${(PRODUCT.salePrice * quantity).toFixed(2)}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full text-lg font-semibold border-2 hover:bg-muted"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
          
          {/* Key features */}
          <Card className="p-5">
            <h3 className="font-bold mb-4 text-lg">Why You'll Love It:</h3>
            <ul className="space-y-3">
              {[
                '✓ Hands-free gym bag with secure water bottle holder',
                '✓ Transparent phone pocket for easy access during workouts',
                '✓ Multiple compartments for keys, cards, and essentials',
                '✓ Premium water-resistant nylon material',
                '✓ Adjustable crossbody strap for comfortable wear',
                '✓ Perfect for gym, running, hiking, cycling, or travel'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-success font-semibold text-lg">✓</span>
                  <span className="text-sm">{feature.slice(2)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}