export interface Song {
    id: number;
    title: string;
    lyrics: string;
}

export interface SongDetailProps {
    song: Song;
    onBack: () => void;
}

export interface SongListProps {
    songs: Song[];
    onSelectSong: (song: Song) => void;
}

export interface SearchHeaderProps {
    search: string;
    onSearchChange: (value: string) => void;
}