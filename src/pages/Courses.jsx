import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { COURSES } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'

const FILTERS = ['All', 'Live', 'Recorded', 'Beginner']

export default function Courses() {
  const [q, setQ] = useState('')
  const [f, setF] = useState('All')

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return COURSES.filter((c) => {
      if (f === 'Live' && !c.mode.includes('Live')) return false
      if (f === 'Recorded' && c.mode !== 'Recorded') return false
      if (f === 'Beginner' && !c.level.startsWith('Beginner')) return false
      if (!s) return true
      return [c.title, c.tagline, ...c.tags].join(' ').toLowerCase().includes(s)
    })
  }, [q, f])

  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft to-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-sm font-bold text-brand uppercase tracking-wider">All courses</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">Courses on CodeNLive</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Every course includes live or recorded classes, graded practice on CodeNCommit, a final exam and a verifiable certificate.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search Python, React, DSA…"
                className="w-full rounded-lg border border-line bg-white pl-11 pr-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-orange-100" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map((x) => (
                <button key={x} onClick={() => setF(x)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${f === x ? 'bg-brand text-white border-brand' : 'bg-white text-slate-700 border-line hover:border-brand hover:text-brand'}`}>
                  {x}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {list.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => <CourseCard key={c.slug} c={c} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-semibold text-slate-900">No courses match your search</p>
            <button onClick={() => { setQ(''); setF('All') }} className="mt-3 text-brand font-semibold">Show all courses</button>
          </div>
        )}
      </section>
    </>
  )
}
