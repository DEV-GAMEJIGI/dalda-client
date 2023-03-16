export interface User {
  handle: string;
  username: string;
}

export interface Comment {
  id: number;
  description: string;
  tags: string[];
  subCommentsCount: number;
  likes: number;
  isLike: boolean;
  isModified: boolean;
  createdAt: string;
  updatedAt: string;
  writer: User;
  mentionUser: User | null;
}

export interface CommentContent {
  id: number;
  content: string;
}

export interface PostCommentRequest {
  rootCommentId?: number;
  mentionUserHandle?: string;
  content: string;
  tags: string[];
}

export interface Page<T> {
  page: number;
  size: number;
  isLast: boolean;
  list: T[];
}

export type PaginationComment = Page<Comment>;
