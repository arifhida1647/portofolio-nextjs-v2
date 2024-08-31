"use client";

export function FixedPlugin() {
  return (
    <button
      className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      onClick={() => window.location.href = 'https://docs.google.com/document/d/1yGqyj63KuKWhMQrEivfvMMPuzYxFg0kIe3V-6oNRwXM/edit'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-gray-800"
      >
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>
      Resume
    </button>
  );
}
