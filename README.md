# js-react-toy
react train

## react
* https://react.vlpt.us
* https://velopert.com/reactjs-tutorials  (class style)

## drag and drop
### file 
* https://react-dropzone.js.org
* /dnd-file
* FileReader
* https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
* https://developer.mozilla.org/ko/docs/Web/API/FileReader

### read dnd
* https://react-dnd.github.io/react-dnd/about

## material ui
* https://material-ui.com

## xlsx (excel)
* https://www.npmjs.com/package/xlsx

## gesture
* css https://developer.mozilla.org/ko/docs/Web/CSS/transform
* mobile minimum font size
    * https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html
* touchevent
  * https://developer.mozilla.org/ko/docs/Web/API/Touch_events
  * https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Pinch_zoom_gestures
* rc-gesture
    * https://react-component.github.io/gesture
    * https://react-component.github.io/gesture/examples/simple.html
* react-use-gesture
    * https://github.com/pmndrs/react-use-gesture#adding-gestures-to-dom-nodes

## react-intl
* https://formatjs.io/docs/getting-started/installation/
* https://code-masterjung.tistory.com/58
* https://github.com/JungKyuHyun/react-intl-test
* https://medium.com/javascript-in-plain-english/internationalization-in-react-apps-using-react-intl-1d72a6f14053


## run https//localhost in chrome
```
input chrome:/net-internals/#hsts in chrome address window
input localhost and click delete below 'Delete domain security policies' at the bottom
```
## build
```
npm run build
#run
serve -s build
#install serve
npm install -g serve
#remove map file
https://velog.io/@racoon/React-build-%EC%8B%9C-sourcemap-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0
https://webdata.tistory.com/16
```

## mobile test
### iphone
``` 
simulator
open  xcode->Open Developer Tool->simulator
run simulator File->open->ios xxx-> iphone xxx
input url in safari address window

Safari Technology Preview
Developer->simulator-iphon xxx-ios xxx-> url in Safari Technology Preview
```

### android
``` 
simulator
run *Configure->AVD Manager
select and run virtual device and click power button
input url in chrome(simulator) address window

chrome
input chrome://inspect in chrome address window
click inspect under the URL you entered.
```

## Etc
### Eslint off per page
```
/* eslint-disable */  at first line
```
