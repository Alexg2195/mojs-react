import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(
  <Circle
    radius={200}
    left='10%'
    top='10%'
  />,document.getElementById('app'))
