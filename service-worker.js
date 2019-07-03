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

var precacheConfig = [["404.html","b897739523f58626d4a9e50df04f98a1"],["archives/2018/11/index.html","148759b65160ddb33dab549000296ebd"],["archives/2018/12/index.html","dc82e91f9d93aedcf243552033e77279"],["archives/2018/index.html","1cac0876c1b6c0e02ec2b54cceb7c2f0"],["archives/2019/02/index.html","7e3c083a02f0fd2c5fe047b82cb5484e"],["archives/2019/04/index.html","c3bd0fe293d7edf274a62352e343b0ac"],["archives/2019/05/index.html","f24b432091420a434f2948ad18655641"],["archives/2019/index.html","db8f11243dc5f831958250d5de046916"],["archives/index.html","7f1ade82651f765fd6dcd0e9e29501fa"],["categories/index.html","d8b3a4b78dff73df96663d052401bd33"],["categories/呢喃/index.html","9553bf96de5b62752382caf0b27d09e4"],["categories/折腾/index.html","24354b4436c929f6874ed9036a090539"],["categories/矫情/index.html","0a172e0c482b16df24bd3fea753f8e0b"],["categories/译文/index.html","e8e8c3f447643d14b48917ebe9f46812"],["categories/造作/index.html","e51d222d76b402a0b438d3dc93d0870d"],["css/main.css","e8c26117b06e681ce9e49f596649ff26"],["essay/2018-11-11-hello-world.html","109959b5968d19d62ccaa09cda5df177"],["essay/2018-11-18-new-starting.html","a1200be2191042c2f9ac8c928c8588d0"],["essay/2018-11-19-winter-trip.html","cc5649de6cf814c7c37664d94e4b3649"],["essay/2018-12-31-2018-y.html","da1f1114f05bf4b54a9cc445ad8ccb61"],["essay/2018-12-31-wordpress.html","d2b0f72eb75ec1299c3f4cda8bee3329"],["essay/2019-02-05-hello-world-2.html","d8cc8113e0a137aa7bcddc002cddf4ea"],["essay/2019-02-19-add-crisp.html","23c6a9b0db9278da48569d6e055f95d0"],["essay/2019-04-14-senior-bye.html","c0ba315d2eb16caf62278035b9b28dad"],["essay/2019-05-19-hugo-on-termux-tslt.html","0fd2d17aa025d3fc08dbf16367dc31f5"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","a74fc88184c04277c6d47ef49cc41190"],["js/affix.js","39b26055c9b3edb42925db2e0662827f"],["js/algolia-search.js","d43933f935603307a1e3b7b60dde4847"],["js/exturl.js","c653f728a8ea7f2685f5d71babdcaedf"],["js/js.cookie.js","1dbcef261b1ef30e03c67643b9f7eae6"],["js/motion.js","b2c932e527fe7da8f9562d577da73828"],["js/next-boot.js","2d7f592b14b15c9a93dc410621056df1"],["js/post-details.js","d283505ead0f46c7d08441243bccd92c"],["js/schemes/muse.js","ee68c1b750452dc930c03e219cd9fab8"],["js/schemes/pisces.js","f759aa8c4fe3533149d8eafcff6f5a7a"],["js/scroll-cookie.js","13e2ad265af2695ccab4b03e4909c47d"],["js/scrollspy.js","052f76e16674b337f6e8f13a97562b6f"],["js/utils.js","741bc67de397f6f6e0b40e28f91566b6"],["lib/canvas-nest/canvas-nest-nomobile.min.js","a3ebc36510107f8dfa44652675a225ff"],["lib/canvas-nest/canvas-nest.min.js","9f4af44da820016d517deacc29fbb1f4"],["lib/fancybox/source/jquery.fancybox.css","7f5d9438aca142ded454e81de6f3676f"],["lib/fancybox/source/jquery.fancybox.min.css","deaa1ff262503915def2d81dbe12ad89"],["lib/fancybox/source/jquery.fancybox.min.js","81a9392e8868ad372002493d965c2e39"],["lib/fancybox/source/jquery.fancybox.pack.js","8e7474f6a8827d271203bcc5520faef1"],["lib/font-awesome/css/font-awesome.css","1551858ded3a577396ac0e6f16ea52d5"],["lib/font-awesome/css/font-awesome.min.css","326333d977920ed7e0fa75afbf302795"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","2f086556110c4c164e4ed6a8c95f187a"],["lib/jquery_lazyload/jquery.lazyload.js","9e688596ef22d546f94d71ab8fc2b964"],["lib/jquery_lazyload/jquery.scrollstop.js","dd0167c2d59ce0c48b2f0811ad917bd5"],["lib/velocity/velocity.js","776287016ae9379dc96bfc4f22f9a22d"],["lib/velocity/velocity.min.js","77846794dee3757481139a0ac9b46f25"],["lib/velocity/velocity.ui.js","a22605e6b4857a6e2d4c7d2dba7e7e16"],["lib/velocity/velocity.ui.min.js","fe5d1db2687d9e2ac1f6276858b76168"],["privacy-policy.html","f87edc712fdfa3d2a12dde6c554850e7"],["tags/Crisp/index.html","d262249bdd6c4fe6158618a3c7db5f59"],["tags/github/index.html","62d2ccc8f57a2bef8536e2e373a24285"],["tags/hexo/index.html","480412fb5e5f3d1e201ca2da724d2acd"],["tags/hugo/index.html","74bf2e9597d37100b92055ca05d45677"],["tags/index.html","528afce17ae2670487c72ff325aee5d5"],["tags/termux/index.html","92b69849b6e44543a4ded1fed8fff7f8"],["tags/wordpress/index.html","43c6e0a015f681122e2b439cdae0e22c"]];
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







