import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react'
import { SITE } from '../data/site.js'
import { COURSES } from '../data/courses.js'

export default function Contact() {
  const [state, setState] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget).entries())
    const payload = { _subject: `CodeNLive enquiry — ${d.name}`, _template: 'table', Name: d.name, Phone: d.phone, Email: d.email, 'Interested in': d.course, Message: d.message || '—' }
    setState('sending')
    try {
      const r = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      if (!r.ok) throw new Error()
      setState('done')
    } catch {
      setState('error')
      const body = Object.entries(payload).filter(([k]) => !k.startsWith('_')).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`
    }
  }

  const input = 'mt-1 w-full rounded-lg border border-line bg-slate-50 px-4 py-3 text-[15px] outline-none focus:border-brand focus:ring-4 focus:ring-orange-100 focus:bg-white'

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <p className="text-sm font-bold text-brand uppercase tracking-wider">Contact</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">Questions? We're here.</h1>
        <p className="mt-3 text-slate-600">Ask about courses, batches, fees or certificates. We reply within one working day — faster on WhatsApp.</p>
        <div className="mt-8 space-y-3">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 p-4 hover:bg-[#25D366]/15">
            <MessageCircle className="text-[#128C7E]" /><div><p className="font-semibold text-slate-900">WhatsApp</p><p className="text-sm text-slate-600">Fastest way to reach us</p></div>
          </a>
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 rounded-xl border border-line p-4 hover:border-brand"><Phone className="text-brand" /><div><p className="font-semibold text-slate-900">{SITE.phone}</p><p className="text-sm text-slate-600">Mon–Sat, 10 AM – 7 PM</p></div></a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-xl border border-line p-4 hover:border-brand"><Mail className="text-brand" /><div className="min-w-0"><p className="font-semibold text-slate-900 break-all">{SITE.email}</p><p className="text-sm text-slate-600">Email us anytime</p></div></a>
          <div className="flex items-center gap-4 rounded-xl border border-line p-4"><MapPin className="text-brand" /><div><p className="font-semibold text-slate-900">{SITE.company}</p><p className="text-sm text-slate-600">{SITE.location}</p></div></div>
        </div>
      </div>

      <div className="lg:col-span-3 rounded-2xl border border-line shadow-xl shadow-slate-200/50 p-6 sm:p-8">
        {state === 'done' ? (
          <div className="text-center py-16">
            <CheckCircle2 size={44} className="mx-auto text-emerald-500" />
            <h2 className="mt-3 text-xl font-bold text-slate-900">Message sent!</h2>
            <p className="mt-1 text-slate-600">We'll get back to you within one working day.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-slate-700">Name<input required name="name" className={input} /></label>
              <label className="block text-sm font-medium text-slate-700">Phone / WhatsApp<input required name="phone" type="tel" className={input} /></label>
            </div>
            <label className="block text-sm font-medium text-slate-700">Email<input required name="email" type="email" className={input} /></label>
            <label className="block text-sm font-medium text-slate-700">Interested in
              <select name="course" className={input}>
                <option>Not sure yet — help me choose</option>
                {COURSES.map((c) => <option key={c.slug}>{c.title}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">Message<textarea name="message" rows={4} className={input} placeholder="Tell us about your background and goals…" /></label>
            <button disabled={state === 'sending'} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-70 text-white px-8 py-3.5 rounded-lg font-semibold">
              {state === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : 'Send message'}
            </button>
            {state === 'error' && <p className="text-xs text-red-600">We couldn't send the form automatically, so we've opened your email app — just press send.</p>}
          </form>
        )}
      </div>
    </section>
  )
}
