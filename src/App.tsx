import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Star,
  Quote,
  Play,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          budget: '',
          goals: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or call us directly at +1-647-325-9928');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TheAmpify</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">Get Started</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-100"
            >
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Services</button>
                <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Case Studies</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit">Get Started</button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
            >
              Scale Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                Paid Media Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Drive qualified leads and maximize ROI with our expert paid advertising campaigns across Google, Facebook, LinkedIn, and more.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Get Free Audit <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:+16473259928"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive paid media solutions designed to drive growth and maximize your advertising ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Google Ads Management",
                description: "Search, Display, Shopping, and YouTube campaigns optimized for maximum conversions and ROI."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Facebook & Instagram Ads",
                description: "Targeted social media campaigns that reach your ideal customers and drive engagement."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "LinkedIn Advertising",
                description: "B2B focused campaigns that generate high-quality leads and build professional relationships."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Analytics",
                description: "Comprehensive tracking and reporting to measure success and optimize campaign performance."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Conversion Optimization",
                description: "Landing page optimization and A/B testing to improve conversion rates and reduce costs."
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Strategy & Consulting",
                description: "Expert guidance on paid media strategy, budget allocation, and growth planning."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real clients. See how we've helped businesses like yours achieve their growth goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "E-commerce Retailer",
                industry: "Fashion",
                result: "300% ROAS Increase",
                description: "Transformed their Google Shopping campaigns and increased return on ad spend from 2.1x to 6.3x within 90 days.",
                metrics: ["6.3x ROAS", "45% Lower CPC", "180% More Conversions"]
              },
              {
                company: "SaaS Startup",
                industry: "Technology",
                result: "85% Cost Reduction",
                description: "Optimized their LinkedIn and Google Ads to reduce cost per lead while maintaining lead quality.",
                metrics: ["85% Lower CPL", "120% More Leads", "95% Lead Quality"]
              },
              {
                company: "Local Service Business",
                industry: "Home Services",
                result: "250% Lead Growth",
                description: "Scaled their local advertising campaigns across Google and Facebook to dominate their market.",
                metrics: ["250% More Leads", "40% Lower Costs", "5x Market Share"]
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">{study.industry}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.company}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-4">{study.result}</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Why Choose TheAmpify?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just another marketing agency. We're your growth partners, dedicated to delivering measurable results and transparent reporting.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Data-Driven Approach",
                    description: "Every decision is backed by comprehensive data analysis and performance metrics."
                  },
                  {
                    title: "Transparent Reporting",
                    description: "Real-time dashboards and detailed monthly reports keep you informed of your ROI."
                  },
                  {
                    title: "Dedicated Account Manager",
                    description: "Your success is our priority. Get direct access to your dedicated campaign manager."
                  },
                  {
                    title: "Proven Track Record",
                    description: "Over $10M in ad spend managed with an average ROAS of 4.2x across all clients."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">$10M+ Ad Spend Managed</h3>
                  <p className="text-gray-600">Trusted by 200+ businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book a call to discuss your advertising goals and discover how we can help you achieve better results.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-xl text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-8">
                  We've received your message and will be in touch within 24 hours to schedule your call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="tel:+16473259928"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Monthly Ad Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                      required
                    >
                      <option value="">Select your budget range</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Tell us about your goals</label>
                    <textarea
                      rows={4}
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What are your main advertising objectives? What challenges are you facing?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Book A Call'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold">TheAmpify</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Performance-driven paid media marketing agency helping businesses scale through strategic advertising campaigns.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+16473259928" className="hover:text-white transition-colors">+1-647-325-9928</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@theampify.com" className="hover:text-white transition-colors">hello@theampify.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Toronto, Canada</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TheAmpify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;