"use client";

import { Typography } from "@material-tailwind/react";
import Hero from './hero';

const PROJECTS = [
  {
    title: "Talentkind",
    brief:
      "Implemented a robust back-end using Node.js and Express to handle user authentication, data management, and API integrations. Developed a responsive front-end with React, ensuring seamless user experience across devices. Integrated third-party services for enhanced functionality, including payment gateways and analytics tools.",
    client: "In-House",
    role: "Full Stack Developer",
    responsibilities: [
      "Implemented JWT token-based authentication for Rest APIs.",
      "Designed database schemas and optimized queries for performance.",
      "Collaborated with front-end developers to integrate APIs.",
    ],
    tools: "Node.js, Express, React, MongoDB, JWT, RESTful APIs",
  },
  {
    title: "My Alt Pay",
    brief:
      "Contributed as a backend architect and database engineer for MYALTPAY using Node.js, Express, and PostgreSQL.Implemented Payment Gateway as third-party services and Implemented an admin panel to manage the entire system, including the payment gateway.",
    client: "In-House",
    role: "Senior Backend Engineer",
    responsibilities: [
      "Designed and implemented RESTful APIs for payment processing.",
      "Optimized database performance and ensured data integrity.",
      "Collaborated with front-end developers to integrate APIs.",
    ],
    tools: "Integration Server, Postman",
  },
  {
    title: "ARWAY",
    brief:
      "Optimized code and implemented new functionalities,Created API call tracking mechanism for pricing Executed database migrations and used Docker for deployment Implemented Swagger UI for backend.",
    client: "In-House",
    role: "Software Engineer",
    responsibilities: [
      "Analyzed queries and optimized them with proper joins.",
      "Created new wrapper services for centralization.",
      "Handled deployments and caching framework integration.",
    ],
    tools: "AWS, Docker, Swagger UI",
  },
  {
    title: "Spiffy",
    brief:
      "This is Project Aims to deliver the Services like AC repair and maintenance, Plumbing services, Electrical repairs, Home cleaning services, Appliance repair and maintenance, Pest control services, Carpentry services, Painting and decorating, Handyman services etc.",
    client: "Spiffy Inc",
    role: "Software Architect and Senior Backend Engineer",
    responsibilities: [
      "FCM for push notifications and real-time updates.",
      "Developed User , Partner and Admin portals with role-based access.",
      "Designed database schema and optimized queries for performance.",
      "Implemented RESTful APIs for service management and bookings.",
      "Collaborated with front-end developers to integrate APIs.",
    ],
    tools: "Node.js, Express, MongoDB, FCM, RESTful APIs and Swagger UI",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Major Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Key projects that demonstrate my expertise in integration, API
          development, and system optimization.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl shadow-md bg-white flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{project.brief}</p>
            <p className="text-gray-700 mb-2">
              <strong>Client:</strong> {project.client}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> {project.role}
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">
              <strong>Tools:</strong> {project.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
