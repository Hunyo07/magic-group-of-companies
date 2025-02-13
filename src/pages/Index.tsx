import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Globe, Heart, MapPin, Percent, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Index = () => {AOS.init();

  return (


    <div   data-aos="zoom-in"  className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Welcome to Magic Group of Companies
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Your trusted retail partner in Pangasinan and nearby provinces
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-16">
        <div  className="container">
          <div   data-aos="fade-up" className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide quality products and exceptional service to our customers while contributing to the growth and development of our communities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading retail group in the region, known for excellence, innovation, and commitment to customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div data-aos="fade-up" className="container">
          <h2  className="mb-12 text-center text-3xl font-bold">What We Offer</h2>
          <div  className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Percent className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Exclusive Deals and Promotions</CardTitle>
                <CardDescription>
                  Enjoy exciting discounts and loyalty rewards designed to give you more value for your money.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Weekly sales and bundle offers</li>
                  <li>Holiday promotions and giveaways</li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link to="/promotions">Explore Deals →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Community-Centered Shopping</CardTitle>
                <CardDescription>
                  We're committed to serving local communities with accessible locations, ethical practices, and programs that give back.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>CSR initiatives, partnerships with local farmers and suppliers, and community outreach programs.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Convenience and Accessibility</CardTitle>
                <CardDescription>
                  With multiple branches across Pangasinan and nearby provinces, shopping with us is always within your reach.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Ample parking spaces</li>
                  <li>Clean and well-organized shopping environments</li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link to="/stores">Find a Store Near You →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Customer-Centric Services</CardTitle>
                <CardDescription>
                  Your satisfaction is our priority – we offer personalized assistance and innovative services to enhance your shopping experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Online shopping at shopmagic.com.ph</li>
                  <li>Flexible payment methods, including digital payments</li>
                  <li>Friendly and knowledgeable staff</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div  data-aos="fade-up" className="mt-12 text-center">
            <p className="mb-6 text-lg">Visit your nearest Magic store today and experience the difference!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div  data-aos="fade-up" className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Join Our Team</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            We're always looking for talented individuals to join our growing family. Discover exciting career opportunities with us.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/careers">View Careers</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Index
