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

var precacheConfig = [["404/index.html","7cd5e0e9c657d56f8fe0981d62cbedab"],["archives/2018/10/index.html","b4f0d95c193a308767f90bb962183a45"],["archives/2018/11/index.html","b72e6deb45ce631e26523dd983b2f899"],["archives/2018/12/index.html","1515ad91a5e256371a56686220d22cdd"],["archives/2018/index.html","bfaabdb92b813c15f90d3d96d5a7ebd2"],["archives/2019/02/index.html","daf32500c73302551457ebd3445c3f59"],["archives/2019/index.html","f669c4db99ca5a3bff52b114ddd79256"],["archives/index.html","3f4b514f26efa23bdde2e61e56557a37"],["categories/index.html","c9145a779db2f424be547c2baa0fa432"],["categories/呢喃/index.html","5de71709cdb5ada04a322eef1157f6b1"],["categories/折腾/index.html","7ad5251123feb163ddcf8a72a0d7e8d2"],["categories/造作/index.html","44f59cfbfc76a229b96c4cb0a00219e8"],["css/main.css","75cc94bffada5d7abb098dcd65fe5bb1"],["essay/2018-10-28-web-build.html","89d12ab7fc79d582e430d0243267e909"],["essay/2018-11-11-hello-world.html","6acb73c72ebfd4a1f4c8216c0ad6a801"],["essay/2018-11-18-new-starting.html","2f997025fde0855ef047f4f9e6d24afa"],["essay/2018-11-19-winter-trip.html","e28a6755464c0957b0a3f9b35fac630e"],["essay/2018-12-31-2018-y.html","8301f8c034c7a8ad0afd872991503d46"],["essay/2018-12-31-wordpress.html","8defc90a0363daac73d693119f147e73"],["essay/2019-02-05-hello-world-2.html","fcd95ce61eeda6d66ef529eed690d311"],["essay/2019-02-19-add-crisp.html","eff15075993c2e14097f3b2ed2295b74"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","6a09fa452c15ab93450a2c89b463fa83"],["js/src/affix.js","49ddc44f20b0307e943ccf6b50b7ddc3"],["js/src/algolia-search.js","5e18b1213d63e183ea01506fdef6b25e"],["js/src/bootstrap.js","9892bb1de848aea0c2ae7e42dccf7fc5"],["js/src/exturl.js","b57b10576e96e1572a7dbe8a7f4269cd"],["js/src/js.cookie.js","d53c9c3c37daf4b12eacb0f77bd0496d"],["js/src/motion.js","eb54ba6b0af3c7d007642aa1fe267cca"],["js/src/post-details.js","fc6b4fe1371ae5d93f41ed59faa01982"],["js/src/schemes/pisces.js","5251705b21fd37e13648143db384eddb"],["js/src/scroll-cookie.js","423fcf512ef72823b4f61d1c11b6a516"],["js/src/scrollspy.js","27d0840dfa3129ca0f6981a626776671"],["js/src/utils.js","f600a1cfc53c496fc9a063e0d5e50843"],["lib/canvas-nest/README.html","6a78795a31f8c4afb2fbf424fbcff0d8"],["lib/canvas-nest/canvas-nest-nomobile.min.js","681d08217d94e4a9d63f62d2eab7fc74"],["lib/canvas-nest/canvas-nest.min.js","c27d65380759734aa2ae3340f22d1fe2"],["lib/fancybox/README.html","cfd64dccc7161b384dde651c6417c75f"],["lib/fancybox/source/jquery.fancybox.css","f5c4ef35bb41f1f982852746d9227528"],["lib/fancybox/source/jquery.fancybox.js","970ee4ea108ea225f2bf80b883086386"],["lib/fancybox/source/jquery.fancybox.min.css","2b466f18cf8ad05b73a0e3466b17f013"],["lib/fancybox/source/jquery.fancybox.min.js","c25077470a9ec46f3ac73f7c715bc49c"],["lib/fancybox/source/jquery.fancybox.pack.js","8ca5f29c2b3c9925264e5f4dc07a0e25"],["lib/font-awesome/css/font-awesome.css","975ec4d055cdd14270d5980ab99d2fb1"],["lib/font-awesome/css/font-awesome.min.css","fa40331202333e9ab03b7056caaead3f"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","ca826a14bbb4b3460d75e72ae6423533"],["lib/ua-parser-js/dist/ua-parser.min.js","12b4134bf637db75d1b5b4333501db01"],["lib/ua-parser-js/dist/ua-parser.pack.js","4093e3430783155ecbe432fd95824930"],["lib/velocity/velocity.js","53ceba377befa44188e00b5995b2c226"],["lib/velocity/velocity.min.js","33d1498224b4a370b5fff3048e8fd551"],["lib/velocity/velocity.ui.js","b56fcdd35dff62cd42ab107fc6d989fe"],["lib/velocity/velocity.ui.min.js","ecd06252b753cc53a52a5cbcf8841a47"],["tags/Crisp/index.html","5c0466eaee1c1b7febcd34ee867076d5"],["tags/blog/index.html","0ab5624f6ce9bc85bf44ada2b1c8dfc2"],["tags/diary/index.html","c52f5c0b36f935f1b7f6a5053f66c133"],["tags/github/index.html","9534d6f45c4e00955faf53b6fe6829fb"],["tags/hexo/index.html","f3c49fd1e1a4100eb4182ce278f40d72"],["tags/index.html","33e767fa2dee86a5904fca63faed8966"],["tags/termux/index.html","26713fbccf6c291386ea49d6cc8cad08"],["tags/web/index.html","26bd9203249a0d9fcae767d7e748c809"],["tags/wordpress/index.html","79380064d30a357ccd68a6345baafc8c"]];
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







