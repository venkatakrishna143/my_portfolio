"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function Testimonial() {
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-15 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Achievements
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Recognitions and awards received for exceptional contributions and
            performance.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full">
              <ul className="list-disc pl-5 text-gray-700 text-lg space-y-3">
                <li>Best Employee Award and Team Player - December 2023</li>
                <li>Customer Delight Award - February 2025</li>
                <li>Best Tech Lead - June 2025</li>
              </ul>
            </div>
            <div className="h-[12rem] rounded-lg w-full sm:w-[18rem] shrink-0 hidden lg:block">
              <Image
                width={768}
                height={768}
                alt="Achievements"
                src="/image/blog-1.svg" // ✅ Replace with your own image
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
