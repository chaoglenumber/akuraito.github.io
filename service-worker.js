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

var precacheConfig = [["404.html","228e9eb8b9963967eedcbed9e17f7e16"],["archives/2018/11/index.html","46341106ba12020dc9d55525aae349be"],["archives/2018/12/index.html","3a7005bf26cf7b51179df6ec4335ad9a"],["archives/2018/index.html","509ba095df4c35599f5c0c5c54fbd3e6"],["archives/2019/02/index.html","b0345a6b614a0bc1ec30221c483065d8"],["archives/2019/04/index.html","5732ad09957ff922ddbbd9ec4103eacf"],["archives/2019/05/index.html","9a11564421d5eb3094b87c1a2e1f8d2b"],["archives/2019/06/index.html","91f8e856d30fae5aec73dcf94afebfc2"],["archives/2019/index.html","5456c6b150fd662ec59f8e60c3280eab"],["archives/index.html","8a93a07583f0a8b4aad0c06b6f69e4ab"],["categories/index.html","ec83cb2dc53e6c9a2fb6c020c8992cbd"],["categories/呢喃/index.html","8a2b5c31e0f7d43ac1ea76e58a993071"],["categories/折腾/index.html","6cca0f72f9d503b2bc57ef788316b8da"],["categories/矫情/index.html","e593d93bd6170d4d10b02e3eb00cbb27"],["categories/译文/index.html","c62956022460900e0f5939e3ad9143aa"],["categories/造作/index.html","be1e65a42b9822eb236ff84789e99387"],["css/main.css","987a71f63cd2406fd969b550588ece9e"],["essay/2018-11-11-hello-world.html","e6d4caba15d9ee7abf590c6cb267db23"],["essay/2018-11-18-new-starting.html","aad06dbc9edbd2743a9aba333602c69d"],["essay/2018-11-19-winter-trip.html","c02e66f43c260b5e57a35b6e3dfe5d07"],["essay/2018-12-31-2018-y.html","365a06d3b3b0b4f2cca4cefd055f7902"],["essay/2018-12-31-wordpress.html","5a2cab7c7e0bcea2aadef5885c28e73a"],["essay/2019-02-05-hello-world-2.html","1fe62ad973d195fc780490a75974a3ff"],["essay/2019-02-19-add-crisp.html","8f411da7e1d31b2618c1087c4aa5a6af"],["essay/2019-04-14-senior-bye.html","359ca326d7235770aa95e5855e075488"],["essay/2019-05-19-hugo-on-termux-tslt.html","433b0b7c3428550b8ce96736329f03ea"],["essay/2019-06-09-1.html","404a6f9d6244f791eed593f935a4f8c5"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","5e6098e46028d4c9ced344ce7dee6345"],["js/affix.js","5d773555628fc5196b9101ce3f2d549d"],["js/algolia-search.js","9f1a5cb1f974bdd9b98f31f7f8216996"],["js/exturl.js","324730d87daba01d26a39440c380e5ab"],["js/js.cookie.js","3ba9789eae4dd157c7597bea3c8d8874"],["js/motion.js","93931f7a838d412c7b8c757a5cab44f8"],["js/next-boot.js","16ca4e43ab5bc8e0292a8968c60dde37"],["js/post-details.js","04dc11aa2829713f18ff59f4eb05e8a7"],["js/schemes/muse.js","9d0003f1ef1b6279bf98efc8f933c940"],["js/schemes/pisces.js","f77fea221db135b08a23cb8ba8a8645c"],["js/scroll-cookie.js","dfcc4a14349cd6925dc32a91ebf3f3d9"],["js/scrollspy.js","7a277550bc4d65df89483221347eb03d"],["js/utils.js","939278b76bfe7781a04e736d6c02321c"],["lib/canvas-nest/canvas-nest-nomobile.min.js","95e60966ee06b65170928c043dbd9f2f"],["lib/canvas-nest/canvas-nest.min.js","851a935d738b975af48273794d6fc75b"],["lib/fancybox/source/jquery.fancybox.css","c4c226dcb09125e2ea08a3846f63ceb2"],["lib/fancybox/source/jquery.fancybox.min.css","fdd405ce1865667f504f3126b879a866"],["lib/fancybox/source/jquery.fancybox.min.js","dc42afb86435548b45f13e26b54558fe"],["lib/fancybox/source/jquery.fancybox.pack.js","cfdebcffdd1428864e28ea887540e98a"],["lib/font-awesome/css/font-awesome.css","348449e4f55676f4bc5eea6474acef21"],["lib/font-awesome/css/font-awesome.min.css","b9a3d72bf825da49875bd36eabc67882"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","d1c408c28e4a47ea79ce6dc7449c79ca"],["lib/jquery_lazyload/jquery.lazyload.js","75de1ed528d032852ccd6a27b0695f6a"],["lib/jquery_lazyload/jquery.scrollstop.js","cc80664c50ee71372378c8f2774e0d11"],["lib/velocity/velocity.js","6c6b520db7f26f8f3c8ac836dbe03b58"],["lib/velocity/velocity.min.js","7c9394dde4643e133a747f89f105335d"],["lib/velocity/velocity.ui.js","0f86d72ed1c49f4799792f9d3e4bdb1f"],["lib/velocity/velocity.ui.min.js","67e9adaf51d86b9f05ef35113ee64d48"],["tags/Crisp/index.html","28e7086836af314223c1a6502463e959"],["tags/github/index.html","4894e895406096f3d774df3429583c55"],["tags/hexo/index.html","1bb5a64fe1c19fd2ed0a71db6c5bdbee"],["tags/hugo/index.html","b4b48febef3e749560ae537de5b79b0a"],["tags/index.html","7f3b2465f6b40627b33cbce0b551fe22"],["tags/termux/index.html","9a7c31ccfb2dab4a51d4d33d2f13dd78"],["tags/wordpress/index.html","fc19efef6b09e9e9aef7f00d1880759d"]];
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







