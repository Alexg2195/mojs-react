import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(
  <Circle
    radius={200}
    play='test'
    animations={[
      {
        name: 'test',
        animationDuration: '1s',
        animate: {
          radius: [0, 200],
          radiusX: [0, 100],
          radiusY: [0, 100],
          fill: ['green', 'blue']
        }
      }
    ]}
  />,document.getElementById('app'))
