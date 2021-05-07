import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import MessageToast from './src/MessageToast';

const App = () => {
  const messageRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <MessageToast ref={messageRef} />
      <Button
        title="Show Toast"
        onPress={() => {
          // console.log(messageRef.current)
          messageRef.current.show('hello', 'success');
        }}
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
