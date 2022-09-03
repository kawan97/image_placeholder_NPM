# any-image
dummy image designed to draw attention to the need for an actual image

## Features

* you can generetean image with (getImage(),getImage(500,600)),
    * getImage() it return an image : width=400 and height=400 ,
    * getImage(500,300) it return an image :  width=500 and height=300



### 1.0.0

Initial release of any-image

---

## Installation

Using npm:
```shell
$ npm i any-image
```


## How to use

In Node.js:
```shell
const {getImage} = require('any-image');
console.log(getImage(500,300))
```
Or:
```shell
const anyname = require('any-image').default;
console.log(anyname())
```
Or:
```shell
var anyImage = require("any-image")
const img=anyImage.getImage(155,20)
console.log(img)
```

**Enjoy!!**

