// function onMessage(event) {
//     const data = JSON.parse(event.data);

//     if (data.supportSyncScroll) {
//         window.supportSyncScroll = true;
//     }

//     if (data.deltaY) {
//         document.body.scrollTop += data.deltaY;
//     }
// }

// function onWheel(e) {
//     const data = JSON.stringify({deltaY: e.deltaY});

//     window.parent.postMessage(data, '*');

//     if (window.supportSyncScroll) {
//         e.preventDefault();
//     }
// }

// addEventListener('message', onMessage);
// addEventListener('wheel', onWheel);
