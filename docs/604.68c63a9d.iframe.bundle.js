(self.webpackChunk_janiscommerce_ui_native=self.webpackChunk_janiscommerce_ui_native||[]).push([[604],{"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":module=>{module.exports=function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":module=>{module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");module.exports=function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?arrayLikeToArray(o,minLen):void 0}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/react-native-web/dist/exports/TextInput/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=__webpack_require__("./node_modules/react/index.js"),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),_css=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/css.js")),forwardedProps=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react-native-web/dist/modules/forwardedProps/index.js")),_pick=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/pick/index.js")),_useElementLayout=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useElementLayout/index.js")),_useLayoutEffect=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js")),_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePlatformMethods=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js")),_useResponderEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useResponderEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TextInputState=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/TextInputState/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var forwardPropsList=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},forwardedProps.defaultProps),forwardedProps.accessibilityProps),forwardedProps.clickProps),forwardedProps.focusProps),forwardedProps.keyboardProps),forwardedProps.mouseProps),forwardedProps.touchProps),forwardedProps.styleProps),{},{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0});var TextInput=(0,_react.forwardRef)((function(props,forwardedRef){var type,inputMode,_props$autoCapitalize=props.autoCapitalize,autoCapitalize=void 0===_props$autoCapitalize?"sentences":_props$autoCapitalize,autoComplete=props.autoComplete,autoCompleteType=props.autoCompleteType,_props$autoCorrect=props.autoCorrect,autoCorrect=void 0===_props$autoCorrect||_props$autoCorrect,blurOnSubmit=props.blurOnSubmit,clearTextOnFocus=props.clearTextOnFocus,dir=props.dir,_props$editable=props.editable,editable=void 0===_props$editable||_props$editable,_props$keyboardType=props.keyboardType,keyboardType=void 0===_props$keyboardType?"default":_props$keyboardType,_props$multiline=props.multiline,multiline=void 0!==_props$multiline&&_props$multiline,_props$numberOfLines=props.numberOfLines,numberOfLines=void 0===_props$numberOfLines?1:_props$numberOfLines,onBlur=props.onBlur,onChange=props.onChange,onChangeText=props.onChangeText,onContentSizeChange=props.onContentSizeChange,onFocus=props.onFocus,onKeyPress=props.onKeyPress,onLayout=props.onLayout,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChange=props.onSelectionChange,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,onSubmitEditing=props.onSubmitEditing,placeholderTextColor=props.placeholderTextColor,returnKeyType=props.returnKeyType,_props$secureTextEntr=props.secureTextEntry,secureTextEntry=void 0!==_props$secureTextEntr&&_props$secureTextEntr,selection=props.selection,selectTextOnFocus=props.selectTextOnFocus,spellCheck=props.spellCheck;switch(keyboardType){case"email-address":type="email";break;case"number-pad":case"numeric":inputMode="numeric";break;case"decimal-pad":inputMode="decimal";break;case"phone-pad":type="tel";break;case"search":case"web-search":type="search";break;case"url":type="url";break;default:type="text"}secureTextEntry&&(type="password");var dimensions=(0,_react.useRef)({height:null,width:null}),hostRef=(0,_react.useRef)(null),handleContentSizeChange=(0,_react.useCallback)((function(){var node=hostRef.current;if(multiline&&onContentSizeChange&&null!=node){var newHeight=node.scrollHeight,newWidth=node.scrollWidth;newHeight===dimensions.current.height&&newWidth===dimensions.current.width||(dimensions.current.height=newHeight,dimensions.current.width=newWidth,onContentSizeChange({nativeEvent:{contentSize:{height:dimensions.current.height,width:dimensions.current.width}}}))}}),[hostRef,multiline,onContentSizeChange]),imperativeRef=(0,_react.useMemo)((function(){return function(hostNode){null!=hostNode&&(hostNode.clear=function(){null!=hostNode&&(hostNode.value="")},hostNode.isFocused=function(){return null!=hostNode&&_TextInputState.default.currentlyFocusedField()===hostNode},handleContentSizeChange())}}),[handleContentSizeChange]);(0,_useLayoutEffect.default)((function(){var node=hostRef.current;null!=node&&null!=selection&&function setSelection(node,selection){if(function isSelectionStale(node,selection){var selectionEnd=node.selectionEnd,selectionStart=node.selectionStart,start=selection.start,end=selection.end;return start!==selectionStart||end!==selectionEnd}(node,selection)){var start=selection.start,end=selection.end;try{node.setSelectionRange(start,end||start)}catch(e){}}}(node,selection),document.activeElement===node&&(_TextInputState.default._currentlyFocusedNode=node)}),[hostRef,selection]);var component=multiline?"textarea":"input",classList=[classes.textinput],style=_StyleSheet.default.compose(props.style,placeholderTextColor&&{placeholderTextColor});(0,_useElementLayout.default)(hostRef,onLayout),(0,_useResponderEvents.default)(hostRef,{onMoveShouldSetResponder,onMoveShouldSetResponderCapture,onResponderEnd,onResponderGrant,onResponderMove,onResponderReject,onResponderRelease,onResponderStart,onResponderTerminate,onResponderTerminationRequest,onScrollShouldSetResponder,onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder,onStartShouldSetResponderCapture});var supportedProps=function pickProps(props){return(0,_pick.default)(props,forwardPropsList)}(props);supportedProps.autoCapitalize=autoCapitalize,supportedProps.autoComplete=autoComplete||autoCompleteType||"on",supportedProps.autoCorrect=autoCorrect?"on":"off",supportedProps.classList=classList,supportedProps.dir=void 0!==dir?dir:"auto",supportedProps.enterKeyHint=returnKeyType,supportedProps.onBlur=function handleBlur(e){_TextInputState.default._currentlyFocusedNode=null,onBlur&&(e.nativeEvent.text=e.target.value,onBlur(e))},supportedProps.onChange=function handleChange(e){var text=e.target.value;e.nativeEvent.text=text,handleContentSizeChange(),onChange&&onChange(e),onChangeText&&onChangeText(text)},supportedProps.onFocus=function handleFocus(e){var node=hostRef.current;null!=node&&(_TextInputState.default._currentlyFocusedNode=node,onFocus&&(e.nativeEvent.text=e.target.value,onFocus(e)),clearTextOnFocus&&(node.value=""),selectTextOnFocus&&setTimeout((function(){node.select()}),0))},supportedProps.onKeyDown=function handleKeyDown(e){e.stopPropagation();var shouldBlurOnSubmit=null==blurOnSubmit?!multiline:blurOnSubmit,nativeEvent=e.nativeEvent,isComposing=function isEventComposing(nativeEvent){return nativeEvent.isComposing||229===nativeEvent.keyCode}(nativeEvent);onKeyPress&&onKeyPress(e),"Enter"!==e.key||e.shiftKey||isComposing||e.isDefaultPrevented()||(!blurOnSubmit&&multiline||!onSubmitEditing||(e.preventDefault(),nativeEvent.text=e.target.value,onSubmitEditing(e)),shouldBlurOnSubmit&&null!=hostRef.current&&hostRef.current.blur())},supportedProps.onSelect=function handleSelectionChange(e){if(onSelectionChange)try{var node=e.target,selectionStart=node.selectionStart,selectionEnd=node.selectionEnd;e.nativeEvent.selection={start:selectionStart,end:selectionEnd},e.nativeEvent.text=e.target.value,onSelectionChange(e)}catch(e){}},supportedProps.readOnly=!editable,supportedProps.rows=multiline?numberOfLines:void 0,supportedProps.spellCheck=null!=spellCheck?spellCheck:autoCorrect,supportedProps.style=style,supportedProps.type=multiline?void 0:type,supportedProps.inputMode=inputMode;var platformMethodsRef=(0,_usePlatformMethods.default)(supportedProps),setRef=(0,_useMergeRefs.default)(hostRef,platformMethodsRef,imperativeRef,forwardedRef);return supportedProps.ref=setRef,(0,_createElement.default)(component,supportedProps)}));TextInput.displayName="TextInput",TextInput.State=_TextInputState.default;var classes=_css.default.create({textinput:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"}}),_default=TextInput;exports.default=_default},"./node_modules/react-native-web/dist/exports/Text/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),_css=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/css.js")),forwardedProps=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-web/dist/modules/forwardedProps/index.js")),_pick=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/pick/index.js")),_useElementLayout=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useElementLayout/index.js")),_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePlatformMethods=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js")),_useResponderEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useResponderEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TextAncestorContext=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var forwardPropsList=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},forwardedProps.defaultProps),forwardedProps.accessibilityProps),forwardedProps.clickProps),forwardedProps.focusProps),forwardedProps.keyboardProps),forwardedProps.mouseProps),forwardedProps.touchProps),forwardedProps.styleProps),{},{href:!0,lang:!0,pointerEvents:!0}),Text=(0,React.forwardRef)((function(props,forwardedRef){var dir=props.dir,hrefAttrs=props.hrefAttrs,numberOfLines=props.numberOfLines,onClick=props.onClick,onLayout=props.onLayout,onPress=props.onPress,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,selectable=props.selectable,hasTextAncestor=(0,React.useContext)(_TextAncestorContext.default),hostRef=(0,React.useRef)(null),classList=[classes.text,!0===hasTextAncestor&&classes.textHasAncestor,1===numberOfLines&&classes.textOneLine,null!=numberOfLines&&numberOfLines>1&&classes.textMultiLine],style=[props.style,null!=numberOfLines&&numberOfLines>1&&{WebkitLineClamp:numberOfLines},!0===selectable&&styles.selectable,!1===selectable&&styles.notSelectable,onPress&&styles.pressable];(0,_useElementLayout.default)(hostRef,onLayout),(0,_useResponderEvents.default)(hostRef,{onMoveShouldSetResponder,onMoveShouldSetResponderCapture,onResponderEnd,onResponderGrant,onResponderMove,onResponderReject,onResponderRelease,onResponderStart,onResponderTerminate,onResponderTerminationRequest,onScrollShouldSetResponder,onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder,onStartShouldSetResponderCapture});var component=hasTextAncestor?"span":"div",supportedProps=function pickProps(props){return(0,_pick.default)(props,forwardPropsList)}(props);if(supportedProps.classList=classList,supportedProps.dir=dir,hasTextAncestor||(supportedProps.dir=null!=dir?dir:"auto"),supportedProps.onClick=function handleClick(e){null!=onClick&&onClick(e),null==onClick&&null!=onPress&&(e.stopPropagation(),onPress(e))},supportedProps.style=style,null!=props.href&&null!=hrefAttrs){var download=hrefAttrs.download,rel=hrefAttrs.rel,target=hrefAttrs.target;null!=download&&(supportedProps.download=download),null!=rel&&(supportedProps.rel=rel),"string"==typeof target&&(supportedProps.target="_"!==target.charAt(0)?"_"+target:target)}var platformMethodsRef=(0,_usePlatformMethods.default)(supportedProps),setRef=(0,_useMergeRefs.default)(hostRef,platformMethodsRef,forwardedRef);supportedProps.ref=setRef;var element=(0,_createElement.default)(component,supportedProps);return hasTextAncestor?element:React.createElement(_TextAncestorContext.default.Provider,{value:!0},element)}));Text.displayName="Text";var classes=_css.default.create({text:{border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",margin:0,padding:0,whiteSpace:"pre-wrap",wordWrap:"break-word"},textHasAncestor:{color:"inherit",font:"inherit",whiteSpace:"inherit"},textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"}}),styles=_StyleSheet.default.create({notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}}),_default=Text;exports.default=_default},"./node_modules/react-native-web/dist/modules/TextInputState/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _UIManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/UIManager/index.js")),_default={_currentlyFocusedNode:null,currentlyFocusedField:function currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput:function focusTextInput(textFieldNode){null!==textFieldNode&&(this._currentlyFocusedNode=textFieldNode,document.activeElement!==textFieldNode&&_UIManager.default.focus(textFieldNode))},blurTextInput:function blurTextInput(textFieldNode){null!==textFieldNode&&(this._currentlyFocusedNode=null,document.activeElement===textFieldNode&&_UIManager.default.blur(textFieldNode))}};exports.default=_default}}]);