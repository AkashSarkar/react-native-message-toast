# react-native-message-toast

> This is a highly customizable Toast message for React Native

[![npm version](https://badge.fury.io/js/react_native_message_toast.svg)](//npmjs.com/package/react_native_message_toast)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm i react_native_message_toast
```

## Demo

![Alt Demo]<img src="/asset/Demo.png?raw=true" width="400" height="790">

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

## Props

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
