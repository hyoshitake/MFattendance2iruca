'use strict';

const roomcodeElem = document.getElementById('roomcode');
chrome.storage.local.get(['roomcode'], function(data) {
  roomcodeElem.value = data.roomcode ?? "";
});

const memberidElem = document.getElementById('memberid');
chrome.storage.local.get(['memberid'], function(data) {
  memberidElem.value = data.memberid ?? "";
});

// 出勤ボタン押下時のデフォルトのステータスを取得
const statusElem = document.getElementById('status');
chrome.storage.local.get(['status'], function(data) {
  statusElem.value = data.status ?? "";
});

// 出勤ボタン押下時の通知内容を取得
const clockinElem = document.getElementById('clockin');
chrome.storage.local.get(['clockin'], function(data) {
  clockinElem.value = data.clockin ?? "";
});

// 退勤ボタン押下時の通知内容を取得
const clockoutElem = document.getElementById('clockout');
chrome.storage.local.get(['clockout'], function(data) {
  clockoutElem.value = data.clockout ?? "";
});

// 休憩ボタン押下時の通知内容を取得
const startbreakElem = document.getElementById('startbreak');
chrome.storage.local.get(['startbreak'], function(data) {
  startbreakElem.value = data.startbreak ?? "";
});

// 戻りボタン押下時の通知内容を取得
const endbreakElem = document.getElementById('endbreak');
chrome.storage.local.get(['endbreak'], function(data) {
  endbreakElem.value = data.endbreak ?? "";
});

const buttonClick = function(){
  const button = document.getElementById('config-set');

  //設定反映
  button.addEventListener('click', function() {
    chrome.storage.local.set({roomcode: roomcodeElem.value}, function() {
      console.log('roomcode is ' + roomcodeElem.value);
    });
    chrome.storage.local.set({memberid: memberidElem.value}, function() {
      console.log('memberid is ' + memberidElem.value);
    });
    chrome.storage.local.set({status: statusElem.value}, function() {
      console.log('clock-in is ' + statusElem.value);
    });
    chrome.storage.local.set({clockin: clockinElem.value}, function() {
      console.log('clock-in is ' + clockinElem.value);
    });
    chrome.storage.local.set({clockout: clockoutElem.value}, function() {
      console.log('clock-out is ' + clockoutElem.value);
    });
    chrome.storage.local.set({startbreak: startbreakElem.value}, function() {
      console.log('start-break is ' + startbreakElem.value);
    });
    chrome.storage.local.set({endbreak: endbreakElem.value}, function() {
      console.log('end-break is ' + endbreakElem.value);
    });

    alert("反映しました")
  });
};
buttonClick();
