import { Card, CardContent } from "@/components/ui/card"

const Supermarket = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Magic Supermarket</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Fresh Produce" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Fresh Produce</h2>
            <p className="text-gray-600">
              Discover the freshest fruits and vegetables sourced directly from local farmers.
              Our produce section offers a wide variety of seasonal items to meet your daily needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="Store Exterior" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Modern Shopping Experience</h2>
            <p className="text-gray-600">
              Experience convenient shopping in our modern, well-organized stores.
              Wide aisles, clear signage, and helpful staff ensure a pleasant shopping experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Magic Supermarket?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Wide selection of fresh produce and grocery items</li>
          <li>Competitive prices and regular promotions</li>
          <li>Clean and organized store layout</li>
          <li>Friendly and knowledgeable staff</li>
          <li>Convenient locations across the country</li>
        </ul>
      </div>
    </div>
  )
}

export default Supermarket