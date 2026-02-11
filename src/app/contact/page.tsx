"use client";

import { useState, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: searchParams.get("subject") || "",
    message: searchParams.get("message") || "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Page Heading */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/80">
            Visit our showroom or reach out for a free quote.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-secondary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="(805) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Hot Tub Quote">Hot Tub Quote</option>
                  <option value="Sauna Quote">Sauna Quote</option>
                  <option value="Cold Plunge Quote">Cold Plunge Quote</option>
                  <option value="Covana Cover Quote">Covana Cover Quote</option>
                  <option value="Service Request">Service Request</option>
                  <option value="Chemical Order">Chemical Order</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary resize-vertical"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again or call us at (805) 544-3565.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            )}
          </div>

          {/* Right Column - Contact Info Cards */}
          <div className="space-y-6">
            {/* Visit Our Showroom */}
            <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Visit Our Showroom
                </h3>
                <a
                  href="https://maps.google.com/?q=3035+Broad+St+San+Luis+Obispo+CA+93401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  3035 Broad St, San Luis Obispo, CA 93401
                </a>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Call Us
                </h3>
                <a
                  href="tel:+18055443565"
                  className="text-secondary hover:underline"
                >
                  (805) 544-3565
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:Dane@slospas.com"
                  className="text-secondary hover:underline block"
                >
                  Dane@slospas.com
                </a>
              </div>
            </div>

            {/* Showroom Hours */}
            <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Showroom Hours
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex justify-between gap-8">
                    <span className="font-medium text-gray-700">Mon:</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span className="font-medium text-gray-700">Tue-Fri:</span>
                    <span>10 AM - 5 PM</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span className="font-medium text-gray-700">Sat:</span>
                    <span>10 AM - 4 PM</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span className="font-medium text-gray-700">Sun:</span>
                    <span>By Appointment Only</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=SLO+Spas+3035+Broad+St+San+Luis+Obispo+CA+93401&output=embed"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLO Spas location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  );
}
