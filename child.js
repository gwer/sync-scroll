// function onMessage(event) {
//     window.lastMessageTime = Date.now();

//     const data = JSON.parse(event.data);

//     document.body.scrollTop += data.deltaY;
// }

// function onWheel(e) {
//     const data = JSON.stringify({deltaY: e.deltaY});

//     window.parent.postMessage(data, '*');

//     e.preventDefault();
// }

// addEventListener('message', onMessage);
// addEventListener('wheel', onWheel);
