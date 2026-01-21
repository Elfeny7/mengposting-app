import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/fgo.jpeg')}
                    style={styles.avatar}
                />

                <Text style={styles.name}>Ikmal Faris</Text>
                <Text style={styles.email}>ikmal@example.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 32,
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});
