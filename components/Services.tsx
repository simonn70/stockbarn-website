import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Product3 from "../public/macroni.webp";
import Product2 from "../public/ricee.jpg";
import Product1 from "../public/market.jpg";


const marketProducts = [
  {
    title: "Vegetables",
    description: "Fresh and organic vegetables sourced directly from local farms.",
    category: "Groceries",
    price: "999",
    badge: "New Arrival",
    image: Product1,
  },
  {
    title: "Rice",
    description: "High-quality long-grain rice, perfect for every meal.",
    category: "Groceries",
    price: "120",
    badge: "Best Seller",
    image: Product2,
  },
  {
    title: "Macaroni",
    description: "Delicious and versatile macaroni for quick and easy meals.",
    category: "Groceries",
    price: "80",
    badge: "Limited Offer",
    image: Product3,
  },
];


export function MarketProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-4">
                {/* Badge and Category */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{product.badge}</Badge>
                  <span className="text-sm font-medium text-gray-600">{product.category}</span>
                </div>
                {/* Product Title */}
                <CardTitle className="mt-4 text-lg font-bold">{product.title}</CardTitle>
              </CardHeader>
              {/* Product Description and Price */}
              <CardContent>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-semibold text-customBlue">Ghs{product.price}</span>
                  <button className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
