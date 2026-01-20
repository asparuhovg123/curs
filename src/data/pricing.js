export const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 100 products",
      "Basic analytics dashboard",
      "Email support",
      "SSL certificate included",
      "Mobile responsive storefront",
      "Payment gateway integration"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    id: 2,
    name: "Professional",
    price: 79,
    period: "month",
    description: "Best for growing businesses that need more",
    features: [
      "Unlimited products",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "Custom domain connection",
      "Advanced integrations",
      "API access",
      "Abandoned cart recovery",
      "Multi-currency support"
    ],
    cta: "Start Free Trial",
    popular: true,
    badge: "Most Popular"
  },
  {
    id: 3,
    name: "Enterprise",
    price: 199,
    period: "month",
    description: "For large-scale operations with custom needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label options",
      "SLA guarantee (99.9% uptime)",
      "Advanced security features",
      "Priority onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];
