import { Link } from 'react-router-dom'
import { Award, QrCode, ShieldCheck, Search, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE } from '../data/site.js'

export default function Certificates() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft to-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold text-brand uppercase tracking-wider">Certificates</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">A certificate that anyone can verify</h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">Every CodeNLive certificate is issued by {SITE.company} and carries a unique Certificate ID and QR code. Employers and colleges can confirm it in seconds.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={SITE.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-7 py-4 rounded-lg font-semibold shadow-lg shadow-orange-200">
                <Search size={18} /> Verify a certificate
              </a>
              <Link to="/courses" className="inline-flex items-center justify-center gap-2 bg-white border border-line text-slate-800 px-7 py-4 rounded-lg font-semibold hover:border-brand hover:text-brand">
                Earn one <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Sample certificate */}
          <div className="rounded-2xl bg-white border-[6px] border-double border-orange-200 shadow-2xl shadow-orange-100 p-7 sm:p-9 relative">
            <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">Sample</span>
            <div className="flex items-center gap-2 text-brand"><Award size={22} /><span className="font-extrabold tracking-tight text-slate-900">CodeN<span className="text-brand">Live</span></span></div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-500">Certificate of Achievement</p>
            <p className="mt-3 text-sm text-slate-500">This certifies that</p>
            <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">Student Name</p>
            <p className="mt-2 text-sm text-slate-600">has successfully completed the course <b className="text-slate-900">Data Structures & Algorithms in C++</b> and passed the proctored final assessment.</p>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div className="text-xs text-slate-500 space-y-0.5">
                <p>Issued by <b className="text-slate-700">{SITE.company}</b></p>
                <p>Certificate ID: <span className="font-mono font-bold text-slate-800">ANZK-XXXX-XXXX</span></p>
              </div>
              <div className="w-16 h-16 grid place-items-center rounded-lg border border-line text-slate-700"><QrCode size={40} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How you earn it</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[
            ['Complete the course', 'Attend classes or watch recordings and finish the required assignments on CodeNCommit.'],
            ['Pass the final exam', 'Take the proctored final exam in CodeNBrowser and meet the passing score.'],
            ['Download & share', 'Get your certificate as a PDF with a verification link you can add to LinkedIn and your resume.'],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-line p-6">
              <span className="text-sm font-bold text-brand">Step {i + 1}</span>
              <h3 className="mt-2 font-bold text-lg text-slate-900">{t}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 border border-line p-6 sm:p-8">
          <div className="flex items-center gap-2"><ShieldCheck className="text-brand" /><h3 className="font-bold text-slate-900">What this certificate is — and isn't</h3></div>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
            <li className="flex gap-2.5"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" />It is a certificate of course completion and achievement issued by {SITE.company}, a registered private limited company.</li>
            <li className="flex gap-2.5"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" />It confirms that you completed the course and passed a proctored assessment.</li>
            <li className="flex gap-2.5"><CheckCircle2 size={18} className="text-slate-400 shrink-0" />It is not a university degree or diploma, and is not issued by or affiliated with UGC or AICTE.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
