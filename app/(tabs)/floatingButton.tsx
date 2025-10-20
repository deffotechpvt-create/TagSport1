import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface FloatingActionButtonProps {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle | ViewStyle[];
}

export default function FloatingActionButton({
  children,
  onPress,
  style,
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.floatingButton, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,         // distance from bottom of screen
    alignSelf: 'center', // center horizontally
    zIndex: 100, 
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
