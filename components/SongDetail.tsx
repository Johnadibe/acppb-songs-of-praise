"use client";

import { SongDetailProps } from '@/types';

export default function SongDetail({ song, onBack }: SongDetailProps) {
    return (
        <div className="p-4">
            <button className="text-blue-600 underline" onClick={onBack}>
                Back to List
            </button>
            <div className="text-center">
                <h2 className="text-2xl font-bold mt-4">{song.title}</h2>
                <div className="max-h-96 overflow-y-auto whitespace-pre-wrap mt-2">{song.lyrics}</div>
            </div>

        </div>
    );
}
