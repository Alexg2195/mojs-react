import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(<Circle animate={[
  {
    name: 'test',
    animations: [{
      radius: [0, 300]
    }]
  }
]}/>,document.getElementById('app'))
