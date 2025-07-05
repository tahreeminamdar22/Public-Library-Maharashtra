"use client";
import { useSearchParams } from "next/navigation";

export default function BookViewer() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");

  if (!file) {
    return <p className="p-8 text-center">No book selected.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <iframe
          src={`${file}#toolbar=0`}
          className="w-full h-[90vh] border rounded"
          title="Book Preview"
        />
      </div>
    </div>
  );
}
