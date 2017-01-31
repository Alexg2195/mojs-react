import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(
  <Circle
    radius={200}
    strokeWidth={7}
    play='test'
    animations={[
      {
        name: 'test',
        animationDuration: '2s',
        animate: {
          radius: [0, 200],
          radiusX: [0, 100],
          radiusY: [0, 100],
          stroke: ['pink', 'black'],
          strokeWidth: [0, 10],
          fill: ['green', 'blue'],
        }
      }
    ]}
  />,document.getElementById('app'))
