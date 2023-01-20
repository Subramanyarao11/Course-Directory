import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-between md:space-x-5">
                <div className="flex items-start space-x-5">
                    <div className="pt-1.5">
                        {/* <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1> */}
                        <p className="text-sm font-medium text-gray-500">
                            <a href="ttps://github.com/Subramanyarao11/" target="_blank" rel="noreferrer" className="text-lg font-semibold text-blue-500 hover:underline">
                                Subramanya's
                            </a>{' '}
                            {' '} personalized course collection
                        </p>
                    </div>
                </div>
                <div className="pt-1.5 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                    <a href="https://github.com/Subramanyarao11/Course-Directory.git"
                        target="_blank" rel="noreferrer"
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}
