const exams = [
{
id: 1,
name: "Aishwarya",
subject: "Computer Science",
marks: 85,
},
{
id: 2,
name: "Kavya",
subject: "Mathematics",
marks: 92,
},
{
id: 3,
name: "Ashwini",
subject: "English",
marks: 45,
},
{
id: 4,
name: "Hemashree",
subject: "Physics",
marks: 76,
},
];

export default function Examinations() {
return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-2 text-3xl font-bold text-blue-900">
        Examination Management
    </h1>

    <p className="mb-6 text-gray-600">
        View student examination results
    </p>

    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b bg-blue-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Marks</th>
                    <th className="p-4">Result</th>
                </tr>
            </thead>

            <tbody>
                {exams.map((exam) => (
                <tr key={exam.id} className="border-b">
                    <td className="p-4">{exam.id}</td>
                    <td className="p-4">{exam.name}</td>
                    <td className="p-4">{exam.subject}</td>
                    <td className="p-4">{exam.marks}/100</td>
                    <td className="p-4">
                        <span className={ exam.marks>= 35
                            ? "rounded bg-green-100 px-3 py-1 text-green-700"
                            : "rounded bg-red-100 px-3 py-1 text-red-700"
                            }>
                            {exam.marks >= 35 ? "Pass" : "Fail"}
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