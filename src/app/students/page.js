"use client";

import { useState } from "react";

export default function Students() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [course, setCourse] = useState("");

function addStudent(e) {
e.preventDefault();
alert("Student added successfully!");
setName("");
setEmail("");
setCourse("");
}

return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-6 text-3xl font-bold text-blue-900">
        Student Registration
    </h1>

    <form onSubmit={addStudent} className="max-w-xl space-y-4 rounded-xl bg-white p-6 shadow">
        <input className="w-full rounded border p-3" placeholder="Student Name" value={name} onChange={(e)=>
        setName(e.target.value)}
        required
        />

        <input className="w-full rounded border p-3" type="email" placeholder="Email Address" value={email}
            onChange={(e)=> setEmail(e.target.value)}
        required
        />

        <input className="w-full rounded border p-3" placeholder="Course" value={course} onChange={(e)=>
        setCourse(e.target.value)}
        required
        />

        <button className="w-full rounded bg-blue-700 p-3 text-white hover:bg-blue-800" type="submit">
            Add Student
        </button>
    </form>
</main>
);
}