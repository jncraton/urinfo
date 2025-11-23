# URInfo

[![Lint](https://github.com/jncraton/urinfo/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/urinfo/actions/workflows/lint.yml)
[![Test](https://github.com/jncraton/urinfo/actions/workflows/test.yml/badge.svg)](https://github.com/jncraton/urinfo/actions/workflows/test.yml)

A JavaScript library to provide [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) metadata

## Usage

### Books

```js
> const hobbit = await urinfo('urn:isbn:9780007322602')
> hobbit.title
The Hobbit
> hobbit.year
1937
> hobbit.authors[0]
'J.R.R. Tolkien'
```

### arXiv

```js
> const attention = await urinfo('https://arxiv.org/abs/1706.03762')
> attention.authors[0]
'Ashish Vaswani'
> attention.year
'2017'
> attention.title
'Attention Is All You Need'
```
