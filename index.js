window.setUnityInstance = function (instance) {
	window.XTND = {
		unity: instance,
		isReady: false,
		cachedUser: null
	};
	initXTND();
}

async function initXTND() {
	try {

		if (!window.xtnd) {
			console.warn("XTND SDK not loaded yet");

			return;
		}

		window.XTND.isReady = true;

	} catch (e) {
		console.error("XTND init error", e);
	}
}
