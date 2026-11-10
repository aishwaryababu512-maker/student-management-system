import Link from "next/link";
import "./globals.css";

export const metadata = {
title: "Student Management System",
description: "Manage students and academic records",
};

export default function RootLayout({ children }) {
return (
<html lang="en">

<body className="bg-gray-100">
  <nav className="bg-blue-700 p-4 text-white">
    <h1 className="text-2xl font-bold mb-3">
      Student Management System
    </h1>

    <div className="flex flex-wrap gap-4">
      <Link href="/">Dashboard</Link>
      <Link href="/students">Add Student</Link>
      <Link href="/student-list">Student List</Link>
      <Link href="/attendance">Attendance</Link>
      <Link href="/teachers">Teachers</Link>
      <Link href="/examinations">Examinations</Link>
      <Link href="/fees">Fees</Link>
    </div>
  </nav>

  <main className="p-6">{children}</main>
</body>

</html>
);
}