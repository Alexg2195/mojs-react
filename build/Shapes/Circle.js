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
// left           number      50%              Left position of shape
// top            number      50%              Top position of shape
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
          left = _props.left,
          top = _props.top,
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
      if (left) {
        shapeContainer.left = left;
      }
      if (top) {
        shapeContainer.top = top;
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
              var fromValue = animation.animate[property][0];
              var toValue = animation.animate[property][1];

              switch (property) {
                case 'isShown':
                  if (fromValue) {
                    shapeFromRules.push('fill-opacity: 1;');
                    shapeToRules.push('fill-opacity: 0;');
                  } else {
                    shapeFromRules.push('fill-opacity: 0;');
                    shapeToRules.push('fill-opacity: 1;');
                  }
                  break;
                case 'radius':
                  shapeFromRules.push('rx: ' + fromValue + ';');
                  shapeFromRules.push('ry: ' + fromValue + ';');
                  shapeToRules.push('rx: ' + toValue + ';');
                  shapeToRules.push('ry: ' + toValue + ';');
                  break;
                case 'radiusX':
                  shapeFromRules.push('rx: ' + fromValue + ';');
                  shapeToRules.push('rx: ' + toValue + ';');
                  break;
                case 'radiusY':
                  shapeFromRules.push('ry: ' + fromValue + ';');
                  shapeToRules.push('ry: ' + toValue + ';');
                  break;
                case 'stroke':
                  shapeFromRules.push('stroke: ' + fromValue + ';');
                  shapeToRules.push('stroke: ' + toValue + ';');
                  break;
                case 'strokeWidth':
                  shapeFromRules.push('stroke-width: ' + fromValue + 'px;');
                  shapeToRules.push('stroke-width: ' + toValue + 'px;');
                  break;
                case 'fill':
                  shapeFromRules.push('fill: ' + fromValue + ';');
                  shapeToRules.push('fill: ' + toValue + ';');
                  break;
                case 'left':
                  shapeContainerFromRules.push('left: ' + fromValue + ';');
                  shapeContainerToRules.push('left: ' + toValue + ';');
                  break;
                case 'top':
                  shapeContainerFromRules.push('top: ' + fromValue + ';');
                  shapeContainerToRules.push('top: ' + toValue + ';');
                  break;
                case 'x':
                  if (animation.animate.hasOwnProperty('y')) {
                    shapeContainerFromRules.push('transform: translate(' + fromValue + 'px, ' + animation.animate.y[0] + 'px);');
                    shapeContainerToRules.push('transform: translate(' + toValue + 'px, ' + animation.animate.y[1] + 'px);');
                  } else {
                    shapeContainerFromRules.push('transform: translate(' + fromValue + 'px, 0px);');
                    shapeContainerToRules.push('transform: translate(' + toValue + 'px, 0px);');
                  }
                  break;
                case 'y':
                  if (animation.animate.hasOwnProperty('y')) {
                    shapeContainerFromRules.push('transform: translate(' + animation.animate.x[0] + 'px, ' + fromValue + 'px);');
                    shapeContainerToRules.push('transform: translate(' + animation.animate.x[1] + 'px, ' + toValue + 'px);');
                  } else {
                    shapeContainerFromRules.push('transform: translate(0px, ' + fromValue + 'px);');
                    shapeContainerToRules.push('transform: translate(0px, ' + toValue + 'px);');
                  }
                  break;
              }
            }

            keyframes = '@-webkit-keyframes ' + animation.name + '-shape {\n            from {\n              ' + shapeFromRules.join('\n') + '\n            }\n            to {\n              ' + shapeToRules.join('\n') + '\n            }\n          }';
            styleSheet.insertRule(keyframes, 0);
            console.log(keyframes);

            keyframes = '@-webkit-keyframes ' + animation.name + '-container {\n            from {\n              ' + shapeContainerFromRules.join('\n') + '\n            }\n            to {\n              ' + shapeContainerToRules.join('\n') + '\n            }\n          }';
            styleSheet.insertRule(keyframes, 0);
            console.log(keyframes);
          });
        })();
      }
      if (play) {
        var animationFound = false;
        if (animations) {
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
        } else {
          console.log('Err: No Animations Defined!');
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