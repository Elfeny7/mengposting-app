import { Tabs } from 'expo-router';
import { PostProvider } from '@/src/context/PostContext';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <PostProvider>
      <Tabs screenOptions={{ headerTitle: 'Mengposting App' }} >
        <Tabs.Screen name="index" options={{ title: 'Feed', tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />) }} />
        <Tabs.Screen name="create" options={{ title: 'Create', tabBarIcon: ({ color, size }) => (<Ionicons name="add-circle" size={size} color={color} />) }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => (<Ionicons name="person" size={size} color={color} />) }} />
      </Tabs>
    </PostProvider>
  );
}
