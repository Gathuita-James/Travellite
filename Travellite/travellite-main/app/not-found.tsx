import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Page Not Found - TravelLite",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-gray-400">404</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
              <p className="text-gray-600 mb-6">
                Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
              </p>
              <div className="space-y-3">
                <Link href="/" className="block">
                  <Button className="w-full">Go to Homepage</Button>
                </Link>
                <Link href="/help" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Help
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
