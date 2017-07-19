function onMessage(event) {
    window.lastMessageTime = Date.now();

    const data = JSON.parse(event.data);

    document.body.scrollTop = data.scrollTop;
}

function onScroll() {
    if (Date.now() - window.lastMessageTime < 100) {
        return;
    }

    const data = JSON.stringify({scrollTop: document.body.scrollTop});

    window.parent.postMessage(data, '*');
}

addEventListener('scroll', onScroll);
addEventListener('message', onMessage);
