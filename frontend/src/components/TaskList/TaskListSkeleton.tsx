export default function TaskListSkeleton() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-10 animate-pulse">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                <div className="h-8 w-40 rounded bg-gray-200" />
                <div className="mt-2 h-4 w-24 rounded bg-gray-200" />
                </div>

                <div className="h-8 w-24 rounded-full bg-gray-200" />
            </div>

            {/* Task List */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className={`flex items-start justify-between p-5 ${
                    index !== 5 ? "border-b border-gray-100" : ""
                    }`}
                >
                    <div className="flex-1 space-y-3">
                    <div className="h-5 w-1/3 rounded bg-gray-200" />
                    <div className="h-4 w-2/3 rounded bg-gray-100" />
                    </div>

                    <div className="ml-4 h-6 w-20 rounded-full bg-gray-200" />
                </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
                <div className="h-10 w-24 rounded-lg bg-gray-200" />
                <div className="h-4 w-28 rounded bg-gray-200" />
                <div className="h-10 w-24 rounded-lg bg-gray-200" />
            </div>
        </div>
    );
}