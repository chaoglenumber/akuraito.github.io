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

var precacheConfig = [["404.html","b4010bd5377130b8890f85859c0226ae"],["archives/2018/11/index.html","a20754a3b794cbf29538936222ccb9af"],["archives/2018/12/index.html","0b06d20f4346d178e1f44ada49afbebc"],["archives/2018/index.html","29815fe569bac9f1078b7eaf73ed5b97"],["archives/2019/02/index.html","8e67565375c19bf088325a43ad786150"],["archives/2019/04/index.html","436538bd48ffd00ad73bdc009ecb99de"],["archives/2019/05/index.html","e5461aa48ff69cdc42246339a6fcd7a4"],["archives/2019/index.html","e310510f9db98efbdd8cec92ba8f278d"],["archives/index.html","61b92140eb83ce8ea06c8b947bf47868"],["categories/index.html","2c0a89e9d27442c556ec7ef5bbcd1fc9"],["categories/呢喃/index.html","da9888a36ff266890ae60b47e1be6e0a"],["categories/折腾/index.html","ad130e08d7535984b2530be58de4319f"],["categories/矫情/index.html","d2bfb5f2e898a7e442b977a19b02a8f4"],["categories/译文/index.html","0ac5a561a0cb3ab0abbeface56e1cf2e"],["categories/造作/index.html","c03d175c0b86807c48195ec8d94d25f0"],["css/main.css","09f26647312f6463d6b509a6d3a54cb5"],["essay/2018-11-11-hello-world.html","73b946605eacc6b2429216a786933bfd"],["essay/2018-11-18-new-starting.html","63b056dc632a712d8d42d8d1b6c6ab79"],["essay/2018-11-19-winter-trip.html","375890edc973b15f31fa5a5bc2b3b0b4"],["essay/2018-12-31-2018-y.html","242b816688b6b40a33af6be84a47dffd"],["essay/2018-12-31-wordpress.html","b7dfaa6afc48fcaaeb524b8cb72e5665"],["essay/2019-02-05-hello-world-2.html","9bc0105f3c3d2284d8d44cb0636727e7"],["essay/2019-02-19-add-crisp.html","28ac6702a639e17fc80647192e411038"],["essay/2019-04-14-senior-bye.html","e7d2694adddac57b59250a69f3fb7b48"],["essay/2019-05-19-hugo-on-termux-tslt.html","4c1e2053065f1aa78f2cdbfc290bd168"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","61a165bcc2a0db3c6114c85c701659fc"],["js/affix.js","affd68087d070a30cf1e650e5482c882"],["js/algolia-search.js","d1132a767c37b9fd27ffbce75413616d"],["js/exturl.js","7a520e50cc2cd59745839db093c0ae0b"],["js/js.cookie.js","844e8856018301aa2a2110d4c9928da1"],["js/motion.js","31c85ab6bafd8bf47394542deb1d6e92"],["js/next-boot.js","3bafd8b7fed596ecb46dcef15fd1197b"],["js/post-details.js","ebe4e223d71894a9af50b3110bd81e3e"],["js/schemes/muse.js","09f51af9dcaf7f83df45a0733a407515"],["js/schemes/pisces.js","b7fe44e62aa3c375b88e719aa4141b17"],["js/scroll-cookie.js","68db0bfdc250e4fce56d588c9b8f452c"],["js/scrollspy.js","7256a863286ca406fd083bcd1da56e82"],["js/utils.js","31f782c163d064644b07045f902a0820"],["lib/canvas-nest/canvas-nest-nomobile.min.js","4b01aa03ee15e05bf30d559186a3949b"],["lib/canvas-nest/canvas-nest.min.js","51cfeca8f01dd5e96ea4a496cabbe7a1"],["lib/fancybox/source/jquery.fancybox.css","203a051da3600e473149c120504bbf0b"],["lib/fancybox/source/jquery.fancybox.min.css","48fb3cfdc73d6ab4ca178ebffbd45fd6"],["lib/fancybox/source/jquery.fancybox.min.js","e38d547cefc85303db695eb8a0ac54a3"],["lib/fancybox/source/jquery.fancybox.pack.js","04c8aa9cc33139956e20518a17c8974c"],["lib/font-awesome/css/font-awesome.css","34a6865bb91f2fd1c85324277f6acf62"],["lib/font-awesome/css/font-awesome.min.css","61b643e7b040e3256c7b67b4a9d5b622"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","e9a5cd4d032bcfd5a2782d24aa0fb937"],["lib/jquery_lazyload/jquery.lazyload.js","f9301d0f6c16df7939026676cc3a9c26"],["lib/jquery_lazyload/jquery.scrollstop.js","5d3e1b45b8d259735730dd0039057b46"],["lib/velocity/velocity.js","e078fcf78ea5d1ba34fbfd3caff32982"],["lib/velocity/velocity.min.js","8bacb68534a09c6b83acba3db255932a"],["lib/velocity/velocity.ui.js","701088b34ba44428af8244be764a2d11"],["lib/velocity/velocity.ui.min.js","1ff90c4e5631c99d833dd682b170266f"],["tags/Crisp/index.html","c3b846669d9d1db8b322b72b0a8420f8"],["tags/github/index.html","e036bc39028164de7415774f7a1bb576"],["tags/hexo/index.html","818c55b65555a000da54bf47bee55a1b"],["tags/hugo/index.html","6663f0ef2b293b81ab3d4082d2cd7ddd"],["tags/index.html","9ec567a0fc66ac04086fa0de3c2d9c49"],["tags/termux/index.html","9ae80ef7e2c272f0f30ad2b2f36c907c"],["tags/wordpress/index.html","610e5132f1058e7974b4058e201bf97f"]];
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







