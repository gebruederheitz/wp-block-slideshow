import { components, i18n, element, blockEditor, compose as compose$2, data as data$4, hooks, blocks } from 'wp';
import _classCallCheck$1 from '@babel/runtime/helpers/classCallCheck';
import _createClass$1 from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/assertThisInitialized';
import _defineProperty$1 from '@babel/runtime/helpers/defineProperty';
import _extends$1 from '@babel/runtime/helpers/extends';
import _typeof$1 from '@babel/runtime/helpers/typeof';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

var commonjsGlobal$2 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check$3 = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$14 =
  // eslint-disable-next-line es/no-global-this -- safe
  check$3(typeof globalThis == 'object' && globalThis) ||
  check$3(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check$3(typeof self == 'object' && self) ||
  check$3(typeof commonjsGlobal$2 == 'object' && commonjsGlobal$2) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor$3 = {};

var fails$19 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$18 = fails$19;

// Detect IE8's incomplete defineProperty implementation
var descriptors$3 = !fails$18(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable$3 = {};

var $propertyIsEnumerable$6 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG$3 = getOwnPropertyDescriptor$8 && !$propertyIsEnumerable$6.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable$3.f = NASHORN_BUG$3 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$8(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$6;

var createPropertyDescriptor$h = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$a = {}.toString;

var classofRaw$6 = function (it) {
  return toString$a.call(it).slice(8, -1);
};

var fails$17 = fails$19;
var classof$m = classofRaw$6;

var split$3 = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject$3 = fails$17(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$m(it) == 'String' ? split$3.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$o = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$b = indexedObject$3;
var requireObjectCoercible$n = requireObjectCoercible$o;

var toIndexedObject$w = function (it) {
  return IndexedObject$b(requireObjectCoercible$n(it));
};

var isObject$O = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$N = isObject$O;

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$f = function (input, PREFERRED_STRING) {
  if (!isObject$N(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$N(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$N(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$N(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var requireObjectCoercible$m = requireObjectCoercible$o;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$t = function (argument) {
  return Object(requireObjectCoercible$m(argument));
};

var toObject$s = toObject$t;

var hasOwnProperty$n = {}.hasOwnProperty;

var has$D = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$n.call(toObject$s(it), key);
};

var global$13 = global$14;
var isObject$M = isObject$O;

var document$7 = global$13.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$3 = isObject$M(document$7) && isObject$M(document$7.createElement);

var documentCreateElement$6 = function (it) {
  return EXISTS$3 ? document$7.createElement(it) : {};
};

var DESCRIPTORS$L = descriptors$3;
var fails$16 = fails$19;
var createElement$5 = documentCreateElement$6;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine$3 = !DESCRIPTORS$L && !fails$16(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement$5('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$K = descriptors$3;
var propertyIsEnumerableModule$9 = objectPropertyIsEnumerable$3;
var createPropertyDescriptor$g = createPropertyDescriptor$h;
var toIndexedObject$v = toIndexedObject$w;
var toPrimitive$e = toPrimitive$f;
var has$C = has$D;
var IE8_DOM_DEFINE$6 = ie8DomDefine$3;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$6 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor$3.f = DESCRIPTORS$K ? $getOwnPropertyDescriptor$6 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$v(O);
  P = toPrimitive$e(P, true);
  if (IE8_DOM_DEFINE$6) try {
    return $getOwnPropertyDescriptor$6(O, P);
  } catch (error) { /* empty */ }
  if (has$C(O, P)) return createPropertyDescriptor$g(!propertyIsEnumerableModule$9.f.call(O, P), O[P]);
};

var objectDefineProperty$3 = {};

var isObject$L = isObject$O;

var anObject$M = function (it) {
  if (!isObject$L(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var DESCRIPTORS$J = descriptors$3;
var IE8_DOM_DEFINE$5 = ie8DomDefine$3;
var anObject$L = anObject$M;
var toPrimitive$d = toPrimitive$f;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$6 = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty$3.f = DESCRIPTORS$J ? $defineProperty$6 : function defineProperty(O, P, Attributes) {
  anObject$L(O);
  P = toPrimitive$d(P, true);
  anObject$L(Attributes);
  if (IE8_DOM_DEFINE$5) try {
    return $defineProperty$6(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$I = descriptors$3;
var definePropertyModule$k = objectDefineProperty$3;
var createPropertyDescriptor$f = createPropertyDescriptor$h;

var createNonEnumerableProperty$w = DESCRIPTORS$I ? function (object, key, value) {
  return definePropertyModule$k.f(object, key, createPropertyDescriptor$f(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$r = {exports: {}};

var global$12 = global$14;
var createNonEnumerableProperty$v = createNonEnumerableProperty$w;

var setGlobal$c = function (key, value) {
  try {
    createNonEnumerableProperty$v(global$12, key, value);
  } catch (error) {
    global$12[key] = value;
  } return value;
};

var global$11 = global$14;
var setGlobal$b = setGlobal$c;

var SHARED$3 = '__core-js_shared__';
var store$c = global$11[SHARED$3] || setGlobal$b(SHARED$3, {});

var sharedStore$3 = store$c;

var store$b = sharedStore$3;

var functionToString$3 = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store$b.inspectSource != 'function') {
  store$b.inspectSource = function (it) {
    return functionToString$3.call(it);
  };
}

var inspectSource$b = store$b.inspectSource;

var global$10 = global$14;
var inspectSource$a = inspectSource$b;

var WeakMap$7 = global$10.WeakMap;

var nativeWeakMap$3 = typeof WeakMap$7 === 'function' && /native code/.test(inspectSource$a(WeakMap$7));

var shared$i = {exports: {}};

var store$a = sharedStore$3;

(shared$i.exports = function (key, value) {
  return store$a[key] || (store$a[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var id$4 = 0;
var postfix$3 = Math.random();

var uid$d = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$4 + postfix$3).toString(36);
};

var shared$h = shared$i.exports;
var uid$c = uid$d;

var keys$7 = shared$h('keys');

var sharedKey$e = function (key) {
  return keys$7[key] || (keys$7[key] = uid$c(key));
};

var hiddenKeys$j = {};

var NATIVE_WEAK_MAP$3 = nativeWeakMap$3;
var global$$ = global$14;
var isObject$K = isObject$O;
var createNonEnumerableProperty$u = createNonEnumerableProperty$w;
var objectHas$3 = has$D;
var shared$g = sharedStore$3;
var sharedKey$d = sharedKey$e;
var hiddenKeys$i = hiddenKeys$j;

var OBJECT_ALREADY_INITIALIZED$3 = 'Object already initialized';
var WeakMap$6 = global$$.WeakMap;
var set$6, get$6, has$B;

var enforce$3 = function (it) {
  return has$B(it) ? get$6(it) : set$6(it, {});
};

var getterFor$3 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$K(it) || (state = get$6(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$3 || shared$g.state) {
  var store$9 = shared$g.state || (shared$g.state = new WeakMap$6());
  var wmget$3 = store$9.get;
  var wmhas$3 = store$9.has;
  var wmset$3 = store$9.set;
  set$6 = function (it, metadata) {
    if (wmhas$3.call(store$9, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$3);
    metadata.facade = it;
    wmset$3.call(store$9, it, metadata);
    return metadata;
  };
  get$6 = function (it) {
    return wmget$3.call(store$9, it) || {};
  };
  has$B = function (it) {
    return wmhas$3.call(store$9, it);
  };
} else {
  var STATE$3 = sharedKey$d('state');
  hiddenKeys$i[STATE$3] = true;
  set$6 = function (it, metadata) {
    if (objectHas$3(it, STATE$3)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$3);
    metadata.facade = it;
    createNonEnumerableProperty$u(it, STATE$3, metadata);
    return metadata;
  };
  get$6 = function (it) {
    return objectHas$3(it, STATE$3) ? it[STATE$3] : {};
  };
  has$B = function (it) {
    return objectHas$3(it, STATE$3);
  };
}

var internalState$3 = {
  set: set$6,
  get: get$6,
  has: has$B,
  enforce: enforce$3,
  getterFor: getterFor$3
};

var global$_ = global$14;
var createNonEnumerableProperty$t = createNonEnumerableProperty$w;
var has$A = has$D;
var setGlobal$a = setGlobal$c;
var inspectSource$9 = inspectSource$b;
var InternalStateModule$d = internalState$3;

var getInternalState$g = InternalStateModule$d.get;
var enforceInternalState$5 = InternalStateModule$d.enforce;
var TEMPLATE$3 = String(String).split('String');

(redefine$r.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$A(value, 'name')) {
      createNonEnumerableProperty$t(value, 'name', key);
    }
    state = enforceInternalState$5(value);
    if (!state.source) {
      state.source = TEMPLATE$3.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$_) {
    if (simple) O[key] = value;
    else setGlobal$a(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$t(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState$g(this).source || inspectSource$9(this);
});

var global$Z = global$14;

var path$9 = global$Z;

var path$8 = path$9;
var global$Y = global$14;

var aFunction$m = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn$m = function (namespace, method) {
  return arguments.length < 2 ? aFunction$m(path$8[namespace]) || aFunction$m(global$Y[namespace])
    : path$8[namespace] && path$8[namespace][method] || global$Y[namespace] && global$Y[namespace][method];
};

var objectGetOwnPropertyNames$3 = {};

var ceil$3 = Math.ceil;
var floor$5 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$i = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$5 : ceil$3)(argument);
};

var toInteger$h = toInteger$i;

var min$a = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$s = function (argument) {
  return argument > 0 ? min$a(toInteger$h(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger$g = toInteger$i;

var max$7 = Math.max;
var min$9 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$b = function (index, length) {
  var integer = toInteger$g(index);
  return integer < 0 ? max$7(integer + length, 0) : min$9(integer, length);
};

var toIndexedObject$u = toIndexedObject$w;
var toLength$r = toLength$s;
var toAbsoluteIndex$a = toAbsoluteIndex$b;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$f = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$u($this);
    var length = toLength$r(O.length);
    var index = toAbsoluteIndex$a(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes$4 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$f(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$f(false)
};

var has$z = has$D;
var toIndexedObject$t = toIndexedObject$w;
var indexOf$3 = arrayIncludes$4.indexOf;
var hiddenKeys$h = hiddenKeys$j;

var objectKeysInternal$3 = function (object, names) {
  var O = toIndexedObject$t(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$z(hiddenKeys$h, key) && has$z(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$z(O, key = names[i++])) {
    ~indexOf$3(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$c = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$6 = objectKeysInternal$3;
var enumBugKeys$b = enumBugKeys$c;

var hiddenKeys$g = enumBugKeys$b.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames$3.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$6(O, hiddenKeys$g);
};

var objectGetOwnPropertySymbols$3 = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols$3.f = Object.getOwnPropertySymbols;

var getBuiltIn$l = getBuiltIn$m;
var getOwnPropertyNamesModule$6 = objectGetOwnPropertyNames$3;
var getOwnPropertySymbolsModule$9 = objectGetOwnPropertySymbols$3;
var anObject$K = anObject$M;

// all object keys, includes non-enumerable and symbols
var ownKeys$b = getBuiltIn$l('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$6.f(anObject$K(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$9.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$y = has$D;
var ownKeys$a = ownKeys$b;
var getOwnPropertyDescriptorModule$9 = objectGetOwnPropertyDescriptor$3;
var definePropertyModule$j = objectDefineProperty$3;

var copyConstructorProperties$8 = function (target, source) {
  var keys = ownKeys$a(source);
  var defineProperty = definePropertyModule$j.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$9.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$y(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$15 = fails$19;

var replacement$3 = /#|\.prototype\./;

var isForced$a = function (feature, detection) {
  var value = data$3[normalize$3(feature)];
  return value == POLYFILL$3 ? true
    : value == NATIVE$3 ? false
    : typeof detection == 'function' ? fails$15(detection)
    : !!detection;
};

var normalize$3 = isForced$a.normalize = function (string) {
  return String(string).replace(replacement$3, '.').toLowerCase();
};

var data$3 = isForced$a.data = {};
var NATIVE$3 = isForced$a.NATIVE = 'N';
var POLYFILL$3 = isForced$a.POLYFILL = 'P';

var isForced_1$3 = isForced$a;

var global$X = global$14;
var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor$3.f;
var createNonEnumerableProperty$s = createNonEnumerableProperty$w;
var redefine$q = redefine$r.exports;
var setGlobal$9 = setGlobal$c;
var copyConstructorProperties$7 = copyConstructorProperties$8;
var isForced$9 = isForced_1$3;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export$3 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$X;
  } else if (STATIC) {
    target = global$X[TARGET] || setGlobal$9(TARGET, {});
  } else {
    target = (global$X[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$7(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$9(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties$7(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$s(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$q(target, key, sourceProperty, options);
  }
};

var aFunction$l = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var internalObjectKeys$5 = objectKeysInternal$3;
var enumBugKeys$a = enumBugKeys$c;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$d = Object.keys || function keys(O) {
  return internalObjectKeys$5(O, enumBugKeys$a);
};

var DESCRIPTORS$H = descriptors$3;
var definePropertyModule$i = objectDefineProperty$3;
var anObject$J = anObject$M;
var objectKeys$c = objectKeys$d;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties$2 = DESCRIPTORS$H ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$J(O);
  var keys = objectKeys$c(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$i.f(O, key = keys[index++], Properties[key]);
  return O;
};

var getBuiltIn$k = getBuiltIn$m;

var html$7 = getBuiltIn$k('document', 'documentElement');

var anObject$I = anObject$M;
var defineProperties$5 = objectDefineProperties$2;
var enumBugKeys$9 = enumBugKeys$c;
var hiddenKeys$f = hiddenKeys$j;
var html$6 = html$7;
var documentCreateElement$5 = documentCreateElement$6;
var sharedKey$c = sharedKey$e;

var GT$2 = '>';
var LT$2 = '<';
var PROTOTYPE$6 = 'prototype';
var SCRIPT$2 = 'script';
var IE_PROTO$4 = sharedKey$c('IE_PROTO');

var EmptyConstructor$2 = function () { /* empty */ };

var scriptTag$2 = function (content) {
  return LT$2 + SCRIPT$2 + GT$2 + content + LT$2 + '/' + SCRIPT$2 + GT$2;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX$2 = function (activeXDocument) {
  activeXDocument.write(scriptTag$2(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame$2 = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$5('iframe');
  var JS = 'java' + SCRIPT$2 + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$6.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag$2('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument$2;
var NullProtoObject$1 = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument$2 = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject$1 = activeXDocument$2 ? NullProtoObjectViaActiveX$2(activeXDocument$2) : NullProtoObjectViaIFrame$2();
  var length = enumBugKeys$9.length;
  while (length--) delete NullProtoObject$1[PROTOTYPE$6][enumBugKeys$9[length]];
  return NullProtoObject$1();
};

hiddenKeys$f[IE_PROTO$4] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate$3 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor$2[PROTOTYPE$6] = anObject$I(O);
    result = new EmptyConstructor$2();
    EmptyConstructor$2[PROTOTYPE$6] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$4] = O;
  } else result = NullProtoObject$1();
  return Properties === undefined ? result : defineProperties$5(result, Properties);
};

var aFunction$k = aFunction$l;
var isObject$J = isObject$O;

var slice$5 = [].slice;
var factories$3 = {};

var construct$3 = function (C, argsLength, args) {
  if (!(argsLength in factories$3)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories$3[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories$3[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind$3 = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction$k(this);
  var partArgs = slice$5.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice$5.call(arguments));
    return this instanceof boundFunction ? construct$3(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject$J(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

var $$1j = _export$3;
var getBuiltIn$j = getBuiltIn$m;
var aFunction$j = aFunction$l;
var anObject$H = anObject$M;
var isObject$I = isObject$O;
var create$b = objectCreate$3;
var bind$h = functionBind$3;
var fails$14 = fails$19;

var nativeConstruct$2 = getBuiltIn$j('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG$2 = fails$14(function () {
  function F() { /* empty */ }
  return !(nativeConstruct$2(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG$2 = !fails$14(function () {
  nativeConstruct$2(function () { /* empty */ });
});
var FORCED$g = NEW_TARGET_BUG$2 || ARGS_BUG$2;

$$1j({ target: 'Reflect', stat: true, forced: FORCED$g, sham: FORCED$g }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction$j(Target);
    anObject$H(args);
    var newTarget = arguments.length < 3 ? Target : aFunction$j(arguments[2]);
    if (ARGS_BUG$2 && !NEW_TARGET_BUG$2) return nativeConstruct$2(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind$h.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create$b(isObject$I(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject$I(result) ? result : instance;
  }
});

var classof$l = classofRaw$6;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$j = Array.isArray || function isArray(arg) {
  return classof$l(arg) == 'Array';
};

var toPrimitive$c = toPrimitive$f;
var definePropertyModule$h = objectDefineProperty$3;
var createPropertyDescriptor$e = createPropertyDescriptor$h;

var createProperty$d = function (object, key, value) {
  var propertyKey = toPrimitive$c(key);
  if (propertyKey in object) definePropertyModule$h.f(object, propertyKey, createPropertyDescriptor$e(0, value));
  else object[propertyKey] = value;
};

var getBuiltIn$i = getBuiltIn$m;

var engineUserAgent$3 = getBuiltIn$i('navigator', 'userAgent') || '';

var global$W = global$14;
var userAgent$a = engineUserAgent$3;

var process$a = global$W.process;
var versions$3 = process$a && process$a.versions;
var v8$3 = versions$3 && versions$3.v8;
var match$3, version$3;

if (v8$3) {
  match$3 = v8$3.split('.');
  version$3 = match$3[0] < 4 ? 1 : match$3[0] + match$3[1];
} else if (userAgent$a) {
  match$3 = userAgent$a.match(/Edge\/(\d+)/);
  if (!match$3 || match$3[1] >= 74) {
    match$3 = userAgent$a.match(/Chrome\/(\d+)/);
    if (match$3) version$3 = match$3[1];
  }
}

var engineV8Version$3 = version$3 && +version$3;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$a = engineV8Version$3;
var fails$13 = fails$19;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol$3 = !!Object.getOwnPropertySymbols && !fails$13(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$a && V8_VERSION$a < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$9 = nativeSymbol$3;

var useSymbolAsUid$3 = NATIVE_SYMBOL$9
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$V = global$14;
var shared$f = shared$i.exports;
var has$x = has$D;
var uid$b = uid$d;
var NATIVE_SYMBOL$8 = nativeSymbol$3;
var USE_SYMBOL_AS_UID$6 = useSymbolAsUid$3;

var WellKnownSymbolsStore$6 = shared$f('wks');
var Symbol$5 = global$V.Symbol;
var createWellKnownSymbol$3 = USE_SYMBOL_AS_UID$6 ? Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$b;

var wellKnownSymbol$Z = function (name) {
  if (!has$x(WellKnownSymbolsStore$6, name) || !(NATIVE_SYMBOL$8 || typeof WellKnownSymbolsStore$6[name] == 'string')) {
    if (NATIVE_SYMBOL$8 && has$x(Symbol$5, name)) {
      WellKnownSymbolsStore$6[name] = Symbol$5[name];
    } else {
      WellKnownSymbolsStore$6[name] = createWellKnownSymbol$3('Symbol.' + name);
    }
  } return WellKnownSymbolsStore$6[name];
};

var fails$12 = fails$19;
var wellKnownSymbol$Y = wellKnownSymbol$Z;
var V8_VERSION$9 = engineV8Version$3;

var SPECIES$g = wellKnownSymbol$Y('species');

var arrayMethodHasSpeciesSupport$e = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$9 >= 51 || !fails$12(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$g] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1i = _export$3;
var isObject$H = isObject$O;
var isArray$i = isArray$j;
var toAbsoluteIndex$9 = toAbsoluteIndex$b;
var toLength$q = toLength$s;
var toIndexedObject$s = toIndexedObject$w;
var createProperty$c = createProperty$d;
var wellKnownSymbol$X = wellKnownSymbol$Z;
var arrayMethodHasSpeciesSupport$d = arrayMethodHasSpeciesSupport$e;

var HAS_SPECIES_SUPPORT$8 = arrayMethodHasSpeciesSupport$d('slice');

var SPECIES$f = wellKnownSymbol$X('species');
var nativeSlice$1 = [].slice;
var max$6 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$1i({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$8 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject$s(this);
    var length = toLength$q(O.length);
    var k = toAbsoluteIndex$9(start, length);
    var fin = toAbsoluteIndex$9(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray$i(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray$i(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$H(Constructor)) {
        Constructor = Constructor[SPECIES$f];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice$1.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$6(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$c(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var wellKnownSymbol$W = wellKnownSymbol$Z;

var TO_STRING_TAG$a = wellKnownSymbol$W('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$a] = 'z';

var toStringTagSupport$2 = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT$8 = toStringTagSupport$2;
var classofRaw$5 = classofRaw$6;
var wellKnownSymbol$V = wellKnownSymbol$Z;

var TO_STRING_TAG$9 = wellKnownSymbol$V('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS$2 = classofRaw$5(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet$2 = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$k = TO_STRING_TAG_SUPPORT$8 ? classofRaw$5 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet$2(O = Object(it), TO_STRING_TAG$9)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS$2 ? classofRaw$5(O)
    // ES3 arguments fallback
    : (result = classofRaw$5(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var TO_STRING_TAG_SUPPORT$7 = toStringTagSupport$2;
var classof$j = classof$k;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$4 = TO_STRING_TAG_SUPPORT$7 ? {}.toString : function toString() {
  return '[object ' + classof$j(this) + ']';
};

var TO_STRING_TAG_SUPPORT$6 = toStringTagSupport$2;
var redefine$p = redefine$r.exports;
var toString$9 = objectToString$4;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT$6) {
  redefine$p(Object.prototype, 'toString', toString$9, { unsafe: true });
}

var DESCRIPTORS$G = descriptors$3;
var defineProperty$j = objectDefineProperty$3.f;

var FunctionPrototype$2 = Function.prototype;
var FunctionPrototypeToString$2 = FunctionPrototype$2.toString;
var nameRE$2 = /^\s*function ([^ (]*)/;
var NAME$2 = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS$G && !(NAME$2 in FunctionPrototype$2)) {
  defineProperty$j(FunctionPrototype$2, NAME$2, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString$2.call(this).match(nameRE$2)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var aFunction$i = aFunction$l;

// optional / simple context binding
var functionBindContext$2 = function (fn, that, length) {
  aFunction$i(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var anObject$G = anObject$M;

var iteratorClose$6 = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject$G(returnMethod.call(iterator)).value;
  }
};

var anObject$F = anObject$M;
var iteratorClose$5 = iteratorClose$6;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$3 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$F(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$5(iterator);
    throw error;
  }
};

var iterators$2 = {};

var wellKnownSymbol$U = wellKnownSymbol$Z;
var Iterators$b = iterators$2;

var ITERATOR$e = wellKnownSymbol$U('iterator');
var ArrayPrototype$5 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$6 = function (it) {
  return it !== undefined && (Iterators$b.Array === it || ArrayPrototype$5[ITERATOR$e] === it);
};

var classof$i = classof$k;
var Iterators$a = iterators$2;
var wellKnownSymbol$T = wellKnownSymbol$Z;

var ITERATOR$d = wellKnownSymbol$T('iterator');

var getIteratorMethod$6 = function (it) {
  if (it != undefined) return it[ITERATOR$d]
    || it['@@iterator']
    || Iterators$a[classof$i(it)];
};

var bind$g = functionBindContext$2;
var toObject$r = toObject$t;
var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
var isArrayIteratorMethod$5 = isArrayIteratorMethod$6;
var toLength$p = toLength$s;
var createProperty$b = createProperty$d;
var getIteratorMethod$5 = getIteratorMethod$6;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$r(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$5(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind$g(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$5(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$b(result, index, value);
    }
  } else {
    length = toLength$p(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$b(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$S = wellKnownSymbol$Z;

var ITERATOR$c = wellKnownSymbol$S('iterator');
var SAFE_CLOSING$2 = false;

try {
  var called$2 = 0;
  var iteratorWithReturn$2 = {
    next: function () {
      return { done: !!called$2++ };
    },
    'return': function () {
      SAFE_CLOSING$2 = true;
    }
  };
  iteratorWithReturn$2[ITERATOR$c] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn$2, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$6 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING$2) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$c] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$1h = _export$3;
var from$1 = arrayFrom$1;
var checkCorrectnessOfIteration$5 = checkCorrectnessOfIteration$6;

var INCORRECT_ITERATION$3 = !checkCorrectnessOfIteration$5(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$1h({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$3 }, {
  from: from$1
});

var toInteger$f = toInteger$i;
var requireObjectCoercible$l = requireObjectCoercible$o;

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$e = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible$l($this));
    var position = toInteger$f(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte$2 = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$e(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$e(true)
};

var fails$11 = fails$19;

var correctPrototypeGetter$1 = !fails$11(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var has$w = has$D;
var toObject$q = toObject$t;
var sharedKey$b = sharedKey$e;
var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter$1;

var IE_PROTO$3 = sharedKey$b('IE_PROTO');
var ObjectPrototype$5 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$2 ? Object.getPrototypeOf : function (O) {
  O = toObject$q(O);
  if (has$w(O, IE_PROTO$3)) return O[IE_PROTO$3];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$5 : null;
};

var fails$10 = fails$19;
var getPrototypeOf$4 = objectGetPrototypeOf$1;
var createNonEnumerableProperty$r = createNonEnumerableProperty$w;
var has$v = has$D;
var wellKnownSymbol$R = wellKnownSymbol$Z;

var ITERATOR$b = wellKnownSymbol$R('iterator');
var BUGGY_SAFARI_ITERATORS$3 = false;

var returnThis$5 = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$5, PrototypeOfArrayIteratorPrototype$1, arrayIterator$1;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator$1 = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator$1)) BUGGY_SAFARI_ITERATORS$3 = true;
  else {
    PrototypeOfArrayIteratorPrototype$1 = getPrototypeOf$4(getPrototypeOf$4(arrayIterator$1));
    if (PrototypeOfArrayIteratorPrototype$1 !== Object.prototype) IteratorPrototype$5 = PrototypeOfArrayIteratorPrototype$1;
  }
}

var NEW_ITERATOR_PROTOTYPE$1 = IteratorPrototype$5 == undefined || fails$10(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$5[ITERATOR$b].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE$1) IteratorPrototype$5 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!has$v(IteratorPrototype$5, ITERATOR$b)) {
  createNonEnumerableProperty$r(IteratorPrototype$5, ITERATOR$b, returnThis$5);
}

var iteratorsCore$1 = {
  IteratorPrototype: IteratorPrototype$5,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$3
};

var defineProperty$i = objectDefineProperty$3.f;
var has$u = has$D;
var wellKnownSymbol$Q = wellKnownSymbol$Z;

var TO_STRING_TAG$8 = wellKnownSymbol$Q('toStringTag');

var setToStringTag$c = function (it, TAG, STATIC) {
  if (it && !has$u(it = STATIC ? it : it.prototype, TO_STRING_TAG$8)) {
    defineProperty$i(it, TO_STRING_TAG$8, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$4 = iteratorsCore$1.IteratorPrototype;
var create$a = objectCreate$3;
var createPropertyDescriptor$d = createPropertyDescriptor$h;
var setToStringTag$b = setToStringTag$c;
var Iterators$9 = iterators$2;

var returnThis$4 = function () { return this; };

var createIteratorConstructor$3 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$a(IteratorPrototype$4, { next: createPropertyDescriptor$d(1, next) });
  setToStringTag$b(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$9[TO_STRING_TAG] = returnThis$4;
  return IteratorConstructor;
};

var isObject$G = isObject$O;

var aPossiblePrototype$5 = function (it) {
  if (!isObject$G(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

/* eslint-disable no-proto -- safe */

var anObject$E = anObject$M;
var aPossiblePrototype$4 = aPossiblePrototype$5;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf$2 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$E(O);
    aPossiblePrototype$4(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$1g = _export$3;
var createIteratorConstructor$2 = createIteratorConstructor$3;
var getPrototypeOf$3 = objectGetPrototypeOf$1;
var setPrototypeOf$7 = objectSetPrototypeOf$2;
var setToStringTag$a = setToStringTag$c;
var createNonEnumerableProperty$q = createNonEnumerableProperty$w;
var redefine$o = redefine$r.exports;
var wellKnownSymbol$P = wellKnownSymbol$Z;
var Iterators$8 = iterators$2;
var IteratorsCore$1 = iteratorsCore$1;

var IteratorPrototype$3 = IteratorsCore$1.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$2 = IteratorsCore$1.BUGGY_SAFARI_ITERATORS;
var ITERATOR$a = wellKnownSymbol$P('iterator');
var KEYS$1 = 'keys';
var VALUES$1 = 'values';
var ENTRIES$1 = 'entries';

var returnThis$3 = function () { return this; };

var defineIterator$5 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$2(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$2 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS$1: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES$1: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES$1: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$a]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$2 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$3(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$3 !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$3(CurrentIteratorPrototype) !== IteratorPrototype$3) {
        if (setPrototypeOf$7) {
          setPrototypeOf$7(CurrentIteratorPrototype, IteratorPrototype$3);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$a] != 'function') {
          createNonEnumerableProperty$q(CurrentIteratorPrototype, ITERATOR$a, returnThis$3);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$a(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES$1 && nativeIterator && nativeIterator.name !== VALUES$1) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if (IterablePrototype[ITERATOR$a] !== defaultIterator) {
    createNonEnumerableProperty$q(IterablePrototype, ITERATOR$a, defaultIterator);
  }
  Iterators$8[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES$1),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS$1),
      entries: getIterationMethod(ENTRIES$1)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$o(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$1g({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var charAt$3 = stringMultibyte$2.charAt;
var InternalStateModule$c = internalState$3;
var defineIterator$4 = defineIterator$5;

var STRING_ITERATOR$1 = 'String Iterator';
var setInternalState$9 = InternalStateModule$c.set;
var getInternalState$f = InternalStateModule$c.getterFor(STRING_ITERATOR$1);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator$4(String, 'String', function (iterated) {
  setInternalState$9(this, {
    type: STRING_ITERATOR$1,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$f(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$3(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var objectGetOwnPropertyNamesExternal$2 = {};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var toIndexedObject$r = toIndexedObject$w;
var $getOwnPropertyNames$5 = objectGetOwnPropertyNames$3.f;

var toString$8 = {}.toString;

var windowNames$2 = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames$2 = function (it) {
  try {
    return $getOwnPropertyNames$5(it);
  } catch (error) {
    return windowNames$2.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal$2.f = function getOwnPropertyNames(it) {
  return windowNames$2 && toString$8.call(it) == '[object Window]'
    ? getWindowNames$2(it)
    : $getOwnPropertyNames$5(toIndexedObject$r(it));
};

var wellKnownSymbolWrapped$2 = {};

var wellKnownSymbol$O = wellKnownSymbol$Z;

wellKnownSymbolWrapped$2.f = wellKnownSymbol$O;

var path$7 = path$9;
var has$t = has$D;
var wrappedWellKnownSymbolModule$5 = wellKnownSymbolWrapped$2;
var defineProperty$h = objectDefineProperty$3.f;

var defineWellKnownSymbol$7 = function (NAME) {
  var Symbol = path$7.Symbol || (path$7.Symbol = {});
  if (!has$t(Symbol, NAME)) defineProperty$h(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$5.f(NAME)
  });
};

var isObject$F = isObject$O;
var isArray$h = isArray$j;
var wellKnownSymbol$N = wellKnownSymbol$Z;

var SPECIES$e = wellKnownSymbol$N('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$9 = function (originalArray, length) {
  var C;
  if (isArray$h(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$h(C.prototype))) C = undefined;
    else if (isObject$F(C)) {
      C = C[SPECIES$e];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var bind$f = functionBindContext$2;
var IndexedObject$a = indexedObject$3;
var toObject$p = toObject$t;
var toLength$o = toLength$s;
var arraySpeciesCreate$8 = arraySpeciesCreate$9;

var push$2 = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$d = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$p($this);
    var self = IndexedObject$a(O);
    var boundFunction = bind$f(callbackfn, that, 3);
    var length = toLength$o(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$8;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$2.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$2.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration$2 = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$d(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$d(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$d(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$d(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$d(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$d(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$d(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod$d(7)
};

var $$1f = _export$3;
var global$U = global$14;
var getBuiltIn$h = getBuiltIn$m;
var DESCRIPTORS$F = descriptors$3;
var NATIVE_SYMBOL$7 = nativeSymbol$3;
var USE_SYMBOL_AS_UID$5 = useSymbolAsUid$3;
var fails$$ = fails$19;
var has$s = has$D;
var isArray$g = isArray$j;
var isObject$E = isObject$O;
var anObject$D = anObject$M;
var toObject$o = toObject$t;
var toIndexedObject$q = toIndexedObject$w;
var toPrimitive$b = toPrimitive$f;
var createPropertyDescriptor$c = createPropertyDescriptor$h;
var nativeObjectCreate$2 = objectCreate$3;
var objectKeys$b = objectKeys$d;
var getOwnPropertyNamesModule$5 = objectGetOwnPropertyNames$3;
var getOwnPropertyNamesExternal$2 = objectGetOwnPropertyNamesExternal$2;
var getOwnPropertySymbolsModule$8 = objectGetOwnPropertySymbols$3;
var getOwnPropertyDescriptorModule$8 = objectGetOwnPropertyDescriptor$3;
var definePropertyModule$g = objectDefineProperty$3;
var propertyIsEnumerableModule$8 = objectPropertyIsEnumerable$3;
var createNonEnumerableProperty$p = createNonEnumerableProperty$w;
var redefine$n = redefine$r.exports;
var shared$e = shared$i.exports;
var sharedKey$a = sharedKey$e;
var hiddenKeys$e = hiddenKeys$j;
var uid$a = uid$d;
var wellKnownSymbol$M = wellKnownSymbol$Z;
var wrappedWellKnownSymbolModule$4 = wellKnownSymbolWrapped$2;
var defineWellKnownSymbol$6 = defineWellKnownSymbol$7;
var setToStringTag$9 = setToStringTag$c;
var InternalStateModule$b = internalState$3;
var $forEach$5 = arrayIteration$2.forEach;

var HIDDEN$2 = sharedKey$a('hidden');
var SYMBOL$2 = 'Symbol';
var PROTOTYPE$5 = 'prototype';
var TO_PRIMITIVE$2 = wellKnownSymbol$M('toPrimitive');
var setInternalState$8 = InternalStateModule$b.set;
var getInternalState$e = InternalStateModule$b.getterFor(SYMBOL$2);
var ObjectPrototype$4 = Object[PROTOTYPE$5];
var $Symbol$2 = global$U.Symbol;
var $stringify$2 = getBuiltIn$h('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$5 = getOwnPropertyDescriptorModule$8.f;
var nativeDefineProperty$2 = definePropertyModule$g.f;
var nativeGetOwnPropertyNames$2 = getOwnPropertyNamesExternal$2.f;
var nativePropertyIsEnumerable$2 = propertyIsEnumerableModule$8.f;
var AllSymbols$2 = shared$e('symbols');
var ObjectPrototypeSymbols$2 = shared$e('op-symbols');
var StringToSymbolRegistry$2 = shared$e('string-to-symbol-registry');
var SymbolToStringRegistry$2 = shared$e('symbol-to-string-registry');
var WellKnownSymbolsStore$5 = shared$e('wks');
var QObject$2 = global$U.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER$2 = !QObject$2 || !QObject$2[PROTOTYPE$5] || !QObject$2[PROTOTYPE$5].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor$2 = DESCRIPTORS$F && fails$$(function () {
  return nativeObjectCreate$2(nativeDefineProperty$2({}, 'a', {
    get: function () { return nativeDefineProperty$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$5(ObjectPrototype$4, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
  nativeDefineProperty$2(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
    nativeDefineProperty$2(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$2;

var wrap$4 = function (tag, description) {
  var symbol = AllSymbols$2[tag] = nativeObjectCreate$2($Symbol$2[PROTOTYPE$5]);
  setInternalState$8(symbol, {
    type: SYMBOL$2,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$F) symbol.description = description;
  return symbol;
};

var isSymbol$3 = USE_SYMBOL_AS_UID$5 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol$2;
};

var $defineProperty$5 = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$4) $defineProperty$5(ObjectPrototypeSymbols$2, P, Attributes);
  anObject$D(O);
  var key = toPrimitive$b(P, true);
  anObject$D(Attributes);
  if (has$s(AllSymbols$2, key)) {
    if (!Attributes.enumerable) {
      if (!has$s(O, HIDDEN$2)) nativeDefineProperty$2(O, HIDDEN$2, createPropertyDescriptor$c(1, {}));
      O[HIDDEN$2][key] = true;
    } else {
      if (has$s(O, HIDDEN$2) && O[HIDDEN$2][key]) O[HIDDEN$2][key] = false;
      Attributes = nativeObjectCreate$2(Attributes, { enumerable: createPropertyDescriptor$c(0, false) });
    } return setSymbolDescriptor$2(O, key, Attributes);
  } return nativeDefineProperty$2(O, key, Attributes);
};

var $defineProperties$2 = function defineProperties(O, Properties) {
  anObject$D(O);
  var properties = toIndexedObject$q(Properties);
  var keys = objectKeys$b(properties).concat($getOwnPropertySymbols$2(properties));
  $forEach$5(keys, function (key) {
    if (!DESCRIPTORS$F || $propertyIsEnumerable$5.call(properties, key)) $defineProperty$5(O, key, properties[key]);
  });
  return O;
};

var $create$2 = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate$2(O) : $defineProperties$2(nativeObjectCreate$2(O), Properties);
};

var $propertyIsEnumerable$5 = function propertyIsEnumerable(V) {
  var P = toPrimitive$b(V, true);
  var enumerable = nativePropertyIsEnumerable$2.call(this, P);
  if (this === ObjectPrototype$4 && has$s(AllSymbols$2, P) && !has$s(ObjectPrototypeSymbols$2, P)) return false;
  return enumerable || !has$s(this, P) || !has$s(AllSymbols$2, P) || has$s(this, HIDDEN$2) && this[HIDDEN$2][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor$5 = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$q(O);
  var key = toPrimitive$b(P, true);
  if (it === ObjectPrototype$4 && has$s(AllSymbols$2, key) && !has$s(ObjectPrototypeSymbols$2, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$5(it, key);
  if (descriptor && has$s(AllSymbols$2, key) && !(has$s(it, HIDDEN$2) && it[HIDDEN$2][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames$4 = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$2(toIndexedObject$q(O));
  var result = [];
  $forEach$5(names, function (key) {
    if (!has$s(AllSymbols$2, key) && !has$s(hiddenKeys$e, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols$2 = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
  var names = nativeGetOwnPropertyNames$2(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols$2 : toIndexedObject$q(O));
  var result = [];
  $forEach$5(names, function (key) {
    if (has$s(AllSymbols$2, key) && (!IS_OBJECT_PROTOTYPE || has$s(ObjectPrototype$4, key))) {
      result.push(AllSymbols$2[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$7) {
  $Symbol$2 = function Symbol() {
    if (this instanceof $Symbol$2) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid$a(description);
    var setter = function (value) {
      if (this === ObjectPrototype$4) setter.call(ObjectPrototypeSymbols$2, value);
      if (has$s(this, HIDDEN$2) && has$s(this[HIDDEN$2], tag)) this[HIDDEN$2][tag] = false;
      setSymbolDescriptor$2(this, tag, createPropertyDescriptor$c(1, value));
    };
    if (DESCRIPTORS$F && USE_SETTER$2) setSymbolDescriptor$2(ObjectPrototype$4, tag, { configurable: true, set: setter });
    return wrap$4(tag, description);
  };

  redefine$n($Symbol$2[PROTOTYPE$5], 'toString', function toString() {
    return getInternalState$e(this).tag;
  });

  redefine$n($Symbol$2, 'withoutSetter', function (description) {
    return wrap$4(uid$a(description), description);
  });

  propertyIsEnumerableModule$8.f = $propertyIsEnumerable$5;
  definePropertyModule$g.f = $defineProperty$5;
  getOwnPropertyDescriptorModule$8.f = $getOwnPropertyDescriptor$5;
  getOwnPropertyNamesModule$5.f = getOwnPropertyNamesExternal$2.f = $getOwnPropertyNames$4;
  getOwnPropertySymbolsModule$8.f = $getOwnPropertySymbols$2;

  wrappedWellKnownSymbolModule$4.f = function (name) {
    return wrap$4(wellKnownSymbol$M(name), name);
  };

  if (DESCRIPTORS$F) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$2($Symbol$2[PROTOTYPE$5], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$e(this).description;
      }
    });
    {
      redefine$n(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$5, { unsafe: true });
    }
  }
}

$$1f({ global: true, wrap: true, forced: !NATIVE_SYMBOL$7, sham: !NATIVE_SYMBOL$7 }, {
  Symbol: $Symbol$2
});

$forEach$5(objectKeys$b(WellKnownSymbolsStore$5), function (name) {
  defineWellKnownSymbol$6(name);
});

$$1f({ target: SYMBOL$2, stat: true, forced: !NATIVE_SYMBOL$7 }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has$s(StringToSymbolRegistry$2, string)) return StringToSymbolRegistry$2[string];
    var symbol = $Symbol$2(string);
    StringToSymbolRegistry$2[string] = symbol;
    SymbolToStringRegistry$2[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol$3(sym)) throw TypeError(sym + ' is not a symbol');
    if (has$s(SymbolToStringRegistry$2, sym)) return SymbolToStringRegistry$2[sym];
  },
  useSetter: function () { USE_SETTER$2 = true; },
  useSimple: function () { USE_SETTER$2 = false; }
});

$$1f({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$7, sham: !DESCRIPTORS$F }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create$2,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty$5,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties$2,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$5
});

$$1f({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$7 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames$4,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols$2
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$$1f({ target: 'Object', stat: true, forced: fails$$(function () { getOwnPropertySymbolsModule$8.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule$8.f(toObject$o(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify$2) {
  var FORCED_JSON_STRINGIFY$2 = !NATIVE_SYMBOL$7 || fails$$(function () {
    var symbol = $Symbol$2();
    // MS Edge converts symbol values to JSON as {}
    return $stringify$2([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify$2({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify$2(Object(symbol)) != '{}';
  });

  $$1f({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY$2 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject$E(replacer) && it === undefined || isSymbol$3(it)) return; // IE8 returns string on undefined
      if (!isArray$g(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol$3(value)) return value;
      };
      args[1] = replacer;
      return $stringify$2.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol$2[PROTOTYPE$5][TO_PRIMITIVE$2]) {
  createNonEnumerableProperty$p($Symbol$2[PROTOTYPE$5], TO_PRIMITIVE$2, $Symbol$2[PROTOTYPE$5].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$9($Symbol$2, SYMBOL$2);

hiddenKeys$e[HIDDEN$2] = true;

var $$1e = _export$3;
var DESCRIPTORS$E = descriptors$3;
var global$T = global$14;
var has$r = has$D;
var isObject$D = isObject$O;
var defineProperty$g = objectDefineProperty$3.f;
var copyConstructorProperties$6 = copyConstructorProperties$8;

var NativeSymbol$1 = global$T.Symbol;

if (DESCRIPTORS$E && typeof NativeSymbol$1 == 'function' && (!('description' in NativeSymbol$1.prototype) ||
  // Safari 12 bug
  NativeSymbol$1().description !== undefined
)) {
  var EmptyStringDescriptionStore$1 = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper$1 = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper$1
      ? new NativeSymbol$1(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol$1() : NativeSymbol$1(description);
    if (description === '') EmptyStringDescriptionStore$1[result] = true;
    return result;
  };
  copyConstructorProperties$6(SymbolWrapper$1, NativeSymbol$1);
  var symbolPrototype$1 = SymbolWrapper$1.prototype = NativeSymbol$1.prototype;
  symbolPrototype$1.constructor = SymbolWrapper$1;

  var symbolToString$2 = symbolPrototype$1.toString;
  var native$1 = String(NativeSymbol$1('test')) == 'Symbol(test)';
  var regexp$1 = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$g(symbolPrototype$1, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject$D(this) ? this.valueOf() : this;
      var string = symbolToString$2.call(symbol);
      if (has$r(EmptyStringDescriptionStore$1, symbol)) return '';
      var desc = native$1 ? string.slice(7, -1) : string.replace(regexp$1, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$1e({ global: true, forced: true }, {
    Symbol: SymbolWrapper$1
  });
}

var defineWellKnownSymbol$5 = defineWellKnownSymbol$7;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$5('iterator');

var wellKnownSymbol$L = wellKnownSymbol$Z;
var create$9 = objectCreate$3;
var definePropertyModule$f = objectDefineProperty$3;

var UNSCOPABLES$2 = wellKnownSymbol$L('unscopables');
var ArrayPrototype$4 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$4[UNSCOPABLES$2] == undefined) {
  definePropertyModule$f.f(ArrayPrototype$4, UNSCOPABLES$2, {
    configurable: true,
    value: create$9(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$9 = function (key) {
  ArrayPrototype$4[UNSCOPABLES$2][key] = true;
};

var toIndexedObject$p = toIndexedObject$w;
var addToUnscopables$8 = addToUnscopables$9;
var Iterators$7 = iterators$2;
var InternalStateModule$a = internalState$3;
var defineIterator$3 = defineIterator$5;

var ARRAY_ITERATOR$1 = 'Array Iterator';
var setInternalState$7 = InternalStateModule$a.set;
var getInternalState$d = InternalStateModule$a.getterFor(ARRAY_ITERATOR$1);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator$1 = defineIterator$3(Array, 'Array', function (iterated, kind) {
  setInternalState$7(this, {
    type: ARRAY_ITERATOR$1,
    target: toIndexedObject$p(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$d(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$7.Arguments = Iterators$7.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$8('keys');
addToUnscopables$8('values');
addToUnscopables$8('entries');

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables$2 = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var global$S = global$14;
var DOMIterables$4 = domIterables$2;
var ArrayIteratorMethods$1 = es_array_iterator$1;
var createNonEnumerableProperty$o = createNonEnumerableProperty$w;
var wellKnownSymbol$K = wellKnownSymbol$Z;

var ITERATOR$9 = wellKnownSymbol$K('iterator');
var TO_STRING_TAG$7 = wellKnownSymbol$K('toStringTag');
var ArrayValues$1 = ArrayIteratorMethods$1.values;

for (var COLLECTION_NAME$4 in DOMIterables$4) {
  var Collection$4 = global$S[COLLECTION_NAME$4];
  var CollectionPrototype$4 = Collection$4 && Collection$4.prototype;
  if (CollectionPrototype$4) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$4[ITERATOR$9] !== ArrayValues$1) try {
      createNonEnumerableProperty$o(CollectionPrototype$4, ITERATOR$9, ArrayValues$1);
    } catch (error) {
      CollectionPrototype$4[ITERATOR$9] = ArrayValues$1;
    }
    if (!CollectionPrototype$4[TO_STRING_TAG$7]) {
      createNonEnumerableProperty$o(CollectionPrototype$4, TO_STRING_TAG$7, COLLECTION_NAME$4);
    }
    if (DOMIterables$4[COLLECTION_NAME$4]) for (var METHOD_NAME$1 in ArrayIteratorMethods$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$4[METHOD_NAME$1] !== ArrayIteratorMethods$1[METHOD_NAME$1]) try {
        createNonEnumerableProperty$o(CollectionPrototype$4, METHOD_NAME$1, ArrayIteratorMethods$1[METHOD_NAME$1]);
      } catch (error) {
        CollectionPrototype$4[METHOD_NAME$1] = ArrayIteratorMethods$1[METHOD_NAME$1];
      }
    }
  }
}

var $$1d = _export$3;
var isArray$f = isArray$j;

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$$1d({ target: 'Array', stat: true }, {
  isArray: isArray$f
});

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check$2 = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$c$1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check$2(typeof globalThis == 'object' && globalThis) ||
  check$2(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check$2(typeof self == 'object' && self) ||
  check$2(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor$2 = {};

var fails$7$1 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$6$1 = fails$7$1;

// Detect IE8's incomplete defineProperty implementation
var descriptors$2 = !fails$6$1(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable$2 = {};

var $propertyIsEnumerable$4 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG$2 = getOwnPropertyDescriptor$1$1 && !$propertyIsEnumerable$4.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable$2.f = NASHORN_BUG$2 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$4;

var createPropertyDescriptor$3$1 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$7 = {}.toString;

var classofRaw$4 = function (it) {
  return toString$7.call(it).slice(8, -1);
};

var fails$5$1 = fails$7$1;
var classof$1$1 = classofRaw$4;

var split$2 = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject$2 = fails$5$1(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$1$1(it) == 'String' ? split$2.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2$1 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$9 = indexedObject$2;
var requireObjectCoercible$1$1 = requireObjectCoercible$2$1;

var toIndexedObject$3$1 = function (it) {
  return IndexedObject$9(requireObjectCoercible$1$1(it));
};

var isObject$7$1 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$6$1 = isObject$7$1;

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$3$1 = function (input, PREFERRED_STRING) {
  if (!isObject$6$1(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$6$1(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$6$1(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$6$1(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var requireObjectCoercible$k = requireObjectCoercible$2$1;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2$1 = function (argument) {
  return Object(requireObjectCoercible$k(argument));
};

var toObject$1$1 = toObject$2$1;

var hasOwnProperty$m = {}.hasOwnProperty;

var has$6$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$m.call(toObject$1$1(it), key);
};

var global$b$1 = global$c$1;
var isObject$5$1 = isObject$7$1;

var document$1$1 = global$b$1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$2 = isObject$5$1(document$1$1) && isObject$5$1(document$1$1.createElement);

var documentCreateElement$4 = function (it) {
  return EXISTS$2 ? document$1$1.createElement(it) : {};
};

var DESCRIPTORS$3$1 = descriptors$2;
var fails$4$1 = fails$7$1;
var createElement$4 = documentCreateElement$4;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine$2 = !DESCRIPTORS$3$1 && !fails$4$1(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement$4('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$2$1 = descriptors$2;
var propertyIsEnumerableModule$7 = objectPropertyIsEnumerable$2;
var createPropertyDescriptor$2$1 = createPropertyDescriptor$3$1;
var toIndexedObject$2$1 = toIndexedObject$3$1;
var toPrimitive$2$1 = toPrimitive$3$1;
var has$5$1 = has$6$1;
var IE8_DOM_DEFINE$1$1 = ie8DomDefine$2;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor$2.f = DESCRIPTORS$2$1 ? $getOwnPropertyDescriptor$4 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2$1(O);
  P = toPrimitive$2$1(P, true);
  if (IE8_DOM_DEFINE$1$1) try {
    return $getOwnPropertyDescriptor$4(O, P);
  } catch (error) { /* empty */ }
  if (has$5$1(O, P)) return createPropertyDescriptor$2$1(!propertyIsEnumerableModule$7.f.call(O, P), O[P]);
};

var objectDefineProperty$2 = {};

var isObject$4$1 = isObject$7$1;

var anObject$2$1 = function (it) {
  if (!isObject$4$1(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var DESCRIPTORS$1$1 = descriptors$2;
var IE8_DOM_DEFINE$4 = ie8DomDefine$2;
var anObject$1$1 = anObject$2$1;
var toPrimitive$1$1 = toPrimitive$3$1;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$4 = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty$2.f = DESCRIPTORS$1$1 ? $defineProperty$4 : function defineProperty(O, P, Attributes) {
  anObject$1$1(O);
  P = toPrimitive$1$1(P, true);
  anObject$1$1(Attributes);
  if (IE8_DOM_DEFINE$4) try {
    return $defineProperty$4(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$D = descriptors$2;
var definePropertyModule$2$1 = objectDefineProperty$2;
var createPropertyDescriptor$1$1 = createPropertyDescriptor$3$1;

var createNonEnumerableProperty$4$1 = DESCRIPTORS$D ? function (object, key, value) {
  return definePropertyModule$2$1.f(object, key, createPropertyDescriptor$1$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1$1 = {exports: {}};

var global$a$1 = global$c$1;
var createNonEnumerableProperty$3$1 = createNonEnumerableProperty$4$1;

var setGlobal$3$1 = function (key, value) {
  try {
    createNonEnumerableProperty$3$1(global$a$1, key, value);
  } catch (error) {
    global$a$1[key] = value;
  } return value;
};

var global$9$1 = global$c$1;
var setGlobal$2$1 = setGlobal$3$1;

var SHARED$2 = '__core-js_shared__';
var store$3$1 = global$9$1[SHARED$2] || setGlobal$2$1(SHARED$2, {});

var sharedStore$2 = store$3$1;

var store$2$1 = sharedStore$2;

var functionToString$2 = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store$2$1.inspectSource != 'function') {
  store$2$1.inspectSource = function (it) {
    return functionToString$2.call(it);
  };
}

var inspectSource$2$1 = store$2$1.inspectSource;

var global$8$1 = global$c$1;
var inspectSource$1$1 = inspectSource$2$1;

var WeakMap$1$1 = global$8$1.WeakMap;

var nativeWeakMap$2 = typeof WeakMap$1$1 === 'function' && /native code/.test(inspectSource$1$1(WeakMap$1$1));

var shared$3$1 = {exports: {}};

var store$1$1 = sharedStore$2;

(shared$3$1.exports = function (key, value) {
  return store$1$1[key] || (store$1$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var id$3 = 0;
var postfix$2 = Math.random();

var uid$2$1 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$3 + postfix$2).toString(36);
};

var shared$2$1 = shared$3$1.exports;
var uid$1$1 = uid$2$1;

var keys$6 = shared$2$1('keys');

var sharedKey$1$1 = function (key) {
  return keys$6[key] || (keys$6[key] = uid$1$1(key));
};

var hiddenKeys$3$1 = {};

var NATIVE_WEAK_MAP$2 = nativeWeakMap$2;
var global$7$1 = global$c$1;
var isObject$3$1 = isObject$7$1;
var createNonEnumerableProperty$2$1 = createNonEnumerableProperty$4$1;
var objectHas$2 = has$6$1;
var shared$1$1 = sharedStore$2;
var sharedKey$9 = sharedKey$1$1;
var hiddenKeys$2$1 = hiddenKeys$3$1;

var OBJECT_ALREADY_INITIALIZED$2 = 'Object already initialized';
var WeakMap$5 = global$7$1.WeakMap;
var set$5, get$5, has$4$1;

var enforce$2 = function (it) {
  return has$4$1(it) ? get$5(it) : set$5(it, {});
};

var getterFor$2 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3$1(it) || (state = get$5(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$2 || shared$1$1.state) {
  var store$8 = shared$1$1.state || (shared$1$1.state = new WeakMap$5());
  var wmget$2 = store$8.get;
  var wmhas$2 = store$8.has;
  var wmset$2 = store$8.set;
  set$5 = function (it, metadata) {
    if (wmhas$2.call(store$8, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$2);
    metadata.facade = it;
    wmset$2.call(store$8, it, metadata);
    return metadata;
  };
  get$5 = function (it) {
    return wmget$2.call(store$8, it) || {};
  };
  has$4$1 = function (it) {
    return wmhas$2.call(store$8, it);
  };
} else {
  var STATE$2 = sharedKey$9('state');
  hiddenKeys$2$1[STATE$2] = true;
  set$5 = function (it, metadata) {
    if (objectHas$2(it, STATE$2)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$2);
    metadata.facade = it;
    createNonEnumerableProperty$2$1(it, STATE$2, metadata);
    return metadata;
  };
  get$5 = function (it) {
    return objectHas$2(it, STATE$2) ? it[STATE$2] : {};
  };
  has$4$1 = function (it) {
    return objectHas$2(it, STATE$2);
  };
}

var internalState$2 = {
  set: set$5,
  get: get$5,
  has: has$4$1,
  enforce: enforce$2,
  getterFor: getterFor$2
};

var global$6$1 = global$c$1;
var createNonEnumerableProperty$1$1 = createNonEnumerableProperty$4$1;
var has$3$1 = has$6$1;
var setGlobal$1$1 = setGlobal$3$1;
var inspectSource$8 = inspectSource$2$1;
var InternalStateModule$9 = internalState$2;

var getInternalState$c = InternalStateModule$9.get;
var enforceInternalState$4 = InternalStateModule$9.enforce;
var TEMPLATE$2 = String(String).split('String');

(redefine$1$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$3$1(value, 'name')) {
      createNonEnumerableProperty$1$1(value, 'name', key);
    }
    state = enforceInternalState$4(value);
    if (!state.source) {
      state.source = TEMPLATE$2.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$6$1) {
    if (simple) O[key] = value;
    else setGlobal$1$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$1$1(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState$c(this).source || inspectSource$8(this);
});

var global$5$1 = global$c$1;

var path$1$1 = global$5$1;

var path$6 = path$1$1;
var global$4$1 = global$c$1;

var aFunction$2$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn$2$1 = function (namespace, method) {
  return arguments.length < 2 ? aFunction$2$1(path$6[namespace]) || aFunction$2$1(global$4$1[namespace])
    : path$6[namespace] && path$6[namespace][method] || global$4$1[namespace] && global$4$1[namespace][method];
};

var objectGetOwnPropertyNames$2 = {};

var ceil$2 = Math.ceil;
var floor$4 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$2$1 = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$4 : ceil$2)(argument);
};

var toInteger$1$1 = toInteger$2$1;

var min$1$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2$1 = function (argument) {
  return argument > 0 ? min$1$1(toInteger$1$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger$e = toInteger$2$1;

var max$5 = Math.max;
var min$8 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1$1 = function (index, length) {
  var integer = toInteger$e(index);
  return integer < 0 ? max$5(integer + length, 0) : min$8(integer, length);
};

var toIndexedObject$1$1 = toIndexedObject$3$1;
var toLength$1$1 = toLength$2$1;
var toAbsoluteIndex$8 = toAbsoluteIndex$1$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$c = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1$1($this);
    var length = toLength$1$1(O.length);
    var index = toAbsoluteIndex$8(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes$3 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$c(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$c(false)
};

var has$2$1 = has$6$1;
var toIndexedObject$o = toIndexedObject$3$1;
var indexOf$2 = arrayIncludes$3.indexOf;
var hiddenKeys$1$1 = hiddenKeys$3$1;

var objectKeysInternal$2 = function (object, names) {
  var O = toIndexedObject$o(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$2$1(hiddenKeys$1$1, key) && has$2$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$2$1(O, key = names[i++])) {
    ~indexOf$2(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$1$1 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$4 = objectKeysInternal$2;
var enumBugKeys$8 = enumBugKeys$1$1;

var hiddenKeys$d = enumBugKeys$8.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames$2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$4(O, hiddenKeys$d);
};

var objectGetOwnPropertySymbols$2 = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols$2.f = Object.getOwnPropertySymbols;

var getBuiltIn$1$1 = getBuiltIn$2$1;
var getOwnPropertyNamesModule$4 = objectGetOwnPropertyNames$2;
var getOwnPropertySymbolsModule$7 = objectGetOwnPropertySymbols$2;
var anObject$C = anObject$2$1;

// all object keys, includes non-enumerable and symbols
var ownKeys$1$2 = getBuiltIn$1$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$4.f(anObject$C(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$7.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$1$1 = has$6$1;
var ownKeys$9 = ownKeys$1$2;
var getOwnPropertyDescriptorModule$7 = objectGetOwnPropertyDescriptor$2;
var definePropertyModule$1$1 = objectDefineProperty$2;

var copyConstructorProperties$1$1 = function (target, source) {
  var keys = ownKeys$9(source);
  var defineProperty = definePropertyModule$1$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$7.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$3$1 = fails$7$1;

var replacement$2 = /#|\.prototype\./;

var isForced$1$1 = function (feature, detection) {
  var value = data$2[normalize$2(feature)];
  return value == POLYFILL$2 ? true
    : value == NATIVE$2 ? false
    : typeof detection == 'function' ? fails$3$1(detection)
    : !!detection;
};

var normalize$2 = isForced$1$1.normalize = function (string) {
  return String(string).replace(replacement$2, '.').toLowerCase();
};

var data$2 = isForced$1$1.data = {};
var NATIVE$2 = isForced$1$1.NATIVE = 'N';
var POLYFILL$2 = isForced$1$1.POLYFILL = 'P';

var isForced_1$2 = isForced$1$1;

var global$3$1 = global$c$1;
var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor$2.f;
var createNonEnumerableProperty$n = createNonEnumerableProperty$4$1;
var redefine$m = redefine$1$1.exports;
var setGlobal$8 = setGlobal$3$1;
var copyConstructorProperties$5 = copyConstructorProperties$1$1;
var isForced$8 = isForced_1$2;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export$2 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$3$1;
  } else if (STATIC) {
    target = global$3$1[TARGET] || setGlobal$8(TARGET, {});
  } else {
    target = (global$3$1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$6(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$8(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties$5(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$n(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$m(target, key, sourceProperty, options);
  }
};

var aFunction$1$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var aFunction$h = aFunction$1$1;
var isObject$2$1 = isObject$7$1;

var slice$4 = [].slice;
var factories$2 = {};

var construct$2 = function (C, argsLength, args) {
  if (!(argsLength in factories$2)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories$2[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories$2[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind$2 = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction$h(this);
  var partArgs = slice$4.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice$4.call(arguments));
    return this instanceof boundFunction ? construct$2(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject$2$1(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

var $$2$1 = _export$2;
var bind$e = functionBind$2;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$2$1({ target: 'Function', proto: true }, {
  bind: bind$e
});

var classof$h = classofRaw$4;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$2$1 = Array.isArray || function isArray(arg) {
  return classof$h(arg) == 'Array';
};

var toPrimitive$a = toPrimitive$3$1;
var definePropertyModule$e = objectDefineProperty$2;
var createPropertyDescriptor$b = createPropertyDescriptor$3$1;

var createProperty$1$1 = function (object, key, value) {
  var propertyKey = toPrimitive$a(key);
  if (propertyKey in object) definePropertyModule$e.f(object, propertyKey, createPropertyDescriptor$b(0, value));
  else object[propertyKey] = value;
};

var getBuiltIn$g = getBuiltIn$2$1;

var engineUserAgent$2 = getBuiltIn$g('navigator', 'userAgent') || '';

var global$2$1 = global$c$1;
var userAgent$9 = engineUserAgent$2;

var process$9 = global$2$1.process;
var versions$2 = process$9 && process$9.versions;
var v8$2 = versions$2 && versions$2.v8;
var match$2, version$2;

if (v8$2) {
  match$2 = v8$2.split('.');
  version$2 = match$2[0] < 4 ? 1 : match$2[0] + match$2[1];
} else if (userAgent$9) {
  match$2 = userAgent$9.match(/Edge\/(\d+)/);
  if (!match$2 || match$2[1] >= 74) {
    match$2 = userAgent$9.match(/Chrome\/(\d+)/);
    if (match$2) version$2 = match$2[1];
  }
}

var engineV8Version$2 = version$2 && +version$2;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$2$1 = engineV8Version$2;
var fails$2$2 = fails$7$1;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol$2 = !!Object.getOwnPropertySymbols && !fails$2$2(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2$1 && V8_VERSION$2$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1$1 = nativeSymbol$2;

var useSymbolAsUid$2 = NATIVE_SYMBOL$1$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$1$1 = global$c$1;
var shared$d = shared$3$1.exports;
var has$q = has$6$1;
var uid$9 = uid$2$1;
var NATIVE_SYMBOL$6 = nativeSymbol$2;
var USE_SYMBOL_AS_UID$4 = useSymbolAsUid$2;

var WellKnownSymbolsStore$4 = shared$d('wks');
var Symbol$1$1 = global$1$1.Symbol;
var createWellKnownSymbol$2 = USE_SYMBOL_AS_UID$4 ? Symbol$1$1 : Symbol$1$1 && Symbol$1$1.withoutSetter || uid$9;

var wellKnownSymbol$3$1 = function (name) {
  if (!has$q(WellKnownSymbolsStore$4, name) || !(NATIVE_SYMBOL$6 || typeof WellKnownSymbolsStore$4[name] == 'string')) {
    if (NATIVE_SYMBOL$6 && has$q(Symbol$1$1, name)) {
      WellKnownSymbolsStore$4[name] = Symbol$1$1[name];
    } else {
      WellKnownSymbolsStore$4[name] = createWellKnownSymbol$2('Symbol.' + name);
    }
  } return WellKnownSymbolsStore$4[name];
};

var isObject$1$1 = isObject$7$1;
var isArray$1$1 = isArray$2$1;
var wellKnownSymbol$2$1 = wellKnownSymbol$3$1;

var SPECIES$1$1 = wellKnownSymbol$2$1('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1$1 = function (originalArray, length) {
  var C;
  if (isArray$1$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$1$1(C.prototype))) C = undefined;
    else if (isObject$1$1(C)) {
      C = C[SPECIES$1$1];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var fails$1$2 = fails$7$1;
var wellKnownSymbol$1$1 = wellKnownSymbol$3$1;
var V8_VERSION$1$1 = engineV8Version$2;

var SPECIES$d = wellKnownSymbol$1$1('species');

var arrayMethodHasSpeciesSupport$1$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1$1 >= 51 || !fails$1$2(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$d] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1$2 = _export$2;
var fails$_ = fails$7$1;
var isArray$e = isArray$2$1;
var isObject$C = isObject$7$1;
var toObject$n = toObject$2$1;
var toLength$n = toLength$2$1;
var createProperty$a = createProperty$1$1;
var arraySpeciesCreate$7 = arraySpeciesCreate$1$1;
var arrayMethodHasSpeciesSupport$c = arrayMethodHasSpeciesSupport$1$1;
var wellKnownSymbol$J = wellKnownSymbol$3$1;
var V8_VERSION$8 = engineV8Version$2;

var IS_CONCAT_SPREADABLE$2 = wellKnownSymbol$J('isConcatSpreadable');
var MAX_SAFE_INTEGER$7 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED$2 = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT$2 = V8_VERSION$8 >= 51 || !fails$_(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE$2] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$c('concat');

var isConcatSpreadable$2 = function (O) {
  if (!isObject$C(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE$2];
  return spreadable !== undefined ? !!spreadable : isArray$e(O);
};

var FORCED$f = !IS_CONCAT_SPREADABLE_SUPPORT$2 || !SPECIES_SUPPORT$2;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$1$2({ target: 'Array', proto: true, forced: FORCED$f }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$n(this);
    var A = arraySpeciesCreate$7(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable$2(E)) {
        len = toLength$n(E.length);
        if (n + len > MAX_SAFE_INTEGER$7) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$2);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$a(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$7) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$2);
        createProperty$a(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var Debuggable = /*#__PURE__*/function () {
  function Debuggable() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck$1(this, Debuggable);

    this.prefix = prefix;
    this.globalJsDebug = Debuggable.prototype.globalJsDebug;
  }

  _createClass$1(Debuggable, [{
    key: "debug",
    get: function get() {
      var _this$options;

      if (this.globalJsDebug || (this === null || this === void 0 ? void 0 : (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.debug) === true) {
        if (this.prefix) {
          return {
            log: this._wrappedLog.bind(this),
            warn: this._wrappedWarn.bind(this),
            error: this._wrappedError.bind(this)
          };
        } else {
          return console;
        }
      } else {
        return {
          log: function log() {},
          warn: function warn() {},
          error: function error() {}
        };
      }
    }
  }, {
    key: "_wrappedLog",
    value: function _wrappedLog() {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ["[".concat(this.prefix, "]")].concat(args));
    }
  }, {
    key: "_wrappedWarn",
    value: function _wrappedWarn() {
      var _console2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_console2 = console).warn.apply(_console2, ["[".concat(this.prefix, "]")].concat(args));
    }
  }, {
    key: "_wrappedError",
    value: function _wrappedError() {
      var _console3;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_console3 = console).error.apply(_console3, ["[".concat(this.prefix, "]")].concat(args));
    }
    /**
     * Toggle global JS debug output on or off.
     *
     * @param {boolean} toggle
     */

  }, {
    key: "setGlobalDebug",
    value: function setGlobalDebug(toggle) {
      Debuggable.prototype.globalJsDebug = toggle;
    }
  }]);

  return Debuggable;
}();
Debuggable.prototype.globalJsDebug = false;

var fails$Z = fails$19;

var arrayMethodIsStrict$9 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$Z(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $forEach$4 = arrayIteration$2.forEach;
var arrayMethodIsStrict$8 = arrayMethodIsStrict$9;

var STRICT_METHOD$6 = arrayMethodIsStrict$8('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach$2 = !STRICT_METHOD$6 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach$4(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var $$1c = _export$3;
var forEach$5 = arrayForEach$2;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$1c({ target: 'Array', proto: true, forced: [].forEach != forEach$5 }, {
  forEach: forEach$5
});

var global$R = global$14;
var DOMIterables$3 = domIterables$2;
var forEach$4 = arrayForEach$2;
var createNonEnumerableProperty$m = createNonEnumerableProperty$w;

for (var COLLECTION_NAME$3 in DOMIterables$3) {
  var Collection$3 = global$R[COLLECTION_NAME$3];
  var CollectionPrototype$3 = Collection$3 && Collection$3.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype$3 && CollectionPrototype$3.forEach !== forEach$4) try {
    createNonEnumerableProperty$m(CollectionPrototype$3, 'forEach', forEach$4);
  } catch (error) {
    CollectionPrototype$3.forEach = forEach$4;
  }
}

/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get$4 = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject$B(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction$2(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray$d(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction$2(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction$2(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray$d(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray$d(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject$B(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray$d(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject$B(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject$B(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject$B(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject$B(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction$2(transformer) && isFunction$2(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive$1 = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive$1 = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var COMPONENTS = {
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run
};

(function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get$4(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
})(Glide);

var $$1b = _export$3;
var bind$d = functionBind$3;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$1b({ target: 'Function', proto: true }, {
  bind: bind$d
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$A(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Built-in value references. */
var Symbol$4 = root$1.Symbol;

/** Used for built-in method references. */
var objectProto$o = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$l = objectProto$o.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$o.toString;

/** Built-in value references. */
var symToStringTag$3 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$l.call(value, symToStringTag$3),
      tag = value[symToStringTag$3];

  try {
    value[symToStringTag$3] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$n = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$n.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$3(value) {
  return nativeObjectToString$2.call(value);
}

/** `Object#toString` result references. */
var nullTag$1 = '[object Null]',
    undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$2 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return (symToStringTag$2 && symToStringTag$2 in Object(value))
    ? getRawTag$1(value)
    : objectToString$3(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

let supportsPassive = false;

try {
  let opts = Object.defineProperty({}, 'passive', {
    get () {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var DESCRIPTORS$C = descriptors$3;
var fails$Y = fails$19;
var objectKeys$a = objectKeys$d;
var getOwnPropertySymbolsModule$6 = objectGetOwnPropertySymbols$3;
var propertyIsEnumerableModule$6 = objectPropertyIsEnumerable$3;
var toObject$m = toObject$t;
var IndexedObject$8 = indexedObject$3;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign$2 = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$f = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign$2 = !$assign$2 || fails$Y(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$C && $assign$2({ b: 1 }, $assign$2(defineProperty$f({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$f(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign$2({}, A)[symbol] != 7 || objectKeys$a($assign$2({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$m(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$6.f;
  var propertyIsEnumerable = propertyIsEnumerableModule$6.f;
  while (argumentsLength > index) {
    var S = IndexedObject$8(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys$a(S).concat(getOwnPropertySymbols(S)) : objectKeys$a(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$C || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign$2;

var $$1a = _export$3;
var assign$2 = objectAssign$2;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$1a({ target: 'Object', stat: true, forced: Object.assign !== assign$2 }, {
  assign: assign$2
});

var $$19 = _export$3;
var toObject$l = toObject$t;
var nativeKeys$3 = objectKeys$d;
var fails$X = fails$19;

var FAILS_ON_PRIMITIVES$8 = fails$X(function () { nativeKeys$3(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$19({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$8 }, {
  keys: function keys(it) {
    return nativeKeys$3(toObject$l(it));
  }
});

// a string of all valid unicode whitespaces
var whitespaces$9 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var requireObjectCoercible$j = requireObjectCoercible$o;
var whitespaces$8 = whitespaces$9;

var whitespace$2 = '[' + whitespaces$8 + ']';
var ltrim$2 = RegExp('^' + whitespace$2 + whitespace$2 + '*');
var rtrim$2 = RegExp(whitespace$2 + whitespace$2 + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$b = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible$j($this));
    if (TYPE & 1) string = string.replace(ltrim$2, '');
    if (TYPE & 2) string = string.replace(rtrim$2, '');
    return string;
  };
};

var stringTrim$2 = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$b(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$b(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$b(3)
};

var global$Q = global$14;
var trim$2 = stringTrim$2.trim;
var whitespaces$7 = whitespaces$9;

var $parseInt$2 = global$Q.parseInt;
var hex$2 = /^[+-]?0[Xx]/;
var FORCED$e = $parseInt$2(whitespaces$7 + '08') !== 8 || $parseInt$2(whitespaces$7 + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt$2 = FORCED$e ? function parseInt(string, radix) {
  var S = trim$2(String(string));
  return $parseInt$2(S, (radix >>> 0) || (hex$2.test(S) ? 16 : 10));
} : $parseInt$2;

var $$18 = _export$3;
var parseIntImplementation$2 = numberParseInt$2;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$18({ global: true, forced: parseInt != parseIntImplementation$2 }, {
  parseInt: parseIntImplementation$2
});

var redefine$l = redefine$r.exports;

var DatePrototype$1 = Date.prototype;
var INVALID_DATE$1 = 'Invalid Date';
var TO_STRING$4 = 'toString';
var nativeDateToString$1 = DatePrototype$1[TO_STRING$4];
var getTime$1 = DatePrototype$1.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE$1) {
  redefine$l(DatePrototype$1, TO_STRING$4, function toString() {
    var value = getTime$1.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString$1.call(this) : INVALID_DATE$1;
  });
}

var anObject$B = anObject$M;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$5 = function () {
  var that = anObject$B(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var redefine$k = redefine$r.exports;
var anObject$A = anObject$M;
var fails$W = fails$19;
var flags$2 = regexpFlags$5;

var TO_STRING$3 = 'toString';
var RegExpPrototype$6 = RegExp.prototype;
var nativeToString$2 = RegExpPrototype$6[TO_STRING$3];

var NOT_GENERIC$2 = fails$W(function () { return nativeToString$2.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME$2 = nativeToString$2.name != TO_STRING$3;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC$2 || INCORRECT_NAME$2) {
  redefine$k(RegExp.prototype, TO_STRING$3, function toString() {
    var R = anObject$A(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$6) ? flags$2.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

var libraries = {
  GLIDE: 'glide',
  SPLIDE: 'splide'
};
var linkTypes = {
  NONE: 'none',
  THUMBS: 'thumbs'
};
var types = {
  GLIDE_SLIDER: 'slider',
  GLIDE_CAROUSEL: 'carousel',
  SPLIDE_SLIDER: 'slide',
  SPLIDE_CAROUSEL: 'loop',
  // SPLIDE_FADE: 'fade',
  DEFAULT: ''
};
var options = {
  animationDuration: {
    "default": 800,
    attribute: 'ghwpSliderAnimationDuration',
    type: 'number'
  },
  arrows: {
    "default": true,
    attribute: 'ghwpSliderArrows',
    type: 'boolean'
  },
  autoplay: {
    "default": false,
    attribute: 'ghwpSliderAutoplay',
    type: 'boolean'
  },
  autoplayMedium: {
    "default": false,
    attribute: 'ghwpSliderAutoplayMedium',
    type: 'boolean'
  },
  autoplaySmall: {
    "default": false,
    attribute: 'ghwpSliderAutoplaySmall',
    type: 'boolean'
  },
  autoplaySpeed: {
    "default": 2000,
    attribute: 'ghwpSliderSpeed',
    type: 'number'
  },
  autoWidth: {
    // @TODO add splide only
    "default": false,
    attribute: 'ghwpSliderAutowidth',
    type: 'boolean'
  },
  breakpointMedium: {
    "default": 992,
    attribute: 'ghwpSliderBreakpointMedium',
    type: 'number'
  },
  breakpointSmall: {
    "default": 576,
    attribute: 'ghwpSliderBreakpointSmall',
    type: 'number'
  },
  centerMode: {
    "default": false,
    attribute: 'ghwpSliderCenter',
    type: 'boolean'
  },
  centerModeMedium: {
    "default": false,
    attribute: 'ghwpSliderCenterMedium',
    type: 'boolean'
  },
  centerModeSmall: {
    "default": false,
    attribute: 'ghwpSliderCenterSmall',
    type: 'boolean'
  },
  dots: {
    "default": false,
    attribute: 'ghwpSliderDots',
    type: 'boolean'
  },
  dotsMedium: {
    "default": true,
    attribute: 'ghwpSliderDotsMedium',
    type: 'boolean'
  },
  dotsSmall: {
    "default": false,
    attribute: 'ghwpSliderDotsSmall',
    type: 'boolean'
  },
  edgePadding: {
    "default": 0,
    attribute: 'ghwpSliderEdges',
    type: 'number'
  },
  edgePaddingMedium: {
    "default": 0,
    attribute: 'ghwpSliderEdgesMedium',
    type: 'number'
  },
  edgePaddingSmall: {
    "default": 50,
    attribute: 'ghwpSliderEdgesSmall',
    type: 'number'
  },
  freezable: {
    "default": true,
    attribute: 'ghwpSliderFreezable',
    type: 'boolean'
  },
  gap: {
    "default": 0,
    attribute: 'ghwpSliderGap',
    type: 'number'
  },
  gapMedium: {
    "default": 0,
    attribute: 'ghwpSliderGapMedium',
    type: 'number'
  },
  gapSmall: {
    "default": 0,
    attribute: 'ghwpSliderGapSmall',
    type: 'number'
  },
  infiniteLoop: {
    "default": false,
    attribute: 'ghwpSliderInfinite',
    type: 'boolean'
  },
  infiniteLoopMedium: {
    "default": false,
    attribute: 'ghwpSliderInfiniteMedium',
    type: 'boolean'
  },
  infiniteLoopSmall: {
    "default": false,
    attribute: 'ghwpSliderInfiniteSmall',
    type: 'boolean'
  },
  initialSlide: {
    "default": 0,
    attribute: 'ghwpSliderInitial',
    type: 'number'
  },
  lib: {
    "default": libraries.GLIDE,
    attribute: 'ghwpSliderLib',
    type: 'string'
  },
  linkingType: {
    "default": linkTypes.NONE,
    attribute: 'ghwpSliderLinkType',
    type: 'string'
  },
  mouseDrag: {
    "default": true,
    attribute: 'ghwpSliderMouseDrag',
    type: 'boolean'
  },
  pauseOnHover: {
    "default": true,
    attribute: 'ghwpSliderPauseOnHover',
    type: 'boolean'
  },
  pauseOnDotsHover: {
    "default": true,
    attribute: 'ghwpSliderPauseOnDotsHover',
    type: 'boolean'
  },
  secondaryGap: {
    type: 'number',
    "default": 10,
    attribute: 'ghwpSliderGap'
  },
  secondaryGapMedium: {
    type: 'number',
    "default": 10,
    attribute: 'ghwpSliderGapMedium'
  },
  secondaryGapSmall: {
    type: 'number',
    "default": 5,
    attribute: 'ghwpSliderGapSmall'
  },
  secondaryHeight: {
    type: 'number',
    "default": 60,
    attribute: 'ghwpSliderHeight'
  },
  secondaryHeightMedium: {
    type: 'number',
    "default": 60,
    attribute: 'ghwpSliderHeight'
  },
  secondaryHeightSmall: {
    type: 'number',
    "default": 40,
    attribute: 'ghwpSliderHeight'
  },
  secondarySlidesShown: {
    type: 'number',
    "default": 10,
    attributes: 'ghwpSliderCount'
  },
  secondarySlidesShownMedium: {
    type: 'number',
    "default": 6,
    attributes: 'ghwpSliderCountMedium'
  },
  secondarySlidesShownSmall: {
    type: 'number',
    "default": 4,
    attributes: 'ghwpSliderCountSmall'
  },
  secondaryWidth: {
    type: 'number',
    "default": 100,
    attribute: 'ghwpSliderWidth'
  },
  secondaryWidthMedium: {
    type: 'number',
    "default": 100,
    attribute: 'ghwpSliderWidth'
  },
  secondaryWidthSmall: {
    type: 'number',
    "default": 66,
    attribute: 'ghwpSliderWidth'
  },
  slidesShown: {
    "default": 3,
    attribute: 'ghwpSliderCount',
    type: 'number'
  },
  slidesShownMedium: {
    "default": 2,
    attribute: 'ghwpSliderCountMedium',
    type: 'number'
  },
  slidesShownSmall: {
    "default": 1,
    attribute: 'ghwpSliderCountSmall',
    type: 'number'
  },
  slidesToScroll: {
    "default": 3,
    attribute: 'ghwpSliderGroup',
    type: 'number'
  },
  slidesToScrollMedium: {
    "default": 2,
    attribute: 'ghwpSliderGroupMedium',
    type: 'number'
  },
  slidesToScrollSmall: {
    "default": 1,
    attribute: 'ghwpSliderGroupSmall',
    type: 'number'
  },
  trimSpace: {
    "default": true,
    attribute: 'ghwpSliderTrimSpace',
    type: 'boolean'
  },
  sliderType: {
    "default": types.DEFAULT,
    attribute: 'ghwpSliderType',
    type: 'string'
  },
  withWrapper: {
    "default": false,
    attribute: 'ghwpSliderWrap',
    type: 'string'
  }
};

var $$17 = _export$3;
var $filter$2 = arrayIteration$2.filter;
var arrayMethodHasSpeciesSupport$b = arrayMethodHasSpeciesSupport$e;

var HAS_SPECIES_SUPPORT$7 = arrayMethodHasSpeciesSupport$b('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$17({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$7 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$16 = _export$3;
var fails$V = fails$19;
var toIndexedObject$n = toIndexedObject$w;
var nativeGetOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$3.f;
var DESCRIPTORS$B = descriptors$3;

var FAILS_ON_PRIMITIVES$7 = fails$V(function () { nativeGetOwnPropertyDescriptor$4(1); });
var FORCED$d = !DESCRIPTORS$B || FAILS_ON_PRIMITIVES$7;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$16({ target: 'Object', stat: true, forced: FORCED$d, sham: !DESCRIPTORS$B }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$4(toIndexedObject$n(it), key);
  }
});

var $$15 = _export$3;
var DESCRIPTORS$A = descriptors$3;
var ownKeys$8 = ownKeys$b;
var toIndexedObject$m = toIndexedObject$w;
var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor$3;
var createProperty$9 = createProperty$d;

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$15({ target: 'Object', stat: true, sham: !DESCRIPTORS$A }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$m(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;
    var keys = ownKeys$8(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$9(result, key, descriptor);
    }
    return result;
  }
});

var $$14 = _export$3;
var DESCRIPTORS$z = descriptors$3;
var defineProperties$4 = objectDefineProperties$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$$14({ target: 'Object', stat: true, forced: !DESCRIPTORS$z, sham: !DESCRIPTORS$z }, {
  defineProperties: defineProperties$4
});

var $$13 = _export$3;
var DESCRIPTORS$y = descriptors$3;
var objectDefinePropertyModile$2 = objectDefineProperty$3;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$$13({ target: 'Object', stat: true, forced: !DESCRIPTORS$y, sham: !DESCRIPTORS$y }, {
  defineProperty: objectDefinePropertyModile$2.f
});

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear$1;
ListCache$1.prototype['delete'] = listCacheDelete$1;
ListCache$1.prototype.get = listCacheGet$1;
ListCache$1.prototype.has = listCacheHas$1;
ListCache$1.prototype.set = listCacheSet$1;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$1;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

/** `Object#toString` result references. */
var asyncTag$1 = '[object AsyncFunction]',
    funcTag$3 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag$1 = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$A(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$1(value);
  return tag == funcTag$3 || tag == genTag$1 || tag == asyncTag$1 || tag == proxyTag$1;
}

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey$1 = (function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey$1 && (maskSrcKey$1 in func);
}

/** Used for built-in method references. */
var funcProto$4 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$4 = funcProto$4.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$3 = Function.prototype,
    objectProto$m = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$3 = funcProto$3.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$k = objectProto$m.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative$1 = RegExp('^' +
  funcToString$3.call(hasOwnProperty$k).replace(reRegExpChar$1, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$A(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$1(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative$1(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$1(root$1, 'Map');

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative$1(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$5 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$l = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$j = objectProto$l.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? undefined : result;
  }
  return hasOwnProperty$j.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$k = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$i = objectProto$k.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$i.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$4 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$4 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear$1;
Hash$1.prototype['delete'] = hashDelete$1;
Hash$1.prototype.get = hashGet$1;
Hash$1.prototype.has = hashHas$1;
Hash$1.prototype.set = hashSet$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash$1,
    'map': new (Map$1 || ListCache$1),
    'string': new Hash$1
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable$1(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$1(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$1(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData$1(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear$1;
MapCache$1.prototype['delete'] = mapCacheDelete$1;
MapCache$1.prototype.get = mapCacheGet$1;
MapCache$1.prototype.has = mapCacheHas$1;
MapCache$1.prototype.set = mapCacheSet$1;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$2 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$2 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear$1;
Stack$1.prototype['delete'] = stackDelete$1;
Stack$1.prototype.get = stackGet$1;
Stack$1.prototype.has = stackHas$1;
Stack$1.prototype.set = stackSet$1;

var defineProperty$e = (function() {
  try {
    var func = getNative$1(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$1(object, key, value) {
  if (key == '__proto__' && defineProperty$e) {
    defineProperty$e(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq$1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/** Detect free variable `exports`. */
var freeExports$4 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$4 = freeExports$4 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$4 = freeModule$4 && freeModule$4.exports === freeExports$4;

/** Built-in value references. */
var Buffer$2 = moduleExports$4 ? root$1.Buffer : undefined,
    allocUnsafe = Buffer$2 ? Buffer$2.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/** Built-in value references. */
var Uint8Array$1 = root$1.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Built-in value references. */
var objectCreate$2 = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$A(proto)) {
      return {};
    }
    if (objectCreate$2) {
      return objectCreate$2(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype$1 = overArg$1(Object.getPrototypeOf, Object);

/** Used for built-in method references. */
var objectProto$j = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$j;

  return value === proto;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype$1(object))
    ? baseCreate(getPrototype$1(object))
    : {};
}

/** `Object#toString` result references. */
var argsTag$4 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$1(value) && baseGetTag$1(value) == argsTag$4;
}

/** Used for built-in method references. */
var objectProto$i = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$h = objectProto$i.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$4 = objectProto$i.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments$1(function() { return arguments; }()) ? baseIsArguments$1 : function(value) {
  return isObjectLike$1(value) && hasOwnProperty$h.call(value, 'callee') &&
    !propertyIsEnumerable$4.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$c = Array.isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$6 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$6;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$1(value) && isArrayLike$1(value);
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse$1() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$3 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$3 = freeExports$3 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$3 = freeModule$3 && freeModule$3.exports === freeExports$3;

/** Built-in value references. */
var Buffer$1 = moduleExports$3 ? root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer$1 = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer$1 = nativeIsBuffer$1 || stubFalse$1;

/** `Object#toString` result references. */
var objectTag$4 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$h = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$g = objectProto$h.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag$4) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$g.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$1] = typedArrayTags$1[float64Tag$1] =
typedArrayTags$1[int8Tag$1] = typedArrayTags$1[int16Tag$1] =
typedArrayTags$1[int32Tag$1] = typedArrayTags$1[uint8Tag$1] =
typedArrayTags$1[uint8ClampedTag$1] = typedArrayTags$1[uint16Tag$1] =
typedArrayTags$1[uint32Tag$1] = true;
typedArrayTags$1[argsTag$3] = typedArrayTags$1[arrayTag$2] =
typedArrayTags$1[arrayBufferTag$2] = typedArrayTags$1[boolTag$2] =
typedArrayTags$1[dataViewTag$3] = typedArrayTags$1[dateTag$2] =
typedArrayTags$1[errorTag$2] = typedArrayTags$1[funcTag$2] =
typedArrayTags$1[mapTag$3] = typedArrayTags$1[numberTag$2] =
typedArrayTags$1[objectTag$3] = typedArrayTags$1[regexpTag$3] =
typedArrayTags$1[setTag$3] = typedArrayTags$1[stringTag$2] =
typedArrayTags$1[weakMapTag$2] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength$1(value.length) && !!typedArrayTags$1[baseGetTag$1(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Detect free variable `process` from Node.js. */
var freeProcess$1 = moduleExports$2 && freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil$1 = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$2 && freeModule$2.require && freeModule$2.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess$1 && freeProcess$1.binding && freeProcess$1.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray$1 = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray$1 ? baseUnary$1(nodeIsTypedArray$1) : baseIsTypedArray$1;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$f = objectProto$g.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$f.call(object, key) && eq$1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$5 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$5 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint$1.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$e = objectProto$f.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$c(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes$1(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$e.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$1(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$e.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$A(object)) {
    return nativeKeysIn$1(object);
  }
  var isProto = isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$d.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object, true) : baseKeysIn$1(object);
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn$1(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray$c(srcValue),
        isBuff = !isArr && isBuffer$1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$c(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject$A(objValue) || isFunction$1(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1);
    if (isObject$A(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$1);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$1(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty$e ? identity$1 : function(func, string) {
  return defineProperty$e(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant$1(string),
    'writable': true
  });
};

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT$1 = 800,
    HOT_SPAN$1 = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow$1 = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow$1(),
        remaining = HOT_SPAN$1 - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT$1) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut$1(baseSetToString$1);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString$1(overRest$1(func, start, identity$1), func + '');
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject$A(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$1(object) && isIndex$1(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq$1(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

var splide_esm = {exports: {}};

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */

(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__webpack_require__.r(states_namespaceObject);
__webpack_require__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(311);
/******/ })()
;
});
}(splide_esm));

var $$12 = _export$3;
var $map$2 = arrayIteration$2.map;
var arrayMethodHasSpeciesSupport$a = arrayMethodHasSpeciesSupport$e;

var HAS_SPECIES_SUPPORT$6 = arrayMethodHasSpeciesSupport$a('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$12({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$6 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$11 = _export$3;
var $includes = arrayIncludes$4.includes;
var addToUnscopables$7 = addToUnscopables$9;

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$11({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$7('includes');

var isObject$z = isObject$O;
var classof$g = classofRaw$6;
var wellKnownSymbol$I = wellKnownSymbol$Z;

var MATCH$5 = wellKnownSymbol$I('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp$2 = function (it) {
  var isRegExp;
  return isObject$z(it) && ((isRegExp = it[MATCH$5]) !== undefined ? !!isRegExp : classof$g(it) == 'RegExp');
};

var isRegExp$4 = isRegexp$2;

var notARegexp = function (it) {
  if (isRegExp$4(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$H = wellKnownSymbol$Z;

var MATCH$4 = wellKnownSymbol$H('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH$4] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$10 = _export$3;
var notARegExp = notARegexp;
var requireObjectCoercible$i = requireObjectCoercible$o;
var correctIsRegExpLogic = correctIsRegexpLogic;

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$10({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible$i(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var presets = {
  // defaults: {
  //     prettyName: 'Restore Defaults',
  //     animationDuration: 800,
  //     arrows: true,
  //     autoplay: false,
  //     autoplayMedium: false,
  //     autoplaySmall: false,
  //     autoplaySpeed: 2000,
  //     autoWidth: false,
  //     breakpointMedium: 992,
  //     breakpointSmall: 576,
  //     centerMode: false,
  //     centerModeMedium: false,
  //     centerModeSmall: false,
  //     dots: false,
  //     dotsMedium: true,
  //     dotsSmall: false,
  //     edgePadding: 0,
  //     edgePaddingMedium: 0,
  //     edgePaddingSmall: 50,
  //     freezable: true,
  //     gap: 0,
  //     gapMedium: 0,
  //     gapSmall: 0,
  //     infiniteLoop: false,
  //     infiniteLoopMedium: false,
  //     infiniteLoopSmall: false,
  //     initialSlide: 0,
  //     lib: libraries.GLIDE,
  //     linkingType: linkTypes.NONE,
  //     mouseDrag: true,
  //     pauseOnHover: true,
  //     pauseOnDotsHover: true,
  //     secondaryGap: 10,
  //     secondaryGapMedium: 10,
  //     secondaryGapSmall: 5,
  //     secondaryHeight: 60,
  //     secondaryHeightMedium: 60,
  //     secondaryHeightSmall: 40,
  //     secondarySlidesShown: 10,
  //     secondarySlidesShownMedium: 6,
  //     secondarySlidesShownSmall: 4,
  //     secondaryWidth: 100,
  //     secondaryWidthMedium: 100,
  //     secondaryWidthSmall: 66,
  //     slidesShown: 3,
  //     slidesShownMedium: 2,
  //     slidesShownSmall: 1,
  //     slidesToScroll: 3,
  //     slidesToScrollMedium: 2,
  //     slidesToScrollSmall: 1,
  //     trimSpace: true,
  //     sliderType: types.DEFAULT,
  //     withWrapper: false,
  // },
  posts: {
    prettyName: 'Content Widgets',
    arrows: false,
    centerModeSmall: true,
    edgePaddingSmall: 50,
    edgePaddingMedium: 50,
    infiniteLoopSmall: true,
    infiniteLoopMedium: true,
    slidesToScroll: 3,
    slidesToScrollMedium: 1,
    slidesToScrollSmall: 1
  },
  imageCarousel: {
    prettyName: 'Simple Image Carousel',
    arrows: true,
    autoplay: true,
    autoplayMedium: true,
    autoplaySmall: true,
    autoplaySpeed: 2600,
    centerMode: true,
    centerModeMedium: true,
    centerModeSmall: true,
    dots: true,
    dotsMedium: true,
    dotsSmall: true,
    edgePadding: 100,
    edgePaddingMedium: 80,
    edgePaddingSmall: 50,
    infiniteLoop: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToScrollMedium: 1,
    slidesToScrollSmall: 1,

    /* new */
    animationDuration: 800,
    autoWidth: false,
    breakpointMedium: 992,
    breakpointSmall: 576,
    freezable: true,
    gap: 0,
    gapMedium: 0,
    gapSmall: 0,
    infiniteLoopMedium: true,
    infiniteLoopSmall: true,
    lib: libraries.GLIDE,
    linkingType: linkTypes.NONE,
    mouseDrag: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    secondaryGap: 10,
    secondaryGapMedium: 10,
    secondaryGapSmall: 5,
    secondaryHeight: 60,
    secondaryHeightMedium: 60,
    secondaryHeightSmall: 40,
    secondarySlidesShown: 10,
    secondarySlidesShownMedium: 6,
    secondarySlidesShownSmall: 4,
    secondaryWidth: 100,
    secondaryWidthMedium: 100,
    secondaryWidthSmall: 66,
    slidesShown: 5,
    slidesShownMedium: 3,
    slidesShownSmall: 1,
    sliderType: types.DEFAULT,
    trimSpace: true,
    withWrapper: false
  },
  imageGalleryWithPreviews: {
    prettyName: 'Image Gallery with Thumbnail-Previews / Navigation-Slider',
    animationDuration: 800,
    arrows: true,
    autoplay: false,
    autoplayMedium: false,
    autoplaySmall: false,
    autoplaySpeed: 2000,
    autoWidth: false,
    breakpointMedium: 992,
    breakpointSmall: 576,
    centerMode: false,
    centerModeMedium: false,
    centerModeSmall: false,
    dots: false,
    dotsMedium: false,
    dotsSmall: false,
    edgePadding: 0,
    edgePaddingMedium: 0,
    edgePaddingSmall: 0,
    freezable: true,
    gap: 0,
    gapMedium: 0,
    gapSmall: 0,
    infiniteLoop: false,
    infiniteLoopMedium: false,
    infiniteLoopSmall: false,
    initialSlide: 0,
    lib: libraries.SPLIDE,
    linkingType: linkTypes.THUMBS,
    mouseDrag: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    secondaryGap: 10,
    secondaryGapMedium: 10,
    secondaryGapSmall: 5,
    secondaryHeight: 60,
    secondaryHeightMedium: 60,
    secondaryHeightSmall: 40,
    secondarySlidesShown: 10,
    secondarySlidesShownMedium: 6,
    secondarySlidesShownSmall: 4,
    secondaryWidth: 100,
    secondaryWidthMedium: 100,
    secondaryWidthSmall: 66,
    slidesShown: 1,
    slidesShownMedium: 1,
    slidesShownSmall: 1,
    slidesToScroll: 1,
    slidesToScrollMedium: 1,
    slidesToScrollSmall: 1,
    sliderType: types.SPLIDE_SLIDER,
    trimSpace: true,
    withWrapper: false
  }
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DEFAULT_PRESETS = {};

var PresetManager = /*#__PURE__*/function () {
  function PresetManager() {
    _classCallCheck$1(this, PresetManager);

    this.presets = null;

    this._loadDefaults();
  }

  _createClass$1(PresetManager, [{
    key: "addPreset",
    value: function addPreset(id, preset) {
      this.presets[id] = preset;
    }
  }, {
    key: "getAvailablePresetNames",
    value: function getAvailablePresetNames() {
      var _this = this;

      return Object.keys(this.presets).map(function (id) {
        var _this$presets$id$pret, _this$presets$id;

        return {
          id: id,
          label: (_this$presets$id$pret = (_this$presets$id = _this.presets[id]) === null || _this$presets$id === void 0 ? void 0 : _this$presets$id.prettyName) !== null && _this$presets$id$pret !== void 0 ? _this$presets$id$pret : id
        };
      });
    }
  }, {
    key: "getPreset",
    value: function getPreset(id) {
      if (!Object.keys(this.presets).includes(id)) return {};
      var overrides = this.presets[id];
      return merge({}, this.presets.defaults, overrides);
    }
  }, {
    key: "putPreset",
    value: function putPreset(id, preset) {
      var originalPreset = this.presets[id];
      this.presets[id] = merge(originalPreset, preset);
    }
  }, {
    key: "putPresets",
    value: function putPresets(presets) {
      var _this2 = this;

      Object.keys(presets).forEach(function (id) {
        _this2.putPreset(id, presets[id]);
      });
    }
  }, {
    key: "_getDefaultPreset",
    value: function _getDefaultPreset() {
      var defaultPreset = {};
      Object.keys(options).forEach(function (key) {
        defaultPreset[key] = options[key]["default"] || false;
      });
      defaultPreset['prettyName'] = 'Restore Defaults';
      return defaultPreset;
    }
  }, {
    key: "_loadDefaults",
    value: function _loadDefaults() {
      this.presets = _objectSpread$2(_objectSpread$2({
        defaults: this._getDefaultPreset()
      }, DEFAULT_PRESETS), presets);
    }
  }]);

  return PresetManager;
}();

var presetManager = new PresetManager();

var attributes = {
  /* "Internal" attributes for editing only */
  currentlyEditedChildIndex: {
    type: 'number',
    "default": 0
  },
  children: {
    type: 'array',
    "default": []
  },
  type: {
    type: 'string'
  },

  /* "Display" attributes */
  slidesShown: {
    type: 'number',
    "default": options.slidesShown["default"]
  },
  slidesShownMedium: {
    type: 'number',
    "default": options.slidesShownMedium["default"]
  },
  slidesShownSmall: {
    type: 'number',
    "default": options.slidesShownSmall["default"]
  },
  slidesToScroll: {
    type: 'number',
    "default": options.slidesToScroll["default"]
  },
  slidesToScrollMedium: {
    type: 'number',
    "default": options.slidesToScrollMedium["default"]
  },
  slidesToScrollSmall: {
    type: 'number',
    "default": options.slidesToScrollSmall["default"]
  },
  useAutoplay: {
    type: 'boolean',
    "default": options.autoplay["default"]
  },
  useAutoplayMedium: {
    type: 'boolean',
    "default": options.autoplayMedium["default"]
  },
  useAutoplaySmall: {
    type: 'boolean',
    "default": options.autoplaySmall["default"]
  },
  infiniteLoop: {
    type: 'boolean',
    "default": options.infiniteLoop["default"]
  },
  infiniteLoopMedium: {
    type: 'boolean',
    "default": options.infiniteLoopMedium["default"]
  },
  infiniteLoopSmall: {
    type: 'boolean',
    "default": options.infiniteLoopSmall["default"]
  },
  centerMode: {
    type: 'boolean',
    "default": options.centerMode["default"]
  },
  centerModeMedium: {
    type: 'boolean',
    "default": options.centerModeMedium["default"]
  },
  centerModeSmall: {
    type: 'boolean',
    "default": options.centerModeSmall["default"]
  },
  edgePadding: {
    type: 'number',
    "default": options.edgePadding["default"]
  },
  edgePaddingMedium: {
    type: 'number',
    "default": options.edgePaddingMedium["default"]
  },
  edgePaddingSmall: {
    type: 'number',
    "default": options.edgePaddingSmall["default"]
  },
  autoplaySpeed: {
    type: 'number',
    "default": options.autoplaySpeed["default"]
  },
  breakpointMedium: {
    type: 'number',
    "default": options.breakpointMedium["default"]
  },
  breakpointSmall: {
    type: 'number',
    "default": options.breakpointSmall["default"]
  },
  initialSlide: {
    type: 'number',
    "default": options.initialSlide["default"]
  },
  dots: {
    type: 'boolean',
    "default": options.dots["default"]
  },
  dotsMedium: {
    type: 'boolean',
    "default": options.dotsMedium["default"]
  },
  dotsSmall: {
    type: 'boolean',
    "default": options.dotsSmall["default"]
  },
  sliderLibrary: {
    type: 'string',
    "default": options.lib["default"]
  },
  linkingType: {
    type: 'string',
    "default": options.linkingType["default"]
  },
  sliderType: {
    type: 'string',
    "default": options.sliderType["default"]
  },
  secondaryGap: {
    type: 'string',
    "default": options.secondaryGap["default"]
  },
  secondaryGapMedium: {
    type: 'string',
    "default": options.secondaryGapMedium["default"]
  },
  secondaryGapSmall: {
    type: 'string',
    "default": options.secondaryGapSmall["default"]
  },
  secondaryHeight: {
    type: 'string',
    "default": options.secondaryHeight["default"]
  },
  secondaryHeightMedium: {
    type: 'string',
    "default": options.secondaryHeightMedium["default"]
  },
  secondaryHeightSmall: {
    type: 'string',
    "default": options.secondaryHeightSmall["default"],
    attribute: 'ghwpSliderHeight'
  },
  secondarySlidesShown: {
    type: 'string',
    "default": options.secondarySlidesShown["default"]
  },
  secondarySlidesShownMedium: {
    type: 'string',
    "default": options.secondarySlidesShownMedium["default"]
  },
  secondarySlidesShownSmall: {
    type: 'string',
    "default": options.secondarySlidesShownSmall["default"]
  },
  secondaryWidth: {
    type: 'string',
    "default": options.secondaryWidth["default"]
  },
  secondaryWidthMedium: {
    type: 'string',
    "default": options.secondaryWidthMedium["default"]
  },
  secondaryWidthSmall: {
    type: 'string',
    "default": options.secondaryWidthSmall["default"]
  }
};

var $$$ = _export$3;
var fails$U = fails$19;
var isArray$b = isArray$j;
var isObject$y = isObject$O;
var toObject$k = toObject$t;
var toLength$m = toLength$s;
var createProperty$8 = createProperty$d;
var arraySpeciesCreate$6 = arraySpeciesCreate$9;
var arrayMethodHasSpeciesSupport$9 = arrayMethodHasSpeciesSupport$e;
var wellKnownSymbol$G = wellKnownSymbol$Z;
var V8_VERSION$7 = engineV8Version$3;

var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$G('isConcatSpreadable');
var MAX_SAFE_INTEGER$4 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED$1 = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT$1 = V8_VERSION$7 >= 51 || !fails$U(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE$1] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$9('concat');

var isConcatSpreadable$1 = function (O) {
  if (!isObject$y(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE$1];
  return spreadable !== undefined ? !!spreadable : isArray$b(O);
};

var FORCED$c = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$$({ target: 'Array', proto: true, forced: FORCED$c }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$k(this);
    var A = arraySpeciesCreate$6(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable$1(E)) {
        len = toLength$m(E.length);
        if (n + len > MAX_SAFE_INTEGER$4) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$8(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$4) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
        createProperty$8(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var classnames$4 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames$4));

var classnames$3 = classnames$4.exports;

var check$1 = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$P =
  // eslint-disable-next-line es/no-global-this -- safe
  check$1(typeof globalThis == 'object' && globalThis) ||
  check$1(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check$1(typeof self == 'object' && self) ||
  check$1(typeof commonjsGlobal$2 == 'object' && commonjsGlobal$2) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor$1 = {};

var fails$T = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$S = fails$T;

// Detect IE8's incomplete defineProperty implementation
var descriptors$1 = !fails$S(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable$1 = {};

var $propertyIsEnumerable$3 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG$1 = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$3.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$5(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$3;

var createPropertyDescriptor$a = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$6 = {}.toString;

var classofRaw$3 = function (it) {
  return toString$6.call(it).slice(8, -1);
};

var fails$R = fails$T;
var classof$f = classofRaw$3;

var split$1 = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject$1 = fails$R(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$f(it) == 'String' ? split$1.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$h = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$7 = indexedObject$1;
var requireObjectCoercible$g = requireObjectCoercible$h;

var toIndexedObject$l = function (it) {
  return IndexedObject$7(requireObjectCoercible$g(it));
};

var isObject$x = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$w = isObject$x;

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$9 = function (input, PREFERRED_STRING) {
  if (!isObject$w(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$w(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$w(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$w(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var requireObjectCoercible$f = requireObjectCoercible$h;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$j = function (argument) {
  return Object(requireObjectCoercible$f(argument));
};

var toObject$i = toObject$j;

var hasOwnProperty$c = {}.hasOwnProperty;

var has$p = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$c.call(toObject$i(it), key);
};

var global$O = global$P;
var isObject$v = isObject$x;

var document$6 = global$O.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$v(document$6) && isObject$v(document$6.createElement);

var documentCreateElement$3 = function (it) {
  return EXISTS$1 ? document$6.createElement(it) : {};
};

var DESCRIPTORS$x = descriptors$1;
var fails$Q = fails$T;
var createElement$3 = documentCreateElement$3;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine$1 = !DESCRIPTORS$x && !fails$Q(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement$3('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$w = descriptors$1;
var propertyIsEnumerableModule$5 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$9 = createPropertyDescriptor$a;
var toIndexedObject$k = toIndexedObject$l;
var toPrimitive$8 = toPrimitive$9;
var has$o = has$p;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$w ? $getOwnPropertyDescriptor$3 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$k(O);
  P = toPrimitive$8(P, true);
  if (IE8_DOM_DEFINE$3) try {
    return $getOwnPropertyDescriptor$3(O, P);
  } catch (error) { /* empty */ }
  if (has$o(O, P)) return createPropertyDescriptor$9(!propertyIsEnumerableModule$5.f.call(O, P), O[P]);
};

var objectDefineProperty$1 = {};

var isObject$u = isObject$x;

var anObject$z = function (it) {
  if (!isObject$u(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var DESCRIPTORS$v = descriptors$1;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
var anObject$y = anObject$z;
var toPrimitive$7 = toPrimitive$9;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$3 = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty$1.f = DESCRIPTORS$v ? $defineProperty$3 : function defineProperty(O, P, Attributes) {
  anObject$y(O);
  P = toPrimitive$7(P, true);
  anObject$y(Attributes);
  if (IE8_DOM_DEFINE$2) try {
    return $defineProperty$3(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$u = descriptors$1;
var definePropertyModule$d = objectDefineProperty$1;
var createPropertyDescriptor$8 = createPropertyDescriptor$a;

var createNonEnumerableProperty$l = DESCRIPTORS$u ? function (object, key, value) {
  return definePropertyModule$d.f(object, key, createPropertyDescriptor$8(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$j = {exports: {}};

var global$N = global$P;
var createNonEnumerableProperty$k = createNonEnumerableProperty$l;

var setGlobal$7 = function (key, value) {
  try {
    createNonEnumerableProperty$k(global$N, key, value);
  } catch (error) {
    global$N[key] = value;
  } return value;
};

var global$M = global$P;
var setGlobal$6 = setGlobal$7;

var SHARED$1 = '__core-js_shared__';
var store$7 = global$M[SHARED$1] || setGlobal$6(SHARED$1, {});

var sharedStore$1 = store$7;

var store$6 = sharedStore$1;

var functionToString$1 = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store$6.inspectSource != 'function') {
  store$6.inspectSource = function (it) {
    return functionToString$1.call(it);
  };
}

var inspectSource$7 = store$6.inspectSource;

var global$L = global$P;
var inspectSource$6 = inspectSource$7;

var WeakMap$4 = global$L.WeakMap;

var nativeWeakMap$1 = typeof WeakMap$4 === 'function' && /native code/.test(inspectSource$6(WeakMap$4));

var shared$c = {exports: {}};

var store$5 = sharedStore$1;

(shared$c.exports = function (key, value) {
  return store$5[key] || (store$5[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var id$2 = 0;
var postfix$1 = Math.random();

var uid$8 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$2 + postfix$1).toString(36);
};

var shared$b = shared$c.exports;
var uid$7 = uid$8;

var keys$5 = shared$b('keys');

var sharedKey$8 = function (key) {
  return keys$5[key] || (keys$5[key] = uid$7(key));
};

var hiddenKeys$c = {};

var NATIVE_WEAK_MAP$1 = nativeWeakMap$1;
var global$K = global$P;
var isObject$t = isObject$x;
var createNonEnumerableProperty$j = createNonEnumerableProperty$l;
var objectHas$1 = has$p;
var shared$a = sharedStore$1;
var sharedKey$7 = sharedKey$8;
var hiddenKeys$b = hiddenKeys$c;

var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var WeakMap$3 = global$K.WeakMap;
var set$4, get$3, has$n;

var enforce$1 = function (it) {
  return has$n(it) ? get$3(it) : set$4(it, {});
};

var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$t(it) || (state = get$3(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$a.state) {
  var store$4 = shared$a.state || (shared$a.state = new WeakMap$3());
  var wmget$1 = store$4.get;
  var wmhas$1 = store$4.has;
  var wmset$1 = store$4.set;
  set$4 = function (it, metadata) {
    if (wmhas$1.call(store$4, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    wmset$1.call(store$4, it, metadata);
    return metadata;
  };
  get$3 = function (it) {
    return wmget$1.call(store$4, it) || {};
  };
  has$n = function (it) {
    return wmhas$1.call(store$4, it);
  };
} else {
  var STATE$1 = sharedKey$7('state');
  hiddenKeys$b[STATE$1] = true;
  set$4 = function (it, metadata) {
    if (objectHas$1(it, STATE$1)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$j(it, STATE$1, metadata);
    return metadata;
  };
  get$3 = function (it) {
    return objectHas$1(it, STATE$1) ? it[STATE$1] : {};
  };
  has$n = function (it) {
    return objectHas$1(it, STATE$1);
  };
}

var internalState$1 = {
  set: set$4,
  get: get$3,
  has: has$n,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var global$J = global$P;
var createNonEnumerableProperty$i = createNonEnumerableProperty$l;
var has$m = has$p;
var setGlobal$5 = setGlobal$7;
var inspectSource$5 = inspectSource$7;
var InternalStateModule$8 = internalState$1;

var getInternalState$b = InternalStateModule$8.get;
var enforceInternalState$3 = InternalStateModule$8.enforce;
var TEMPLATE$1 = String(String).split('String');

(redefine$j.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$m(value, 'name')) {
      createNonEnumerableProperty$i(value, 'name', key);
    }
    state = enforceInternalState$3(value);
    if (!state.source) {
      state.source = TEMPLATE$1.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$J) {
    if (simple) O[key] = value;
    else setGlobal$5(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$i(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState$b(this).source || inspectSource$5(this);
});

var global$I = global$P;

var path$5 = global$I;

var path$4 = path$5;
var global$H = global$P;

var aFunction$g = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn$f = function (namespace, method) {
  return arguments.length < 2 ? aFunction$g(path$4[namespace]) || aFunction$g(global$H[namespace])
    : path$4[namespace] && path$4[namespace][method] || global$H[namespace] && global$H[namespace][method];
};

var objectGetOwnPropertyNames$1 = {};

var ceil$1 = Math.ceil;
var floor$3 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$d = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$3 : ceil$1)(argument);
};

var toInteger$c = toInteger$d;

var min$7 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$l = function (argument) {
  return argument > 0 ? min$7(toInteger$c(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger$b = toInteger$d;

var max$4 = Math.max;
var min$6 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$7 = function (index, length) {
  var integer = toInteger$b(index);
  return integer < 0 ? max$4(integer + length, 0) : min$6(integer, length);
};

var toIndexedObject$j = toIndexedObject$l;
var toLength$k = toLength$l;
var toAbsoluteIndex$6 = toAbsoluteIndex$7;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$a = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$j($this);
    var length = toLength$k(O.length);
    var index = toAbsoluteIndex$6(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes$2 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$a(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$a(false)
};

var has$l = has$p;
var toIndexedObject$i = toIndexedObject$l;
var indexOf$1 = arrayIncludes$2.indexOf;
var hiddenKeys$a = hiddenKeys$c;

var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$i(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$l(hiddenKeys$a, key) && has$l(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$l(O, key = names[i++])) {
    ~indexOf$1(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$7 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$3 = objectKeysInternal$1;
var enumBugKeys$6 = enumBugKeys$7;

var hiddenKeys$9 = enumBugKeys$6.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$3(O, hiddenKeys$9);
};

var objectGetOwnPropertySymbols$1 = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

var getBuiltIn$e = getBuiltIn$f;
var getOwnPropertyNamesModule$3 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$5 = objectGetOwnPropertySymbols$1;
var anObject$x = anObject$z;

// all object keys, includes non-enumerable and symbols
var ownKeys$6 = getBuiltIn$e('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$3.f(anObject$x(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$5.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$k = has$p;
var ownKeys$5 = ownKeys$6;
var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$c = objectDefineProperty$1;

var copyConstructorProperties$4 = function (target, source) {
  var keys = ownKeys$5(source);
  var defineProperty = definePropertyModule$c.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$5.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$k(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$P = fails$T;

var replacement$1 = /#|\.prototype\./;

var isForced$7 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value == POLYFILL$1 ? true
    : value == NATIVE$1 ? false
    : typeof detection == 'function' ? fails$P(detection)
    : !!detection;
};

var normalize$1 = isForced$7.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};

var data$1 = isForced$7.data = {};
var NATIVE$1 = isForced$7.NATIVE = 'N';
var POLYFILL$1 = isForced$7.POLYFILL = 'P';

var isForced_1$1 = isForced$7;

var global$G = global$P;
var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;
var createNonEnumerableProperty$h = createNonEnumerableProperty$l;
var redefine$i = redefine$j.exports;
var setGlobal$4 = setGlobal$7;
var copyConstructorProperties$3 = copyConstructorProperties$4;
var isForced$6 = isForced_1$1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$G;
  } else if (STATIC) {
    target = global$G[TARGET] || setGlobal$4(TARGET, {});
  } else {
    target = (global$G[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$4(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$6(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties$3(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$h(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$i(target, key, sourceProperty, options);
  }
};

var classof$e = classofRaw$3;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$a = Array.isArray || function isArray(arg) {
  return classof$e(arg) == 'Array';
};

var $$_ = _export$1;
var isArray$9 = isArray$a;

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$$_({ target: 'Array', stat: true }, {
  isArray: isArray$9
});

var redefine$h = redefine$j.exports;

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING$2 = 'toString';
var nativeDateToString = DatePrototype[TO_STRING$2];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine$h(DatePrototype, TO_STRING$2, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

var getBuiltIn$d = getBuiltIn$f;

var engineUserAgent$1 = getBuiltIn$d('navigator', 'userAgent') || '';

var global$F = global$P;
var userAgent$8 = engineUserAgent$1;

var process$8 = global$F.process;
var versions$1 = process$8 && process$8.versions;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$1;

if (v8$1) {
  match$1 = v8$1.split('.');
  version$1 = match$1[0] < 4 ? 1 : match$1[0] + match$1[1];
} else if (userAgent$8) {
  match$1 = userAgent$8.match(/Edge\/(\d+)/);
  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$8.match(/Chrome\/(\d+)/);
    if (match$1) version$1 = match$1[1];
  }
}

var engineV8Version$1 = version$1 && +version$1;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$6 = engineV8Version$1;
var fails$O = fails$T;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$O(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$6 && V8_VERSION$6 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$5 = nativeSymbol$1;

var useSymbolAsUid$1 = NATIVE_SYMBOL$5
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$E = global$P;
var shared$9 = shared$c.exports;
var has$j = has$p;
var uid$6 = uid$8;
var NATIVE_SYMBOL$4 = nativeSymbol$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;

var WellKnownSymbolsStore$3 = shared$9('wks');
var Symbol$3 = global$E.Symbol;
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$3 ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$6;

var wellKnownSymbol$F = function (name) {
  if (!has$j(WellKnownSymbolsStore$3, name) || !(NATIVE_SYMBOL$4 || typeof WellKnownSymbolsStore$3[name] == 'string')) {
    if (NATIVE_SYMBOL$4 && has$j(Symbol$3, name)) {
      WellKnownSymbolsStore$3[name] = Symbol$3[name];
    } else {
      WellKnownSymbolsStore$3[name] = createWellKnownSymbol$1('Symbol.' + name);
    }
  } return WellKnownSymbolsStore$3[name];
};

var wellKnownSymbol$E = wellKnownSymbol$F;

var TO_STRING_TAG$6 = wellKnownSymbol$E('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$6] = 'z';

var toStringTagSupport$1 = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT$5 = toStringTagSupport$1;
var classofRaw$2 = classofRaw$3;
var wellKnownSymbol$D = wellKnownSymbol$F;

var TO_STRING_TAG$5 = wellKnownSymbol$D('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS$1 = classofRaw$2(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$d = TO_STRING_TAG_SUPPORT$5 ? classofRaw$2 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet$1(O = Object(it), TO_STRING_TAG$5)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS$1 ? classofRaw$2(O)
    // ES3 arguments fallback
    : (result = classofRaw$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var TO_STRING_TAG_SUPPORT$4 = toStringTagSupport$1;
var classof$c = classof$d;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$2 = TO_STRING_TAG_SUPPORT$4 ? {}.toString : function toString() {
  return '[object ' + classof$c(this) + ']';
};

var TO_STRING_TAG_SUPPORT$3 = toStringTagSupport$1;
var redefine$g = redefine$j.exports;
var toString$5 = objectToString$2;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT$3) {
  redefine$g(Object.prototype, 'toString', toString$5, { unsafe: true });
}

var anObject$w = anObject$z;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$4 = function () {
  var that = anObject$w(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var redefine$f = redefine$j.exports;
var anObject$v = anObject$z;
var fails$N = fails$T;
var flags$1 = regexpFlags$4;

var TO_STRING$1 = 'toString';
var RegExpPrototype$5 = RegExp.prototype;
var nativeToString$1 = RegExpPrototype$5[TO_STRING$1];

var NOT_GENERIC$1 = fails$N(function () { return nativeToString$1.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME$1 = nativeToString$1.name != TO_STRING$1;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC$1 || INCORRECT_NAME$1) {
  redefine$f(RegExp.prototype, TO_STRING$1, function toString() {
    var R = anObject$v(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$5) ? flags$1.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

var fails$M = fails$T;

var arrayMethodIsStrict$7 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$M(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $$Z = _export$1;
var IndexedObject$6 = indexedObject$1;
var toIndexedObject$h = toIndexedObject$l;
var arrayMethodIsStrict$6 = arrayMethodIsStrict$7;

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject$6 != Object;
var STRICT_METHOD$5 = arrayMethodIsStrict$6('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$$Z({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$5 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject$h(this), separator === undefined ? ',' : separator);
  }
});

var fails$L = fails$T;

var freezing = !fails$L(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = {exports: {}};

var hiddenKeys$8 = hiddenKeys$c;
var isObject$s = isObject$x;
var has$i = has$p;
var defineProperty$d = objectDefineProperty$1.f;
var uid$5 = uid$8;
var FREEZING$1 = freezing;

var METADATA = uid$5('meta');
var id$1 = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty$d(it, METADATA, { value: {
    objectID: 'O' + id$1++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject$s(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has$i(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has$i(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze$1 = function (it) {
  if (FREEZING$1 && meta.REQUIRED && isExtensible(it) && !has$i(it, METADATA)) setMetadata(it);
  return it;
};

var meta = internalMetadata.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze$1
};

hiddenKeys$8[METADATA] = true;

var $$Y = _export$1;
var FREEZING = freezing;
var fails$K = fails$T;
var isObject$r = isObject$x;
var onFreeze = internalMetadata.exports.onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES$6 = fails$K(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$$Y({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$6, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject$r(it) ? $freeze(onFreeze(it)) : it;
  }
});

var $$X = _export$1;
var DESCRIPTORS$t = descriptors$1;
var objectDefinePropertyModile$1 = objectDefineProperty$1;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$$X({ target: 'Object', stat: true, forced: !DESCRIPTORS$t, sham: !DESCRIPTORS$t }, {
  defineProperty: objectDefinePropertyModile$1.f
});

var $$W = _export$1;
var fails$J = fails$T;
var toIndexedObject$g = toIndexedObject$l;
var nativeGetOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
var DESCRIPTORS$s = descriptors$1;

var FAILS_ON_PRIMITIVES$5 = fails$J(function () { nativeGetOwnPropertyDescriptor$3(1); });
var FORCED$b = !DESCRIPTORS$s || FAILS_ON_PRIMITIVES$5;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$W({ target: 'Object', stat: true, forced: FORCED$b, sham: !DESCRIPTORS$s }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$3(toIndexedObject$g(it), key);
  }
});

var toPrimitive$6 = toPrimitive$9;
var definePropertyModule$b = objectDefineProperty$1;
var createPropertyDescriptor$7 = createPropertyDescriptor$a;

var createProperty$7 = function (object, key, value) {
  var propertyKey = toPrimitive$6(key);
  if (propertyKey in object) definePropertyModule$b.f(object, propertyKey, createPropertyDescriptor$7(0, value));
  else object[propertyKey] = value;
};

var fails$I = fails$T;
var wellKnownSymbol$C = wellKnownSymbol$F;
var V8_VERSION$5 = engineV8Version$1;

var SPECIES$c = wellKnownSymbol$C('species');

var arrayMethodHasSpeciesSupport$8 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$5 >= 51 || !fails$I(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$c] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$V = _export$1;
var isObject$q = isObject$x;
var isArray$8 = isArray$a;
var toAbsoluteIndex$5 = toAbsoluteIndex$7;
var toLength$j = toLength$l;
var toIndexedObject$f = toIndexedObject$l;
var createProperty$6 = createProperty$7;
var wellKnownSymbol$B = wellKnownSymbol$F;
var arrayMethodHasSpeciesSupport$7 = arrayMethodHasSpeciesSupport$8;

var HAS_SPECIES_SUPPORT$5 = arrayMethodHasSpeciesSupport$7('slice');

var SPECIES$b = wellKnownSymbol$B('species');
var nativeSlice = [].slice;
var max$3 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$V({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$5 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject$f(this);
    var length = toLength$j(O.length);
    var k = toAbsoluteIndex$5(start, length);
    var fin = toAbsoluteIndex$5(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray$8(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray$8(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$q(Constructor)) {
        Constructor = Constructor[SPECIES$b];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$3(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$6(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var regexpStickyHelpers$2 = {};

var fails$H = fails$T;

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE$2 = function (s, f) {
  return RegExp(s, f);
};

regexpStickyHelpers$2.UNSUPPORTED_Y = fails$H(function () {
  var re = RE$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

regexpStickyHelpers$2.BROKEN_CARET = fails$H(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var internalObjectKeys$2 = objectKeysInternal$1;
var enumBugKeys$5 = enumBugKeys$7;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$9 = Object.keys || function keys(O) {
  return internalObjectKeys$2(O, enumBugKeys$5);
};

var DESCRIPTORS$r = descriptors$1;
var definePropertyModule$a = objectDefineProperty$1;
var anObject$u = anObject$z;
var objectKeys$8 = objectKeys$9;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties$1 = DESCRIPTORS$r ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$u(O);
  var keys = objectKeys$8(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$a.f(O, key = keys[index++], Properties[key]);
  return O;
};

var getBuiltIn$c = getBuiltIn$f;

var html$5 = getBuiltIn$c('document', 'documentElement');

var anObject$t = anObject$z;
var defineProperties$3 = objectDefineProperties$1;
var enumBugKeys$4 = enumBugKeys$7;
var hiddenKeys$7 = hiddenKeys$c;
var html$4 = html$5;
var documentCreateElement$2 = documentCreateElement$3;
var sharedKey$6 = sharedKey$8;

var GT$1 = '>';
var LT$1 = '<';
var PROTOTYPE$4 = 'prototype';
var SCRIPT$1 = 'script';
var IE_PROTO$2 = sharedKey$6('IE_PROTO');

var EmptyConstructor$1 = function () { /* empty */ };

var scriptTag$1 = function (content) {
  return LT$1 + SCRIPT$1 + GT$1 + content + LT$1 + '/' + SCRIPT$1 + GT$1;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX$1 = function (activeXDocument) {
  activeXDocument.write(scriptTag$1(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame$1 = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$2('iframe');
  var JS = 'java' + SCRIPT$1 + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$4.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag$1('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument$1;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument$1 = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument$1 ? NullProtoObjectViaActiveX$1(activeXDocument$1) : NullProtoObjectViaIFrame$1();
  var length = enumBugKeys$4.length;
  while (length--) delete NullProtoObject[PROTOTYPE$4][enumBugKeys$4[length]];
  return NullProtoObject();
};

hiddenKeys$7[IE_PROTO$2] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate$1 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor$1[PROTOTYPE$4] = anObject$t(O);
    result = new EmptyConstructor$1();
    EmptyConstructor$1[PROTOTYPE$4] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$2] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties$3(result, Properties);
};

var fails$G = fails$T;

var regexpUnsupportedDotAll$2 = fails$G(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$F = fails$T;

var regexpUnsupportedNcg$2 = fails$F(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags$3 = regexpFlags$4;
var stickyHelpers$5 = regexpStickyHelpers$2;
var shared$8 = shared$c.exports;
var create$8 = objectCreate$1;
var getInternalState$a = internalState$1.get;
var UNSUPPORTED_DOT_ALL$4 = regexpUnsupportedDotAll$2;
var UNSUPPORTED_NCG$4 = regexpUnsupportedNcg$2;

var nativeExec$2 = RegExp.prototype.exec;
var nativeReplace$2 = shared$8('native-string-replace', String.prototype.replace);

var patchedExec$2 = nativeExec$2;

var UPDATES_LAST_INDEX_WRONG$2 = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec$2.call(re1, 'a');
  nativeExec$2.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$5 = stickyHelpers$5.UNSUPPORTED_Y || stickyHelpers$5.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED$2 = /()??/.exec('')[1] !== undefined;

var PATCH$2 = UPDATES_LAST_INDEX_WRONG$2 || NPCG_INCLUDED$2 || UNSUPPORTED_Y$5 || UNSUPPORTED_DOT_ALL$4 || UNSUPPORTED_NCG$4;

if (PATCH$2) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec$2 = function exec(str) {
    var re = this;
    var state = getInternalState$a(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec$2.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$5 && re.sticky;
    var flags = regexpFlags$3.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED$2) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG$2) lastIndex = re.lastIndex;

    match = nativeExec$2.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG$2 && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED$2 && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace$2.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$8(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$7 = patchedExec$2;

var $$U = _export$1;
var exec$2 = regexpExec$7;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$U({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
  exec: exec$2
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var redefine$e = redefine$j.exports;
var regexpExec$6 = regexpExec$7;
var fails$E = fails$T;
var wellKnownSymbol$A = wellKnownSymbol$F;
var createNonEnumerableProperty$g = createNonEnumerableProperty$l;

var SPECIES$a = wellKnownSymbol$A('species');
var RegExpPrototype$4 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic$1 = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$A(KEY);

  var DELEGATES_TO_SYMBOL = !fails$E(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$E(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$a] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$6 || $exec === RegExpPrototype$4.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine$e(String.prototype, KEY, methods[0]);
    redefine$e(RegExpPrototype$4, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$g(RegExpPrototype$4[SYMBOL], 'sham', true);
};

var isObject$p = isObject$x;
var classof$b = classofRaw$3;
var wellKnownSymbol$z = wellKnownSymbol$F;

var MATCH$3 = wellKnownSymbol$z('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp$1 = function (it) {
  var isRegExp;
  return isObject$p(it) && ((isRegExp = it[MATCH$3]) !== undefined ? !!isRegExp : classof$b(it) == 'RegExp');
};

var aFunction$f = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var anObject$s = anObject$z;
var aFunction$e = aFunction$f;
var wellKnownSymbol$y = wellKnownSymbol$F;

var SPECIES$9 = wellKnownSymbol$y('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$5 = function (O, defaultConstructor) {
  var C = anObject$s(O).constructor;
  var S;
  return C === undefined || (S = anObject$s(C)[SPECIES$9]) == undefined ? defaultConstructor : aFunction$e(S);
};

var toInteger$a = toInteger$d;
var requireObjectCoercible$e = requireObjectCoercible$h;

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$9 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible$e($this));
    var position = toInteger$a(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte$1 = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$9(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$9(true)
};

var charAt$2 = stringMultibyte$1.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$5 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var classof$a = classofRaw$3;
var regexpExec$5 = regexpExec$7;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract$1 = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof$a(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec$5.call(R, S);
};

var fixRegExpWellKnownSymbolLogic$5 = fixRegexpWellKnownSymbolLogic$1;
var isRegExp$3 = isRegexp$1;
var anObject$r = anObject$z;
var requireObjectCoercible$d = requireObjectCoercible$h;
var speciesConstructor$4 = speciesConstructor$5;
var advanceStringIndex$4 = advanceStringIndex$5;
var toLength$i = toLength$l;
var callRegExpExec = regexpExecAbstract$1;
var regexpExec$4 = regexpExec$7;
var stickyHelpers$4 = regexpStickyHelpers$2;
var fails$D = fails$T;

var UNSUPPORTED_Y$4 = stickyHelpers$4.UNSUPPORTED_Y;
var arrayPush$2 = [].push;
var min$5 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$D(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic$5('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible$d(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp$3(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec$4.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush$2.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$d(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject$r(this);
      var S = String(string);
      var C = speciesConstructor$4(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y$4 ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y$4 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$4 ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y$4 ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min$5(toLength$i(splitter.lastIndex + (UNSUPPORTED_Y$4 ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex$4(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$4);

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $$T = _export$1;
var $indexOf = arrayIncludes$2.indexOf;
var arrayMethodIsStrict$5 = arrayMethodIsStrict$7;

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD$4 = arrayMethodIsStrict$5('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$T({ target: 'Array', proto: true, forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$4 }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO$1
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var isObject$o = isObject$x;
var isArray$7 = isArray$a;
var wellKnownSymbol$x = wellKnownSymbol$F;

var SPECIES$8 = wellKnownSymbol$x('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$5 = function (originalArray, length) {
  var C;
  if (isArray$7(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$7(C.prototype))) C = undefined;
    else if (isObject$o(C)) {
      C = C[SPECIES$8];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var $$S = _export$1;
var fails$C = fails$T;
var isArray$6 = isArray$a;
var isObject$n = isObject$x;
var toObject$h = toObject$j;
var toLength$h = toLength$l;
var createProperty$5 = createProperty$7;
var arraySpeciesCreate$4 = arraySpeciesCreate$5;
var arrayMethodHasSpeciesSupport$6 = arrayMethodHasSpeciesSupport$8;
var wellKnownSymbol$w = wellKnownSymbol$F;
var V8_VERSION$4 = engineV8Version$1;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$w('isConcatSpreadable');
var MAX_SAFE_INTEGER$3 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$4 >= 51 || !fails$C(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$6('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$n(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$6(O);
};

var FORCED$a = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$S({ target: 'Array', proto: true, forced: FORCED$a }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$h(this);
    var A = arraySpeciesCreate$4(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength$h(E.length);
        if (n + len > MAX_SAFE_INTEGER$3) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$5(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$3) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$5(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var objectGetOwnPropertyNamesExternal$1 = {};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var toIndexedObject$e = toIndexedObject$l;
var $getOwnPropertyNames$3 = objectGetOwnPropertyNames$1.f;

var toString$4 = {}.toString;

var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames$1 = function (it) {
  try {
    return $getOwnPropertyNames$3(it);
  } catch (error) {
    return windowNames$1.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal$1.f = function getOwnPropertyNames(it) {
  return windowNames$1 && toString$4.call(it) == '[object Window]'
    ? getWindowNames$1(it)
    : $getOwnPropertyNames$3(toIndexedObject$e(it));
};

var $$R = _export$1;
var fails$B = fails$T;
var getOwnPropertyNames$3 = objectGetOwnPropertyNamesExternal$1.f;

// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES$4 = fails$B(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$$R({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$4 }, {
  getOwnPropertyNames: getOwnPropertyNames$3
});

var wellKnownSymbolWrapped$1 = {};

var wellKnownSymbol$v = wellKnownSymbol$F;

wellKnownSymbolWrapped$1.f = wellKnownSymbol$v;

var path$3 = path$5;
var has$h = has$p;
var wrappedWellKnownSymbolModule$3 = wellKnownSymbolWrapped$1;
var defineProperty$c = objectDefineProperty$1.f;

var defineWellKnownSymbol$4 = function (NAME) {
  var Symbol = path$3.Symbol || (path$3.Symbol = {});
  if (!has$h(Symbol, NAME)) defineProperty$c(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$3.f(NAME)
  });
};

var defineProperty$b = objectDefineProperty$1.f;
var has$g = has$p;
var wellKnownSymbol$u = wellKnownSymbol$F;

var TO_STRING_TAG$4 = wellKnownSymbol$u('toStringTag');

var setToStringTag$8 = function (it, TAG, STATIC) {
  if (it && !has$g(it = STATIC ? it : it.prototype, TO_STRING_TAG$4)) {
    defineProperty$b(it, TO_STRING_TAG$4, { configurable: true, value: TAG });
  }
};

var aFunction$d = aFunction$f;

// optional / simple context binding
var functionBindContext$1 = function (fn, that, length) {
  aFunction$d(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var bind$c = functionBindContext$1;
var IndexedObject$5 = indexedObject$1;
var toObject$g = toObject$j;
var toLength$g = toLength$l;
var arraySpeciesCreate$3 = arraySpeciesCreate$5;

var push$1 = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$8 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$g($this);
    var self = IndexedObject$5(O);
    var boundFunction = bind$c(callbackfn, that, 3);
    var length = toLength$g(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$3;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration$1 = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$8(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$8(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$8(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$8(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$8(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$8(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$8(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod$8(7)
};

var $$Q = _export$1;
var global$D = global$P;
var getBuiltIn$b = getBuiltIn$f;
var DESCRIPTORS$q = descriptors$1;
var NATIVE_SYMBOL$3 = nativeSymbol$1;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
var fails$A = fails$T;
var has$f = has$p;
var isArray$5 = isArray$a;
var isObject$m = isObject$x;
var anObject$q = anObject$z;
var toObject$f = toObject$j;
var toIndexedObject$d = toIndexedObject$l;
var toPrimitive$5 = toPrimitive$9;
var createPropertyDescriptor$6 = createPropertyDescriptor$a;
var nativeObjectCreate$1 = objectCreate$1;
var objectKeys$7 = objectKeys$9;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames$1;
var getOwnPropertyNamesExternal$1 = objectGetOwnPropertyNamesExternal$1;
var getOwnPropertySymbolsModule$4 = objectGetOwnPropertySymbols$1;
var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$9 = objectDefineProperty$1;
var propertyIsEnumerableModule$4 = objectPropertyIsEnumerable$1;
var createNonEnumerableProperty$f = createNonEnumerableProperty$l;
var redefine$d = redefine$j.exports;
var shared$7 = shared$c.exports;
var sharedKey$5 = sharedKey$8;
var hiddenKeys$6 = hiddenKeys$c;
var uid$4 = uid$8;
var wellKnownSymbol$t = wellKnownSymbol$F;
var wrappedWellKnownSymbolModule$2 = wellKnownSymbolWrapped$1;
var defineWellKnownSymbol$3 = defineWellKnownSymbol$4;
var setToStringTag$7 = setToStringTag$8;
var InternalStateModule$7 = internalState$1;
var $forEach$3 = arrayIteration$1.forEach;

var HIDDEN$1 = sharedKey$5('hidden');
var SYMBOL$1 = 'Symbol';
var PROTOTYPE$3 = 'prototype';
var TO_PRIMITIVE$1 = wellKnownSymbol$t('toPrimitive');
var setInternalState$6 = InternalStateModule$7.set;
var getInternalState$9 = InternalStateModule$7.getterFor(SYMBOL$1);
var ObjectPrototype$3 = Object[PROTOTYPE$3];
var $Symbol$1 = global$D.Symbol;
var $stringify$1 = getBuiltIn$b('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$4.f;
var nativeDefineProperty$1 = definePropertyModule$9.f;
var nativeGetOwnPropertyNames$1 = getOwnPropertyNamesExternal$1.f;
var nativePropertyIsEnumerable$1 = propertyIsEnumerableModule$4.f;
var AllSymbols$1 = shared$7('symbols');
var ObjectPrototypeSymbols$1 = shared$7('op-symbols');
var StringToSymbolRegistry$1 = shared$7('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$7('symbol-to-string-registry');
var WellKnownSymbolsStore$2 = shared$7('wks');
var QObject$1 = global$D.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER$1 = !QObject$1 || !QObject$1[PROTOTYPE$3] || !QObject$1[PROTOTYPE$3].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor$1 = DESCRIPTORS$q && fails$A(function () {
  return nativeObjectCreate$1(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$3, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
    nativeDefineProperty$1(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap$3 = function (tag, description) {
  var symbol = AllSymbols$1[tag] = nativeObjectCreate$1($Symbol$1[PROTOTYPE$3]);
  setInternalState$6(symbol, {
    type: SYMBOL$1,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$q) symbol.description = description;
  return symbol;
};

var isSymbol$2 = USE_SYMBOL_AS_UID$2 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol$1;
};

var $defineProperty$2 = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$3) $defineProperty$2(ObjectPrototypeSymbols$1, P, Attributes);
  anObject$q(O);
  var key = toPrimitive$5(P, true);
  anObject$q(Attributes);
  if (has$f(AllSymbols$1, key)) {
    if (!Attributes.enumerable) {
      if (!has$f(O, HIDDEN$1)) nativeDefineProperty$1(O, HIDDEN$1, createPropertyDescriptor$6(1, {}));
      O[HIDDEN$1][key] = true;
    } else {
      if (has$f(O, HIDDEN$1) && O[HIDDEN$1][key]) O[HIDDEN$1][key] = false;
      Attributes = nativeObjectCreate$1(Attributes, { enumerable: createPropertyDescriptor$6(0, false) });
    } return setSymbolDescriptor$1(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties$1 = function defineProperties(O, Properties) {
  anObject$q(O);
  var properties = toIndexedObject$d(Properties);
  var keys = objectKeys$7(properties).concat($getOwnPropertySymbols$1(properties));
  $forEach$3(keys, function (key) {
    if (!DESCRIPTORS$q || $propertyIsEnumerable$2.call(properties, key)) $defineProperty$2(O, key, properties[key]);
  });
  return O;
};

var $create$1 = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate$1(O) : $defineProperties$1(nativeObjectCreate$1(O), Properties);
};

var $propertyIsEnumerable$2 = function propertyIsEnumerable(V) {
  var P = toPrimitive$5(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype$3 && has$f(AllSymbols$1, P) && !has$f(ObjectPrototypeSymbols$1, P)) return false;
  return enumerable || !has$f(this, P) || !has$f(AllSymbols$1, P) || has$f(this, HIDDEN$1) && this[HIDDEN$1][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$d(O);
  var key = toPrimitive$5(P, true);
  if (it === ObjectPrototype$3 && has$f(AllSymbols$1, key) && !has$f(ObjectPrototypeSymbols$1, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
  if (descriptor && has$f(AllSymbols$1, key) && !(has$f(it, HIDDEN$1) && it[HIDDEN$1][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames$2 = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$1(toIndexedObject$d(O));
  var result = [];
  $forEach$3(names, function (key) {
    if (!has$f(AllSymbols$1, key) && !has$f(hiddenKeys$6, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols$1 = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols$1 : toIndexedObject$d(O));
  var result = [];
  $forEach$3(names, function (key) {
    if (has$f(AllSymbols$1, key) && (!IS_OBJECT_PROTOTYPE || has$f(ObjectPrototype$3, key))) {
      result.push(AllSymbols$1[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$3) {
  $Symbol$1 = function Symbol() {
    if (this instanceof $Symbol$1) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid$4(description);
    var setter = function (value) {
      if (this === ObjectPrototype$3) setter.call(ObjectPrototypeSymbols$1, value);
      if (has$f(this, HIDDEN$1) && has$f(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
      setSymbolDescriptor$1(this, tag, createPropertyDescriptor$6(1, value));
    };
    if (DESCRIPTORS$q && USE_SETTER$1) setSymbolDescriptor$1(ObjectPrototype$3, tag, { configurable: true, set: setter });
    return wrap$3(tag, description);
  };

  redefine$d($Symbol$1[PROTOTYPE$3], 'toString', function toString() {
    return getInternalState$9(this).tag;
  });

  redefine$d($Symbol$1, 'withoutSetter', function (description) {
    return wrap$3(uid$4(description), description);
  });

  propertyIsEnumerableModule$4.f = $propertyIsEnumerable$2;
  definePropertyModule$9.f = $defineProperty$2;
  getOwnPropertyDescriptorModule$4.f = $getOwnPropertyDescriptor$2;
  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal$1.f = $getOwnPropertyNames$2;
  getOwnPropertySymbolsModule$4.f = $getOwnPropertySymbols$1;

  wrappedWellKnownSymbolModule$2.f = function (name) {
    return wrap$3(wellKnownSymbol$t(name), name);
  };

  if (DESCRIPTORS$q) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol$1[PROTOTYPE$3], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$9(this).description;
      }
    });
    {
      redefine$d(ObjectPrototype$3, 'propertyIsEnumerable', $propertyIsEnumerable$2, { unsafe: true });
    }
  }
}

$$Q({ global: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
  Symbol: $Symbol$1
});

$forEach$3(objectKeys$7(WellKnownSymbolsStore$2), function (name) {
  defineWellKnownSymbol$3(name);
});

$$Q({ target: SYMBOL$1, stat: true, forced: !NATIVE_SYMBOL$3 }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has$f(StringToSymbolRegistry$1, string)) return StringToSymbolRegistry$1[string];
    var symbol = $Symbol$1(string);
    StringToSymbolRegistry$1[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol$2(sym)) throw TypeError(sym + ' is not a symbol');
    if (has$f(SymbolToStringRegistry$1, sym)) return SymbolToStringRegistry$1[sym];
  },
  useSetter: function () { USE_SETTER$1 = true; },
  useSimple: function () { USE_SETTER$1 = false; }
});

$$Q({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$q }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create$1,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty$2,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties$1,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
});

$$Q({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames$2,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols$1
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$$Q({ target: 'Object', stat: true, forced: fails$A(function () { getOwnPropertySymbolsModule$4.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule$4.f(toObject$f(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify$1) {
  var FORCED_JSON_STRINGIFY$1 = !NATIVE_SYMBOL$3 || fails$A(function () {
    var symbol = $Symbol$1();
    // MS Edge converts symbol values to JSON as {}
    return $stringify$1([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify$1({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify$1(Object(symbol)) != '{}';
  });

  $$Q({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject$m(replacer) && it === undefined || isSymbol$2(it)) return; // IE8 returns string on undefined
      if (!isArray$5(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol$2(value)) return value;
      };
      args[1] = replacer;
      return $stringify$1.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol$1[PROTOTYPE$3][TO_PRIMITIVE$1]) {
  createNonEnumerableProperty$f($Symbol$1[PROTOTYPE$3], TO_PRIMITIVE$1, $Symbol$1[PROTOTYPE$3].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$7($Symbol$1, SYMBOL$1);

hiddenKeys$6[HIDDEN$1] = true;

var toObject$e = toObject$j;

var floor$2 = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$e(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$2(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var fixRegExpWellKnownSymbolLogic$4 = fixRegexpWellKnownSymbolLogic$1;
var fails$z = fails$T;
var anObject$p = anObject$z;
var toLength$f = toLength$l;
var toInteger$9 = toInteger$d;
var requireObjectCoercible$c = requireObjectCoercible$h;
var advanceStringIndex$3 = advanceStringIndex$5;
var getSubstitution = getSubstitution$1;
var regExpExec$4 = regexpExecAbstract$1;
var wellKnownSymbol$s = wellKnownSymbol$F;

var REPLACE = wellKnownSymbol$s('replace');
var max$2 = Math.max;
var min$4 = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$z(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$4('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$c(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, this, string, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject$p(this);
      var S = String(string);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$4(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$f(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max$2(min$4(toInteger$9(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic$1;
var anObject$o = anObject$z;
var toLength$e = toLength$l;
var requireObjectCoercible$b = requireObjectCoercible$h;
var advanceStringIndex$2 = advanceStringIndex$5;
var regExpExec$3 = regexpExecAbstract$1;

// @@match logic
fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$b(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var res = maybeCallNative(nativeMatch, this, string);
      if (res.done) return res.value;

      var rx = anObject$o(this);
      var S = String(string);

      if (!rx.global) return regExpExec$3(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$e(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var $$P = _export$1;
var DESCRIPTORS$p = descriptors$1;
var global$C = global$P;
var has$e = has$p;
var isObject$l = isObject$x;
var defineProperty$a = objectDefineProperty$1.f;
var copyConstructorProperties$2 = copyConstructorProperties$4;

var NativeSymbol = global$C.Symbol;

if (DESCRIPTORS$p && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties$2(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString$1 = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$a(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject$l(this) ? this.valueOf() : this;
      var string = symbolToString$1.call(symbol);
      if (has$e(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$P({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

var defineWellKnownSymbol$2 = defineWellKnownSymbol$4;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$2('iterator');

var wellKnownSymbol$r = wellKnownSymbol$F;
var create$7 = objectCreate$1;
var definePropertyModule$8 = objectDefineProperty$1;

var UNSCOPABLES$1 = wellKnownSymbol$r('unscopables');
var ArrayPrototype$3 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$3[UNSCOPABLES$1] == undefined) {
  definePropertyModule$8.f(ArrayPrototype$3, UNSCOPABLES$1, {
    configurable: true,
    value: create$7(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$6 = function (key) {
  ArrayPrototype$3[UNSCOPABLES$1][key] = true;
};

var iterators$1 = {};

var fails$y = fails$T;

var correctPrototypeGetter = !fails$y(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var has$d = has$p;
var toObject$d = toObject$j;
var sharedKey$4 = sharedKey$8;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

var IE_PROTO$1 = sharedKey$4('IE_PROTO');
var ObjectPrototype$2 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? Object.getPrototypeOf : function (O) {
  O = toObject$d(O);
  if (has$d(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$2 : null;
};

var fails$x = fails$T;
var getPrototypeOf$2 = objectGetPrototypeOf;
var createNonEnumerableProperty$e = createNonEnumerableProperty$l;
var has$c = has$p;
var wellKnownSymbol$q = wellKnownSymbol$F;

var ITERATOR$8 = wellKnownSymbol$q('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

var returnThis$2 = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$x(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!has$c(IteratorPrototype$2, ITERATOR$8)) {
  createNonEnumerableProperty$e(IteratorPrototype$2, ITERATOR$8, returnThis$2);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$6 = objectCreate$1;
var createPropertyDescriptor$5 = createPropertyDescriptor$a;
var setToStringTag$6 = setToStringTag$8;
var Iterators$6 = iterators$1;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$6(IteratorPrototype$1, { next: createPropertyDescriptor$5(1, next) });
  setToStringTag$6(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$6[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isObject$k = isObject$x;

var aPossiblePrototype$3 = function (it) {
  if (!isObject$k(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

/* eslint-disable no-proto -- safe */

var anObject$n = anObject$z;
var aPossiblePrototype$2 = aPossiblePrototype$3;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$n(O);
    aPossiblePrototype$2(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$O = _export$1;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$6 = objectSetPrototypeOf$1;
var setToStringTag$5 = setToStringTag$8;
var createNonEnumerableProperty$d = createNonEnumerableProperty$l;
var redefine$c = redefine$j.exports;
var wellKnownSymbol$p = wellKnownSymbol$F;
var Iterators$5 = iterators$1;
var IteratorsCore = iteratorsCore;

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$p('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$7]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$1(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$1(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$6) {
          setPrototypeOf$6(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$7] != 'function') {
          createNonEnumerableProperty$d(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$5(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    createNonEnumerableProperty$d(IterablePrototype, ITERATOR$7, defaultIterator);
  }
  Iterators$5[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$c(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$O({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var toIndexedObject$c = toIndexedObject$l;
var addToUnscopables$5 = addToUnscopables$6;
var Iterators$4 = iterators$1;
var InternalStateModule$6 = internalState$1;
var defineIterator$1 = defineIterator$2;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$5 = InternalStateModule$6.set;
var getInternalState$8 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$5(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$c(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$8(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$4.Arguments = Iterators$4.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$5('keys');
addToUnscopables$5('values');
addToUnscopables$5('entries');

var charAt$1 = stringMultibyte$1.charAt;
var InternalStateModule$5 = internalState$1;
var defineIterator = defineIterator$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = InternalStateModule$5.set;
var getInternalState$7 = InternalStateModule$5.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$7(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$1(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables$1 = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var global$B = global$P;
var DOMIterables$2 = domIterables$1;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$c = createNonEnumerableProperty$l;
var wellKnownSymbol$o = wellKnownSymbol$F;

var ITERATOR$6 = wellKnownSymbol$o('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol$o('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME$2 in DOMIterables$2) {
  var Collection$2 = global$B[COLLECTION_NAME$2];
  var CollectionPrototype$2 = Collection$2 && Collection$2.prototype;
  if (CollectionPrototype$2) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$2[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$c(CollectionPrototype$2, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype$2[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype$2[TO_STRING_TAG$3]) {
      createNonEnumerableProperty$c(CollectionPrototype$2, TO_STRING_TAG$3, COLLECTION_NAME$2);
    }
    if (DOMIterables$2[COLLECTION_NAME$2]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$2[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$c(CollectionPrototype$2, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype$2[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

var $$N = _export$1;
var $map$1 = arrayIteration$1.map;
var arrayMethodHasSpeciesSupport$5 = arrayMethodHasSpeciesSupport$8;

var HAS_SPECIES_SUPPORT$4 = arrayMethodHasSpeciesSupport$5('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$N({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$4 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// a string of all valid unicode whitespaces
var whitespaces$6 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var requireObjectCoercible$a = requireObjectCoercible$h;
var whitespaces$5 = whitespaces$6;

var whitespace$1 = '[' + whitespaces$5 + ']';
var ltrim$1 = RegExp('^' + whitespace$1 + whitespace$1 + '*');
var rtrim$1 = RegExp(whitespace$1 + whitespace$1 + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$7 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible$a($this));
    if (TYPE & 1) string = string.replace(ltrim$1, '');
    if (TYPE & 2) string = string.replace(rtrim$1, '');
    return string;
  };
};

var stringTrim$1 = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$7(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$7(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$7(3)
};

var global$A = global$P;
var trim$1 = stringTrim$1.trim;
var whitespaces$4 = whitespaces$6;

var $parseInt$1 = global$A.parseInt;
var hex$1 = /^[+-]?0[Xx]/;
var FORCED$9 = $parseInt$1(whitespaces$4 + '08') !== 8 || $parseInt$1(whitespaces$4 + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt$1 = FORCED$9 ? function parseInt(string, radix) {
  var S = trim$1(String(string));
  return $parseInt$1(S, (radix >>> 0) || (hex$1.test(S) ? 16 : 10));
} : $parseInt$1;

var $$M = _export$1;
var parseIntImplementation$1 = numberParseInt$1;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$M({ global: true, forced: parseInt != parseIntImplementation$1 }, {
  parseInt: parseIntImplementation$1
});

var $$L = _export$1;
var global$z = global$P;
var userAgent$7 = engineUserAgent$1;

var slice$3 = [].slice;
var MSIE$1 = /MSIE .\./.test(userAgent$7); // <- dirty ie9- check

var wrap$2 = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice$3.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$$L({ global: true, bind: true, forced: MSIE$1 }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap$2(global$z.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap$2(global$z.setInterval)
});

var $$K = _export$1;
var toObject$c = toObject$j;
var nativeKeys$2 = objectKeys$9;
var fails$w = fails$T;

var FAILS_ON_PRIMITIVES$3 = fails$w(function () { nativeKeys$2(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$K({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3 }, {
  keys: function keys(it) {
    return nativeKeys$2(toObject$c(it));
  }
});

var $$J = _export$1;
var $filter$1 = arrayIteration$1.filter;
var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$8;

var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$J({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $forEach$2 = arrayIteration$1.forEach;
var arrayMethodIsStrict$4 = arrayMethodIsStrict$7;

var STRICT_METHOD$3 = arrayMethodIsStrict$4('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach$1 = !STRICT_METHOD$3 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var $$I = _export$1;
var forEach$3 = arrayForEach$1;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$I({ target: 'Array', proto: true, forced: [].forEach != forEach$3 }, {
  forEach: forEach$3
});

var global$y = global$P;
var DOMIterables$1 = domIterables$1;
var forEach$2 = arrayForEach$1;
var createNonEnumerableProperty$b = createNonEnumerableProperty$l;

for (var COLLECTION_NAME$1 in DOMIterables$1) {
  var Collection$1 = global$y[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach$2) try {
    createNonEnumerableProperty$b(CollectionPrototype$1, 'forEach', forEach$2);
  } catch (error) {
    CollectionPrototype$1.forEach = forEach$2;
  }
}

var userAgent$6 = engineUserAgent$1;

var engineIsIos$1 = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent$6);

var classof$9 = classofRaw$3;
var global$x = global$P;

var engineIsNode$1 = classof$9(global$x.process) == 'process';

var global$w = global$P;
var fails$v = fails$T;
var bind$b = functionBindContext$1;
var html$3 = html$5;
var createElement$2 = documentCreateElement$3;
var IS_IOS$3 = engineIsIos$1;
var IS_NODE$6 = engineIsNode$1;

var location$1 = global$w.location;
var set$3 = global$w.setImmediate;
var clear$1 = global$w.clearImmediate;
var process$7 = global$w.process;
var MessageChannel$1 = global$w.MessageChannel;
var Dispatch$1 = global$w.Dispatch;
var counter$1 = 0;
var queue$1 = {};
var ONREADYSTATECHANGE$1 = 'onreadystatechange';
var defer$1, channel$1, port$1;

var run$1 = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue$1.hasOwnProperty(id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner$1 = function (id) {
  return function () {
    run$1(id);
  };
};

var listener$2 = function (event) {
  run$1(event.data);
};

var post$1 = function (id) {
  // old engines have not location.origin
  global$w.postMessage(id + '', location$1.protocol + '//' + location$1.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$3 || !clear$1) {
  set$3 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue$1[++counter$1] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer$1(counter$1);
    return counter$1;
  };
  clear$1 = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$6) {
    defer$1 = function (id) {
      process$7.nextTick(runner$1(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer$1 = function (id) {
      Dispatch$1.now(runner$1(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel$1 && !IS_IOS$3) {
    channel$1 = new MessageChannel$1();
    port$1 = channel$1.port2;
    channel$1.port1.onmessage = listener$2;
    defer$1 = bind$b(port$1.postMessage, port$1, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$w.addEventListener &&
    typeof postMessage == 'function' &&
    !global$w.importScripts &&
    location$1 && location$1.protocol !== 'file:' &&
    !fails$v(post$1)
  ) {
    defer$1 = post$1;
    global$w.addEventListener('message', listener$2, false);
  // IE8-
  } else if (ONREADYSTATECHANGE$1 in createElement$2('script')) {
    defer$1 = function (id) {
      html$3.appendChild(createElement$2('script'))[ONREADYSTATECHANGE$1] = function () {
        html$3.removeChild(this);
        run$1(id);
      };
    };
  // Rest old browsers
  } else {
    defer$1 = function (id) {
      setTimeout(runner$1(id), 0);
    };
  }
}

var task$4 = {
  set: set$3,
  clear: clear$1
};

var $$H = _export$1;
var global$v = global$P;
var task$3 = task$4;

var FORCED$8 = !global$v.setImmediate || !global$v.clearImmediate;

// http://w3c.github.io/setImmediate/
$$H({ global: true, bind: true, enumerable: true, forced: FORCED$8 }, {
  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  setImmediate: task$3.set,
  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  clearImmediate: task$3.clear
});

var fails$u = fails$T;
var whitespaces$3 = whitespaces$6;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$u(function () {
    return !!whitespaces$3[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces$3[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $$G = _export$1;
var $trim = stringTrim$1.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$G({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var aFunction$c = aFunction$f;
var toObject$b = toObject$j;
var IndexedObject$4 = indexedObject$1;
var toLength$d = toLength$l;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$6 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$c(callbackfn);
    var O = toObject$b(that);
    var self = IndexedObject$4(O);
    var length = toLength$d(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$6(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$6(true)
};

var $$F = _export$1;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$7;
var CHROME_VERSION = engineV8Version$1;
var IS_NODE$5 = engineIsNode$1;

var STRICT_METHOD$2 = arrayMethodIsStrict$3('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE$5 && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$F({ target: 'Array', proto: true, forced: !STRICT_METHOD$2 || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var toObject$a = toObject$j;
var toAbsoluteIndex$4 = toAbsoluteIndex$7;
var toLength$c = toLength$l;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$a(this);
  var length = toLength$c(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$4(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$4(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var $$E = _export$1;
var fill = arrayFill$1;
var addToUnscopables$4 = addToUnscopables$6;

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$$E({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$4('fill');

var DESCRIPTORS$o = descriptors$1;
var defineProperty$9 = objectDefineProperty$1.f;

var FunctionPrototype$1 = Function.prototype;
var FunctionPrototypeToString$1 = FunctionPrototype$1.toString;
var nameRE$1 = /^\s*function ([^ (]*)/;
var NAME$1 = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS$o && !(NAME$1 in FunctionPrototype$1)) {
  defineProperty$9(FunctionPrototype$1, NAME$1, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString$1.call(this).match(nameRE$1)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var $$D = _export$1;
var DESCRIPTORS$n = descriptors$1;
var create$5 = objectCreate$1;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$$D({ target: 'Object', stat: true, sham: !DESCRIPTORS$n }, {
  create: create$5
});

var isObject$j = isObject$x;
var setPrototypeOf$5 = objectSetPrototypeOf$1;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$3 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$5 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject$j(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$5($this, NewTargetPrototype);
  return $this;
};

var getBuiltIn$a = getBuiltIn$f;
var definePropertyModule$7 = objectDefineProperty$1;
var wellKnownSymbol$n = wellKnownSymbol$F;
var DESCRIPTORS$m = descriptors$1;

var SPECIES$7 = wellKnownSymbol$n('species');

var setSpecies$6 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$a(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$7.f;

  if (DESCRIPTORS$m && Constructor && !Constructor[SPECIES$7]) {
    defineProperty(Constructor, SPECIES$7, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$l = descriptors$1;
var global$u = global$P;
var isForced$5 = isForced_1$1;
var inheritIfRequired$2 = inheritIfRequired$3;
var createNonEnumerableProperty$a = createNonEnumerableProperty$l;
var defineProperty$8 = objectDefineProperty$1.f;
var getOwnPropertyNames$2 = objectGetOwnPropertyNames$1.f;
var isRegExp$2 = isRegexp$1;
var getFlags$1 = regexpFlags$4;
var stickyHelpers$3 = regexpStickyHelpers$2;
var redefine$b = redefine$j.exports;
var fails$t = fails$T;
var has$b = has$p;
var enforceInternalState$2 = internalState$1.enforce;
var setSpecies$5 = setSpecies$6;
var wellKnownSymbol$m = wellKnownSymbol$F;
var UNSUPPORTED_DOT_ALL$3 = regexpUnsupportedDotAll$2;
var UNSUPPORTED_NCG$3 = regexpUnsupportedNcg$2;

var MATCH$2 = wellKnownSymbol$m('match');
var NativeRegExp$1 = global$u.RegExp;
var RegExpPrototype$3 = NativeRegExp$1.prototype;
// TODO: Use only propper RegExpIdentifierName
var IS_NCG$1 = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1$1 = /a/g;
var re2$1 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW$1 = new NativeRegExp$1(re1$1) !== re1$1;

var UNSUPPORTED_Y$3 = stickyHelpers$3.UNSUPPORTED_Y;

var BASE_FORCED$1 = DESCRIPTORS$l &&
  (!CORRECT_NEW$1 || UNSUPPORTED_Y$3 || UNSUPPORTED_DOT_ALL$3 || UNSUPPORTED_NCG$3 || fails$t(function () {
    re2$1[MATCH$2] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp$1(re1$1) != re1$1 || NativeRegExp$1(re2$1) == re2$1 || NativeRegExp$1(re1$1, 'i') != '/a/i';
  }));

var handleDotAll$1 = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = string.charAt(index);
    if (chr === '\\') {
      result += chr + string.charAt(++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG$1 = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = string.charAt(index);
    if (chr === '\\') {
      chr = chr + string.charAt(++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (IS_NCG$1.test(string.slice(index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || has$b(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named.push([groupname, groupid]);
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced$5('RegExp', BASE_FORCED$1)) {
  var RegExpWrapper$1 = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper$1;
    var patternIsRegExp = isRegExp$2(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper$1) {
      return pattern;
    }

    if (patternIsRegExp || pattern instanceof RegExpWrapper$1) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags$1.call(rawPattern);
    }

    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$3 && 'dotAll' in re1$1) {
      dotAll = !!flags && flags.indexOf('s') > -1;
      if (dotAll) flags = flags.replace(/s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y$3 && 'sticky' in re1$1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    if (UNSUPPORTED_NCG$3) {
      handled = handleNCG$1(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$2(NativeRegExp$1(pattern, flags), thisIsRegExp ? this : RegExpPrototype$3, RegExpWrapper$1);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$2(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper$1(handleDotAll$1(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$a(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy$1 = function (key) {
    key in RegExpWrapper$1 || defineProperty$8(RegExpWrapper$1, key, {
      configurable: true,
      get: function () { return NativeRegExp$1[key]; },
      set: function (it) { NativeRegExp$1[key] = it; }
    });
  };

  for (var keys$4 = getOwnPropertyNames$2(NativeRegExp$1), index = 0; keys$4.length > index;) {
    proxy$1(keys$4[index++]);
  }

  RegExpPrototype$3.constructor = RegExpWrapper$1;
  RegExpWrapper$1.prototype = RegExpPrototype$3;
  redefine$b(global$u, 'RegExp', RegExpWrapper$1);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$5('RegExp');

var requireObjectCoercible$9 = requireObjectCoercible$h;

var quot$1 = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
var createHtml$1 = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible$9(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot$1, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

var fails$s = fails$T;

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
var stringHtmlForced$1 = function (METHOD_NAME) {
  return fails$s(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};

var $$C = _export$1;
var createHTML$1 = createHtml$1;
var forcedStringHTMLMethod$1 = stringHtmlForced$1;

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$$C({ target: 'String', proto: true, forced: forcedStringHTMLMethod$1('small') }, {
  small: function small() {
    return createHTML$1(this, 'small', '', '');
  }
});

var $$B = _export$1;
var DESCRIPTORS$k = descriptors$1;
var defineProperties$2 = objectDefineProperties$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$$B({ target: 'Object', stat: true, forced: !DESCRIPTORS$k, sham: !DESCRIPTORS$k }, {
  defineProperties: defineProperties$2
});

var aFunction$b = aFunction$f;
var isObject$i = isObject$x;

var slice$2 = [].slice;
var factories$1 = {};

var construct$1 = function (C, argsLength, args) {
  if (!(argsLength in factories$1)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories$1[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories$1[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind$1 = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction$b(this);
  var partArgs = slice$2.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice$2.call(arguments));
    return this instanceof boundFunction ? construct$1(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject$i(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

var $$A = _export$1;
var bind$a = functionBind$1;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$A({ target: 'Function', proto: true }, {
  bind: bind$a
});

var $$z = _export$1;
var setPrototypeOf$4 = objectSetPrototypeOf$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$$z({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf$4
});

var DESCRIPTORS$j = descriptors$1;
var objectDefinePropertyModule = objectDefineProperty$1;
var regExpFlags = regexpFlags$4;
var fails$r = fails$T;

var FORCED$7 = DESCRIPTORS$j && fails$r(function () {
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy';
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED$7) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: regExpFlags
});

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$3 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var $$y = _export$1;
var is = sameValue$3;

// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$$y({ target: 'Object', stat: true }, {
  is: is
});

var DESCRIPTORS$i = descriptors$1;
var objectKeys$6 = objectKeys$9;
var toIndexedObject$b = toIndexedObject$l;
var propertyIsEnumerable$3 = objectPropertyIsEnumerable$1.f;

// `Object.{ entries, values }` methods implementation
var createMethod$5 = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject$b(it);
    var keys = objectKeys$6(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS$i || propertyIsEnumerable$3.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

var objectToArray$1 = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod$5(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod$5(false)
};

var $$x = _export$1;
var $values$1 = objectToArray$1.values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$$x({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values$1(O);
  }
});

var $$w = _export$1;
var getBuiltIn$9 = getBuiltIn$f;
var aFunction$a = aFunction$f;
var anObject$m = anObject$z;
var isObject$h = isObject$x;
var create$4 = objectCreate$1;
var bind$9 = functionBind$1;
var fails$q = fails$T;

var nativeConstruct$1 = getBuiltIn$9('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG$1 = fails$q(function () {
  function F() { /* empty */ }
  return !(nativeConstruct$1(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG$1 = !fails$q(function () {
  nativeConstruct$1(function () { /* empty */ });
});
var FORCED$6 = NEW_TARGET_BUG$1 || ARGS_BUG$1;

$$w({ target: 'Reflect', stat: true, forced: FORCED$6, sham: FORCED$6 }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction$a(Target);
    anObject$m(args);
    var newTarget = arguments.length < 3 ? Target : aFunction$a(arguments[2]);
    if (ARGS_BUG$1 && !NEW_TARGET_BUG$1) return nativeConstruct$1(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind$9.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create$4(isObject$h(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject$h(result) ? result : instance;
  }
});

var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic$1;
var anObject$l = anObject$z;
var requireObjectCoercible$8 = requireObjectCoercible$h;
var sameValue$2 = sameValue$3;
var regExpExec$2 = regexpExecAbstract$1;

// @@search logic
fixRegExpWellKnownSymbolLogic$2('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$8(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var res = maybeCallNative(nativeSearch, this, string);
      if (res.done) return res.value;

      var rx = anObject$l(this);
      var S = String(string);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue$2(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec$2(rx, S);
      if (!sameValue$2(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

var DESCRIPTORS$h = descriptors$1;
var fails$p = fails$T;
var objectKeys$5 = objectKeys$9;
var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols$1;
var propertyIsEnumerableModule$3 = objectPropertyIsEnumerable$1;
var toObject$9 = toObject$j;
var IndexedObject$3 = indexedObject$1;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign$1 = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$7 = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign$1 = !$assign$1 || fails$p(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$h && $assign$1({ b: 1 }, $assign$1(defineProperty$7({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$7(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign$1({}, A)[symbol] != 7 || objectKeys$5($assign$1({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$9(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
  var propertyIsEnumerable = propertyIsEnumerableModule$3.f;
  while (argumentsLength > index) {
    var S = IndexedObject$3(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys$5(S).concat(getOwnPropertySymbols(S)) : objectKeys$5(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$h || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign$1;

var $$v = _export$1;
var assign$1 = objectAssign$1;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$v({ target: 'Object', stat: true, forced: Object.assign !== assign$1 }, {
  assign: assign$1
});

var $$u = _export$1;

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$$u({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});

var $$t = _export$1;
var toAbsoluteIndex$3 = toAbsoluteIndex$7;
var toInteger$8 = toInteger$d;
var toLength$b = toLength$l;
var toObject$8 = toObject$j;
var arraySpeciesCreate$2 = arraySpeciesCreate$5;
var createProperty$4 = createProperty$7;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$8;

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('splice');

var max$1 = Math.max;
var min$3 = Math.min;
var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$$t({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject$8(this);
    var len = toLength$b(O.length);
    var actualStart = toAbsoluteIndex$3(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$3(max$1(toInteger$8(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$2) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate$2(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty$4(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var $$s = _export$1;
var fails$o = fails$T;
var toObject$7 = toObject$j;
var nativeGetPrototypeOf = objectGetPrototypeOf;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var FAILS_ON_PRIMITIVES$2 = fails$o(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$$s({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$7(it));
  }
});

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

var redefine$a = redefine$j.exports;

var redefineAll$4 = function (target, src, options) {
  for (var key in src) redefine$a(target, key, src[key], options);
  return target;
};

var anInstance$4 = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var toInteger$7 = toInteger$d;
var toLength$a = toLength$l;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$1 = function (it) {
  if (it === undefined) return 0;
  var number = toInteger$7(it);
  var length = toLength$a(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var abs = Math.abs;
var pow = Math.pow;
var floor$1 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$1(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var global$t = global$P;
var DESCRIPTORS$g = descriptors$1;
var NATIVE_ARRAY_BUFFER = arrayBufferNative;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$l;
var redefineAll$3 = redefineAll$4;
var fails$n = fails$T;
var anInstance$3 = anInstance$4;
var toInteger$6 = toInteger$d;
var toLength$9 = toLength$l;
var toIndex = toIndex$1;
var IEEE754 = ieee754;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf$1;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames$1.f;
var defineProperty$6 = objectDefineProperty$1.f;
var arrayFill = arrayFill$1;
var setToStringTag$4 = setToStringTag$8;
var InternalStateModule$4 = internalState$1;

var getInternalState$6 = InternalStateModule$4.get;
var setInternalState$3 = InternalStateModule$4.set;
var ARRAY_BUFFER$1 = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE$2 = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer$1 = global$t[ARRAY_BUFFER$1];
var $ArrayBuffer = NativeArrayBuffer$1;
var $DataView = global$t[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$2];
var ObjectPrototype$1 = Object.prototype;
var RangeError$1 = global$t.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty$6(Constructor[PROTOTYPE$2], key, { get: function () { return getInternalState$6(this)[key]; } });
};

var get$2 = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState$6(view);
  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
  var bytes = getInternalState$6(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set$2 = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState$6(view);
  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
  var bytes = getInternalState$6(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance$3(this, $ArrayBuffer, ARRAY_BUFFER$1);
    var byteLength = toIndex(length);
    setInternalState$3(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$g) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$3(this, $DataView, DATA_VIEW);
    anInstance$3(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState$6(buffer).byteLength;
    var offset = toInteger$6(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$9(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
    setInternalState$3(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS$g) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS$g) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll$3($DataView[PROTOTYPE$2], {
    getInt8: function getInt8(byteOffset) {
      return get$2(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get$2(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get$2(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set$2(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set$2(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set$2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  /* eslint-disable no-new -- required for testing */
  if (!fails$n(function () {
    NativeArrayBuffer$1(1);
  }) || !fails$n(function () {
    new NativeArrayBuffer$1(-1);
  }) || fails$n(function () {
    new NativeArrayBuffer$1();
    new NativeArrayBuffer$1(1.5);
    new NativeArrayBuffer$1(NaN);
    return NativeArrayBuffer$1.name != ARRAY_BUFFER$1;
  })) {
  /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$3(this, $ArrayBuffer);
      return new NativeArrayBuffer$1(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$2] = NativeArrayBuffer$1[PROTOTYPE$2];
    for (var keys$3 = getOwnPropertyNames$1(NativeArrayBuffer$1), j = 0, key; keys$3.length > j;) {
      if (!((key = keys$3[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty$9($ArrayBuffer, key, NativeArrayBuffer$1[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$3 && getPrototypeOf($DataViewPrototype) !== ObjectPrototype$1) {
    setPrototypeOf$3($DataViewPrototype, ObjectPrototype$1);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll$3($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag$4($ArrayBuffer, ARRAY_BUFFER$1);
setToStringTag$4($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var $$r = _export$1;
var global$s = global$P;
var arrayBufferModule = arrayBuffer;
var setSpecies$4 = setSpecies$6;

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer$2 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global$s[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$$r({ global: true, forced: NativeArrayBuffer !== ArrayBuffer$2 }, {
  ArrayBuffer: ArrayBuffer$2
});

setSpecies$4(ARRAY_BUFFER);

var $$q = _export$1;
var fails$m = fails$T;
var ArrayBufferModule = arrayBuffer;
var anObject$k = anObject$z;
var toAbsoluteIndex$2 = toAbsoluteIndex$7;
var toLength$8 = toLength$l;
var speciesConstructor$3 = speciesConstructor$5;

var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var DataView$2 = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer$1.prototype.slice;

var INCORRECT_SLICE = fails$m(function () {
  return !new ArrayBuffer$1(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$q({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject$k(this), start); // FF fix
    }
    var length = anObject$k(this).byteLength;
    var first = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    var result = new (speciesConstructor$3(this, ArrayBuffer$1))(toLength$8(fin - first));
    var viewSource = new DataView$2(this);
    var viewTarget = new DataView$2(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var toIndexedObject$a = toIndexedObject$l;
var toInteger$5 = toInteger$d;
var toLength$7 = toLength$l;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$7;

var min$2 = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD$1 = arrayMethodIsStrict$2('lastIndexOf');
var FORCED$5 = NEGATIVE_ZERO || !STRICT_METHOD$1;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
var arrayLastIndexOf = FORCED$5 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject$a(this);
  var length = toLength$7(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min$2(index, toInteger$5(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;

var $$p = _export$1;
var lastIndexOf = arrayLastIndexOf;

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$$p({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});

var $$o = _export$1;
var $findIndex$1 = arrayIteration$1.findIndex;
var addToUnscopables$3 = addToUnscopables$6;

var FIND_INDEX$1 = 'findIndex';
var SKIPS_HOLES$2 = true;

// Shouldn't skip holes
if (FIND_INDEX$1 in []) Array(1)[FIND_INDEX$1](function () { SKIPS_HOLES$2 = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$$o({ target: 'Array', proto: true, forced: SKIPS_HOLES$2 }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$3(FIND_INDEX$1);

var $$n = _export$1;
var DESCRIPTORS$f = descriptors$1;
var ownKeys$4 = ownKeys$6;
var toIndexedObject$9 = toIndexedObject$l;
var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor$1;
var createProperty$3 = createProperty$7;

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$n({ target: 'Object', stat: true, sham: !DESCRIPTORS$f }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$9(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$3.f;
    var keys = ownKeys$4(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$3(result, key, descriptor);
    }
    return result;
  }
});

var anObject$j = anObject$z;

var iteratorClose$4 = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject$j(returnMethod.call(iterator)).value;
  }
};

var anObject$i = anObject$z;
var iteratorClose$3 = iteratorClose$4;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$i(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$3(iterator);
    throw error;
  }
};

var wellKnownSymbol$l = wellKnownSymbol$F;
var Iterators$3 = iterators$1;

var ITERATOR$5 = wellKnownSymbol$l('iterator');
var ArrayPrototype$2 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$4 = function (it) {
  return it !== undefined && (Iterators$3.Array === it || ArrayPrototype$2[ITERATOR$5] === it);
};

var classof$8 = classof$d;
var Iterators$2 = iterators$1;
var wellKnownSymbol$k = wellKnownSymbol$F;

var ITERATOR$4 = wellKnownSymbol$k('iterator');

var getIteratorMethod$4 = function (it) {
  if (it != undefined) return it[ITERATOR$4]
    || it['@@iterator']
    || Iterators$2[classof$8(it)];
};

var bind$8 = functionBindContext$1;
var toObject$6 = toObject$j;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$3 = isArrayIteratorMethod$4;
var toLength$6 = toLength$l;
var createProperty$2 = createProperty$7;
var getIteratorMethod$3 = getIteratorMethod$4;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$6(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$3(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind$8(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$3(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$2(result, index, value);
    }
  } else {
    length = toLength$6(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$2(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$j = wellKnownSymbol$F;

var ITERATOR$3 = wellKnownSymbol$j('iterator');
var SAFE_CLOSING$1 = false;

try {
  var called$1 = 0;
  var iteratorWithReturn$1 = {
    next: function () {
      return { done: !!called$1++ };
    },
    'return': function () {
      SAFE_CLOSING$1 = true;
    }
  };
  iteratorWithReturn$1[ITERATOR$3] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn$1, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING$1) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$3] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$m = _export$1;
var from = arrayFrom;
var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;

var INCORRECT_ITERATION$2 = !checkCorrectnessOfIteration$3(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$m({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$2 }, {
  from: from
});

var global$r = global$P;

var nativePromiseConstructor$1 = global$r.Promise;

var anObject$h = anObject$z;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$4;
var toLength$5 = toLength$l;
var bind$7 = functionBindContext$1;
var getIteratorMethod$2 = getIteratorMethod$4;
var iteratorClose$2 = iteratorClose$4;

var Result$1 = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate$3 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$7(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose$2(iterator);
    return new Result$1(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$h(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$2(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$2(iterFn)) {
      for (index = 0, length = toLength$5(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result$1) return result;
      } return new Result$1(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$2(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result$1) return result;
  } return new Result$1(false);
};

var userAgent$5 = engineUserAgent$1;

var engineIsWebosWebkit$1 = /web0s(?!.*chrome)/i.test(userAgent$5);

var global$q = global$P;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
var macrotask$1 = task$4.set;
var IS_IOS$2 = engineIsIos$1;
var IS_WEBOS_WEBKIT$1 = engineIsWebosWebkit$1;
var IS_NODE$4 = engineIsNode$1;

var MutationObserver$2 = global$q.MutationObserver || global$q.WebKitMutationObserver;
var document$5 = global$q.document;
var process$6 = global$q.process;
var Promise$3 = global$q.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor$1 = getOwnPropertyDescriptor$3(global$q, 'queueMicrotask');
var queueMicrotask$1 = queueMicrotaskDescriptor$1 && queueMicrotaskDescriptor$1.value;

var flush$1, head$1, last$1, notify$3, toggle$1, node$1, promise$1, then$1;

// modern engines have queueMicrotask method
if (!queueMicrotask$1) {
  flush$1 = function () {
    var parent, fn;
    if (IS_NODE$4 && (parent = process$6.domain)) parent.exit();
    while (head$1) {
      fn = head$1.fn;
      head$1 = head$1.next;
      try {
        fn();
      } catch (error) {
        if (head$1) notify$3();
        else last$1 = undefined;
        throw error;
      }
    } last$1 = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS$2 && !IS_NODE$4 && !IS_WEBOS_WEBKIT$1 && MutationObserver$2 && document$5) {
    toggle$1 = true;
    node$1 = document$5.createTextNode('');
    new MutationObserver$2(flush$1).observe(node$1, { characterData: true });
    notify$3 = function () {
      node$1.data = toggle$1 = !toggle$1;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$3 && Promise$3.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise$1 = Promise$3.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise$1.constructor = Promise$3;
    then$1 = promise$1.then;
    notify$3 = function () {
      then$1.call(promise$1, flush$1);
    };
  // Node.js without promises
  } else if (IS_NODE$4) {
    notify$3 = function () {
      process$6.nextTick(flush$1);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify$3 = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask$1.call(global$q, flush$1);
    };
  }
}

var microtask$3 = queueMicrotask$1 || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last$1) last$1.next = task;
  if (!head$1) {
    head$1 = task;
    notify$3();
  } last$1 = task;
};

var newPromiseCapability$5 = {};

var aFunction$9 = aFunction$f;

var PromiseCapability$1 = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$9(resolve);
  this.reject = aFunction$9(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$5.f = function (C) {
  return new PromiseCapability$1(C);
};

var anObject$g = anObject$z;
var isObject$g = isObject$x;
var newPromiseCapability$4 = newPromiseCapability$5;

var promiseResolve$3 = function (C, x) {
  anObject$g(C);
  if (isObject$g(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$4.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$p = global$P;

var hostReportErrors$3 = function (a, b) {
  var console = global$p.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var engineIsBrowser$1 = typeof window == 'object';

var $$l = _export$1;
var global$o = global$P;
var getBuiltIn$8 = getBuiltIn$f;
var NativePromise$1 = nativePromiseConstructor$1;
var redefine$9 = redefine$j.exports;
var redefineAll$2 = redefineAll$4;
var setPrototypeOf$2 = objectSetPrototypeOf$1;
var setToStringTag$3 = setToStringTag$8;
var setSpecies$3 = setSpecies$6;
var isObject$f = isObject$x;
var aFunction$8 = aFunction$f;
var anInstance$2 = anInstance$4;
var inspectSource$4 = inspectSource$7;
var iterate$2 = iterate$3;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
var speciesConstructor$2 = speciesConstructor$5;
var task$2 = task$4.set;
var microtask$2 = microtask$3;
var promiseResolve$2 = promiseResolve$3;
var hostReportErrors$2 = hostReportErrors$3;
var newPromiseCapabilityModule$1 = newPromiseCapability$5;
var perform$2 = perform$3;
var InternalStateModule$3 = internalState$1;
var isForced$4 = isForced_1$1;
var wellKnownSymbol$i = wellKnownSymbol$F;
var IS_BROWSER$1 = engineIsBrowser$1;
var IS_NODE$3 = engineIsNode$1;
var V8_VERSION$3 = engineV8Version$1;

var SPECIES$6 = wellKnownSymbol$i('species');
var PROMISE$1 = 'Promise';
var getInternalState$5 = InternalStateModule$3.get;
var setInternalState$2 = InternalStateModule$3.set;
var getInternalPromiseState$1 = InternalStateModule$3.getterFor(PROMISE$1);
var NativePromisePrototype$1 = NativePromise$1 && NativePromise$1.prototype;
var PromiseConstructor$1 = NativePromise$1;
var PromiseConstructorPrototype$1 = NativePromisePrototype$1;
var TypeError$2 = global$o.TypeError;
var document$4 = global$o.document;
var process$5 = global$o.process;
var newPromiseCapability$3 = newPromiseCapabilityModule$1.f;
var newGenericPromiseCapability$1 = newPromiseCapability$3;
var DISPATCH_EVENT$1 = !!(document$4 && document$4.createEvent && global$o.dispatchEvent);
var NATIVE_REJECTION_EVENT$1 = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION$1 = 'unhandledrejection';
var REJECTION_HANDLED$1 = 'rejectionhandled';
var PENDING$1 = 0;
var FULFILLED$1 = 1;
var REJECTED$1 = 2;
var HANDLED$1 = 1;
var UNHANDLED$1 = 2;
var SUBCLASSING$1 = false;
var Internal$1, OwnPromiseCapability$1, PromiseWrapper$1, nativeThen$1;

var FORCED$4 = isForced$4(PROMISE$1, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$4(PromiseConstructor$1);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor$1);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$3 === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION$3 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor$1(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$6] = FakePromise;
  SUBCLASSING$1 = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING$1) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER$1 && !NATIVE_REJECTION_EVENT$1;
});

var INCORRECT_ITERATION$1 = FORCED$4 || !checkCorrectnessOfIteration$2(function (iterable) {
  PromiseConstructor$1.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable$1 = function (it) {
  var then;
  return isObject$f(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify$2 = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask$2(function () {
    var value = state.value;
    var ok = state.state == FULFILLED$1;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED$1) onHandleUnhandled$1(state);
            state.rejection = HANDLED$1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$2('Promise-chain cycle'));
          } else if (then = isThenable$1(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled$1(state);
  });
};

var dispatchEvent$1 = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT$1) {
    event = document$4.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$o.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT$1 && (handler = global$o['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION$1) hostReportErrors$2('Unhandled promise rejection', reason);
};

var onUnhandled$1 = function (state) {
  task$2.call(global$o, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled$1(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE$3) {
          process$5.emit('unhandledRejection', value, promise);
        } else dispatchEvent$1(UNHANDLED_REJECTION$1, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$3 || isUnhandled$1(state) ? UNHANDLED$1 : HANDLED$1;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled$1 = function (state) {
  return state.rejection !== HANDLED$1 && !state.parent;
};

var onHandleUnhandled$1 = function (state) {
  task$2.call(global$o, function () {
    var promise = state.facade;
    if (IS_NODE$3) {
      process$5.emit('rejectionHandled', promise);
    } else dispatchEvent$1(REJECTION_HANDLED$1, promise, state.value);
  });
};

var bind$6 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject$1 = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED$1;
  notify$2(state, true);
};

var internalResolve$1 = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$2("Promise can't be resolved itself");
    var then = isThenable$1(value);
    if (then) {
      microtask$2(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind$6(internalResolve$1, wrapper, state),
            bind$6(internalReject$1, wrapper, state)
          );
        } catch (error) {
          internalReject$1(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED$1;
      notify$2(state, false);
    }
  } catch (error) {
    internalReject$1({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor$1 = function Promise(executor) {
    anInstance$2(this, PromiseConstructor$1, PROMISE$1);
    aFunction$8(executor);
    Internal$1.call(this);
    var state = getInternalState$5(this);
    try {
      executor(bind$6(internalResolve$1, state), bind$6(internalReject$1, state));
    } catch (error) {
      internalReject$1(state, error);
    }
  };
  PromiseConstructorPrototype$1 = PromiseConstructor$1.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal$1 = function Promise(executor) {
    setInternalState$2(this, {
      type: PROMISE$1,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING$1,
      value: undefined
    });
  };
  Internal$1.prototype = redefineAll$2(PromiseConstructorPrototype$1, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState$1(this);
      var reaction = newPromiseCapability$3(speciesConstructor$2(this, PromiseConstructor$1));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE$3 ? process$5.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING$1) notify$2(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability$1 = function () {
    var promise = new Internal$1();
    var state = getInternalState$5(promise);
    this.promise = promise;
    this.resolve = bind$6(internalResolve$1, state);
    this.reject = bind$6(internalReject$1, state);
  };
  newPromiseCapabilityModule$1.f = newPromiseCapability$3 = function (C) {
    return C === PromiseConstructor$1 || C === PromiseWrapper$1
      ? new OwnPromiseCapability$1(C)
      : newGenericPromiseCapability$1(C);
  };

  if (typeof NativePromise$1 == 'function' && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen$1 = NativePromisePrototype$1.then;

    if (!SUBCLASSING$1) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine$9(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor$1(function (resolve, reject) {
          nativeThen$1.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine$9(NativePromisePrototype$1, 'catch', PromiseConstructorPrototype$1['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$2) {
      setPrototypeOf$2(NativePromisePrototype$1, PromiseConstructorPrototype$1);
    }
  }
}

$$l({ global: true, wrap: true, forced: FORCED$4 }, {
  Promise: PromiseConstructor$1
});

setToStringTag$3(PromiseConstructor$1, PROMISE$1, false);
setSpecies$3(PROMISE$1);

PromiseWrapper$1 = getBuiltIn$8(PROMISE$1);

// statics
$$l({ target: PROMISE$1, stat: true, forced: FORCED$4 }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability$3(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$$l({ target: PROMISE$1, stat: true, forced: FORCED$4 }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve$2(this, x);
  }
});

$$l({ target: PROMISE$1, stat: true, forced: INCORRECT_ITERATION$1 }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aFunction$8(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aFunction$8(C.resolve);
      iterate$2(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};var classnames$2={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(module){/* global define */(function(){var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=_typeof$1(arg);if(argType==='string'||argType==='number'){classes.push(arg);}else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner);}}}else if(argType==='object'){if(arg.toString===Object.prototype.toString){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key);}}}else {classes.push(arg.toString());}}}return classes.join(' ');}if(module.exports){classNames["default"]=classNames;module.exports=classNames;}else {window.classNames=classNames;}})();})(classnames$2);var classnames$1=classnames$2.exports;/*
 *
 * Material Design SVG icons as functional hyperscript components from
 * https://material.io/resources/icons/
 *
 */var Add=function Add(props){var _props$color=props.color,color=_props$color===void 0?'none':_props$color;return/*#__PURE__*/React.createElement("svg",_extends$1({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},props),/*#__PURE__*/React.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:color}),/*#__PURE__*/React.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}));};var Button$4$1=components.Button;var AddIconButton$1=function AddIconButton(_ref){var className=_ref.className,onClick=_ref.onClick;return/*#__PURE__*/React.createElement(Button$4$1,{className:classnames$1([className,'components-icon-button']),isPrimary:true,onClick:onClick},/*#__PURE__*/React.createElement(Add,{width:16,height:16,color:'#fff'}));};var check=function check(it){return it&&it.Math==Math&&it;};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$n=// eslint-disable-next-line es/no-global-this -- safe
check((typeof globalThis==="undefined"?"undefined":_typeof$1(globalThis))=='object'&&globalThis)||check((typeof window==="undefined"?"undefined":_typeof$1(window))=='object'&&window)||// eslint-disable-next-line no-restricted-globals -- safe
check((typeof self==="undefined"?"undefined":_typeof$1(self))=='object'&&self)||check(_typeof$1(commonjsGlobal)=='object'&&commonjsGlobal)||// eslint-disable-next-line no-new-func -- fallback
function(){return this;}()||Function('return this')();var objectGetOwnPropertyDescriptor={};var fails$k=function fails$k(exec){try{return !!exec();}catch(error){return true;}};var fails$j=fails$k;// Detect IE8's incomplete defineProperty implementation
var descriptors=!fails$j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return Object.defineProperty({},1,{get:function get(){return 7;}})[1]!=7;});var objectPropertyIsEnumerable={};var $propertyIsEnumerable$1={}.propertyIsEnumerable;// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2=Object.getOwnPropertyDescriptor;// Nashorn ~ JDK8 bug
var NASHORN_BUG=getOwnPropertyDescriptor$2&&!$propertyIsEnumerable$1.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f=NASHORN_BUG?function propertyIsEnumerable(V){var descriptor=getOwnPropertyDescriptor$2(this,V);return !!descriptor&&descriptor.enumerable;}:$propertyIsEnumerable$1;var createPropertyDescriptor$4=function createPropertyDescriptor$4(bitmap,value){return {enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};var toString$3={}.toString;var classofRaw$1=function classofRaw$1(it){return toString$3.call(it).slice(8,-1);};var fails$i=fails$k;var classof$7=classofRaw$1;var split=''.split;// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject=fails$i(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return !Object('z').propertyIsEnumerable(0);})?function(it){return classof$7(it)=='String'?split.call(it,''):Object(it);}:Object;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7=function requireObjectCoercible$7(it){if(it==undefined)throw TypeError("Can't call method on "+it);return it;};// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2=indexedObject;var requireObjectCoercible$6=requireObjectCoercible$7;var toIndexedObject$8=function toIndexedObject$8(it){return IndexedObject$2(requireObjectCoercible$6(it));};var isObject$e=function isObject$e(it){return _typeof$1(it)==='object'?it!==null:typeof it==='function';};var isObject$d=isObject$e;// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$4=function toPrimitive$4(input,PREFERRED_STRING){if(!isObject$d(input))return input;var fn,val;if(PREFERRED_STRING&&typeof(fn=input.toString)=='function'&&!isObject$d(val=fn.call(input)))return val;if(typeof(fn=input.valueOf)=='function'&&!isObject$d(val=fn.call(input)))return val;if(!PREFERRED_STRING&&typeof(fn=input.toString)=='function'&&!isObject$d(val=fn.call(input)))return val;throw TypeError("Can't convert object to primitive value");};var requireObjectCoercible$5=requireObjectCoercible$7;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5=function toObject$5(argument){return Object(requireObjectCoercible$5(argument));};var toObject$4=toObject$5;var hasOwnProperty$b={}.hasOwnProperty;var has$a=Object.hasOwn||function hasOwn(it,key){return hasOwnProperty$b.call(toObject$4(it),key);};var global$m=global$n;var isObject$c=isObject$e;var document$3=global$m.document;// typeof document.createElement is 'object' in old IE
var EXISTS=isObject$c(document$3)&&isObject$c(document$3.createElement);var documentCreateElement$1=function documentCreateElement$1(it){return EXISTS?document$3.createElement(it):{};};var DESCRIPTORS$e=descriptors;var fails$h=fails$k;var createElement$1=documentCreateElement$1;// Thank's IE8 for his funny defineProperty
var ie8DomDefine=!DESCRIPTORS$e&&!fails$h(function(){// eslint-disable-next-line es/no-object-defineproperty -- requied for testing
return Object.defineProperty(createElement$1('div'),'a',{get:function get(){return 7;}}).a!=7;});var DESCRIPTORS$d=descriptors;var propertyIsEnumerableModule$2=objectPropertyIsEnumerable;var createPropertyDescriptor$3=createPropertyDescriptor$4;var toIndexedObject$7=toIndexedObject$8;var toPrimitive$3=toPrimitive$4;var has$9=has$a;var IE8_DOM_DEFINE$1=ie8DomDefine;// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f=DESCRIPTORS$d?$getOwnPropertyDescriptor$1:function getOwnPropertyDescriptor(O,P){O=toIndexedObject$7(O);P=toPrimitive$3(P,true);if(IE8_DOM_DEFINE$1)try{return $getOwnPropertyDescriptor$1(O,P);}catch(error){/* empty */}if(has$9(O,P))return createPropertyDescriptor$3(!propertyIsEnumerableModule$2.f.call(O,P),O[P]);};var objectDefineProperty={};var isObject$b=isObject$e;var anObject$f=function anObject$f(it){if(!isObject$b(it)){throw TypeError(String(it)+' is not an object');}return it;};var DESCRIPTORS$c=descriptors;var IE8_DOM_DEFINE=ie8DomDefine;var anObject$e=anObject$f;var toPrimitive$2=toPrimitive$4;// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1=Object.defineProperty;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f=DESCRIPTORS$c?$defineProperty$1:function defineProperty(O,P,Attributes){anObject$e(O);P=toPrimitive$2(P,true);anObject$e(Attributes);if(IE8_DOM_DEFINE)try{return $defineProperty$1(O,P,Attributes);}catch(error){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported');if('value'in Attributes)O[P]=Attributes.value;return O;};var DESCRIPTORS$b=descriptors;var definePropertyModule$6=objectDefineProperty;var createPropertyDescriptor$2=createPropertyDescriptor$4;var createNonEnumerableProperty$8=DESCRIPTORS$b?function(object,key,value){return definePropertyModule$6.f(object,key,createPropertyDescriptor$2(1,value));}:function(object,key,value){object[key]=value;return object;};var redefine$8={exports:{}};var global$l=global$n;var createNonEnumerableProperty$7=createNonEnumerableProperty$8;var setGlobal$3=function setGlobal$3(key,value){try{createNonEnumerableProperty$7(global$l,key,value);}catch(error){global$l[key]=value;}return value;};var global$k=global$n;var setGlobal$2=setGlobal$3;var SHARED='__core-js_shared__';var store$3=global$k[SHARED]||setGlobal$2(SHARED,{});var sharedStore=store$3;var store$2=sharedStore;var functionToString=Function.toString;// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if(typeof store$2.inspectSource!='function'){store$2.inspectSource=function(it){return functionToString.call(it);};}var inspectSource$3=store$2.inspectSource;var global$j=global$n;var inspectSource$2=inspectSource$3;var WeakMap$2=global$j.WeakMap;var nativeWeakMap=typeof WeakMap$2==='function'&&/native code/.test(inspectSource$2(WeakMap$2));var shared$5={exports:{}};var store$1=sharedStore;(shared$5.exports=function(key,value){return store$1[key]||(store$1[key]=value!==undefined?value:{});})('versions',[]).push({version:'3.15.2',mode:'global',copyright:'© 2021 Denis Pushkarev (zloirock.ru)'});var id=0;var postfix=Math.random();var uid$3=function uid$3(key){return 'Symbol('+String(key===undefined?'':key)+')_'+(++id+postfix).toString(36);};var shared$4=shared$5.exports;var uid$2=uid$3;var keys$2=shared$4('keys');var sharedKey$3=function sharedKey$3(key){return keys$2[key]||(keys$2[key]=uid$2(key));};var hiddenKeys$5={};var NATIVE_WEAK_MAP=nativeWeakMap;var global$i=global$n;var isObject$a=isObject$e;var createNonEnumerableProperty$6=createNonEnumerableProperty$8;var objectHas=has$a;var shared$3=sharedStore;var sharedKey$2=sharedKey$3;var hiddenKeys$4=hiddenKeys$5;var OBJECT_ALREADY_INITIALIZED='Object already initialized';var WeakMap$1=global$i.WeakMap;var set$1,get$1,has$8;var enforce=function enforce(it){return has$8(it)?get$1(it):set$1(it,{});};var getterFor=function getterFor(TYPE){return function(it){var state;if(!isObject$a(it)||(state=get$1(it)).type!==TYPE){throw TypeError('Incompatible receiver, '+TYPE+' required');}return state;};};if(NATIVE_WEAK_MAP||shared$3.state){var store=shared$3.state||(shared$3.state=new WeakMap$1());var wmget=store.get;var wmhas=store.has;var wmset=store.set;set$1=function set$1(it,metadata){if(wmhas.call(store,it))throw new TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;wmset.call(store,it,metadata);return metadata;};get$1=function get$1(it){return wmget.call(store,it)||{};};has$8=function has$8(it){return wmhas.call(store,it);};}else {var STATE=sharedKey$2('state');hiddenKeys$4[STATE]=true;set$1=function set$1(it,metadata){if(objectHas(it,STATE))throw new TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;createNonEnumerableProperty$6(it,STATE,metadata);return metadata;};get$1=function get$1(it){return objectHas(it,STATE)?it[STATE]:{};};has$8=function has$8(it){return objectHas(it,STATE);};}var internalState={set:set$1,get:get$1,has:has$8,enforce:enforce,getterFor:getterFor};var global$h=global$n;var createNonEnumerableProperty$5=createNonEnumerableProperty$8;var has$7=has$a;var setGlobal$1=setGlobal$3;var inspectSource$1=inspectSource$3;var InternalStateModule$2=internalState;var getInternalState$3=InternalStateModule$2.get;var enforceInternalState$1=InternalStateModule$2.enforce;var TEMPLATE=String(String).split('String');(redefine$8.exports=function(O,key,value,options){var unsafe=options?!!options.unsafe:false;var simple=options?!!options.enumerable:false;var noTargetGet=options?!!options.noTargetGet:false;var state;if(typeof value=='function'){if(typeof key=='string'&&!has$7(value,'name')){createNonEnumerableProperty$5(value,'name',key);}state=enforceInternalState$1(value);if(!state.source){state.source=TEMPLATE.join(typeof key=='string'?key:'');}}if(O===global$h){if(simple)O[key]=value;else setGlobal$1(key,value);return;}else if(!unsafe){delete O[key];}else if(!noTargetGet&&O[key]){simple=true;}if(simple)O[key]=value;else createNonEnumerableProperty$5(O,key,value);// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,'toString',function toString(){return typeof this=='function'&&getInternalState$3(this).source||inspectSource$1(this);});var global$g=global$n;var path$2=global$g;var path$1=path$2;var global$f=global$n;var aFunction$7=function aFunction$7(variable){return typeof variable=='function'?variable:undefined;};var getBuiltIn$7=function getBuiltIn$7(namespace,method){return arguments.length<2?aFunction$7(path$1[namespace])||aFunction$7(global$f[namespace]):path$1[namespace]&&path$1[namespace][method]||global$f[namespace]&&global$f[namespace][method];};var objectGetOwnPropertyNames={};var ceil=Math.ceil;var floor=Math.floor;// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$4=function toInteger$4(argument){return isNaN(argument=+argument)?0:(argument>0?floor:ceil)(argument);};var toInteger$3=toInteger$4;var min$1=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4=function toLength$4(argument){return argument>0?min$1(toInteger$3(argument),0x1FFFFFFFFFFFFF):0;// 2 ** 53 - 1 == 9007199254740991
};var toInteger$2=toInteger$4;var max=Math.max;var min=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1=function toAbsoluteIndex$1(index,length){var integer=toInteger$2(index);return integer<0?max(integer+length,0):min(integer,length);};var toIndexedObject$6=toIndexedObject$8;var toLength$3=toLength$4;var toAbsoluteIndex=toAbsoluteIndex$1;// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$4=function createMethod$4(IS_INCLUDES){return function($this,el,fromIndex){var O=toIndexedObject$6($this);var length=toLength$3(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare -- NaN check
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;}return !IS_INCLUDES&&-1;};};var arrayIncludes$1={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:createMethod$4(true),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:createMethod$4(false)};var has$6=has$a;var toIndexedObject$5=toIndexedObject$8;var indexOf=arrayIncludes$1.indexOf;var hiddenKeys$3=hiddenKeys$5;var objectKeysInternal=function objectKeysInternal(object,names){var O=toIndexedObject$5(object);var i=0;var result=[];var key;for(key in O){!has$6(hiddenKeys$3,key)&&has$6(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has$6(O,key=names[i++])){~indexOf(result,key)||result.push(key);}}return result;};// IE8- don't enum bug keys
var enumBugKeys$3=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];var internalObjectKeys$1=objectKeysInternal;var enumBugKeys$2=enumBugKeys$3;var hiddenKeys$2=enumBugKeys$2.concat('length','prototype');// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return internalObjectKeys$1(O,hiddenKeys$2);};var objectGetOwnPropertySymbols={};// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f=Object.getOwnPropertySymbols;var getBuiltIn$6=getBuiltIn$7;var getOwnPropertyNamesModule$1=objectGetOwnPropertyNames;var getOwnPropertySymbolsModule$2=objectGetOwnPropertySymbols;var anObject$d=anObject$f;// all object keys, includes non-enumerable and symbols
var ownKeys$3=getBuiltIn$6('Reflect','ownKeys')||function ownKeys(it){var keys=getOwnPropertyNamesModule$1.f(anObject$d(it));var getOwnPropertySymbols=getOwnPropertySymbolsModule$2.f;return getOwnPropertySymbols?keys.concat(getOwnPropertySymbols(it)):keys;};var has$5=has$a;var ownKeys$2=ownKeys$3;var getOwnPropertyDescriptorModule$2=objectGetOwnPropertyDescriptor;var definePropertyModule$5=objectDefineProperty;var copyConstructorProperties$1=function copyConstructorProperties$1(target,source){var keys=ownKeys$2(source);var defineProperty=definePropertyModule$5.f;var getOwnPropertyDescriptor=getOwnPropertyDescriptorModule$2.f;for(var i=0;i<keys.length;i++){var key=keys[i];if(!has$5(target,key))defineProperty(target,key,getOwnPropertyDescriptor(source,key));}};var fails$g=fails$k;var replacement=/#|\.prototype\./;var isForced$3=function isForced$3(feature,detection){var value=data[normalize(feature)];return value==POLYFILL?true:value==NATIVE?false:typeof detection=='function'?fails$g(detection):!!detection;};var normalize=isForced$3.normalize=function(string){return String(string).replace(replacement,'.').toLowerCase();};var data=isForced$3.data={};var NATIVE=isForced$3.NATIVE='N';var POLYFILL=isForced$3.POLYFILL='P';var isForced_1=isForced$3;var global$e=global$n;var getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f;var createNonEnumerableProperty$4=createNonEnumerableProperty$8;var redefine$7=redefine$8.exports;var setGlobal=setGlobal$3;var copyConstructorProperties=copyConstructorProperties$1;var isForced$2=isForced_1;/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/var _export=function _export(options,source){var TARGET=options.target;var GLOBAL=options.global;var STATIC=options.stat;var FORCED,target,key,targetProperty,sourceProperty,descriptor;if(GLOBAL){target=global$e;}else if(STATIC){target=global$e[TARGET]||setGlobal(TARGET,{});}else {target=(global$e[TARGET]||{}).prototype;}if(target)for(key in source){sourceProperty=source[key];if(options.noTargetGet){descriptor=getOwnPropertyDescriptor$1(target,key);targetProperty=descriptor&&descriptor.value;}else targetProperty=target[key];FORCED=isForced$2(GLOBAL?key:TARGET+(STATIC?'.':'#')+key,options.forced);// contained in target
if(!FORCED&&targetProperty!==undefined){if(_typeof$1(sourceProperty)===_typeof$1(targetProperty))continue;copyConstructorProperties(sourceProperty,targetProperty);}// add a flag to not completely full polyfills
if(options.sham||targetProperty&&targetProperty.sham){createNonEnumerableProperty$4(sourceProperty,'sham',true);}// extend global
redefine$7(target,key,sourceProperty,options);}};var classof$6=classofRaw$1;// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$4=Array.isArray||function isArray(arg){return classof$6(arg)=='Array';};var $$j=_export;var isArray$3=isArray$4;// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$$j({target:'Array',stat:true},{isArray:isArray$3});var aFunction$6=function aFunction$6(it){if(typeof it!='function'){throw TypeError(String(it)+' is not a function');}return it;};var aFunction$5=aFunction$6;// optional / simple context binding
var functionBindContext=function functionBindContext(fn,that,length){aFunction$5(fn);if(that===undefined)return fn;switch(length){case 0:return function(){return fn.call(that);};case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};var getBuiltIn$5=getBuiltIn$7;var engineUserAgent=getBuiltIn$5('navigator','userAgent')||'';var global$d=global$n;var userAgent$4=engineUserAgent;var process$4=global$d.process;var versions=process$4&&process$4.versions;var v8=versions&&versions.v8;var match,version;if(v8){match=v8.split('.');version=match[0]<4?1:match[0]+match[1];}else if(userAgent$4){match=userAgent$4.match(/Edge\/(\d+)/);if(!match||match[1]>=74){match=userAgent$4.match(/Chrome\/(\d+)/);if(match)version=match[1];}}var engineV8Version=version&&+version;/* eslint-disable es/no-symbol -- required for testing */var V8_VERSION$2=engineV8Version;var fails$f=fails$k;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol=!!Object.getOwnPropertySymbols&&!fails$f(function(){var symbol=Symbol();// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
return !String(symbol)||!(Object(symbol)instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&V8_VERSION$2&&V8_VERSION$2<41;});/* eslint-disable es/no-symbol -- required for testing */var NATIVE_SYMBOL$2=nativeSymbol;var useSymbolAsUid=NATIVE_SYMBOL$2&&!Symbol.sham&&_typeof$1(Symbol.iterator)=='symbol';var global$c=global$n;var shared$2=shared$5.exports;var has$4=has$a;var uid$1=uid$3;var NATIVE_SYMBOL$1=nativeSymbol;var USE_SYMBOL_AS_UID$1=useSymbolAsUid;var WellKnownSymbolsStore$1=shared$2('wks');var Symbol$2=global$c.Symbol;var createWellKnownSymbol=USE_SYMBOL_AS_UID$1?Symbol$2:Symbol$2&&Symbol$2.withoutSetter||uid$1;var wellKnownSymbol$h=function wellKnownSymbol$h(name){if(!has$4(WellKnownSymbolsStore$1,name)||!(NATIVE_SYMBOL$1||typeof WellKnownSymbolsStore$1[name]=='string')){if(NATIVE_SYMBOL$1&&has$4(Symbol$2,name)){WellKnownSymbolsStore$1[name]=Symbol$2[name];}else {WellKnownSymbolsStore$1[name]=createWellKnownSymbol('Symbol.'+name);}}return WellKnownSymbolsStore$1[name];};var isObject$9=isObject$e;var isArray$2=isArray$4;var wellKnownSymbol$g=wellKnownSymbol$h;var SPECIES$5=wellKnownSymbol$g('species');// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1=function arraySpeciesCreate$1(originalArray,length){var C;if(isArray$2(originalArray)){C=originalArray.constructor;// cross-realm fallback
if(typeof C=='function'&&(C===Array||isArray$2(C.prototype)))C=undefined;else if(isObject$9(C)){C=C[SPECIES$5];if(C===null)C=undefined;}}return new(C===undefined?Array:C)(length===0?0:length);};var bind$5=functionBindContext;var IndexedObject$1=indexedObject;var toObject$3=toObject$5;var toLength$2=toLength$4;var arraySpeciesCreate=arraySpeciesCreate$1;var push=[].push;// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$3=function createMethod$3(TYPE){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var IS_FILTER_OUT=TYPE==7;var NO_HOLES=TYPE==5||IS_FIND_INDEX;return function($this,callbackfn,that,specificCreate){var O=toObject$3($this);var self=IndexedObject$1(O);var boundFunction=bind$5(callbackfn,that,3);var length=toLength$2(self.length);var index=0;var create=specificCreate||arraySpeciesCreate;var target=IS_MAP?create($this,length):IS_FILTER||IS_FILTER_OUT?create($this,0):undefined;var value,result;for(;length>index;index++){if(NO_HOLES||index in self){value=self[index];result=boundFunction(value,index,O);if(TYPE){if(IS_MAP)target[index]=result;// map
else if(result)switch(TYPE){case 3:return true;// some
case 5:return value;// find
case 6:return index;// findIndex
case 2:push.call(target,value);// filter
}else switch(TYPE){case 4:return false;// every
case 7:push.call(target,value);// filterOut
}}}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:target;};};var arrayIteration={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:createMethod$3(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:createMethod$3(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:createMethod$3(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:createMethod$3(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:createMethod$3(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:createMethod$3(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:createMethod$3(6),// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
filterOut:createMethod$3(7)};var fails$e=fails$k;var wellKnownSymbol$f=wellKnownSymbol$h;var V8_VERSION$1=engineV8Version;var SPECIES$4=wellKnownSymbol$f('species');var arrayMethodHasSpeciesSupport$2=function arrayMethodHasSpeciesSupport$2(METHOD_NAME){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return V8_VERSION$1>=51||!fails$e(function(){var array=[];var constructor=array.constructor={};constructor[SPECIES$4]=function(){return {foo:1};};return array[METHOD_NAME](Boolean).foo!==1;});};var $$i=_export;var $map=arrayIteration.map;var arrayMethodHasSpeciesSupport$1=arrayMethodHasSpeciesSupport$2;var HAS_SPECIES_SUPPORT$1=arrayMethodHasSpeciesSupport$1('map');// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$i({target:'Array',proto:true,forced:!HAS_SPECIES_SUPPORT$1},{map:function map(callbackfn/* , thisArg */){return $map(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject$8(value){var type=_typeof$1(value);return value!=null&&(type=='object'||type=='function');}/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof$1(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof$1(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}/** Built-in value references. */var Symbol$1=root.Symbol;/** Used for built-in method references. */var objectProto$d=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$a=objectProto$d.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString$1=objectProto$d.toString;/** Built-in value references. */var symToStringTag$1=Symbol$1?Symbol$1.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty$a.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString$1.call(value);if(unmasked){if(isOwn){value[symToStringTag$1]=tag;}else {delete value[symToStringTag$1];}}return result;}/** Used for built-in method references. */var objectProto$c=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto$c.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString$1(value){return nativeObjectToString.call(value);}/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=Symbol$1?Symbol$1.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString$1(value);}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&_typeof$1(value)=='object';}/** `Object#toString` result references. */var symbolTag$1='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol$1(value){return _typeof$1(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag$1;}/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol$1(value)){return NAN;}if(isObject$8(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject$8(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}components.TextControl;i18n.__;components.TextareaControl;components.TextControl;i18n.__;var requireObjectCoercible$4=requireObjectCoercible$7;var quot=/"/g;// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
var createHtml=function createHtml(string,tag,attribute,value){var S=String(requireObjectCoercible$4(string));var p1='<'+tag;if(attribute!=='')p1+=' '+attribute+'="'+String(value).replace(quot,'&quot;')+'"';return p1+'>'+S+'</'+tag+'>';};var fails$d=fails$k;// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
var stringHtmlForced=function stringHtmlForced(METHOD_NAME){return fails$d(function(){var test=''[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3;});};var $$h=_export;var createHTML=createHtml;var forcedStringHTMLMethod=stringHtmlForced;// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$$h({target:'String',proto:true,forced:forcedStringHTMLMethod('small')},{small:function small(){return createHTML(this,'small','','');}});/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _objectSpread$1$1(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}var noop$1=function noop(){};var _WINDOW={};var _DOCUMENT={};var _MUTATION_OBSERVER=null;var _PERFORMANCE={mark:noop$1,measure:noop$1};try{if(typeof window!=='undefined')_WINDOW=window;if(typeof document!=='undefined')_DOCUMENT=document;if(typeof MutationObserver!=='undefined')_MUTATION_OBSERVER=MutationObserver;if(typeof performance!=='undefined')_PERFORMANCE=performance;}catch(e){}var _ref=_WINDOW.navigator||{},_ref$userAgent=_ref.userAgent,userAgent$3=_ref$userAgent===void 0?'':_ref$userAgent;var WINDOW=_WINDOW;var DOCUMENT=_DOCUMENT;var PERFORMANCE=_PERFORMANCE;!!WINDOW.document;var IS_DOM=!!DOCUMENT.documentElement&&!!DOCUMENT.head&&typeof DOCUMENT.addEventListener==='function'&&typeof DOCUMENT.createElement==='function';~userAgent$3.indexOf('MSIE')||~userAgent$3.indexOf('Trident/');var NAMESPACE_IDENTIFIER='___FONT_AWESOME___';var DEFAULT_FAMILY_PREFIX='fa';var DEFAULT_REPLACEMENT_CLASS='svg-inline--fa';var DATA_FA_I2SVG='data-fa-i2svg';(function(){try{return process.env.NODE_ENV==='production';}catch(e){return false;}})();var DUOTONE_CLASSES={GROUP:'group',SWAP_OPACITY:'swap-opacity',PRIMARY:'primary',SECONDARY:'secondary'};var initial=WINDOW.FontAwesomeConfig||{};function getAttrConfig(attr){var element=DOCUMENT.querySelector('script['+attr+']');if(element){return element.getAttribute(attr);}}function coerce(val){// Getting an empty string will occur if the attribute is set on the HTML tag but without a value
// We'll assume that this is an indication that it should be toggled to true
// For example <script data-search-pseudo-elements src="..."></script>
if(val==='')return true;if(val==='false')return false;if(val==='true')return true;return val;}if(DOCUMENT&&typeof DOCUMENT.querySelector==='function'){var attrs=[['data-family-prefix','familyPrefix'],['data-replacement-class','replacementClass'],['data-auto-replace-svg','autoReplaceSvg'],['data-auto-add-css','autoAddCss'],['data-auto-a11y','autoA11y'],['data-search-pseudo-elements','searchPseudoElements'],['data-observe-mutations','observeMutations'],['data-mutate-approach','mutateApproach'],['data-keep-original-source','keepOriginalSource'],['data-measure-performance','measurePerformance'],['data-show-missing-icons','showMissingIcons']];attrs.forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),attr=_ref2[0],key=_ref2[1];var val=coerce(getAttrConfig(attr));if(val!==undefined&&val!==null){initial[key]=val;}});}var _default={familyPrefix:DEFAULT_FAMILY_PREFIX,replacementClass:DEFAULT_REPLACEMENT_CLASS,autoReplaceSvg:true,autoAddCss:true,autoA11y:true,searchPseudoElements:false,observeMutations:true,mutateApproach:'async',keepOriginalSource:true,measurePerformance:false,showMissingIcons:true};var _config=_objectSpread$1$1({},_default,initial);if(!_config.autoReplaceSvg)_config.observeMutations=false;var config=_objectSpread$1$1({},_config);WINDOW.FontAwesomeConfig=config;var w=WINDOW||{};if(!w[NAMESPACE_IDENTIFIER])w[NAMESPACE_IDENTIFIER]={};if(!w[NAMESPACE_IDENTIFIER].styles)w[NAMESPACE_IDENTIFIER].styles={};if(!w[NAMESPACE_IDENTIFIER].hooks)w[NAMESPACE_IDENTIFIER].hooks={};if(!w[NAMESPACE_IDENTIFIER].shims)w[NAMESPACE_IDENTIFIER].shims=[];var namespace=w[NAMESPACE_IDENTIFIER];var functions=[];var listener$1=function listener(){DOCUMENT.removeEventListener('DOMContentLoaded',listener);loaded=1;functions.map(function(fn){return fn();});};var loaded=false;if(IS_DOM){loaded=(DOCUMENT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(DOCUMENT.readyState);if(!loaded)DOCUMENT.addEventListener('DOMContentLoaded',listener$1);}typeof global!=='undefined'&&typeof global.process!=='undefined'&&typeof global.process.emit==='function';typeof setImmediate==='undefined'?setTimeout:setImmediate;var meaninglessTransform={size:16,x:0,y:0,rotate:0,flipX:false,flipY:false};function insertCss(css){if(!css||!IS_DOM){return;}var style=DOCUMENT.createElement('style');style.setAttribute('type','text/css');style.innerHTML=css;var headChildren=DOCUMENT.head.childNodes;var beforeChild=null;for(var i=headChildren.length-1;i>-1;i--){var child=headChildren[i];var tagName=(child.tagName||'').toUpperCase();if(['STYLE','LINK'].indexOf(tagName)>-1){beforeChild=child;}}DOCUMENT.head.insertBefore(style,beforeChild);return css;}var idPool='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';function nextUniqueId(){var size=12;var id='';while(size-->0){id+=idPool[Math.random()*62|0];}return id;}function htmlEscape(str){return "".concat(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}function joinAttributes(attributes){return Object.keys(attributes||{}).reduce(function(acc,attributeName){return acc+"".concat(attributeName,"=\"").concat(htmlEscape(attributes[attributeName]),"\" ");},'').trim();}function joinStyles(styles){return Object.keys(styles||{}).reduce(function(acc,styleName){return acc+"".concat(styleName,": ").concat(styles[styleName],";");},'');}function transformIsMeaningful(transform){return transform.size!==meaninglessTransform.size||transform.x!==meaninglessTransform.x||transform.y!==meaninglessTransform.y||transform.rotate!==meaninglessTransform.rotate||transform.flipX||transform.flipY;}function transformForSvg(_ref){var transform=_ref.transform,containerWidth=_ref.containerWidth,iconWidth=_ref.iconWidth;var outer={transform:"translate(".concat(containerWidth/2," 256)")};var innerTranslate="translate(".concat(transform.x*32,", ").concat(transform.y*32,") ");var innerScale="scale(".concat(transform.size/16*(transform.flipX?-1:1),", ").concat(transform.size/16*(transform.flipY?-1:1),") ");var innerRotate="rotate(".concat(transform.rotate," 0 0)");var inner={transform:"".concat(innerTranslate," ").concat(innerScale," ").concat(innerRotate)};var path={transform:"translate(".concat(iconWidth/2*-1," -256)")};return {outer:outer,inner:inner,path:path};}var ALL_SPACE={x:0,y:0,width:'100%',height:'100%'};function fillBlack(_abstract){var force=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(_abstract.attributes&&(_abstract.attributes.fill||force)){_abstract.attributes.fill='black';}return _abstract;}function deGroup(_abstract2){if(_abstract2.tag==='g'){return _abstract2.children;}else {return [_abstract2];}}function makeIconMasking(_ref){var children=_ref.children,attributes=_ref.attributes,main=_ref.main,mask=_ref.mask,explicitMaskId=_ref.maskId,transform=_ref.transform;var mainWidth=main.width,mainPath=main.icon;var maskWidth=mask.width,maskPath=mask.icon;var trans=transformForSvg({transform:transform,containerWidth:maskWidth,iconWidth:mainWidth});var maskRect={tag:'rect',attributes:_objectSpread$1$1({},ALL_SPACE,{fill:'white'})};var maskInnerGroupChildrenMixin=mainPath.children?{children:mainPath.children.map(fillBlack)}:{};var maskInnerGroup={tag:'g',attributes:_objectSpread$1$1({},trans.inner),children:[fillBlack(_objectSpread$1$1({tag:mainPath.tag,attributes:_objectSpread$1$1({},mainPath.attributes,trans.path)},maskInnerGroupChildrenMixin))]};var maskOuterGroup={tag:'g',attributes:_objectSpread$1$1({},trans.outer),children:[maskInnerGroup]};var maskId="mask-".concat(explicitMaskId||nextUniqueId());var clipId="clip-".concat(explicitMaskId||nextUniqueId());var maskTag={tag:'mask',attributes:_objectSpread$1$1({},ALL_SPACE,{id:maskId,maskUnits:'userSpaceOnUse',maskContentUnits:'userSpaceOnUse'}),children:[maskRect,maskOuterGroup]};var defs={tag:'defs',children:[{tag:'clipPath',attributes:{id:clipId},children:deGroup(maskPath)},maskTag]};children.push(defs,{tag:'rect',attributes:_objectSpread$1$1({fill:'currentColor','clip-path':"url(#".concat(clipId,")"),mask:"url(#".concat(maskId,")")},ALL_SPACE)});return {children:children,attributes:attributes};}function makeIconStandard(_ref){var children=_ref.children,attributes=_ref.attributes,main=_ref.main,transform=_ref.transform,styles=_ref.styles;var styleString=joinStyles(styles);if(styleString.length>0){attributes['style']=styleString;}if(transformIsMeaningful(transform)){var trans=transformForSvg({transform:transform,containerWidth:main.width,iconWidth:main.width});children.push({tag:'g',attributes:_objectSpread$1$1({},trans.outer),children:[{tag:'g',attributes:_objectSpread$1$1({},trans.inner),children:[{tag:main.icon.tag,children:main.icon.children,attributes:_objectSpread$1$1({},main.icon.attributes,trans.path)}]}]});}else {children.push(main.icon);}return {children:children,attributes:attributes};}function asIcon(_ref){var children=_ref.children,main=_ref.main,mask=_ref.mask,attributes=_ref.attributes,styles=_ref.styles,transform=_ref.transform;if(transformIsMeaningful(transform)&&main.found&&!mask.found){var width=main.width,height=main.height;var offset={x:width/height/2,y:0.5};attributes['style']=joinStyles(_objectSpread$1$1({},styles,{'transform-origin':"".concat(offset.x+transform.x/16,"em ").concat(offset.y+transform.y/16,"em")}));}return [{tag:'svg',attributes:attributes,children:children}];}function asSymbol(_ref){var prefix=_ref.prefix,iconName=_ref.iconName,children=_ref.children,attributes=_ref.attributes,symbol=_ref.symbol;var id=symbol===true?"".concat(prefix,"-").concat(config.familyPrefix,"-").concat(iconName):symbol;return [{tag:'svg',attributes:{style:'display: none;'},children:[{tag:'symbol',attributes:_objectSpread$1$1({},attributes,{id:id}),children:children}]}];}function makeInlineSvgAbstract(params){var _params$icons=params.icons,main=_params$icons.main,mask=_params$icons.mask,prefix=params.prefix,iconName=params.iconName,transform=params.transform,symbol=params.symbol,title=params.title,maskId=params.maskId,titleId=params.titleId,extra=params.extra,_params$watchable=params.watchable,watchable=_params$watchable===void 0?false:_params$watchable;var _ref=mask.found?mask:main,width=_ref.width,height=_ref.height;var isUploadedIcon=prefix==='fak';var widthClass=isUploadedIcon?'':"fa-w-".concat(Math.ceil(width/height*16));var attrClass=[config.replacementClass,iconName?"".concat(config.familyPrefix,"-").concat(iconName):'',widthClass].filter(function(c){return extra.classes.indexOf(c)===-1;}).filter(function(c){return c!==''||!!c;}).concat(extra.classes).join(' ');var content={children:[],attributes:_objectSpread$1$1({},extra.attributes,{'data-prefix':prefix,'data-icon':iconName,'class':attrClass,'role':extra.attributes.role||'img','xmlns':'http://www.w3.org/2000/svg','viewBox':"0 0 ".concat(width," ").concat(height)})};var uploadedIconWidthStyle=isUploadedIcon&&!~extra.classes.indexOf('fa-fw')?{width:"".concat(width/height*16*0.0625,"em")}:{};if(watchable){content.attributes[DATA_FA_I2SVG]='';}if(title)content.children.push({tag:'title',attributes:{id:content.attributes['aria-labelledby']||"title-".concat(titleId||nextUniqueId())},children:[title]});var args=_objectSpread$1$1({},content,{prefix:prefix,iconName:iconName,main:main,mask:mask,maskId:maskId,transform:transform,symbol:symbol,styles:_objectSpread$1$1({},uploadedIconWidthStyle,extra.styles)});var _ref2=mask.found&&main.found?makeIconMasking(args):makeIconStandard(args),children=_ref2.children,attributes=_ref2.attributes;args.children=children;args.attributes=attributes;if(symbol){return asSymbol(args);}else {return asIcon(args);}}var noop$1$1=function noop(){};config.measurePerformance&&PERFORMANCE&&PERFORMANCE.mark&&PERFORMANCE.measure?PERFORMANCE:{mark:noop$1$1,measure:noop$1$1};/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */var bindInternal4=function bindInternal4(func,thisContext){return function(a,b,c,d){return func.call(thisContext,a,b,c,d);};};/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */var reduce=function fastReduceObject(subject,fn,initialValue,thisContext){var keys=Object.keys(subject),length=keys.length,iterator=thisContext!==undefined?bindInternal4(fn,thisContext):fn,i,key,result;if(initialValue===undefined){i=1;result=subject[keys[0]];}else {i=0;result=initialValue;}for(;i<length;i++){key=keys[i];result=iterator(result,subject[key],key,subject);}return result;};function defineIcons(prefix,icons){var params=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _params$skipHooks=params.skipHooks,skipHooks=_params$skipHooks===void 0?false:_params$skipHooks;var normalized=Object.keys(icons).reduce(function(acc,iconName){var icon=icons[iconName];var expanded=!!icon.icon;if(expanded){acc[icon.iconName]=icon.icon;}else {acc[iconName]=icon;}return acc;},{});if(typeof namespace.hooks.addPack==='function'&&!skipHooks){namespace.hooks.addPack(prefix,normalized);}else {namespace.styles[prefix]=_objectSpread$1$1({},namespace.styles[prefix]||{},normalized);}/**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */if(prefix==='fas'){defineIcons('fa',icons);}}var styles=namespace.styles,shims=namespace.shims;var build=function build(){var lookup=function lookup(reducer){return reduce(styles,function(o,style,prefix){o[prefix]=reduce(style,reducer,{});return o;},{});};lookup(function(acc,icon,iconName){if(icon[3]){acc[icon[3]]=iconName;}return acc;});lookup(function(acc,icon,iconName){var ligatures=icon[2];acc[iconName]=iconName;ligatures.forEach(function(ligature){acc[ligature]=iconName;});return acc;});var hasRegular=('far'in styles);reduce(shims,function(acc,shim){var oldName=shim[0];var prefix=shim[1];var iconName=shim[2];if(prefix==='far'&&!hasRegular){prefix='fas';}acc[oldName]={prefix:prefix,iconName:iconName};return acc;},{});};build();namespace.styles;function iconFromMapping(mapping,prefix,iconName){if(mapping&&mapping[prefix]&&mapping[prefix][iconName]){return {prefix:prefix,iconName:iconName,icon:mapping[prefix][iconName]};}}function toHtml(abstractNodes){var tag=abstractNodes.tag,_abstractNodes$attrib=abstractNodes.attributes,attributes=_abstractNodes$attrib===void 0?{}:_abstractNodes$attrib,_abstractNodes$childr=abstractNodes.children,children=_abstractNodes$childr===void 0?[]:_abstractNodes$childr;if(typeof abstractNodes==='string'){return htmlEscape(abstractNodes);}else {return "<".concat(tag," ").concat(joinAttributes(attributes),">").concat(children.map(toHtml).join(''),"</").concat(tag,">");}}function MissingIcon(error){this.name='MissingIcon';this.message=error||'Icon unavailable';this.stack=new Error().stack;}MissingIcon.prototype=Object.create(Error.prototype);MissingIcon.prototype.constructor=MissingIcon;var FILL={fill:'currentColor'};var ANIMATION_BASE={attributeType:'XML',repeatCount:'indefinite',dur:'2s'};({tag:'path',attributes:_objectSpread$1$1({},FILL,{d:'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'})});var OPACITY_ANIMATE=_objectSpread$1$1({},ANIMATION_BASE,{attributeName:'opacity'});({tag:'circle',attributes:_objectSpread$1$1({},FILL,{cx:'256',cy:'364',r:'28'}),children:[{tag:'animate',attributes:_objectSpread$1$1({},ANIMATION_BASE,{attributeName:'r',values:'28;14;28;28;14;28;'})},{tag:'animate',attributes:_objectSpread$1$1({},OPACITY_ANIMATE,{values:'1;0;1;1;0;1;'})}]});({tag:'path',attributes:_objectSpread$1$1({},FILL,{opacity:'1',d:'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'}),children:[{tag:'animate',attributes:_objectSpread$1$1({},OPACITY_ANIMATE,{values:'1;0;0;0;0;1;'})}]});({tag:'path',attributes:_objectSpread$1$1({},FILL,{opacity:'0',d:'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'}),children:[{tag:'animate',attributes:_objectSpread$1$1({},OPACITY_ANIMATE,{values:'0;0;1;1;0;0;'})}]});namespace.styles;function asFoundIcon(icon){var width=icon[0];var height=icon[1];var _icon$slice=icon.slice(4),_icon$slice2=_slicedToArray(_icon$slice,1),vectorData=_icon$slice2[0];var element=null;if(Array.isArray(vectorData)){element={tag:'g',attributes:{"class":"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.GROUP)},children:[{tag:'path',attributes:{"class":"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.SECONDARY),fill:'currentColor',d:vectorData[0]}},{tag:'path',attributes:{"class":"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.PRIMARY),fill:'currentColor',d:vectorData[1]}}]};}else {element={tag:'path',attributes:{fill:'currentColor',d:vectorData}};}return {found:true,width:width,height:height,icon:element};}namespace.styles;var baseStyles="svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";function css(){var dfp=DEFAULT_FAMILY_PREFIX;var drc=DEFAULT_REPLACEMENT_CLASS;var fp=config.familyPrefix;var rc=config.replacementClass;var s=baseStyles;if(fp!==dfp||rc!==drc){var dPatt=new RegExp("\\.".concat(dfp,"\\-"),'g');var customPropPatt=new RegExp("\\--".concat(dfp,"\\-"),'g');var rPatt=new RegExp("\\.".concat(drc),'g');s=s.replace(dPatt,".".concat(fp,"-")).replace(customPropPatt,"--".concat(fp,"-")).replace(rPatt,".".concat(rc));}return s;}var Library=/*#__PURE__*/function(){function Library(){_classCallCheck(this,Library);this.definitions={};}_createClass(Library,[{key:"add",value:function add(){var _this=this;for(var _len=arguments.length,definitions=new Array(_len),_key=0;_key<_len;_key++){definitions[_key]=arguments[_key];}var additions=definitions.reduce(this._pullDefinitions,{});Object.keys(additions).forEach(function(key){_this.definitions[key]=_objectSpread$1$1({},_this.definitions[key]||{},additions[key]);defineIcons(key,additions[key]);build();});}},{key:"reset",value:function reset(){this.definitions={};}},{key:"_pullDefinitions",value:function _pullDefinitions(additions,definition){var normalized=definition.prefix&&definition.iconName&&definition.icon?{0:definition}:definition;Object.keys(normalized).map(function(key){var _normalized$key=normalized[key],prefix=_normalized$key.prefix,iconName=_normalized$key.iconName,icon=_normalized$key.icon;if(!additions[prefix])additions[prefix]={};additions[prefix][iconName]=icon;});return additions;}}]);return Library;}();function ensureCss(){if(config.autoAddCss&&!_cssInserted){insertCss(css());_cssInserted=true;}}function apiObject(val,abstractCreator){Object.defineProperty(val,'abstract',{get:abstractCreator});Object.defineProperty(val,'html',{get:function get(){return val["abstract"].map(function(a){return toHtml(a);});}});Object.defineProperty(val,'node',{get:function get(){if(!IS_DOM)return;var container=DOCUMENT.createElement('div');container.innerHTML=val.html;return container.children;}});return val;}function findIconDefinition(iconLookup){var _iconLookup$prefix=iconLookup.prefix,prefix=_iconLookup$prefix===void 0?'fa':_iconLookup$prefix,iconName=iconLookup.iconName;if(!iconName)return;return iconFromMapping(library.definitions,prefix,iconName)||iconFromMapping(namespace.styles,prefix,iconName);}function resolveIcons(next){return function(maybeIconDefinition){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var iconDefinition=(maybeIconDefinition||{}).icon?maybeIconDefinition:findIconDefinition(maybeIconDefinition||{});var mask=params.mask;if(mask){mask=(mask||{}).icon?mask:findIconDefinition(mask||{});}return next(iconDefinition,_objectSpread$1$1({},params,{mask:mask}));};}var library=new Library();var _cssInserted=false;var icon=resolveIcons(function(iconDefinition){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _params$transform=params.transform,transform=_params$transform===void 0?meaninglessTransform:_params$transform,_params$symbol=params.symbol,symbol=_params$symbol===void 0?false:_params$symbol,_params$mask=params.mask,mask=_params$mask===void 0?null:_params$mask,_params$maskId=params.maskId,maskId=_params$maskId===void 0?null:_params$maskId,_params$title=params.title,title=_params$title===void 0?null:_params$title,_params$titleId=params.titleId,titleId=_params$titleId===void 0?null:_params$titleId,_params$classes=params.classes,classes=_params$classes===void 0?[]:_params$classes,_params$attributes=params.attributes,attributes=_params$attributes===void 0?{}:_params$attributes,_params$styles=params.styles,styles=_params$styles===void 0?{}:_params$styles;if(!iconDefinition)return;var prefix=iconDefinition.prefix,iconName=iconDefinition.iconName,icon=iconDefinition.icon;return apiObject(_objectSpread$1$1({type:'icon'},iconDefinition),function(){ensureCss();if(config.autoA11y){if(title){attributes['aria-labelledby']="".concat(config.replacementClass,"-title-").concat(titleId||nextUniqueId());}else {attributes['aria-hidden']='true';attributes['focusable']='false';}}return makeInlineSvgAbstract({icons:{main:asFoundIcon(icon),mask:mask?asFoundIcon(mask.icon):{found:false,width:null,height:null,icon:{}}},prefix:prefix,iconName:iconName,transform:_objectSpread$1$1({},meaninglessTransform,transform),symbol:symbol,title:title,maskId:maskId,titleId:titleId,extra:{attributes:attributes,styles:styles,classes:classes}});});});var _excluded$1=["icon","large","xl","xxl","small","className","raw"];/**
 * Render a fontawesome icon as a React element
 *
 * @param {any}     iconDefinition  The SVG icon from @fortawesome/free-solid-svg-icons
 * @param {boolean} large           render large icon
 * @param {boolean} xl              render extra-large icon
 * @param {boolean} xxl             render huge icon
 * @param {boolean} small           render a small icon
 * @param {string}  className       Pass custom CSS classes to the element
 * @param {boolean} raw             Skip passing the default "ghwp-fa-icon" class
 * @param props
 * @return {*}
 * @constructor
 */var FontAwesomeIcon$1=function FontAwesomeIcon(_ref){var iconDefinition=_ref.icon,_ref$large=_ref.large,large=_ref$large===void 0?false:_ref$large,_ref$xl=_ref.xl,xl=_ref$xl===void 0?false:_ref$xl,_ref$xxl=_ref.xxl,xxl=_ref$xxl===void 0?false:_ref$xxl,_ref$small=_ref.small,small=_ref$small===void 0?false:_ref$small,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className,_ref$raw=_ref.raw,raw=_ref$raw===void 0?false:_ref$raw,props=_objectWithoutProperties(_ref,_excluded$1);if(iconDefinition){return/*#__PURE__*/React.createElement("span",_extends$1({className:classnames$1([className,{'ghwp-fa-icon':!raw,'ghwp-fa-large':large===true,'ghwp-fa-larger':xl===true,'ghwp-fa-largest':xxl===true,'ghwp-fa-small':small===true}]),dangerouslySetInnerHTML:{__html:icon(iconDefinition).html.pop()}},props));}};var faCog$1={};(function(exports){Object.defineProperty(exports,'__esModule',{value:true});var prefix='fas';var iconName='cog';var width=512;var height=512;var ligatures=[];var unicode='f013';var svgPathData='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z';exports.definition={prefix:prefix,iconName:iconName,icon:[width,height,ligatures,unicode,svgPathData]};exports.faCog=exports.definition;exports.prefix=prefix;exports.iconName=iconName;exports.width=width;exports.height=height;exports.ligatures=ligatures;exports.unicode=unicode;exports.svgPathData=svgPathData;})(faCog$1);components.Button;var internalObjectKeys=objectKeysInternal;var enumBugKeys$1=enumBugKeys$3;// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$4=Object.keys||function keys(O){return internalObjectKeys(O,enumBugKeys$1);};var DESCRIPTORS$a=descriptors;var definePropertyModule$4=objectDefineProperty;var anObject$c=anObject$f;var objectKeys$3=objectKeys$4;// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties=DESCRIPTORS$a?Object.defineProperties:function defineProperties(O,Properties){anObject$c(O);var keys=objectKeys$3(Properties);var length=keys.length;var index=0;var key;while(length>index){definePropertyModule$4.f(O,key=keys[index++],Properties[key]);}return O;};var getBuiltIn$4=getBuiltIn$7;var html$2=getBuiltIn$4('document','documentElement');var anObject$b=anObject$f;var defineProperties$1=objectDefineProperties;var enumBugKeys=enumBugKeys$3;var hiddenKeys$1=hiddenKeys$5;var html$1=html$2;var documentCreateElement=documentCreateElement$1;var sharedKey$1=sharedKey$3;var GT='>';var LT='<';var PROTOTYPE$1='prototype';var SCRIPT='script';var IE_PROTO=sharedKey$1('IE_PROTO');var EmptyConstructor=function EmptyConstructor(){/* empty */};var scriptTag=function scriptTag(content){return LT+SCRIPT+GT+content+LT+'/'+SCRIPT+GT;};// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX=function NullProtoObjectViaActiveX(activeXDocument){activeXDocument.write(scriptTag(''));activeXDocument.close();var temp=activeXDocument.parentWindow.Object;activeXDocument=null;// avoid memory leak
return temp;};// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame=function NullProtoObjectViaIFrame(){// Thrash, waste and sodomy: IE GC bug
var iframe=documentCreateElement('iframe');var JS='java'+SCRIPT+':';var iframeDocument;iframe.style.display='none';html$1.appendChild(iframe);// https://github.com/zloirock/core-js/issues/475
iframe.src=String(JS);iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(scriptTag('document.F=Object'));iframeDocument.close();return iframeDocument.F;};// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;var _NullProtoObject=function NullProtoObject(){try{/* global ActiveXObject -- old IE */activeXDocument=document.domain&&new ActiveXObject('htmlfile');}catch(error){/* ignore */}_NullProtoObject=activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame();var length=enumBugKeys.length;while(length--){delete _NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];}return _NullProtoObject();};hiddenKeys$1[IE_PROTO]=true;// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate=Object.create||function create(O,Properties){var result;if(O!==null){EmptyConstructor[PROTOTYPE$1]=anObject$b(O);result=new EmptyConstructor();EmptyConstructor[PROTOTYPE$1]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_NullProtoObject();return Properties===undefined?result:defineProperties$1(result,Properties);};var aFunction$4=aFunction$6;var isObject$7=isObject$e;var slice$1=[].slice;var factories={};var construct=function construct(C,argsLength,args){if(!(argsLength in factories)){for(var list=[],i=0;i<argsLength;i++){list[i]='a['+i+']';}// eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
factories[argsLength]=Function('C,a','return new C('+list.join(',')+')');}return factories[argsLength](C,args);};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind=Function.bind||function bind(that/* , ...args */){var fn=aFunction$4(this);var partArgs=slice$1.call(arguments,1);var boundFunction=function bound()/* args... */{var args=partArgs.concat(slice$1.call(arguments));return this instanceof boundFunction?construct(fn,args.length,args):fn.apply(that,args);};if(isObject$7(fn.prototype))boundFunction.prototype=fn.prototype;return boundFunction;};var $$g=_export;var getBuiltIn$3=getBuiltIn$7;var aFunction$3=aFunction$6;var anObject$a=anObject$f;var isObject$6=isObject$e;var create$2=objectCreate;var bind$4=functionBind;var fails$c=fails$k;var nativeConstruct=getBuiltIn$3('Reflect','construct');// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG=fails$c(function(){function F(){/* empty */}return !(nativeConstruct(function(){/* empty */},[],F)instanceof F);});var ARGS_BUG=!fails$c(function(){nativeConstruct(function(){/* empty */});});var FORCED$3=NEW_TARGET_BUG||ARGS_BUG;$$g({target:'Reflect',stat:true,forced:FORCED$3,sham:FORCED$3},{construct:function construct(Target,args/* , newTarget */){aFunction$3(Target);anObject$a(args);var newTarget=arguments.length<3?Target:aFunction$3(arguments[2]);if(ARGS_BUG&&!NEW_TARGET_BUG)return nativeConstruct(Target,args,newTarget);if(Target==newTarget){// w/o altered newTarget, optimization for 0-4 arguments
switch(args.length){case 0:return new Target();case 1:return new Target(args[0]);case 2:return new Target(args[0],args[1]);case 3:return new Target(args[0],args[1],args[2]);case 4:return new Target(args[0],args[1],args[2],args[3]);}// w/o altered newTarget, lot of arguments case
var $args=[null];$args.push.apply($args,args);return new(bind$4.apply(Target,$args))();}// with altered newTarget, not support built-in constructors
var proto=newTarget.prototype;var instance=create$2(isObject$6(proto)?proto:Object.prototype);var result=Function.apply.call(Target,instance,args);return isObject$6(result)?result:instance;}});var $$f=_export;var bind$3=functionBind;// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$f({target:'Function',proto:true},{bind:bind$3});var $$e=_export;var global$b=global$n;var userAgent$2=engineUserAgent;var slice=[].slice;var MSIE=/MSIE .\./.test(userAgent$2);// <- dirty ie9- check
var wrap$1=function wrap$1(scheduler){return function(handler,timeout/* , ...arguments */){var boundArgs=arguments.length>2;var args=boundArgs?slice.call(arguments,2):undefined;return scheduler(boundArgs?function(){// eslint-disable-next-line no-new-func -- spec requirement
(typeof handler=='function'?handler:Function(handler)).apply(this,args);}:handler,timeout);};};// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$$e({global:true,bind:true,forced:MSIE},{// `setTimeout` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
setTimeout:wrap$1(global$b.setTimeout),// `setInterval` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
setInterval:wrap$1(global$b.setInterval)});var isObject$5=isObject$e;var aPossiblePrototype$1=function aPossiblePrototype$1(it){if(!isObject$5(it)&&it!==null){throw TypeError("Can't set "+String(it)+' as a prototype');}return it;};/* eslint-disable no-proto -- safe */var anObject$9=anObject$f;var aPossiblePrototype=aPossiblePrototype$1;// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf=Object.setPrototypeOf||('__proto__'in{}?function(){var CORRECT_SETTER=false;var test={};var setter;try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
setter=Object.getOwnPropertyDescriptor(Object.prototype,'__proto__').set;setter.call(test,[]);CORRECT_SETTER=test instanceof Array;}catch(error){/* empty */}return function setPrototypeOf(O,proto){anObject$9(O);aPossiblePrototype(proto);if(CORRECT_SETTER)setter.call(O,proto);else O.__proto__=proto;return O;};}():undefined);var isObject$4=isObject$e;var setPrototypeOf$1=objectSetPrototypeOf;// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1=function inheritIfRequired$1($this,dummy,Wrapper){var NewTarget,NewTargetPrototype;if(// it can work only with native `setPrototypeOf`
setPrototypeOf$1&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
typeof(NewTarget=dummy.constructor)=='function'&&NewTarget!==Wrapper&&isObject$4(NewTargetPrototype=NewTarget.prototype)&&NewTargetPrototype!==Wrapper.prototype)setPrototypeOf$1($this,NewTargetPrototype);return $this;};var isObject$3=isObject$e;var classof$5=classofRaw$1;var wellKnownSymbol$e=wellKnownSymbol$h;var MATCH$1=wellKnownSymbol$e('match');// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp=function isRegexp(it){var isRegExp;return isObject$3(it)&&((isRegExp=it[MATCH$1])!==undefined?!!isRegExp:classof$5(it)=='RegExp');};var anObject$8=anObject$f;// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1=function regexpFlags$1(){var that=anObject$8(this);var result='';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.dotAll)result+='s';if(that.unicode)result+='u';if(that.sticky)result+='y';return result;};var regexpStickyHelpers$1={};var fails$b=fails$k;// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE$1=function RE(s,f){return RegExp(s,f);};regexpStickyHelpers$1.UNSUPPORTED_Y=fails$b(function(){var re=RE$1('a','y');re.lastIndex=2;return re.exec('abcd')!=null;});regexpStickyHelpers$1.BROKEN_CARET=fails$b(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var re=RE$1('^r','gy');re.lastIndex=2;return re.exec('str')!=null;});var getBuiltIn$2=getBuiltIn$7;var definePropertyModule$3=objectDefineProperty;var wellKnownSymbol$d=wellKnownSymbol$h;var DESCRIPTORS$9=descriptors;var SPECIES$3=wellKnownSymbol$d('species');var setSpecies$2=function setSpecies$2(CONSTRUCTOR_NAME){var Constructor=getBuiltIn$2(CONSTRUCTOR_NAME);var defineProperty=definePropertyModule$3.f;if(DESCRIPTORS$9&&Constructor&&!Constructor[SPECIES$3]){defineProperty(Constructor,SPECIES$3,{configurable:true,get:function get(){return this;}});}};var fails$a=fails$k;var regexpUnsupportedDotAll$1=fails$a(function(){// babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var re=RegExp('.',_typeof$1('').charAt(0));return !(re.dotAll&&re.exec('\n')&&re.flags==='s');});var fails$9=fails$k;var regexpUnsupportedNcg$1=fails$9(function(){// babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
var re=RegExp('(?<a>b)',_typeof$1('').charAt(5));return re.exec('b').groups.a!=='b'||'b'.replace(re,'$<a>c')!=='bc';});var DESCRIPTORS$8=descriptors;var global$a=global$n;var isForced$1=isForced_1;var inheritIfRequired=inheritIfRequired$1;var createNonEnumerableProperty$3=createNonEnumerableProperty$8;var defineProperty$5=objectDefineProperty.f;var getOwnPropertyNames=objectGetOwnPropertyNames.f;var isRegExp$1=isRegexp;var getFlags=regexpFlags$1;var stickyHelpers$1=regexpStickyHelpers$1;var redefine$6=redefine$8.exports;var fails$8=fails$k;var has$3=has$a;var enforceInternalState=internalState.enforce;var setSpecies$1=setSpecies$2;var wellKnownSymbol$c=wellKnownSymbol$h;var UNSUPPORTED_DOT_ALL$1=regexpUnsupportedDotAll$1;var UNSUPPORTED_NCG$1=regexpUnsupportedNcg$1;var MATCH=wellKnownSymbol$c('match');var NativeRegExp=global$a.RegExp;var RegExpPrototype$2=NativeRegExp.prototype;// TODO: Use only propper RegExpIdentifierName
var IS_NCG=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;var re1=/a/g;var re2=/a/g;// "new" should create a new object, old webkit bug
var CORRECT_NEW=new NativeRegExp(re1)!==re1;var UNSUPPORTED_Y$1=stickyHelpers$1.UNSUPPORTED_Y;var BASE_FORCED=DESCRIPTORS$8&&(!CORRECT_NEW||UNSUPPORTED_Y$1||UNSUPPORTED_DOT_ALL$1||UNSUPPORTED_NCG$1||fails$8(function(){re2[MATCH]=false;// RegExp constructor can alter flags and IsRegExp works correct with @@match
return NativeRegExp(re1)!=re1||NativeRegExp(re2)==re2||NativeRegExp(re1,'i')!='/a/i';}));var handleDotAll=function handleDotAll(string){var length=string.length;var index=0;var result='';var brackets=false;var chr;for(;index<=length;index++){chr=string.charAt(index);if(chr==='\\'){result+=chr+string.charAt(++index);continue;}if(!brackets&&chr==='.'){result+='[\\s\\S]';}else {if(chr==='['){brackets=true;}else if(chr===']'){brackets=false;}result+=chr;}}return result;};var handleNCG=function handleNCG(string){var length=string.length;var index=0;var result='';var named=[];var names={};var brackets=false;var ncg=false;var groupid=0;var groupname='';var chr;for(;index<=length;index++){chr=string.charAt(index);if(chr==='\\'){chr=chr+string.charAt(++index);}else if(chr===']'){brackets=false;}else if(!brackets)switch(true){case chr==='[':brackets=true;break;case chr==='(':if(IS_NCG.test(string.slice(index+1))){index+=2;ncg=true;}result+=chr;groupid++;continue;case chr==='>'&&ncg:if(groupname===''||has$3(names,groupname)){throw new SyntaxError('Invalid capture group name');}names[groupname]=true;named.push([groupname,groupid]);ncg=false;groupname='';continue;}if(ncg)groupname+=chr;else result+=chr;}return [result,named];};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(isForced$1('RegExp',BASE_FORCED)){var RegExpWrapper=function RegExp(pattern,flags){var thisIsRegExp=this instanceof RegExpWrapper;var patternIsRegExp=isRegExp$1(pattern);var flagsAreUndefined=flags===undefined;var groups=[];var rawPattern=pattern;var rawFlags,dotAll,sticky,handled,result,state;if(!thisIsRegExp&&patternIsRegExp&&flagsAreUndefined&&pattern.constructor===RegExpWrapper){return pattern;}if(patternIsRegExp||pattern instanceof RegExpWrapper){pattern=pattern.source;if(flagsAreUndefined)flags='flags'in rawPattern?rawPattern.flags:getFlags.call(rawPattern);}pattern=pattern===undefined?'':String(pattern);flags=flags===undefined?'':String(flags);rawPattern=pattern;if(UNSUPPORTED_DOT_ALL$1&&'dotAll'in re1){dotAll=!!flags&&flags.indexOf('s')>-1;if(dotAll)flags=flags.replace(/s/g,'');}rawFlags=flags;if(UNSUPPORTED_Y$1&&'sticky'in re1){sticky=!!flags&&flags.indexOf('y')>-1;if(sticky)flags=flags.replace(/y/g,'');}if(UNSUPPORTED_NCG$1){handled=handleNCG(pattern);pattern=handled[0];groups=handled[1];}result=inheritIfRequired(NativeRegExp(pattern,flags),thisIsRegExp?this:RegExpPrototype$2,RegExpWrapper);if(dotAll||sticky||groups.length){state=enforceInternalState(result);if(dotAll){state.dotAll=true;state.raw=RegExpWrapper(handleDotAll(pattern),rawFlags);}if(sticky)state.sticky=true;if(groups.length)state.groups=groups;}if(pattern!==rawPattern)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
createNonEnumerableProperty$3(result,'source',rawPattern===''?'(?:)':rawPattern);}catch(error){/* empty */}return result;};var proxy=function proxy(key){key in RegExpWrapper||defineProperty$5(RegExpWrapper,key,{configurable:true,get:function get(){return NativeRegExp[key];},set:function set(it){NativeRegExp[key]=it;}});};for(var keys$1=getOwnPropertyNames(NativeRegExp),index$3=0;keys$1.length>index$3;){proxy(keys$1[index$3++]);}RegExpPrototype$2.constructor=RegExpWrapper;RegExpWrapper.prototype=RegExpPrototype$2;redefine$6(global$a,'RegExp',RegExpWrapper);}// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$1('RegExp');/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */var regexpFlags$2=regexpFlags$1;var stickyHelpers$2=regexpStickyHelpers$1;var shared$1=shared$5.exports;var create$1=objectCreate;var getInternalState$2=internalState.get;var UNSUPPORTED_DOT_ALL$2=regexpUnsupportedDotAll$1;var UNSUPPORTED_NCG$2=regexpUnsupportedNcg$1;var nativeExec$1=RegExp.prototype.exec;var nativeReplace$1=shared$1('native-string-replace',String.prototype.replace);var patchedExec$1=nativeExec$1;var UPDATES_LAST_INDEX_WRONG$1=function(){var re1=/a/;var re2=/b*/g;nativeExec$1.call(re1,'a');nativeExec$1.call(re2,'a');return re1.lastIndex!==0||re2.lastIndex!==0;}();var UNSUPPORTED_Y$2=stickyHelpers$2.UNSUPPORTED_Y||stickyHelpers$2.BROKEN_CARET;// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED$1=/()??/.exec('')[1]!==undefined;var PATCH$1=UPDATES_LAST_INDEX_WRONG$1||NPCG_INCLUDED$1||UNSUPPORTED_Y$2||UNSUPPORTED_DOT_ALL$2||UNSUPPORTED_NCG$2;if(PATCH$1){// eslint-disable-next-line max-statements -- TODO
patchedExec$1=function exec(str){var re=this;var state=getInternalState$2(re);var raw=state.raw;var result,reCopy,lastIndex,match,i,object,group;if(raw){raw.lastIndex=re.lastIndex;result=patchedExec$1.call(raw,str);re.lastIndex=raw.lastIndex;return result;}var groups=state.groups;var sticky=UNSUPPORTED_Y$2&&re.sticky;var flags=regexpFlags$2.call(re);var source=re.source;var charsAdded=0;var strCopy=str;if(sticky){flags=flags.replace('y','');if(flags.indexOf('g')===-1){flags+='g';}strCopy=String(str).slice(re.lastIndex);// Support anchored sticky behavior.
if(re.lastIndex>0&&(!re.multiline||re.multiline&&str[re.lastIndex-1]!=='\n')){source='(?: '+source+')';strCopy=' '+strCopy;charsAdded++;}// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
reCopy=new RegExp('^(?:'+source+')',flags);}if(NPCG_INCLUDED$1){reCopy=new RegExp('^'+source+'$(?!\\s)',flags);}if(UPDATES_LAST_INDEX_WRONG$1)lastIndex=re.lastIndex;match=nativeExec$1.call(sticky?reCopy:re,strCopy);if(sticky){if(match){match.input=match.input.slice(charsAdded);match[0]=match[0].slice(charsAdded);match.index=re.lastIndex;re.lastIndex+=match[0].length;}else re.lastIndex=0;}else if(UPDATES_LAST_INDEX_WRONG$1&&match){re.lastIndex=re.global?match.index+match[0].length:lastIndex;}if(NPCG_INCLUDED$1&&match&&match.length>1){// Fix browsers whose `exec` methods don't consistently return `undefined`
// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
nativeReplace$1.call(match[0],reCopy,function(){for(i=1;i<arguments.length-2;i++){if(arguments[i]===undefined)match[i]=undefined;}});}if(match&&groups){match.groups=object=create$1(null);for(i=0;i<groups.length;i++){group=groups[i];object[group[0]]=match[group[1]];}}return match;};}var regexpExec$2=patchedExec$1;var $$d=_export;var exec$1=regexpExec$2;// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$d({target:'RegExp',proto:true,forced:/./.exec!==exec$1},{exec:exec$1});var redefine$5=redefine$8.exports;var anObject$7=anObject$f;var fails$7=fails$k;var flags=regexpFlags$1;var TO_STRING='toString';var RegExpPrototype$1=RegExp.prototype;var nativeToString=RegExpPrototype$1[TO_STRING];var NOT_GENERIC=fails$7(function(){return nativeToString.call({source:'a',flags:'b'})!='/a/b';});// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME=nativeToString.name!=TO_STRING;// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if(NOT_GENERIC||INCORRECT_NAME){redefine$5(RegExp.prototype,TO_STRING,function toString(){var R=anObject$7(this);var p=String(R.source);var rf=R.flags;var f=String(rf===undefined&&R instanceof RegExp&&!('flags'in RegExpPrototype$1)?flags.call(R):rf);return '/'+p+'/'+f;},{unsafe:true});}var $$c=_export;var $filter=arrayIteration.filter;var arrayMethodHasSpeciesSupport=arrayMethodHasSpeciesSupport$2;var HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('filter');// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$c({target:'Array',proto:true,forced:!HAS_SPECIES_SUPPORT},{filter:function filter(callbackfn/* , thisArg */){return $filter(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});// TODO: Remove from `core-js@4` since it's moved to entry points
var redefine$4=redefine$8.exports;var regexpExec$1=regexpExec$2;var fails$6=fails$k;var wellKnownSymbol$b=wellKnownSymbol$h;var createNonEnumerableProperty$2=createNonEnumerableProperty$8;var SPECIES$2=wellKnownSymbol$b('species');var RegExpPrototype=RegExp.prototype;var fixRegexpWellKnownSymbolLogic=function fixRegexpWellKnownSymbolLogic(KEY,exec,FORCED,SHAM){var SYMBOL=wellKnownSymbol$b(KEY);var DELEGATES_TO_SYMBOL=!fails$6(function(){// String methods call symbol-named RegEp methods
var O={};O[SYMBOL]=function(){return 7;};return ''[KEY](O)!=7;});var DELEGATES_TO_EXEC=DELEGATES_TO_SYMBOL&&!fails$6(function(){// Symbol-named RegExp methods call .exec
var execCalled=false;var re=/a/;if(KEY==='split'){// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
re={};// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
re.constructor={};re.constructor[SPECIES$2]=function(){return re;};re.flags='';re[SYMBOL]=/./[SYMBOL];}re.exec=function(){execCalled=true;return null;};re[SYMBOL]('');return !execCalled;});if(!DELEGATES_TO_SYMBOL||!DELEGATES_TO_EXEC||FORCED){var nativeRegExpMethod=/./[SYMBOL];var methods=exec(SYMBOL,''[KEY],function(nativeMethod,regexp,str,arg2,forceStringMethod){var $exec=regexp.exec;if($exec===regexpExec$1||$exec===RegExpPrototype.exec){if(DELEGATES_TO_SYMBOL&&!forceStringMethod){// The native String method already delegates to @@method (this
// polyfilled function), leasing to infinite recursion.
// We avoid it by directly calling the native @@method method.
return {done:true,value:nativeRegExpMethod.call(regexp,str,arg2)};}return {done:true,value:nativeMethod.call(str,regexp,arg2)};}return {done:false};});redefine$4(String.prototype,KEY,methods[0]);redefine$4(RegExpPrototype,SYMBOL,methods[1]);}if(SHAM)createNonEnumerableProperty$2(RegExpPrototype[SYMBOL],'sham',true);};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue$1=Object.is||function is(x,y){// eslint-disable-next-line no-self-compare -- NaN check
return x===y?x!==0||1/x===1/y:x!=x&&y!=y;};var classof$4=classofRaw$1;var regexpExec$3=regexpExec$2;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract=function regexpExecAbstract(R,S){var exec=R.exec;if(typeof exec==='function'){var result=exec.call(R,S);if(_typeof$1(result)!=='object'){throw TypeError('RegExp exec method returned something other than an Object or null');}return result;}if(classof$4(R)!=='RegExp'){throw TypeError('RegExp#exec called on incompatible receiver');}return regexpExec$3.call(R,S);};var fixRegExpWellKnownSymbolLogic$1=fixRegexpWellKnownSymbolLogic;var anObject$6=anObject$f;var requireObjectCoercible$3=requireObjectCoercible$7;var sameValue=sameValue$1;var regExpExec$1=regexpExecAbstract;// @@search logic
fixRegExpWellKnownSymbolLogic$1('search',function(SEARCH,nativeSearch,maybeCallNative){return [// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function search(regexp){var O=requireObjectCoercible$3(this);var searcher=regexp==undefined?undefined:regexp[SEARCH];return searcher!==undefined?searcher.call(regexp,O):new RegExp(regexp)[SEARCH](String(O));},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(string){var res=maybeCallNative(nativeSearch,this,string);if(res.done)return res.value;var rx=anObject$6(this);var S=String(string);var previousLastIndex=rx.lastIndex;if(!sameValue(previousLastIndex,0))rx.lastIndex=0;var result=regExpExec$1(rx,S);if(!sameValue(rx.lastIndex,previousLastIndex))rx.lastIndex=previousLastIndex;return result===null?-1:result.index;}];});var fails$5=fails$k;var arrayMethodIsStrict$1=function arrayMethodIsStrict$1(METHOD_NAME,argument){var method=[][METHOD_NAME];return !!method&&fails$5(function(){// eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
method.call(null,argument||function(){throw 1;},1);});};var $forEach$1=arrayIteration.forEach;var arrayMethodIsStrict=arrayMethodIsStrict$1;var STRICT_METHOD=arrayMethodIsStrict('forEach');// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach=!STRICT_METHOD?function forEach(callbackfn/* , thisArg */){return $forEach$1(this,callbackfn,arguments.length>1?arguments[1]:undefined);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
}:[].forEach;var $$b=_export;var forEach$1=arrayForEach;// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$b({target:'Array',proto:true,forced:[].forEach!=forEach$1},{forEach:forEach$1});// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var global$9=global$n;var DOMIterables=domIterables;var forEach=arrayForEach;var createNonEnumerableProperty$1=createNonEnumerableProperty$8;for(var COLLECTION_NAME in DOMIterables){var Collection=global$9[COLLECTION_NAME];var CollectionPrototype=Collection&&Collection.prototype;// some Chrome versions have non-configurable methods on DOMTokenList
if(CollectionPrototype&&CollectionPrototype.forEach!==forEach)try{createNonEnumerableProperty$1(CollectionPrototype,'forEach',forEach);}catch(error){CollectionPrototype.forEach=forEach;}}var DESCRIPTORS$7=descriptors;var objectKeys$2=objectKeys$4;var toIndexedObject$4=toIndexedObject$8;var propertyIsEnumerable$2=objectPropertyIsEnumerable.f;// `Object.{ entries, values }` methods implementation
var createMethod$2=function createMethod$2(TO_ENTRIES){return function(it){var O=toIndexedObject$4(it);var keys=objectKeys$2(O);var length=keys.length;var i=0;var result=[];var key;while(length>i){key=keys[i++];if(!DESCRIPTORS$7||propertyIsEnumerable$2.call(O,key)){result.push(TO_ENTRIES?[key,O[key]]:O[key]);}}return result;};};var objectToArray={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:createMethod$2(true),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:createMethod$2(false)};var $$a=_export;var $values=objectToArray.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$$a({target:'Object',stat:true},{values:function values(O){return $values(O);}});components.Button;components.TextControl;i18n.__;element.Component;components.Button;i18n.__;blockEditor.MediaUpload;var DESCRIPTORS$6=descriptors;var fails$4=fails$k;var objectKeys$1=objectKeys$4;var getOwnPropertySymbolsModule$1=objectGetOwnPropertySymbols;var propertyIsEnumerableModule$1=objectPropertyIsEnumerable;var toObject$2=toObject$5;var IndexedObject=indexedObject;// eslint-disable-next-line es/no-object-assign -- safe
var $assign=Object.assign;// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$4=Object.defineProperty;// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign=!$assign||fails$4(function(){// should have correct order of operations (Edge bug)
if(DESCRIPTORS$6&&$assign({b:1},$assign(defineProperty$4({},'a',{enumerable:true,get:function get(){defineProperty$4(this,'b',{value:3,enumerable:false});}}),{b:2})).b!==1)return true;// should work with symbols and should have deterministic property order (V8 bug)
var A={};var B={};// eslint-disable-next-line es/no-symbol -- safe
var symbol=Symbol();var alphabet='abcdefghijklmnopqrst';A[symbol]=7;alphabet.split('').forEach(function(chr){B[chr]=chr;});return $assign({},A)[symbol]!=7||objectKeys$1($assign({},B)).join('')!=alphabet;})?function assign(target,source){// eslint-disable-line no-unused-vars -- required for `.length`
var T=toObject$2(target);var argumentsLength=arguments.length;var index=1;var getOwnPropertySymbols=getOwnPropertySymbolsModule$1.f;var propertyIsEnumerable=propertyIsEnumerableModule$1.f;while(argumentsLength>index){var S=IndexedObject(arguments[index++]);var keys=getOwnPropertySymbols?objectKeys$1(S).concat(getOwnPropertySymbols(S)):objectKeys$1(S);var length=keys.length;var j=0;var key;while(length>j){key=keys[j++];if(!DESCRIPTORS$6||propertyIsEnumerable.call(S,key))T[key]=S[key];}}return T;}:$assign;var $$9=_export;var assign=objectAssign;// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$9({target:'Object',stat:true,forced:Object.assign!==assign},{assign:assign});/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray$1=Array.isArray;/** Used as references for various `Number` constants. */var INFINITY$2=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto$1=Symbol$1?Symbol$1.prototype:undefined,symbolToString=symbolProto$1?symbolProto$1.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray$1(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol$1(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY$2?'-0':result;}/** Used as references for various `Number` constants. */var INFINITY$1=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY$1||value===-INFINITY$1){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger$1(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag$1='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject$8(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag$1||tag==genTag||tag==asyncTag||tag==proxyTag;}/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return !!maskSrcKey&&maskSrcKey in func;}/** Used for built-in method references. */var funcProto$1=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString$1=funcProto$1.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString$1.call(func);}catch(e){}try{return func+'';}catch(e){}}return '';}/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto$b=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty$9=objectProto$b.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty$9).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject$8(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else {count=0;}return func.apply(undefined,arguments);};}/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}var defineProperty$3=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty$3?identity:function(func,string){return defineProperty$3(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString);/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER$1=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=_typeof$1(value);length=length==null?MAX_SAFE_INTEGER$1:length;return !!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty$3){defineProperty$3(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else {object[key]=value;}}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/** Used for built-in method references. */var objectProto$a=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$8=objectProto$a.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty$8.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/** Used for built-in method references. */var objectProto$9=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto$9;return value===proto;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/** `Object#toString` result references. */var argsTag$2='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag$2;}/** Used for built-in method references. */var objectProto$8=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$7=objectProto$8.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable$1=objectProto$8.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty$7.call(value,'callee')&&!propertyIsEnumerable$1.call(value,'callee');};/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}/** Detect free variable `exports`. */var freeExports$1=(typeof exports==="undefined"?"undefined":_typeof$1(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$1=freeExports$1&&(typeof module==="undefined"?"undefined":_typeof$1(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1;/** Built-in value references. */var Buffer=moduleExports$1?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/** `Object#toString` result references. */var argsTag$1='[object Arguments]',arrayTag$1='[object Array]',boolTag$1='[object Boolean]',dateTag$1='[object Date]',errorTag$1='[object Error]',funcTag='[object Function]',mapTag$2='[object Map]',numberTag$1='[object Number]',objectTag$2='[object Object]',regexpTag$2='[object RegExp]',setTag$2='[object Set]',stringTag$1='[object String]',weakMapTag$1='[object WeakMap]';var arrayBufferTag$1='[object ArrayBuffer]',dataViewTag$2='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$2]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag$2]=typedArrayTags[setTag$2]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof$1(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof$1(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/** Used for built-in method references. */var objectProto$7=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$6=objectProto$7.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray$1(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty$6.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys$1=overArg(Object.keys,Object);/** Used for built-in method references. */var objectProto$6=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$5=objectProto$6.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys$1(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$5.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/** Used for built-in method references. */var objectProto$5=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$4=objectProto$5.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject$8(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty$4.call(object,key)))){result.push(key);}}return result;}/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray$1(value)){return false;}var type=_typeof$1(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol$1(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$2='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto$4=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$3=objectProto$4.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED$2?undefined:result;}return hasOwnProperty$3.call(data,key)?data[key]:undefined;}/** Used for built-in method references. */var objectProto$3=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$2=objectProto$3.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty$2.call(data,key);}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$1='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED$1:value;return this;}/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return -1;}/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else {splice.call(data,index,1);}--this.size;return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else {data[index][1]=value;}return this;}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof$1(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/** Error message constants. */var FUNC_ERROR_TEXT$1='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT$1);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString$2(value){return value==null?'':baseToString(value);}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray$1(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString$2(value));}/** Used as references for various `Number` constants. */var INFINITY$3=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol$1(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY$3?'-0':result;}/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush$1(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/** Built-in value references. */var spreadableSymbol$1=Symbol$1?Symbol$1.isConcatSpreadable:undefined;/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function isFlattenable$1(value){return isArray$1(value)||isArguments(value)||!!(spreadableSymbol$1&&value&&value[spreadableSymbol$1]);}/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function baseFlatten$1(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable$1);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten$1(value,depth-1,predicate,isStrict,result);}else {arrayPush$1(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten$1(array,1):[];}/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return !start&&end>=length?array:baseSlice(array,start,end);}/** Used to compose unicode character classes. */var rsAstralRange$2="\\ud800-\\udfff",rsComboMarksRange$2="\\u0300-\\u036f",reComboHalfMarksRange$2="\\ufe20-\\ufe2f",rsComboSymbolsRange$2="\\u20d0-\\u20ff",rsComboRange$2=rsComboMarksRange$2+reComboHalfMarksRange$2+rsComboSymbolsRange$2,rsVarRange$2="\\ufe0e\\ufe0f";/** Used to compose unicode capture groups. */var rsZWJ$2="\\u200d";/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ$2+rsAstralRange$2+rsComboRange$2+rsVarRange$2+']');/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */function hasUnicode(string){return reHasUnicode.test(string);}/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function asciiToArray(string){return string.split('');}/** Used to compose unicode character classes. */var rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsVarRange$1="\\ufe0e\\ufe0f";/** Used to compose unicode capture groups. */var rsAstral$1='['+rsAstralRange$1+']',rsCombo$1='['+rsComboRange$1+']',rsFitz$1="\\ud83c[\\udffb-\\udfff]",rsModifier$1='(?:'+rsCombo$1+'|'+rsFitz$1+')',rsNonAstral$1='[^'+rsAstralRange$1+']',rsRegional$1="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair$1="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d";/** Used to compose unicode regexes. */var reOptMod$1=rsModifier$1+'?',rsOptVar$1='['+rsVarRange$1+']?',rsOptJoin$1='(?:'+rsZWJ$1+'(?:'+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join('|')+')'+rsOptVar$1+reOptMod$1+')*',rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1,rsSymbol$1='(?:'+[rsNonAstral$1+rsCombo$1+'?',rsCombo$1,rsRegional$1,rsSurrPair$1,rsAstral$1].join('|')+')';/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode$1=RegExp(rsFitz$1+'(?='+rsFitz$1+')|'+rsSymbol$1+rsSeq$1,'g');/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function unicodeToArray(string){return string.match(reUnicode$1)||[];}/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE$1=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE$1-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return [];}/** Used for built-in method references. */var objectProto$2=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto$2.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols$1=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols$1?stubArray:function(object){if(object==null){return [];}object=Object(object);return arrayFilter(nativeGetSymbols$1(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush$1(result,getSymbols(object));object=getPrototype(object);}return result;};/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray$1(object)?result:arrayPush$1(result,symbolsFunc(object));}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/* Built-in method references that are verified to be native. */var DataView$1=getNative(root,'DataView');/* Built-in method references that are verified to be native. */var Promise$2=getNative(root,'Promise');/* Built-in method references that are verified to be native. */var Set$1=getNative(root,'Set');/** `Object#toString` result references. */var mapTag$1='[object Map]',objectTag$1='[object Object]',promiseTag='[object Promise]',setTag$1='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag$1='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$1),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$1||Map&&getTag(new Map())!=mapTag$1||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$1&&getTag(new Set$1())!=setTag$1||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag$1?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$1;case promiseCtorString:return promiseTag;case setCtorString:return setTag$1;case weakMapCtorString:return weakMapTag;}}return result;};}var getTag$1=getTag;/** Built-in value references. */var Uint8Array=root.Uint8Array;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$3='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd$1(value){this.__data__.set(value,HASH_UNDEFINED$3);return this;}/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas$1(value){return this.__data__.has(value);}/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache$1(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache$1.prototype.add=SetCache$1.prototype.push=setCacheAdd$1;SetCache$1.prototype.has=setCacheHas$1;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas$1(cache,key){return cache.has(key);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$5,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG$3?new SetCache$1():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas$1(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray$1(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag$1='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol$1?Symbol$1.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag$1:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG$4;convert||(convert=setToArray$1);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG$2;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$3=1;/** Used for built-in method references. */var objectProto$1=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$1=objectProto$1.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$3,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty$1.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$2=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray$1(object),othIsArr=isArray$1(other),objTag=objIsArr?arrayTag:getTag$1(object),othTag=othIsArr?arrayTag:getTag$1(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG$2)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return !length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else {var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,customizer,stack):result)){return false;}}}return true;}/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject$8(value);}/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return !!length&&isLength(length)&&isIndex(key,length)&&(isArray$1(object)||isArguments(object));}/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(_typeof$1(value)=='object'){return isArray$1(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/** `Object#toString` result references. */var regexpTag='[object RegExp]';/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/* Node.js helper references. */var nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp;/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return !predicate.call(this);case 1:return !predicate.call(this,args[0]);case 2:return !predicate.call(this,args[0],args[1]);case 3:return !predicate.call(this,args[0],args[1],args[2]);}return !predicate.apply(this,args);};}/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */function baseSet(object,path,value,customizer){if(!isObject$8(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(key==='__proto__'||key==='constructor'||key==='prototype'){return object;}if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject$8(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */function pickBy(object,predicate){if(object==null){return {};}var props=arrayMap(getAllKeysIn(object),function(prop){return [prop];});predicate=baseIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */function omitBy(object,predicate){return pickBy(object,negate(baseIteratee(predicate)));}/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */var asciiSize=baseProperty('length');/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsVarRange="\\ufe0e\\ufe0f";/** Used to compose unicode capture groups. */var rsAstral='['+rsAstralRange+']',rsCombo='['+rsComboRange+']',rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ="\\u200d";/** Used to compose unicode regexes. */var reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject$8(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger$1(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString$2(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString$2(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}var RangeControl$9=components.RangeControl,TextControl$1=components.TextControl,ToggleControl$5=components.ToggleControl;var toggleWithIconStyles=function toggleWithIconStyles(highlighted){var styles={display:'flex',alignItems:'center',marginBottom:'8px',padding:'8px',border:'1px solid #ccc',justifyContent:'space-between',width:'100%'};if(highlighted){styles=Object.assign(styles,{borderColor:'#35f',borderWidth:'2px',boxShadow:'1px 1px 5px 0 #ddd'});}return styles;};var iconWrapperStyles={paddingLeft:'8px',borderLeft:'1px solid #ccc',marginLeft:'8px',justifyContent:'center',display:'flex',alignSelf:'stretch',flex:'0 0 40px'};var svgIconStyles={width:'32px',height:'32px'};/**
 * A wrapper for various input components that puts them in a box with an icon.
 * In order to process changes, you will have to either provide the attribute's
 * name as a string along with the setAttributes function OR pass your own
 * onChange function.
 *
 * @param props
 * @param {Element|string} props.icon
 * @param {string}         props.label
 * @param {?function}      props.onChange
 * @param {?function}      props.setAttributes
 * @param {?string}        props.attributeName
 * @param {Element}        props.component
 * @param {boolean}        props.highlighted
 * @return {*}
 * @constructor
 */var InputWithIcon$1=function InputWithIcon(props){var _props$highlighted=props.highlighted,highlighted=_props$highlighted===void 0?false:_props$highlighted,Icon=props.icon,label=props.label,onChange=props.onChange,setAttributes=props.setAttributes,attributeName=props.attributeName,_props$component=props.component,Component=_props$component===void 0?TextControl$1:_props$component;var componentProps;switch(Component){case'toggle':case'switch':Component=ToggleControl$5;// eslint-disable-next-line no-fallthrough
case ToggleControl$5:componentProps=pick(props,['checked']);break;case'range':Component=RangeControl$9;// eslint-disable-next-line no-fallthrough
case RangeControl$9:componentProps=pick(props,[// 'label',
'help','beforeIcon','afterIcon','allowReset','disabled','initialPosition','isShiftStepEnabled','marks',// 'onChange',
'min','max','railColor','renderTooltipContent','resetFallbackValue','showTooltip','step','trackColor','value','withInputField','icon','separatorType','type','shiftStep']);componentProps=omitBy(componentProps,function(el){return el===null||typeof el==='undefined';});break;case TextControl$1:default:componentProps=pick(props,['type','value','max','min','step','placeholder','readonly']);break;}var defaultOnChange=function defaultOnChange(value){setAttributes(_defineProperty$1({},attributeName,value));};var containerStyles=toggleWithIconStyles(highlighted);return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("style",null,"\n                .ghwp-editor-input-with-icon * {\n                    margin-bottom: 0 !important;\n                    align-items: center;\n                }\n\n                .ghwp-editor-input-with-icon .components-base-control__label {\n                    display: block;\n                    padding: 0 10px 5px 10px;\n                    text-align: center;\n                }\n\n                .ghwp-editor-input-with-icon--highlight {\n                     border-color: #35f;\n                     border-width: 2px;\n                     box-shadow: 1px 1px 5px 0 #ddd;\n                }\n            "),/*#__PURE__*/React.createElement("div",{className:classnames$1('ghwp-editor-input-with-icon',{'ghwp-editor-input-with-icon':highlighted}),style:containerStyles},/*#__PURE__*/React.createElement(Component,_extends$1({label:label,onChange:onChange||defaultOnChange},componentProps)),/*#__PURE__*/React.createElement("div",{style:iconWrapperStyles},/*#__PURE__*/React.createElement(Icon,{style:svgIconStyles}))));};var Button$7=components.Button,Icon$1=components.Icon,ToolbarButton$1$1=components.ToolbarButton;var compose$1=compose$2.compose,withState=compose$2.withState;var Modal$1=function Modal(_ref){var onClose=_ref.onClose,children=_ref.children,id=_ref.id;return/*#__PURE__*/React.createElement("div",{className:'ghwp-editor-modal__content',"data-ghwp-modal-id":id},/*#__PURE__*/React.createElement("div",{className:"ghwp-editor-modal__close",onClick:onClose},/*#__PURE__*/React.createElement(Icon$1,{icon:"no"})),children);};var ControlledModal$1=function ControlledModal(props){var _props$id=props.id,id=_props$id===void 0?'':_props$id,children=props.children,setState=props.setState;var isVisible=props["modalVisible".concat(id)];return/*#__PURE__*/React.createElement(React.Fragment,null,isVisible&&/*#__PURE__*/React.createElement(Modal$1,{id:id,onClose:function onClose(){setState(_defineProperty$1({},"modalVisible".concat(id),false));}},children));};var WithModal$1=function WithModal(Component){var ids=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[''];var defaultState={};ids.forEach(function(id){defaultState["modalVisible".concat(id)]=false;});return compose$1([withState(defaultState)])(Component);};var ModalOpener$1=function ModalOpener(props){var _props$id2=props.id,id=_props$id2===void 0?'':_props$id2,children=props.children,setState=props.setState,_props$toolbar=props.toolbar,toolbar=_props$toolbar===void 0?false:_props$toolbar,_props$icon=props.icon,icon=_props$icon===void 0?null:_props$icon;function onClick(){setState(_defineProperty$1({},"modalVisible".concat(id),true));}return/*#__PURE__*/React.createElement(React.Fragment,null,toolbar?/*#__PURE__*/React.createElement(ToolbarButton$1$1,{onClick:onClick},icon?/*#__PURE__*/React.createElement(Icon$1,{icon:icon}):{children:children}):/*#__PURE__*/React.createElement(Button$7,{isPrimary:true,onClick:onClick},children));};components.Spinner;data$4.withDispatch;var whitespaces$2="\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002"+"\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";var requireObjectCoercible$2=requireObjectCoercible$7;var whitespaces$1=whitespaces$2;var whitespace='['+whitespaces$1+']';var ltrim=RegExp('^'+whitespace+whitespace+'*');var rtrim=RegExp(whitespace+whitespace+'*$');// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1=function createMethod$1(TYPE){return function($this){var string=String(requireObjectCoercible$2($this));if(TYPE&1)string=string.replace(ltrim,'');if(TYPE&2)string=string.replace(rtrim,'');return string;};};var stringTrim={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:createMethod$1(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:createMethod$1(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:createMethod$1(3)};var global$8=global$n;var trim=stringTrim.trim;var whitespaces=whitespaces$2;var $parseInt=global$8.parseInt;var hex=/^[+-]?0[Xx]/;var FORCED$2=$parseInt(whitespaces+'08')!==8||$parseInt(whitespaces+'0x16')!==22;// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt=FORCED$2?function parseInt(string,radix){var S=trim(String(string));return $parseInt(S,radix>>>0||(hex.test(S)?16:10));}:$parseInt;var $$8=_export;var parseIntImplementation=numberParseInt;// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$8({global:true,forced:parseInt!=parseIntImplementation},{parseInt:parseIntImplementation});var dedupe={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(module){/* global define */(function(){var classNames=function(){// don't inherit from Object so we can skip hasOwnProperty check later
// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
function StorageObject(){}StorageObject.prototype=Object.create(null);function _parseArray(resultSet,array){var length=array.length;for(var i=0;i<length;++i){_parse(resultSet,array[i]);}}var hasOwn={}.hasOwnProperty;function _parseNumber(resultSet,num){resultSet[num]=true;}function _parseObject(resultSet,object){if(object.toString===Object.prototype.toString){for(var k in object){if(hasOwn.call(object,k)){// set value to false instead of deleting it to avoid changing object structure
// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
resultSet[k]=!!object[k];}}}else {resultSet[object.toString()]=true;}}var SPACE=/\s+/;function _parseString(resultSet,str){var array=str.split(SPACE);var length=array.length;for(var i=0;i<length;++i){resultSet[array[i]]=true;}}function _parse(resultSet,arg){if(!arg)return;var argType=_typeof$1(arg);// 'foo bar'
if(argType==='string'){_parseString(resultSet,arg);// ['foo', 'bar', ...]
}else if(Array.isArray(arg)){_parseArray(resultSet,arg);// { 'foo': true, ... }
}else if(argType==='object'){_parseObject(resultSet,arg);// '130'
}else if(argType==='number'){_parseNumber(resultSet,arg);}}function _classNames(){// don't leak arguments
// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
var len=arguments.length;var args=Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var classSet=new StorageObject();_parseArray(classSet,args);var list=[];for(var k in classSet){if(classSet[k]){list.push(k);}}return list.join(' ');}return _classNames;}();if(module.exports){classNames["default"]=classNames;module.exports=classNames;}else {window.classNames=classNames;}})();})(dedupe);var classnames=dedupe.exports;var compose=compose$2.compose;var withDispatch=data$4.withDispatch,withSelect$1=data$4.withSelect;var INACTIVE_CHILD_CLASS='ghwp-inactive-child';/**
 * A higher order component that allows fine-grained control over dependent children
 *
 * @param component
 * @return {*}
 * @constructor
 */var WithControlledChildren$1=function WithControlledChildren(component){return compose([withSelect$1(function(select,ownProps){var blockEditorSelect=select('core/block-editor');var getBlock=blockEditorSelect.getBlock;var clientId=ownProps.clientId;var innerBlocks=getBlock(clientId).innerBlocks;return {children:innerBlocks};}),withDispatch(function(dispatch,ownProps,_ref){var select=_ref.select;var _dispatch=dispatch('core/block-editor'),insertBlock=_dispatch.insertBlock,moveBlockToPosition=_dispatch.moveBlockToPosition,removeBlock=_dispatch.removeBlock,removeBlocks=_dispatch.removeBlocks,selectBlock=_dispatch.selectBlock,updateBlockAttributes=_dispatch.updateBlockAttributes;// prettier-ignore
var _select=select('core/block-editor'),getBlock=_select.getBlock,getBlockIndex=_select.getBlockIndex,getAdjacentBlockClientId=_select.getAdjacentBlockClientId;var currentlyEditedChildIndex=ownProps.attributes.currentlyEditedChildIndex,clientId=ownProps.clientId,setAttributes=ownProps.setAttributes;var block=getBlock(clientId);var getCurrentlyEditedChildClientId=function getCurrentlyEditedChildClientId(){var index=currentlyEditedChildIndex!==null&&typeof currentlyEditedChildIndex!=='undefined'?currentlyEditedChildIndex:0;return block.innerBlocks[index]?block.innerBlocks[currentlyEditedChildIndex].clientId:null;};var setCurrentlyEditedChildIndex=function setCurrentlyEditedChildIndex(_ref2){var childClientId=_ref2.clientId;var childIndex=childClientId?getBlockIndex(childClientId,clientId):0;block.innerBlocks.forEach(function(child,index){var isVisible=false;if(index===childIndex)isVisible=true;var className=child.attributes.className;updateBlockAttributes(child.clientId,{isVisible:isVisible,className:classnames(className,_defineProperty$1({},INACTIVE_CHILD_CLASS,!isVisible))});});setAttributes({currentlyEditedChildIndex:childIndex});};var selectNextChild=function selectNextChild(){if(currentlyEditedChildIndex===block.innerBlocks.length-1){return false;}var newBlockClientId=getAdjacentBlockClientId(getCurrentlyEditedChildClientId(),1);setCurrentlyEditedChildIndex({clientId:newBlockClientId});return true;};var selectPreviousChild=function selectPreviousChild(){if(currentlyEditedChildIndex===0)return false;var newBlockClientId=getAdjacentBlockClientId(getCurrentlyEditedChildClientId(),-1);setCurrentlyEditedChildIndex({clientId:newBlockClientId});return true;};var updateChildrenRecord=function updateChildrenRecord(){setAttributes({children:getBlock(clientId).innerBlocks});};return {insertChild:function insertChild(newBlock){insertBlock(newBlock,parseInt(block.innerBlocks.length,10),clientId,false// do not update the selection and "steal focus"
);updateChildrenRecord();setCurrentlyEditedChildIndex(newBlock);selectBlock(newBlock.clientId);},deleteChild:function deleteChild(child){if(!selectPreviousChild()){selectNextChild();}removeBlock(child.clientId,true);updateChildrenRecord();},moveChild:function moveChild(child){var direction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'up';var childId=child.clientId;var currentPosition=childId&&getBlockIndex(childId,clientId);var isFirstGoingUp=currentPosition===0&&direction==='up';var isLastGoingDown=currentPosition+1===block.innerBlocks.length&&direction==='down';var isPositionInvalid=currentPosition<0||currentPosition===null||typeof currentPosition==='undefined';if(!childId||isPositionInvalid||isFirstGoingUp||isLastGoingDown)return;var newIndex=direction==='up'?currentPosition-1:currentPosition+1;moveBlockToPosition(childId,clientId,clientId,newIndex);updateChildrenRecord();},/* expose a way to edit a child's attributes */updateBlockAttributes:updateBlockAttributes,removeBlocks:removeBlocks,setCurrentlyEditedChild:setCurrentlyEditedChildIndex,selectNextChild:selectNextChild,selectPreviousChild:selectPreviousChild,/* Utility function for when data from children needs to used
       * to render parts of the parent component (in the save function)
       * → see tabsBlock > TabHeader
       *
       * Needs to be called separately after each dispatch call that
       * involves modifying the nested tab components; calling
       * setAttributes from inside the individual dispatch functions does
       * not seem to work reliably
       */updateChildrenRecord:updateChildrenRecord};})])(component);};/* eslint-disable indent */components.ToolbarButton;i18n.__;var hasSelectedInnerBlock$1=function hasSelectedInnerBlock(editorSelect,blockClientId){var getBlock=editorSelect.getBlock,getBlockSelectionStart=editorSelect.getBlockSelectionStart;var selected=getBlockSelectionStart();var inner=getBlock(blockClientId).innerBlocks;for(var i=0;i<inner.length;i++){if(inner[i].clientId===selected||inner[i].innerBlocks.length&&hasSelectedInnerBlock(editorSelect,inner[i].clientId)){return true;}}return false;};var wellKnownSymbol$a=wellKnownSymbol$h;var create$3=objectCreate;var definePropertyModule$2=objectDefineProperty;var UNSCOPABLES=wellKnownSymbol$a('unscopables');var ArrayPrototype$1=Array.prototype;// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if(ArrayPrototype$1[UNSCOPABLES]==undefined){definePropertyModule$2.f(ArrayPrototype$1,UNSCOPABLES,{configurable:true,value:create$3(null)});}// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1=function addToUnscopables$1(key){ArrayPrototype$1[UNSCOPABLES][key]=true;};var $$7=_export;var $findIndex=arrayIteration.findIndex;var addToUnscopables$2=addToUnscopables$1;var FIND_INDEX='findIndex';var SKIPS_HOLES$1=true;// Shouldn't skip holes
if(FIND_INDEX in[])Array(1)[FIND_INDEX](function(){SKIPS_HOLES$1=false;});// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$$7({target:'Array',proto:true,forced:SKIPS_HOLES$1},{findIndex:function findIndex(callbackfn/* , that = undefined */){return $findIndex(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$2(FIND_INDEX);var DESCRIPTORS$5=descriptors;var defineProperty$2=objectDefineProperty.f;var FunctionPrototype=Function.prototype;var FunctionPrototypeToString=FunctionPrototype.toString;var nameRE=/^\s*function ([^ (]*)/;var NAME='name';// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if(DESCRIPTORS$5&&!(NAME in FunctionPrototype)){defineProperty$2(FunctionPrototype,NAME,{configurable:true,get:function get(){try{return FunctionPrototypeToString.call(this).match(nameRE)[1];}catch(error){return '';}}});}var $$6=_export;var toObject$1=toObject$5;var nativeKeys=objectKeys$4;var fails$3=fails$k;var FAILS_ON_PRIMITIVES$1=fails$3(function(){nativeKeys(1);});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$6({target:'Object',stat:true,forced:FAILS_ON_PRIMITIVES$1},{keys:function keys(it){return nativeKeys(toObject$1(it));}});var objectGetOwnPropertyNamesExternal={};/* eslint-disable es/no-object-getownpropertynames -- safe */var toIndexedObject$3=toIndexedObject$8;var $getOwnPropertyNames$1=objectGetOwnPropertyNames.f;var toString$1={}.toString;var windowNames=(typeof window==="undefined"?"undefined":_typeof$1(window))=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function getWindowNames(it){try{return $getOwnPropertyNames$1(it);}catch(error){return windowNames.slice();}};// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f=function getOwnPropertyNames(it){return windowNames&&toString$1.call(it)=='[object Window]'?getWindowNames(it):$getOwnPropertyNames$1(toIndexedObject$3(it));};var wellKnownSymbolWrapped={};var wellKnownSymbol$9=wellKnownSymbol$h;wellKnownSymbolWrapped.f=wellKnownSymbol$9;var path=path$2;var has$2=has$a;var wrappedWellKnownSymbolModule$1=wellKnownSymbolWrapped;var defineProperty$1=objectDefineProperty.f;var defineWellKnownSymbol$1=function defineWellKnownSymbol$1(NAME){var _Symbol=path.Symbol||(path.Symbol={});if(!has$2(_Symbol,NAME))defineProperty$1(_Symbol,NAME,{value:wrappedWellKnownSymbolModule$1.f(NAME)});};var defineProperty=objectDefineProperty.f;var has$1=has$a;var wellKnownSymbol$8=wellKnownSymbol$h;var TO_STRING_TAG$2=wellKnownSymbol$8('toStringTag');var setToStringTag$2=function setToStringTag$2(it,TAG,STATIC){if(it&&!has$1(it=STATIC?it:it.prototype,TO_STRING_TAG$2)){defineProperty(it,TO_STRING_TAG$2,{configurable:true,value:TAG});}};var $$5=_export;var global$7=global$n;var getBuiltIn$1=getBuiltIn$7;var DESCRIPTORS$4=descriptors;var NATIVE_SYMBOL=nativeSymbol;var USE_SYMBOL_AS_UID=useSymbolAsUid;var fails$2$1=fails$k;var has=has$a;var isArray=isArray$4;var isObject$2=isObject$e;var anObject$5=anObject$f;var toObject=toObject$5;var toIndexedObject$2=toIndexedObject$8;var toPrimitive$1=toPrimitive$4;var createPropertyDescriptor$1=createPropertyDescriptor$4;var nativeObjectCreate=objectCreate;var objectKeys=objectKeys$4;var getOwnPropertyNamesModule=objectGetOwnPropertyNames;var getOwnPropertyNamesExternal=objectGetOwnPropertyNamesExternal;var getOwnPropertySymbolsModule=objectGetOwnPropertySymbols;var getOwnPropertyDescriptorModule$1=objectGetOwnPropertyDescriptor;var definePropertyModule$1=objectDefineProperty;var propertyIsEnumerableModule=objectPropertyIsEnumerable;var createNonEnumerableProperty=createNonEnumerableProperty$8;var redefine$3=redefine$8.exports;var shared$6=shared$5.exports;var sharedKey=sharedKey$3;var hiddenKeys=hiddenKeys$5;var uid=uid$3;var wellKnownSymbol$7=wellKnownSymbol$h;var wrappedWellKnownSymbolModule=wellKnownSymbolWrapped;var defineWellKnownSymbol=defineWellKnownSymbol$1;var setToStringTag$1=setToStringTag$2;var InternalStateModule$1=internalState;var $forEach=arrayIteration.forEach;var HIDDEN=sharedKey('hidden');var SYMBOL='Symbol';var PROTOTYPE='prototype';var TO_PRIMITIVE=wellKnownSymbol$7('toPrimitive');var setInternalState$1=InternalStateModule$1.set;var getInternalState$1=InternalStateModule$1.getterFor(SYMBOL);var ObjectPrototype=Object[PROTOTYPE];var $Symbol=global$7.Symbol;var $stringify=getBuiltIn$1('JSON','stringify');var nativeGetOwnPropertyDescriptor$1=getOwnPropertyDescriptorModule$1.f;var nativeDefineProperty=definePropertyModule$1.f;var nativeGetOwnPropertyNames=getOwnPropertyNamesExternal.f;var nativePropertyIsEnumerable=propertyIsEnumerableModule.f;var AllSymbols=shared$6('symbols');var ObjectPrototypeSymbols=shared$6('op-symbols');var StringToSymbolRegistry=shared$6('string-to-symbol-registry');var SymbolToStringRegistry=shared$6('symbol-to-string-registry');var WellKnownSymbolsStore=shared$6('wks');var QObject=global$7.QObject;// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor=DESCRIPTORS$4&&fails$2$1(function(){return nativeObjectCreate(nativeDefineProperty({},'a',{get:function get(){return nativeDefineProperty(this,'a',{value:7}).a;}})).a!=7;})?function(O,P,Attributes){var ObjectPrototypeDescriptor=nativeGetOwnPropertyDescriptor$1(ObjectPrototype,P);if(ObjectPrototypeDescriptor)delete ObjectPrototype[P];nativeDefineProperty(O,P,Attributes);if(ObjectPrototypeDescriptor&&O!==ObjectPrototype){nativeDefineProperty(ObjectPrototype,P,ObjectPrototypeDescriptor);}}:nativeDefineProperty;var wrap=function wrap(tag,description){var symbol=AllSymbols[tag]=nativeObjectCreate($Symbol[PROTOTYPE]);setInternalState$1(symbol,{type:SYMBOL,tag:tag,description:description});if(!DESCRIPTORS$4)symbol.description=description;return symbol;};var isSymbol=USE_SYMBOL_AS_UID?function(it){return _typeof$1(it)=='symbol';}:function(it){return Object(it)instanceof $Symbol;};var $defineProperty=function defineProperty(O,P,Attributes){if(O===ObjectPrototype)$defineProperty(ObjectPrototypeSymbols,P,Attributes);anObject$5(O);var key=toPrimitive$1(P,true);anObject$5(Attributes);if(has(AllSymbols,key)){if(!Attributes.enumerable){if(!has(O,HIDDEN))nativeDefineProperty(O,HIDDEN,createPropertyDescriptor$1(1,{}));O[HIDDEN][key]=true;}else {if(has(O,HIDDEN)&&O[HIDDEN][key])O[HIDDEN][key]=false;Attributes=nativeObjectCreate(Attributes,{enumerable:createPropertyDescriptor$1(0,false)});}return setSymbolDescriptor(O,key,Attributes);}return nativeDefineProperty(O,key,Attributes);};var $defineProperties=function defineProperties(O,Properties){anObject$5(O);var properties=toIndexedObject$2(Properties);var keys=objectKeys(properties).concat($getOwnPropertySymbols(properties));$forEach(keys,function(key){if(!DESCRIPTORS$4||$propertyIsEnumerable.call(properties,key))$defineProperty(O,key,properties[key]);});return O;};var $create=function create(O,Properties){return Properties===undefined?nativeObjectCreate(O):$defineProperties(nativeObjectCreate(O),Properties);};var $propertyIsEnumerable=function propertyIsEnumerable(V){var P=toPrimitive$1(V,true);var enumerable=nativePropertyIsEnumerable.call(this,P);if(this===ObjectPrototype&&has(AllSymbols,P)&&!has(ObjectPrototypeSymbols,P))return false;return enumerable||!has(this,P)||!has(AllSymbols,P)||has(this,HIDDEN)&&this[HIDDEN][P]?enumerable:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(O,P){var it=toIndexedObject$2(O);var key=toPrimitive$1(P,true);if(it===ObjectPrototype&&has(AllSymbols,key)&&!has(ObjectPrototypeSymbols,key))return;var descriptor=nativeGetOwnPropertyDescriptor$1(it,key);if(descriptor&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key])){descriptor.enumerable=true;}return descriptor;};var $getOwnPropertyNames=function getOwnPropertyNames(O){var names=nativeGetOwnPropertyNames(toIndexedObject$2(O));var result=[];$forEach(names,function(key){if(!has(AllSymbols,key)&&!has(hiddenKeys,key))result.push(key);});return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(O){var IS_OBJECT_PROTOTYPE=O===ObjectPrototype;var names=nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE?ObjectPrototypeSymbols:toIndexedObject$2(O));var result=[];$forEach(names,function(key){if(has(AllSymbols,key)&&(!IS_OBJECT_PROTOTYPE||has(ObjectPrototype,key))){result.push(AllSymbols[key]);}});return result;};// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if(!NATIVE_SYMBOL){$Symbol=function _Symbol2(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');var description=!arguments.length||arguments[0]===undefined?undefined:String(arguments[0]);var tag=uid(description);var setter=function setter(value){if(this===ObjectPrototype)setter.call(ObjectPrototypeSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDescriptor(this,tag,createPropertyDescriptor$1(1,value));};if(DESCRIPTORS$4&&USE_SETTER)setSymbolDescriptor(ObjectPrototype,tag,{configurable:true,set:setter});return wrap(tag,description);};redefine$3($Symbol[PROTOTYPE],'toString',function toString(){return getInternalState$1(this).tag;});redefine$3($Symbol,'withoutSetter',function(description){return wrap(uid(description),description);});propertyIsEnumerableModule.f=$propertyIsEnumerable;definePropertyModule$1.f=$defineProperty;getOwnPropertyDescriptorModule$1.f=$getOwnPropertyDescriptor;getOwnPropertyNamesModule.f=getOwnPropertyNamesExternal.f=$getOwnPropertyNames;getOwnPropertySymbolsModule.f=$getOwnPropertySymbols;wrappedWellKnownSymbolModule.f=function(name){return wrap(wellKnownSymbol$7(name),name);};if(DESCRIPTORS$4){// https://github.com/tc39/proposal-Symbol-description
nativeDefineProperty($Symbol[PROTOTYPE],'description',{configurable:true,get:function description(){return getInternalState$1(this).description;}});{redefine$3(ObjectPrototype,'propertyIsEnumerable',$propertyIsEnumerable,{unsafe:true});}}}$$5({global:true,wrap:true,forced:!NATIVE_SYMBOL,sham:!NATIVE_SYMBOL},{Symbol:$Symbol});$forEach(objectKeys(WellKnownSymbolsStore),function(name){defineWellKnownSymbol(name);});$$5({target:SYMBOL,stat:true,forced:!NATIVE_SYMBOL},{// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
'for':function _for(key){var string=String(key);if(has(StringToSymbolRegistry,string))return StringToSymbolRegistry[string];var symbol=$Symbol(string);StringToSymbolRegistry[string]=symbol;SymbolToStringRegistry[symbol]=string;return symbol;},// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
keyFor:function keyFor(sym){if(!isSymbol(sym))throw TypeError(sym+' is not a symbol');if(has(SymbolToStringRegistry,sym))return SymbolToStringRegistry[sym];},useSetter:function useSetter(){USE_SETTER=true;},useSimple:function useSimple(){USE_SETTER=false;}});$$5({target:'Object',stat:true,forced:!NATIVE_SYMBOL,sham:!DESCRIPTORS$4},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:$create,// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:$defineProperty,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:$defineProperties,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:$getOwnPropertyDescriptor});$$5({target:'Object',stat:true,forced:!NATIVE_SYMBOL},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:$getOwnPropertyNames,// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
getOwnPropertySymbols:$getOwnPropertySymbols});// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$$5({target:'Object',stat:true,forced:fails$2$1(function(){getOwnPropertySymbolsModule.f(1);})},{getOwnPropertySymbols:function getOwnPropertySymbols(it){return getOwnPropertySymbolsModule.f(toObject(it));}});// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if($stringify){var FORCED_JSON_STRINGIFY=!NATIVE_SYMBOL||fails$2$1(function(){var symbol=$Symbol();// MS Edge converts symbol values to JSON as {}
return $stringify([symbol])!='[null]'// WebKit converts symbol values to JSON as null
||$stringify({a:symbol})!='{}'// V8 throws on boxed symbols
||$stringify(Object(symbol))!='{}';});$$5({target:'JSON',stat:true,forced:FORCED_JSON_STRINGIFY},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function stringify(it,replacer,space){var args=[it];var index=1;var $replacer;while(arguments.length>index){args.push(arguments[index++]);}$replacer=replacer;if(!isObject$2(replacer)&&it===undefined||isSymbol(it))return;// IE8 returns string on undefined
if(!isArray(replacer))replacer=function replacer(key,value){if(typeof $replacer=='function')value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return $stringify.apply(null,args);}});}// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if(!$Symbol[PROTOTYPE][TO_PRIMITIVE]){createNonEnumerableProperty($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);}// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$1($Symbol,SYMBOL);hiddenKeys[HIDDEN]=true;var $$4=_export;var fails$1$1=fails$k;var toIndexedObject$1=toIndexedObject$8;var nativeGetOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f;var DESCRIPTORS$3=descriptors;var FAILS_ON_PRIMITIVES=fails$1$1(function(){nativeGetOwnPropertyDescriptor(1);});var FORCED$1=!DESCRIPTORS$3||FAILS_ON_PRIMITIVES;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$4({target:'Object',stat:true,forced:FORCED$1,sham:!DESCRIPTORS$3},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(it,key){return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it),key);}});var toPrimitive=toPrimitive$4;var definePropertyModule=objectDefineProperty;var createPropertyDescriptor=createPropertyDescriptor$4;var createProperty$1=function createProperty$1(object,key,value){var propertyKey=toPrimitive(key);if(propertyKey in object)definePropertyModule.f(object,propertyKey,createPropertyDescriptor(0,value));else object[propertyKey]=value;};var $$3=_export;var DESCRIPTORS$2=descriptors;var ownKeys$1$1=ownKeys$3;var toIndexedObject=toIndexedObject$8;var getOwnPropertyDescriptorModule=objectGetOwnPropertyDescriptor;var createProperty=createProperty$1;// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$3({target:'Object',stat:true,sham:!DESCRIPTORS$2},{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=toIndexedObject(object);var getOwnPropertyDescriptor=getOwnPropertyDescriptorModule.f;var keys=ownKeys$1$1(O);var result={};var index=0;var key,descriptor;while(keys.length>index){descriptor=getOwnPropertyDescriptor(O,key=keys[index++]);if(descriptor!==undefined)createProperty(result,key,descriptor);}return result;}});var $$2=_export;var DESCRIPTORS$1=descriptors;var defineProperties=objectDefineProperties;// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$$2({target:'Object',stat:true,forced:!DESCRIPTORS$1,sham:!DESCRIPTORS$1},{defineProperties:defineProperties});var $$1$1=_export;var DESCRIPTORS=descriptors;var objectDefinePropertyModile=objectDefineProperty;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$$1$1({target:'Object',stat:true,forced:!DESCRIPTORS,sham:!DESCRIPTORS},{defineProperty:objectDefinePropertyModile.f});element.cloneElement;element.Children.map;hooks.addFilter;blocks.registerBlockStyle;i18n.__;var DEFAULT_TRUNCATED_STRING_LENGTH=100;var truncateString$1=function truncateString(string){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _options$length=options.length,length=_options$length===void 0?DEFAULT_TRUNCATED_STRING_LENGTH:_options$length,_options$omission=options.omission,omission=_options$omission===void 0?'...':_options$omission,_options$separator=options.separator,separator=_options$separator===void 0?' ':_options$separator;return truncate(string,{length:length,omission:omission,separator:separator});};var toInteger=toInteger$4;var requireObjectCoercible$1=requireObjectCoercible$7;// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod=function createMethod(CONVERT_TO_STRING){return function($this,pos){var S=String(requireObjectCoercible$1($this));var position=toInteger(pos);var size=S.length;var first,second;if(position<0||position>=size)return CONVERT_TO_STRING?'':undefined;first=S.charCodeAt(position);return first<0xD800||first>0xDBFF||position+1===size||(second=S.charCodeAt(position+1))<0xDC00||second>0xDFFF?CONVERT_TO_STRING?S.charAt(position):first:CONVERT_TO_STRING?S.slice(position,position+2):(first-0xD800<<10)+(second-0xDC00)+0x10000;};};var stringMultibyte={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:createMethod(false),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:createMethod(true)};var charAt=stringMultibyte.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1=function advanceStringIndex$1(S,index,unicode){return index+(unicode?charAt(S,index).length:1);};var fixRegExpWellKnownSymbolLogic=fixRegexpWellKnownSymbolLogic;var anObject$4=anObject$f;var toLength$1=toLength$4;var requireObjectCoercible=requireObjectCoercible$7;var advanceStringIndex=advanceStringIndex$1;var regExpExec=regexpExecAbstract;// @@match logic
fixRegExpWellKnownSymbolLogic('match',function(MATCH,nativeMatch,maybeCallNative){return [// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function match(regexp){var O=requireObjectCoercible(this);var matcher=regexp==undefined?undefined:regexp[MATCH];return matcher!==undefined?matcher.call(regexp,O):new RegExp(regexp)[MATCH](String(O));},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(string){var res=maybeCallNative(nativeMatch,this,string);if(res.done)return res.value;var rx=anObject$4(this);var S=String(string);if(!rx.global)return regExpExec(rx,S);var fullUnicode=rx.unicode;rx.lastIndex=0;var A=[];var n=0;var result;while((result=regExpExec(rx,S))!==null){var matchStr=String(result[0]);A[n]=matchStr;if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength$1(rx.lastIndex),fullUnicode);n++;}return n===0?null:A;}];});var wellKnownSymbol$6=wellKnownSymbol$h;var TO_STRING_TAG$1=wellKnownSymbol$6('toStringTag');var test={};test[TO_STRING_TAG$1]='z';var toStringTagSupport=String(test)==='[object z]';var TO_STRING_TAG_SUPPORT$2=toStringTagSupport;var classofRaw=classofRaw$1;var wellKnownSymbol$5=wellKnownSymbol$h;var TO_STRING_TAG=wellKnownSymbol$5('toStringTag');// ES3 wrong here
var CORRECT_ARGUMENTS=classofRaw(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(error){/* empty */}};// getting tag from ES6+ `Object.prototype.toString`
var classof$3=TO_STRING_TAG_SUPPORT$2?classofRaw:function(it){var O,tag,result;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(tag=tryGet(O=Object(it),TO_STRING_TAG))=='string'?tag// builtinTag case
:CORRECT_ARGUMENTS?classofRaw(O)// ES3 arguments fallback
:(result=classofRaw(O))=='Object'&&typeof O.callee=='function'?'Arguments':result;};var TO_STRING_TAG_SUPPORT$1=toStringTagSupport;var classof$2=classof$3;// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString=TO_STRING_TAG_SUPPORT$1?{}.toString:function toString(){return '[object '+classof$2(this)+']';};var TO_STRING_TAG_SUPPORT=toStringTagSupport;var redefine$2=redefine$8.exports;var toString=objectToString;// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if(!TO_STRING_TAG_SUPPORT){redefine$2(Object.prototype,'toString',toString,{unsafe:true});}var global$6=global$n;var nativePromiseConstructor=global$6.Promise;var redefine$1=redefine$8.exports;var redefineAll$1=function redefineAll$1(target,src,options){for(var key in src){redefine$1(target,key,src[key],options);}return target;};var anInstance$1=function anInstance$1(it,Constructor,name){if(!(it instanceof Constructor)){throw TypeError('Incorrect '+(name?name+' ':'')+'invocation');}return it;};var iterators={};var wellKnownSymbol$4=wellKnownSymbol$h;var Iterators$1=iterators;var ITERATOR$2=wellKnownSymbol$4('iterator');var ArrayPrototype=Array.prototype;// check on default Array iterator
var isArrayIteratorMethod$1=function isArrayIteratorMethod$1(it){return it!==undefined&&(Iterators$1.Array===it||ArrayPrototype[ITERATOR$2]===it);};var classof$1=classof$3;var Iterators=iterators;var wellKnownSymbol$3=wellKnownSymbol$h;var ITERATOR$1=wellKnownSymbol$3('iterator');var getIteratorMethod$1=function getIteratorMethod$1(it){if(it!=undefined)return it[ITERATOR$1]||it['@@iterator']||Iterators[classof$1(it)];};var anObject$3=anObject$f;var iteratorClose$1=function iteratorClose$1(iterator){var returnMethod=iterator['return'];if(returnMethod!==undefined){return anObject$3(returnMethod.call(iterator)).value;}};var anObject$2=anObject$f;var isArrayIteratorMethod=isArrayIteratorMethod$1;var toLength=toLength$4;var bind$2=functionBindContext;var getIteratorMethod=getIteratorMethod$1;var iteratorClose=iteratorClose$1;var Result=function Result(stopped,result){this.stopped=stopped;this.result=result;};var iterate$1=function iterate$1(iterable,unboundFunction,options){var that=options&&options.that;var AS_ENTRIES=!!(options&&options.AS_ENTRIES);var IS_ITERATOR=!!(options&&options.IS_ITERATOR);var INTERRUPTED=!!(options&&options.INTERRUPTED);var fn=bind$2(unboundFunction,that,1+AS_ENTRIES+INTERRUPTED);var iterator,iterFn,index,length,result,next,step;var stop=function stop(condition){if(iterator)iteratorClose(iterator);return new Result(true,condition);};var callFn=function callFn(value){if(AS_ENTRIES){anObject$2(value);return INTERRUPTED?fn(value[0],value[1],stop):fn(value[0],value[1]);}return INTERRUPTED?fn(value,stop):fn(value);};if(IS_ITERATOR){iterator=iterable;}else {iterFn=getIteratorMethod(iterable);if(typeof iterFn!='function')throw TypeError('Target is not iterable');// optimisation for array iterators
if(isArrayIteratorMethod(iterFn)){for(index=0,length=toLength(iterable.length);length>index;index++){result=callFn(iterable[index]);if(result&&result instanceof Result)return result;}return new Result(false);}iterator=iterFn.call(iterable);}next=iterator.next;while(!(step=next.call(iterator)).done){try{result=callFn(step.value);}catch(error){iteratorClose(iterator);throw error;}if(_typeof$1(result)=='object'&&result&&result instanceof Result)return result;}return new Result(false);};var wellKnownSymbol$2=wellKnownSymbol$h;var ITERATOR=wellKnownSymbol$2('iterator');var SAFE_CLOSING=false;try{var called=0;var iteratorWithReturn={next:function next(){return {done:!!called++};},'return':function _return(){SAFE_CLOSING=true;}};iteratorWithReturn[ITERATOR]=function(){return this;};// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(iteratorWithReturn,function(){throw 2;});}catch(error){/* empty */}var checkCorrectnessOfIteration$1=function checkCorrectnessOfIteration$1(exec,SKIP_CLOSING){if(!SKIP_CLOSING&&!SAFE_CLOSING)return false;var ITERATION_SUPPORT=false;try{var object={};object[ITERATOR]=function(){return {next:function next(){return {done:ITERATION_SUPPORT=true};}};};exec(object);}catch(error){/* empty */}return ITERATION_SUPPORT;};var anObject$1=anObject$f;var aFunction$2=aFunction$6;var wellKnownSymbol$1=wellKnownSymbol$h;var SPECIES$1=wellKnownSymbol$1('species');// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1=function speciesConstructor$1(O,defaultConstructor){var C=anObject$1(O).constructor;var S;return C===undefined||(S=anObject$1(C)[SPECIES$1])==undefined?defaultConstructor:aFunction$2(S);};var userAgent$1=engineUserAgent;var engineIsIos=/(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent$1);var classof=classofRaw$1;var global$5=global$n;var engineIsNode=classof(global$5.process)=='process';var global$4=global$n;var fails$l=fails$k;var bind$1=functionBindContext;var html=html$2;var createElement=documentCreateElement$1;var IS_IOS$1=engineIsIos;var IS_NODE$2=engineIsNode;var location=global$4.location;var set=global$4.setImmediate;var clear=global$4.clearImmediate;var process$3=global$4.process;var MessageChannel=global$4.MessageChannel;var Dispatch=global$4.Dispatch;var counter=0;var queue={};var ONREADYSTATECHANGE='onreadystatechange';var defer,channel,port;var run=function run(id){// eslint-disable-next-line no-prototype-builtins -- safe
if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id];fn();}};var runner=function runner(id){return function(){run(id);};};var listener=function listener(event){run(event.data);};var post=function post(id){// old engines have not location.origin
global$4.postMessage(id+'',location.protocol+'//'+location.host);};// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!set||!clear){set=function setImmediate(fn){var args=[];var i=1;while(arguments.length>i){args.push(arguments[i++]);}queue[++counter]=function(){// eslint-disable-next-line no-new-func -- spec requirement
(typeof fn=='function'?fn:Function(fn)).apply(undefined,args);};defer(counter);return counter;};clear=function clearImmediate(id){delete queue[id];};// Node.js 0.8-
if(IS_NODE$2){defer=function defer(id){process$3.nextTick(runner(id));};// Sphere (JS game engine) Dispatch API
}else if(Dispatch&&Dispatch.now){defer=function defer(id){Dispatch.now(runner(id));};// Browsers with MessageChannel, includes WebWorkers
// except iOS - https://github.com/zloirock/core-js/issues/624
}else if(MessageChannel&&!IS_IOS$1){channel=new MessageChannel();port=channel.port2;channel.port1.onmessage=listener;defer=bind$1(port.postMessage,port,1);// Browsers with postMessage, skip WebWorkers
// IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
}else if(global$4.addEventListener&&typeof postMessage=='function'&&!global$4.importScripts&&location&&location.protocol!=='file:'&&!fails$l(post)){defer=post;global$4.addEventListener('message',listener,false);// IE8-
}else if(ONREADYSTATECHANGE in createElement('script')){defer=function defer(id){html.appendChild(createElement('script'))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run(id);};};// Rest old browsers
}else {defer=function defer(id){setTimeout(runner(id),0);};}}var task$1={set:set,clear:clear};var userAgent=engineUserAgent;var engineIsWebosWebkit=/web0s(?!.*chrome)/i.test(userAgent);var global$3=global$n;var getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f;var macrotask=task$1.set;var IS_IOS=engineIsIos;var IS_WEBOS_WEBKIT=engineIsWebosWebkit;var IS_NODE$1=engineIsNode;var MutationObserver$1=global$3.MutationObserver||global$3.WebKitMutationObserver;var document$2=global$3.document;var process$2=global$3.process;var Promise$1=global$3.Promise;// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor=getOwnPropertyDescriptor(global$3,'queueMicrotask');var queueMicrotask=queueMicrotaskDescriptor&&queueMicrotaskDescriptor.value;var flush,head,last,notify$1,toggle,node,promise,then;// modern engines have queueMicrotask method
if(!queueMicrotask){flush=function flush(){var parent,fn;if(IS_NODE$1&&(parent=process$2.domain))parent.exit();while(head){fn=head.fn;head=head.next;try{fn();}catch(error){if(head)notify$1();else last=undefined;throw error;}}last=undefined;if(parent)parent.enter();};// browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
// also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
if(!IS_IOS&&!IS_NODE$1&&!IS_WEBOS_WEBKIT&&MutationObserver$1&&document$2){toggle=true;node=document$2.createTextNode('');new MutationObserver$1(flush).observe(node,{characterData:true});notify$1=function notify$1(){node.data=toggle=!toggle;};// environments with maybe non-completely correct, but existent Promise
}else if(Promise$1&&Promise$1.resolve){// Promise.resolve without an argument throws an error in LG WebOS 2
promise=Promise$1.resolve(undefined);// workaround of WebKit ~ iOS Safari 10.1 bug
promise.constructor=Promise$1;then=promise.then;notify$1=function notify$1(){then.call(promise,flush);};// Node.js without promises
}else if(IS_NODE$1){notify$1=function notify$1(){process$2.nextTick(flush);};// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else {notify$1=function notify$1(){// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global$3,flush);};}}var microtask$1=queueMicrotask||function(fn){var task={fn:fn,next:undefined};if(last)last.next=task;if(!head){head=task;notify$1();}last=task;};var newPromiseCapability$2={};var aFunction$1=aFunction$6;var PromiseCapability=function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(resolve!==undefined||reject!==undefined)throw TypeError('Bad Promise constructor');resolve=$$resolve;reject=$$reject;});this.resolve=aFunction$1(resolve);this.reject=aFunction$1(reject);};// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f=function(C){return new PromiseCapability(C);};var anObject=anObject$f;var isObject$1=isObject$e;var newPromiseCapability$1=newPromiseCapability$2;var promiseResolve$1=function promiseResolve$1(C,x){anObject(C);if(isObject$1(x)&&x.constructor===C)return x;var promiseCapability=newPromiseCapability$1.f(C);var resolve=promiseCapability.resolve;resolve(x);return promiseCapability.promise;};var global$2=global$n;var hostReportErrors$1=function hostReportErrors$1(a,b){var console=global$2.console;if(console&&console.error){arguments.length===1?console.error(a):console.error(a,b);}};var perform$1=function perform$1(exec){try{return {error:false,value:exec()};}catch(error){return {error:true,value:error};}};var engineIsBrowser=(typeof window==="undefined"?"undefined":_typeof$1(window))=='object';var $$k=_export;var global$1=global$n;var getBuiltIn=getBuiltIn$7;var NativePromise=nativePromiseConstructor;var redefine=redefine$8.exports;var redefineAll=redefineAll$1;var setPrototypeOf=objectSetPrototypeOf;var setToStringTag=setToStringTag$2;var setSpecies=setSpecies$2;var isObject=isObject$e;var aFunction=aFunction$6;var anInstance=anInstance$1;var inspectSource=inspectSource$3;var iterate=iterate$1;var checkCorrectnessOfIteration=checkCorrectnessOfIteration$1;var speciesConstructor=speciesConstructor$1;var task=task$1.set;var microtask=microtask$1;var promiseResolve=promiseResolve$1;var hostReportErrors=hostReportErrors$1;var newPromiseCapabilityModule=newPromiseCapability$2;var perform=perform$1;var InternalStateModule=internalState;var isForced=isForced_1;var wellKnownSymbol=wellKnownSymbol$h;var IS_BROWSER=engineIsBrowser;var IS_NODE=engineIsNode;var V8_VERSION=engineV8Version;var SPECIES=wellKnownSymbol('species');var PROMISE='Promise';var getInternalState$4=InternalStateModule.get;var setInternalState=InternalStateModule.set;var getInternalPromiseState=InternalStateModule.getterFor(PROMISE);var NativePromisePrototype=NativePromise&&NativePromise.prototype;var PromiseConstructor=NativePromise;var PromiseConstructorPrototype=NativePromisePrototype;var TypeError$1=global$1.TypeError;var document$1=global$1.document;var process$1=global$1.process;var newPromiseCapability=newPromiseCapabilityModule.f;var newGenericPromiseCapability=newPromiseCapability;var DISPATCH_EVENT=!!(document$1&&document$1.createEvent&&global$1.dispatchEvent);var NATIVE_REJECTION_EVENT=typeof PromiseRejectionEvent=='function';var UNHANDLED_REJECTION='unhandledrejection';var REJECTION_HANDLED='rejectionhandled';var PENDING=0;var FULFILLED=1;var REJECTED=2;var HANDLED=1;var UNHANDLED=2;var SUBCLASSING=false;var Internal,OwnPromiseCapability,PromiseWrapper,nativeThen;var FORCED=isForced(PROMISE,function(){var PROMISE_CONSTRUCTOR_SOURCE=inspectSource(PromiseConstructor);var GLOBAL_CORE_JS_PROMISE=PROMISE_CONSTRUCTOR_SOURCE!==String(PromiseConstructor);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!GLOBAL_CORE_JS_PROMISE&&V8_VERSION===66)return true;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(V8_VERSION>=51&&/native code/.test(PROMISE_CONSTRUCTOR_SOURCE))return false;// Detect correctness of subclassing with @@species support
var promise=new PromiseConstructor(function(resolve){resolve(1);});var FakePromise=function FakePromise(exec){exec(function(){/* empty */},function(){/* empty */});};var constructor=promise.constructor={};constructor[SPECIES]=FakePromise;SUBCLASSING=promise.then(function(){/* empty */})instanceof FakePromise;if(!SUBCLASSING)return true;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return !GLOBAL_CORE_JS_PROMISE&&IS_BROWSER&&!NATIVE_REJECTION_EVENT;});var INCORRECT_ITERATION=FORCED||!checkCorrectnessOfIteration(function(iterable){PromiseConstructor.all(iterable)['catch'](function(){/* empty */});});// helpers
var isThenable=function isThenable(it){var then;return isObject(it)&&typeof(then=it.then)=='function'?then:false;};var notify=function notify(state,isReject){if(state.notified)return;state.notified=true;var chain=state.reactions;microtask(function(){var value=state.value;var ok=state.state==FULFILLED;var index=0;// variable length - can't use forEach
while(chain.length>index){var reaction=chain[index++];var handler=ok?reaction.ok:reaction.fail;var resolve=reaction.resolve;var reject=reaction.reject;var domain=reaction.domain;var result,then,exited;try{if(handler){if(!ok){if(state.rejection===UNHANDLED)onHandleUnhandled(state);state.rejection=HANDLED;}if(handler===true)result=value;else {if(domain)domain.enter();result=handler(value);// can throw
if(domain){domain.exit();exited=true;}}if(result===reaction.promise){reject(TypeError$1('Promise-chain cycle'));}else if(then=isThenable(result)){then.call(result,resolve,reject);}else resolve(result);}else reject(value);}catch(error){if(domain&&!exited)domain.exit();reject(error);}}state.reactions=[];state.notified=false;if(isReject&&!state.rejection)onUnhandled(state);});};var dispatchEvent=function dispatchEvent(name,promise,reason){var event,handler;if(DISPATCH_EVENT){event=document$1.createEvent('Event');event.promise=promise;event.reason=reason;event.initEvent(name,false,true);global$1.dispatchEvent(event);}else event={promise:promise,reason:reason};if(!NATIVE_REJECTION_EVENT&&(handler=global$1['on'+name]))handler(event);else if(name===UNHANDLED_REJECTION)hostReportErrors('Unhandled promise rejection',reason);};var onUnhandled=function onUnhandled(state){task.call(global$1,function(){var promise=state.facade;var value=state.value;var IS_UNHANDLED=isUnhandled(state);var result;if(IS_UNHANDLED){result=perform(function(){if(IS_NODE){process$1.emit('unhandledRejection',value,promise);}else dispatchEvent(UNHANDLED_REJECTION,promise,value);});// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
state.rejection=IS_NODE||isUnhandled(state)?UNHANDLED:HANDLED;if(result.error)throw result.value;}});};var isUnhandled=function isUnhandled(state){return state.rejection!==HANDLED&&!state.parent;};var onHandleUnhandled=function onHandleUnhandled(state){task.call(global$1,function(){var promise=state.facade;if(IS_NODE){process$1.emit('rejectionHandled',promise);}else dispatchEvent(REJECTION_HANDLED,promise,state.value);});};var bind=function bind(fn,state,unwrap){return function(value){fn(state,value,unwrap);};};var internalReject=function internalReject(state,value,unwrap){if(state.done)return;state.done=true;if(unwrap)state=unwrap;state.value=value;state.state=REJECTED;notify(state,true);};var internalResolve=function internalResolve(state,value,unwrap){if(state.done)return;state.done=true;if(unwrap)state=unwrap;try{if(state.facade===value)throw TypeError$1("Promise can't be resolved itself");var then=isThenable(value);if(then){microtask(function(){var wrapper={done:false};try{then.call(value,bind(internalResolve,wrapper,state),bind(internalReject,wrapper,state));}catch(error){internalReject(wrapper,error,state);}});}else {state.value=value;state.state=FULFILLED;notify(state,false);}}catch(error){internalReject({done:false},error,state);}};// constructor polyfill
if(FORCED){// 25.4.3.1 Promise(executor)
PromiseConstructor=function Promise(executor){anInstance(this,PromiseConstructor,PROMISE);aFunction(executor);Internal.call(this);var state=getInternalState$4(this);try{executor(bind(internalResolve,state),bind(internalReject,state));}catch(error){internalReject(state,error);}};PromiseConstructorPrototype=PromiseConstructor.prototype;// eslint-disable-next-line no-unused-vars -- required for `.length`
Internal=function Promise(executor){setInternalState(this,{type:PROMISE,done:false,notified:false,parent:false,reactions:[],rejection:false,state:PENDING,value:undefined});};Internal.prototype=redefineAll(PromiseConstructorPrototype,{// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
then:function then(onFulfilled,onRejected){var state=getInternalPromiseState(this);var reaction=newPromiseCapability(speciesConstructor(this,PromiseConstructor));reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;reaction.fail=typeof onRejected=='function'&&onRejected;reaction.domain=IS_NODE?process$1.domain:undefined;state.parent=true;state.reactions.push(reaction);if(state.state!=PENDING)notify(state,false);return reaction.promise;},// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
'catch':function _catch(onRejected){return this.then(undefined,onRejected);}});OwnPromiseCapability=function OwnPromiseCapability(){var promise=new Internal();var state=getInternalState$4(promise);this.promise=promise;this.resolve=bind(internalResolve,state);this.reject=bind(internalReject,state);};newPromiseCapabilityModule.f=newPromiseCapability=function newPromiseCapability(C){return C===PromiseConstructor||C===PromiseWrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C);};if(typeof NativePromise=='function'&&NativePromisePrototype!==Object.prototype){nativeThen=NativePromisePrototype.then;if(!SUBCLASSING){// make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
redefine(NativePromisePrototype,'then',function then(onFulfilled,onRejected){var that=this;return new PromiseConstructor(function(resolve,reject){nativeThen.call(that,resolve,reject);}).then(onFulfilled,onRejected);// https://github.com/zloirock/core-js/issues/640
},{unsafe:true});// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
redefine(NativePromisePrototype,'catch',PromiseConstructorPrototype['catch'],{unsafe:true});}// make `.constructor === Promise` work for native promise-based APIs
try{delete NativePromisePrototype.constructor;}catch(error){/* empty */}// make `instanceof Promise` work for native promise-based APIs
if(setPrototypeOf){setPrototypeOf(NativePromisePrototype,PromiseConstructorPrototype);}}}$$k({global:true,wrap:true,forced:FORCED},{Promise:PromiseConstructor});setToStringTag(PromiseConstructor,PROMISE,false);setSpecies(PROMISE);PromiseWrapper=getBuiltIn(PROMISE);// statics
$$k({target:PROMISE,stat:true,forced:FORCED},{// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
reject:function reject(r){var capability=newPromiseCapability(this);capability.reject.call(undefined,r);return capability.promise;}});$$k({target:PROMISE,stat:true,forced:FORCED},{// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
resolve:function resolve(x){return promiseResolve(this,x);}});$$k({target:PROMISE,stat:true,forced:INCORRECT_ITERATION},{// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
all:function all(iterable){var C=this;var capability=newPromiseCapability(C);var resolve=capability.resolve;var reject=capability.reject;var result=perform(function(){var $promiseResolve=aFunction(C.resolve);var values=[];var counter=0;var remaining=1;iterate(iterable,function(promise){var index=counter++;var alreadyCalled=false;values.push(undefined);remaining++;$promiseResolve.call(C,promise).then(function(value){if(alreadyCalled)return;alreadyCalled=true;values[index]=value;--remaining||resolve(values);},reject);});--remaining||resolve(values);});if(result.error)reject(result.value);return capability.promise;},// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
race:function race(iterable){var C=this;var capability=newPromiseCapability(C);var reject=capability.reject;var result=perform(function(){var $promiseResolve=aFunction(C.resolve);iterate(iterable,function(promise){$promiseResolve.call(C,promise).then(capability.resolve,reject);});});if(result.error)reject(result.value);return capability.promise;}});data$4.dispatch;// prettier-ignore
var withSelect=data$4.withSelect;var WithFocusWithin$1=function WithFocusWithin(Component){return withSelect(function(select,ownProps){var clientId=ownProps.clientId;return {focusWithin:hasSelectedInnerBlock$1(select('core/block-editor'),clientId)};})(Component);};var AddIconButton=AddIconButton$1,FontAwesomeIcon=FontAwesomeIcon$1,InputWithIcon=InputWithIcon$1,ModalOpener=ModalOpener$1,WithModal=WithModal$1,ControlledModal=ControlledModal$1,WithControlledChildren=WithControlledChildren$1,WithFocusWithin=WithFocusWithin$1;var truncateString=truncateString$1;

var faTrash = {};

(function (exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'trash';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f1f8';
var svgPathData = 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTrash = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
}(faTrash));

var ButtonGroup$5 = components.ButtonGroup,
    Button$6 = components.Button;
var __$9 = i18n.__;
var SlideControlButtons = function SlideControlButtons(props) {
  var active = props.active,
      type = props.attributes.type,
      deleteChild = props.deleteChild,
      moveChild = props.moveChild,
      index = props.index,
      setCurrentlyEditedChild = props.setCurrentlyEditedChild,
      slide = props.slide,
      getSlideDisplayName = props.getSlideDisplayName;
  var nameShown = getSlideDisplayName(type, slide.attributes) || "Slide ".concat(index + 1);
  return /*#__PURE__*/React.createElement("li", {
    className: classnames$3({
      'is-active': active
    })
  }, active ? /*#__PURE__*/React.createElement(ButtonGroup$5, null, /*#__PURE__*/React.createElement(Button$6, {
    isPrimary: true,
    onClick: function onClick() {
      moveChild(slide, 'up');
    }
  }, "\u2190"), /*#__PURE__*/React.createElement(Button$6, {
    isPrimary: true,
    onClick: function onClick() {
      setCurrentlyEditedChild(slide);
    }
  }, truncateString(nameShown, {
    length: 20
  })), /*#__PURE__*/React.createElement(Button$6, {
    isPrimary: true,
    isDestructive: true,
    onClick: function onClick() {
      if (window.confirm(__$9('Delete slide?', 'ghwp'))) {
        deleteChild(slide);
      }
    }
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTrash.faTrash,
    small: true
  })), /*#__PURE__*/React.createElement(Button$6, {
    isPrimary: true,
    onClick: function onClick() {
      moveChild(slide, 'down');
    }
  }, "\u2192")) : /*#__PURE__*/React.createElement(Button$6, {
    isPrimary: true,
    onClick: function onClick() {
      setCurrentlyEditedChild(slide);
    }
  }, truncateString(nameShown, {
    length: 20
  })));
};

var ButtonGroup$4 = components.ButtonGroup;
var SlideshowHeader = function SlideshowHeader(props) {
  var currentlyEditedChildIndex = props.attributes.currentlyEditedChildIndex,
      children = props.children,
      onSlideAdd = props.onSlideAdd;
  return /*#__PURE__*/React.createElement("ul", {
    className: "ghwp-slide-list"
  }, children.map(function (slide, index) {
    return /*#__PURE__*/React.createElement(SlideControlButtons, _extends$1({
      key: index,
      index: index,
      slide: slide,
      active: index === currentlyEditedChildIndex
    }, props));
  }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ButtonGroup$4, null, /*#__PURE__*/React.createElement("div", {
    className: "ghwp-editor-tab"
  }, /*#__PURE__*/React.createElement(AddIconButton, {
    className: "ghwp-editor-slide-add-button",
    onClick: onSlideAdd
  })))));
};

var Alarm = function Alarm(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
  }));
};

var Delete = function Delete(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var Filter1 = function Filter1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
  }));
};

var Filter2 = function Filter2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"
  }));
};

var Filter3 = function Filter3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"
  }));
};

var Filter5 = function Filter5(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"
  }));
};

var Filter6 = function Filter6(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"
  }));
};

var Height = function Height(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("polygon", {
    points: "13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"
  })));
};

var KeyboardArrowDown = function KeyboardArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var KeyboardArrowLeft = function KeyboardArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var KeyboardArrowRight = function KeyboardArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var KeyboardArrowUp = function KeyboardArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};
/**
 * Two concentric arrows arranged in a circle
 *
 * @param props
 * @return {*}
 * @constructor
 */


var Loop = function Loop(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }));
};
/**
 * Three dots / Menu icon
 *
 * @param props
 * @return {*}
 * @constructor
 */


var MoreHorizontal = function MoreHorizontal(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

var PhoneIphone = function PhoneIphone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
  }));
};

var PlayCircleOutline = function PlayCircleOutline(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, /*#__PURE__*/React.createElement("path", _extends$1({
    d: "M0 0h24v24H0z",
    fill: "none"
  }, props)), /*#__PURE__*/React.createElement("path", {
    d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }));
};

var Preview = function Preview(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z"
  })));
};

var SmartScreen = function SmartScreen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24",
    y: "0"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,17H6V7h12V17z"
  }), /*#__PURE__*/React.createElement("rect", {
    height: "1.5",
    width: "1.5",
    x: "15",
    y: "11.25"
  }), /*#__PURE__*/React.createElement("rect", {
    height: "1.5",
    width: "1.5",
    x: "12.5",
    y: "11.25"
  }), /*#__PURE__*/React.createElement("rect", {
    height: "1.5",
    width: "1.5",
    x: "10",
    y: "11.25"
  }), /*#__PURE__*/React.createElement("rect", {
    height: "1.5",
    width: "1.5",
    x: "7.5",
    y: "11.25"
  }))));
};

var SpaceBar = function SpaceBar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9v4H6V9H4v6h16V9z"
  }));
};

var SwapHoriz = function SwapHoriz(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var ViewCarousel = function ViewCarousel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var ViewColumn = function ViewColumn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"
  }));
};

var Button$5 = components.Button;
var SlideshowEditorArrow = function SlideshowEditorArrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/React.createElement(Button$5, {
    className: "ghwp-slider-arrow",
    onClick: onClick,
    disabled: disabled
  }, direction === 'left' ? /*#__PURE__*/React.createElement(KeyboardArrowLeft, null) : /*#__PURE__*/React.createElement(KeyboardArrowRight, null));
};

var Button$4 = components.Button,
    ButtonGroup$3 = components.ButtonGroup,
    Icon = components.Icon,
    PanelBody$3 = components.PanelBody,
    PanelRow$4 = components.PanelRow;
var __$8 = i18n.__;
var SlideManagementControls = function SlideManagementControls(props) {
  var _props$attributes = props.attributes,
      currentlyEditedChildIndex = _props$attributes.currentlyEditedChildIndex,
      type = _props$attributes.type,
      children = props.children,
      deleteChild = props.deleteChild,
      moveChild = props.moveChild,
      setCurrentlyEditedChild = props.setCurrentlyEditedChild,
      onSlideAdd = props.onSlideAdd,
      getSlideDisplayName = props.getSlideDisplayName;
  return /*#__PURE__*/React.createElement(PanelBody$3, {
    title: __$8('Slide management', 'ghwp'),
    initialOpen: true,
    icon: 'more'
  }, children.map(function (slide, index) {
    return /*#__PURE__*/React.createElement(PanelRow$4, {
      key: index
    }, /*#__PURE__*/React.createElement(ButtonGroup$3, {
      style: {
        display: 'inline-flex',
        paddingBottom: '2px',
        width: '100%'
      },
      className: classnames$3({
        'is-active': index === currentlyEditedChildIndex
      })
    }, /*#__PURE__*/React.createElement(Button$4, {
      isPrimary: true,
      style: {
        alignItems: 'center'
      },
      onClick: function onClick() {
        return moveChild(slide, 'up');
      }
    }, /*#__PURE__*/React.createElement(KeyboardArrowUp, null)), /*#__PURE__*/React.createElement(Button$4, {
      isPrimary: true,
      style: {
        alignItems: 'center',
        flex: '1 1 auto'
      },
      onClick: function onClick() {
        return setCurrentlyEditedChild(slide);
      }
    }, truncateString(getSlideDisplayName(type, slide.attributes), {
      length: 20
    }) || "Slide ".concat(index + 1)), /*#__PURE__*/React.createElement(Button$4, {
      isPrimary: true,
      isDestructive: true,
      style: {
        alignItems: 'center'
      },
      onClick: function onClick() {
        if (window.confirm(__$8('Delete slide?', 'ghwp'))) {
          deleteChild(slide);
        }
      }
    }, /*#__PURE__*/React.createElement(Delete, null)), /*#__PURE__*/React.createElement(Button$4, {
      isPrimary: true,
      style: {
        alignItems: 'center'
      },
      onClick: function onClick() {
        return moveChild(slide, 'down');
      }
    }, /*#__PURE__*/React.createElement(KeyboardArrowDown, null))));
  }), /*#__PURE__*/React.createElement(PanelRow$4, null, /*#__PURE__*/React.createElement(Button$4, {
    isPrimary: true,
    style: {
      alignItems: 'center',
      width: '100%'
    },
    onClick: onSlideAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "plus"
  }), __$8('Add slide', 'ghwp'))));
};

var ToolbarButton$1 = components.ToolbarButton;
var SlideCountToolbar = function SlideCountToolbar(props) {
  var slidesShown = props.attributes.slidesShown,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarButton$1, {
    icon: Filter1,
    label: 'Set maximum visible slide count to 1',
    isPressed: slidesShown === 1,
    onClick: function onClick() {
      setAttributes({
        slidesShown: 1
      });
    }
  }), /*#__PURE__*/React.createElement(ToolbarButton$1, {
    icon: Filter2,
    label: 'Set maximum visible slide count to 2',
    isPressed: slidesShown === 2,
    onClick: function onClick() {
      setAttributes({
        slidesShown: 2
      });
    }
  }), /*#__PURE__*/React.createElement(ToolbarButton$1, {
    icon: Filter3,
    label: 'Set maximum visible slide count to 3',
    isPressed: slidesShown === 3,
    onClick: function onClick() {
      setAttributes({
        slidesShown: 3
      });
    }
  }), /*#__PURE__*/React.createElement(ToolbarButton$1, {
    icon: Filter5,
    label: 'Set maximum visible slide count to 5',
    isPressed: slidesShown === 5,
    onClick: function onClick() {
      setAttributes({
        slidesShown: 5
      });
    }
  }), /*#__PURE__*/React.createElement(ToolbarButton$1, {
    icon: Filter6,
    label: 'Set maximum visible slide count to 6',
    isPressed: slidesShown === 6,
    onClick: function onClick() {
      setAttributes({
        slidesShown: 6
      });
    }
  }));
};

var regexpStickyHelpers = {};

var fails$2 = fails$19;

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE = function (s, f) {
  return RegExp(s, f);
};

regexpStickyHelpers.UNSUPPORTED_Y = fails$2(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

regexpStickyHelpers.BROKEN_CARET = fails$2(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var fails$1 = fails$19;

var regexpUnsupportedDotAll = fails$1(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails = fails$19;

var regexpUnsupportedNcg = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = regexpFlags$5;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$i.exports;
var create = objectCreate$3;
var getInternalState = internalState$3.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec = patchedExec;

var $$1 = _export$3;
var exec = regexpExec;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$1({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Button$3 = components.Button,
    Panel$4 = components.Panel,
    PanelBody$2 = components.PanelBody,
    PanelRow$3 = components.PanelRow;
var __$7 = i18n.__;

function mapPresetToAttributes(options) {
  var mappedOptions = Object.assign({}, options);
  Object.keys(options).forEach(function (key) {
    var re = /^a(utoplay.*)$/;

    if (re.test(key)) {
      var parsedKey = re.exec(key);
      mappedOptions["useA".concat(parsedKey[1])] = options[key];
      delete mappedOptions[key];
    }
  });
  mappedOptions['sliderLibrary'] = options.lib;
  delete mappedOptions.lib;
  return mappedOptions;
}

function applyPreset(setAttributes, presetId) {
  var values = presetManager.getPreset(presetId);
  var mappedValues = mapPresetToAttributes(values);
  console.log({
    values: values,
    mappedValues: mappedValues,
    presetId: presetId
  });
  setAttributes(_objectSpread$1({}, mappedValues));
}

var PresetControls = function PresetControls(props) {
  var setAttributes = props.setAttributes;
  var presets = presetManager.getAvailablePresetNames();
  return /*#__PURE__*/React.createElement(Panel$4, null, /*#__PURE__*/React.createElement(PanelBody$2, {
    title: __$7('Slideshow Presets', 'ghwp'),
    icon: 'more',
    initialOpen: false
  }, presets.map(function (preset, index) {
    return /*#__PURE__*/React.createElement(PanelRow$3, {
      key: index
    }, /*#__PURE__*/React.createElement(Button$3, {
      key: index,
      isDefault: true,
      onClick: function onClick() {
        applyPreset(setAttributes, preset.id);
      }
    }, preset.label));
  })));
};

var Panel$3 = components.Panel,
    PanelRow$2 = components.PanelRow,
    RangeControl$8 = components.RangeControl,
    ToggleControl$4 = components.ToggleControl,
    WPToolbar = components.Toolbar,
    ToolbarButton = components.ToolbarButton;
var BlockControls = blockEditor.BlockControls,
    InspectorControls = blockEditor.InspectorControls;
var __$6 = i18n.__;
var Controls = function Controls(props) {
  var _props$attributes = props.attributes,
      currentlyEditedChildIndex = _props$attributes.currentlyEditedChildIndex,
      infiniteLoop = _props$attributes.infiniteLoop,
      slidesShown = _props$attributes.slidesShown,
      useAutoplay = _props$attributes.useAutoplay,
      setAttributes = props.setAttributes,
      _props$showSlideCount = props.showSlideCountControls,
      showSlideCountControls = _props$showSlideCount === void 0 ? true : _props$showSlideCount;
  var showBlockControls = currentlyEditedChildIndex !== null && _typeof$1(currentlyEditedChildIndex) !== undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement("div", {
    className: "ghwp-inspector-section"
  }, /*#__PURE__*/React.createElement(InputWithIcon, {
    icon: ViewColumn,
    label: __$6('Slides shown', 'ghwp'),
    setAttributes: setAttributes,
    attributeName: 'slidesShown',
    component: RangeControl$8,
    value: slidesShown,
    withInputField: true,
    min: 1,
    max: 10,
    isShiftStepEnabled: false
  }), /*#__PURE__*/React.createElement(InputWithIcon, {
    icon: Loop,
    label: __$6('Infinite loop', 'ghwp'),
    onChange: function onChange(infiniteLoop) {
      setAttributes({
        infiniteLoop: infiniteLoop,
        infiniteLoopMedium: infiniteLoop,
        infiniteLoopSmall: infiniteLoop
      });
    },
    component: ToggleControl$4,
    checked: infiniteLoop
  }), /*#__PURE__*/React.createElement(InputWithIcon, {
    icon: PlayCircleOutline,
    label: __$6('Autoplay', 'ghwp'),
    onChange: function onChange(useAutoplay) {
      setAttributes({
        useAutoplay: useAutoplay,
        useAutoplayMedium: useAutoplay,
        useAutoplaySmall: useAutoplay
      });
    },
    compone: true,
    nt: ToggleControl$4,
    checked: useAutoplay
  }), /*#__PURE__*/React.createElement(PanelRow$2, null, /*#__PURE__*/React.createElement(ModalOpener, props, "Advanced Settings")), /*#__PURE__*/React.createElement(PresetControls, props), /*#__PURE__*/React.createElement(Panel$3, null, /*#__PURE__*/React.createElement(SlideManagementControls, props)))), showBlockControls && /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(WPToolbar, null, showSlideCountControls && /*#__PURE__*/React.createElement(SlideCountToolbar, props)), /*#__PURE__*/React.createElement(WPToolbar, null, /*#__PURE__*/React.createElement(ToolbarButton, {
    icon: PlayCircleOutline,
    label: 'Autoplay',
    isPressed: useAutoplay,
    onClick: function onClick(useAutoplay) {
      setAttributes({
        useAutoplay: useAutoplay
      });
    }
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    icon: Loop,
    label: 'Infinite Loop',
    isPressed: infiniteLoop,
    onClick: function onClick(infiniteLoop) {
      setAttributes({
        infiniteLoop: infiniteLoop
      });
    }
  }), /*#__PURE__*/React.createElement(ModalOpener, _extends$1({
    toolbar: true,
    icon: "admin-generic"
  }, props)))));
};

var $ = _export$3;
var $find = arrayIteration$2.find;
var addToUnscopables = addToUnscopables$9;

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var spreadableSymbol = Symbol$4 ? Symbol$4.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray$c(value) || isArguments$1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache$1;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* Built-in method references that are verified to be native. */
var Set = getNative$1(root$1, 'Set');

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

var DEFAULT_ALLOWED_CHILDREN = [{
  /* The block's identifier */
  type: 'core/heading',

  /* The block's own attribute that is used to show its "name" in the
     slides overview and slideshow controls                             */
  nameAttribute: 'content',

  /* Here we can set some default attributes to be applied to the block
     when it's added to the slideshow as a slide                        */
  defaultAttributes: {
    content: 'New Heading Slide',
    className: 'ghwp-slideshow__slide'
  },

  /* In retrospect, we could have used the block's `title` property, but
     that would've been to easy: This is the name that will be shown
     on the placeholder / type selection screen.                        */
  prettyName: 'Heading'
}, {
  type: 'core/image',
  nameAttribute: 'alt',
  defaultAttributes: {
    className: 'ghwp-slideshow__slide'
  },
  prettyName: 'Image'
}, {
  type: 'core/paragraph',
  nameAttribute: 'content',
  defaultAttributes: {
    className: 'ghwp-slideshow__slide'
  },
  prettyName: 'Paragraph'
}, {
  type: 'ghwp/post-teaser',
  nameAttribute: 'postTitle',
  defaultAttributes: {
    className: 'ghwp-slideshow__slide',
    type: 'boxed'
  },
  prettyName: 'Post teaser'
}];

var ChildManager = /*#__PURE__*/function () {
  function ChildManager() {
    _classCallCheck$1(this, ChildManager);

    this.allowedChildren = DEFAULT_ALLOWED_CHILDREN;
    this.getSlideDefaultAttributes = this.getSlideDefaultAttributes.bind(this);
    this.getSlideDisplayName = this.getSlideDisplayName.bind(this);
    this.getAllowedChildrenForSelect = this.getAllowedChildrenForSelect.bind(this);
  }

  _createClass$1(ChildManager, [{
    key: "setAllowedChildren",
    value: function setAllowedChildren(allowedChildren) {
      this.allowedChildren = allowedChildren;
    }
  }, {
    key: "extendAllowedChildren",
    value: function extendAllowedChildren(additionalAllowedChildren) {
      this.allowedChildren = union(this.allowedChildren, additionalAllowedChildren);
    }
  }, {
    key: "getSlideDefaultAttributes",
    value: function getSlideDefaultAttributes(type) {
      return this.allowedChildren.find(function (el) {
        return el.type === type;
      }).defaultAttributes;
    }
  }, {
    key: "getSlideDisplayName",
    value: function getSlideDisplayName(type, slideAttributes) {
      var nameAttr = this.allowedChildren.find(function (el) {
        return el.type === type;
      }).nameAttribute;
      return slideAttributes[nameAttr];
    }
  }, {
    key: "getAllowedChildrenForSelect",
    value: function getAllowedChildrenForSelect() {
      return this.allowedChildren.map(function (el) {
        return {
          label: el.prettyName,
          value: el.type
        };
      });
    }
  }]);

  return ChildManager;
}();

var slideshowChildren = new ChildManager();

var __$5 = i18n.__;
var ModalInputWithIcon = function ModalInputWithIcon(props) {
  var Icon = props.icon,
      label = props.label,
      _props$isSuboption = props.isSuboption,
      isSuboption = _props$isSuboption === void 0 ? false : _props$isSuboption,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: isSuboption ? 'ghwp-miwi__suboption' : 'ghwp-miwi'
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghwp-miwi__icon"
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("div", {
    className: "ghwp-miwi__label"
  }, /*#__PURE__*/React.createElement("label", null, !isSuboption ? /*#__PURE__*/React.createElement("b", null, __$5(label, 'ghwp')) : __$5(label, 'ghwp'))), children);
};
var InputWrap = function InputWrap(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ghwp-miwi__input"
  }, props.children);
};
var MediumVariation = function MediumVariation(props) {
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    isSuboption: true,
    icon: SmartScreen,
    label: "Medium sized screens (".concat(props.attributes.breakpointSmall, "px < x < ").concat(props.attributes.breakpointMedium, "px)")
  }, /*#__PURE__*/React.createElement(InputWrap, null, props.children));
};
var SmallVariation = function SmallVariation(props) {
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    isSuboption: true,
    icon: PhoneIphone,
    label: "Small screens (< ".concat(props.attributes.breakpointSmall, "px)")
  }, /*#__PURE__*/React.createElement(InputWrap, null, props.children));
};

var Panel$2 = components.Panel,
    PanelBody$1 = components.PanelBody,
    PanelRow$1 = components.PanelRow,
    RangeControl$7 = components.RangeControl,
    ToggleControl$3 = components.ToggleControl;
var __$4 = i18n.__;
var AutoplayPanel = function AutoplayPanel(props) {
  var _props$attributes = props.attributes,
      autoplaySpeed = _props$attributes.autoplaySpeed,
      sliderLibrary = _props$attributes.sliderLibrary,
      useAutoplay = _props$attributes.useAutoplay,
      useAutoplayMedium = _props$attributes.useAutoplayMedium,
      useAutoplaySmall = _props$attributes.useAutoplaySmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(Panel$2, null, /*#__PURE__*/React.createElement(PanelBody$1, {
    title: __$4('Autoplay', 'ghwp'),
    icon: 'more',
    initialOpen: false
  }, /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    label: "Autoplay",
    icon: PlayCircleOutline
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(ToggleControl$3, {
    checked: useAutoplay,
    onChange: function onChange(useAutoplay) {
      setAttributes({
        useAutoplay: useAutoplay
      });
    }
  })), sliderLibrary === libraries.GLIDE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(ToggleControl$3, {
    checked: useAutoplayMedium,
    onChange: function onChange(useAutoplayMedium) {
      setAttributes({
        useAutoplayMedium: useAutoplayMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(ToggleControl$3, {
    checked: useAutoplaySmall,
    onChange: function onChange(useAutoplaySmall) {
      setAttributes({
        useAutoplaySmall: useAutoplaySmall
      });
    }
  })))), (useAutoplay || useAutoplayMedium || useAutoplaySmall) && /*#__PURE__*/React.createElement(PanelRow$1, null, /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: Alarm,
    label: 'Autoplay speed (delay in ms)'
  }, /*#__PURE__*/React.createElement(RangeControl$7, {
    value: autoplaySpeed,
    withInputField: true,
    min: 500,
    max: 10000,
    step: 100,
    isShiftStepEnabled: true,
    shiftStep: 1000,
    marks: [{
      value: 1000,
      label: '1s'
    }, {
      value: 2000,
      label: '2s'
    }, {
      value: 3000,
      label: '3s'
    }, {
      value: 5000,
      label: '5s'
    }],
    onChange: function onChange(autoplaySpeed) {
      setAttributes({
        autoplaySpeed: autoplaySpeed
      });
    }
  })))));
};

var TextControl = components.TextControl;
var BreakpointsControl = function BreakpointsControl(props) {
  var _props$attributes = props.attributes,
      breakpointMedium = _props$attributes.breakpointMedium,
      breakpointSmall = _props$attributes.breakpointSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: SwapHoriz,
    label: "Breakpoints"
  }, /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(TextControl, {
    value: breakpointMedium,
    type: 'number',
    onChange: function onChange(breakpointMedium) {
      setAttributes({
        breakpointMedium: breakpointMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(TextControl, {
    value: breakpointSmall,
    type: 'number',
    onChange: function onChange(breakpointSmall) {
      setAttributes({
        breakpointSmall: breakpointSmall
      });
    }
  })));
};

var ToggleControl$2 = components.ToggleControl;
var CenterModeControl = function CenterModeControl(props) {
  var _props$attributes = props.attributes,
      centerMode = _props$attributes.centerMode,
      centerModeMedium = _props$attributes.centerModeMedium,
      centerModeSmall = _props$attributes.centerModeSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: ViewCarousel,
    label: "Center Mode"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(ToggleControl$2, {
    checked: centerMode,
    onChange: function onChange(centerMode) {
      setAttributes({
        centerMode: centerMode
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(ToggleControl$2, {
    checked: centerModeMedium,
    onChange: function onChange(centerModeMedium) {
      setAttributes({
        centerModeMedium: centerModeMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(ToggleControl$2, {
    checked: centerModeSmall,
    onChange: function onChange(centerModeSmall) {
      setAttributes({
        centerModeSmall: centerModeSmall
      });
    }
  })));
};

var ToggleControl$1 = components.ToggleControl;
var DotsControl = function DotsControl(props) {
  var _props$attributes = props.attributes,
      dots = _props$attributes.dots,
      dotsMedium = _props$attributes.dotsMedium,
      dotsSmall = _props$attributes.dotsSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    label: "Show dots",
    icon: MoreHorizontal
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(ToggleControl$1, {
    checked: dots,
    onChange: function onChange(dots) {
      setAttributes({
        dots: dots
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(ToggleControl$1, {
    checked: dotsMedium,
    onChange: function onChange(dotsMedium) {
      setAttributes({
        dotsMedium: dotsMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(ToggleControl$1, {
    checked: dotsSmall,
    onChange: function onChange(dotsSmall) {
      setAttributes({
        dotsSmall: dotsSmall
      });
    }
  })));
};

var RangeControl$6 = components.RangeControl;
var EdgePaddingControl = function EdgePaddingControl(props) {
  var _props$attributes = props.attributes,
      edgePadding = _props$attributes.edgePadding,
      edgePaddingMedium = _props$attributes.edgePaddingMedium,
      edgePaddingSmall = _props$attributes.edgePaddingSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: SwapHoriz,
    label: "Edge Padding"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl$6, {
    value: edgePadding,
    withInputField: true,
    min: 0,
    max: 200,
    step: 10,
    onChange: function onChange(edgePadding) {
      setAttributes({
        edgePadding: edgePadding
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl$6, {
    value: edgePaddingMedium,
    withInputField: true,
    min: 0,
    max: 200,
    step: 10,
    onChange: function onChange(edgePaddingMedium) {
      setAttributes({
        edgePaddingMedium: edgePaddingMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl$6, {
    value: edgePaddingSmall,
    withInputField: true,
    min: 0,
    max: 200,
    step: 10,
    onChange: function onChange(edgePaddingSmall) {
      setAttributes({
        edgePaddingSmall: edgePaddingSmall
      });
    }
  })));
};

var ToggleControl = components.ToggleControl;
var InfiniteLoopControl = function InfiniteLoopControl(props) {
  var _props$attributes = props.attributes,
      infiniteLoop = _props$attributes.infiniteLoop,
      infiniteLoopMedium = _props$attributes.infiniteLoopMedium,
      infiniteLoopSmall = _props$attributes.infiniteLoopSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: Loop,
    label: "Infinite loop"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(ToggleControl, {
    checked: infiniteLoop,
    onChange: function onChange(infiniteLoop) {
      setAttributes({
        infiniteLoop: infiniteLoop
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(ToggleControl, {
    checked: infiniteLoopMedium,
    onChange: function onChange(infiniteLoopMedium) {
      setAttributes({
        infiniteLoopMedium: infiniteLoopMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(ToggleControl, {
    checked: infiniteLoopSmall,
    onChange: function onChange(infiniteLoopSmall) {
      setAttributes({
        infiniteLoopSmall: infiniteLoopSmall
      });
    }
  })));
};

var ButtonGroup$2 = components.ButtonGroup,
    Button$2 = components.Button,
    RangeControl$5 = components.RangeControl;
var InitialSlideControl = function InitialSlideControl(props) {
  var initialSlide = props.attributes.initialSlide,
      children = props.children,
      setAttributes = props.setAttributes,
      _props$rangeSlider = props.rangeSlider,
      rangeSlider = _props$rangeSlider === void 0 ? false : _props$rangeSlider;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    label: "Initial slide",
    icon: Alarm
  }, rangeSlider ? /*#__PURE__*/React.createElement(RangeControl$5, {
    value: initialSlide + 1,
    onChange: function onChange(newVal) {
      setAttributes({
        initialSlide: newVal - 1
      });
    },
    min: 1,
    max: children.length,
    withInputField: true
  }) : /*#__PURE__*/React.createElement(ButtonGroup$2, {
    style: {
      display: 'flex'
    }
  }, children.map(function (e, i) {
    return /*#__PURE__*/React.createElement(Button$2, {
      key: e.title,
      isPrimary: true,
      onClick: function onClick() {
        setAttributes({
          initialSlide: i
        });
      },
      isPressed: initialSlide === i
    }, i + 1);
  })));
};

var ButtonGroup$1 = components.ButtonGroup,
    Button$1 = components.Button;
var __$3 = i18n.__;
var LibraryControl = function LibraryControl(props) {
  var sliderLibrary = props.attributes.sliderLibrary,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    label: "Frontend Library Module to use",
    icon: ViewCarousel
  }, /*#__PURE__*/React.createElement(ButtonGroup$1, null, /*#__PURE__*/React.createElement(Button$1, {
    isPrimary: true,
    isPressed: sliderLibrary === libraries.GLIDE,
    onClick: function onClick() {
      setAttributes({
        sliderLibrary: libraries.GLIDE
      });
    }
  }, __$3('Glide.js', 'ghwp')), /*#__PURE__*/React.createElement(Button$1, {
    isPrimary: true,
    isPressed: sliderLibrary === libraries.SPLIDE,
    onClick: function onClick() {
      setAttributes({
        sliderLibrary: libraries.SPLIDE
      });
    }
  }, __$3('Splide', 'ghwp'))));
};

var RangeControl$4 = components.RangeControl;
var SecondaryGapControl = function SecondaryGapControl(props) {
  var _props$attributes = props.attributes,
      secondaryGap = _props$attributes.secondaryGap,
      secondaryGapMedium = _props$attributes.secondaryGapMedium,
      secondaryGapSmall = _props$attributes.secondaryGapSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: SwapHoriz,
    label: "Thumbnail gap"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl$4, {
    value: secondaryGap,
    withInputField: true,
    min: 0,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryGap) {
      setAttributes({
        secondaryGap: secondaryGap
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl$4, {
    value: secondaryGapMedium,
    withInputField: true,
    min: 0,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryGapMedium) {
      setAttributes({
        secondaryGapMedium: secondaryGapMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl$4, {
    value: secondaryGapSmall,
    withInputField: true,
    min: 0,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryGapSmall) {
      setAttributes({
        secondaryGapSmall: secondaryGapSmall
      });
    }
  })));
};

var RangeControl$3 = components.RangeControl;
var SecondaryHeightControl = function SecondaryHeightControl(props) {
  var _props$attributes = props.attributes,
      secondaryHeight = _props$attributes.secondaryHeight,
      secondaryHeightMedium = _props$attributes.secondaryHeightMedium,
      secondaryHeightSmall = _props$attributes.secondaryHeightSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: Height,
    label: "Thumbnail height"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl$3, {
    value: secondaryHeight,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryHeight) {
      setAttributes({
        secondaryHeight: secondaryHeight
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl$3, {
    value: secondaryHeightMedium,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryHeightMedium) {
      setAttributes({
        secondaryHeightMedium: secondaryHeightMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl$3, {
    value: secondaryHeightSmall,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryHeightSmall) {
      setAttributes({
        secondaryHeightSmall: secondaryHeightSmall
      });
    }
  })));
};

var RangeControl$2 = components.RangeControl;
var SecondarySlideCountControl = function SecondarySlideCountControl(props) {
  var _props$attributes = props.attributes,
      secondarySlidesShown = _props$attributes.secondarySlidesShown,
      secondarySlidesShownMedium = _props$attributes.secondarySlidesShownMedium,
      secondarySlidesShownSmall = _props$attributes.secondarySlidesShownSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: ViewColumn,
    label: "Thumbnails shown"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl$2, {
    value: secondarySlidesShown,
    withInputField: true,
    min: 1,
    max: 16,
    isShiftStepEnabled: false,
    onChange: function onChange(secondarySlidesShown) {
      setAttributes({
        secondarySlidesShown: secondarySlidesShown
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl$2, {
    value: secondarySlidesShownMedium,
    withInputField: true,
    min: 1,
    max: 12,
    isShiftStepEnabled: false,
    onChange: function onChange(secondarySlidesShownMedium) {
      setAttributes({
        secondarySlidesShownMedium: secondarySlidesShownMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl$2, {
    value: secondarySlidesShownSmall,
    withInputField: true,
    min: 1,
    max: 10,
    isShiftStepEnabled: false,
    onChange: function onChange(secondarySlidesShownSmall) {
      setAttributes({
        secondarySlidesShownSmall: secondarySlidesShownSmall
      });
    }
  })));
};

var RangeControl$1 = components.RangeControl;
var SecondaryWidthControl = function SecondaryWidthControl(props) {
  var _props$attributes = props.attributes,
      secondaryWidth = _props$attributes.secondaryWidth,
      secondaryWidthMedium = _props$attributes.secondaryWidthMedium,
      secondaryWidthSmall = _props$attributes.secondaryWidthSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: SpaceBar,
    label: "Thumbnail width"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl$1, {
    value: secondaryWidth,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryWidth) {
      setAttributes({
        secondaryWidth: secondaryWidth
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl$1, {
    value: secondaryWidthMedium,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryWidthMedium) {
      setAttributes({
        secondaryWidthMedium: secondaryWidthMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl$1, {
    value: secondaryWidthSmall,
    withInputField: true,
    min: 20,
    max: 200,
    isShiftStepEnabled: false,
    onChange: function onChange(secondaryWidthSmall) {
      setAttributes({
        secondaryWidthSmall: secondaryWidthSmall
      });
    }
  })));
};

var ButtonGroup = components.ButtonGroup,
    Button = components.Button,
    Panel$1 = components.Panel,
    PanelBody = components.PanelBody,
    PanelRow = components.PanelRow;
var __$2 = i18n.__;
var SecondarySliderPanel = function SecondarySliderPanel(props) {
  var _props$attributes = props.attributes,
      linkingType = _props$attributes.linkingType,
      type = _props$attributes.type,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'core/image' && /*#__PURE__*/React.createElement(Panel$1, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __$2('Navigation / Secondary slider', 'ghwp'),
    icon: 'more',
    initialOpen: false
  }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    label: "Navigation Mode",
    icon: Preview
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    isPrimary: true,
    isPressed: linkingType === linkTypes.NONE,
    onClick: function onClick() {
      setAttributes({
        linkingType: linkTypes.NONE
      });
    }
  }, __$2('No Navigation', 'ghwp')), /*#__PURE__*/React.createElement(Button, {
    isPrimary: true,
    isPressed: linkingType === linkTypes.THUMBS,
    onClick: function onClick() {
      setAttributes({
        linkingType: linkTypes.THUMBS
      });
    }
  }, __$2('Thumbnail style navigation', 'ghwp'))))), linkingType !== linkTypes.NONE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecondarySlideCountControl, props), /*#__PURE__*/React.createElement(SecondaryGapControl, props), /*#__PURE__*/React.createElement(SecondaryHeightControl, props), /*#__PURE__*/React.createElement(SecondaryWidthControl, props)))));
};

var RangeControl = components.RangeControl;
var SlidesToScrollControl = function SlidesToScrollControl(props) {
  var _props$attributes = props.attributes,
      sliderLibrary = _props$attributes.sliderLibrary,
      slidesShown = _props$attributes.slidesShown,
      slidesToScroll = _props$attributes.slidesToScroll,
      slidesToScrollMedium = _props$attributes.slidesToScrollMedium,
      slidesToScrollSmall = _props$attributes.slidesToScrollSmall,
      setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, sliderLibrary === libraries.SPLIDE && /*#__PURE__*/React.createElement(ModalInputWithIcon, {
    icon: Filter3,
    label: "Slides scrolled"
  }, /*#__PURE__*/React.createElement(InputWrap, null, /*#__PURE__*/React.createElement(RangeControl, {
    value: slidesToScroll,
    withInputField: true,
    min: 1,
    max: slidesShown,
    isShiftStepEnabled: false,
    onChange: function onChange(slidesToScroll) {
      setAttributes({
        slidesToScroll: slidesToScroll
      });
    }
  })), /*#__PURE__*/React.createElement(MediumVariation, props, /*#__PURE__*/React.createElement(RangeControl, {
    value: slidesToScrollMedium,
    withInputField: true,
    min: 1,
    max: slidesShown,
    isShiftStepEnabled: false,
    onChange: function onChange(slidesToScrollMedium) {
      setAttributes({
        slidesToScrollMedium: slidesToScrollMedium
      });
    }
  })), /*#__PURE__*/React.createElement(SmallVariation, props, /*#__PURE__*/React.createElement(RangeControl, {
    value: slidesToScrollSmall,
    withInputField: true,
    min: 1,
    max: slidesShown,
    isShiftStepEnabled: false,
    onChange: function onChange(slidesToScrollSmall) {
      setAttributes({
        slidesToScrollSmall: slidesToScrollSmall
      });
    }
  }))));
};

var Panel = components.Panel;
var AdvancedOptionsModal = function AdvancedOptionsModal(props) {
  var sliderLibrary = props.attributes.sliderLibrary;
  return /*#__PURE__*/React.createElement(ControlledModal, props, /*#__PURE__*/React.createElement("h2", null, "Slideshow: Advanced Settings"), /*#__PURE__*/React.createElement(LibraryControl, props), /*#__PURE__*/React.createElement(BreakpointsControl, props), /*#__PURE__*/React.createElement(SlidesToScrollControl, props), /*#__PURE__*/React.createElement(InitialSlideControl, props), /*#__PURE__*/React.createElement(CenterModeControl, props), /*#__PURE__*/React.createElement(EdgePaddingControl, props), /*#__PURE__*/React.createElement(DotsControl, props), /*#__PURE__*/React.createElement(InfiniteLoopControl, props), /*#__PURE__*/React.createElement(AutoplayPanel, props), sliderLibrary === libraries.SPLIDE && /*#__PURE__*/React.createElement(SecondarySliderPanel, props), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(SlideManagementControls, props)));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var InnerBlocks$1 = blockEditor.InnerBlocks;
var createBlock = blocks.createBlock;
var Placeholder = components.Placeholder,
    SelectControl = components.SelectControl;
var __$1 = i18n.__;
var Component = element.Component;

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck$1(this, Edit);

    _this = _super.call(this, props);
    props.setCurrentlyEditedChild({});
    return _this;
  }

  _createClass$1(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          currentlyEditedChildIndex = _this$props$attribute.currentlyEditedChildIndex,
          type = _this$props$attribute.type,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes,
          focusWithin = _this$props.focusWithin,
          insertChild = _this$props.insertChild,
          selectNextChild = _this$props.selectNextChild,
          selectPreviousChild = _this$props.selectPreviousChild;

      var onSlideAdd = function onSlideAdd() {
        var attributes = slideshowChildren.getSlideDefaultAttributes(type);
        var newSlide = createBlock(type, attributes);
        insertChild(newSlide);
      };

      var controlProps = _objectSpread({
        onSlideAdd: onSlideAdd,
        getSlideDisplayName: slideshowChildren.getSlideDisplayName
      }, this.props);

      return /*#__PURE__*/React.createElement("div", {
        className: classnames$3([className, 'ghwp-carousel'])
      }, type ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AdvancedOptionsModal, controlProps), /*#__PURE__*/React.createElement(Controls, controlProps), (isSelected || focusWithin) && /*#__PURE__*/React.createElement(SlideshowHeader, _extends$1({
        onSlideAdd: onSlideAdd,
        getSlideDisplayName: slideshowChildren.getSlideDisplayName
      }, this.props)), /*#__PURE__*/React.createElement("div", {
        className: "ghwp-editor-carousel-wrap",
        "data-active-slide": currentlyEditedChildIndex
      }, /*#__PURE__*/React.createElement(SlideshowEditorArrow, {
        direction: "left",
        onClick: selectPreviousChild
      }), /*#__PURE__*/React.createElement(InnerBlocks$1, {
        allowedBlocks: [type],
        template: [[type, slideshowChildren.getSlideDefaultAttributes(type)]],
        templateLock: false,
        renderAppender: function renderAppender() {
          return null;
        }
      }), /*#__PURE__*/React.createElement(SlideshowEditorArrow, {
        direction: "right",
        onClick: selectNextChild
      }))) : /*#__PURE__*/React.createElement(Placeholder, null, /*#__PURE__*/React.createElement(SlideshowEditorArrow, {
        direction: "left",
        disabled: true,
        onClick: function onClick() {}
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __$1('Slider Type', 'ghwp'),
        onChange: function onChange(type) {
          setAttributes({
            type: type
          });
        },
        options: [{
          label: __$1('Please select a block type...', 'ghwp'),
          value: null
        }].concat(_toConsumableArray(slideshowChildren.getAllowedChildrenForSelect()))
      }), /*#__PURE__*/React.createElement(SlideshowEditorArrow, {
        direction: "right",
        disabled: true,
        onClick: function onClick() {}
      })));
    }
  }]);

  return Edit;
}(Component);

var edit = WithModal(WithFocusWithin(WithControlledChildren(Edit)));

var InnerBlocks = blockEditor.InnerBlocks;
var save = function save() {
  return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
};

var registerBlockType = blocks.registerBlockType;
var __ = i18n.__;
function register() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$category = options.category,
      category = _options$category === void 0 ? 'widgets' : _options$category,
      _options$icon = options.icon,
      icon = _options$icon === void 0 ? ViewCarousel : _options$icon,
      _options$edit = options.edit,
      edit$1 = _options$edit === void 0 ? edit : _options$edit,
      _options$save = options.save,
      save$1 = _options$save === void 0 ? save : _options$save,
      _options$attributes = options.attributes,
      attributes$1 = _options$attributes === void 0 ? attributes : _options$attributes;
  registerBlockType('ghwp/slideshow', {
    title: __('Slideshow', 'ghwp'),
    icon: icon,
    description: __('A slider for sliding content like news, cards or images', 'ghwp'),
    category: category,
    attributes: attributes$1,
    edit: edit$1,
    save: save$1
  });
}

export { DEFAULT_ALLOWED_CHILDREN, attributes, edit, register, save, slideshowChildren };
