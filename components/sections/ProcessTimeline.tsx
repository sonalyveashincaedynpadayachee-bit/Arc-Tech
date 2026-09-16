'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/lib/content/process';

const PATH_LENGTH = 1400;

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.5'],
  });
  const rawProgress = useTransform(scrollYProgress, [0, 1], [0, PATH_LENGTH]);
  const dashOffset = useSpring(rawProgress, { stiffness: 60, damping: 20, mass: 0.5 });
  const strokeDashoffset = useTransform(dashOffset, (v) => PATH_LENGTH - v);

  return (
    <section id="process" className="relative section-pad bg-bg-base">
      <Container>
        <Reveal>
          <SectionHeading
            numeral="03"
            eyebrow="The Method"
            title={
              <>
                A repeatable path, <em className="metal italic">not a black box.</em>
              </>
            }
            lead="Four stages, in the same order, every time. You always know exactly which stage your build is in."
          />
        </Reveal>

        <div ref={ref} className="relative mt-20">
          <svg
            className="absolute left-6 top-0 hidden h-full w-2 md:left-1/2 md:block md:-translate-x-1/2"
            viewBox="0 0 8 1400"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <path d="M4 0 V1400" stroke="var(--line-default)" strokeWidth="1" />
            <motion.path
              d="M4 0 V1400"
              stroke="url(#process-arc-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              style={
                shouldReduceMotion
                  ? undefined
                  : { pathLength: 1, strokeDasharray: PATH_LENGTH, strokeDashoffset }
              }
            />
            <defs>
              <linearGradient id="process-arc-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#4C1D95" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-6 top-0 h-full w-px bg-line-default md:hidden" aria-hidden />

          <ol className="flex flex-col gap-16 md:gap-24">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={step.numeral}
                  className={`relative flex flex-col gap-4 pl-16 md:w-1/2 md:pl-0 ${
                    isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-purple-300 bg-bg-base md:top-1 ${
                      isEven ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                    }`}
                  />
                  <div className={`flex items-baseline gap-3 ${isEven ? 'md:justify-end' : ''}`}>
                    <span className="numeral text-lead">{step.numeral}</span>
                    <h3 className="font-display text-h3 font-normal text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-body leading-relaxed text-text-secondary md:ml-0">
                    {step.description}
                  </p>
                  <p className={`max-w-md text-small leading-relaxed text-text-tertiary ${isEven ? 'md:ml-auto' : ''}`}>
                    {step.detail}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
