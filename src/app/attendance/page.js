const attendance = [
{ id: 1, name: "Aishwarya", status: "Present" },
{ id: 2, name: "Kavya", status: "Present" },
{ id: 3, name: "Ashwini", status: "Absent" },
{ id: 4, name: "Hemashree", status: "Present" },
];

export default function Attendance() {
return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-2 text-3xl font-bold text-blue-900">
        Attendance Management
    </h1>

    <p className="mb-6 text-gray-600">
        View student attendance records
    </p>

    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b bg-blue-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Attendance</th>
                </tr>
            </thead>

            <tbody>
                {attendance.map((student) => (
                <tr key={student.id} className="border-b">
                    <td className="p-4">{student.id}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">
                        <span className={ student.status==="Present" ? "rounded bg-green-100 px-3 py-1 text-green-700"
                            : "rounded bg-red-100 px-3 py-1 text-red-700" }>
                            {student.status}
                        </span>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</main>
);
}