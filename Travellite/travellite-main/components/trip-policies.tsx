import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TripPolicies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policies & Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cancellation Policy */}
        <div>
          <h4 className="font-semibold mb-2">Cancellation Policy</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Free cancellation up to 24 hours before departure</li>
            <li>• 50% refund for cancellations 12-24 hours before departure</li>
            <li>• No refund for cancellations less than 12 hours before departure</li>
            <li>• Refunds processed within 5-7 business days</li>
          </ul>
        </div>

        {/* Baggage Policy */}
        <div>
          <h4 className="font-semibold mb-2">Baggage Policy</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 1 carry-on bag (up to 7kg) included</li>
            <li>• 1 checked bag (up to 20kg) included</li>
            <li>• Additional baggage charges may apply</li>
            <li>• Fragile items travel at passenger's risk</li>
          </ul>
        </div>

        {/* Travel Requirements */}
        <div>
          <h4 className="font-semibold mb-2">Travel Requirements</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Valid ID required for all passengers</li>
            <li>• Arrive at departure point 30 minutes early</li>
            <li>• Children under 12 must be accompanied by an adult</li>
            <li>• Smoking and alcohol consumption prohibited</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold mb-2">Need Help?</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Customer Service: +254 700 000 000</p>
            <p>Email: support@travellite.co.ke</p>
            <p>Available 24/7 for assistance</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
