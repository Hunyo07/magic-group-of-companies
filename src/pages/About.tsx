import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, Target, Heart } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {AOS.init();
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div data-aos="zoom-in" className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">About Magic Group</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A leading retail company dedicated to providing quality products and exceptional service to our customers across Pangasinan and nearby provinces.
        </p>
      </div>

      {/* History Section */}
      <section data-aos="fade-up" className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Our History</h2>
        <div   className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              Founded in the heart of Pangasinan, Magic Group of Companies started as a small family business with a vision to serve the local community. Over the years, we've grown into one of the region's most trusted retail groups, expanding our presence while maintaining our commitment to quality and customer satisfaction.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">
              Through strategic growth and dedication to excellence, we've established multiple locations across the region, each embodying our core values of quality, service, and community engagement. Our journey continues as we strive to bring the best shopping experience to more communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section data-aos="fade-up"  className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Core Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Customer First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and satisfaction in everything we do.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Target className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive for excellence in our products, service, and operations.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Building className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We embrace change and continuously improve our services.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Heart className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are committed to supporting and growing with our communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section data-aos="fade-up" >
        <h2 className="mb-8 text-3xl font-bold text-center">Our Leadership</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Management Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our experienced management team brings together decades of retail expertise and local market knowledge. They work tirelessly to ensure we deliver on our promises to customers, employees, and communities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Corporate Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in giving back to our communities through various initiatives, including local employment opportunities, environmental sustainability programs, and community development projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About