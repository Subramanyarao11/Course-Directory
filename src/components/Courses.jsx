import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import useSwr from "swr";
import Header from './Header';
import Loader from './Loader';
import Errorpage from './Errorpage';

export default function () {
    // Protecting the API URL from being exposed to the public using Vite's env variables
    const url = import.meta.env.VITE_API_URL

    const fetcher = async () => {
        const res = await axios.get(url);
        return res.data;
    }

    const { data, error } = useSwr('courses', fetcher);
    if (!data) return <Loader />;
    if (error) return <Errorpage />;

    const deleteCourse = async (courseId) => {
        await axios.delete(`${url}/${courseId}`);
        mutate("courses");
    };

    return (
        <div className='container px-4'>
            <Header />
            <div className="flex flex-col mt-4">
                <div className="w-full">
                    <Link
                        to="/add"
                        className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Add New
                    </Link>
                    <div className="relative shadow rounded-lg mt-5">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th className="py-3 px-1 text-center">No</th>
                                    <th className="py-3 px-6">Course Name</th>
                                    <th className="py-3 px-6">Link</th>
                                    <th className="py-3 px-1 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((course, index) => (
                                    <tr className="bg-white border-b" key={course.id}>
                                        <td className="py-3 px-1 text-center">{index + 1}</td>
                                        <td className="py-3 px-6 font-medium text-gray-900">
                                            {course.title}
                                        </td>
                                        <td className="py-3 px-6">
                                            <a href={course.link} target="_blank" rel="noreferrer" className="lg:text-right text-red-500 underline cursor-pointer">View Course</a>
                                        </td>
                                        <td className="py-3 px-1 text-center">
                                            <Link
                                                to={`/edit/${course._id}`}
                                                className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 my-2 rounded text-white mr-1"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => deleteCourse(course._id)}
                                                className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 my-2 rounded text-white"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
