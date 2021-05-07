import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text } from 'react-native';
import MessageToast from './src/MessageToast';

const App = () => {
  const messageRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <MessageToast ref={messageRef} duration={3000} />
      <Button
        title="Show Toast"
        onPress={() => messageRef.current.show('This is a toast message!')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
