import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Users, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SLO Spas",
  description:
    "Learn about SLO Spas — a family business since 1986. SLO County's exclusive Jacuzzi dealer with nearly 40 years of experience creating backyard wellness sanctuaries in San Luis Obispo.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/BA1_9096.jpg"
          alt="SLO Spas showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-dark/85" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About SLO Spas
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            A family legacy of wellness on the Central Coast since 1986.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SLO Spas was founded in 1986 by Paul Hodgson, who saw an
                opportunity to bring premium wellness products to San Luis
                Obispo County. What began as one man&apos;s commitment to
                helping his neighbors live healthier, happier lives quickly grew
                into the Central Coast&apos;s most trusted name in home
                wellness.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Today, Paul&apos;s son Dane Hodgson carries the family legacy
                forward. Raised in the business and passionate about the same
                values his father instilled &mdash; honest service, quality
                products, and genuine care for every customer &mdash; Dane
                brings nearly 40 years of combined family expertise to every
                project. Under his leadership, SLO Spas has become the exclusive
                SLO County dealer for Jacuzzi, Clearlight Saunas, and Covana
                automated covers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a second-generation family business, we believe in more than
                just selling products &mdash; we create complete wellness
                retreats. Our approach integrates hot tubs, saunas, and cold
                plunges into a holistic experience where health and happiness
                converge. The same dedication that Paul brought to this
                community in 1986 drives everything we do today.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/BA1_9052.jpg"
                alt="SLO Spas showroom interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Passion for Wellness
              </h3>
              <p className="text-gray-600">
                We&apos;re passionate about the impact our products have on
                people&apos;s lives. From soothing sore muscles to promoting
                blood circulation, targeted hydrotherapy changes how you feel
                every day.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Nearly 40 Years of Expertise
              </h3>
              <p className="text-gray-600">
                A family business since 1986 means we&apos;ve seen every
                backyard, handled every installation challenge, and built
                lasting relationships across generations of customers.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Customer First
              </h3>
              <p className="text-gray-600">
                Our reviews speak for themselves &mdash; 100% five-star ratings.
                We take the time to understand your needs and guide you to the
                perfect wellness solution for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/construction.jpg"
                alt="Jacuzzi installation project"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Choose SLO Spas
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">1</span>
                  </span>
                  <div>
                    <p className="font-semibold text-primary">
                      Exclusive Authorized Dealer
                    </p>
                    <p className="text-gray-600 text-sm">
                      We&apos;re the only authorized Jacuzzi, Clearlight, and
                      Covana dealer in SLO County. You get genuine
                      products with full manufacturer warranties.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">2</span>
                  </span>
                  <div>
                    <p className="font-semibold text-primary">
                      Full-Service Support
                    </p>
                    <p className="text-gray-600 text-sm">
                      From consultation to installation to ongoing technical
                      service, we handle everything. We don&apos;t just sell you
                      a spa and disappear.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">3</span>
                  </span>
                  <div>
                    <p className="font-semibold text-primary">
                      Complete Wellness Approach
                    </p>
                    <p className="text-gray-600 text-sm">
                      We don&apos;t just sell hot tubs. We design complete
                      wellness experiences combining hydrotherapy, infrared heat,
                      and cold plunge therapy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">4</span>
                  </span>
                  <div>
                    <p className="font-semibold text-primary">
                      Local & Trusted
                    </p>
                    <p className="text-gray-600 text-sm">
                      We&apos;re your neighbors. Based right here on Broad
                      Street in SLO, we&apos;re invested in this community and
                      our reputation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/BA1_9072.jpg"
          alt="SLO Spas showroom"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-dark/85" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Our Showroom
          </h2>
          <p className="text-lg text-white/80 mb-2">
            3035 Broad St, San Luis Obispo, CA 93401
          </p>
          <p className="text-white/60 mb-8">
            Tue&ndash;Fri: 10 AM &ndash; 5 PM &nbsp;|&nbsp; Sat: 10 AM &ndash;
            4 PM &nbsp;|&nbsp; Sun: By Appointment Only
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-primary font-bold px-8 py-3 rounded-lg hover:bg-secondary-light transition inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8055443565"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition inline-flex items-center justify-center"
            >
              Call (805) 544-3565
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
