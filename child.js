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
//     const lineMultiplier = 24;
//     const deltaY = e.deltaMode === 1 ? e.deltaY * lineMultiplier : e.deltaY;
//     const data = JSON.stringify({ deltaY });

//     const isScrolledToEnd = false
//         || e.deltaY < 0 && document.body.scrollTop <= 0
//         || e.deltaY > 0 && document.body.scrollHeight - document.body.clientHeight <= document.body.scrollTop;

//     window.parent.postMessage(data, '*');

//     if (window.supportSyncScroll && !isScrolledToEnd) {
//         e.preventDefault();
//     }
// }

// addEventListener('message', onMessage);
// addEventListener('wheel', onWheel);
