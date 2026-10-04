# CodeNLive — by Anazk Technologies Private Limited

Live coding courses + practice on CodeNCommit + proctored exam on CodeNBrowser + verifiable certificate.

Stack: React 19 · Vite · Tailwind CSS v4 · React Router (same as anazk.online)

## Kya-kya bana hua hai (Version 1)

| Page | URL |
|---|---|
| Home | `/` |
| Saare courses (search + filter) | `/courses` |
| Course detail + "Reserve my seat" form | `/courses/<slug>` |
| Certificates (kaise milega + verify link) | `/certificates` |
| Contact (WhatsApp, phone, email, form) | `/contact` |
| Terms & Conditions | `/terms` |
| Privacy Policy | `/privacy` |
| Refund & Cancellation | `/refund-policy` |

Har page pe WhatsApp "Chat with us" button hai.

Enrollment form abhi **FormSubmit** se tumhare email pe jaata hai (bilkul anazk.online ki tarah).
Payment abhi nahi hota: student seat reserve karta hai, team usse payment link bhejti hai.
Razorpay checkout Phase 2 mein lagega.

## Sabse pehle ye badlo

1. **`src/data/courses.js`** — sample courses hain. Apne asli course ka naam, price, batch date, syllabus daalo.
2. **`src/data/site.js`** — email, phone, WhatsApp number, location.
3. **`src/pages/Legal.jsx`** — Terms / Privacy / Refund ke DRAFTS. `[ ... ]` wali jagah bharo
   (city, grievance officer ka naam, refund ke din) aur lawyer/CA se ek baar check karwa lo.

> FormSubmit: pehli baar form submit hone par `hrcodencommit@gmail.com` pe ek
> "Activate form" email aayega — use ek baar confirm karna padega.

## Computer pe chalana

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # final files dist/ folder mein
```

## Vercel pe deploy karna

1. Ye folder GitHub pe ek naye repo mein push karo (jaise `codenlive`).
2. vercel.com → **Add New → Project** → wo repo choose karo.
   Framework "Vite" khud detect ho jayega. **Deploy** dabao.
3. Project → **Settings → Domains** → `live.anazk.online` add karo.
   Vercel jo CNAME value dikhaye, use copy karo.
4. Hostinger hPanel → Domains → anazk.online → **DNS / Nameservers** → naya record:
   - Type: `CNAME`
   - Name: `live`
   - Target: Vercel wali value
5. 5–30 min ruko. SSL (https) Vercel khud lagata hai.

`vercel.json` already hai, taaki `/courses/dsa-cpp` jaise links refresh karne par bhi chalein.

## Aage kya (Phase 2 / 3)

- Login / signup (Supabase) aur student dashboard
- Razorpay payment + GST invoice
- Recorded videos (Bunny Stream / VdoCipher), live class links
- CodeNCommit assignments aur CodeNBrowser final exam ka link
- Course complete hone par automatic certificate → anazk.online/verify se jodna
