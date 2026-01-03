import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { toast } from 'sonner';

export default function StickyAddToCart({ show, selectedColor, quantity }) {
  const salePrice = 29.99;
  
  const handleBuyNow = () => {
    toast.success('Proceeding to checkout...', {
      description: 'Redirecting you to secure checkout'
    });
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-16 h-16 bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_1476c465-a242-4fac-a123-cc38619c6fa5/artifacts/vlx8aw18_imagine_2026-01-03_174822806.png" 
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm sm:text-base">Snaprig GymBag M1</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">4.8 (1,247)</span>
                <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                  {selectedColor}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Price & CTA */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-2xl font-bold text-primary">
                ${(salePrice * quantity).toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">
                Qty: {quantity}
              </div>
            </div>
            <Button 
              size="lg"
              className="font-bold shadow-lg hover:shadow-xl transition-all whitespace-nowrap animate-pulse-glow"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">BUY NOW</span>
              <span className="sm:hidden">${(salePrice * quantity).toFixed(2)}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}