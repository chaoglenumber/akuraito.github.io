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

var precacheConfig = [["404.html","416fbf51adfe9c0cf1bf92e56360484d"],["archives/2018/11/index.html","c7b5d63c6a172028e52a995c09d710a2"],["archives/2018/12/index.html","e5ab8d86500d1083e5a043f73e54f2a4"],["archives/2018/index.html","c7b7d9e09cb15eda0f8332b2ffb04b3e"],["archives/2019/02/index.html","b84011df7a7b36aceb6d7e9db93514e1"],["archives/2019/04/index.html","aae7ca5e7911a603a8f6000089bfa048"],["archives/2019/05/index.html","3de5ebddffb7a735c1cd8c9436d97c7c"],["archives/2019/index.html","06f918a30af1f7f7bed4b6a6dd86b82b"],["archives/index.html","de36cf0df320bb49e9131c5a16e5bbef"],["categories/index.html","028a01b6c622c9e6da7dc3e911ee31d4"],["categories/呢喃/index.html","59aa3df1dd230323c0f04c5ffd6f9689"],["categories/折腾/index.html","685bb2da4c659547d1c5cc6e5a0bb32a"],["categories/矫情/index.html","ff5840cf5ce51a35362b4393b5736a96"],["categories/译文/index.html","33fb5a6c0797de39eb31dc9fa49b0738"],["categories/造作/index.html","ce81c38b197ad535b12b08e53988eb5b"],["css/main.css","7f198278eb5393168695f9d2e4d6f20a"],["essay/2018-11-11-hello-world.html","6ea19ae251ade7827c450f6b3ba57664"],["essay/2018-11-18-new-starting.html","937009972b3389bbda54167c6c23a907"],["essay/2018-11-19-winter-trip.html","3c40279ddc1df85d356033e6b3decf12"],["essay/2018-12-31-2018-y.html","c1291ec082e87d62385148986ebf83eb"],["essay/2018-12-31-wordpress.html","57084308b3aaacbc75ef807a1fae42a4"],["essay/2019-02-05-hello-world-2.html","4ae6a493b6e48867352e255f601ff980"],["essay/2019-02-19-add-crisp.html","eaa889fc3e7dd6f5f18233158252df7c"],["essay/2019-04-14-senior-bye.html","c4e3d6228d11353df000de67ce7b9410"],["essay/2019-05-19-hugo-on-termux-tslt.html","7d72ed60074fe31eb9148a87c1f2101a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","c00d0b8b7a3b5212a9883b2b3b450891"],["js/affix.js","5b24c30eb8040233ff714e2bce1a31e9"],["js/algolia-search.js","7349e549daf9ce6f1e82c6bbe4e8ce5b"],["js/exturl.js","b201e55bf0b1073dee77d5a2f5fd9184"],["js/js.cookie.js","5054c749b6533d67bd8a4e856dacd3c8"],["js/motion.js","a4e449fb1c2768122c7e963e34399406"],["js/next-boot.js","e3ad16ffe1511631fb5ed1686f7daf9b"],["js/post-details.js","cf309fd883fa84205a6f63c06661b3c5"],["js/schemes/muse.js","93731b3aa4be2ca385855ab9ec7d3295"],["js/schemes/pisces.js","0fa2e4c8cfa03debbfa6a70f82873478"],["js/scroll-cookie.js","5601ee97edcce85fdc0308d4abbcb0fa"],["js/scrollspy.js","17482b2fbe962f0991086dd566dbee58"],["js/utils.js","1de4ece8bff92f1fc97048206474e573"],["lib/canvas-nest/canvas-nest-nomobile.min.js","cd313737ab0bc3bba0ce16865ebd57f7"],["lib/canvas-nest/canvas-nest.min.js","a2482fb9f38ded14f4094aa6d41e8dbc"],["lib/fancybox/source/jquery.fancybox.css","693e70fe05ba368efe35e74e8ff085f7"],["lib/fancybox/source/jquery.fancybox.min.css","0739fdc9a0d971dfbf1a786a9021b97a"],["lib/fancybox/source/jquery.fancybox.min.js","c902ad8cb732273ffd0f97b03fcea9b3"],["lib/fancybox/source/jquery.fancybox.pack.js","3fcb07dafefe2256cb6b20b5dc7a6d07"],["lib/font-awesome/css/font-awesome.css","3b203ffd0d23179e7240683739cc54f4"],["lib/font-awesome/css/font-awesome.min.css","2da29531f4398af036c457233cf60f5a"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","16140b27cd49ff293ad0c29ba147f1e5"],["lib/jquery_lazyload/jquery.lazyload.js","a5ed151db6bcc89f6809e1df7b07c7c3"],["lib/jquery_lazyload/jquery.scrollstop.js","c8700892ddcbc04285e05d5d37fffc47"],["lib/velocity/velocity.js","758bcd40247fdbe0065985beb4acc687"],["lib/velocity/velocity.min.js","30979196a0a10f5b7249f22487ec0e51"],["lib/velocity/velocity.ui.js","697b116117a0490f0d3c83b4516b7a0c"],["lib/velocity/velocity.ui.min.js","fdd71c8426cb8d0222b866b4481eb089"],["tags/Crisp/index.html","8fe7e4db4b63dc736283260eb81f1342"],["tags/github/index.html","5a814f1de32cf85d078c6254cd98d857"],["tags/hexo/index.html","193290eda82c7231d6f16d4f796c9d78"],["tags/hugo/index.html","d72cf6c780483ed4f130d5b4a93fe152"],["tags/index.html","f4bf999d63ff560a9acee21e05d3f4ec"],["tags/termux/index.html","100e82971663e0e3d4966260dc1b8cfc"],["tags/wordpress/index.html","4530e49263b636c7307dfd27d9e86a5b"]];
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







