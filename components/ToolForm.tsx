import { FormEvent, ReactNode } from "react";

interface ToolFormProps {
  onSubmit: (e: FormEvent) => void;
  loading?: boolean;
  error?: string | null;
  children: ReactNode;
  submitText?: string;
  loadingText?: string;
  borderColor?: string;
}

export default function ToolForm({
  onSubmit,
  loading = false,
  error = null,
  children,
  submitText = "Submit",
  loadingText = "Processing...",
  borderColor = "border-blue-200"
}: ToolFormProps) {
  return (
    <div className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 ${borderColor} mb-6 sm:mb-8`}>
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        {children}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4">
            <p className="text-red-700 flex items-center space-x-2 text-sm sm:text-base">
              <span>⚠️</span>
              <span>{error}</span>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm sm:text-base active:scale-95`}
        >
          {loading ? (
            <span className="flex items-center justify-center space-x-2">
              <svg
                className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>{loadingText}</span>
            </span>
          ) : (
            submitText
          )}
        </button>
      </form>
    </div>
  );
}
