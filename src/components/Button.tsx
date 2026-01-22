import { COLORS } from '@/src/constants/colors';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

export default function Button({ title, onPress, style, textStyle, disabled = false }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.buttonDisabled, style]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 24,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: COLORS.gray,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
