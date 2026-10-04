// ─────────────────────────────────────────────────────────────
//  Terms, Privacy and Refund policy — DRAFTS.
//  Have these reviewed by a lawyer / CA before going live, and
//  fill in the items marked [ ... ].
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { SITE } from '../data/site.js'

function Page({ title, children }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {SITE.lastUpdated}</p>
      <div className="prose-legal mt-6">{children}</div>
    </section>
  )
}

const C = SITE.company

export function Terms() {
  return (
    <Page title="Terms & Conditions">
      <p>These Terms govern your use of CodeNLive, an online learning platform operated by {C} ("we", "us"). By enrolling in a course or using the platform you agree to these Terms.</p>
      <h2>1. Eligibility and accounts</h2>
      <ul>
        <li>You must provide accurate information when enrolling. The name you give is the name printed on your certificate.</li>
        <li>Students under 18 may enrol only with the consent of a parent or legal guardian, who accepts these Terms on their behalf.</li>
        <li>Your access is personal. Sharing your login, class links or recordings with others is not allowed and may lead to access being removed without refund.</li>
      </ul>
      <h2>2. Courses and content</h2>
      <ul>
        <li>Course schedules, mentors and syllabus may change to keep content current or for operational reasons. We will inform enrolled students of significant changes.</li>
        <li>All course material — videos, notes, problems and recordings — is owned by {C}. You may use it for personal learning only. Downloading, recording, reselling or redistributing it is prohibited.</li>
        <li>Access to recordings is available for the access period stated on the course page.</li>
      </ul>
      <h2>3. Fees and payment</h2>
      <ul>
        <li>Fees are shown on the course page in Indian Rupees and include applicable taxes unless stated otherwise.</li>
        <li>Payments are processed by a third-party payment gateway. We do not store your card or bank details.</li>
        <li>Refunds are governed by our <Link to="/refund-policy" className="text-brand underline">Refund & Cancellation Policy</Link>.</li>
      </ul>
      <h2>4. Exams and certificates</h2>
      <ul>
        <li>Certificates are issued only to students who meet the completion criteria and pass the final assessment.</li>
        <li>Final exams may be proctored using CodeNBrowser, including webcam-based identity checks. Any attempt to cheat, impersonate or tamper with the exam will result in disqualification, and any certificate issued may be revoked.</li>
        <li>CodeNLive certificates are certificates of course completion issued by {C}. They are not degrees or diplomas and are not issued by any university, UGC or AICTE.</li>
      </ul>
      <h2>5. Conduct</h2>
      <p>Be respectful in live classes, chats and community spaces. We may remove anyone who harasses others, shares inappropriate content or disrupts classes.</p>
      <h2>6. Limitation of liability</h2>
      <p>We work hard to deliver quality teaching, but we do not guarantee any job, placement, salary or exam result. To the extent permitted by law, our total liability for any claim is limited to the fees you paid for the course concerned.</p>
      <h2>7. Governing law</h2>
      <p>These Terms are governed by the laws of India. Courts at [city], Punjab shall have exclusive jurisdiction.</p>
      <h2>8. Contact</h2>
      <p>{C} · {SITE.location} · {SITE.email} · {SITE.phone}</p>
    </Page>
  )
}

export function Privacy() {
  return (
    <Page title="Privacy Policy">
      <p>{C} respects your privacy. This policy explains what personal data CodeNLive collects, why, and the choices you have, in line with the Digital Personal Data Protection Act, 2023 and other applicable Indian law.</p>
      <h2>1. Data we collect</h2>
      <ul>
        <li><b>Enrollment details:</b> name, email, phone number, city, college or company, and for students under 18, a parent or guardian's name and phone.</li>
        <li><b>Learning data:</b> classes attended, progress, assignment submissions, scores and certificates.</li>
        <li><b>Exam proctoring data:</b> during proctored exams, webcam images or video and activity logs collected by CodeNBrowser for identity verification and integrity checks.</li>
        <li><b>Payment data:</b> transaction ID and status from our payment gateway. We never see or store your full card or bank details.</li>
      </ul>
      <h2>2. Why we use it</h2>
      <ul>
        <li>To enrol you, deliver classes and give you access to recordings.</li>
        <li>To grade assignments, run exams fairly and issue verifiable certificates.</li>
        <li>To contact you about your course, batch changes, payments and support.</li>
        <li>To send course updates or offers — only if you agree, and you can opt out anytime.</li>
      </ul>
      <h2>3. Certificate verification</h2>
      <p>When a certificate is issued, the student's name, course, issue date and Certificate ID can be viewed by anyone who enters that Certificate ID on our verification page. No other personal data is shown.</p>
      <h2>4. Sharing</h2>
      <p>We do not sell your data. We share it only with service providers that help us run CodeNLive (hosting, video, payments, email and messaging), under confidentiality obligations, or when required by law.</p>
      <h2>5. Children</h2>
      <p>For students under 18 we collect data only with verifiable consent from a parent or guardian, and we do not use their data for targeted advertising or behavioural tracking.</p>
      <h2>6. Retention and security</h2>
      <p>We keep personal data only as long as needed for the purposes above or as required by law. Proctoring recordings are deleted after [90] days unless needed to resolve a dispute. Data is protected using encryption in transit and access controls.</p>
      <h2>7. Your rights</h2>
      <p>You can ask to access, correct or delete your personal data, or withdraw consent, by writing to us. Deleting data may mean we cannot continue your course or keep your certificate verifiable.</p>
      <h2>8. Grievance officer</h2>
      <p>[Name], Grievance Officer, {C} · {SITE.email} · {SITE.phone}. We will respond within the time required by law.</p>
    </Page>
  )
}

export function Refund() {
  return (
    <Page title="Refund & Cancellation Policy">
      <p>We want you to be happy with your course. This policy explains when you can get a refund.</p>
      <h2>1. Live courses</h2>
      <ul>
        <li><b>Full refund</b> if you cancel before the batch start date.</li>
        <li><b>Full refund</b> if you cancel within [7] days of the batch start date and have attended no more than [3] live classes.</li>
        <li>After that, no refund is available, but you may request a <b>one-time free transfer</b> to a later batch of the same course.</li>
      </ul>
      <h2>2. Recorded / self-paced courses</h2>
      <ul>
        <li><b>Full refund</b> if requested within [7] days of purchase and less than [20%] of the course content has been watched.</li>
      </ul>
      <h2>3. If we cancel or reschedule</h2>
      <p>If we cancel a batch, you can choose a full refund or move to another batch at no extra cost.</p>
      <h2>4. Non-refundable cases</h2>
      <ul>
        <li>Access removed because of a violation of our Terms (e.g. sharing content or cheating in exams).</li>
        <li>Requests made after the refund window above.</li>
      </ul>
      <h2>5. How to request a refund</h2>
      <p>Email {SITE.email} or WhatsApp {SITE.phone} with your name, registered phone number, course name and payment transaction ID. Approved refunds are processed to the original payment method within [7–10] working days.</p>
    </Page>
  )
}
