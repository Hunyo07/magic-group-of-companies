import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, Phone } from "lucide-react"

const StoreLocations = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Our Store Locations
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Find the nearest Magic Group store in your area
          </p>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Dagupan Main Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Main Street<br />
                  Dagupan City, Pangasinan<br />
                  Contact: (075) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Urdaneta Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  456 Alexander Street<br />
                  Urdaneta City, Pangasinan<br />
                  Contact: (075) 123-4568
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>San Carlos Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  789 Rizal Avenue<br />
                  San Carlos City, Pangasinan<br />
                  Contact: (075) 123-4569
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreLocations