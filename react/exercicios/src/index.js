import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'

// const elemento = <h1>React 2</h1> // parece html, mas é javascript, isso é JSX

ReactDOM.render(<BomDia nome="JoazinhoJJ" />, document.getElementById('root'))
// Isto é Jquery >>>>>>>  $('<h1>').html('React 2') 