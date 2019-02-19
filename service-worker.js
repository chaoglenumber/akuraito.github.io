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

var precacheConfig = [["404/index.html","61618169efd4dfe2ad63bef58d9d83dd"],["archives/2018/10/index.html","15e4a42a78f9f44e064c5109884b4e47"],["archives/2018/11/index.html","6d03145abacd2743304647edf33d19ea"],["archives/2018/12/index.html","4399a907839d0b1fdbc70b751808fcb6"],["archives/2018/index.html","d5c0da8e02c90c472f49927bcec48e45"],["archives/2019/02/index.html","6fcf039c4950359c67cf253c7b65f6f6"],["archives/2019/index.html","fd56ebfe947050c3cb21426488913c33"],["archives/index.html","04a1400be74c6fe8087d1457996e9627"],["categories/index.html","5386f7f68ed4ab1e54f65bb4e68502be"],["categories/呢喃/index.html","2f90ab92080c1d66b22910cd28ca226e"],["categories/折腾/index.html","68d80ce5d735c08fe5568d1eab22a255"],["categories/造作/index.html","45fdf39232812b4baf7b89c1887e7c3f"],["css/main.css","d064daf8670e2001ad253a9107b7a2ee"],["essay/2018-10-28-web-build.html","ec6351c8bfb2ad853d9f803c9bf9affa"],["essay/2018-11-11-hello-world.html","131daa8a3546b5d407934950d3bfe17c"],["essay/2018-11-18-new-starting.html","05bef92b5f6a942f01188a448e487e27"],["essay/2018-11-19-winter-trip.html","5facc6b601d205e64fb5ba0f960d20d0"],["essay/2018-12-31-2018-y.html","f300c5a837d478d90849db6297fd36b2"],["essay/2018-12-31-wordpress.html","d6483ea4187d0d1ee18c88df67c3d942"],["essay/2019-02-05-hello-world-2.html","c8c7e773cc8c224bf939860ec5f8d6c9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3f683a15d7fb6e6ec1cd468d4b8b25c0"],["js/src/affix.js","f28628a2ab952536ec56dc0f9e317bd2"],["js/src/algolia-search.js","9382200422aed22a963b8421d3838421"],["js/src/bootstrap.js","15528133f0a7ca46459631d918c96bb8"],["js/src/exturl.js","08fc213bfa09283a89e2954da2b510f5"],["js/src/js.cookie.js","862322ea20739b30301f7b200e748b4d"],["js/src/motion.js","287f236d6064ed7731e61025fc73016a"],["js/src/post-details.js","5063937fb465ac087732677bf7ce9476"],["js/src/schemes/pisces.js","efa1bc0151269acd988e47e6792c2746"],["js/src/scroll-cookie.js","3c7aa770cb3426f17148113afe570fa8"],["js/src/scrollspy.js","3dd344724b45e603586b83abd3f24b18"],["js/src/utils.js","7bef34de1a3cd4c1fe903ba62b1d41d7"],["lib/canvas-nest/README.html","a3ae6d17bf97aa1be1d47fc4dccee510"],["lib/canvas-nest/canvas-nest-nomobile.min.js","03d5982395ceedaa2e13d0a2aa04722e"],["lib/canvas-nest/canvas-nest.min.js","1da287f0fd9112187fbbb1f5b30bad1e"],["lib/fancybox/README.html","39678789d14972c1da4ad2c92f828d2e"],["lib/fancybox/source/jquery.fancybox.css","b1127644e92215b01abd91277adb96e1"],["lib/fancybox/source/jquery.fancybox.js","1c26602601f784c00139334d43629f21"],["lib/fancybox/source/jquery.fancybox.min.css","61ab8b5ea2af9ccaaca3090f12a813e4"],["lib/fancybox/source/jquery.fancybox.min.js","a4789e600df52c0a56ff3a38dddd2b5b"],["lib/fancybox/source/jquery.fancybox.pack.js","c476cc678403e470a38881658645496a"],["lib/font-awesome/css/font-awesome.css","a92d25440fc29e7139cefc0a44573257"],["lib/font-awesome/css/font-awesome.min.css","58b77868a095acda018d0a79674b618c"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","174a741fa509c2a59ca400a4d05f86aa"],["lib/ua-parser-js/dist/ua-parser.min.js","cb5dc3fcd475925a7f349b40030ac355"],["lib/ua-parser-js/dist/ua-parser.pack.js","2eaa2c7f0f38ff6f8b4ee6bccbc80538"],["lib/velocity/velocity.js","b4a6941a75b69a774f6bb099749b1b1f"],["lib/velocity/velocity.min.js","4a39cd3df5ead09e2f570f5ccbdf751a"],["lib/velocity/velocity.ui.js","e99e8cf310757feb47361c6a411c9506"],["lib/velocity/velocity.ui.min.js","092eaf95ab4f84d3ac80faa2591c3b85"],["tags/blog/index.html","7546872e3becf7c5ec0dde66fa23b00f"],["tags/diary/index.html","e79567d68b38c904dfcd5bf9c1e83961"],["tags/github/index.html","396638c718bc113daabccd9065f6de54"],["tags/hexo/index.html","c4ac6d1e068046a105e9a29723a6d9d0"],["tags/index.html","bbb4c6fb619cf6ba72d7c811830f78bf"],["tags/termux/index.html","c3cd04f091186600285420c36ed670d5"],["tags/web/index.html","6d7cdf7467ae2a76bb26beee6c8b868e"],["tags/wordpress/index.html","ef2be28ceab4b5348ac355433f187a37"]];
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







