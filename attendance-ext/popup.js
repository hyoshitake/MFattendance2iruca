'use strict';

const roomcodeElem = document.getElementById('roomcode');
chrome.storage.local.get(['roomcode'], function(data) {
  roomcodeElem.innerText = data.roomcode ?? "";
});

const memberidElem = document.getElementById('memberid');
chrome.storage.local.get(['memberid'], function(data) {
  memberidElem.innerText = data.memberid ?? "";
});

// 出勤ボタン押下時のデフォルトのステータスを取得
const statusElem = document.getElementById('status');
chrome.storage.local.get(['status'], function(data) {
  statusElem.innerText = data.status ?? "";
});

// 出勤ボタン押下時の通知内容を取得
const clockinElem = document.getElementById('clockin');
chrome.storage.local.get(['clockin'], function(data) {
  clockinElem.innerText = data.clockin ?? "";
});

// 退勤ボタン押下時の通知内容を取得
const clockoutElem = document.getElementById('clockout');
chrome.storage.local.get(['clockout'], function(data) {
  clockoutElem.innerText = data.clockout ?? "";
});

// 休憩ボタン押下時の通知内容を取得
const startbreakElem = document.getElementById('startbreak');
chrome.storage.local.get(['startbreak'], function(data) {
  startbreakElem.innerText = data.startbreak ?? "";
});

// 戻りボタン押下時の通知内容を取得
const endbreakElem = document.getElementById('endbreak');
chrome.storage.local.get(['endbreak'], function(data) {
  endbreakElem.innerText = data.endbreak ?? "";
});