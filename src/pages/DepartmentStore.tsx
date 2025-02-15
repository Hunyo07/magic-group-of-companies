import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const DepartmentStore = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []); //
  return (
    <div className="container py-8">
      {loading && (
        <div
          id="global-loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="whirly-loader"></div>
        </div>
      )}
      <h1 className="text-4xl font-bold mb-6">Magic Department Store</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Home Section"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Home & Living</h2>
            <p className="text-gray-600">
              Transform your living space with our extensive collection of home
              furnishings, decor, and household essentials. Find everything you
              need to make your house a home.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <img
              src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
              alt="Store Interior"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Fashion & Lifestyle</h2>
            <p className="text-gray-600">
              Discover the latest trends in fashion, accessories, and beauty
              products. Our carefully curated collections cater to every style
              and occasion.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Department Store Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Multiple departments under one roof</li>
          <li>Premium brands and quality products</li>
          <li>Regular seasonal sales and promotions</li>
          <li>Professional customer service</li>
          <li>Convenient payment options</li>
        </ul>
      </div>
    </div>
  );
};

export default DepartmentStore;
