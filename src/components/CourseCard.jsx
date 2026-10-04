import { Link } from 'react-router-dom'
import { Clock, CalendarDays, Radio, ArrowRight } from 'lucide-react'
import { rupees } from '../data/courses.js'

export default function CourseCard({ c }) {
  const off = Math.round((1 - c.price / c.mrp) * 100)
  return (
    <Link to={`/courses/${c.slug}`} className="group flex flex-col rounded-2xl border border-line bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-0.5 transition-all">
      <div className={`relative h-32 bg-gradient-to-br ${c.color} p-5 flex flex-col justify-between`}>
        <div className="flex gap-1.5 flex-wrap">
          {c.tags.map((t) => (
            <span key={t} className="text-[11px] font-semibold bg-white/20 text-white px-2 py-0.5 rounded-md backdrop-blur">{t}</span>
          ))}
        </div>
        <span className="self-start inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide bg-white text-slate-900 px-2.5 py-1 rounded-full">
          {c.mode.includes('Live') && <span className="w-1.5 h-1.5 rounded-full bg-red-500 live-dot" />}
          {c.mode}
        </span>
      </div>
      <div className="flex-1 flex flex-col p-5">
        <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-brand transition-colors">{c.title}</h3>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{c.tagline}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[13px] text-slate-600">
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand" />{c.duration}</span>
          <span className="flex items-center gap-1.5"><Radio size={14} className="text-brand" />{c.level.split(' ')[0]}</span>
          <span className="flex items-center gap-1.5 col-span-2"><CalendarDays size={14} className="text-brand" />Next batch: {c.nextBatch}</span>
        </div>
        <div className="mt-auto pt-5 flex items-end justify-between">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-2xl font-extrabold text-slate-900">{rupees(c.price)}</span>
            <span className="text-sm text-slate-400 line-through">{rupees(c.mrp)}</span>
            {off > 0 && <span className="text-xs font-bold text-emerald-600">{off}% off</span>}
          </div>
          <span className="w-9 h-9 grid place-items-center rounded-full bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white transition-colors">
            <ArrowRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  )
}
