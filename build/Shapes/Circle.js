'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Circle / ellipse

// Properties List
// Name           Type        Default          Description
// -----------------------------------------------------------------------------------
// isShown        bool        true             If false will hide shape
// radius         number      50               Radius of circle
// radiusX        number      50               Radius of ellipse in X direction
// radiusY        number      50               Radius of ellipse in Y direction
// x              number      0                Transform position on the x axis
// y              number      0                Transform position on the y axis
// fill           string      'pink'           Fill color for circle
// stroke         string      'transparent'    Stroke color for circle border
// strokeWidth    number      0                Stroke width in px

// play           string      ''               Name of aniimation to play
// animations     See-Below
// [
//   {
//     name: 'test',
//     animationDuration: '1s',
//     animate: {
//       radius: [0, 200],
//       fill: ['green', 'blue']
//     }
//   }
// ]
// ********** MUST HAVE A LINKED STYLESHEET FOR ANIMATIONS TO WORK*********************

var Circle = function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this.state = {
      style: {
        shapeContainer: {
          position: 'absolute',
          width: 100,
          height: 100,
          marginLeft: -50,
          marginTop: -50,
          opacity: '1',
          left: '50%',
          top: '50%',
          transform: '',
          animationName: '',
          animationTimingFunction: 'ease-in-out',
          animationDuration: '4s',
          animationDelay: '0s',
          animationIterationCount: 1,
          animationDirection: 'normal',
          animationFillMode: 'forwards'
        },
        canvas: {
          display: 'block',
          width: '100%',
          height: '100%',
          left: '0px',
          top: '0px',
          ns: 'http://www.w3.org/2000/svg'
        },
        shape: {
          rx: 50,
          ry: 50,
          cx: 50,
          cy: 50,
          fillOpacity: 1,
          fill: 'pink',
          strokeWidth: 0,
          strokeOpacity: 1,
          stroke: 'transparent',
          animationName: '',
          animationTimingFunction: 'ease-in-out',
          animationDuration: '4s',
          animationDelay: '0s',
          animationIterationCount: 1,
          animationDirection: 'normal',
          animationFillMode: 'forwards'
        }
      }
    };
    return _this;
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _state$style = this.state.style,
          shapeContainer = _state$style.shapeContainer,
          canvas = _state$style.canvas,
          shape = _state$style.shape;
      var _props = this.props,
          isShown = _props.isShown,
          radius = _props.radius,
          radiusX = _props.radiusX,
          radiusY = _props.radiusY,
          x = _props.x,
          y = _props.y,
          fill = _props.fill,
          stroke = _props.stroke,
          strokeWidth = _props.strokeWidth;
      var _props2 = this.props,
          animations = _props2.animations,
          play = _props2.play;

      // Overrides for Circle Defaults

      if (isShown === false) shapeContainer.opacity = '0';
      if (radius) {
        shape.rx = radius;
        shape.ry = radius;
        shape.cx = radius;
        shape.cy = radius;
        shapeContainer.width = radius * 2;
        shapeContainer.height = radius * 2;
        shapeContainer.marginLeft = radius * -1;
        shapeContainer.marginTop = radius * -1;
      }
      if (radiusX) {
        shape.rx = radiusX;
        shape.cx = radiusX;
        shapeContainer.width = radiusX * 2;
        shapeContainer.marginLeft = radiusX * -1;
      }
      if (radiusY) {
        shape.ry = radiusY;
        shape.cy = radiusY;
        shapeContainer.height = radiusY * 2;
        shapeContainer.marginTop = radiusY * -1;
      }
      if (x && y) {
        y = -y;
        shapeContainer.transform = 'translate(' + x + 'px, ' + y + 'px)';
      } else if (x) {
        shapeContainer.transform = 'translate(' + x + 'px, 0px)';
      } else if (y) {
        y = -y;
        shapeContainer.transform = 'translate(0px, ' + y + 'px)';
      }
      if (fill) {
        shape.fill = fill;
      }
      if (stroke) {
        shape.stroke = stroke;
      }
      if (strokeWidth) {
        shape.strokeWidth = strokeWidth;
        shapeContainer.width += strokeWidth;
        shapeContainer.height += strokeWidth;
        shapeContainer.marginLeft -= strokeWidth * 0.5;
        shapeContainer.marginTop -= strokeWidth * 0.5;
        shape.cx += strokeWidth * 0.5;
        shape.cy += strokeWidth * 0.5;
      }

      // Suffix with px
      shape.strokeWidth += 'px';
      shapeContainer.width += 'px';
      shapeContainer.height += 'px';
      shapeContainer.marginLeft += 'px';
      shapeContainer.marginTop += 'px';

      // Dynamic Keyframe Animations
      if (animations) {
        (function () {
          var styleSheet = document.styleSheets[0];

          animations.forEach(function (animation) {
            var keyframes = '';
            var shapeFromRules = [];
            var shapeToRules = [];
            var shapeContainerFromRules = [];
            var shapeContainerToRules = [];

            for (var property in animation.animate) {
              switch (property) {
                case 'radius':
                  shapeFromRules.push('rx: ' + animation.animate[property][0] + ';');
                  shapeFromRules.push('ry: ' + animation.animate[property][0] + ';');
                  shapeToRules.push('rx: ' + animation.animate[property][1] + ';');
                  shapeToRules.push('ry: ' + animation.animate[property][1] + ';');
                  break;
                case 'radiusX':
                  shapeFromRules.push('rx: ' + animation.animate[property][0] + ';');
                  shapeToRules.push('rx: ' + animation.animate[property][1] + ';');
                  break;
                case 'radiusY':
                  shapeFromRules.push('ry: ' + animation.animate[property][0] + ';');
                  shapeToRules.push('ry: ' + animation.animate[property][1] + ';');
                  break;
                case 'fill':
                  shapeFromRules.push('fill: ' + animation.animate[property][0] + ';');
                  shapeToRules.push('fill: ' + animation.animate[property][1] + ';');
                  break;
              }
            }
            keyframes = '@-webkit-keyframes ' + animation.name + '-shape {\n            from {\n              ' + shapeFromRules.join('\n') + '\n            }\n            to {\n              ' + shapeToRules.join('\n') + '\n            }\n          }';
            styleSheet.insertRule(keyframes, 0);
            console.log(keyframes);

            keyframes = '@-webkit-keyframes ' + animation.name + '-container {\n            from {\n              ' + shapeContainerFromRules.join('\n') + '\n            }\n            to {\n              ' + shapeContainerToRules.join('\n') + '\n            }\n          }';
            styleSheet.insertRule(keyframes, 0);
            console.log(keyframes);

            // keyframes =
            //   `@-webkit-keyframes ${animations[0].name}-shape {
            //     from {
            //       rx: ${animations[0].animations[0].radius[0]};
            //       ry: ${animations[0].animations[0].radius[0]};
            //     }
            //     to {
            //       rx: ${animations[0].animations[0].radius[1]};
            //       ry: ${animations[0].animations[0].radius[1]};
            //     }
            //   }`
            // styleSheet.insertRule(keyframes, 0)
            //
            // keyframes =
            //   `@-webkit-keyframes ${animations[0].name}-container {
            //     from {
            //       left: 0%;
            //     }
            //     to {
            //       left: 100%;
            //     }
            //   }`
            // styleSheet.insertRule(keyframes, 0)
          });
        })();
      }
      if (play) {
        var animationFound = false;
        animations.forEach(function (animation) {
          if (animation.name === play) {
            if (animation.animationDuration) {
              shape.animationDuration = animation.animationDuration;
              shapeContainer.animationDuration = animation.animationDuration;
            }
            shape.animationName = play + '-shape';
            shapeContainer.animationName = play + '-container';
            animationFound = true;
          }
        });
        if (!animationFound) {
          console.log('Err: No Animation found with that name!');
        }
      }

      return _react2.default.createElement(
        'div',
        { style: shapeContainer },
        _react2.default.createElement(
          'svg',
          { style: canvas },
          _react2.default.createElement('ellipse', { style: shape })
        )
      );
    }
  }]);

  return Circle;
}(_react2.default.Component);

exports.default = Circle;