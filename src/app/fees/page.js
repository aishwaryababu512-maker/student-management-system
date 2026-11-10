const feeRecords = [
{
id: 1,
name: "Aishwarya",
total: 50000,
paid: 50000,
},
{
id: 2,
name: "Kavya",
total: 50000,
paid: 30000,
},
{
id: 3,
name: "Ashwini",
total: 50000,
paid: 20000,
},
{
id: 4,
name: "Hemashree",
total: 50000,
paid: 50000,
},
];

export default function Fees() {
return (
<main className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-2 text-3xl font-bold text-blue-900">
        Fees Management
    </h1>

    <p className="mb-6 text-gray-600">
        Manage student fee payments
    </p>

    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b bg-blue-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Total Fees</th>
                    <th className="p-4">Paid</th>
                    <th className="p-4">Pending</th>
                </tr>
            </thead>

            <tbody>
                {feeRecords.map((student) => (
                <tr key={student.id} className="border-b">
                    <td className="p-4">{student.id}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">₹{student.total}</td>
                    <td className="p-4 text-green-600">
                        ₹{student.paid}
                    </td>
                    <td className="p-4 text-red-600">
                        ₹{student.total - student.paid}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</main>
);
}