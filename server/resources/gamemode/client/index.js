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
    webview.on('gamemode:login', (user, pass) => {
       alt.log(user, pass);
       alt.emitServer('gamemode:login', user, pass) 
    });
})



