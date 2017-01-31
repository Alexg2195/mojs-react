import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(
  <Circle
    radius={100}
    play='slide'
    animations={[
      {
        name: 'slide',
        duration: '1s',
        delay: '1s',
        timingFunction: 'ease-in',
        iterationCount: 1,
        direction: 'alternate',
        fillMode: 'none',
        animate: {
          top: ['50%', '-50%'],
          left: ['50%', '-50%'],
          isShown: [true, false]
        }
      }
    ]}
  />,document.getElementById('app'))
