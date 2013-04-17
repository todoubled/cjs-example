(function (global) {
  var process = function () {
      var cwd = '/';
      return {
        title: 'browser',
        version: 'v0.8.16',
        browser: true,
        env: {},
        argv: [],
        nextTick: function (fn) {
          setTimeout(fn, 0);
        },
        cwd: function () {
          return cwd;
        },
        chdir: function (dir) {
          cwd = dir;
        }
      };
    }();
  function require(file, parentModule) {
    if ({}.hasOwnProperty.call(require.cache, file))
      return require.cache[file];
    var resolved = require.resolve(file);
    if (!resolved)
      throw new Error('Failed to resolve module ' + file);
    var module$ = {
        id: file,
        require: require,
        filename: file,
        exports: {},
        loaded: false,
        parent: parentModule,
        children: []
      };
    if (parentModule)
      parentModule.children.push(module$);
    var dirname = file.slice(0, file.lastIndexOf('/') + 1);
    require.cache[file] = module$.exports;
    resolved.call(module$.exports, module$, module$.exports, dirname, file);
    module$.loaded = true;
    return require.cache[file] = module$.exports;
  }
  require.modules = {};
  require.cache = {};
  require.resolve = function (file) {
    return {}.hasOwnProperty.call(require.modules, file) ? require.modules[file] : void 0;
  };
  require.define = function (file, fn) {
    require.modules[file] = fn;
  };
  require.define('/main.js', function (module, exports, __dirname, __filename) {
    var bootApp = require('/initialize/index.js', module);
    $(bootApp);
  });
  require.define('/initialize/index.js', function (module, exports, __dirname, __filename) {
    var helloWorld = require('/hello-world/index.js', module);
    module.exports = function (event) {
      helloWorld();
    };
  });
  require.define('/hello-world/index.js', function (module, exports, __dirname, __filename) {
    var HelloWorld = Backbone.View.extend({
        render: function () {
          $('body').append('<h1>Hello World</h1>');
        }
      });
    module.exports = function () {
      new HelloWorld().render();
    };
  });
  require('/main.js');
}.call(this, this));