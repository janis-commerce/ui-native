(self.webpackChunk_janiscommerce_ui_native=self.webpackChunk_janiscommerce_ui_native||[]).push([[179],{"./.storybook/preview.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.decorators=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _CenterView=_interopRequireDefault(__webpack_require__("./storybook/decorators/CenterView/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),decorators=[function(Story){return(0,_jsxRuntime.jsx)(_CenterView.default,{children:(0,_jsxRuntime.jsx)(Story,{})})}];exports.decorators=decorators},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js");var _clientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/index.js"),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./.storybook/preview.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":return(0,_clientApi.addArgs)(value);case"argTypes":return(0,_clientApi.addArgTypes)(value);case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgsEnhancer)(enhancer)}));case"render":return(0,_clientApi.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./storybook/stories/Avatar/Avatar.stories.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithImage=exports.OnlyPlaceholder=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Avatar=_interopRequireDefault(__webpack_require__("./src/components/Avatar/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"Avatar",argTypes:{size:{options:["sm","md","lg"],control:{type:"select"}},textColor:{control:{type:"color"}},bgColor:{control:{type:"color"}}}};var WithImage=function WithImage(props){return(0,_jsxRuntime.jsx)(_Avatar.default,Object.assign({},props))};exports.WithImage=WithImage,WithImage.storyName="with image",WithImage.args={size:"sm",textColor:"#FFFFFF",bgColor:"#E8EAF6",imageUrl:"https://avatars.githubusercontent.com/u/49998302?s=200&v=4",placeholder:"Janis Commerce",customSize:0};var OnlyPlaceholder=function OnlyPlaceholder(props){return(0,_jsxRuntime.jsx)(_Avatar.default,Object.assign({},props))};exports.OnlyPlaceholder=OnlyPlaceholder,OnlyPlaceholder.storyName="only with placeholder",OnlyPlaceholder.args={size:"sm",textColor:"#FFFFFF",bgColor:"#E8EAF6",placeholder:"Janis Commerce",customSize:0},WithImage.parameters=Object.assign({storySource:{source:"(props) => <Avatar {...props} />"}},WithImage.parameters),OnlyPlaceholder.parameters=Object.assign({storySource:{source:"(props) => <Avatar {...props} />"}},OnlyPlaceholder.parameters)},"./storybook/stories/CheckBox/CheckBox.stories.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.DefaultProps=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _CheckBox=_interopRequireDefault(__webpack_require__("./src/components/CheckBox/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"CheckBox",argTypes:{checked:{options:[!0,!1],control:{type:"radio"}},onValueChange:{action:"Value changed!"},disabled:{options:[!0,!1],control:{type:"radio"}},checkOnColor:{control:{type:"color"}},checkOffColor:{control:{type:"color"}},iconCheckColor:{control:{type:"color"}}}};var DefaultProps=function DefaultProps(props){return(0,_jsxRuntime.jsx)(_CheckBox.default,Object.assign({},props))};exports.DefaultProps=DefaultProps,DefaultProps.storyName="default props",DefaultProps.args={checked:!0,customSize:16,checkOnColor:"#2979FF",checkOffColor:"#939598",iconCheckColor:"#FFF",borderRadius:4,disabled:!1},DefaultProps.parameters=Object.assign({storySource:{source:"(props) => <CheckBox {...props} />"}},DefaultProps.parameters)},"./storybook/stories/Image/Image.stories.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.DefaultProps=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Image=_interopRequireDefault(__webpack_require__("./src/components/Image/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"Image",argTypes:{resizeMode:{options:["cover","contain","stretch","repeat","center"],control:{type:"select"}}}};var DefaultProps=function DefaultProps(_ref){var uri=_ref.uri,width=_ref.width,height=_ref.height,resizeMode=_ref.resizeMode;return(0,_jsxRuntime.jsx)(_Image.default,{source:{uri},style:{width,height},resizeMode})};exports.DefaultProps=DefaultProps,DefaultProps.storyName="only displayed if the image source url is passed",DefaultProps.args={uri:"https://avatars.githubusercontent.com/u/49998302?s=200&v=4",width:80,height:80,resizeMode:"cover"},DefaultProps.parameters=Object.assign({storySource:{source:"({uri, width, height, resizeMode}) => (\n\t<Image source={{uri}} style={{width, height}} resizeMode={resizeMode} />\n)"}},DefaultProps.parameters)},"./storybook/stories/Text/Text.stories.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.DefaultProps=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _index=_interopRequireDefault(__webpack_require__("./storybook/stories/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default={title:"Text",argTypes:{fontFamily:{options:["normal","notoserif","sans-serif","sans-serif-light","sans-serif-thin","sans-serif-condensed","sans-serif-medium","serif","Roboto","monospace"],control:{type:"select"}},fontStyle:{options:["normal","italic"],control:{type:"select"}},fontWeight:{options:["normal","bold","100","200","300","400","500","600","700","800","900"],control:{type:"select"}},textDecorationLine:{options:["none","underline","line-through","underline line-through"],control:{type:"select"}},textTransform:{options:["none","uppercase","lowercase","capitalize"],control:{type:"select"}},color:{control:{type:"color"}}}};exports.default=_default;var DefaultProps=function DefaultProps(_ref){var textToDisplay=_ref.textToDisplay,fontSize=_ref.fontSize,color=_ref.color,fontFamily=_ref.fontFamily,fontStyle=_ref.fontStyle,fontWeight=_ref.fontWeight,letterSpacing=_ref.letterSpacing,textDecorationLine=_ref.textDecorationLine,textTransform=_ref.textTransform;return(0,_jsxRuntime.jsx)(_index.default,{fontSize,color,fontFamily,fontStyle,fontWeight,letterSpacing,textDecorationLine,textTransform,children:textToDisplay})};exports.DefaultProps=DefaultProps,DefaultProps.storyName="default props",DefaultProps.args={textToDisplay:"Hola",fontSize:24,color:"#000000",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",letterSpacing:0,textDecorationLine:"none",textTransform:"none"},DefaultProps.parameters=Object.assign({storySource:{source:"({\n\ttextToDisplay,\n\tfontSize,\n\tcolor,\n\tfontFamily,\n\tfontStyle,\n\tfontWeight,\n\tletterSpacing,\n\ttextDecorationLine,\n\ttextTransform,\n}) => (\n\t<Text\n\t\tfontSize={fontSize}\n\t\tcolor={color}\n\t\tfontFamily={fontFamily}\n\t\tfontStyle={fontStyle}\n\t\tfontWeight={fontWeight}\n\t\tletterSpacing={letterSpacing}\n\t\ttextDecorationLine={textDecorationLine}\n\t\ttextTransform={textTransform}>\n\t\t{textToDisplay}\n\t</Text>\n)"}},DefaultProps.parameters)},"./src/components/Avatar/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.sizeValues=exports.getSize=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Image=_interopRequireDefault(__webpack_require__("./src/components/Image/index.tsx")),_Text=_interopRequireDefault(__webpack_require__("./src/components/Text/index.tsx")),_index=__webpack_require__("./src/components/Avatar/utils/formatPlaceholder/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","textColor","bgColor","imageUrl","placeholder","customSize","onErrorImg"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var sizeValues={sm:24,md:36,lg:60};exports.sizeValues=sizeValues;var styles=_StyleSheet.default.create({container:{justifyContent:"center",overflow:"hidden"},text:{textAlign:"center",textTransform:"uppercase"}}),getSize=function getSize(size,customSize){return customSize||sizeValues[size]};exports.getSize=getSize;var _default=function Avatar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"sm":_ref$size,_ref$textColor=_ref.textColor,textColor=void 0===_ref$textColor?"#FFFFFF":_ref$textColor,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"#E8EAF6":_ref$bgColor,_ref$imageUrl=_ref.imageUrl,imageUrl=void 0===_ref$imageUrl?"":_ref$imageUrl,placeholder=_ref.placeholder,customSize=_ref.customSize,onErrorImg=_ref.onErrorImg,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_useState=(0,_react.useState)(!1),_useState2=(0,_slicedToArray2.default)(_useState,2),showInitials=_useState2[0],setShowInitials=_useState2[1];if(!placeholder)return null;var initials=(0,_index.formatPlaceholder)(String(placeholder));return(0,_jsxRuntime.jsxs)(_View.default,Object.assign({style:[styles.container,{backgroundColor:bgColor,borderRadius:getSize(size,customSize)/2,height:getSize(size,customSize),width:getSize(size,customSize)}]},props,{children:[!!imageUrl&&!showInitials&&(0,_jsxRuntime.jsx)(_Image.default,{accessibilityRole:"image",onError:function handleOnErrorImage(){setShowInitials(!0),onErrorImg&&onErrorImg()},onLoad:function onLoad(){return setShowInitials(!1)},source:{uri:imageUrl},style:{height:getSize(size,customSize),width:getSize(size,customSize)}}),(showInitials||!imageUrl)&&!!initials.length&&(0,_jsxRuntime.jsx)(_Text.default,{style:[styles.text,{color:textColor,fontSize:.4*getSize(size,customSize)}],children:initials})]}))};exports.default=_default},"./src/components/Avatar/utils/formatPlaceholder/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatPlaceholder=void 0;exports.formatPlaceholder=function formatPlaceholder(){var placeholder=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",names=placeholder.split(" ");return names.length>1?""+names[0].substring(0,1).toUpperCase()+names[1].substring(0,1).toUpperCase():placeholder.substring(0,2).toUpperCase()}},"./src/components/CheckBox/icon/CheckedIcon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_palette=__webpack_require__("./src/theme/palette.ts"),_reactNativeSvg=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react-native-svg/lib/module/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var CheckedIcon=function CheckedIcon(_ref){var color=_ref.color,size=_ref.size;return(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(_reactNativeSvg.default,{width:size,height:size,viewBox:"0 0 16 16",fill:"none",children:(0,_jsxRuntime.jsx)(_reactNativeSvg.Path,{d:"M3 0H3ZM4 8.0534L7.05987 11L12 5.28272L10.5916 4L6.93119 8.22932L5.29401 6.64607L4 8.0534Z",fill:color})})})};CheckedIcon.defaultProps={color:_palette.base.white,size:16};var _default=CheckedIcon;exports.default=_default},"./src/components/CheckBox/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_View=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"))),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_palette=__webpack_require__("./src/theme/palette.ts"),_CheckedIcon=_interopRequireDefault(__webpack_require__("./src/components/CheckBox/icon/CheckedIcon.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["checked","customSize","checkOnColor","checkOffColor","iconCheckColor","borderRadius","disabled"],getCheckBoxScale=function getCheckBoxScale(size,divisor){return size/divisor},_default=function CheckBox(_ref){var checked=_ref.checked,_ref$customSize=_ref.customSize,customSize=void 0===_ref$customSize?16:_ref$customSize,_ref$checkOnColor=_ref.checkOnColor,checkOnColor=void 0===_ref$checkOnColor?_palette.primary.main:_ref$checkOnColor,_ref$checkOffColor=_ref.checkOffColor,checkOffColor=void 0===_ref$checkOffColor?_palette.grey[500]:_ref$checkOffColor,_ref$iconCheckColor=_ref.iconCheckColor,iconCheckColor=void 0===_ref$iconCheckColor?_palette.base.white:_ref$iconCheckColor,borderRadius=_ref.borderRadius,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),hasBorderRadius=borderRadius||getCheckBoxScale(customSize,4),styles=_StyleSheet.default.create({touchableOpacity:{width:customSize,height:customSize,borderRadius:hasBorderRadius},checkOn:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:disabled?_palette.grey[200]:checkOnColor,width:customSize,height:customSize,borderRadius:hasBorderRadius},checkOff:{borderWidth:getCheckBoxScale(customSize,16),borderColor:disabled?_palette.grey[200]:checkOffColor,width:customSize,height:customSize,borderRadius:hasBorderRadius}}),isChecked=checked?styles.checkOn:styles.checkOff;return(0,_jsxRuntime.jsx)(_TouchableOpacity.default,Object.assign({disabled,activeOpacity:.6,style:styles.touchableOpacity},props,{children:(0,_jsxRuntime.jsx)(_View.default,{style:isChecked,children:checked&&(0,_jsxRuntime.jsx)(_CheckedIcon.default,{color:iconCheckColor,size:customSize})})}))};exports.default=_default},"./src/components/Image/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_Image=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Image/index.js"))),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["source"],_default=function Image(_ref){var source=_ref.source,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return source&&"object"==typeof source&&Object.keys(source).length&&Object.keys(source).includes("uri")?(0,_jsxRuntime.jsx)(_Image.default,Object.assign({source},props)):null};exports.default=_default},"./src/components/Text/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_StyleSheet=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"))),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],styles=_StyleSheet.default.create({TextStyles:{fontSize:16,fontFamily:"Roboto"}}),_default=function Text(_ref){var children=_ref.children,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return children?(0,_jsxRuntime.jsx)(_Text.default,Object.assign({style:styles.TextStyles},props,{children})):null};exports.default=_default},"./src/theme/palette.ts":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.white=exports.warning=exports.success=exports.primary=exports.grey=exports.error=exports.environment=exports.black=exports.base=exports.alert=void 0;exports.primary={main:"#2979FF",dark:"#1759FF",light:"#02BFFB"};exports.black={main:"#2F2F2F",dark:"#050505"};exports.white={main:"#E8EAF6",dark:"#D0D3E3",light:"#F4F5FB"};exports.grey={100:"#DDDFE2",200:"#D5D7DB",300:"#C4C6CC",400:"#A8AAAC",500:"#939598",600:"#747679",700:"#585858"};exports.base={white:"#fff",black:"#000"};exports.success={main:"#1DB779",dark:"#109D59"};exports.error={main:"#FF4343",dark:"#FF2A2A"};exports.warning={main:"#FF8D10",dark:"#FF6E08"};exports.alert={main:"#FFCE17",dark:"#FFBA0C"};exports.environment={qa:"#1DB779",beta:"#F13B70"}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./storybook/decorators/CenterView/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styles=_StyleSheet.default.create({main:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#F5FCFF"}}),_default=function CenterView(_ref){var children=_ref.children;return(0,_jsxRuntime.jsx)(_View.default,{style:styles.main,children})};exports.default=_default},"./storybook/stories/Text/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_Text=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/components/Text/index.tsx"))),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],_default=function Text(_ref){var children=_ref.children,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),styles=_StyleSheet.default.create({text:Object.assign({},props)});return(0,_jsxRuntime.jsx)(_Text.default,{style:styles.text,children})};exports.default=_default},"./storybook/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Avatar/Avatar.stories.js":"./storybook/stories/Avatar/Avatar.stories.js","./CheckBox/CheckBox.stories.js":"./storybook/stories/CheckBox/CheckBox.stories.js","./Image/Image.stories.js":"./storybook/stories/Image/Image.stories.js","./Text/Text.stories.js":"./storybook/stories/Text/Text.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./storybook/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./storybook/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[521],(()=>(__webpack_exec__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);