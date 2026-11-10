const teachers = [
{
id: 1,
name: "Ramesh Kumar",
email: "ramesh@gmail.com",
subject: "Mathematics",
},
{
id: 2,
name: "Priya Sharma",
email: "priya@gmail.com",
subject: "Computer Science",
},
{
id: 3,
name: "Suresh Rao",
email: "suresh@gmail.com",
subject: "English",
},
{
id: 4,
name: "Anitha",
email: "anitha@gmail.com",
subject: "Physics",
},
];

export default function Teachers() {
return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-2 text-3xl font-bold text-blue-900">
        Teacher Management
    </h1>

    <p className="mb-6 text-gray-600">
        View and manage teacher information
    </p>

    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b bg-blue-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Teacher Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Subject</th>
                </tr>
            </thead>

            <tbody>
                {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b">
                    <td className="p-4">{teacher.id}</td>
                    <td className="p-4">{teacher.name}</td>
                    <td className="p-4">{teacher.email}</td>
                    <td className="p-4">{teacher.subject}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</main>
);
}