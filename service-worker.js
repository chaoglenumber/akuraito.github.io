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

var precacheConfig = [["404.html","c948009227a4f1d469036bcc90d8bb70"],["archives/2018/11/index.html","f4f51cb4b664fd6aa11ec0033bc78908"],["archives/2018/12/index.html","02364049a81550488f0136337e918abb"],["archives/2018/index.html","e660818d180e77e777dd5293685155aa"],["archives/2019/02/index.html","68b5c6d439905661b21f6a254aab6aca"],["archives/2019/04/index.html","0e190199c84ec96ad25eb0095b90d3d7"],["archives/2019/05/index.html","af45f904fec344dbf649e465dc11b092"],["archives/2019/07/index.html","a4e1ce22cec397392f921c19a0cbd009"],["archives/2019/index.html","d4033825140815146318701e7403c446"],["archives/index.html","6cf68f433ea827835c4f1f8ca71e141f"],["archives/page/2/index.html","6b0439abef5f8ba5ba744ce516d15115"],["categories/index.html","12f2ea6f724c17ccd71e7a90be5db065"],["categories/呢喃/index.html","71d1003b6b2b3f212eb8f36917e0eb22"],["categories/折腾/index.html","eff06802304e9bd6e59850931eca0e29"],["categories/矫情/index.html","db30f22ef1d18b18c2d38f79a0d5eca8"],["categories/译文/index.html","8d4414ca0366330f1de421b828f2048c"],["categories/造作/index.html","6eeac33bdb02e9320fbed49ce364c217"],["css/main.css","91a2b4b5296188890fb2fcc0f4dac89a"],["essay/2018-11-11-hello-world.html","3e752f9aa098384c3b04a6951e0c0634"],["essay/2018-11-18-new-starting.html","c9f5002c8453edf69c1ee274f891b285"],["essay/2018-11-19-winter-trip.html","900ea97e84c519814bdf0951b0b1c460"],["essay/2018-12-31-2018-y.html","d05478549f69fcdf302b7c6f57213e72"],["essay/2018-12-31-wordpress.html","7df2b4c67f912e771ac8b2992ece8b0f"],["essay/2019-02-05-hello-world-2.html","cb27596bd7deaafc5c74bed1a154f377"],["essay/2019-02-19-add-crisp.html","50479eef017e35819207c5bb7e8ae67a"],["essay/2019-04-14-senior-bye.html","38e61b2440f7bce511d3199e25dff974"],["essay/2019-05-19-hugo-on-termux-tslt.html","f4986164464fd65904c3d6b8247f477d"],["essay/2019-07-09-anime-saw.html","5b5a219840c5d189edb3dfc404722a10"],["essay/2019-07-27-yandex-mail.html","9e3376fe1c089cde73e1e0edd86af4cf"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","13c2905ec5784913db949c136e52dde0"],["js/affix.js","d814d25f9dd1904b11ed3a301fa03ed6"],["js/algolia-search.js","a4dcdd8e988a53b5f41ba48652c0dec5"],["js/exturl.js","1313cbf319011555bdf52ddeb2ec06e3"],["js/js.cookie.js","ee54e7a3d332566024411012a5d8330b"],["js/motion.js","9f0cc4f1441ec6c2a7519022ee29a06b"],["js/next-boot.js","2294c9cfab720423de2ffea4af69662c"],["js/post-details.js","1d2743845309c72bc30d617f05ae113d"],["js/schemes/muse.js","6a7ccc5dce16ca45cb7657886a147e93"],["js/schemes/pisces.js","aefd0ed29629bb253b4b4443c4eeabb6"],["js/scroll-cookie.js","1c2d26227b18af62df340a701656634b"],["js/scrollspy.js","991fe46854626d4d2d5211c2c748a08d"],["js/utils.js","0a497e9f84b0238f2c7ac2d45d2a79f2"],["lib/canvas-nest/canvas-nest-nomobile.min.js","f30626929f763b8c2de591918cbb74b8"],["lib/canvas-nest/canvas-nest.min.js","07b2d260291799cb021a7468b14a1e41"],["lib/fancybox/source/jquery.fancybox.css","e0383a8240686ce69f17feec894a3336"],["lib/fancybox/source/jquery.fancybox.min.css","8ff3fd477ca9deab00134936681e6c00"],["lib/fancybox/source/jquery.fancybox.min.js","39685a4fbcb3214fd394de0bafed9b83"],["lib/fancybox/source/jquery.fancybox.pack.js","3da188df0b5d147287ca66db54b38297"],["lib/font-awesome/css/font-awesome.css","058e6dfa0b251f1e807f1a3d820b16ee"],["lib/font-awesome/css/font-awesome.min.css","18e82d5a59ecfec728f489cb4b292b76"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","aab274671c6aa2fb53f58a703bdfc544"],["lib/jquery_lazyload/jquery.lazyload.js","7d80767762d285a0cf426dbbe9ff4724"],["lib/jquery_lazyload/jquery.scrollstop.js","e5167b58867ed2f55bac45f7095fea33"],["lib/velocity/velocity.js","3fcbce95e7cba95116f21475a08dbc22"],["lib/velocity/velocity.min.js","171974d12d0c3ef9bdc1dffc69732882"],["lib/velocity/velocity.ui.js","4017424408b304091f739c5c80dffaac"],["lib/velocity/velocity.ui.min.js","e4334810e6352cce7d39861014e75e89"],["page/2/index.html","d6c643283b018f406e01dfd0ab07b79a"],["privacy-policy.html","641753e28400c873e6fe356c4028cd28"],["tags/Crisp/index.html","a925028d54ac3cf928b7911dcb10bd70"],["tags/github/index.html","0f5d0e514dbe93aab78720a73e0b018b"],["tags/hexo/index.html","f75b13818b5f17e696e549169f7d0435"],["tags/hugo/index.html","becbd1b7130cb7cd2e5c13177d55cf13"],["tags/index.html","8c0161b42ac1fe3eba80bc2138d87e3e"],["tags/termux/index.html","235bf933122b002b9fa885f3c1b37131"],["tags/wordpress/index.html","67c22131e18cb09a2a623485ab1c35af"]];
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







