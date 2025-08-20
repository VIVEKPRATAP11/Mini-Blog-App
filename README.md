# Blog Application

A modern blog application built with React, TypeScript, Vite, Redux Toolkit, and Tailwind CSS.

## Features

- **Posts List**: Browse all blog posts with search functionality
- **Post Details**: View individual posts with comments
- **Add New Post**: Create new blog posts with a modal form
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **State Management**: Global state managed with Redux Toolkit
- **Loading States**: Shows loading spinners during API calls
- **Error Handling**: Displays user-friendly error messages with retry options
- **Search**: Filter posts by title
- **Modern UI**: Clean and responsive design with Tailwind CSS

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JSONPlaceholder API** - Mock REST API for posts and comments

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── PostCard.tsx
│   ├── LoadingSpinner.tsx
│   ├── ErrorMessage.tsx
│   └── AddPostForm.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── PostsList.tsx
│   └── PostDetails.tsx
├── store/              # Redux store and slices
│   ├── index.ts
│   ├── postsSlice.ts
│   └── commentsSlice.ts
├── hooks/              # Custom hooks
│   └── redux.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── App.tsx             # Main app component
```

## API Endpoints

The application uses the JSONPlaceholder API:

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Comments**: `https://jsonplaceholder.typicode.com/posts/:id/comments`

## Features in Detail

### Posts List

- Displays all posts in a responsive grid layout
- Search functionality to filter posts by title
- Add new post button opens a modal form
- Each post card shows title, excerpt, and "View Details" button

### Post Details

- Shows full post content
- Displays associated comments
- Back navigation to posts list
- Loading states for comments

### Add New Post

- Modal form with title and body fields
- Form validation
- New posts appear at the top of the list
- Posts are stored in Redux state (not persisted to server)

### Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Mobile-friendly navigation
- Touch-friendly buttons and forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
