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

var precacheConfig = [["404.html","1db4eeac1066f9b9a52512ef29f93a09"],["archives/2018/11/index.html","3ccf4f6c8b42f954404877daf2fc96f2"],["archives/2018/12/index.html","cc332a1e88e4bb990456b85c28721fb5"],["archives/2018/index.html","714ccb5618dfb0053b81f028b126d44e"],["archives/2019/02/index.html","d5cd0b384f6ab203b261f3386ab862dc"],["archives/2019/04/index.html","bc5549b9fee10ef90ceb780222e9ffb4"],["archives/2019/05/index.html","ad715ee8ea0666ab4974235c0092665f"],["archives/2019/07/index.html","042d3e0159856e0da6c49120a1c1d75d"],["archives/2019/08/index.html","f04c7e0d05faf6fcebbec72c1719259c"],["archives/2019/index.html","6c90ee09db6b53c4eb49ab965d3f471b"],["archives/index.html","a2f7cc3dd9913b1a348d5a2f7d0505c2"],["archives/page/2/index.html","0dfc537facf86e0e301fad983810c226"],["box/privacy-policy.html","4a4ca4cf0cc63be3547ef0a5b76315ac"],["categories/index.html","905872fe57ae5cea4bf4d2284d504b43"],["categories/呢喃/index.html","81f45f0306623efeb524c85f71f48cc7"],["categories/折腾/index.html","0f58d29ca4561867bce9d1a3d20e9962"],["categories/矫情/index.html","93781f5fd639aac84abef53414a37cc9"],["categories/译文/index.html","6e5e23f1ba652e874b75ff9f2e74da8a"],["categories/造作/index.html","5d694114509ed19951f3edd33be1d483"],["css/main.css","7395d43309a78a4c54b12965a02471b4"],["essay/2018-11-11-hello-world.html","d2571db51b8627cb8dbbf88d30affeff"],["essay/2018-11-18-new-starting.html","862a57701c6fa104b4ba396bf10829a4"],["essay/2018-11-19-winter-trip.html","51a7d918dd1053b61829fddb9f775700"],["essay/2018-12-31-2018-y.html","2909334a39894760b293247ec665ea90"],["essay/2018-12-31-wordpress.html","61fc83bf7017a08ea4eeddf9b2809cac"],["essay/2019-02-05-hello-world-2.html","d290b00c3875e9da4c727c88f4be8e87"],["essay/2019-02-19-add-crisp.html","929e8aacae3801fda9e36963d7564c36"],["essay/2019-04-14-senior-bye.html","075ab49f85ea6428409a98dd9501965c"],["essay/2019-05-19-hugo-on-termux-tslt.html","680d954895dd8675e5a6c397e7af68a5"],["essay/2019-07-09-anime-saw.html","dd0a6a1e04acf40b634f06a33f9bc36a"],["essay/2019-07-27-yandex-mail.html","7de160b2f1f112fd3fd314ccbeaf15a4"],["essay/2019-08-19-with-my-nokia-7.html","83d713ebc3d67c93dad41c53264aa64c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","8b3627fe35bb491c155067b31f6241bb"],["js/affix.js","73b5bba6b7d4d3bc2ee03a56f727e633"],["js/algolia-search.js","7e2c688708d6960420e34afd881b638a"],["js/exturl.js","986a359105b3ba03f392025a83a8ec6c"],["js/js.cookie.js","a0e3ca750fd798c3aafa171efb2cdffd"],["js/motion.js","889a8f040fbb819b1e442ac35e300d65"],["js/next-boot.js","f855ab844b9264e9a654a69d6e329798"],["js/post-details.js","767709a4fa3c868276762d72ca566430"],["js/schemes/muse.js","9b3bbebc1b745c31bcb767030ab8c7f6"],["js/schemes/pisces.js","69b57f4b6bf1d21313e6da644fe86aa1"],["js/scroll-cookie.js","dbe550f3f4d9e81a03e58afd1b5bba43"],["js/scrollspy.js","2d43e478ff164b5188411a91dd10eb31"],["js/utils.js","c3996b10cd48dc4614f8ca1ccbcadae7"],["lib/canvas-nest/canvas-nest-nomobile.min.js","a1fcb4ee4c4b5d7ad9d7db6f18de4911"],["lib/canvas-nest/canvas-nest.min.js","354a9bdfa91a0ece934679fbb458b1ca"],["lib/fancybox/source/jquery.fancybox.css","cca7e6eabb8e79be9372115a0284f743"],["lib/fancybox/source/jquery.fancybox.min.css","124c5b2431b5d7956548d1ac91e95319"],["lib/fancybox/source/jquery.fancybox.min.js","b9e7ec5e6c917601508defc3d47fb540"],["lib/fancybox/source/jquery.fancybox.pack.js","a2d010ccec6c6c8885bae7bd2365ae6e"],["lib/font-awesome/css/font-awesome.css","680c297f1e2f90fbb141304468f6c7c0"],["lib/font-awesome/css/font-awesome.min.css","11ab98bc384883de08bf5ff837feff5a"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","ebe293f9fad3fe240321de7fc5b105dc"],["lib/jquery_lazyload/jquery.lazyload.js","07568edb1b9e5b3406e35c1241aa6d24"],["lib/jquery_lazyload/jquery.scrollstop.js","b92f1f1dd710bcaf24520f2eddc364c5"],["lib/velocity/velocity.js","16e798d334435dfb9febbd5b3ac06489"],["lib/velocity/velocity.min.js","3e2ee07967ab45ee6a09670b4e81e28c"],["lib/velocity/velocity.ui.js","cbc1643c6a2ca7a163be9c00df0166e8"],["lib/velocity/velocity.ui.min.js","5be8e1297ae555e289ad52bba51d779f"],["page/2/index.html","d926dd63ce5475be219aa0223d699078"],["privacy-policy.html","a96bb6d163c2e41c4cc094f248b5f320"],["tags/Crisp/index.html","e0105006fa072e48c1e32843ba75bc96"],["tags/github/index.html","5d95e22bd5b773eda192758152d58d20"],["tags/hexo/index.html","21fcb3d07932900b92644629deb23e0a"],["tags/hugo/index.html","700c1a9b20e1687924038b80e65f0535"],["tags/index.html","0f097bf522c02d34b46e8872ce388860"],["tags/termux/index.html","e7f3390acd7402001a02de09cad297db"],["tags/wordpress/index.html","412a6dd078479b054df5be9daf439efa"]];
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







