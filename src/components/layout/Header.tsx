import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Building, Home, Info, Phone, Users, Grid2x2, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

const Header = () => {
  const isMobile = useIsMobile()

  const NavigationItems = () => (
    <>
      <NavigationMenuItem>
        <Link to="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <Home className="mr-2 h-4 w-4 text-primary group-hover:text-white" />
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <Info className="mr-2 h-4 w-4 text-primary group-hover:text-white" />
          About Us
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="group">
          <Grid2x2 className="mr-2 h-4 w-4 text-primary group-hover:text-white" />
          Affiliates
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[200px] p-2">
            <Link to="/supermarket" className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
              Magic Supermarket
            </Link>
            <Link to="/department-store" className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
              Magic Department Store
            </Link>
            <a href="https://www.magicappliance.com.ph" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
              Magic Appliance
            </a>
            <span className="block px-4 py-2 text-sm text-gray-500">
              Food Group
            </span>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/careers" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <Users className="mr-2 h-4 w-4 text-primary group-hover:text-white" />
          Careers
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <Phone className="mr-2 h-4 w-4 text-primary group-hover:text-white" />
          Contact
        </Link>
      </NavigationMenuItem>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8ab284c3-136f-4674-9dfa-7d94d17243bb.png" 
            alt="Magic Group Logo" 
            className="h-14 w-auto" 
          />
          <div className="flex flex-col ml-4">
            <span className="text-[#0A3B8D] text-[28px] font-bold">MAGIC</span>
            <span className="text-[#ea384c] text-sm font-bold">GROUP OF COMPANIES</span>
          </div>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
                <Link to="/about" className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
                  <Info className="mr-2 h-4 w-4" />
                  About Us
                </Link>
                <div className="px-4 py-2">
                  <div className="flex items-center text-sm mb-2">
                    <Grid2x2 className="mr-2 h-4 w-4" />
                    Affiliates
                  </div>
                  <div className="ml-6 space-y-2">
                    <Link to="/supermarket" className="block text-sm hover:text-accent">
                      Magic Supermarket
                    </Link>
                    <Link to="/department-store" className="block text-sm hover:text-accent">
                      Magic Department Store
                    </Link>
                    <a href="https://www.magicappliance.com.ph" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-accent">
                      Magic Appliance
                    </a>
                    <span className="block text-sm text-gray-500">
                      Food Group
                    </span>
                  </div>
                </div>
                <Link to="/careers" className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
                  <Users className="mr-2 h-4 w-4" />
                  Careers
                </Link>
                <Link to="/contact" className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationItems />
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  )
}

export default Header