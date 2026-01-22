import { Post } from "@/src/types/post.type";

export type PostContextType = {
    posts: Post[];
    addPost: (title: string, content: string) => void;
}
