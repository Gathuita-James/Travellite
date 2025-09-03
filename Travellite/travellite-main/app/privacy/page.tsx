import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - TravelLite",
  description: "Learn how TravelLite collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

                <div className="prose prose-gray max-w-none space-y-6">
                  <section>
                    <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>We collect information you provide directly to us, such as:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Personal details (name, email, phone number, ID number)</li>
                        <li>Travel preferences and booking history</li>
                        <li>Payment information (processed securely by third-party providers)</li>
                        <li>Emergency contact information</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Process and manage your bookings</li>
                        <li>Communicate with you about your travel</li>
                        <li>Provide customer support</li>
                        <li>Send booking confirmations and travel updates</li>
                        <li>Improve our services and user experience</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>We may share your information with:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Bus operators to facilitate your travel</li>
                        <li>Payment processors to handle transactions</li>
                        <li>Service providers who assist in our operations</li>
                        <li>Law enforcement when required by law</li>
                      </ul>
                      <p className="mt-3">We do not sell your personal information to third parties.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                    <p className="text-gray-600">
                      We implement appropriate security measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive
                      data and secure server infrastructure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
                    <p className="text-gray-600">
                      We retain your personal information for as long as necessary to provide our services and comply
                      with legal obligations. Booking records are typically kept for 7 years for tax and legal purposes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
                    <div className="text-gray-600 space-y-2">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Object to processing of your information</li>
                        <li>Withdraw consent where applicable</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">7. Cookies and Tracking</h2>
                    <p className="text-gray-600">
                      We use cookies and similar technologies to improve your browsing experience, analyze site traffic,
                      and personalize content. You can control cookie settings through your browser preferences.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
                    <p className="text-gray-600">
                      Our services are not directed to children under 13. We do not knowingly collect personal
                      information from children under 13. If you believe we have collected such information, please
                      contact us immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
                    <p className="text-gray-600">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting
                      the new policy on this page and updating the "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                    <div className="text-gray-600">
                      <p>If you have questions about this Privacy Policy, please contact us:</p>
                      <p className="mt-2">
                        Email: privacy@travellite.co.ke
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
