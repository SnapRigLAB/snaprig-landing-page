import { Star, ThumbsUp, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

const REVIEWS = [
  {
    name: 'Sarah M.',
    rating: 5,
    date: '2 days ago',
    verified: true,
    title: 'Game changer for my morning runs!',
    content: 'I can\'t believe I used to run without this! The phone pocket is perfect for controlling my music, and having my water bottle so accessible is amazing. No more fumbling with armbands or waist belts.',
    helpful: 34,
    color: 'Black'
  },
  {
    name: 'Mike R.',
    rating: 5,
    date: '5 days ago',
    verified: true,
    title: 'Perfect for gym sessions',
    content: 'This pouch holds everything I need - phone, keys, cards, and my water bottle. The quality is excellent and it\'s super comfortable to wear. Worth every penny!',
    helpful: 28,
    color: 'Navy Blue'
  },
  {
    name: 'Jessica L.',
    rating: 5,
    date: '1 week ago',
    verified: true,
    title: 'My hiking essential',
    content: 'Took this on a 10-mile hike and it was perfect. Water-resistant material kept my phone dry when it started raining. The adjustable strap is really comfortable for long wear.',
    helpful: 42,
    color: 'Black'
  },
  {
    name: 'David K.',
    rating: 4,
    date: '1 week ago',
    verified: true,
    title: 'Great product, fits everything',
    content: 'Really happy with this purchase. Fits my large phone and a big water bottle easily. Only minor issue is I wish it had one more small pocket, but that\'s just being picky. Highly recommend!',
    helpful: 19,
    color: 'Charcoal Gray'
  },
  {
    name: 'Emma T.',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    title: 'Best gym accessory I own',
    content: 'This has replaced my gym bag for quick workouts. I can carry everything I need hands-free. The material quality is top-notch and it looks sleek too!',
    helpful: 51,
    color: 'Black'
  },
  {
    name: 'Tom H.',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    title: 'Worth every dollar',
    content: 'At first I thought the price was a bit high, but after using it for two weeks, I can say it\'s 100% worth it. The convenience factor is incredible. My workouts are so much smoother now.',
    helpful: 23,
    color: 'Navy Blue'
  }
];

const RATING_BREAKDOWN = [
  { stars: 5, percentage: 82, count: 1023 },
  { stars: 4, percentage: 14, count: 175 },
  { stars: 3, percentage: 3, count: 37 },
  { stars: 2, percentage: 1, count: 8 },
  { stars: 1, percentage: 0, count: 4 }
];

export default function ProductReviews() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
        <p className="text-muted-foreground text-lg">
          Don't just take our word for it - see what our customers say
        </p>
      </div>
      
      {/* Rating Summary */}
      <Card className="p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold">4.8</div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground">
              Based on <span className="font-semibold">1,247 reviews</span>
            </p>
          </div>
          
          {/* Rating Breakdown */}
          <div className="space-y-3">
            {RATING_BREAKDOWN.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-20">
                  <span className="text-sm font-medium">{item.stars}</span>
                  <Star className="w-4 h-4 fill-accent text-accent" />
                </div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {REVIEWS.map((review, index) => (
          <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            {/* Reviewer Info */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{review.name}</p>
                    {review.verified && (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < review.rating 
                        ? 'fill-accent text-accent' 
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              {review.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified Purchase
                </Badge>
              )}
            </div>
            
            {/* Review Content */}
            <div className="space-y-2">
              <h4 className="font-bold">{review.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>
              <p className="text-xs text-muted-foreground">
                Color: <span className="font-medium">{review.color}</span>
              </p>
            </div>
            
            {/* Helpful Button */}
            <Button variant="ghost" size="sm" className="w-full">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Helpful ({review.helpful})
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}