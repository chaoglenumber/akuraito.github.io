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

var precacheConfig = [["404.html","a355eb475965a0246917a87ae1247984"],["archives/2018/11/index.html","3027d0464c3863061614b33a469d473b"],["archives/2018/12/index.html","b7c32a626b1dc545f36d900bd19f7f09"],["archives/2018/index.html","cc422621b9a48ec7cb3bf3b4e8b8005e"],["archives/2019/02/index.html","4a752b86e3d105f7e05ae671ae2044b8"],["archives/2019/04/index.html","e4cb9b23152d6c01ce0527db7c2812aa"],["archives/2019/05/index.html","095cbbb4e1831a733ed704e627254009"],["archives/2019/index.html","c2389a3b88643e626da6ba2e25943347"],["archives/index.html","b36aaad7e2f1dacfa4cb20c87544a137"],["categories/index.html","4cf37ea163560a5cc194d87c3ee5e230"],["categories/呢喃/index.html","03984d289e99217fe1b14c03ee30541f"],["categories/折腾/index.html","841464cf4fc707ae106ab09688bada2e"],["categories/矫情/index.html","fdcfa05b2a5800be87ffe4e995db18ba"],["categories/译文/index.html","d8657f79fff0ca7ba368733cbb343661"],["categories/造作/index.html","facf010009a04fdac8accad2644bb887"],["css/main.css","c649d2a12cfee4a8a380aea14916eb34"],["essay/2018-11-11-hello-world.html","1520fe302629a57709e4ad8e6fd73ce2"],["essay/2018-11-18-new-starting.html","8f16a95245567c85cf6ec01096d80e9a"],["essay/2018-11-19-winter-trip.html","316e2d751baa3c7a720b4cb6b65d4b48"],["essay/2018-12-31-2018-y.html","9cd8b6b9d461ce3d2af571ea47753056"],["essay/2018-12-31-wordpress.html","9a6e046b7fcb7cb28993696b0db84efd"],["essay/2019-02-05-hello-world-2.html","b2f1680f033c9e6ab8ca476608ecea78"],["essay/2019-02-19-add-crisp.html","4ef4a1d82a8114b379faf4a6fab7e591"],["essay/2019-04-14-senior-bye.html","77bf4ef2faaaf39b190001b7acad75c3"],["essay/2019-05-19-hugo-on-termux-tslt.html","98819964ac784014328da15e9d446683"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","79f969bb4b0863f618fe5bd25586d3a2"],["js/affix.js","0133afe0a136d764105bb449ab963878"],["js/algolia-search.js","1c6a0b21acedc7f2abb5e70a22f2004b"],["js/exturl.js","de9e360f301ca5c54cfb443add9c7d79"],["js/js.cookie.js","81a72e05622a9eb1593b14df8b31bd42"],["js/motion.js","d7cccbda96482fd0f6c1431656c7fa28"],["js/next-boot.js","99e6f38f32b5d06f5899b79720783e02"],["js/post-details.js","79da69d434bfe083d9bb97bceaf296bb"],["js/schemes/muse.js","755aeebf043267fbe7e24bb2ad75883a"],["js/schemes/pisces.js","a9e63d5a8bc7c5a966a904047531a712"],["js/scroll-cookie.js","e4593cbb2829eb95f7c54e43025a3534"],["js/scrollspy.js","04dd8919ce0211171ab465ad20816350"],["js/utils.js","9053f13364fd3823684d74e0ddf0af1d"],["lib/canvas-nest/canvas-nest-nomobile.min.js","03f93001b57056150ed0f3407410d409"],["lib/canvas-nest/canvas-nest.min.js","43379c1896d3061ecb6ff65878f1dd2d"],["lib/fancybox/source/jquery.fancybox.css","8bde92d655ef7f7abbea090586ac1825"],["lib/fancybox/source/jquery.fancybox.min.css","d21d5a29471cf7eea57660990aa8a6ef"],["lib/fancybox/source/jquery.fancybox.min.js","be1b89d5cfdbd17d107291e3949a5674"],["lib/fancybox/source/jquery.fancybox.pack.js","8af311cc34dd65bd621e39d5a9776566"],["lib/font-awesome/css/font-awesome.css","c470c45869aa1e4408d2b9ab35b21f4e"],["lib/font-awesome/css/font-awesome.min.css","2c9fd7bfd028e669c3b5dd6204e4916a"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","a8b4982795504574d55835df337ed4e7"],["lib/jquery_lazyload/jquery.lazyload.js","bbbfdedc8ac7e11ccf45b5564f264f18"],["lib/jquery_lazyload/jquery.scrollstop.js","35d2fe1eddc877cfe3ddcc3e3dbdce1d"],["lib/velocity/velocity.js","ca1c10d96abcd08109823c0b7f614fd3"],["lib/velocity/velocity.min.js","d775f7d27cd0197f19214793d1f8f9d5"],["lib/velocity/velocity.ui.js","713cc1a635a7decc6f2e61b2370f5910"],["lib/velocity/velocity.ui.min.js","65528051caca31ae405ab79cff72aae3"],["tags/Crisp/index.html","7732aa38f3d4149569ca87092c2c74cb"],["tags/github/index.html","9156d3b5b05fe5435ffcad354e690f38"],["tags/hexo/index.html","0a4b367c95bcbe3a19a527ff48dcd289"],["tags/hugo/index.html","b3b2630016012537dac63d06b0ea9de4"],["tags/index.html","dc77dbbeda83097ee8c6a359e024a0f9"],["tags/termux/index.html","6e03fe6c45fd42852c7a306d8eab5f99"],["tags/wordpress/index.html","5714650789a16298cd655c63c93d7b34"]];
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







