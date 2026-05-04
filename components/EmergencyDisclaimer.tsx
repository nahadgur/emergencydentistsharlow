// EmergencyDisclaimer.tsx
// YMYL safety component — surfaces the "this is not medical care, call 999/111
// for genuine emergencies" line clearly. Used in the homepage hero, every
// service page, and the contact page. Variants for different surfaces.
import { AlertCircle, Phone } from 'lucide-react';

interface Props {
  variant?: 'compact' | 'inline' | 'block';
}

export function EmergencyDisclaimer({ variant = 'inline' }: Props) {
  if (variant === 'compact') {
    return (
      <p className="text-[12px] text-ink/60 leading-relaxed">
        For uncontrolled bleeding, spreading facial swelling, or breathing difficulty call <strong className="text-urgent-600">999</strong> or <strong className="text-urgent-600">NHS 111</strong> — these need hospital, not a dentist.
      </p>
    );
  }

  if (variant === 'block') {
    return (
      <div
        className="rounded-lg border-l-4 border-urgent-500 bg-urgent-50 p-5"
        role="region"
        aria-label="Emergency medical guidance"
      >
        <div className="flex items-start gap-3">
          <AlertCircle size={20} className="text-urgent-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[14px] font-bold text-urgent-700 mb-2">
              This is a dental matching service, not a medical service
            </p>
            <p className="text-[13px] text-ink/75 leading-relaxed mb-3">
              For genuine medical emergencies — uncontrolled bleeding, facial swelling spreading to your eye, throat or neck, difficulty breathing or swallowing, or feeling severely unwell — these are <strong>hospital problems</strong> and need IV antibiotics, not a dental appointment.
            </p>
            <div className="flex flex-wrap gap-3 text-[13px]">
              <span className="inline-flex items-center gap-1.5 font-bold text-urgent-700">
                <Phone size={14} /> 999 — life-threatening
              </span>
              <span className="inline-flex items-center gap-1.5 font-bold text-urgent-700">
                <Phone size={14} /> NHS 111 — urgent advice (free, 24/7)
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // inline (default)
  return (
    <div className="flex items-start gap-2 text-[12px] text-ink/65 leading-relaxed">
      <AlertCircle size={14} className="text-urgent-600 flex-shrink-0 mt-0.5" />
      <span>
        Spreading facial swelling, uncontrolled bleeding, or breathing difficulty?{' '}
        <strong className="text-urgent-700">Call 999 or NHS 111</strong> — these are hospital problems, not a dental visit.
      </span>
    </div>
  );
}
