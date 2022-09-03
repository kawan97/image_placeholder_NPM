# image-placeholder
dummy image designed to draw attention to the need for an actual image

## Features

* you can generetean image with (getImage(),KDT(500,600)),
    * getImage() it return an image : width=400 and height=400 ,
    * getImage(500,300) it return an image :  width=500 and height=300



### 1.0.0

Initial release of image-placeholder

---

## Installation

Using npm:
```shell
$ npm i image-placeholder
```


## How to use

In Node.js:
```shell
const {getImage} = require('image-placeholder');
console.log(getImage(500,300))
```
Or:
```shell
const anyname = require('image-placeholder').default;
console.log(anyname())
```


**Enjoy!**

