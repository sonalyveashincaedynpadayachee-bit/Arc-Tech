'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { TextField, TextAreaField, SelectField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  description: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  budget: '',
  description: '',
};

function validate(state: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!state.name.trim()) errors.name = 'Please tell us your name.';
  if (!state.email.trim()) {
    errors.email = 'Please share an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = 'That email address doesn’t look right.';
  }
  if (!state.company.trim()) errors.company = 'Please tell us where you work.';
  if (!state.budget) errors.budget = 'Please select a budget range.';
  if (!state.description.trim() || state.description.trim().length < 20) {
    errors.description = 'Give us at least a couple of sentences on the project.';
  }
  return errors;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(state);

  const set = <K extends keyof FormState>(key: K) => (value: string) =>
    setState((s) => ({ ...s, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;

    const subject = encodeURIComponent(`New project inquiry — ${state.company}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nEmail: ${state.email}\nCompany: ${state.company}\nBudget range: ${state.budget}\n\nProject description:\n${state.description}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-line-subtle bg-bg-raised p-10">
        <h3 className="font-display text-h3 font-normal text-text-primary">
          Your email client should be opening now.
        </h3>
        <p className="mt-3 text-body leading-relaxed text-text-secondary">
          If it didn&rsquo;t, write to us directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-purple-300 underline underline-offset-4">
            {siteConfig.email}
          </a>
          . We respond to every inquiry within one business day.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          required
          value={state.name}
          onChange={set('name')}
          error={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={state.email}
          onChange={set('email')}
          error={errors.email}
        />
      </div>

      <TextField
        label="Company"
        name="company"
        required
        value={state.company}
        onChange={set('company')}
        error={errors.company}
      />

      <SelectField
        label="Budget range"
        name="budget"
        required
        value={state.budget}
        onChange={set('budget')}
        error={errors.budget}
      >
        <option value="" disabled>
          Select a range
        </option>
        <option value="$10k–$25k">$10k – $25k</option>
        <option value="$25k–$50k">$25k – $50k</option>
        <option value="$50k–$100k">$50k – $100k</option>
        <option value="$100k+">$100k+</option>
        <option value="Not sure yet">Not sure yet</option>
      </SelectField>

      <TextAreaField
        label="Project description"
        name="description"
        required
        rows={5}
        value={state.description}
        onChange={set('description')}
        error={errors.description}
      />

      <Button type="submit" variant="primary" className="self-start">
        Send inquiry
        <Send size={16} strokeWidth={1.25} aria-hidden />
      </Button>
    </form>
  );
}
