import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3 className="mb-10">Home</h3>
      <Link href="dashboard">Dashboard</Link>
    </div>
  );
}
