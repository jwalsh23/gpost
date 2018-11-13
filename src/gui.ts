document.getElementsByTagName('body')[0].innerHTML = `<h1>Electron Application</h1>
We are using node ${process.versions.node},
Chrome ${process.versions.chrome},
and Electron ${process.versions.electron}
</body>`
