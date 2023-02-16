interface Page<T> {
  page: number;
  size: number;
  isLast: boolean;
  items: T[];
}

export type PaginationComment = Page<Comment>;

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
  isModified: boolean;
  createdAt: string;
  updatedAt: string;
  writer: User;
  mentionUser: User | null;
}
