"use client";
import { useEffect, useMemo, useState } from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';
import SearchHeader from './SearchHeader';
import { Song } from '@/types';

export default function SongBrowser() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [search, setSearch] = useState<string>('');
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            setLoading(true);
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_SONGS_URL!);
                if (!response.ok) {
                    throw new Error('Failed to fetch songs');
                }
                const data: Song[] = await response.json();
                setSongs(data);
            } catch (err) {
                setError('Error fetching songs. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    const filteredSongs = useMemo(() => {
        return songs.filter(
            (song) => song.lyrics.toLowerCase().includes(search.toLowerCase())
        );
    }, [songs, search]);

    const showSongList = search.trim() !== '';

    return (
        <>
            <SearchHeader
                search={search}
                onSearchChange={setSearch}
            />

            <div className="p-4">
                {loading && <p className="text-center text-gray-500">Loading songs...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !selectedSong && (
                    <>
                        {showSongList ? (
                            filteredSongs.length === 0 ? (
                                <div>
                                    <p className="text-center text-gray-500">No songs found</p>
                                    <p className="text-center text-gray-500">Explore songs from our collection.</p>
                                </div>
                            ) : (
                                <SongList songs={filteredSongs} onSelectSong={setSelectedSong} />
                            )
                        ) : (
                            <p className="text-center text-gray-500">Explore songs from our collection.</p>

                        )}
                    </>
                )}

                {selectedSong && (
                    <SongDetail song={selectedSong} onBack={() => setSelectedSong(null)} />
                )}
            </div>
        </>
    );
}
