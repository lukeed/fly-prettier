# fly-prettier [![][travis-badge]][travis-link]

> [Prettier](https://github.com/prettier/prettier) plugin for Fly

## Install

```sh
npm install --save-dev fly-prettier
```

## Usage

```js
exports.lint = function * (fly) {
  yield fly.source('src/**/*.js').prettier({
    semi: false,
    useTabs: true,
    trailingComma: 'es5'
  }).target('dist/js');
}
```

## API

### .prettier(options)

All configuration options can be found in [Prettier's API documentation](https://github.com/prettier/prettier#api).


## License

MIT © [Luke Edwards](https://lukeed.com)

[travis-link]:  https://travis-ci.org/lukeed/fly-prettier
[travis-badge]: http://img.shields.io/travis/lukeed/fly-prettier.svg?style=flat-square
