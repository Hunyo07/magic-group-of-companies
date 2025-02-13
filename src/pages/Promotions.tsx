import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Percent, Tag, Gift } from "lucide-react"

const Promotions = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Special Offers & Promotions
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Discover amazing deals and exclusive offers at Magic Group
          </p>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Percent className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Weekly Specials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get up to 50% off on selected items every week. New deals every Monday!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Tag className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Bundle Deals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Save more when you buy more! Check out our specially curated bundle offers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gift className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Holiday Promotions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Special holiday discounts and festive season offers coming soon!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Promotions