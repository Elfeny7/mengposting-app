import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Mengposting' }} />
      <Tabs.Screen name="create" options={{ title: 'Mengposting' }} />
      <Tabs.Screen name="profile" options={{ title: 'Mengposting' }} />
    </Tabs>
  );
}
