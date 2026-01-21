import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!title || !content) {
            Alert.alert('Error', 'Title and content must be filled!');
            return;
        }
        const newPost = {
            id: Date.now(),
            title,
            content,
        };
        console.log('Post:', newPost);

        setTitle('');
        setContent('');

        Alert.alert('Success', 'Post Created!');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.header}>Create Post</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Enter your post title"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Content</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={content}
                        onChangeText={setContent}
                        placeholder="What's on your mind?"
                        placeholderTextColor="#999"
                        multiline
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Create Post</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
        marginTop: 16,
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        padding: 14,
        fontSize: 15,
        color: '#1a1a1a',
    },
    textArea: {
        height: 140,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#4f46e5',
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
