export default function Home() {
return (
<main className="min-h-screen bg-gray-100 p-8">

  <h1 className="text-3xl font-bold text-blue-900">
    Student Management System
  </h1>

  <p className="mt-2 text-gray-600">
    Welcome to Admin Dashboard
  </p>

  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-gray-500">Total Students</h2>
      <p className="mt-3 text-3xl font-bold text-blue-700">
        250
      </p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-gray-500">Total Teachers</h2>
      <p className="mt-3 text-3xl font-bold text-green-600">
        25
      </p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-gray-500">Total Classes</h2>
      <p className="mt-3 text-3xl font-bold text-purple-600">
        12
      </p>
    </div>

  </div>

  <div className="mt-8 rounded-xl bg-white p-6 shadow">
    <h2 className="mb-4 text-xl font-bold">
      Student Management
    </h2>

    <p className="text-gray-600">
      Manage student details, attendance,
      examinations and fees.
    </p>
  </div>

</main>
);
}