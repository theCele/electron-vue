import { IpcRenderer } from 'electron';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const ipcRenderer: IpcRenderer = window.require('electron').ipcRenderer;
console.log(ipcRenderer);

ipcRenderer.send('cele', 'send from renderer');
ipcRenderer.on('pong', (a, b) => {
    console.log(a);
    console.log(b);
});

createApp(App).use(store).use(router).mount('#app')
