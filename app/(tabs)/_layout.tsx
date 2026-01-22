import { Tabs } from 'expo-router';
import { PostProvider } from '@/src/context/PostContext';

export default function TabLayout() {
  return (
    <PostProvider>
      <Tabs screenOptions={{ headerTitle: 'Mengposting App' }} >
        <Tabs.Screen name="index" options={{ title: 'Feed' }} />
        <Tabs.Screen name="create" options={{ title: 'Create' }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      </Tabs>
    </PostProvider>
  );
}
