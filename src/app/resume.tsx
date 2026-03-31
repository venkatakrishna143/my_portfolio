"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

export function Resume() {
  const resumeRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    if (resumeRef.current) {
      const options = {
        margin: 0.5,
        filename: "Manepalli_Venkata_Krishna_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(resumeRef.current).set(options).save();
    }
  };

  return (
    <section className="px-6 py-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <Typography variant="h3" color="blue-gray" className="mb-1">
            Resume
          </Typography>
          <Button color="blue" onClick={handleDownload}>
            Download as PDF
          </Button>
        </div>

        <div
          ref={resumeRef}
          className="bg-white p-10 rounded-lg shadow-md text-gray-800"
        >
          {/* Header */}
          <div className="text-center border-b pb-4 mb-4">
            <Typography variant="h4" className="font-bold">
              Manepalli Venkata Krishna
            </Typography>
            <p className="font-semibold">
              Software Engineer | Software Architect | Backend Engineer | Full Stack Developer
            </p>
            <p>
              Hyderabad, 500085 |{" "}
              <a
                href="mailto:srivenkatakrishna147@gmail.com"
                className="text-blue-600"
              >
                srivenkatakrishna147@gmail.com
              </a>{" "}
              | Phone: +91 8099577404
            </p>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <Typography variant="h5" className="mb-2 font-semibold">
              Summary
            </Typography>
            <p>
              I am a focused Software Engineer with over 4 years of experience in backend
              development and architecture. My expertise includes managing diverse projects,
              leading teams, and delivering high-quality solutions while ensuring seamless
              collaboration. Skilled in deploying applications in VPS environments and
              optimizing backend systems for enhanced performance.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <Typography variant="h5" className="mb-2 font-semibold">
              Experience
            </Typography>

            <div className="mb-4">
              <p className="font-bold">Techpixe</p>
              <p>Software Architect / Senior Backend Engineer | 09/2024 - Present | Hyderabad</p>
              <ul className="list-disc pl-6">
                <li>Leading six diverse projects, managing a team of 12 developers.</li>
                <li>Successfully deployed three projects on VPS environments.</li>
                <li>Designed and developed an e-commerce website from scratch.</li>
                <li>Promoted cross-team collaboration and innovation to deliver scalable solutions.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">ARWAY</p>
              <p>Back End Engineer | 02/2024 - 09/2024 | Hyderabad</p>
              <ul className="list-disc pl-6">
                <li>Optimized code and added new backend functionalities.</li>
                <li>Implemented an API call tracking mechanism for pricing services.</li>
                <li>Executed database migrations and used Docker for deployment.</li>
                <li>Integrated Swagger UI for backend documentation.</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">Coinearth Technologies</p>
              <p>Software Engineer (Backend) | 09/2022 - 02/2024 | Hyderabad</p>
              <ul className="list-disc pl-6">
                <li>
                  Acted as backend architect and database engineer for MYALTPAY using Node.js,
                  Express, and PostgreSQL.
                </li>
                <li>Hosted the platform on Digital Ocean ensuring stable performance.</li>
                <li>Integrated third-party Payment Gateway services.</li>
                <li>Optimized queries and improved response times for IndoEx.</li>
                <li>
                  Developed an admin panel to manage the system and payment gateway operations.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold">Talentkind Solutions LLP</p>
              <p>Full-Stack Developer | 01/2021 - 09/2022 | Hyderabad</p>
              <ul className="list-disc pl-6">
                <li>Developed both frontend and backend using React.js and Node.js.</li>
                <li>Used MongoDB as the backend database for efficient data handling.</li>
                <li>Optimized queries and enhanced system performance.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <Typography variant="h5" className="mb-2 font-semibold">
              Education
            </Typography>
            <p>
              MCA, BV Raju Institute of Technology (BVRIT), Bhimavaram A.P | 08/2017 - 09/2020
            </p>
          </section>

          {/* Key Achievements */}
          <section className="mb-6">
            <Typography variant="h5" className="mb-2 font-semibold">
              Key Achievements
            </Typography>
            <ul className="list-disc pl-6">
              <li>Managed a team of 12, successfully delivering 6 projects within deadlines.</li>
              <li>Deployed and optimized 3 projects on VPS, improving efficiency by 40%.</li>
              <li>Enhanced API performance, reducing load times by 30%.</li>
              <li>Led design of e-commerce website, increasing sales by 25%.</li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <Typography variant="h5" className="mb-2 font-semibold">
              Technical Skills
            </Typography>
            <p>
              <strong>Backend:</strong> Node.js, Express.js, PostgreSQL, MySQL, MongoDB
              <br />
              <strong>Frontend:</strong> React.js
              <br />
              <strong>DevOps:</strong> Docker, VPS Management, AWS Services
              <br />
              <strong>Other Tools:</strong> GitHub, Swagger, Redis, Kafka, Hostinger, DNS Management
              <br />
              <strong>Specialties:</strong> E-commerce Systems, Gateway Integration, API Architecture, Team Leadership
            </p>
          </section>

          {/* Languages */}
          <section>
            <Typography variant="h5" className="mb-2 font-semibold">
              Languages
            </Typography>
            <ul className="list-disc pl-6">
              <li>Telugu — Native</li>
              <li>English — Proficient</li>
              <li>Hindi — Advanced</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Resume;
