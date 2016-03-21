$(function(){
    $('#push_on').on('click', function(){
          console.log('start!!');
          registration();
    });
});

function registration(){
  // service workersがサポートされているか確認。
  if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('sw_push.js').then(function(reg) {
      initialiseState(reg);
    });  
  } else {  
    console.log('ブラウザが対応してません＞＜');  
  }
}

function initialiseState(reg) {
  // Push許可
  Notification.requestPermission(function(permission) {
    if(permission !== 'denied'){
       console.log('push許可 OKKKK');
       // イベント登録
       navigator.serviceWorker.ready.then(pushregist);
    } else {
      alert('プッシュ通知を有効にできません。ブラウザの設定を確認して下さい。');
      return;
    }
  });
}


function pushregist(sw){
  // endpointの取得
  sw.pushManager.subscribe({userVisibleOnly: true}).then(function(sub){
      console.log('endpoint okkk');
      console.log(sub);
      var endpoint = sub.endpoint;
      console.log(endpoint);
  });
}
