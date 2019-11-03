
```js
process.env
// => an object

// can assign properties
process.env.NODE_ENV = 'production'

// can access properties
const env = process.env.NODE_ENV

// accessing arguments
console.log(process.argv)

```


### `path` module
```js
    var path = require('path')

    path.normalize('this//is/something/../.././path')
    // => 'this/is/a/path'

    path.join('this', 'is', '/a/', 'path')
    // => 'this/is/a/path'

    path.resolve('/this', 'is/what', '../.', 'a', 'path') 
    // kind of path.normalize() + path.join()
    // => '/this/is/a/path'

    path.isAbsolute('/yes')
    // => true

    path.isAbsolute('yes')
    // => false

    path.relative('/this/is/a/', '/path')
    // => '../../../path'

    path.dirname('/this/is/a/path.txt')
    // => '/this/is/a'

    path.basename('/this/is/a/path.txt')
    // => 'path.txt'

    path.basename('/this/is/a/path.txt', '.txt')
    // => 'path'

    path.extname('path.txt')
    // => '.txt'

    path.sep
    // => '/' -- Mac, '\' -- Win

    'this/is/a/path'.split('/')      // Mac
    'this/is/a/path'.split('\\')     // Win
    'this/is/a/path'.split(path.sep) // All
    // => ['this', 'is', 'a', 'path']

    path.parse('/this/is/a/path.txt')
    // => 
    // { 
    //      root: '/', 
    //      dir: '/this/is/a', 
    //      base: 'path.txt', 
    //      ext: '.txt', 
    //      name: 'path'
    //  }

    path.format({ dir: 'this/is', base: 'file.txt' })
    // => 'this/is/file.txt'

```

### `fs` module
```js
    const fs = require('fs')

    // read file
    fs.readFile('files.js', (err, data) => {
        console.log(data.toString())
    })

    // another way to read file
    const readStream = fs.createReadStream('file.js')
    readStream.pipe(process.stdout)

    // write file
    fs.writeFile('text.txt', 'this is the content', err => {
        if (err) throw err
        console.log( fs.readFileSync('text.txt').toString())
    })

    // another way to write file
    const writeStream = fs.createWriteStream('fib.txt')
    const fib = require('./fib')
    fib.pipe(writeStream)
    
```
