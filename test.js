const fs = require('fs')

const src = fs.readFileSync('urinfo.js', 'utf8')
urinfo = eval(src + ";urinfo")

function assertEqual(a, b) {
  console.assert(a == b, `${a} was not equal to ${b}`)
}

async function test() {
  const hobbit = await urinfo("urn:isbn:9780007322602")

  assertEqual(hobbit.title, 'The Hobbit')
  assertEqual(hobbit.year, '1937')
  assertEqual(hobbit.authors[0], 'J.R.R. Tolkien')
}

test()
