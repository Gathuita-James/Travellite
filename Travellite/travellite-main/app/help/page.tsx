import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Help & FAQ - TravelLite",
  description: "Find answers to frequently asked questions about booking bus tickets with TravelLite.",
}

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Help Center</h1>
              <p className="text-xl text-gray-600 text-pretty">
                Find answers to common questions about booking and traveling with TravelLite.
              </p>
            </div>

            {/* Contact Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Need Immediate Help?</h2>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-blue-600 font-medium">+254 700 000 000</p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-blue-600 font-medium">support@travellite.co.ke</p>
                    <p className="text-sm text-gray-600">Response within 2 hours</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-blue-600 font-medium">+254 700 000 001</p>
                    <p className="text-sm text-gray-600">Quick responses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="booking">
                    <AccordionTrigger>How do I book a bus ticket?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Booking is simple! Enter your departure city, destination, travel date, and number of passengers
                        on our homepage. Browse available buses, select your preferred option, choose your seat class,
                        and complete the booking with your personal details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="payment">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        We accept M-Pesa, Airtel Money, major credit cards (Visa, Mastercard), and bank transfers. All
                        payments are processed securely through our encrypted payment gateway.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cancellation">
                    <AccordionTrigger>Can I cancel or change my booking?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-600 space-y-2">
                        <p>Yes, you can cancel or modify your booking:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Free cancellation up to 24 hours before departure</li>
                          <li>50% refund for cancellations 12-24 hours before departure</li>
                          <li>No refund for cancellations less than 12 hours before departure</li>
                          <li>Changes subject to availability and fare differences</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="documents">
                    <AccordionTrigger>What documents do I need to travel?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-600 space-y-2">
                        <p>You'll need:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Valid government-issued ID (National ID, Passport, or Driver's License)</li>
                          <li>Your booking confirmation (printed or on mobile)</li>
                          <li>For children under 18: Birth certificate or ID if available</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="baggage">
                    <AccordionTrigger>What's the baggage allowance?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-600 space-y-2">
                        <p>Standard baggage allowance includes:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>1 carry-on bag up to 7kg</li>
                          <li>1 checked bag up to 20kg</li>
                          <li>Additional charges apply for excess baggage</li>
                          <li>Fragile items travel at passenger's risk</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="departure">
                    <AccordionTrigger>When should I arrive at the departure point?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Please arrive at least 30 minutes before your scheduled departure time. This allows time for
                        check-in, baggage handling, and boarding. Late arrivals may result in missed departures without
                        refund.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="delays">
                    <AccordionTrigger>What happens if my bus is delayed or cancelled?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-600 space-y-2">
                        <p>In case of delays or cancellations:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>You'll be notified immediately via SMS and email</li>
                          <li>Free rebooking on the next available bus</li>
                          <li>Full refund if no suitable alternative is available</li>
                          <li>Meal vouchers for delays over 3 hours</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="safety">
                    <AccordionTrigger>How do you ensure passenger safety?</AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-600 space-y-2">
                        <p>Safety is our top priority:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>All partner operators are licensed and regularly inspected</li>
                          <li>Drivers undergo background checks and safety training</li>
                          <li>Buses are maintained according to strict safety standards</li>
                          <li>GPS tracking on all vehicles</li>
                          <li>24/7 emergency support</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="special-needs">
                    <AccordionTrigger>Do you accommodate passengers with special needs?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Yes, we strive to accommodate all passengers. Please contact us when booking to discuss specific
                        requirements such as wheelchair accessibility, dietary needs, or medical conditions. We'll work
                        with our operators to ensure your comfort and safety.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lost-items">
                    <AccordionTrigger>What if I lose something on the bus?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Contact our customer service immediately with your booking reference and travel details. We'll
                        coordinate with the bus operator to locate your item. Found items are held for 30 days before
                        being donated to charity.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
