'use client';

import React from 'react'

const ReloadPageCTA = () => {
    return (
        <button
            onClick={() => window.location.reload()}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
        >
            Try Again
        </button>
    )
}

export default ReloadPageCTA;
