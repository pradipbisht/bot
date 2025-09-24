import React, { useState } from "react";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
// import PricingComparison from "./PricingComparison";
import PricingFAQ from "./PricingFAQ";
import PricingCTA from "./PricingCTA";

import { Target, Zap, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started",
    monthlyPrice: 997,
    yearlyPrice: 897,
    icon: <Target className="w-8 h-8" />,
    features: [
      "Website audit & optimization",
      "Basic SEO (5 keywords)",
      "Social media setup (2 platforms)",
      "Monthly performance reports",
      "Email support",
      "1 landing page creation",
    ],
    limitations: [
      "No paid advertising",
      "Limited social posts (8/month)",
      "No phone support",
    ],
  },
  {
    name: "Growth",
    description: "Most popular choice for growing businesses",
    monthlyPrice: 1997,
    yearlyPrice: 1797,
    icon: <Zap className="w-8 h-8" />,
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Advanced SEO (15 keywords)",
      "Paid Ads campaign management ($2K ad spend)",
      "Social media management (4 platforms)",
      "Content creation (8 posts/month)",
      "Email marketing campaigns",
      "Bi-weekly strategy calls",
      "Phone & email support",
      "3 landing pages",
      "A/B testing",
      "Conversion optimization",
    ],
    limitations: ["Limited to $2K monthly ad spend"],
  },
  {
    name: "Scale",
    description: "Enterprise solution for maximum growth",
    monthlyPrice: 3997,
    yearlyPrice: 3597,
    icon: <Rocket className="w-8 h-8" />,
    features: [
      "Everything in Growth, plus:",
      "Premium SEO (unlimited keywords)",
      "Unlimited Paid Ads management",
      "Social media (all major platforms)",
      "Content creation (20 posts/month)",
      "Video content creation",
      "Weekly strategy calls",
      "Dedicated account manager",
      "Unlimited landing pages",
      "Advanced analytics dashboard",
      "AI chatbot integration",
      "CRM setup & automation",
      "Influencer outreach",
      "PR & reputation management",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    question: "What's included in each plan?",
    answer:
      "Each plan includes different levels of service and features. Starter covers basics, Growth adds advanced features, Scale provides enterprise-level solutions.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "You can upgrade or downgrade anytime. Upgrades give immediate access, downgrades take effect next billing cycle.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes! Contact us for packages tailored to your business, industry, and budget.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "30-day money-back guarantee for new clients. Full refund if unsatisfied within 30 days.",
  },
  {
    question: "Do I need a long-term contract?",
    answer: "No. All plans are month-to-month with 30-day notice cancellation.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "SEO results usually take 3-6 months, Paid Ads are immediate, social engagement improves within first month.",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="min-h-screen">
      <PricingHeader
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </section>

      {/* <PricingComparison /> */}

      <PricingFAQ faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <PricingCTA />
    </div>
  );
}

