import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(
  <Circle
    radius={100}
    left='10%'
    top='10%'
    play='slideIn'
    animations={[
      {
        name:'slideIn',
        animationDuration:'1s',
        animate:{
          top: ['-20%', '50%'],
          left: ['-20%', '50%']
        }
      }
    ]}
  />,document.getElementById('app'))
