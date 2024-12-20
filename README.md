# ACPPB Songs of Praise Web App

## Overview

The **ACPPB Songs of Praise** is a Next.js web application built with TypeScript. This project provides an intuitive interface for users to search and browse songs from ACPPB's Songs of Praise, helping members learn and sing songs proficiently. The application emphasizes simplicity, performance, and scalability, ensuring a smooth experience for users.

This project is intended to grow over time, with the possibility of adding features and enhancements. It serves as a valuable tool for the church fellowship and others who cherish these songs.

---

## Features

- **Song Search:** Quickly find songs by typing keywords from the lyrics.
- **Song Browser:** Browse the song collection with ease, view details, and explore lyrics.
- **Responsive Design:** Optimized for various devices to ensure accessibility.
- **Dynamic Loading:** Asynchronous fetching of song data for a seamless user experience.

---

## Tech Stack

- **Frontend Framework:** Next.js (React with server-side rendering)
- **Programming Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** Fetch API
- **Deployment:** Compatible with platforms like Vercel or Netlify

---

## File Structure

```plaintext
.
├── components/
│   ├── SearchHeader.tsx        # Search input and header section
│   ├── SongBrowser.tsx         # Main logic for browsing and searching songs
│   ├── SongDetail.tsx          # Displays song details
│   ├── SongList.tsx            # Lists songs with click-to-select functionality
├── app/
│   └── page.tsx               # Home page entry
├── public/
│   └── songs_of_praise.json    # JSON file containing the song database
├── types.ts                    # TypeScript type definitions
```

---

## Getting Started

### Prerequisites

- **Node.js** (version >= 16.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Johnadibe/acppb-songs-of-praise-app.git
   cd acppb-songs-of-praise
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the project root.
   - Add the following variable:
     ```plaintext
     NEXT_PUBLIC_SONGS_URL=/data/songs_of_praise.json
     ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Deployment

To deploy the app, use platforms like **Vercel** or **Netlify**. Follow their guidelines to set up a Next.js project. Ensure the `songs_of_praise.json` file is accessible in the deployment environment.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## Future Enhancements

- **Audio Integration:** Add the ability to play acppb song tunes.
- **Favorite Songs:** Allow users to save and revisit their favorite songs.
- **Offline Support:** Enable browsing without internet access.
- **Mobile App Version:** Develop a React Native app for better accessibility.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- Special thanks to the ACPPB members for inspiring this project.
- Gratitude to the contributors and future developers who will enhance this tool.
