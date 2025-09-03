PROJECT: TRAVELLITE  ✈️


A lightweight travel-booking website UI (search → results → details → cart/checkout) built with React + Tailwind. No real APIs yet—read from /data/*.json and simulate async with fetch + hooks.

1) Scope (UI-only, data-driven)
Build a fully navigable website with realistic screens and states.


Consume dummy JSON from /data/ to power the UI.


Prepare the codebase for later API integration (services, hooks, env config).


Produce project documentation and testing documentation.


Out of scope (for now): real auth, payments, backend persistence, analytics.

2) Deliverables
Functional UI


Home (search widget)


Results (list + filters + sort)


Details (trip/flight/bus details, seat/fare sections)


Cart/Checkout (forms, summary, validation)


Static pages: About, Help/FAQ, Terms, Privacy


Global header/nav, footer, error/empty states, loading skeletons


Data layer (dummy)


/data/routes.json, /data/schedules.json, /data/operators.json, /data/fares.json


Typed helpers (TS interfaces) even if project is JS (use JSDoc or TS)


Documentation


README.md (setup, scripts, architecture, folder map)


ARCHITECTURE.md (state mgmt, data flow, routing)


TESTING-PLAN.md (what/how to test now; plan for API era)


CONTRIBUTING.md (branching, commits, PRs, code style)


RELEASE-NOTES.md (per milestone)


Testing


Manual test checklists (now)


Component contract notes (props, states, edge cases)


Cypress skeleton (optional, basic nav smoke tests)


Jest/Vitest skeleton (add later when APIs come)


Collaboration assets


Issue template, PR template, Definition of Done, Codeowners



3) Tech Stack & Tools
React 18, React Router, Tailwind CSS


Build: Vite


Optional libs: Zustand (or Context) for lightweight state


Formatting/quality: ESLint, Prettier, Husky + lint-staged


Testing (skeleton): Vitest/Jest, Testing Library, Cypress


Deployment (preview): Netlify/Vercel (optional)



4) Repository & Folder Structure
travellite/
├─ public/
├─ src/
│  ├─ app/                 # app shell, routes
│  ├─ components/          # reusable UI
│  ├─ pages/               # route-level views
│  ├─ hooks/               # useSchedules, useSearchParams, etc.
│  ├─ services/            # data access (dummy now, API    q	later)
│  ├─ store/               # zustand or context
│  ├─ styles/              # tailwind.css + globals
│  ├─ utils/               # formatters, validators
│  └─ types/               # TS types or JSDoc typedefs
├─ data/                   # ← dummy JSON lives here
│  ├─ routes.json
│  ├─ schedules.json
│  ├─ operators.json
│  └─ fares.json
├─ README.md
├─ ARCHITECTURE.md
├─ TESTING-PLAN.md
├─ CONTRIBUTING.md
├─ .github/
│  ├─ ISSUE_TEMPLATE.md
│  └─ PULL_REQUEST_TEMPLATE.md


5) Dummy Data Contract (examples)
/data/schedules.json
[
  {
    "id": "SCH123",
    "operator_id": "OP_MASH",
    "route_id": "NBO-MBA",
    "depart_at": "2025-08-22T08:30:00Z",
    "arrive_at": "2025-08-22T14:00:00Z",
    "duration_minutes": 330,
    "bus_type": "Luxury",
    "stops": ["Nairobi", "Emali", "Mtito Andei", "Mombasa"],
    "fares": [
      { "class": "ECONOMY", "currency": "KES", "amount": 1800 },
      { "class": "VIP", "currency": "KES", "amount": 2500 }
    ],
    "seats_available": 23
  }
]

/data/routes.json
[
  { "id": "NBO-MBA", "origin": "Nairobi", "destination": "Mombasa", "distance_km": 485 }
]

/data/operators.json
[
  { "id": "OP_MASH", "name": "Mash Poa", "rating": 4.5, "logo": "/logos/mashpoa.svg" }
]

Service pattern (UI now, API later):
// src/services/schedules.ts
export async function getSchedules(query) {
  const res = await fetch('/data/schedules.json');
  const all = await res.json();
  // filter locally for now
  return all.filter(s => s.route_id === query.routeId);
}




	
6) Pages & Acceptance Criteria
6.1 Home
Search form (origin, destination, date, pax)


Validation + disabled CTA until valid


On submit → navigate to /results?...


Empty/invalid input: inline errors


Loading & skeleton: show while fetching


6.2 Results
Read params, fetch dummy schedules, render list


Filters: operator, time window, bus type


Sort: price, duration, departure time


Card per schedule: operator, times, duration, fare from, CTA “View details”


Empty state if none


6.3 Details
Show segments, stops map (static), seat classes, policies


“Add to cart” (stores chosen fare in state)


6.4 Cart/Checkout
Summary (items, totals)


Forms: contact details (no backend), validation


“Confirm” → success screen with reference code (random)


6.5 Static pages
About, Help/FAQ, Terms, Privacy (content placeholders)


6.6 Global
404 route, error boundary


A11y: keyboard focus order, semantic HTML, aria where needed


Responsive: mobile-first; breakpoints tested



7) State, Routing, and Extensibility
Routing: react-router-dom with nested routes.


State: local state + URL params; cart in Zustand/Context.


Data access: only through src/services/*, even for dummy JSON, to swap later for fetch/axios.


Env: create src/config.ts to centralize constants.



8) Quality Bar (Definition of Done)
Meets acceptance criteria for each page.


No TypeScript/ESLint errors; Prettier clean.


Keyboard navigable; basic color contrast ok.


Mobile, tablet, desktop layouts verified.


All major flows have loading, error, and empty states.


Docs updated (README + ARCHITECTURE + TESTING-PLAN).


At least 1 Cypress smoke run passes locally (if included).


PR approved by the other intern.



9) Testing (now) & later plan
Now (UI with dummy data)
TESTING-PLAN.md includes:


Manual test cases (form validation, filter logic, routing, edge states).


Accessibility quick checks (Tab order, skip-links optional).


Cross-browser smoke (Chrome, Firefox, Safari).


Responsive checks (≤375px, 768px, ≥1280px).


Later (after API integration)
Unit tests for services & hooks (mock API).


Component tests (Testing Library) for empty/error/loading.


E2E (Cypress) for core flows (search→checkout).


10) Collaboration Plan (for 2 interns)
Roles (rotate weekly)
Clare (Feature Lead Week 1 and 2):
Setup repo + Vite + Tailwind + ESLint/Prettier/Husky
Sets up routing, layout shell, Tailwind config
Home page + search form + validation
App shell, routing, header/footer
/data JSON creation + types
Filters & sorting component
Docs: README, ARCHITECTURE, TESTING-PLAN, CONTRIBUTING
PR & Issue templates


James (Feature Lead Week 1 and 2):
Sets up services & store (dummy data), global error boundary
Results page + list + loading/empty states
Cart/Checkout + form validation
Details page + add-to-cart
 Static pages (About, Help, Terms, Privacy)
Docs: README, ARCHITECTURE, TESTING-PLAN, CONTRIBUTING
PR & Issue templates
Week 2 rotation: swap areas; each reviews the other’s code.
Workflow
Branching: main (protected) → feature branches feat/<area>, fix/<issue>


Commits: Conventional Commits (feat:, fix:, docs:)


PRs: small, scoped; include checklist


Code Reviews: reviewer runs locally before approve github (@Wambuku)


Standups: 10:00 EAT (Mon–Thu), async notes in RELEASE-NOTES.md weekly


Issue Tracking: create issues per task; link PRs


PR Template (drop into .github/PULL_REQUEST_TEMPLATE.md)
## Summary
- What changed?


## How to test
- Steps to reproduce & expected results

## Checklist
- [ ] Lint passes
- [ ] Responsive verified (mobile/tablet/desktop)
- [ ] A11y basics checked
- [ ] Docs updated

Issue Template (.github/ISSUE_TEMPLATE.md)
### What
Brief description

### Why
User value / acceptance criteria

### Done when
- [ ] AC1
- [ ] AC2
- [ ] Tests/docs updated


11) Milestones & Timeline (suggested)
Day 1–2: Repo init, tooling, layout shell, routing, Tailwind, data schema


Day 3–5: Home + Results + filters + dummy data integration


Day 6–8: Details + Cart/Checkout + cart state


Day 9: Static pages, 404, error boundary


Day 10: Polish, responsiveness, a11y pass, docs + testing docs complete



12) Acceptance Checklists (copy into TESTING-PLAN.md)
Search form


Disables CTA until valid


Persists to URL params


Results


Filters work and combine


Sort toggles asc/desc where relevant


Loading skeleton then list or empty state


Details


Displays chosen schedule info accurately


Add-to-cart resets quantity, updates header cart badge


Checkout


Validates required fields


Shows computed totals (tax/fees placeholders)


Success screen with reference



//THIS WILL BE DONE LATER DONT MIND THIS ///
13) How this sets up API integration later
Replace src/services/* fetch-from-JSON with axios/fetch to real endpoints.


Keep hooks (useSchedules, useCart) unchanged—only internal call changes.


Add .env for base URLs, keys; update TESTING-PLAN.md with API test cases.


Introduce data schemas (Zod/Yup) to validate server responses.
