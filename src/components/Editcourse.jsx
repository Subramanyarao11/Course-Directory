import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Editcourse = () => {

    const url = import.meta.env.VITE_API_URL

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getCourseById = async () => {
            const response = await axios.get(`${url}/${id}`);
            setTitle(response.data.title);
            setLink(response.data.link);
        };
        getCourseById();
    }, [id]);

    const updateCourse = async (e) => {
        e.preventDefault();
        await axios.patch(`${url}/${id}`, {
            title: title,
            link: link,
        });
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <form onSubmit={updateCourse} className="my-10">
                <div className="flex flex-col">
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Course Name</label>
                        <input
                            type="text"
                            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Update Course Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold text-slate-700">Course Link</label>
                        <input
                            type="text"
                            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Update Course Link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Editcourse;
