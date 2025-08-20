export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}
