self.addEventListener('push', function(evt) {
  evt.waitUntil(
    self.registration.showNotification(
      'push title!!!!',
      {
        icon: 'http://img1.kakaku.k-img.com/images/favicon/kakaku_favicon.ico',
        body: 'yeeeeeeeeeeeeeeeeeeeeeeeeeah!!!!',
        tag: 'tagtag'
      }
    )
  );
}, false);

self.addEventListener('notificationclick', function(evt) {
  evt.notification.close();

  evt.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(evt) {
      if(clients.openWindow)
        return clients.openWindow('http://kakaku.com/');
    })
  );
}, false);