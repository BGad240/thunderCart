

'use client'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="flex flex-col items-center space-y-4">
                <ClipLoader size={60} color="#f97316" speedMultiplier={1.5} />
                <p className="text-white text-lg font-semibold animate-pulse">جارٍ التحميل...</p>
            </div>
        </div>
    )
}
