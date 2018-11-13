import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <h1>Electron Application</h1>
            <div>We are using node {process.versions.node},</div>
            <div>Chrome {process.versions.chrome},</div>
            <div>and Electron {process.versions.electron}.</div>
    </div>, document.getElementsByTagName('body')[0])
