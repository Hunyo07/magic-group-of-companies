import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Building,
  Home,
  Info,
  Phone,
  Users,
  Grid2x2,
  Menu,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { response } from "express";
import { useTheme } from "@/context/ThemeContext";

const Header: React.FC = () => {
  const { activeTheme, setActiveTheme } = useTheme();

  const rawThemeData = JSON.parse(localStorage.getItem("themeData")) || [];
  const rawActiveTheme = JSON.parse(localStorage.getItem("activeTheme")) || {};
  const [themeData, setThemeData] = useState(rawThemeData);
  // const [activeTheme, setActiveTheme] = useState(rawActiveTheme);
  const [loading, setLoading] = useState(false);

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const getThemeData = async () => {
    try {
      const response = await fetch(
        "https://magic-group-of-companes-api.vercel.app/api/theme/themes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("themeData", JSON.stringify(data));
      } else {
        console.log(data.message);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await fetch(
        "https://magic-group-of-companes-api.vercel.app/api/theme/get/active"
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("activeTheme", JSON.stringify(data));
        // setActiveTheme(data); // Update state immediately
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("Error fetching theme:", error);
    }
  };

  const handleActiveTheme = async (theme) => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/theme/set/active", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activeThemeId: theme._id,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("activeTheme", JSON.stringify(theme));
      setActiveTheme(theme);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer); // C
    } else {
      console.log(data);
    }
  };
  useEffect(() => {
    getThemeData();
  }, []);

  const NavigationItems = () => (
    <>
      {loading && (
        <div
          id="global-loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="whirly-loader"></div>
        </div>
      )}
      <NavigationMenuItem>
        <Link
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
          to="/"
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Home
            style={{ color: activeTheme.backgroundColor }}
            className="mr-2 h-4 w-4 text-primary group-hover:text-white"
          />
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
          to="/about"
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Info
            style={{ color: activeTheme.backgroundColor }}
            className="mr-2 h-4 w-4 text-primary group-hover:text-white"
          />
          About Us
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
          className="group hover:text-white"
        >
          <Grid2x2
            style={{ color: activeTheme.backgroundColor }}
            className="mr-2 h-4 w-4 text-primary group-hover:text-white"
          />
          Affiliates
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[200px] p-2">
            <Link
              to="/supermarket"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeTheme?.backgroundColor || "#ffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffff")
              }
            >
              Magic Supermarket
            </Link>
            <Link
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeTheme?.backgroundColor || "#ffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffff")
              }
              to="/department-store"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
            >
              Magic Department Store
            </Link>
            <Link
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeTheme?.backgroundColor || "#ffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffff")
              }
              to="https://www.magicappliance.com.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
            >
              Magic Appliance
            </Link>
            <span className="block px-4 py-2 text-sm text-gray-500">
              Food Group
            </span>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
          to="/careers"
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Users
            style={{ color: activeTheme.backgroundColor }}
            className="mr-2 h-4 w-4 text-primary group-hover:text-white"
          />
          Careers
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
          to="/contact"
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Phone
            style={{ color: activeTheme.backgroundColor }}
            className="mr-2 h-4 w-4 text-primary group-hover:text-white"
          />
          Contact
        </Link>
      </NavigationMenuItem>
      <div>
        <Button
          type="button"
          className="group text-black inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              activeTheme?.backgroundColor || "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#ffffff"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffff";
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = activeTheme?.backgroundColor || "#000"; // Revert to theme color
          }}
        >
          <Sun
            className="mr-2 h-4 w-4"
            style={{ color: activeTheme?.backgroundColor || "#000" }}
          />
          Theme
        </Button>
        {isOpen && (
          <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-2 px-5 py-4">
              {themeData.map((theme) => (
                <button
                  key={theme._id}
                  className="rounded-full  border border-transparent hover:border-blue-400"
                  onClick={() => {
                    setIsOpen(false);
                    handleActiveTheme(theme);
                  }}
                >
                  {theme.name}
                  <div
                    style={{ backgroundColor: theme.backgroundColor }}
                    className="p-4 rounded-full"
                  ></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );

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
            <span className="text-[#ea384c] text-sm font-bold">
              GROUP OF COMPANIES
            </span>
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
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
                >
                  <Info className="mr-2 h-4 w-4" />
                  About Us
                </Link>
                <div className="px-4 py-2">
                  <div className="flex items-center text-sm mb-2">
                    <Grid2x2 className="mr-2 h-4 w-4" />
                    Affiliates
                  </div>
                  <div className="ml-6 space-y-2">
                    <Link
                      to="/supermarket"
                      className="block text-sm hover:text-accent"
                    >
                      Magic Supermarket
                    </Link>
                    <Link
                      to="/department-store"
                      className="block text-sm hover:text-accent"
                    >
                      Magic Department Store
                    </Link>
                    <a
                      href="https://www.magicappliance.com.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-accent"
                    >
                      Magic Appliance
                    </a>
                    <span className="block text-sm text-gray-500">
                      Food Group
                    </span>
                  </div>
                </div>
                <Link
                  to="/careers"
                  className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Link>

                <div>
                  <Link
                    to=""
                    type="button"
                    className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Themes
                  </Link>
                  {isOpen && (
                    <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                      <div className="grid grid-cols-3 gap-2 px-5 py-4">
                        {themeData.map((theme) => (
                          <button
                            key={theme._id}
                            className="rounded-full  border border-transparent hover:border-blue-400"
                            onClick={() => {
                              setIsOpen(false);
                              handleActiveTheme(theme);
                            }}
                          >
                            {theme.name}
                            <div
                              style={{ backgroundColor: theme.backgroundColor }}
                              className="p-4 rounded-full"
                            ></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
  );
};

export default Header;
