const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v2';

const assets = [
  '/',
  '/index.html',
  '/src/styles/bootstrap.min.css',
  '/src/styles/styles.css',
  '/src/scripts/app.js',
  '/src/scripts/bootstrap.min.js',
  '/node_modules/aos/dist/aos.js',
  '/node_modules/font-awesome/css/font-awesome.min.css',
  '/node_modules/aos/dist/aos.css',
  '/src/assets/17goals.jpeg',
  '/src/assets/activate.png',
  '/src/assets/goal.jpeg',
  '/src/assets/unibenLogo.png',
  '/src/assets/images.jpeg',
  '/src/assets/Goals/goal1.png',
  '/src/assets/Goals/goal2.png',
  '/src/assets/Goals/goal3.jpeg',
  '/src/assets/Goals/goal4.png',
  '/src/assets/Goals/goal5.png',
  '/src/assets/Goals/goal6.png',
  '/src/assets/Goals/goal7.png',
  '/src/assets/Goals/goal8.jpeg',
  '/src/assets/Goals/goal9.png',
  '/src/assets/Goals/goal10.png',
  '/src/assets/Goals/goal11.png',
  '/src/assets/Goals/goal12.png',
  '/src/assets/Goals/goal13.png',
  '/src/assets/Goals/goal14.png',
  '/src/assets/Goals/goal15.png',
  '/src/assets/Goals/goal16.png',
  '/src/assets/Goals/goal17.png',
  '/src/pages/404.html'
];

// install service worker
self.addEventListener('install', (e)=>{
  // console.log(`service worker has been installed`);
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', e =>{
  // wait and delete each caches
  e.waitUntil(
    caches.keys().then(keys =>{
      return Promise.all(keys 
        .filter(key=> key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))  
      )
    })
  )
})

// fetch event
self.addEventListener('fetch', e=>{
  // console.log(`fetch event ${e}`);
  e.respondWith(
    caches.match(e.request).then(cacheRes =>{
      return cacheRes || fetch(e.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache =>{
          cache.put(e.request.url, fetchRes.clone());
          return fetchRes;
        })
      })
    }).catch(() => {
      if (e.request.url.indexOf('.html') > -1 ){
        return caches.match('/src/pages/404.html')
      }
    })
  );
});