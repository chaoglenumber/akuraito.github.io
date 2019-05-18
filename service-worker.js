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

var precacheConfig = [["404.html","fe6f70a0b4ea92cfb73978d6849fb59c"],["archives/2018/11/index.html","3229207d8c45f718e7ddb90341f47ff0"],["archives/2018/12/index.html","a05ba163ad624eefe8dbf6aa754001e9"],["archives/2018/index.html","f9b57e09f4d1b424474d212421d563be"],["archives/2019/02/index.html","3052a9b10dc71b7e0d2ced051a8b2365"],["archives/2019/04/index.html","c93ff5adaf33727d53515fc88e92d14f"],["archives/2019/05/index.html","0a6d098f1a01df66213d1f38a2f1fe38"],["archives/2019/index.html","c6aa1c9cdfb307c58f5c50a99f5fb8a6"],["archives/index.html","c7c5d468907273aeb5ac2353990723d1"],["categories/index.html","4d79e649e6dbd3f63501b8ac241da7f0"],["categories/呢喃/index.html","3d7dc1c4c33e3d6134c23aab69ead4df"],["categories/折腾/index.html","bcc29f1ada00572c7812666d9cb87c51"],["categories/矫情/index.html","1fe1720790f6de2cec2054871104466a"],["categories/译文/index.html","c6b0508ca0b26665791b7d6b2fe85204"],["categories/转载/index.html","f7878cc0e2d37a521bb2f66cc896c3da"],["categories/造作/index.html","aface6b49cb81d6badd1e82a6cc87138"],["css/main.css","3edc9fdad36bc84baf9a9d4c74bd0545"],["essay/2018-11-11-hello-world.html","2ed0a1861037ad5d90e08f3c893df9df"],["essay/2018-11-18-new-starting.html","cf01470fa5c8859d7ac94143e5c022a4"],["essay/2018-11-19-winter-trip.html","08e8fb914ded1b95222c1046040d6de6"],["essay/2018-12-31-2018-y.html","20459a24f28a0fcac8a6e7d92e0ee1f6"],["essay/2018-12-31-wordpress.html","db39019981f8fe75496ee132a2eb1eb1"],["essay/2019-02-05-hello-world-2.html","10ae2376b1b2cd7305bcc93cc6f5a418"],["essay/2019-02-19-add-crisp.html","c3dbd7b2dae6dda9727099c5cdb331d8"],["essay/2019-04-14-senior-bye.html","026da4644ad92de389dd879dcb5f37ab"],["essay/2019-05-12-novel-the-sound-of-silence-from.html","383ab10baa44e48b1753f31962a95806"],["essay/2019-05-19-hugo-on-termux-tslt.html","3a27530d5b40aa71b594aa4c1fd64302"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","28a6edd52d1228417d2ca24b001c1151"],["js/affix.js","938d5d48f3d072eba2d97b14e0fe5109"],["js/algolia-search.js","073e98dbfe8afefe6f012463a938c44b"],["js/exturl.js","5de4eda1dc88a8a2de3aa079fc51fbc1"],["js/js.cookie.js","4b7945707564789b03dc7442ee29d35c"],["js/motion.js","512a6ecf99b83906f85a58be62da29e5"],["js/next-boot.js","4fc92a153d03a181db938255500148c6"],["js/post-details.js","88d33cbfcb303ab0920fd998ff470544"],["js/schemes/muse.js","a06259eab2ccc2ceee3b0950d2ca3d8b"],["js/schemes/pisces.js","8e4d8d32d5e76e546c1479a73572a3f5"],["js/scroll-cookie.js","7a9756ee733f94ef59d6cf2d9a550a45"],["js/scrollspy.js","37a99276f72f09096e3ed03eb2760b28"],["js/utils.js","896e7d4d1acc3c4d4d58eba4f8c30685"],["lib/canvas-nest/canvas-nest-nomobile.min.js","815985a4dc63414c7faf38a96fb38545"],["lib/canvas-nest/canvas-nest.min.js","f1ee4b571ed15123c1bee8075875aa1b"],["lib/fancybox/source/jquery.fancybox.css","5be5ad0a99106f1a70bb2f7dff8e5ee3"],["lib/fancybox/source/jquery.fancybox.min.css","3a89075274dfd14cfc6b0815aa0fe74d"],["lib/fancybox/source/jquery.fancybox.min.js","61176fa5b39f75cf9af6dd380365ef50"],["lib/fancybox/source/jquery.fancybox.pack.js","cce9190203e9f3daa77aaf2e16342181"],["lib/font-awesome/css/font-awesome.css","aacdadacca97496f82da7a3f88e4e590"],["lib/font-awesome/css/font-awesome.min.css","bad63fad5eb957a8b1fb99b6462a8a35"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","5087239b9a658d1a66cfddc4afd6c74c"],["lib/jquery_lazyload/jquery.lazyload.js","b4177d1bcc2cfbdda104374461d6390c"],["lib/jquery_lazyload/jquery.scrollstop.js","a4301c6dbc4b44d15802d4c6e6a8f845"],["lib/velocity/velocity.js","51f21ca534f8a5fa4c2ede6c5646893b"],["lib/velocity/velocity.min.js","3d8bf437b6c21d18714a6f3229e07ab9"],["lib/velocity/velocity.ui.js","f1dc70228afbe2a69ec412350bd266af"],["lib/velocity/velocity.ui.min.js","25e95d8506440248ef3cd6d679685fd3"],["tags/Crisp/index.html","8a43520163764b18e3a7a4b74de91b85"],["tags/github/index.html","dbe68e06e8ab6e5a5d8f816bb5eb110d"],["tags/hexo/index.html","2eaeeb69386cd855bf4a7b35299346ed"],["tags/hugo/index.html","9cbaac6a7afc5091c617be146d3e1cbf"],["tags/index.html","fc07ab55089792454c96bf4033a472db"],["tags/termux/index.html","3ed1fad0c874db76ce7a4d6abee4c8b2"],["tags/wordpress/index.html","fd5aae09c9da8bbf1ad6fe8bd9f97a88"]];
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







