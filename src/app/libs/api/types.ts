export interface User {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  body: string;
  tags: string[];
  count: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  writer: User;
}
