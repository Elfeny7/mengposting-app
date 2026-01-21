import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function Feed() {
    const posts = [
        { id: 1, author: 'Ikmal Faris', title: 'Cihuy', content: 'Halo dunia', time: '5 jam lalu' },
        { id: 2, author: 'Ikmal Faris', title: 'Perkodingan', content: 'Ngodeng', time: '2 jam lalu' },
        { id: 3, author: 'Ikmal Faris', title: 'Udan', content: 'Udan rek!', time: '39 menit yang lalu' },
        { id: 4, author: 'Ikmal Faris', title: 'Panas', content: 'Panas rek!', time: '10 menit yang lalu' },
        { id: 5, author: 'Ikmal Faris', title: 'Pengen ados', content: 'Pengen ados rek!', time: '5 menit yang lalu' },
        { id: 6, author: 'Ikmal Faris', title: 'Judul', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus pharetra laoreet. Cras porta eros et risus ultricies tincidunt. Praesent nisl tortor, iaculis nec ultricies at, mollis sed lacus. Sed dignissim at dolor nec consequat.', time: '1 menit yang lalu' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Feed</Text>
            <FlatList
                data={[...posts].reverse()}
                keyExtractor={(post) => post.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={({ item: post }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            {/* <View style={styles.avatar}>
                                <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
                            </View> */}
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
                )}
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
});
