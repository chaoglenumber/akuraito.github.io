/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","03a6afe776ef89e737b6eb26065e79bb"],["archives/2018/11/index.html","93b9ec4be2f2c341e482deff7cfe98f3"],["archives/2018/12/index.html","16a01c1e861871c9828db0fc434a6b84"],["archives/2018/index.html","68f9be76b31b5fb65e3b0687b01781b3"],["archives/2019/02/index.html","5da01822e2564ae8335d6b744eb5a220"],["archives/2019/04/index.html","87725a1b9000be563662ea1d4fdd01e6"],["archives/2019/05/index.html","b21a1cf8f3764ddef136e9154454b631"],["archives/2019/07/index.html","fe5f688242a4aded83b725aafcfdd72e"],["archives/2019/index.html","178a8b1e2671b3026767058134832c04"],["archives/index.html","1dffe2e516e95077ff38111a84cd21f4"],["categories/index.html","55b3cc9aab82773343acad3723feb95c"],["categories/呢喃/index.html","0a1dac63c50d49beac07fe156d4148cf"],["categories/折腾/index.html","40fd72708cfc33c4ac3cc64947b7ab1b"],["categories/矫情/index.html","b01db866086b5fbd96a04e9802ac1a95"],["categories/译文/index.html","4584fafc0544843154a5fdd5afeaacf0"],["categories/造作/index.html","d01b8f26ae2f962354e730eadc8ffb9a"],["css/main.css","21621efe95951194e19d547ded830d02"],["essay/2018-11-11-hello-world.html","9e43ea2b1df1673f4ca64bd0b8aaa641"],["essay/2018-11-18-new-starting.html","046c0f0052b46c227232f16684246c69"],["essay/2018-11-19-winter-trip.html","40a2618ad40b297200cbe24760dbdc28"],["essay/2018-12-31-2018-y.html","124981948761bf86767f686a1a086dc5"],["essay/2018-12-31-wordpress.html","f185a9e2baa8d8a86fe81eb23d32b617"],["essay/2019-02-05-hello-world-2.html","94c42b2e1f19f49870a18e8c54ad8e39"],["essay/2019-02-19-add-crisp.html","7e726c895cdfe44f5c8b7778cbfc01ab"],["essay/2019-04-14-senior-bye.html","48e7c08f6b66662e6d51fd837734be57"],["essay/2019-05-19-hugo-on-termux-tslt.html","6570122cc473397f39a08de45e3b534b"],["essay/2019-07-09-anime-saw.html","bcfbb5a7926f4859cc72f2aa4a1e8308"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","88c1842c19781219d1ce83e5d3e800c6"],["js/affix.js","1ad8f64cf8d531f586110079e56f1d82"],["js/algolia-search.js","3acad16cf4a5d1a210567e7dd0816f0e"],["js/exturl.js","54015b18a9cfc2222cf2e9e1b81dd594"],["js/js.cookie.js","79d5a0aaf61f73e33f2499fb5a4f21c3"],["js/motion.js","04d4a98857529c6a5e9680185215a259"],["js/next-boot.js","b82bfe92e87a98405a52377c9980a7f8"],["js/post-details.js","40b45855b398675954647a3dbecc1b6d"],["js/schemes/muse.js","5ac3cbfd8be436bef345733d8426b996"],["js/schemes/pisces.js","7e16e3481a2b08c6ee020ddacbd0741e"],["js/scroll-cookie.js","81d16a16257a6b66cf93ef61bb74185b"],["js/scrollspy.js","a65c40b9bd2bae98a3ce64c29a4e2de5"],["js/utils.js","6ec2b155dccdf02d3daee5de27cb54ab"],["lib/canvas-nest/canvas-nest-nomobile.min.js","b39de9946e3dbe07f3b0310fec923ef5"],["lib/canvas-nest/canvas-nest.min.js","c6f5c5b8d5944e4ddd7f57d680817429"],["lib/fancybox/source/jquery.fancybox.css","a98ac13231c33ad19b8efbf697e309b9"],["lib/fancybox/source/jquery.fancybox.min.css","04203967a904c33cec2bdf3a919a05ad"],["lib/fancybox/source/jquery.fancybox.min.js","218718953bcf9f3a7aa6bfd2d6979f8d"],["lib/fancybox/source/jquery.fancybox.pack.js","7e0d51d414846668e927af2930ef90f3"],["lib/font-awesome/css/font-awesome.css","e62936db79320d115677f4cd02bd5905"],["lib/font-awesome/css/font-awesome.min.css","b0bc46f25958244cbb9730c8fdc103e4"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","17c234761c2d9004673bec3102a2aab0"],["lib/jquery_lazyload/jquery.lazyload.js","6930f5d05a4ece19411e2d50c890b042"],["lib/jquery_lazyload/jquery.scrollstop.js","6a396eb17018d9886eddac8129be7aa7"],["lib/velocity/velocity.js","33452bdbee450eeba36816d99e7bebd3"],["lib/velocity/velocity.min.js","4091c7696d848cfaa2a135ddcb65e26f"],["lib/velocity/velocity.ui.js","623d8bde2d1ddef3dd570301b9450439"],["lib/velocity/velocity.ui.min.js","8a6237eb7b91366f3e2a81c206841ecc"],["privacy-policy.html","c821938907f0695b3d11bcdc56f74b66"],["tags/Crisp/index.html","bad9f2464771e47c73be08b863061921"],["tags/github/index.html","65b69472b60e130880bb0603823f39dd"],["tags/hexo/index.html","4df031643e9e906251dbbcdd4a2cd51f"],["tags/hugo/index.html","7dd72013d5cdcba2648f6422adb525e3"],["tags/index.html","cda830185b84a7891a8d752db963ffae"],["tags/termux/index.html","103a430ee23cbb54d2e46636e5d494fc"],["tags/wordpress/index.html","7ecf9dd9cecc418af971373f6067f9c8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







