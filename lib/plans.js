/**
 * Training subscription plans available for signup.
 * These map to the actual Paystack/IntaSend subscription plans.
 *
 * IMPORTANT: When adding/removing plans, also update the Paystack
 * and IntaSend dashboards to match.
 */
export const trainingPlans = [
  {
    id: 'one-on-one',
    name: 'One-on-One Coaching',
    shortDesc: 'The highest level of individualized athletic development at AMSC.',
    price: 30000,
    displayPrice: 'KES 30,000',
    interval: 'month',
    features: [
      'Fully customized training programs',
      'Direct coach access & real-time accountability',
      'Weekly performance reviews & adjustments',
      'Priority scheduling & session flexibility',
      'Comprehensive movement screening & force profiling',
      'Personalized nutrition & recovery guidance',
    ],
    highlight: false,
    premium: true,
    badge: 'Recommended',
    category: 'premium',
  },
  {
    id: 'group',
    name: 'Performance Group Training',
    shortDesc: 'High-performance training in a structured group environment.',
    price: 15000,
    displayPrice: 'KES 15,000',
    interval: 'month',
    features: [
      'Periodized training cycles',
      'Small group sizes for quality coaching',
      'Structured performance benchmarks',
      'Professional training environment',
    ],
    highlight: true,
    premium: false,
    badge: 'Most Popular',
    category: 'group',
  },
  {
    id: 'online',
    name: 'Online Performance Training',
    shortDesc: 'Structured programming for athletes training remotely.',
    price: 12000,
    displayPrice: 'KES 12,000',
    interval: 'month',
    features: [
      'Monthly structured training plans',
      'Video-guided exercise standards',
      'Regular check-ins & program updates',
      'AMSC exercise library access',
    ],
    highlight: false,
    premium: false,
    badge: null,
    category: 'remote',
  },
  {
    id: 'youth',
    name: 'Youth Athletic Development',
    shortDesc: 'Building athletic foundations for ages 10\u201317.',
    price: 10000,
    displayPrice: 'KES 10,000',
    interval: 'month',
    features: [
      'Age-appropriate strength & movement training',
      'Speed and coordination development',
      'Injury prevention through proper mechanics',
      'Fun, engaging training environment',
    ],
    highlight: false,
    premium: false,
    badge: null,
    category: 'youth',
  },
];

/**
 * Get a plan by its ID.
 * @param {string} planId
 * @returns {object|undefined}
 */
export function getPlanById(planId) {
  return trainingPlans.find((p) => p.id === planId);
}
