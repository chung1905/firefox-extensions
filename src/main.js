if (!rmElIfNotNull(searchLiveChatElement())) {
    setTimeout(rmElIfNotNull.bind(null, searchLiveChatElement), 5000);
}

function rmElIfNotNull(el) {
    if (typeof el === 'function') {
        el = el();
    }
    if (el !== null) {
        el.remove();
        return true;
    }
    return false;
}

function searchLiveChatElement() {
    return document.getElementById('watch-sidebar-live-chat');
}
