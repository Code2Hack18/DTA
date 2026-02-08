const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
    logData:()=> console.log("Testing complete...")
});