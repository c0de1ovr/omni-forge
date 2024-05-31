/* eslint-disable react/function-component-definition */
'use client';

import { type NextPage } from 'next';
import { useEffect } from 'react';

const Error: NextPage<{
  error: Error;
  reset: () => void;
}> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            reset();
          }
        }
        type="button"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
