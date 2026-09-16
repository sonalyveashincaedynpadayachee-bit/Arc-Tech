'use client';

import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
};

export function TextField({
  label,
  name,
  required,
  error,
  type = 'text',
  className,
  value,
  onChange,
}: BaseProps & {
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const [touched, setTouched] = useState(false);
  const showError = touched && !!error;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          placeholder=" "
          className={cn(
            'peer w-full border-b bg-transparent pb-3 pt-6 text-body text-text-primary outline-none transition-colors duration-200',
            showError ? 'border-rose-400' : 'border-line focus:border-purple-400'
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            'eyebrow pointer-events-none absolute left-0 top-6 origin-left text-text-tertiary transition-all duration-200',
            'peer-focus:top-0 peer-focus:scale-90 peer-focus:text-purple-300',
            '[&:has(+_input:not(:placeholder-shown))]:top-0',
            value && 'top-0 scale-90'
          )}
        >
          {label}
          {required && ' *'}
        </label>
      </div>
      {showError && (
        <p id={`${id}-error`} className="text-small text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  rows = 5,
}: BaseProps & {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  const id = useId();
  const [touched, setTouched] = useState(false);
  const showError = touched && !!error;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative">
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          placeholder=" "
          className={cn(
            'peer w-full resize-none border-b bg-transparent pb-3 pt-6 text-body text-text-primary outline-none transition-colors duration-200',
            showError ? 'border-rose-400' : 'border-line focus:border-purple-400'
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            'eyebrow pointer-events-none absolute left-0 top-6 origin-left text-text-tertiary transition-all duration-200',
            'peer-focus:top-0 peer-focus:scale-90 peer-focus:text-purple-300',
            value && 'top-0 scale-90'
          )}
        >
          {label}
          {required && ' *'}
        </label>
      </div>
      {showError && (
        <p id={`${id}-error`} className="text-small text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  children,
}: BaseProps & {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  const id = useId();
  const [touched, setTouched] = useState(false);
  const showError = touched && !!error;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          className={cn(
            'w-full appearance-none border-b bg-transparent pb-3 pt-6 text-body text-text-primary outline-none transition-colors duration-200',
            showError ? 'border-rose-400' : 'border-line focus:border-purple-400'
          )}
        >
          {children}
        </select>
        <label
          htmlFor={id}
          className="eyebrow pointer-events-none absolute left-0 top-0 origin-left scale-90 text-text-tertiary"
        >
          {label}
          {required && ' *'}
        </label>
      </div>
      {showError && (
        <p id={`${id}-error`} className="text-small text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
