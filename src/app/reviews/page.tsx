import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Reviews | SLO Spas",
  description:
    "Read what our customers have to say about their experience with SLO Spas. 5-star reviews from real customers on the Central Coast.",
};

const reviews = [
  {
    name: "Beth and Jim",
    rating: 5,
    text: "21 years of great experience with Cal Cooperage! When our first tub from California Cooperage finally expired after 21 years of use, we only called this one retailer about a replacement. The team\u2019s service has always been friendly, expert, and reliable.",
  },
  {
    name: "Lanny",
    rating: 5,
    text: "This could not have been a better experience for us. I did a lot of research before buying this spa and visited several dealers and I am so glad I picked this team for this purchase. Highly recommend Scott and Paul.",
  },
  {
    name: "Damone Faraday",
    rating: 5,
    text: "Bought two hot tubs from them. Always had great support and very knowledgeable people.",
  },
  {
    name: "Jesse L",
    rating: 5,
    text: "Best guys on the central coast! 100%",
  },
  {
    name: "Marty Imes",
    rating: 5,
    text: "Extremely knowledgeable. Excellent customer service. Thanks for helping get the spa hot and bubbling.",
  },
  {
    name: "Greg Sullivan",
    rating: 5,
    text: "Honest and wonderful to deal with!",
  },
];

export default function ReviewsPage() {
  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <main className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="bg-dark text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 relative"
              >
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-bold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Our Rating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-7 h-7 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-4xl font-bold text-primary mb-1">
                {averageRating.toFixed(1)}
              </p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-1">
                {totalReviews}
              </p>
              <p className="text-gray-600">Total Reviews</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-1">100%</p>
              <p className="text-gray-600">
                of customers recommend SLO Spas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl mb-8">
            Have you visited us? We&apos;d love to hear about your experience!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
