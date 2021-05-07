# react-native-message-toast

>

[![NPM Version][npm-image]][https://www.npmjs.com/package/react_native_message_toast]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm i react_native_message_toast
```

## Usage

## Usage

```
import MessageToast from 'react_native_message_toast';

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

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
