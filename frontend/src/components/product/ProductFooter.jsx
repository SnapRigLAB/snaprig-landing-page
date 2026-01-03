import { Shield, Truck, RefreshCw, Mail } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from 'sonner';

export default function ProductFooter() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!', {
      description: 'You\'ll receive exclusive deals and updates.'
    });
  };

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      {/* Guarantee Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Our Promise to You</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-success/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg">30-Day Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Get your money back, no questions asked.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, reliable delivery at no extra cost to you.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Simple return process if it's not the perfect fit.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Mail className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">Get Exclusive Deals</h3>
          <p className="text-muted-foreground">
            Subscribe to get special offers, product updates, and fitness tips!
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
              required
            />
            <Button type="submit" className="font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      
      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 SnapRig Lab. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}