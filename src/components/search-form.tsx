"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full sm:w-[580px]">
      <input
        placeholder="Search events in any city..."
        type="text"
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none transition 
      focus:ring-accent/50 focus:ring-2"
      />
    </form>
  );
}
