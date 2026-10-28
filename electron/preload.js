const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("instalock", {
    tryLock: (agent) => ipcRenderer.send("try-lock", agent),
    stopLock: () => ipcRenderer.send("stop-lock"),
    openExternal: (url) => ipcRenderer.send("open-external", url),
    getFavorites: () => ipcRenderer.invoke("get-favorites"),
    setFavorites: (favorites) => ipcRenderer.invoke("set-favorites", favorites),
    tosStatus: () => ipcRenderer.invoke("tos-status"),
    acceptTos: () => ipcRenderer.invoke("accept-tos"),
    getTerms: () => ipcRenderer.invoke("get-terms"),
    onAlert: (callback) => ipcRenderer.on("alert-user", (_event, line1, line2) => callback(line1, line2)),
    onAskChoose: (callback) => ipcRenderer.on("ask-choose", () => callback()),
    onStatus: (callback) => ipcRenderer.on("change-status", (_event, status) => callback(status)),
    onHideStop: (callback) => ipcRenderer.on("hide-stop", () => callback()),
    onUpdateStarted: (callback) => ipcRenderer.on("update-download-started", () => callback()),
    onUpdateProgress: (callback) => ipcRenderer.on("update-download-progress", (_event, percent) => callback(percent)),
    onUpdateFinished: (callback) => ipcRenderer.on("update-download-finished", () => callback()),
});
