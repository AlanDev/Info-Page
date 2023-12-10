import React from 'react';

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div class="flex justify-center my-12">
      {prev ? (
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-[#de6dc7] bg-white border border-gray-300 rounded-lg
        hover:bg-[#de6dc7] hover:text-white transition-colors duration-200 ease-in-out"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <button onClick={handlePrevious}>Previous</button>
        </a>
      ) : null}

      {next ? (
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-[#de6dc7] bg-white border border-gray-300 rounded-lg
          hover:bg-[#de6dc7] hover:text-white transition-colors duration-200 ease-in-out"
        >
          <button onClick={handleNext}>Next</button>
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      ) : null}
    </div>
  );
};

export default Pagination;
