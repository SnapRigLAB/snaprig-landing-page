import { Smartphone, Droplets, Package, Zap, Shield, Star } from 'lucide-react';
import { Card } from '../ui/card';

const FEATURES = [
  {
    icon: Droplets,
    title: 'Secure Water Bottle Holder',
    description: 'Insulated compartment keeps your bottle secure and accessible during any workout',
    color: 'text-primary'
  },
  {
    icon: Smartphone,
    title: 'Phone Pocket',
    description: 'Touch-sensitive transparent pocket lets you control your music without removing your phone',
    color: 'text-accent'
  },
  {
    icon: Package,
    title: 'Multi-Compartment Design',
    description: 'Separate pockets for keys, cards, cash, and gym essentials - everything organized',
    color: 'text-secondary'
  },
  {
    icon: Zap,
    title: 'Quick Access',
    description: 'All compartments designed for one-handed access while you\'re on the move',
    color: 'text-success'
  },
  {
    icon: Shield,
    title: 'Water-Resistant Material',
    description: 'Premium fabric protects your valuables from sweat, rain, and accidental spills',
    color: 'text-primary'
  },
  {
    icon: Star,
    title: 'Universal Fit',
    description: 'Adjustable strap and lightweight design works for everyone - gym, running, hiking',
    color: 'text-accent'
  }
];

const SPECIFICATIONS = [
  { label: 'Material', value: 'Premium Water-Resistant Polyester' },
  { label: 'Dimensions', value: '10" x 6" x 3"' },
  { label: 'Water Bottle Capacity', value: 'Fits up to 32oz bottles' },
  { label: 'Phone Compatibility', value: 'Fits all smartphones up to 7"' },
  { label: 'Strap Length', value: 'Adjustable 28" - 48"' },
  { label: 'Weight', value: 'Only 8.5oz (240g)' }
];

export default function ProductFeatures() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 space-y-12">
      {/* Features Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Everything You Need, One Pouch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed for athletes who demand convenience without compromise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Specifications */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Specs</h2>
        </div>
        
        <Card className="p-8 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {SPECIFICATIONS.map((spec, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                <span className="font-semibold text-muted-foreground">{spec.label}:</span>
                <span className="font-bold text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Social Proof Banner */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Star className="w-8 h-8 fill-accent text-accent" />
            <Star className="w-8 h-8 fill-accent text-accent" />
            <Star className="w-8 h-8 fill-accent text-accent" />
            <Star className="w-8 h-8 fill-accent text-accent" />
            <Star className="w-8 h-8 fill-accent text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">
            Join 2,300+ Happy Customers
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rated 4.8/5 stars - Our customers love the convenience and quality of their SnapRig Lab pouch
          </p>
        </div>
      </Card>
    </section>
  );
}