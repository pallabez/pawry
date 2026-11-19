/* The Ear Trainer's smart link: get/, and yt/, ig/, tt/, which are the same link with a source.
   It sends a phone to its store. Where the app is not in that store yet it says "coming soon";
   a computer goes to the app's home page. The page is a real page with a button, because the
   browsers inside Instagram, YouTube and TikTok sometimes stop a page from jumping to a store.
   An empty address below means "not in that store yet".
   For checking on a computer: ?as=ios or ?as=android. */
(function () {
  var STORES = {
    ios: 'https://apps.apple.com/app/id6789950268',
    android: '' // when it is public: https://play.google.com/store/apps/details?id=com.pawry.eartrainer
  };
  var HOME = '../';
  var query = new URLSearchParams(location.search);
  var ua = navigator.userAgent;
  var as = query.get('as');
  var device = as === 'ios' || as === 'android' ? as
    : /android/i.test(ua) ? 'android'
    : /iPhone|iPad|iPod/.test(ua) ? 'ios'
    : /Macintosh/.test(ua) && navigator.maxTouchPoints > 1 ? 'ios' // an iPad says it is a Mac
    : 'other';
  var main = document.getElementById('get');
  if (device === 'other' || !main) { location.replace(HOME); return; }

  var src = document.documentElement.getAttribute('data-src') || query.get('src') || '';
  if (!/^[a-z0-9]{1,16}$/.test(src)) src = '';
  var link = STORES[device];
  if (link && src) {
    var url = new URL(link);
    // the App Store's campaign name (counted once the address also carries the provider's pt), Google Play's referrer
    if (device === 'ios') url.searchParams.set('ct', src);
    else url.searchParams.set('referrer', 'utm_source=' + src + '&utm_medium=reel');
    link = url.toString();
  }
  var name = device === 'ios' ? 'iPhone' : 'Android';
  var store = device === 'ios' ? 'the App Store' : 'Google Play';
  main.innerHTML = link
    ? '<h1>Opening ' + store + '…</h1><p>If nothing happens, tap the button.</p>' +
      '<p><a class="btn" id="go">Get Pawry: Ear Trainer</a></p><p><a href="' + HOME + '">About the app</a></p>'
    : '<h1>Not on ' + name + ' yet</h1><p>Pawry: Ear Trainer is on its way to ' + name + '.</p>' +
      '<p><a class="btn" href="' + HOME + '">About the app</a></p>';
  if (link) { document.getElementById('go').href = link; location.replace(link); }
})();
