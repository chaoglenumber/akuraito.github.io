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

var precacheConfig = [["404.html","0f8419cb123457704a1e8200319e37e8"],["archives/2018/11/index.html","2c9557c6321085295f341e26f358d927"],["archives/2018/12/index.html","ed288d19744fb7fac5c9fe2d27f07138"],["archives/2018/index.html","ec5cbb5248c2a946c736d0ed90656bdb"],["archives/2019/02/index.html","49b83c0a38a5cb60682a3337e9e7682e"],["archives/2019/04/index.html","d62e4d17f6bf72d65884b6be4ce01bf9"],["archives/2019/index.html","81bb7e0f283eb66f0bcf2dc5b91f2818"],["archives/index.html","38c580f739c52632313e4b3468781af3"],["categories/index.html","df6ad892a16520db9a58c036e14ab88f"],["categories/呢喃/index.html","56f6413568850a402113207a2406c13e"],["categories/折腾/index.html","8b75f3f9ead88c54ef7a486d06c77f2f"],["categories/矫情/index.html","7323876b11c655b1a7b11c42236404a6"],["categories/造作/index.html","84a6ddacc17fcf925f961ee1260fb817"],["css/main.css","813bf2a10b7090e24b2e90c6da53d7cd"],["essay/2018-11-11-hello-world.html","edb08fbc6c7859aeaadcdd66a84a0a6d"],["essay/2018-11-18-new-starting.html","73afaed93599b56e2fafd66a7dc98351"],["essay/2018-11-19-winter-trip.html","045cc1e6e561c90a36d705ba4981b318"],["essay/2018-12-31-2018-y.html","9c22c85882b43d8c75089b2811f94641"],["essay/2018-12-31-wordpress.html","46a93593ebfb005c45713dd97ee36620"],["essay/2019-02-05-hello-world-2.html","9e792f3b1b546dd6c076de61f5ba38c8"],["essay/2019-02-19-add-crisp.html","d6da510c1ec8b6f066d719e24a44da5c"],["essay/2019-04-14-senior-bye.html","dd0241e613892b77bf2da7738177aacd"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","188286b1a7b95292209f643285513180"],["js/affix.js","ea9c51f141e40e72987509e2189b0553"],["js/algolia-search.js","c4614da1d2373caaa7a72f559f917661"],["js/exturl.js","dea7eb02f22f2c99ba7cc46341c9291e"],["js/js.cookie.js","4cf2217c56cb34004f7521c044e18296"],["js/motion.js","46f6ff56aeb9365fb29ae65409f9d869"],["js/next-boot.js","88f8dd46a40c793cb44cb9a0a5609e0f"],["js/post-details.js","f5194f9383f063ffa563e2a7b01f73c4"],["js/schemes/muse.js","b6446eab82c76d7ba6d011c5c59ba0d9"],["js/schemes/pisces.js","e002466608540ccc67719b88cc511c7a"],["js/scroll-cookie.js","3ce8c7c981f4eee4d70677f654d05cc2"],["js/scrollspy.js","7935d545b10120903988b9179aa26e8d"],["js/utils.js","a9a4a9afd788690db7315419a1b5c165"],["lib/canvas-nest/README.html","db97dff2f73479515dac7f4d173f0050"],["lib/canvas-nest/canvas-nest-nomobile.min.js","3a28dfcfd11070d6408b3079f2d727ea"],["lib/canvas-nest/canvas-nest.min.js","3ff2f4add09cbdcd5db7c6a52417f8d6"],["lib/fancybox/README.html","d835ecf16aebd7ccaf86a3466f7b735a"],["lib/fancybox/source/jquery.fancybox.css","e8283b3aceb4284c9282f841a6ea4705"],["lib/fancybox/source/jquery.fancybox.min.css","c6709618732ec115d10bf68f34b6d660"],["lib/fancybox/source/jquery.fancybox.min.js","5eb6fdbc819c13287d0f07e5bc11ea05"],["lib/fancybox/source/jquery.fancybox.pack.js","ecf549e1669b0cdb8ceda7d2eabfa02e"],["lib/font-awesome/css/font-awesome.css","425e20336aff23f9272e7dc233ad201d"],["lib/font-awesome/css/font-awesome.min.css","3faa873cdf457523b717bde746a4e5bf"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","5d58e0a28957a260bf74529e06ee1d5d"],["lib/jquery_lazyload/README.html","f1978378d874d365effcfc6f7e29fff4"],["lib/jquery_lazyload/jquery.lazyload.js","92b23a86ee48626f167714ba8b733872"],["lib/jquery_lazyload/jquery.scrollstop.js","4806ae1ec532bd8fa0a1cfe28feb99ad"],["lib/pace/README.html","5f539fec00f0bda792b6fa8bbaba8663"],["lib/pace/pace-theme-barber-shop.min.css","679edd63220414d6d87845bb6bee9ca1"],["lib/pace/pace-theme-big-counter.min.css","be635fd0d253a6ffb4f98414badcf7d3"],["lib/pace/pace-theme-bounce.min.css","9a1e9deaaa7b8b9f077314c61d40cfc4"],["lib/pace/pace-theme-center-atom.min.css","55d1846535ce3e440fb18693a3bb08ef"],["lib/pace/pace-theme-center-circle.min.css","d1833b03e7db37a723c84ca33338bf2f"],["lib/pace/pace-theme-center-radar.min.css","b9d28b60306ac748bc38556e8065bcde"],["lib/pace/pace-theme-center-simple.min.css","0c92d9d57205ab3eb1f1ee024948e1dc"],["lib/pace/pace-theme-corner-indicator.min.css","0caac72e6dc630408aeaf3cb2258056b"],["lib/pace/pace-theme-fill-left.min.css","6604ed591cf1525b14800aadc893f853"],["lib/pace/pace-theme-flash.min.css","3587d600c4a6b8b5f94ebcf8f14ab18d"],["lib/pace/pace-theme-loading-bar.min.css","f19cf3cdbbfec199e6ea170812eb1320"],["lib/pace/pace-theme-mac-osx.min.css","5c35726dee229c6635ba37238874526b"],["lib/pace/pace-theme-minimal.min.css","b62a3033d3204cda373dc56ec5729981"],["lib/pace/pace.min.js","47b63e566cab8ff615a410d13d7d4885"],["lib/reading_progress/README.html","9f8c5205496bd174dfba41fbe26a0645"],["lib/reading_progress/reading_progress.js","f1dd39fdd712452784cfa5a642016fd5"],["lib/reading_progress/reading_progress.min.js","f46552e6ebd63b8bf52f2e9339ea4865"],["lib/velocity/velocity.js","9277515427bb703a1cd71dcc4d261c13"],["lib/velocity/velocity.min.js","ef5e4cc6ad668d66e9fd3b6ea7e831e0"],["lib/velocity/velocity.ui.js","4c196e34ea4ab975a2f4356d1f4d049b"],["lib/velocity/velocity.ui.min.js","349364b33b1097d303a2525620f8febe"],["tags/Crisp/index.html","c9532e1d8c360441986a0061456cfbbd"],["tags/blog/index.html","a062ad259555e885ffd6f8f2bfd3ad7b"],["tags/diary/index.html","7f3b0115fb971683227923aa1999a93f"],["tags/github/index.html","799decccf9e2a0beee4efabba1ce9b12"],["tags/hexo/index.html","8255324b6912c7430f0e44afcb48030b"],["tags/index.html","33df824d9f545962e8b0e6cabc816e1b"],["tags/termux/index.html","d9a70f17a06b65aaeed2216ee1d38673"],["tags/web/index.html","fb4ffbad3c357370c7702f2c3d1c3dfc"],["tags/wordpress/index.html","a464d5229f15ec9243ac20897e10d8c6"]];
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







