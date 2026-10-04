import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 py-28 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you're looking for doesn't exist or has been moved.</p>
      <div className="mt-6 flex gap-3 justify-center">
        <Link to="/" className="bg-brand text-white px-6 py-3 rounded-lg font-semibold">Go home</Link>
        <Link to="/courses" className="border border-line px-6 py-3 rounded-lg font-semibold text-slate-700 hover:border-brand hover:text-brand">See courses</Link>
      </div>
    </section>
  )
}
