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

var precacheConfig = [["404.html","5f44256ee18122ede993799be6472e56"],["404/index.html","7cd5e0e9c657d56f8fe0981d62cbedab"],["archives/2018/10/index.html","60d5d999da302d7601531ec3c58411bc"],["archives/2018/11/index.html","a613a05aa9836016d39d64c51ce06e35"],["archives/2018/12/index.html","9e6bb957467fc672cc3729dd4f405cae"],["archives/2018/index.html","505a29791a3c946067ab01c551dccf56"],["archives/2019/02/index.html","9c6d62b8ee26262b10e27050658a6664"],["archives/2019/index.html","1a55dd098269945b320b983ac8e71221"],["archives/index.html","03b6308934cdbf1e682cbfd24793ae30"],["categories/index.html","4c4df7e3acaa608c9f47285b065c9fe8"],["categories/呢喃/index.html","558e2cad0782b82c165f8fa54b0835fd"],["categories/折腾/index.html","6e207597d78bdfccfa6effea3d2ed494"],["categories/造作/index.html","11affacaf55c7a2f2ea4dda92680ce0b"],["css/main.css","6e35e9b9f1ac343dc6529ab28e38ff52"],["essay/2018-10-28-web-build.html","bd00422c42344e4df1fe27399698cb59"],["essay/2018-11-11-hello-world.html","af9ef868f7594a4e56eacb8158d65d2a"],["essay/2018-11-18-new-starting.html","28c182da01e53364a1e831c23435b77c"],["essay/2018-11-19-winter-trip.html","14f9b78a33a4c802e87aea397c109338"],["essay/2018-12-31-2018-y.html","69ba5c8dd20c45eea9603d6f197e4519"],["essay/2018-12-31-wordpress.html","4b372bfcdfd4242414fa9d548b728cd3"],["essay/2019-02-05-hello-world-2.html","b5b651a51bff3483eb51bcbb60d5c6a9"],["essay/2019-02-19-add-crisp.html","80738047dedaae4b2d43e028cebb9a11"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","acc2bc180ca7014725acdca6a1f8cca9"],["js/src/affix.js","57a65fe790dddcaf5201563122d0b188"],["js/src/algolia-search.js","799fb400ef7f245bdea4d8d3aa713271"],["js/src/bootstrap.js","6fd18a4e2aef32a0018d331996fd489d"],["js/src/exturl.js","9d6eac7e8e2733bc0b16a312f92e44e3"],["js/src/js.cookie.js","8a890eec90b233ceda92ef7e6796079b"],["js/src/motion.js","36655ba63bceb23bb0db087b94c50f9e"],["js/src/post-details.js","8338b2ce2c2685ea3af8a1ed7b05175b"],["js/src/schemes/pisces.js","72a6e50badece0393c66f75fac0be107"],["js/src/scroll-cookie.js","19ce1ea3fddc723106ed89b3da86129c"],["js/src/scrollspy.js","aa3b777cafe193639bd3f6e192998af3"],["js/src/utils.js","138f316d55b65aff3aee84e187bb75d7"],["lib/canvas-nest/README.html","a155f95158677e89312002bcebf70f35"],["lib/canvas-nest/canvas-nest-nomobile.min.js","be7c8732769f5b15aece15529493e4c3"],["lib/canvas-nest/canvas-nest.min.js","9590a2f3b8e0d9d12d1eee852b428e53"],["lib/fancybox/README.html","134a0057ed0b67c8a77cdc5753fe403d"],["lib/fancybox/source/jquery.fancybox.css","03f0338e8f8afa0f75c7320b1e89fd38"],["lib/fancybox/source/jquery.fancybox.js","9c8a8fed050e9fa4ef48701194666881"],["lib/fancybox/source/jquery.fancybox.min.css","05e0c7c8bdbcf4af4ccd5b34b36fa1bd"],["lib/fancybox/source/jquery.fancybox.min.js","463e4fc56178f66e4ec0ec0d186ae784"],["lib/fancybox/source/jquery.fancybox.pack.js","9c8a8fed050e9fa4ef48701194666881"],["lib/font-awesome/css/font-awesome.css","a1363aa35e2248b76805c8865e97cbb7"],["lib/font-awesome/css/font-awesome.min.css","719fa46a0a9f0cdc811badf071063324"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","28ede169bc094f0c99e4a852eb7f4884"],["lib/ua-parser-js/dist/ua-parser.min.js","2aecb4849033667343238e7f4f353a87"],["lib/ua-parser-js/dist/ua-parser.pack.js","b1e9d1e9b64dc61e95d7f0d1fbd4fed8"],["lib/velocity/velocity.js","0f0a784ade334bab2509f21ab0bf6dda"],["lib/velocity/velocity.min.js","be3f66db3f36c4dbf6d8993205df1376"],["lib/velocity/velocity.ui.js","64e92381569c15d6990768989ed4922d"],["lib/velocity/velocity.ui.min.js","30c129400accf19fae8f3e369c51d852"],["tags/Crisp/index.html","8e9f415f13721107c848e4a7bc641935"],["tags/blog/index.html","a02348d0560dbfc964e2c2369977d33e"],["tags/diary/index.html","245da22e98c5cbd9f96f87dd071063aa"],["tags/github/index.html","d3b90826a726d120ee239a9a80a5e1b5"],["tags/hexo/index.html","b77906832a03890cb1a43d21e90fe80a"],["tags/index.html","9a2bb55a1cb199cb10fdc9e60142ad7b"],["tags/termux/index.html","6f010787102556c9c5886fd09ec38148"],["tags/web/index.html","a195a0286ba08518bb25da66cc1c4a20"],["tags/wordpress/index.html","49b8b8785b23a69a4bc1347e0f65331f"]];
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







