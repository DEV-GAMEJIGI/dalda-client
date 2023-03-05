export interface User {
  handle: string;
  username: string;
}

export interface Comment {
  id: number;
  content: string;
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

export interface PostCommentForm {
  rootCommentId?: number;
  mentionUserHandle?: string;
  content: string;
  tags: string[];
}

interface Page<T> {
  page: number;
  size: number;
  isLast: boolean;
  list: T[];
}

export type PaginationComment = Page<Comment>;
