var interval = null;

function clear_clipboard_listeners(){
    if (document.body.oncopy != null && document.body.oncut != null){
        document.body.oncopy = null;
        document.body.oncut = null;
        clearInterval(interval);
    }
}

interval = setInterval(clear_clipboard_listeners, 50);
