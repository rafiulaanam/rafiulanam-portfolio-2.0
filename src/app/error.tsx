"use client";

import { Button } from "@/components/ui/button";

// Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 items-center my-10">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 fill-danger-600 "
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <h1 >
        There is a problem
      </h1>

      <h1  className="text-center">
        {error.message || "Something went wrong!"}
      </h1>

      <h1  className="text-center">
        Please try again later or contact website owner
      </h1>

      <Button type="button" title="try again" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
