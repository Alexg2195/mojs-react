import React from 'react'
import ReactDOM from 'react-dom'

import { Circle } from '../build/Shapes'

ReactDOM.render(<Circle fill='pink' stroke='purple' radius={30} strokeWidth={5}/>,document.getElementById('app'))
