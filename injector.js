let script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('clipboard.js'));
document.head.append(script);
