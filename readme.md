# URInfo

[![Lint](https://github.com/jncraton/urinfo/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/urinfo/actions/workflows/lint.yml)
[![Test](https://github.com/jncraton/urinfo/actions/workflows/test.yml/badge.svg)](https://github.com/jncraton/urinfo/actions/workflows/test.yml)

A JavaScript library to provide URI metadata

## Usage

```js
> const hobbit = await urinfo('urn:isbn:9780007322602')
> hobbit.title
The Hobbit
> hobbit.year
1937
> hobbit.authors[0]
'J.R.R. Tolkien'
```
