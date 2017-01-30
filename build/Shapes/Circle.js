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
          transform: ''
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
          stroke: 'transparent'
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


      if (isShown === false) shapeContainer.opacity = '0';
      if (radius) {
        shape.rx = radius;
        shape.ry = radius;
        shape.cx = radius;
        shape.cy = radius;
        shapeContainer.width = radius * 2;
        shapeContainer.height = radius * 2;
        shapeContainer.marginLeft = radius * -2;
        shapeContainer.marginTop = radius * -2;
      }
      if (radiusX) {
        shape.rx = radiusX;
        shape.cx = radiusX;
        shapeContainer.width = radiusX * 2;
        shapeContainer.marginLeft = radiusX * -2;
      }
      if (radiusY) {
        shape.ry = radiusY;
        shape.cy = radiusY;
        shapeContainer.height = radiusY * 2;
        shapeContainer.marginTop = radiusY * -2;
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