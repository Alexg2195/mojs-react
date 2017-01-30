import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(<Circle radius={200} play='test' animate={[
  {
    name: 'test',
    animationDuration: '0.6s',
    animations: [{
      radius: [0, 200]
    }]
  }
]}/>,document.getElementById('app'))
