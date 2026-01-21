import { useCallback, useEffect, useState } from 'react';
import { fetchPosts } from './feed.api';
import { Post } from './feed.type';

export const useFeed = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadPosts = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const posts = await fetchPosts();
            setPosts(posts);
            setIsLoading(false);
            setError(null);
        } catch {
            setPosts(prev => ({ ...prev}))
            setIsLoading(false);
            setError('Fetch posts failed');
        }
    }, []);

    const refresh = useCallback(() => {
        loadPosts();
    }, [loadPosts]);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    return {
        posts,
        isLoading,
        error,
        refresh,
    };
};
