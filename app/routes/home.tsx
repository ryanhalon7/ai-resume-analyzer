import * as constants from "constants";
const resumes = (constants as any).resumes ?? [];
import type { Route } from "./+types/home";

import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
        {resumes.map((resume: Resume) => (
          <ResumeCard key={resume.id} resume={resume}/>
        ))}
      </div>

      )}
    </section>
  </main>
}
