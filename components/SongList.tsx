"use client";

import { SongListProps } from '@/types';

export default function SongList({ songs, onSelectSong }: SongListProps) {
    if (songs.length === 0) {
        return <p className="text-gray-500 text-center">No songs available.</p>;
    }

    return (
        <ul className="space-y-4">
            {songs.map((song) => (
                <li
                    key={song.id}
                    className="p-4 bg-white shadow rounded cursor-pointer hover:bg-gray-100"
                    onClick={() => onSelectSong(song)}
                >
                    <h3 className="text-lg font-bold">{song.lyrics.length > 100 ? song.lyrics.slice(0, 100) + "..." : song.lyrics}</h3>
                </li>
            ))}
        </ul>
    );
}