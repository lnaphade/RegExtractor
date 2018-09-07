// ==UserScript==
// @name         UVEG Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect to ID user
// @author       Blackk
// @match        http://avalicmod.uveg.edu.mx/
// @include      http://avalicmod.uveg.edu.mx/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function changer(){
        if (window.location.href == "http://avalicmod.uveg.edu.mx/") {
            var id = prompt("Escribe el ID:");
            if (id){
                window.location.href = "http://www.uveg.edu.mx/redirec/avalicmod2.php?usuario=" + id;
            }

        }
    }

    document.addEventListener('keypress', changer, false);

})();