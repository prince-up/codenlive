// ─────────────────────────────────────────────────────────────
//  COURSES — edit this file to add / change courses.
//  ⚠️ The courses below are SAMPLES. Replace names, prices,
//  dates and syllabus with your real courses before launch.
// ─────────────────────────────────────────────────────────────
//  price / mrp : in rupees (numbers, no commas)
//  mode        : 'Live' | 'Recorded' | 'Live + Recorded'
//  nextBatch   : shown on the card; use 'Coming soon' if unsure
// ─────────────────────────────────────────────────────────────

export const COURSES = [
  {
    slug: 'dsa-cpp',
    title: 'Data Structures & Algorithms in C++',
    tagline: 'Crack placement coding rounds with strong DSA fundamentals.',
    level: 'Beginner → Intermediate',
    mode: 'Live + Recorded',
    duration: '12 weeks',
    schedule: 'Mon, Wed, Fri · 8:00–9:30 PM',
    nextBatch: '2 November 2026',
    seats: 60,
    price: 4999,
    mrp: 7999,
    language: 'Hindi + English',
    color: 'from-orange-500 to-amber-500',
    tags: ['C++', 'DSA', 'Placements'],
    outcomes: [
      'Solve array, string, linked-list, tree and graph problems confidently',
      'Analyse time and space complexity of any solution',
      'Practise 150+ problems on CodeNCommit with instant auto-grading',
      'Be ready for coding rounds at product and service companies',
    ],
    syllabus: [
      { title: 'C++ refresher & STL', topics: ['Vectors, maps, sets', 'Pointers and references', 'Time complexity basics'] },
      { title: 'Arrays, strings & hashing', topics: ['Two pointers', 'Sliding window', 'Prefix sums', 'Hash maps'] },
      { title: 'Recursion & backtracking', topics: ['Recursion tree', 'Subsets & permutations', 'N-Queens'] },
      { title: 'Linked lists, stacks & queues', topics: ['Reversal & cycle detection', 'Monotonic stack', 'Deque'] },
      { title: 'Trees & BST', topics: ['Traversals', 'LCA, diameter', 'BST operations'] },
      { title: 'Graphs', topics: ['BFS / DFS', 'Topological sort', 'Dijkstra', 'Union-Find'] },
      { title: 'Dynamic programming', topics: ['1D / 2D DP', 'Knapsack', 'LIS, LCS', 'DP on trees'] },
      { title: 'Mock interviews & final exam', topics: ['Timed mock tests', 'Proctored final exam on CodeNBrowser'] },
    ],
  },
  {
    slug: 'full-stack-web',
    title: 'Full Stack Web Development (MERN)',
    tagline: 'Build and deploy real web apps with React, Node.js and MongoDB.',
    level: 'Beginner',
    mode: 'Live + Recorded',
    duration: '16 weeks',
    schedule: 'Tue, Thu, Sat · 7:00–8:30 PM',
    nextBatch: '9 November 2026',
    seats: 50,
    price: 7999,
    mrp: 12999,
    language: 'Hindi + English',
    color: 'from-sky-500 to-indigo-500',
    tags: ['React', 'Node.js', 'MongoDB'],
    outcomes: [
      'Build responsive websites with HTML, CSS, Tailwind and JavaScript',
      'Create single-page apps in React',
      'Write REST APIs with Node.js, Express and MongoDB',
      'Deploy 3 portfolio projects you can show recruiters',
    ],
    syllabus: [
      { title: 'Web foundations', topics: ['HTML5, CSS3', 'Flexbox & Grid', 'Tailwind CSS'] },
      { title: 'JavaScript', topics: ['ES6+', 'DOM', 'Async / await, fetch'] },
      { title: 'React', topics: ['Components & props', 'Hooks', 'React Router', 'State management'] },
      { title: 'Backend with Node.js', topics: ['Express', 'REST APIs', 'Authentication with JWT'] },
      { title: 'Databases', topics: ['MongoDB & Mongoose', 'Data modelling'] },
      { title: 'Projects & deployment', topics: ['Git & GitHub', 'Deploying to Vercel / Render', 'Capstone project'] },
    ],
  },
  {
    slug: 'python-beginners',
    title: 'Python Programming for Beginners',
    tagline: 'Your first programming language — from zero to writing real programs.',
    level: 'Beginner',
    mode: 'Live + Recorded',
    duration: '8 weeks',
    schedule: 'Sat & Sun · 11:00 AM–12:30 PM',
    nextBatch: '7 November 2026',
    seats: 80,
    price: 2999,
    mrp: 4999,
    language: 'Hindi + English',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Python', 'Beginner', 'School & College'],
    outcomes: [
      'Understand variables, loops, functions and data structures',
      'Write programs that read files and process data',
      'Learn object-oriented programming in Python',
      'Build mini-projects like a quiz game and an expense tracker',
    ],
    syllabus: [
      { title: 'Getting started', topics: ['How programs run', 'Variables & types', 'Input / output'] },
      { title: 'Control flow', topics: ['if / else', 'Loops', 'Pattern problems'] },
      { title: 'Functions & modules', topics: ['Parameters & return', 'Scope', 'Built-in modules'] },
      { title: 'Data structures', topics: ['Lists, tuples', 'Dictionaries, sets'] },
      { title: 'Files & errors', topics: ['File handling', 'Exceptions'] },
      { title: 'OOP & projects', topics: ['Classes & objects', 'Mini projects', 'Final exam'] },
    ],
  },
  {
    slug: 'sql-databases',
    title: 'SQL & Databases Masterclass',
    tagline: 'Write SQL queries the way analysts and backend developers do.',
    level: 'Beginner → Intermediate',
    mode: 'Recorded',
    duration: '6 weeks',
    schedule: 'Self-paced + weekly live doubt session',
    nextBatch: 'Start anytime',
    seats: null,
    price: 1999,
    mrp: 3499,
    language: 'Hindi + English',
    color: 'from-fuchsia-500 to-pink-500',
    tags: ['SQL', 'MySQL', 'Data'],
    outcomes: [
      'Write SELECT, JOIN, GROUP BY and sub-queries confidently',
      'Design normalised database tables',
      'Use window functions for reporting',
      'Practise on real datasets in the CodeNCommit SQL sandbox',
    ],
    syllabus: [
      { title: 'Database basics', topics: ['Tables, keys', 'Creating databases'] },
      { title: 'Querying', topics: ['SELECT, WHERE', 'ORDER BY, LIMIT', 'Aggregates'] },
      { title: 'Joins', topics: ['Inner / outer joins', 'Self joins'] },
      { title: 'Advanced SQL', topics: ['Sub-queries & CTEs', 'Window functions'] },
      { title: 'Design', topics: ['Normalisation', 'Indexes', 'Final project & exam'] },
    ],
  },
]

export const getCourse = (slug) => COURSES.find((c) => c.slug === slug)

export const rupees = (n) => '₹' + Number(n).toLocaleString('en-IN')
