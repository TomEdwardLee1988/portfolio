const { app, BrowserWindow } = require("electron");
const path = require("path");

require("dotenv").config();

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "images/icon.ico"),
    width: 1200,
    height: 800,
    autoHideMenuBar: true,

    webPreferences: {
      nodeIntegration: true,
      devTools: false,
    },
  });

  mainWindow.loadFile(path.join("landing.html"));
};

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});
