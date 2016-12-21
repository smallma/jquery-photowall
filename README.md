# jquery-photowall

[jquery-photowall](https://www.npmjs.com/package/jquery-photowall) jQuery photo wall gallery plugin (like in google)

[![NPM](https://nodei.co/npm/jquery-photowall.png)](https://www.npmjs.com/package/jquery-photowall)

## Description
Base on https://github.com/creotiv/jquery-photowall
update jQuery photo wall gallery plugin to node module


## Preview
![alt tag](https://cloud.githubusercontent.com/assets/429250/21384928/6be1e796-c7a7-11e6-8676-b8bac9f4f697.png)


## Installation

Install via [npm](https://www.npmjs.com/package/jquery-photowall)

Step 1:
```shell
npm install --save jquery-photowall
```

Step 2:
* include node_module/jquery-photowall/dist/css/jquery-photowall.css


## Usage

```js
const $ = require('jquery');
const PhotoWall = new (require('../../../../node_modules/jquery-photowall/resources/js/jquery-photowall.js'));

const PHOTOS = {
  photo_1: {
     id: 'photo-1',
     img: 'dist/images/2x/photo-1.jpg',
     meta: '',
     th: {
        src: 'dist/images/1x/photo-1.jpg',
        width: 256,
        height: 192
     }
  },
  photo_2: {
     id: 'photo-2',
     img: 'dist/images/2x/photo-2.jpg',
     meta: '',
     th: {
        src: 'dist/images/1x/photo-2.jpg',
        width: 257,
        height: 192
     }
  }
};

function _initPhotoWall() {
  PhotoWall.pw.init({
    el: '#gallery',
    zoom: false,
    showBox: true,
    showBoxSocial: false,
    padding: 3,
    lineMaxHeight: 400,
    lineMaxHeightDynamic: true,
    baseScreenHeight: 600
  });

  PhotoWall.pw.load(PHOTOS);
}

function loaded() {
  _initPhotoWall();
}

if (window.attachEvent) {
  window.attachEvent('onload', loaded);
} else if (window.addEventListener) {
  window.addEventListener('load', loaded, false);
} else {
  document.addEventListener('load', loaded, false);
}

```

```html
<body>
    <div id="gallery">
      <div class="body"></div>
    </div>
</body>

```


## License

MIT
