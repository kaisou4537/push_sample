// pushイベント
self.addEventListener('push', function(evt) {
  evt.waitUntil(
    self.registration.showNotification(
      'push title!!!!',
      {
        icon: '画像のパス URLも可',
        body: 'yeeeeeeeeeeeeeeeeeeeeeeeeeah!!!!',
        tag: 'tagtag'
      }
    )
  );
}, false);

// クリックイベント
self.addEventListener('notificationclick', function(evt) {
  evt.notification.close();
  evt.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(evt) {
      if(clients.openWindow)
        return clients.openWindow('http://localhost:8000/fin.html');
    })
  );
}, false);