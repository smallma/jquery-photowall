const $ = require('jquery');
window.$ = $;
global.jQuery = $;

const PhotoWall = new (require('./jquery-photowall.js'));

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
  },
  photo_3: {
     id: 'photo-3',
     img: 'dist/images/2x/photo-3.jpg',
     meta: '',
     th: {
        src: 'dist/images/1x/photo-3.jpg',
        width: 143.25,
        height: 192
     }
  },
  photo_4: {
     id: 'photo-4',
     img: 'dist/images/2x/photo-4.jpg',
     meta: '',
     th: {
        src: 'dist/images/1x/photo-4.jpg',
        width: 341,
        height: 192
     }
  },
  photo_5: {
     id: 'photo-5',
     img: 'dist/images/2x/photo-5.jpg',
     meta: '',
     th: {
        src: 'dist/images/1x/photo-5.jpg',
        width: 144,
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
    lineMaxHeight: 500,
    lineMaxHeightDynamic: true,
    baseScreenHeight: 600
  });

  PhotoWall.pw.load(PHOTOS);
}

function loaded() {
  console.log('Page loaded');

  _initPhotoWall();
}

// support chrome, firefox, safari and IE
if (window.attachEvent) {
  window.attachEvent('onload', loaded);
} else if (window.addEventListener) {
  window.addEventListener('load', loaded, false);
} else {
  document.addEventListener('load', loaded, false);
}