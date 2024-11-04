"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.otherReplacements = exports.eventMapping = exports.componentMapping = void 0;
// mappings.js
var componentMapping = exports.componentMapping = {
  'div': 'View',
  'span': 'Text',
  'img': 'Image',
  'button': 'TouchableOpacity',
  'h1': 'Text',
  'h2': 'Text',
  'h3': 'Text',
  'h4': 'Text',
  'h5': 'Text',
  'h6': 'Text',
  'header': 'Text',
  'p': 'Text',
  'ul': 'View',
  'li': 'Text',
  'form': 'View',
  'input': 'TextInput',
  'textarea': 'TextInput',
  'select': 'Picker',
  'option': 'Text',
  'table': 'View',
  'tr': 'View',
  'td': 'Text',
  'th': 'Text',
  'blockquote': 'Text',
  'label': 'Text',
  'strong': 'Text',
  'em': 'Text'
};
var eventMapping = exports.eventMapping = {
  'onClick': 'onPress',
  'onDoubleClick': 'onPress',
  'onMouseEnter': 'onPressIn',
  'onMouseLeave': 'onPressOut',
  'onFocus': 'onFocus',
  'onBlur': 'onBlur',
  'onChange': 'onChangeText',
  'onKeyDown': 'onKeyPress',
  'onSubmit': 'onPress',
  'onTouchStart': 'onPressIn',
  'onTouchEnd': 'onPressOut',
  'onTouchCancel': 'onPressOut'
};
var otherReplacements = exports.otherReplacements = {
  "import Link from 'next/link'": "import { Link } from 'expo-router'",
  'import Link from "next/link"': "import { Link } from 'expo-router'",
  "next/navigation": "expo-router",
  '"use client"': '',
  "'use client'": "",
  "HTMLButtonElement": "TouchableOpacity",
  "HTMLInputElement": "TextInput",
  "HTMLTextAreaElement": "TextInput",
  "HTMLSelectElement": "Picker",
  "HTMLTableElement": "View",
  "HTMLFormElement": "View",
  "HTMLDivElement": "View"
};