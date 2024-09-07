import React from 'react';

import { View, Text, StatusBar } from 'react-native';
import Login from '@/components/Login';

export default function App() {
  return (
    <View className="flex-1 bg-gray-900">
      <Login/>
    </View>
  );
}
