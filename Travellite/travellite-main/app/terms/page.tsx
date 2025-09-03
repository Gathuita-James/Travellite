import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service - TravelLite",
  description: "Read our terms of service and understand your rights and responsibilities when using TravelLite.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
                <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

                <div className="prose prose-gray max-w-none space-y-6">
                  <section>
                    <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">
                      By accessing and using TravelLite's website and services, you accept and agree to be bound by the
                      terms and provision of this agreement. If you do not agree to abide by the above, please do not
                      use this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
                    <p className="text-gray-600">
                      TravelLite is an online platform that facilitates the booking of bus transportation services
                      between various destinations in Kenya. We act as an intermediary between passengers and licensed
                      bus operators.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">3. Booking and Payment</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>3.1. All bookings are subject to availability and confirmation.</p>
                      <p>3.2. Payment must be completed at the time of booking.</p>
                      <p>3.3. Prices are subject to change without notice until payment is confirmed.</p>
                      <p>3.4. Service fees and taxes are clearly displayed before payment.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">4. Cancellation and Refunds</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>4.1. Cancellation policies vary by operator and are clearly stated during booking.</p>
                      <p>4.2. Refunds are processed according to the applicable cancellation policy.</p>
                      <p>4.3. Service fees may be non-refundable in certain circumstances.</p>
                      <p>4.4. Refunds typically take 5-7 business days to process.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">5. User Responsibilities</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>5.1. Provide accurate and complete information during booking.</p>
                      <p>5.2. Arrive at departure points on time with required documentation.</p>
                      <p>5.3. Comply with operator rules and regulations during travel.</p>
                      <p>5.4. Respect other passengers and crew members.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
                    <p className="text-gray-600">
                      TravelLite acts as an intermediary and is not liable for delays, cancellations, accidents, or
                      other issues that may occur during travel. Our liability is limited to the booking service fee
                      paid to us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">7. Privacy Policy</h2>
                    <p className="text-gray-600">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
                      the service, to understand our practices.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">8. Modifications</h2>
                    <p className="text-gray-600">
                      TravelLite reserves the right to modify these terms at any time. Changes will be effective
                      immediately upon posting on our website. Continued use of the service constitutes acceptance of
                      modified terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
                    <div className="text-gray-600">
                      <p>For questions about these Terms of Service, please contact us:</p>
                      <p className="mt-2">
                        Email: legal@travellite.co.ke
                        <br />
                        Phone: +254 700 000 000
                        <br />
                        Address: Nairobi, Kenya
                      </p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
