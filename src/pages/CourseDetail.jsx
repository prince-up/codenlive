import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Clock, CalendarDays, Radio, Languages, Users, CheckCircle2, ChevronDown, Award, Code2, ShieldCheck, Video, ArrowLeft, Loader2, PartyPopper } from 'lucide-react'
import { getCourse, rupees } from '../data/courses.js'
import { SITE } from '../data/site.js'
import NotFound from './NotFound.jsx'

function Syllabus({ modules }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-line border border-line rounded-2xl overflow-hidden">
      {modules.map((m, i) => (
        <div key={m.title}>
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center gap-4 text-left px-5 py-4 hover:bg-slate-50">
            <span className="w-8 h-8 shrink-0 grid place-items-center rounded-lg bg-brand-soft text-brand text-sm font-bold">{i + 1}</span>
            <span className="flex-1 font-semibold text-slate-900">{m.title}</span>
            <span className="text-xs text-slate-400 hidden sm:inline">{m.topics.length} topics</span>
            <ChevronDown size={18} className={`text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <ul className="px-5 pb-4 pl-[68px] space-y-1.5">
              {m.topics.map((t) => <li key={t} className="text-sm text-slate-600 list-disc">{t}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

function EnrollForm({ c }) {
  const [state, setState] = useState('idle') // idle | sending | done | error
  const [minor, setMinor] = useState(false)

  async function submit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    const payload = {
      _subject: `CodeNLive enrollment: ${c.title} — ${data.name}`,
      _template: 'table',
      Course: c.title,
      Price: rupees(c.price),
      Batch: c.nextBatch,
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      City: data.city,
      'I am a': data.who,
      'College / Company': data.org || '—',
      'Under 18': minor ? `Yes — parent: ${data.parent} (${data.parentPhone})` : 'No',
    }
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

  if (state === 'done') {
    return (
      <div className="text-center py-6">
        <PartyPopper className="mx-auto text-brand" size={40} />
        <h3 className="mt-3 text-xl font-bold text-slate-900">Seat request received!</h3>
        <p className="mt-2 text-sm text-slate-600">Our team will call or WhatsApp you within one working day with the payment link and batch details.</p>
      </div>
    )
  }

  const input = 'mt-1 w-full rounded-lg border border-line bg-slate-50 px-3.5 py-2.5 text-[15px] outline-none focus:border-brand focus:ring-4 focus:ring-orange-100 focus:bg-white'
  return (
    <form onSubmit={submit} className="space-y-3.5">
      <label className="block text-sm font-medium text-slate-700">Full name<input required name="name" className={input} placeholder="As it should appear on the certificate" /></label>
      <div className="grid grid-cols-2 gap-3">
        <label className="block text-sm font-medium text-slate-700">Phone / WhatsApp<input required name="phone" type="tel" pattern="[0-9+ ]{10,15}" className={input} placeholder="98XXXXXXXX" /></label>
        <label className="block text-sm font-medium text-slate-700">City<input required name="city" className={input} placeholder="Ludhiana" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Email<input required name="email" type="email" className={input} placeholder="you@example.com" /></label>
      <div className="grid gap-3">
        <label className="block text-sm font-medium text-slate-700">I am a
          <select name="who" className={input} defaultValue="College student">
            <option>School student</option><option>College student</option><option>Working professional</option><option>Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">College / Company<input name="org" className={input} placeholder="Optional" /></label>
      </div>
      <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer">
        <input type="checkbox" checked={minor} onChange={(e) => setMinor(e.target.checked)} className="w-4 h-4 accent-[#f97316]" />
        The student is under 18 years old
      </label>
      {minor && (
        <div className="grid grid-cols-2 gap-3 rounded-lg bg-brand-soft p-3">
          <label className="block text-sm font-medium text-slate-700">Parent's name<input required name="parent" className={input} /></label>
          <label className="block text-sm font-medium text-slate-700">Parent's phone<input required name="parentPhone" type="tel" className={input} /></label>
          <p className="col-span-2 text-xs text-slate-600">We'll confirm the enrollment with a parent or guardian before payment.</p>
        </div>
      )}
      <label className="flex items-start gap-2.5 text-xs text-slate-500 cursor-pointer">
        <input required type="checkbox" className="mt-0.5 w-4 h-4 accent-[#f97316]" />
        <span>I agree to the <Link to="/terms" className="text-brand underline">Terms</Link>, <Link to="/privacy" className="text-brand underline">Privacy Policy</Link> and <Link to="/refund-policy" className="text-brand underline">Refund Policy</Link>, and to be contacted by {SITE.companyShort} about this course.</span>
      </label>
      <button disabled={state === 'sending'} className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-70 text-white py-3.5 rounded-lg font-bold shadow-lg shadow-orange-200 transition-colors">
        {state === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Reserve my seat</>}
      </button>
      {state === 'error' && <p className="text-xs text-red-600">We couldn't send the form automatically, so we've opened your email app with the details filled in — just press send.</p>}
      <p className="text-xs text-center text-slate-500">No payment now. We'll send a secure payment link after confirming your seat.</p>
    </form>
  )
}

export default function CourseDetail() {
  const { slug } = useParams()
  const c = getCourse(slug)
  if (!c) return <NotFound />
  const off = Math.round((1 - c.price / c.mrp) * 100)

  const facts = [
    [Clock, 'Duration', c.duration],
    [Radio, 'Format', c.mode],
    [CalendarDays, 'Next batch', c.nextBatch],
    [Video, 'Schedule', c.schedule],
    [Languages, 'Language', c.language],
    [Users, 'Seats', c.seats ? `${c.seats} per batch` : 'Unlimited'],
  ]

  return (
    <>
      <section className={`bg-gradient-to-br ${c.color} text-white`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-14 lg:pb-20">
          <Link to="/courses" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white"><ArrowLeft size={16} /> All courses</Link>
          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide bg-white text-slate-900 px-2.5 py-1 rounded-full">
              {c.mode.includes('Live') && <span className="w-1.5 h-1.5 rounded-full bg-red-500 live-dot" />}{c.mode} · {c.level}
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{c.title}</h1>
            <p className="mt-4 text-lg text-white/90">{c.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10 pb-20">
        <div className="lg:col-span-2 pt-10 space-y-12 order-2 lg:order-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {facts.map(([Icon, k, v]) => (
              <div key={k} className="rounded-xl border border-line p-4">
                <Icon size={18} className="text-brand" />
                <p className="mt-2 text-xs text-slate-500">{k}</p>
                <p className="text-sm font-semibold text-slate-900">{v}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">What you'll learn</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[15px] text-slate-700"><CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />{o}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Syllabus</h2>
            <p className="mt-1 text-slate-500 text-sm">{c.syllabus.length} modules · syllabus may be updated to keep it current</p>
            <div className="mt-5"><Syllabus modules={c.syllabus} /></div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">What's included</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                [Video, 'Live classes + recordings', 'Join live, or watch the recording later.'],
                [Code2, 'Graded practice on CodeNCommit', 'Assignments auto-checked against hidden test cases.'],
                [ShieldCheck, 'Proctored final exam', 'Taken in CodeNBrowser so results are genuine.'],
                [Award, 'Verifiable certificate', 'Unique ID + QR code, verifiable on anazk.online.'],
              ].map(([Icon, t, d]) => (
                <div key={t} className="flex gap-4 rounded-xl bg-slate-50 border border-line p-5">
                  <span className="w-10 h-10 shrink-0 grid place-items-center rounded-lg bg-white border border-line text-brand"><Icon size={19} /></span>
                  <div><p className="font-semibold text-slate-900">{t}</p><p className="text-sm text-slate-600 mt-0.5">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="order-1 lg:order-2 lg:-mt-12">
          <div id="enroll" className="lg:sticky lg:top-24 rounded-2xl bg-white border border-line shadow-xl shadow-slate-200/60 p-6">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-3xl font-extrabold text-slate-900">{rupees(c.price)}</span>
              <span className="text-slate-400 line-through">{rupees(c.mrp)}</span>
              {off > 0 && <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{off}% off</span>}
            </div>
            <p className="text-xs text-slate-500 mt-1">Inclusive of all taxes · EMI / UPI available</p>
            <hr className="my-5 border-line" />
            <EnrollForm c={c} />
          </div>
        </aside>
      </div>
    </>
  )
}
