import React from 'react'

export default function () {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <div className="w-full h-full flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
            </div>
        </div>
    )
}
