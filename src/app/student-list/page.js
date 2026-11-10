const students = [
{
id: 1,
name: "Aishwarya",
email: "aishwarya@gmail.com",
course: "Computer Science",
},
{
id: 2,
name: "Kavya",
email: "kavya@gmail.com",
course: "Information Science",
},
{
id: 3,
name: "Ashwini",
email: "ashwini@gmail.com",
course: "Electronics",
},
];

export default function StudentList() {
return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-2 text-3xl font-bold text-blue-900">
        Student List
    </h1>

    <p className="mb-6 text-gray-600">
        View all registered students
    </p>

    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b bg-blue-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Course</th>
                </tr>
            </thead>

            <tbody>
                {students.map((student) => (
                <tr key={student.id} className="border-b">
                    <td className="p-4">{student.id}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.email}</td>
                    <td className="p-4">{student.course}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</main>
);
}