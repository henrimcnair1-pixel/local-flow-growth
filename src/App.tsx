/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  PoundSterling, 
  Megaphone, 
  PhoneCall, 
  CheckCircle2, 
  ArrowDown, 
  MapPin, 
  User, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceArea: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceArea) return;

    setIsSubmitting(true);
    // Simulate submission delay for realistic feel
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Header Identity - Closed Funnel (No Navigation Links) */}
      <header className="w-full py-5 px-4 bg-white border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/local-flow-growth-logo.svg"
              alt="Local Flow Growth logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            30-Day Pilot Open For UK Contractors
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO SECTION (Above the Fold) */}
      <section className="relative py-16 md:py-24 px-4 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-green-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span>Exclusive Local Quote System for UK Landscapers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Get 3–5 High-Value Landscaping Quotes This Month—<span className="text-green-600">Risk-Free.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            We generate exclusive, qualified quote requests for UK landscapers. Try our system for 30 days with <span className="font-semibold text-slate-900 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">£0 management fees</span>. You only cover the raw ad spend.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToHowItWorks}
              id="hero-cta-btn"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>See How It Works</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Quick proof badges */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Resin Driveways & Patios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Porcelain & Full Garden Builds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Direct To Your Phone (SMS/WhatsApp)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Transparent & Simple
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              No complicated agency portals, shared lead pools, or long software setup. Just real local jobs sent straight to you.
            </p>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-6 font-extrabold text-xl">
                <PoundSterling className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Step 1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                You Set the Budget.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                You plug £10–£15 a day directly into Meta. We don't touch your card.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Zero hidden fees or card markups</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-6 font-extrabold text-xl">
                <Megaphone className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Step 2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                We Run the Ads.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                We launch targeted local campaigns specifically for high-ticket jobs like resin driveways, porcelain patios, and full garden builds.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Filters out tyre-kickers & window shoppers</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-6 font-extrabold text-xl">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Step 3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                You Get the Leads.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Every inquiry is pre-qualified by budget, location, and project timeline before reaching your phone—eliminating time-wasters completely.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Pre-screened by budget, area & timeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE "NO-BRAINER" PILOT OFFER SECTION */}
      <section id="pilot-offer" className="py-16 md:py-24 px-4 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden border-2 border-green-600">
            {/* Subtle decorative background ring */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-green-700" />
                Zero-Risk Pilot Program
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                The 30-Day Pilot Program
              </h2>

              <p className="text-slate-800 text-base sm:text-xl leading-relaxed mb-8 font-medium">
                We are taking on a handful of local contractors for a 30-day trial. We waive all of our standard agency build and management fees for the first month. You just fund the ad spend to prove the system works. If we bring you profitable jobs, we discuss a permanent partnership. If not, you walk away—and keep every high-converting ad creative, campaign setup, and custom landing page we built, 100% free.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-green-200 text-sm sm:text-base font-bold text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-black shadow-xs">
                    ✓
                  </div>
                  <span>£0 Agency Build & Management Fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-black shadow-xs">
                    ✓
                  </div>
                  <span>You Control Card & Ad Spend Directly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-black shadow-xs">
                    ✓
                  </div>
                  <span>100% Exclusive Homeowner Quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 text-xs font-black shadow-xs">
                    ✓
                  </div>
                  <span>Keep All Campaign Assets If You Walk Away</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE FINAL CALL TO ACTION (LEAD CAPTURE) */}
      <section id="claim-pilot" className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full">
                One Contractor Per Territory
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
                Claim Your 30-Day Pilot
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Enter your details below to check territory availability. We strictly lock out competing contractors in your primary service area.
              </p>
            </div>

            {submitted ? (
              <div id="success-message" className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg shadow-green-600/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Pilot Application Received!
                </h3>
                <p className="text-slate-700 text-base mb-6 leading-relaxed">
                  Thanks <span className="font-semibold text-slate-900">{formData.name}</span>. We are reviewing availability for <span className="font-semibold text-slate-900">{formData.serviceArea}</span> and will reach out to <span className="font-semibold text-slate-900">{formData.phone}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', serviceArea: '' });
                  }}
                  className="text-xs font-bold text-green-700 hover:text-green-800 underline underline-offset-4 cursor-pointer"
                >
                  Submit Another Area Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field 1: Name */}
                <div>
                  <label htmlFor="name-input" className="block text-sm font-bold text-slate-800 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. Dave Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Field 2: Phone Number */}
                <div>
                  <label htmlFor="phone-input" className="block text-sm font-bold text-slate-800 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="e.g. 07700 900123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Field 3: Primary Service Area */}
                <div>
                  <label htmlFor="service-area-input" className="block text-sm font-bold text-slate-800 mb-2">
                    Primary Service Area
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <input
                      id="service-area-input"
                      type="text"
                      required
                      placeholder="e.g. Northamptonshire & surrounding areas"
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-pilot-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Processing Application...</span>
                  ) : (
                    <>
                      <span>Claim Your 30-Day Pilot</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Strictly confidential. No spam, no obligation.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Minimal Footer - Closed Funnel */}
      <footer className="py-10 px-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <img
            src="/local-flow-growth-logo.svg"
            alt="Local Flow Growth logo"
            className="h-24 w-auto object-contain"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <p>© {new Date().getFullYear()} Local Flow Growth. Exclusive Lead Generation for UK Landscapers.</p>
            <a href="mailto:henri@localflowgrowth.co.uk" className="text-green-700 hover:text-green-800 font-semibold underline underline-offset-4">
              henri@localflowgrowth.co.uk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

