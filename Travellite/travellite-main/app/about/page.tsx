import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us - TravelLite",
  description: "Learn more about TravelLite and our mission to make travel across Kenya simple and affordable.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">About TravelLite</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Making travel across Kenya simple, affordable, and accessible for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Our Story */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2025, TravelLite was born from a simple idea: traveling between cities in Kenya should be
                  easy, transparent, and affordable. We noticed that finding and booking bus tickets was often
                  complicated, with limited information about schedules, prices, and operators.
                </p>
                <p className="text-gray-600">
                  Our platform brings together the best bus operators in Kenya, providing travelers with a single place
                  to compare options, check schedules, and book tickets with confidence.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  To revolutionize intercity travel in Kenya by providing a seamless, transparent, and reliable booking
                  platform that connects travelers with trusted bus operators.
                </p>
                <p className="text-gray-600">
                  We believe that everyone deserves access to safe, comfortable, and affordable transportation options,
                  regardless of their destination or budget.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                  <p className="text-gray-600 text-sm">
                    We partner only with trusted operators and provide accurate, up-to-date information.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees, clear pricing, and honest reviews from real travelers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Customer First</h3>
                  <p className="text-gray-600 text-sm">
                    Your comfort, safety, and satisfaction are our top priorities in everything we do.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                We're a passionate team of travel enthusiasts, technology experts, and customer service professionals
                dedicated to improving the travel experience for everyone in Kenya.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
