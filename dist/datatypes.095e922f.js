// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"datatypes.js":[function(require,module,exports) {
// Declaring variables with let
var name = 'Harry';
name = 'Ron'; //Declaring constants with const

var firstName = 'Ron';
var lastName = 'Weasley';
var age = 11; // Strings

var school = "hogwarts"; // Difference between single quotes and back ticks

console.log(name + ' is ' + age + ' years old.');
console.log("".concat(name, " is ").concat(++age, " years old."));
console.log(name.length); // Numbers

var number = 2;
var gravitation = 9.81; // m/s^2

var PI = Math.PI;
console.log(PI);
number = 2 + 1;
console.log(number); //Math Object and differences in rounding

var someNumber = 4.48;
console.log(Math.round(someNumber));
console.log(Math.ceil(someNumber));
console.log(Math.floor(someNumber)); // string concatination vs mathematic operations

console.log(name + 8);
console.log(name - 8);
var stringNumber = '12.98';
console.log(Number(stringNumber) + 7);
console.log(parseFloat(stringNumber) + 7); //Booleans

var isMagician = false;
isMagician = true;
var wand = 'Eldaward';
console.log(wand); // Arrays and array methods

var weasleys = ['Ginny', 'Ron', 'Fred', 'George', 'Percy', 'Charly', 'Bill']; // Add a new entry to end of array

weasleys.push('Molly');
weasleys.push('Arthur');
weasleys.push('Harry'); // Remove last entry from array

weasleys.pop();
console.log(weasleys); // I know which index to look for

console.log(weasleys[1]); // search for index of Percy

console.log(weasleys.indexOf('Percy'));
console.log(weasleys[4]);
weasleys.push('Bill');
console.log(weasleys); // Look for something in an array and return first value that matches

console.log(weasleys.find(function (familyMember) {
  return familyMember === 'Bill';
})); // Checks if at least one item in an array passes the test and returns true or false

console.log(weasleys.some(function (familyMember) {
  return familyMember === 'Harry';
}));
var potters = ['Harry', 'Lilly', 'James']; // Nested Array

var magicFamilies = [weasleys, potters];
console.log(magicFamilies);
console.log(magicFamilies[1][2]); // Spread operator to spread to arrays into a new one

var magicParty = [].concat(weasleys, potters);
console.log(magicParty); // Look for index of an item in an array

var whereIsHarry = magicParty.indexOf('Harry');
console.log(whereIsHarry); // Removes 1 item from array at index of "whereIsHarry"

magicParty.splice(whereIsHarry, 1);
console.log(magicParty); //Adds several items to the beginning of array

magicParty.unshift('Hedwig', 'Pig'); // Removes first item of an array

magicParty.shift();
console.log(magicParty); // Sorts an array

var newArray = weasleys.sort(sortByNameLength);
console.log(newArray);

function sortByNameLength(a, b) {
  return a.length - b.length;
} // Array of objects


var spells = [{
  spell: 'Alohomora',
  description: 'Unlocking charm'
}, {
  spell: 'Bombarda',
  description: 'Exploding charm'
}, {
  spell: 'Engorgio',
  description: 'Engorgement charm'
}, {
  spell: 'Expecto Patronum',
  description: 'Patronus charm'
}, {
  spell: 'Expelliarmus',
  description: 'Disarming charm'
}, {
  spell: 'Finite Incantatem',
  description: 'General counter-spell'
}, {
  spell: 'Immobulus',
  description: 'Freezing charm'
}, {
  spell: 'Incendio',
  description: 'Fire-making spell'
}, {
  spell: 'Lumos',
  description: 'Wand-lighting charm'
}, {
  spell: 'Petrificus Totalus',
  description: 'Full Body-Bind Curse'
}];

function castSpell(spells) {
  var index = Math.floor(Math.random() * spells.length);
  return "Harry casts: ".concat(spells[index].spell.toUpperCase(), "!");
}

console.log(castSpell(spells));
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50330" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","datatypes.js"], null)
//# sourceMappingURL=/datatypes.095e922f.js.map