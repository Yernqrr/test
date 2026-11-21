# BE (Better Education) — Student Portal demo

A responsive, browser-based school portal prototype inspired by common LMS/student diary products. It is an original demo, not a copy of BilimClass or Kundelik.

## Run it
1. Extract the ZIP.
2. Open `index.html` in a modern browser. No build tools or server are required.
3. Sign in with any name, email and password (the sign-in is a local demo only).

## Working features
- Demo sign-in and sign-out
- Overview dashboard with course progress and pending work
- Courses page
- Assignment search, add assignment, and mark-as-submitted actions
- Grades table
- Weekly timetable
- School messages/announcements
- Responsive layout for desktop and mobile
- Data and demo session saved in browser `localStorage`

## Important limitations
This is a front-end prototype. It does not yet have a real school database, secure authentication, teacher/parent accounts, file uploads, attendance recording, or multi-user synchronisation. Do not use real student personal information in this demo.

## Architecture for future AI assistant integration
The UI is intentionally separated into `index.html`, `styles.css`, and `app.js`. A future assistant can be added as a floating chat widget and connected to a backend endpoint such as `POST /api/assistant/chat`. The backend should authenticate the student, enforce role and school permissions, and retrieve only authorised curriculum/course data. Keep AI provider API keys on the server—never in browser JavaScript.

Suggested production stack:
- Frontend: React + TypeScript (or Next.js)
- Backend: Node.js/NestJS or Django REST
- Database: PostgreSQL
- Authentication: secure server sessions / OAuth with role-based access
- File storage: private object storage with access controls
- AI: server-side assistant API with curriculum retrieval (RAG), moderation, and audit logging

## Reset demo data
Clear this site's localStorage in browser developer tools, then reload.
