import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { View, Animated, Text } from 'react-native';

let clearCount = 0;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    // backgroundColor: 'red',
    left: 0,
    top: 10,
    right: 0,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    maxWidth: ' 90%',
  },
  messageWrapper: {
    flexDirection: 'row',
    padding: 20,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginRight: 15,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '500',
  },
};

const MessageToast = (
  { RenderMessage, duration = 2000, color = '#48F0D9' },
  ref,
) => {
  const animValue = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const show = (displayMessage, notificationType = 'success') => {
    if (!displayMessage) return;
    setMessage(displayMessage);
    setType(notificationType);

    clearTimeout(clearCount);
    Animated.timing(animValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(hide());
  };

  const hide = () => {
    clearCount = setTimeout(() => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }, duration);
  };

  useImperativeHandle(ref, () => ({
    show: (displayMessage, notificationType) =>
      show(displayMessage, notificationType),
    hide: () => hide(),
  }));

  const Message = () => (
    <View style={styles.messageWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.textStyle, { color: color }]}>{message}</Text>
      </View>
    </View>
  );

  const translationAnimation = {
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-270, 70],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, translationAnimation]}>
      <View style={styles.wrapper}>
        {RenderMessage ? RenderMessage(message) : Message()}
      </View>
    </Animated.View>
  );
};

export default forwardRef(MessageToast);
