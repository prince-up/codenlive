import { Link } from 'react-router-dom'
import { ArrowRight, Video, Code2, ShieldCheck, Award, Users, MessageCircle, Languages, BadgeCheck, PlayCircle } from 'lucide-react'
import { COURSES } from '../data/courses.js'
import { SITE } from '../data/site.js'
import CourseCard from '../components/CourseCard.jsx'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand bg-white border border-orange-200 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 live-dot" /> New batches starting November 2026
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.07]">
            Learn coding <span className="text-brand">live</span>.<br />Prove it with a certificate that's <span className="underline decoration-brand decoration-4 underline-offset-[6px]">real</span>.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            Live classes with mentors, hands-on practice on CodeNCommit, a proctored final exam — and a certificate any employer can verify in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-4 rounded-lg font-semibold shadow-lg shadow-orange-200 transition-colors">
              Explore courses <ArrowRight size={18} />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi! Please help me choose a CodeNLive course.')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border border-line text-slate-800 px-7 py-4 rounded-lg font-semibold hover:border-brand hover:text-brand transition-colors">
              <MessageCircle size={18} /> Talk to a counsellor
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-brand" /> Verifiable certificates</span>
            <span className="flex items-center gap-1.5"><Languages size={16} className="text-brand" /> Hindi + English</span>
            <span className="flex items-center gap-1.5"><PlayCircle size={16} className="text-brand" /> Class recordings included</span>
          </div>
        </div>

        {/* Live class mock */}
        <div className="relative">
          <div className="rounded-2xl bg-ink shadow-2xl shadow-stone-400/40 overflow-hidden border border-stone-800">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 live-dot" />
                <span className="text-xs font-bold text-white tracking-wide">LIVE · DSA in C++ · Class 14</span>
              </div>
              <span className="text-xs text-stone-400 flex items-center gap-1"><Users size={13} /> 48 watching</span>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-3 p-4 font-mono text-[12.5px] leading-6 text-stone-300 border-r border-white/10">
                <div><span className="text-pink-400">int</span> <span className="text-sky-300">binarySearch</span>(vector&lt;<span className="text-pink-400">int</span>&gt;&amp; a, <span className="text-pink-400">int</span> x) {'{'}</div>
                <div className="pl-4"><span className="text-pink-400">int</span> lo = <span className="text-amber-300">0</span>, hi = a.size() - <span className="text-amber-300">1</span>;</div>
                <div className="pl-4"><span className="text-pink-400">while</span> (lo &lt;= hi) {'{'}</div>
                <div className="pl-8 bg-orange-500/15 -mx-4 px-12 border-l-2 border-brand"><span className="text-pink-400">int</span> mid = lo + (hi - lo) / <span className="text-amber-300">2</span>;</div>
                <div className="pl-8"><span className="text-pink-400">if</span> (a[mid] == x) <span className="text-pink-400">return</span> mid;</div>
                <div className="pl-8">a[mid] &lt; x ? lo = mid + <span className="text-amber-300">1</span> : hi = mid - <span className="text-amber-300">1</span>;</div>
                <div className="pl-4">{'}'}</div>
                <div className="pl-4"><span className="text-pink-400">return</span> -<span className="text-amber-300">1</span>;</div>
                <div>{'}'}</div>
              </div>
              <div className="col-span-2 p-3 space-y-2.5 text-[12px]">
                <div className="rounded-lg bg-white/5 p-2.5"><b className="text-orange-300">Riya</b><p className="text-stone-300 mt-0.5">Why lo + (hi-lo)/2 and not (lo+hi)/2?</p></div>
                <div className="rounded-lg bg-brand/20 p-2.5 border border-brand/30"><b className="text-white">Mentor</b><p className="text-stone-200 mt-0.5">Great question — it avoids integer overflow 👍</p></div>
                <div className="rounded-lg bg-white/5 p-2.5"><b className="text-sky-300">Aman</b><p className="text-stone-300 mt-0.5">All tests passed on CodeNCommit ✅</p></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-xl shadow-xl border border-line px-4 py-3 flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center rounded-lg bg-emerald-50 text-emerald-600"><Award size={22} /></span>
            <div>
              <p className="text-xs text-slate-500">Certificate ID</p>
              <p className="font-mono text-sm font-bold text-slate-900">ANZK-7Q4M-2KXP</p>
            </div>
            <span className="ml-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">Verified</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    ['10', 'programming languages in the practice compiler'],
    ['Live', 'classes with real-time doubt solving'],
    ['100%', 'class recordings available after each session'],
    ['QR', 'verifiable certificate for every passed student'],
  ]
  return (
    <section className="border-y border-line bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4">
        {items.map(([k, v], i) => (
          <div key={k} className={`py-8 px-4 ${i % 2 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} lg:border-l first:lg:border-l-0 border-line`}>
            <p className="text-3xl font-extrabold text-slate-900">{k}</p>
            <p className="mt-1 text-sm text-slate-500">{v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedCourses() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-brand uppercase tracking-wider">Courses</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Pick your path</h2>
            <p className="mt-2 text-slate-600 max-w-lg">Small batches, live mentors and a project-first curriculum built for placements.</p>
          </div>
          <Link to="/courses" className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">View all courses <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((c) => <CourseCard key={c.slug} c={c} />)}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { icon: Video, title: 'Learn live', text: 'Attend live classes with a mentor. Ask doubts in real time; every class is recorded for revision.', tag: 'CodeNLive' },
    { icon: Code2, title: 'Practise for real', text: 'Solve assignments in the CodeNCommit compiler with instant auto-grading on hidden test cases.', tag: 'CodeNCommit' },
    { icon: ShieldCheck, title: 'Pass a proctored exam', text: 'Take the final exam in the CodeNBrowser secure browser with AI proctoring — so your result is genuine.', tag: 'CodeNBrowser' },
    { icon: Award, title: 'Get certified', text: 'Receive a certificate with a unique ID and QR code that anyone can verify on anazk.online.', tag: 'Certificate' },
  ]
  return (
    <section id="how" className="scroll-mt-20 py-20 lg:py-24 bg-ink text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-brand uppercase tracking-wider">How it works</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl">One connected journey — from first class to verified certificate</h2>
        <p className="mt-3 text-stone-400 max-w-2xl">CodeNLive works together with the other Anazk products, so the skills you learn are tested properly and your certificate actually means something.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:border-brand/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 grid place-items-center rounded-xl bg-brand text-white"><s.icon size={21} /></span>
                <span className="text-4xl font-extrabold text-white/10">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">{s.text}</p>
              <span className="mt-4 inline-block text-[11px] font-semibold text-orange-300 bg-orange-500/10 px-2 py-1 rounded-md">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    ['Small live batches', 'Limited seats per batch so mentors can actually answer your doubts.'],
    ['Learn in Hindi + English', 'Concepts explained the way you understand best.'],
    ['Real coding, not just videos', 'Every topic comes with graded assignments on CodeNCommit.'],
    ['Honest certificates', 'Proctored final exam means your certificate carries real weight with recruiters.'],
    ['Recordings forever', 'Missed a class? Watch the recording anytime during your access period.'],
    ['From a registered company', `Courses are run by ${SITE.company}, a registered Indian company.`],
  ]
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-brand uppercase tracking-wider">Why CodeNLive</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Built for students who want real skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white border border-line p-6">
              <BadgeCheck className="text-brand" size={22} />
              <h3 className="mt-3 font-bold text-slate-900">{t}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Not sure which course is right for you?</h2>
            <p className="mt-2 text-orange-100">Message us on WhatsApp — our team will help you choose in 5 minutes.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi! Please help me choose a CodeNLive course.')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark px-7 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors whitespace-nowrap">
              <MessageCircle size={18} /> WhatsApp us
            </a>
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded-lg font-bold hover:bg-black transition-colors whitespace-nowrap">
              Browse courses <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <HowItWorks />
      <WhyUs />
      <CTA />
    </>
  )
}
