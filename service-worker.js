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

var precacheConfig = [["404.html","e32428f91b1bd0c97161bebd1bb52550"],["archives/2018/11/index.html","1e75ec1d510e942335d09e955303b923"],["archives/2018/12/index.html","3620d924609dcdcabc8c92ff0fe9ce41"],["archives/2018/index.html","538f378f46c1859c01678814d8d302b7"],["archives/2019/02/index.html","f9393bf0fdeeebe9ca695bcc5c4131e6"],["archives/2019/04/index.html","13694266dc00d2cb46436fb487bf31d7"],["archives/2019/05/index.html","7fd8015bd982ef595ff352e51db7976d"],["archives/2019/07/index.html","6045d15ec5fe792eecb663f79d56903c"],["archives/2019/08/index.html","603ecdca94652a25d3672840bc89014e"],["archives/2019/index.html","1ad2c922daff780d85f9873d305145ca"],["archives/index.html","d13d868d6b1735e60347a1f6083fe69a"],["archives/page/2/index.html","3c09bf710528cc5f5aba490ebb8c587c"],["box/privacy-policy.html","4b4d77f81d4e6485581c5cd15ac05f04"],["categories/index.html","8d53e2421d00f3465932d41b97db6474"],["categories/呢喃/index.html","5597263e165e5df0210c45a7f17983e6"],["categories/折腾/index.html","4caffddfb3994a3cabc5ad796de0aab9"],["categories/矫情/index.html","2868616550545255ddf0f8bd174330ea"],["categories/译文/index.html","31fc75e36de1c7f838ef320cf42ace3a"],["categories/造作/index.html","22c5971a559ab5c342a129f5b2054efe"],["css/main.css","e68ccf160dd93ea7930a88a7bf53ea4b"],["essay/2018-11-11-hello-world.html","a6c0947ac63c090104cb2ff707211aa6"],["essay/2018-11-18-new-starting.html","835dde2aeea6a14d2851a4e0a2b1545e"],["essay/2018-11-19-winter-trip.html","4fc3d1bc099ab4aec19908d23c7bea93"],["essay/2018-12-31-2018-y.html","a6d0f072943988fb7d176d80a688a164"],["essay/2018-12-31-wordpress.html","81d0d4708bafdeb75ac542c05f9419a7"],["essay/2019-02-05-hello-world-2.html","6ea716399cf360bf6973cc5bd82860a1"],["essay/2019-02-19-add-crisp.html","43e9eef796680f7f9e861700662722d8"],["essay/2019-04-14-senior-bye.html","3f12fd0199f6c93f169516a44907c952"],["essay/2019-05-19-hugo-on-termux-tslt.html","fcedc5803bd17d7be4d85b784f84291b"],["essay/2019-07-09-anime-saw.html","714684c9a9fe6aa11ba46edbeb4bedff"],["essay/2019-07-27-yandex-mail.html","1fd122a2091d1382c28d985dd70acdde"],["essay/2019-08-19-with-my-nokia-7.html","6fa5a454e177314df19aa0b8b129f6ab"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","40e1d79521333b6bd0d0ba1ef51cf2a3"],["js/affix.js","557246c722d83371acfeed1cd43dc12b"],["js/algolia-search.js","0e298f749d3214cf716168959bb4e9bb"],["js/exturl.js","e637e47737df54ab5d93e72588366a34"],["js/js.cookie.js","c6ff4bb333e160cf4acb73b2472cc310"],["js/motion.js","d8c5221e2855e4865b9db9032db34966"],["js/next-boot.js","284e79c548b2cf8be6e9db0558e96c60"],["js/post-details.js","6323b17d949d6fb532e6dd66b442a5c7"],["js/schemes/muse.js","d41b3a3a6092abb5feffe00b4f8daa4c"],["js/schemes/pisces.js","289b83ca21a5c6a2f89bd4cbd763d6ee"],["js/scroll-cookie.js","e5efd3399296063a4790a525ba26d8f2"],["js/scrollspy.js","ddec6f34ab6425fafcbda7cc60078e5e"],["js/utils.js","0f4769d052dc4a7c941ebb77e7932103"],["lib/canvas-nest/canvas-nest-nomobile.min.js","3a87d7f8f06f3c196088bba54900ef56"],["lib/canvas-nest/canvas-nest.min.js","888df3790bb332e54f746d8377d8c7db"],["lib/fancybox/source/jquery.fancybox.css","44cff28c6726f801799a6f774cf5afc3"],["lib/fancybox/source/jquery.fancybox.min.css","ef5d5f0e80755c12d750eff4dcb2ed36"],["lib/fancybox/source/jquery.fancybox.min.js","3926ab0851acdf771abd828fe40b5b2a"],["lib/fancybox/source/jquery.fancybox.pack.js","94b1222ad16df45ce7f882142a5cb894"],["lib/font-awesome/css/font-awesome.css","a5733a6c43f02a5fc3d985c69736d35a"],["lib/font-awesome/css/font-awesome.min.css","f61d298c406bee2598d626a27f383549"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","a01478c65791102fe5303be61ff55531"],["lib/jquery_lazyload/jquery.lazyload.js","975509a20ef5d202c31723f9a1408cb7"],["lib/jquery_lazyload/jquery.scrollstop.js","8be0468c11b34e86380dd99fd40f1612"],["lib/velocity/velocity.js","51e3394975f3e6a90dd0605bfc76b60d"],["lib/velocity/velocity.min.js","ae7a15ac99cea38111a76468c68e8f7e"],["lib/velocity/velocity.ui.js","3ecf08c490f1ff57608d979a5746eec0"],["lib/velocity/velocity.ui.min.js","10304ca56b30385a23d41e141ea75976"],["page/2/index.html","81c346c6799fae14bfd9623149740779"],["privacy-policy.html","a96bb6d163c2e41c4cc094f248b5f320"],["tags/Crisp/index.html","b122e834b90901afa9e0329764ce46f5"],["tags/github/index.html","89306d18ddbf0857f728d609390c740c"],["tags/hexo/index.html","370f80085ba1fb6a20ec92e2f03adf0c"],["tags/hugo/index.html","ef0f5d2350991deac08216cf65a55871"],["tags/index.html","a370bfc040e887b9c8d9e7cc4069892b"],["tags/termux/index.html","5b825d6b6fb21c2dc99a79dcb82ccf93"],["tags/wordpress/index.html","2fbc7169a759d17cd976c4fb783d1139"]];
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







