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

var precacheConfig = [["404.html","b9f93a3ee7796e5f85e7ac11a386e211"],["archives/2018/11/index.html","264594d2c13300ab0a82ca90e506dc45"],["archives/2018/12/index.html","16bcc91677d9aaab45a34783ecba694a"],["archives/2018/index.html","c7b2fa3e5df6a5daf51a433d9f29a1ea"],["archives/2019/02/index.html","853ffc4abc06fdf7cb6159bce42fd344"],["archives/2019/04/index.html","75cd001a6810deef297a49cc5f064c11"],["archives/2019/05/index.html","f97fe537c5dffc43a81ec210ba32d6ab"],["archives/2019/07/index.html","1b45f68388b7b51f1f6b904d09aa6113"],["archives/2019/index.html","f7bd20f1ef6b914fe94727fe58d071b6"],["archives/index.html","3bcd7399e4cd4d6c40c4e31979172541"],["categories/index.html","dc74c566b1d7cfb69885fa5eaf645feb"],["categories/呢喃/index.html","16df146cf1e0f7667b336c3f248bee73"],["categories/折腾/index.html","9469671045b60aae9372722e9a3d874a"],["categories/矫情/index.html","2bdeee92a72c9b044eab368db28cdd47"],["categories/译文/index.html","cf08de17db71b91ac6e2a3a37c3d86fd"],["categories/造作/index.html","52feb752ff7496a393ae63f028e9c3cb"],["css/main.css","73b91941193b15fcc981fe2ad3a86044"],["essay/2018-11-11-hello-world.html","39dfbe1de825c26c6ba51657945795a9"],["essay/2018-11-18-new-starting.html","3fc64fe7bb8e1cba4524062d2004dd7a"],["essay/2018-11-19-winter-trip.html","47dd4db964fb473aea2a6e7e880134ca"],["essay/2018-12-31-2018-y.html","7ae7eefc14cbec0d143da78128074c1d"],["essay/2018-12-31-wordpress.html","aee1353698669e725d6338597c338c84"],["essay/2019-02-05-hello-world-2.html","8b4f474231b45ba1e6590e072a4f94ee"],["essay/2019-02-19-add-crisp.html","c3fe493aa83a55d7ae9872964ef8e105"],["essay/2019-04-14-senior-bye.html","08c7160fb26d6906b8b2bbebe27ecf79"],["essay/2019-05-19-hugo-on-termux-tslt.html","dd454f5b2b17cb1199ac24c387eac7a5"],["essay/2019-07-09-anime-saw.html","ed503fd5ac9f107be3373252ae8682b8"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","a31dfbec8fcc1dad0620490a4292fc67"],["js/affix.js","cb1298cbafcf131c4063bd9f53d7fc79"],["js/algolia-search.js","f7811f42dff88f2ce1299f2921f421a0"],["js/exturl.js","f0221f7a122abcf6ad0b4e9ec349a645"],["js/js.cookie.js","dee8a2c67269adfca328ebaec2a12639"],["js/motion.js","bc0a2cb8a7148d14b447df9bc8f5a0ff"],["js/next-boot.js","d4ef76d02b60882b5e6b1f161e1d6106"],["js/post-details.js","96936ec5c200d5f8c023397cbe422aaf"],["js/schemes/muse.js","1b44c79bd0f4145fdbd7caa2576d0b8e"],["js/schemes/pisces.js","635fe5a628b9d7620d2ff732d20897cc"],["js/scroll-cookie.js","c3c9291e03dbd3160747f7f9781e526f"],["js/scrollspy.js","7a1181cff3192416cf59fffd7956b4e5"],["js/utils.js","e2ccbaacb10d029e8d8a529f423ef27f"],["lib/canvas-nest/canvas-nest-nomobile.min.js","3d53904d9da66bd31c9b3f0aa335ade5"],["lib/canvas-nest/canvas-nest.min.js","403eed5a6dcaf26163e81c7d56e09584"],["lib/fancybox/source/jquery.fancybox.css","c2f2c8be8a164a1a79d3fd90b66b90c2"],["lib/fancybox/source/jquery.fancybox.min.css","ca78356401639abb20b908e8f1bb9388"],["lib/fancybox/source/jquery.fancybox.min.js","c8d7391ed3a0084841e1493229e88bde"],["lib/fancybox/source/jquery.fancybox.pack.js","89d36f1acb94605eef6691b6f704250b"],["lib/font-awesome/css/font-awesome.css","ec05b380c35936500af55157f0d91254"],["lib/font-awesome/css/font-awesome.min.css","06a48a8dfa74bf4332496933fdec015e"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","c84cd970d490bcffb476a809629d6e12"],["lib/jquery_lazyload/jquery.lazyload.js","b66832ff73e8f1b18848f1e85d57bef5"],["lib/jquery_lazyload/jquery.scrollstop.js","d2493fb81816eb0795006aaae51da12b"],["lib/velocity/velocity.js","939e4ee27292dfd3c5ef5cf042a47d83"],["lib/velocity/velocity.min.js","24564a0603d42b2cf4cfecc02b871ae4"],["lib/velocity/velocity.ui.js","4923f33daf257e6c4dd913de2106c3f2"],["lib/velocity/velocity.ui.min.js","bb339beb5ec1d3e200c6fe06ea045aa8"],["privacy-policy.html","79fedb568232d6fa1a4e2fc7f7bff90b"],["tags/Crisp/index.html","58f8aa0d41184f37d961e924f5432888"],["tags/github/index.html","f2422884b455b17fefa3ff5d15e5dd24"],["tags/hexo/index.html","aabf6c9f160d8d8a60e804e1f46584c1"],["tags/hugo/index.html","eff79b77be18c24cc89eb0228b0c04cb"],["tags/index.html","17d3004c84548f373f7e8b66a0124364"],["tags/termux/index.html","1c1a66feb3a9c7efc431c5da30219756"],["tags/wordpress/index.html","77ad8d841ee0d3a3e7f3dbbd4b2c53c7"]];
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







