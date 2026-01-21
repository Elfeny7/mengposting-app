import { useFeed } from '@/src/features/feed/feed.hook';
import { Post } from '@/src/features/feed/feed.type';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';

export default function Feed() {
    const { posts, isLoading, error, refresh } = useFeed();
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        setRefreshing(false);
    };

    if (isLoading && !refreshing) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#4f46e5" />
                <Text style={styles.loadingText}>Loading posts...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const renderPost = ({ item: post }: { item: Post }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    source={require('@/assets/images/fgo.jpeg')}
                    style={styles.avatarImage}
                />
                <View style={styles.authorInfo}>
                    <Text style={styles.authorName}>{post.author}</Text>
                    <Text style={styles.time}>{post.time}</Text>
                </View>
            </View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Feed</Text>
            <FlatList
                data={posts}
                keyExtractor={(post) => post.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={renderPost}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#4f46e5']}
                        tintColor="#4f46e5"
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    listContent: {
        padding: 16,
        gap: 12,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#4f46e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    authorInfo: {
        marginLeft: 12,
    },
    authorName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    time: {
        fontSize: 12,
        color: '#666666',
        marginTop: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 6,
    },
    content: {
        fontSize: 14,
        color: '#444444',
        lineHeight: 20,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 14,
        color: '#666666',
    },
    errorText: {
        fontSize: 16,
        color: '#ef4444',
    },
});
