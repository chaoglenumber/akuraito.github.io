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

var precacheConfig = [["404.html","b43985e3e34006f236f80eea4d7fd2f0"],["archives/2018/11/index.html","026eb277974d98a56f08a4910ea47612"],["archives/2018/12/index.html","d07f08c8e291f8ea11f61bd658cd4c97"],["archives/2018/index.html","905c74e88bebca4c37ef4dedd37c7c75"],["archives/2019/02/index.html","eaec26581d0bac61325e34f3857109ed"],["archives/2019/04/index.html","e5fbcc15f419297876decbb00bf99f8c"],["archives/2019/05/index.html","98aad4f54c8ac73a2701e1eaf5587bf8"],["archives/2019/07/index.html","43a43382b91bf8b4ff84809f578326ee"],["archives/2019/08/index.html","fc79c6bb069b4a46406b6a3832bfd6f4"],["archives/2019/index.html","260630c415b71d6cdcfa014dc4cfd3e3"],["archives/index.html","2214000a8483d43018e5a88a6ac2cdd3"],["archives/page/2/index.html","8e1dd58600f40613a30bf1720b36831d"],["categories/index.html","bdb551ac46776add365a935eab811455"],["categories/呢喃/index.html","ac4cc4c491a3c58fb99e73577062e2f2"],["categories/折腾/index.html","d23df69a3fe73ffbb6ac21fc37da7964"],["categories/矫情/index.html","b9ac4c4f095b9a9555fda03c34bfebee"],["categories/译文/index.html","d2f73e41519e7e841ed4d1a6d3ce3f8a"],["categories/造作/index.html","0b5e58def79c5f4a4eda5081f430ae7f"],["css/main.css","168a46d09b54103b1637dfe9277fc046"],["essay/2018-11-11-hello-world.html","7efe6550549d9ef978ca1a358d7e83b5"],["essay/2018-11-18-new-starting.html","c2d17c303497b9489347ab653dfb68b3"],["essay/2018-11-19-winter-trip.html","eb25da89d1353b726fb49724e1016371"],["essay/2018-12-31-2018-y.html","f7cd4d1b2636dd353cdab4cc74d1756d"],["essay/2018-12-31-wordpress.html","345006e3d87ee3c4463070fe44a394db"],["essay/2019-02-05-hello-world-2.html","e02a8ada437d9d0b5cbee6c72cc594e7"],["essay/2019-02-19-add-crisp.html","4c42d797268d1685c29be76d1215409c"],["essay/2019-04-14-senior-bye.html","bfcd59f005d23b3f05d0e5142c847d69"],["essay/2019-05-19-hugo-on-termux-tslt.html","718a9ba87cdd22fff8c2f62ce80b0c6a"],["essay/2019-07-09-anime-saw.html","72ed4dc68003e13f40f6856871dc9d83"],["essay/2019-07-27-yandex-mail.html","1f993bbdffd7f2942871247ef1688d09"],["essay/2019-08-19-with-my-nokia-7.html","9dbe0f13de7d85ea21cb75c726416682"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","ec37bbb702a17ad02393292ea5fb913e"],["js/affix.js","9fa62a09b15ba8f4d28d89ed92af0e93"],["js/algolia-search.js","4926bf2fba50fc180d12be96e84f5e10"],["js/exturl.js","2813437859d9d9e04cdc38be21002606"],["js/js.cookie.js","d969a144fc341d53b92bb8e606825f8f"],["js/motion.js","b34f894af36dae7b144b2912bd5fdce2"],["js/next-boot.js","c44c27491c9b545011284af5a8698bf6"],["js/post-details.js","fe1a77e79be33150213567f0257aabf3"],["js/schemes/muse.js","43182776032bc32f2e39cc16b03ad696"],["js/schemes/pisces.js","4342a43631ab86750fe33b0d47ae80c6"],["js/scroll-cookie.js","a19a6f8c215081f7af504355566950a6"],["js/scrollspy.js","d604214382afeb6b173f63f746ea80e3"],["js/utils.js","bedaeb646d85418ca55a9b2cebe123a6"],["lib/canvas-nest/canvas-nest-nomobile.min.js","d2397b0a761f25d03a4263e48f4c4cde"],["lib/canvas-nest/canvas-nest.min.js","f8f341c0f4aa4c4ea6beec21cdcb255c"],["lib/fancybox/source/jquery.fancybox.css","3f3976233b82a01feae21c7f63355a51"],["lib/fancybox/source/jquery.fancybox.min.css","1405d6f6bf2d3853b886d6c32df2e96b"],["lib/fancybox/source/jquery.fancybox.min.js","ef38fd525018d1da6db0100b96205527"],["lib/fancybox/source/jquery.fancybox.pack.js","1cd2d998fce29071c070d7104bf1652a"],["lib/font-awesome/css/font-awesome.css","1450f42ba17e1dd1872b25f720d13b4b"],["lib/font-awesome/css/font-awesome.min.css","20e9f0358e7712c0885a4d84dfca6a95"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","59e50d30a9a8cad8499e709c23829134"],["lib/jquery_lazyload/jquery.lazyload.js","407d07d74bb07a11310ee124d2944d2e"],["lib/jquery_lazyload/jquery.scrollstop.js","6bab278e3059d0f3b477716642d74be1"],["lib/velocity/velocity.js","0927fe555b7aae167a768a06202f88d6"],["lib/velocity/velocity.min.js","bfb8f1d5e939864259f70182080f4414"],["lib/velocity/velocity.ui.js","f0b99104925822a294f24d07d34c0544"],["lib/velocity/velocity.ui.min.js","668aef00c1201211ffc59b49fdf72cb9"],["page/2/index.html","d3bae50d2a190b3a2e2a0191760f72b4"],["privacy-policy.html","ca168865b9c64eee4ab22d786109d171"],["tags/Crisp/index.html","e5a8a6af97916ce0a6168b79df1873f7"],["tags/github/index.html","0569592f427478ba97c9635719769df9"],["tags/hexo/index.html","7e53dfd522f1e63149e3340c0d46878e"],["tags/hugo/index.html","49cb18f61828945b575843aee54e483e"],["tags/index.html","b379c1e3ea99f672d80f9a431149838a"],["tags/termux/index.html","2054ee206f72fed6c5e157be64c2c146"],["tags/wordpress/index.html","1555f309e189740a29bab75feed01d4e"]];
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







