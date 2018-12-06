self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('swapper').then(function(cache) {
			return cache.addAll([
				'/swapper/',
				'/swapper/devicecarousel',
				'/swapper/login',
				'/swapper/match',
				'/swapper/confirm',
				'/swapper/data/deviceinfo.json',
				'/swapper/data/devices.json',
				'/swapper/data/telenorstores.json',
				'/swapper/images/mona.jpg',
				'/swapper/images/swap-icon-w.png',
				'/swapper/stylesheets/style.css'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});