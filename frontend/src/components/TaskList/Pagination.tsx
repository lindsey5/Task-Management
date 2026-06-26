import type { Dispatch, SetStateAction } from "react"

interface PaginationProps {
    setPage: Dispatch<SetStateAction<number>>;
    page: number;
    totalPages: number;
}

export default function Pagination ({
    page,
    setPage,
    totalPages
 } : PaginationProps) {
    return (
        <div className="mt-6 flex items-center justify-between">
            <button
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Previous
            </button>

            <div className="text-sm text-gray-500">
                Page <span className="font-medium">{page}</span> of{" "}
                <span className="font-medium">{totalPages}</span>
            </div>

            <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= (totalPages)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next
            </button>
        </div>
    )
}