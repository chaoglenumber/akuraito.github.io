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

var precacheConfig = [["404.html","d1f534633b7f5737b02b78007e874a99"],["archives/2018/11/index.html","90172ceba73e059224858f4cc718dcbf"],["archives/2018/12/index.html","b53baea30e601a634d2f4c3f6d3fd23c"],["archives/2018/index.html","4e7297070f1b730ad95ed26a916af77f"],["archives/2019/02/index.html","fd7c95a2e668c1e196a98d7c9d824bfc"],["archives/2019/04/index.html","479be8bbc86d0504021fa8d7053ab319"],["archives/2019/index.html","70594659e0c6ab0cce0b718f8272575f"],["archives/index.html","8668661adc4d0dac614f7e1901e6b494"],["categories/index.html","b4c07c14a0f48fad245e534242cebe91"],["categories/呢喃/index.html","65329fb43d5346bf94e5540cd3edd9a3"],["categories/折腾/index.html","714d9c1008725ff16b579d33d7a4959b"],["categories/矫情/index.html","e18ef1d7d5965113d29ee612a6e0597f"],["categories/造作/index.html","64157f0bf7c019bce5743ae7f2dae11f"],["css/main.css","3e9fc52ac73918f55ffbaee4f09f404d"],["essay/2018-11-11-hello-world.html","1b28a82beadbb865237343f6767747d1"],["essay/2018-11-18-new-starting.html","13376c691920e1d4f2a3ddbd739d85ee"],["essay/2018-11-19-winter-trip.html","0109828e3738b4c8f59a607d9fdee50d"],["essay/2018-12-31-2018-y.html","34b619dc3746249714d913d46f4e1e59"],["essay/2018-12-31-wordpress.html","2d607fdc695eda7362a056f77f9aeb9f"],["essay/2019-02-05-hello-world-2.html","1a7d78d2e27de89ceeda953f00729c31"],["essay/2019-02-19-add-crisp.html","00cbef258b37c38377ebe4b0169a194a"],["essay/2019-04-14-senior-bye.html","2c1fe7cea83e69c5c44e7bdfdb28f9ee"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","214db88c0e3de80ff648cf923b202677"],["js/affix.js","c28212c4c179a54a13d86c08f05bfdaa"],["js/algolia-search.js","ed304fdc1a3cf27394b5c74767bff386"],["js/exturl.js","de1585d836df92ff73fe3d39201f73b8"],["js/js.cookie.js","dba4fa5eaa7e030170ec8b65d4efb9b8"],["js/motion.js","c559f7dd593a29454389e03bd599e0a0"],["js/next-boot.js","094d1331d1dc45151826de5eb221bc87"],["js/post-details.js","e437df2b88c21673d80449dc36c24425"],["js/schemes/muse.js","191e2b55173d94fe352b5db7a23c8f4a"],["js/schemes/pisces.js","297b169a9664aab68b949001796eae72"],["js/scroll-cookie.js","7d6a11ed9f6eb07701990cbe197ba142"],["js/scrollspy.js","66c494b83d9ae2ae5c8fd5d5e9db9747"],["js/utils.js","2ac0f6f9e46d2d5381c856dc4dba157a"],["lib/canvas-nest/README.html","7bd1987c98145d7ba358d7bfe08de447"],["lib/canvas-nest/canvas-nest-nomobile.min.js","e7dea4b30f1d44e540d82209f4d77018"],["lib/canvas-nest/canvas-nest.min.js","c1140cd7c2bcec65c3aaa4f5fd3ed670"],["lib/fancybox/README.html","3094d1a9aa00abc8a95763921ea15d27"],["lib/fancybox/source/jquery.fancybox.css","3766ffd0376ad02efedd6aa9118e20b0"],["lib/fancybox/source/jquery.fancybox.min.css","f3f1bde9dccaccd81fd133937d03bcac"],["lib/fancybox/source/jquery.fancybox.min.js","1461f77b288f67ce87539e6903a3dcde"],["lib/fancybox/source/jquery.fancybox.pack.js","75b8e428695ef2a1268480ba887f30a2"],["lib/font-awesome/css/font-awesome.css","7a2be3fde60484dd0a86dcb3f284788f"],["lib/font-awesome/css/font-awesome.min.css","7ce4ea402f382d4a12b277d975110bb5"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","956313565afacb2237efb995e36c1272"],["lib/jquery_lazyload/README.html","4924de30516fa21ecc96a9b75ffcaecc"],["lib/jquery_lazyload/jquery.lazyload.js","69cc5e4ebba707a4201972dc2eda00b4"],["lib/jquery_lazyload/jquery.scrollstop.js","5dda192caa8742c98dd54e213bc26a2d"],["lib/velocity/velocity.js","05f06edf804aa4ca15b445fd1e8a2b98"],["lib/velocity/velocity.min.js","b36788dda4a1d987d1fe3d9141775b34"],["lib/velocity/velocity.ui.js","47e29b4e45f5e41295f82dc06ec71a3e"],["lib/velocity/velocity.ui.min.js","42a595bd926117c28b86ee677916c236"],["tags/Crisp/index.html","c927e7941516963a9e287b434cff4b00"],["tags/blog/index.html","92fe1706549b5c8752b6222650905bed"],["tags/diary/index.html","255db593ec6d4ad9377ed4aadec3bbe0"],["tags/github/index.html","4e2ce08b16980d9f71506054e9ea4a92"],["tags/hexo/index.html","c7932bb1b7c27c881d180123716be7cf"],["tags/index.html","dc4cdc7eec1e29343c57ab06d6e4a648"],["tags/termux/index.html","c1597900c5524940214b658a23629f27"],["tags/web/index.html","d68049d21a93cbdc612df6afafae3720"],["tags/wordpress/index.html","452f4a8bf6d37dd22c4bd21ee941e9f4"]];
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







