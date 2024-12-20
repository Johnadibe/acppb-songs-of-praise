"use client";

import { SearchHeaderProps } from "@/types";

export default function SearchHeader({ search, onSearchChange }: SearchHeaderProps) {
    return (
        <header className="bg-blue-600 p-4 text-white">
            <h1 className="text-xl font-bold text-center">ACPPB Songs of Praise</h1>
            <input
                type="text"
                placeholder="Search for acppb song..."
                className="w-full p-2 mt-2 rounded text-black"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </header>
    );
}
