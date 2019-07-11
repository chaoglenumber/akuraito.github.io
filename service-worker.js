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

var precacheConfig = [["404.html","7b3c4d6dfd58c82f5c8295e0f8126217"],["archives/2018/11/index.html","b0654d614def2424c84cd40192ce6abf"],["archives/2018/12/index.html","36843b34f0d4655e6b7b1eca41967ea4"],["archives/2018/index.html","22078778501c70f335966ab53fc9d1e1"],["archives/2019/02/index.html","21b6c9780daae175c2ec971fe702e8db"],["archives/2019/04/index.html","c931d5992e2ed6892a32249f5fe63752"],["archives/2019/05/index.html","948a9e32d0220cf0a4d4f62e35f15ced"],["archives/2019/07/index.html","f926ff6da8a6aeeaec3b6181e7df7e88"],["archives/2019/index.html","35c49fd30271a5d6c921d02daf2fd462"],["archives/index.html","8ab88dad0be05928c40410304bfa97d2"],["categories/index.html","7a0fe456278bf36e12dce6a0f048a21f"],["categories/呢喃/index.html","0ab65bde2f2af8172b66f9f9ec26f5f4"],["categories/折腾/index.html","20763a3d7df7458439085d71a790c815"],["categories/矫情/index.html","e5ae5a19759357419f572dc7e4f065c4"],["categories/译文/index.html","a2b13fa04c4644a913c91a016929e867"],["categories/造作/index.html","5c4308b99a4a24e3842b2a3894a040ab"],["css/main.css","2fda21c800f73f69bfaaa0a9ba2cd65d"],["essay/2018-11-11-hello-world.html","809be5e9e625b000b87a758cff61f02a"],["essay/2018-11-18-new-starting.html","1026cedbb580456f44744443c562478c"],["essay/2018-11-19-winter-trip.html","d2255bc822e60bcc2ff0d41b7535c814"],["essay/2018-12-31-2018-y.html","227a825213ef36c5657f4b726fd65e4c"],["essay/2018-12-31-wordpress.html","1ce90b8063270c07082882d553772491"],["essay/2019-02-05-hello-world-2.html","24a53f732bae54f88afe82ddd7e0423d"],["essay/2019-02-19-add-crisp.html","4a59272121b54e01ebb47f22a9c74bd0"],["essay/2019-04-14-senior-bye.html","4d05445e34329c202a37dd5530d11bf8"],["essay/2019-05-19-hugo-on-termux-tslt.html","747978c730f7026e3e9ea383fb04b475"],["essay/2019-07-09-anime-saw.html","f71ce7b9f0d3efa5c1ac3002a7becc1d"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","73bd2eadc11d9b0731bc8c8a2b97feb9"],["js/affix.js","33e7d2294909f408f4620852f39f9a40"],["js/algolia-search.js","b7eeb37c82406b4c99e1b455e9ab74a9"],["js/exturl.js","b05f1ab68cf9135c4cdab5856ce4553e"],["js/js.cookie.js","29478886041ec6d82800e66f8c6607fd"],["js/motion.js","4deab9cb2f02eec257479d82ccb82f09"],["js/next-boot.js","db43cdcc326f42f81290fd1a4e08e45d"],["js/post-details.js","5b2ae0e6f1bb29dff3894eaddf24f9f4"],["js/schemes/muse.js","234099e589d845776dfd0d2eddc6d3cf"],["js/schemes/pisces.js","734b46cfbd4081876c0b9169dee4c768"],["js/scroll-cookie.js","5560e9ae582b20d5ad0a0334aed46645"],["js/scrollspy.js","e774b29a4f8496a30359c7e04bc0fbed"],["js/utils.js","0c60c4095a6351ba179e719608e1580b"],["lib/canvas-nest/canvas-nest-nomobile.min.js","2472315b89a8f2a706720d75011c0a61"],["lib/canvas-nest/canvas-nest.min.js","52c2629e7dafec96f4c4a641752d670e"],["lib/fancybox/source/jquery.fancybox.css","678a9034fa7903ad3a00d6973aaf9192"],["lib/fancybox/source/jquery.fancybox.min.css","839eaa15b016e2e61e305187caa6ece0"],["lib/fancybox/source/jquery.fancybox.min.js","e3bb2c310b38379f80e228682bf37f48"],["lib/fancybox/source/jquery.fancybox.pack.js","a736ed1f32a6e93fd2c69d0d87abbdf1"],["lib/font-awesome/css/font-awesome.css","fffc5cd48507077acacba52ad1d7eb14"],["lib/font-awesome/css/font-awesome.min.css","fffc5cd48507077acacba52ad1d7eb14"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","e2e94e1e367db3cc49108c96625f1fe6"],["lib/jquery_lazyload/jquery.lazyload.js","7b8aa2dbafa3bf98b7435443deb432eb"],["lib/jquery_lazyload/jquery.scrollstop.js","6c52f3111ac0685633b0fbf046343dd9"],["lib/velocity/velocity.js","22e25f9edf0bb547c394d6b957bcf813"],["lib/velocity/velocity.min.js","8f1139af8bb78c2ea3d8c12b0c367a64"],["lib/velocity/velocity.ui.js","cd49032d1caae0a24af053fd2406da9b"],["lib/velocity/velocity.ui.min.js","ba1d5fd683a0544b9a7ee20244889b31"],["privacy-policy.html","8333c55ed391c948b22f056d55c7ba4f"],["tags/Crisp/index.html","dcbb6efed838c71d517d6eed441f86d2"],["tags/github/index.html","25daa77a4c89de11bef1e6cf11e34958"],["tags/hexo/index.html","40160a0c4d0fa7866890785b79bb6224"],["tags/hugo/index.html","69683fd4a22051985e3c66370e4a5a17"],["tags/index.html","c3b22a5c236ae9e2ee3618ab8e1ecb6e"],["tags/termux/index.html","55a8c336959cf1c6513166df6b3e1f8b"],["tags/wordpress/index.html","5f943b395fd9af58529e92c6fb4fe5bb"]];
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







