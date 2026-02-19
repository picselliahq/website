'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Bot prevention: Mini annotation challenge with SVG illustrations
const annotationChallenges = [
  {
    id: 1,
    question: 'What class label fits this bounding box?',
    visual: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="var(--secondary-system-background)" />
        <ellipse cx="50" cy="55" rx="25" ry="20" fill="var(--tertiary-label)" />
        <ellipse cx="50" cy="35" rx="18" ry="15" fill="var(--tertiary-label)" />
        <polygon points="35,25 40,40 30,40" fill="var(--tertiary-label)" />
        <polygon points="65,25 60,40 70,40" fill="var(--tertiary-label)" />
        <circle cx="44" cy="33" r="3" fill="var(--picsellia-green)" />
        <circle cx="56" cy="33" r="3" fill="var(--picsellia-green)" />
        <rect x="20" y="18" width="60" height="60" fill="none" stroke="var(--picsellia-green)" strokeWidth="2" strokeDasharray="4" />
      </svg>
    ),
    options: ['Dog', 'Cat', 'Bird', 'Rabbit'],
    correct: 'Cat',
  },
  {
    id: 2,
    question: 'Select the correct annotation label',
    visual: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="var(--secondary-system-background)" />
        <rect x="15" y="50" width="70" height="25" rx="5" fill="var(--tertiary-label)" />
        <rect x="25" y="35" width="45" height="20" rx="5" fill="var(--tertiary-label)" />
        <circle cx="30" cy="75" r="8" fill="var(--secondary-label)" />
        <circle cx="70" cy="75" r="8" fill="var(--secondary-label)" />
        <circle cx="30" cy="75" r="4" fill="var(--tertiary-system-background)" />
        <circle cx="70" cy="75" r="4" fill="var(--tertiary-system-background)" />
        <rect x="10" y="28" width="80" height="58" fill="none" stroke="var(--system-blue)" strokeWidth="2" strokeDasharray="4" />
      </svg>
    ),
    options: ['Bicycle', 'Motorcycle', 'Car', 'Bus'],
    correct: 'Car',
  },
  {
    id: 3,
    question: 'Which label would you assign?',
    visual: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="var(--secondary-system-background)" />
        <ellipse cx="50" cy="55" rx="25" ry="28" fill="#e74c3c" />
        <ellipse cx="42" cy="50" rx="8" ry="12" fill="#c0392b" opacity="0.5" />
        <path d="M50 27 Q55 20 60 25" stroke="#27ae60" strokeWidth="3" fill="none" />
        <ellipse cx="58" cy="22" rx="8" ry="5" fill="#27ae60" />
        <rect x="20" y="15" width="60" height="70" fill="none" stroke="var(--system-orange)" strokeWidth="2" strokeDasharray="4" />
      </svg>
    ),
    options: ['Orange', 'Apple', 'Tomato', 'Peach'],
    correct: 'Apple',
  },
  {
    id: 4,
    question: 'Identify the object class',
    visual: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="var(--secondary-system-background)" />
        <rect x="25" y="45" width="50" height="40" fill="var(--tertiary-label)" />
        <polygon points="50,20 20,50 80,50" fill="var(--secondary-label)" />
        <rect x="42" y="60" width="16" height="25" fill="var(--secondary-system-background)" />
        <rect x="30" y="55" width="10" height="10" fill="var(--system-blue)" opacity="0.5" />
        <rect x="60" y="55" width="10" height="10" fill="var(--system-blue)" opacity="0.5" />
        <rect x="15" y="15" width="70" height="75" fill="none" stroke="var(--system-indigo)" strokeWidth="2" strokeDasharray="4" />
      </svg>
    ),
    options: ['Tree', 'Car', 'House', 'Building'],
    correct: 'House',
  },
];

// Trial benefits
const trialBenefits = [
  {
    title: '14 days free',
    description: 'Full access to all platform features',
  },
  {
    title: 'No credit card',
    description: 'Start immediately, no payment info needed',
  },
  {
    title: '10,000 images',
    description: 'Process up to 10K images during trial',
  },
  {
    title: '100 GPU hours',
    description: 'Train models with included compute',
  },
];

// What's included
const includedFeatures = [
  'Datalake & Dataset Management',
  'Labeling Tool with AI-assist',
  'Experiment Tracking',
  'Model Training (Ultralytics, SAM2)',
  'Model Deployment',
  'Basic Monitoring',
];

export default function TrialPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    acceptTerms: false,
  });

  const [submitError, setSubmitError] = useState(false);

  // Bot prevention state
  const [challenge, setChallenge] = useState(annotationChallenges[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [challengeError, setChallengeError] = useState(false);
  const [challengePassed, setChallengePassed] = useState(false);

  // Randomize challenge on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * annotationChallenges.length);
    setChallenge(annotationChallenges[randomIndex]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate challenge answer
    if (selectedAnswer !== challenge.correct) {
      setChallengeError(true);
      setChallengePassed(false);
      const newIndex = Math.floor(Math.random() * annotationChallenges.length);
      setChallenge(annotationChallenges[newIndex]);
      setSelectedAnswer(null);
      return;
    }

    setChallengeError(false);
    setChallengePassed(true);
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          pageUri: window.location.href,
        }),
      });

      if (response.ok) {
        const params = new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        });
        router.push(`/thank-you-trial?${params.toString()}`);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[var(--system-indigo)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-[var(--picsellia-green)]">14-Day Free Trial</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Start building today
              </h1>

              <p className="text-lg text-[var(--secondary-label)] mb-10">
                Get full access to Picsellia&apos;s MLOps platform. No credit card required,
                no commitment, cancel anytime.
              </p>

              {/* Trial benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {trialBenefits.map((benefit) => (
                  <div key={benefit.title} className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                    <div className="text-lg font-semibold text-[var(--picsellia-green)] mb-1">{benefit.title}</div>
                    <div className="text-xs text-[var(--tertiary-label)]">{benefit.description}</div>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="pt-8 border-t border-[var(--border)]">
                <h3 className="text-sm font-semibold text-[var(--label)] mb-4">What&apos;s included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {includedFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--secondary-label)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <div className="card p-8">
                <h2 className="text-xl font-semibold text-[var(--label)] mb-6">Request your free trial</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[var(--label)] mb-2">
                        First name <span className="text-[var(--system-red)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[var(--label)] mb-2">
                        Last name <span className="text-[var(--system-red)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--label)] mb-2">
                      Work email <span className="text-[var(--system-red)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--label)] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                      placeholder="Acme Inc. (optional)"
                    />
                  </div>

                  {/* Bot Prevention: Annotation Challenge */}
                  <div className={`p-4 rounded-lg border ${challengeError ? 'border-[var(--system-red)] bg-[var(--system-red)]/5' : challengePassed ? 'border-[var(--picsellia-green)] bg-[var(--picsellia-green)]/5' : 'border-[var(--border)] bg-[var(--tertiary-system-background)]'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-xs font-medium text-[var(--secondary-label)]">Quick annotation check</span>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg border border-[var(--border)] overflow-hidden flex-shrink-0">
                        {challenge.visual}
                      </div>

                      <div className="flex-1">
                        <p className="text-xs text-[var(--secondary-label)] mb-2">{challenge.question}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {challenge.options.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedAnswer(option);
                                setChallengeError(false);
                              }}
                              className={`px-3 py-2 rounded text-xs font-medium transition-all ${
                                selectedAnswer === option
                                  ? 'bg-[var(--picsellia-green)] text-white'
                                  : 'bg-[var(--secondary-system-background)] text-[var(--label)] hover:bg-[var(--tertiary-system-background)] border border-[var(--border)]'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        {challengeError && (
                          <p className="text-xs text-[var(--system-red)] mt-2">Incorrect answer. Please try again.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      required
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[var(--border)] bg-[var(--tertiary-system-background)] text-[var(--picsellia-green)] focus:ring-[var(--picsellia-green)] focus:ring-offset-0"
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-[var(--secondary-label)]">
                      I agree to the{' '}
                      <Link href="/privacy" className="text-[var(--picsellia-green)] hover:underline">Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-[var(--picsellia-green)] hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <div className="p-3 rounded-lg bg-[var(--system-red)]/10 border border-[var(--system-red)]/20">
                      <p className="text-sm text-[var(--system-red)]">
                        Something went wrong. Please try again or contact us at{' '}
                        <a href="mailto:contact@picsellia.com" className="underline">contact@picsellia.com</a>.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Request Free Trial'
                    )}
                  </button>

                  {/* Existing user link */}
                  <p className="text-sm text-[var(--tertiary-label)] text-center">
                    Already a Picsellia user?{' '}
                    <a href="https://app.picsellia.com" target="_blank" rel="noopener noreferrer" className="text-[var(--picsellia-green)] hover:underline">Sign in to your account</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[var(--tertiary-label)] mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['SGS', 'PellencST', 'Altaroad', 'Abelio', 'Ficha'].map((company) => (
              <span key={company} className="text-lg font-medium text-[var(--secondary-label)]">{company}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
