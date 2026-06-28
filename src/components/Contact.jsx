import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

const SERVICES = [
  'Import & Export',
  'International Trading',
  'Trade Consulting',
  'Global Sourcing',
  'Market Access & Network',
  'Other',
]

const INITIAL = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Please share a few details'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 6000)
    }, 1100)
  }

  return (
    <section id="contact" className="section bg-cream">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — contact details */}
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-heading">
              Get in{' '}
              <span className="gold-mark">touch.</span>
            </h2>
            <div className="section-divider" />
            <p className="section-text">
              Share a few details about your requirement and our team will
              respond within one working day with a relevant proposal or
              follow-up questions.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={<MapPin size={14} strokeWidth={1.6} />}
                label="Office"
                value="H27/703, Panchganga CHS, Pratikshanagar, Near Pratikshanagar Best Bus Depot, Sion, Mumbai - 400022, Maharashtra, India"
              />
              <ContactRow
                icon={<Mail size={14} strokeWidth={1.6} />}
                label="Email"
                value="nitin@tecspecimex.com"
                href="mailto:nitin@tecspecimex.com"
              />
              <ContactRow
                icon={<Phone size={14} strokeWidth={1.6} />}
                label="Phone"
                value="+91-8369415470"
                href="tel:+918369415470"
              />
              <ContactRow
                icon={<Globe size={14} strokeWidth={1.6} />}
                label="Website"
                value="www.tecspecimex.com"
                href="https://www.tecspecimex.com"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-cream-line">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                Office Hours
              </p>
              <p className="mt-1.5 font-serif text-navy text-[1rem]">
                Monday – Saturday, 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>

          {/* Right — minimal form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                <Field label="Full Name" required error={errors.name}>
                  <input
                    className="field"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update('name')}
                  />
                </Field>

                <Field label="Company" error={errors.company}>
                  <input
                    className="field"
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={update('company')}
                  />
                </Field>

                <Field label="Email" required error={errors.email}>
                  <input
                    className="field"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={update('email')}
                  />
                </Field>

                <Field label="Phone" required error={errors.phone}>
                  <input
                    className="field"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={update('phone')}
                  />
                </Field>
              </div>

              <Field
                label="Service Interested In"
                required
                error={errors.service}
              >
                <select
                  className="field"
                  value={form.service}
                  onChange={update('service')}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Message" required error={errors.message}>
                <textarea
                  rows={4}
                  className="field"
                  placeholder="Tell us about your requirement — product, volume, target market, timeline."
                  value={form.message}
                  onChange={update('message')}
                />
              </Field>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-gold"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={13} /> Send Enquiry
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <span className="flex items-center gap-2 text-[13px] text-navy/75 font-medium">
                    <CheckCircle2 size={15} className="text-gold" />
                    Thank you — we will be in touch shortly.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="icon-mark">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-navy/55">
          {label}
        </div>
        <div className="mt-0.5 text-navy text-[0.95rem] font-medium">
          {value}
        </div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {inner}
    </a>
  ) : (
    inner
  )
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="field-label">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[11px] text-red-700 font-medium">{error}</p>
      )}
    </div>
  )
}
