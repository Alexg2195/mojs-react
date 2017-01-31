// Circle / ellipse

// Properties List
  // Name           Type        Default          Description
  // -----------------------------------------------------------------------------------
  // isShown        bool        true             If false will hide shape
  // radius         number      50               Radius of circle
  // radiusX        number      50               Radius of ellipse in X direction
  // radiusY        number      50               Radius of ellipse in Y direction
  // left           number      50%              Left position of shape
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

import React from 'react'


export default class Circle extends React.Component {

  constructor() {
    super()
    this.state = {
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
          ns: 'http://www.w3.org/2000/svg',
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
    }
  }

  render() {
    let { shapeContainer, canvas, shape } = this.state.style
    let { isShown, radius, radiusX, radiusY, left, top, x, y, fill, stroke, strokeWidth } = this.props
    let { animations, play } = this.props

    // Overrides for Circle Defaults
    if ( isShown === false ) shapeContainer.opacity = '0'
    if ( radius ) {
      shape.rx = radius
      shape.ry = radius
      shape.cx = radius
      shape.cy = radius
      shapeContainer.width = radius*2
      shapeContainer.height = radius*2
      shapeContainer.marginLeft = radius*-1
      shapeContainer.marginTop = radius*-1
    }
    if ( radiusX ) {
      shape.rx = radiusX
      shape.cx = radiusX
      shapeContainer.width = radiusX*2
      shapeContainer.marginLeft = radiusX*-1
    }
    if ( radiusY ) {
      shape.ry = radiusY
      shape.cy = radiusY
      shapeContainer.height = radiusY*2
      shapeContainer.marginTop = radiusY*-1
    }
    if ( left ) {
      shapeContainer.left = left
    }
    if ( top ) {
      shapeContainer.top = top
    }
    if ( x && y ) {
      y = -y
      shapeContainer.transform = `translate(${x}px, ${y}px)`
    } else if ( x ) {
      shapeContainer.transform = `translate(${x}px, 0px)`
    } else if ( y ) {
      y = -y
      shapeContainer.transform = `translate(0px, ${y}px)`
    }
    if ( fill ) {
      shape.fill = fill
    }
    if ( stroke ) {
      shape.stroke = stroke
    }
    if ( strokeWidth ) {
      shape.strokeWidth = strokeWidth
      shapeContainer.width += strokeWidth
      shapeContainer.height += strokeWidth
      shapeContainer.marginLeft -= strokeWidth*0.5
      shapeContainer.marginTop -= strokeWidth*0.5
      shape.cx += strokeWidth*0.5
      shape.cy += strokeWidth*0.5
    }

    // Suffix with px
    shape.strokeWidth += 'px'
    shapeContainer.width += 'px'
    shapeContainer.height += 'px'
    shapeContainer.marginLeft += 'px'
    shapeContainer.marginTop += 'px'

    // Dynamic Keyframe Animations
    if ( animations ) {
      let styleSheet = document.styleSheets[0]

      animations.forEach(function(animation) {
        let keyframes = ''
        let shapeFromRules = []
        let shapeToRules = []
        let shapeContainerFromRules = []
        let shapeContainerToRules = []

        for (var property in animation.animate) {
          let fromValue = animation.animate[property][0]
          let toValue = animation.animate[property][1]

          switch (property) {
            case 'radius':
              shapeFromRules.push(`rx: ${fromValue};`)
              shapeFromRules.push(`ry: ${fromValue};`)
              shapeToRules.push(`rx: ${toValue};`)
              shapeToRules.push(`ry: ${toValue};`)
              break;
            case 'radiusX':
              shapeFromRules.push(`rx: ${fromValue};`)
              shapeToRules.push(`rx: ${toValue};`)
              break;
            case 'radiusY':
              shapeFromRules.push(`ry: ${fromValue};`)
              shapeToRules.push(`ry: ${toValue};`)
              break;
            case 'stroke':
              shapeFromRules.push(`stroke: ${fromValue};`)
              shapeToRules.push(`stroke: ${toValue};`)
              break;
            case 'strokeWidth':
              shapeFromRules.push(`stroke-width: ${fromValue}px;`)
              shapeToRules.push(`stroke-width: ${toValue}px;`)
              break;
            case 'fill':
              shapeFromRules.push(`fill: ${fromValue};`)
              shapeToRules.push(`fill: ${toValue};`)
              break;
            case 'x':
              if (animation.animate.hasOwnProperty('y')) {
                shapeContainerFromRules.push(`transform: translate(${fromValue}px, ${animation.animate.y[0]}px);`)
                shapeContainerToRules.push(`transform: translate(${toValue}px, ${animation.animate.y[1]}px);`)
              } else {
                shapeContainerFromRules.push(`transform: translate(${fromValue}px, 0px);`)
                shapeContainerToRules.push(`transform: translate(${toValue}px, 0px);`)
              }
              break;
            case 'y':
              if (animation.animate.hasOwnProperty('y')) {
                shapeContainerFromRules.push(`transform: translate(${animation.animate.x[0]}px, ${fromValue}px);`)
                shapeContainerToRules.push(`transform: translate(${animation.animate.x[1]}px, ${toValue}px);`)
              } else {
                shapeContainerFromRules.push(`transform: translate(0px, ${fromValue}px);`)
                shapeContainerToRules.push(`transform: translate(0px, ${toValue}px);`)
              }
              break;
          }
        }

        keyframes =
          `@-webkit-keyframes ${animation.name}-shape {
            from {
              ${shapeFromRules.join('\n')}
            }
            to {
              ${shapeToRules.join('\n')}
            }
          }`
        styleSheet.insertRule(keyframes, 0)
        console.log(keyframes)

        keyframes =
          `@-webkit-keyframes ${animation.name}-container {
            from {
              ${shapeContainerFromRules.join('\n')}
            }
            to {
              ${shapeContainerToRules.join('\n')}
            }
          }`
        styleSheet.insertRule(keyframes, 0)
        console.log(keyframes)
      })
    }
    if ( play ) {
      let animationFound = false;
      if (animations) {
        animations.forEach(function(animation) {
          if (animation.name === play) {
            if (animation.animationDuration) {
              shape.animationDuration = animation.animationDuration
              shapeContainer.animationDuration = animation.animationDuration
            }
            shape.animationName = play+'-shape'
            shapeContainer.animationName = play+'-container'
            animationFound = true;
          }
        })
        if (!animationFound) {
          console.log('Err: No Animation found with that name!')
        }
      } else {
        console.log('Err: No Animations Defined!')
      }
    }

    return (
      <div style={shapeContainer}>
        <svg style={canvas}>
          <ellipse style={shape}/>
        </svg>
      </div>
    );
  }
}
