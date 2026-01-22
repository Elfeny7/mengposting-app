import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PostContextType } from "@/src/context/PostContext.type";
import { Post } from "@/src/types/post.type";

const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        AsyncStorage.getItem("posts").then(data => {
            if (data) setPosts(JSON.parse(data));
        });
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    const addPost = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now().toString(),
            title,
            content,
        };

        setPosts(prev => [newPost, ...prev]);
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const ctx = useContext(PostContext);
    if (!ctx) throw new Error("usePost must be used within PostProvider");
    return ctx;
};
