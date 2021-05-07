# react-native-message-toast

> This is a highly customizable Toast message for React Native

[![npm version](https://badge.fury.io/js/react_native_message_toast.svg)](//npmjs.com/package/react_native_message_toast)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm i react_native_message_toast
```

## Demo

<img src="/asset/Demo.png?raw=true" width="400" height="790">

## Usage

```
import MessageToast from 'react_native_message_toast';
```

```
const App = () => {
  const messageRef = useRef(null);

  return (
    <>
    {*...*}
      <MessageToast ref={messageRef} duration={2000} />

    // call show function from ref
      <Button
        title="Show Toast"
        onPress={() => messageRef.current.show('This is a toast message!')}
      />

      {*...*}
    </>
  );
};

export default App;
```

### Custom design for toast message

```
const App = () => {
  const messageRef = useRef(null);

  const customDesign = () => {
    return (
      <View>
        {/* your custom design */}
      </View>
    );
  }

  return (
    <>
    {*...*}
      <MessageToast
        ref={messageRef}
        duration={2000}
        RenderMessage={(message) => customDesign(message)}
       />

    // call show function from ref
      <Button
        title="Show Toast"
        onPress={() => messageRef.current.show('This is a toast message!')}
      />

      {*...*}
    </>
  );
};

export default App;
```

## Props

| Props         |   Type   | Description                          |
| ------------- | :------: | :----------------------------------- |
| RenderMessage | function | Custom design for toast message      |
| duration      |  number  | Duration for auto hide toast message |
| color         |  string  | Color for message text               |

## License

[MIT](http://vjpr.mit-license.org)
