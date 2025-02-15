import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap, Users } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const Careers: React.FC = () => {
  const { activeTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []); //
  return (
    <div className="flex flex-col">
      {loading && (
        <div
          id="global-loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="whirly-loader"></div>
        </div>
      )}
      {/* Hero Section */}
      <section
        style={{ backgroundColor: activeTheme.backgroundColor }}
        className="relative flex min-h-[40vh] items-center justify-center bg-blue-600 text-white"
      >
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Join Our Team
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Be part of a dynamic team that values growth, innovation, and
            excellence
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Join Us?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <Users
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Great Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with passionate individuals who inspire and support each
                  other
                </p>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <GraduationCap
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous learning and development opportunities
                </p>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <Building2
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Stability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a well-established company with a strong market presence
                </p>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <Briefcase
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Competitive compensation and comprehensive benefits package
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Current Openings
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Store Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Lead store operations and drive business growth while managing
                  a team of retail professionals.
                </p>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sales Associate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Provide exceptional customer service and assist in daily store
                  operations.
                </p>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
