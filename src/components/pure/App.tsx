import React from 'react'

export default class App extends React.Component {
    public render() {
        return (
        <div>
            <h1>Electron Application</h1>
                <div>We are using node {process.versions.node},</div>
                <div>Chrome {process.versions.chrome},</div>
                <div>and Electron {process.versions.electron}.</div>
        </div>
        );
    }
}