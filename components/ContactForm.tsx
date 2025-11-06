import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-orange-300/50">
        <div className="text-center mb-8">
          <Mail className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-2">
            Contact Hindu Digest
          </h2>
          <p className="text-amber-800">
            We welcome your questions and inquiries about Hindu philosophy, Vedanta, and our programs
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 text-center">
            <div className="text-green-700 mb-2">
              <Send className="w-12 h-12 mx-auto mb-3" />
              <h3 className="mb-2">Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We will respond to you soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-amber-900 mb-2"
              >
                <User className="w-5 h-5" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-amber-900 mb-2"
              >
                <Mail className="w-5 h-5" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="flex items-center gap-2 text-amber-900 mb-2"
              >
                <MessageSquare className="w-5 h-5" />
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white"
                placeholder="What is your inquiry about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-amber-900 mb-2"
              >
                <MessageSquare className="w-5 h-5" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white resize-none"
                placeholder="Please share your thoughts or questions..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-8 border-t-2 border-orange-200">
          <div className="grid md:grid-cols-2 gap-6 text-amber-900">
            <div>
              <h4 className="mb-2">Email</h4>
              <p className="text-amber-800">contact@hindudigest.org</p>
            </div>
            <div>
              <h4 className="mb-2">Connect With Us</h4>
              <p className="text-amber-800">
                YouTube: @hindu-digest<br />
                SanskritFromHome.org<br />
                Indica Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
