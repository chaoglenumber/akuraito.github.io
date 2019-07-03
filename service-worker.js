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

var precacheConfig = [["404.html","16313e813c6b1836663ae29da28f6f2b"],["archives/2018/11/index.html","98badaab9e9487f64513ad90698a82c7"],["archives/2018/12/index.html","12da4477e4ab0323299242275cf68dfe"],["archives/2018/index.html","e2f5972006b7917b4271cca94e4c7ea8"],["archives/2019/02/index.html","a26a82cc29ea8fc558ed14ac55235da3"],["archives/2019/04/index.html","79bc4b0ed0d2540f37764cd4a15d2076"],["archives/2019/05/index.html","9a6a9db0abcfa128577315d8986e1f9e"],["archives/2019/index.html","7e9e1255c55d869a223ba0fbed2285b8"],["archives/index.html","b627a88342a88b947045fa4d9d1e2eed"],["categories/index.html","0c1c1ae338430e81ab1965b5b6b3d186"],["categories/呢喃/index.html","3a068ed3bd99a918e2a154404256e9be"],["categories/折腾/index.html","5b66508126fac58d92d31eab592bb6b6"],["categories/矫情/index.html","b3a8f600a1f8fb740fdaacf8c127e290"],["categories/译文/index.html","e5bdacac5261eb70a5d2581611282a26"],["categories/造作/index.html","22ce0358a9f8b54f0e67763f862f96cc"],["css/main.css","47f779a42b4bc4512ee51ac0efe57a46"],["essay/2018-11-11-hello-world.html","3b4b08660d985f93af9130ce25394a27"],["essay/2018-11-18-new-starting.html","a0766466e8fda4c51f5ef42e57103191"],["essay/2018-11-19-winter-trip.html","eab018a6745a3ba04fa4afd79bea87d4"],["essay/2018-12-31-2018-y.html","03ce2e915e1d7ed8ca94ef4e105f662e"],["essay/2018-12-31-wordpress.html","ef16ab3fb785e4d635d388de9852267f"],["essay/2019-02-05-hello-world-2.html","b7584a877e04586c75e90b009452a92b"],["essay/2019-02-19-add-crisp.html","d2841ecad0b7af991b484c50c1d8838f"],["essay/2019-04-14-senior-bye.html","6a1f2a8d631ee9fdbe1daebb75ee11da"],["essay/2019-05-19-hugo-on-termux-tslt.html","ed479caf13f0be505548e359837cc663"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","8b3d0a41fee2c4cfe4b4db02e77e5e36"],["js/affix.js","eed3200c20c1bd15c3fc4616db157995"],["js/algolia-search.js","54e7792bb07322cc45253439b6d24960"],["js/exturl.js","a69c18d088e56455eee9cf87c43d7691"],["js/js.cookie.js","d58d4f6ed38e1a7ec8689e4e8cb35ec2"],["js/motion.js","1d9cadbae5f031d04452419e031ef0bd"],["js/next-boot.js","9b13df22a0440f09ca70e8d7a5dac546"],["js/post-details.js","687cf8efd63bcc113ed19fcb1cff5a78"],["js/schemes/muse.js","ec5af15cac27a39cc92a401966571e5c"],["js/schemes/pisces.js","3a5f7eff9b8699c46a6b4befda30b0fc"],["js/scroll-cookie.js","88a1e2f9824315b624b2ef687496acf2"],["js/scrollspy.js","fa755da8cae9d9b11354c637476287f5"],["js/utils.js","da21a82d0720827d1cfb27250656c306"],["lib/canvas-nest/canvas-nest-nomobile.min.js","dd557126dd47c6532a8ab4c50f09a180"],["lib/canvas-nest/canvas-nest.min.js","aa34bd74b848aa7ebd4e010880554262"],["lib/fancybox/source/jquery.fancybox.css","cdd49dafcb8652a14641e304c36e7bd1"],["lib/fancybox/source/jquery.fancybox.min.css","09b472c473adc876d9c0a0960869a361"],["lib/fancybox/source/jquery.fancybox.min.js","c8ddbce03ee48701226caf2082f53055"],["lib/fancybox/source/jquery.fancybox.pack.js","4c88318ab09c418a45386ee12eeb8956"],["lib/font-awesome/css/font-awesome.css","e42fb6940167a16896871a950a37e23f"],["lib/font-awesome/css/font-awesome.min.css","384bea16160a085069d2fcca58ff7ce3"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","eb3431aee54519506ae1a3516f151c7c"],["lib/jquery_lazyload/jquery.lazyload.js","1806e91e169110888acd8de4aed6f67a"],["lib/jquery_lazyload/jquery.scrollstop.js","da0ad22118d1a73e68b223ef5424ee35"],["lib/velocity/velocity.js","5654eae8ea48e4b5692291f79ebedfc9"],["lib/velocity/velocity.min.js","fa3897b22efec9cd7fe7b11e12701bc8"],["lib/velocity/velocity.ui.js","9a1ec00f4de3eda8898d63176905b7e9"],["lib/velocity/velocity.ui.min.js","7ad9fc59457b099e39cc6133007f873c"],["privacy-policy.html","4292f7f77131ec8ed90195b604eb730f"],["tags/Crisp/index.html","d8b4c560c6fb1577415c5cdd960081d3"],["tags/github/index.html","d282632e2211f1f17d411b3333ce3fa4"],["tags/hexo/index.html","2bc58a1fd67dd01ebd1cf27849797bec"],["tags/hugo/index.html","2709027aafbf54c0606260a018a9e828"],["tags/index.html","53942af121b3ea83246e1fb964d0e5db"],["tags/termux/index.html","0ab1f8d63015d0c5d04e33bac35caa36"],["tags/wordpress/index.html","9dd6427a098199d711d9e9ef93151f8f"]];
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







