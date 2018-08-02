/*service worker registration*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(function() {
    console.log('Registration performed!');
  })
  .catch(function() {
    console.log('Registration failed!');
  });
}
