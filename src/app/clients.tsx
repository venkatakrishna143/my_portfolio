"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "Talentkind_Solutions_LLP",
  "coin_earth_technologies",
  "ARway_ai_The_Spatial_Computing_Platform",
  "techpixe"
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
       <Typography
  variant="h6"
  color="blue-gray"
  className="mb-8"
  placeholder={undefined}
  onResize={undefined}
  onResizeCapture={undefined}
  onPointerEnterCapture={undefined}
  onPointerLeaveCapture={undefined}
>
  My awesome Employers
</Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((logo, key) => {
            const displayName = logo
              .replace(/_/g, " ") // replace underscores with spaces
              .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize each word

            return (
              <div key={key} className="flex flex-col items-center">
                <Image
                  alt={displayName}
                  width={200}
                  height={200}
                  className="w-40 rounded-lg shadow-md"
                  src={`/logos/${logo}.jpeg`}
                />
                <p className="mt-4 text-gray-700 font-medium text-lg text-center">
                  {displayName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Clients;
