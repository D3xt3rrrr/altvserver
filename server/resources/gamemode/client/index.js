"use strict";
/// <reference path="typings/altv-client.d.ts"/>
/// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as game from "natives";

let webview;
alt.on('connectionComplete', () => {
    
    webview = new alt.WebView('http://resource/client/webview/form/index.html');
    webview.focus()
    alt.showCursor(true);
    alt.toggleGameControls(false);
    webview.on('gamemode:create', (user, pass) => {
       alt.log(user, pass);
       alt.emitServer('gamemode:create', user, pass);
       webview.destroy();
       alt.showCursor(false);
       alt.toggleGameControls(true);
    });
})



