# StudySync — AI-Powered Student Productivity Platform

> **"Study Smarter. Achieve More."**

StudySync is a modern, responsive, SaaS-style web platform designed to help students organize their studies, generate personalized study schedules, manage assignments, take structured notes, track academic progress, and build consistent daily study habits.

Built as a high-fidelity frontend product showcase for an internship portfolio.

---

## 🚀 Live Demo & Preview

- **Platform Name:** StudySync
- **Target Audience:** College & High School Students
- **Framework:** Next.js (App Router) + React + TypeScript + Tailwind CSS

---

## ✨ Features & Architecture

1. **Sticky Responsive Navigation (`components/Navbar.tsx`)**:
   - Modern glassmorphism header with auto-shrink and shadow elevation on scroll.
   - Smooth anchor scrolling across all sections.
   - Mobile hamburger menu with smooth Framer Motion animations.
   - Integrated modal triggers for "Log In" and "Get Started".

2. **Hero Section & Trust Bar (`components/Hero.tsx`)**:
   - High-impact student-centric headline with highlighted brand accents.
   - Floating UI cards with subtle levitation micro-animations (`12 Day Streak 🔥`, `AI Plan Generated ✨`, `72% Weekly Goal 📈`).
   - Interactive subject schedule toggle preview.
   - Demo social proof bar featuring **10K+ Sessions**, **5K+ Students**, **95% Goal Completion**, and **4.9/5 Rating**.

3. **Problem & Empathy Section (`components/Problem.tsx`)**:
   - Addresses core student pain points: *Too Many Tasks*, *No Clear Plan*, and *Losing Consistency*.
   - Seamless transition into StudySync's unified solution.

4. **6 Core Product Features (`components/Features.tsx`)**:
   - **AI Study Planner**: Custom schedules calibrated to exam deadlines.
   - **Smart Notes**: Markdown and structured subject organization.
   - **Task Manager**: Prioritized assignment and lab checklist.
   - **Progress Tracking**: Visual mastery metrics and study trends.
   - **Focus Timer**: Built-in Pomodoro and deep-work flow timer.
   - **AI Quiz Generator**: Instant practice questions from notes.

5. **Visual How-It-Works Workflow (`components/HowItWorks.tsx`)**:
   - 3-step structured timeline: *Set Your Goals* ➔ *Let AI Build Your Plan* ➔ *Track Your Progress*.
   - Horizontal connecting gradient track on desktop, responsive vertical stack on mobile.

6. **Interactive AI Study Companion (`components/AISection.tsx`)**:
   - High-fidelity simulated AI assistant conversation for exam prep (DBMS, DSA, Computer Networks).
   - 21-Day curriculum roadmap (Foundation, Deep Dive, Mastery & Mocks).
   - Interactive **"Generate My Plan"** action with real-time multi-stage loading animation and celebration feedback.

7. **Realistic Product Dashboard Showcase (`components/DashboardPreview.tsx`)**:
   - Complete desktop app mockup with left sidebar navigation, student profile (*Alex Rivera*), daily progress bars, live schedule slots, active Pomodoro timer, and urgent assignment alerts.

8. **Weekly Study Analytics (`components/ProgressSection.tsx`)**:
   - Interactive 7-day study hours bar chart with dynamic hover tooltips.
   - Key metric cards: *12-Day Streak*, *84% Weekly Goal*, and *42 Tasks Completed*.

9. **Student Testimonials (`components/Testimonials.tsx`)**:
   - Authentic student review cards with 5-star ratings, university affiliations (*IIT Delhi, BITS Pilani, Manipal*), and verified badges.

10. **Flexible Student Pricing (`components/Pricing.tsx`)**:
    - **Free** (₹0/mo), **Pro** (₹199/mo - Most Popular), and **Student+** (₹399/mo).
    - Functional monthly/annual billing switch with a 20% discount calculation.

11. **Smooth FAQ Accordion (`components/FAQ.tsx`)**:
    - Accessible accordion with fluid height animations for all 6 core product questions.

12. **Final Call to Action (`components/CTA.tsx`)**:
    - Premium gradient banner featuring floating educational icons (books, graduation cap, checkmark, sparkles, clock).

13. **Contact Section (`components/Contact.tsx`)**:
    - Client-side validated form (Name, Email, Subject, Message) with friendly instant success confirmation and confetti celebration.
    - Verified contact channels (`hello@studysync.app`) and social links (LinkedIn, Instagram, X/Twitter, GitHub).

14. **SaaS Footer (`components/Footer.tsx`)**:
    - Complete multi-column footer with brand identity, product navigation, resources, and copyright.

15. **Interactive Auth / Onboarding Modal (`components/AuthModal.tsx`)**:
    - Accessible student sign-up / login modal with field validation and celebration states.

---

## 🛠️ Technology Stack

- **Core Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Celebration Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested with v24)
- npm `v9+` or `v11+`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/studysync.git
cd studysync

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build Test
```bash
npm run build
npm run start
```

---

## 📦 Deploying to Vercel (Step-by-Step)

The project is pre-configured and 100% production-ready for deployment on **Vercel** with zero configuration required.

### Option A: Via GitHub (Recommended)

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete StudySync platform implementation"
   ```

2. **Push to your GitHub repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/studysync.git
   git push -u origin main
   ```

3. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** ➔ **"Project"**.
   - Select your `studysync` repository from GitHub.
   - Framework preset will automatically detect **Next.js**.
   - No environment variables are required for this frontend showcase.
   - Click **"Deploy"**.

Your website will be live at `https://studysync.vercel.app` in under 60 seconds!

---

## 📄 License & Attribution

Designed and created for the **StudySync** Internship Frontend Assessment.
All mockup figures, testimonials, and contact details are simulated demo assets.
