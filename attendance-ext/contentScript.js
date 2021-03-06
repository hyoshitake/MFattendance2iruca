$(function(){
const datetime = function(){
    const dateStr = document.getElementsByClassName('attendance-card-time-recorder-date')[0].innerText;
    const timeStr = document.getElementsByClassName('attendance-card-time-recorder-time')[0].innerText;
    return '[' +  dateStr + ' ' + timeStr + ']';
};
console.log(datetime());

const user = document.getElementsByClassName("attendance-header-user-name")[0].firstChild.innerText.split(" ")[0];
console.log(user);

// 設定内容の読み込み
let chatConf = {};
const load = function(){
    chrome.storage.local.get(['roomcode'], function(data) {
        chatConf.roomcode = data.roomcode;
    });
    chrome.storage.local.get(['memberid'], function(data) {
        chatConf.memberid = data.memberid;
    });
    // 出勤時のステータス
    chrome.storage.local.get(['status'], function(data) {
        chatConf.status = data.status;
    });
    // 出勤時の通知内容
    chrome.storage.local.get(['clockin'], function(data) {
        chatConf.clockin = data.clockin;
    });
    // 退勤時の通知内容
    chrome.storage.local.get(['clockout'], function(data) {
        chatConf.clockout = data.clockout;
    });
    // 休憩時の通知内容
    chrome.storage.local.get(['startbreak'], function(data) {
        chatConf.startbreak = data.startbreak;
    });
    // 戻り時の通知内容
    chrome.storage.local.get(['endbreak'], function(data) {
        chatConf.endbreak = data.endbreak;
    });
};

function postIruca(message, set_status){
    const url = "https://iruca.co/api/rooms/" + chatConf.roomcode + "/members/" + chatConf.memberid

    $.ajax({
        method: "PUT",
        url: url,
        data: { status: set_status, message: message }
    }).done(function(data, textStatus, jqXHR) {
        // 成功時
        console.log('data:', data);
        console.log('textStatus:', textStatus);
        alert("Iruca送信に成功しました");
    }).fail(function(jqXHR, textStatus, errorThrown) {
        // 失敗時
        console.log("XMLHttpRequest : " + jqXHR.status);
        console.log("textStatus     : " + textStatus)
        console.log("errorThrown    : " + errorThrown.message);
        alert("Iruca送信に失敗しました");
    });
}

const timeStampButtons = document.getElementsByClassName('attendance-card-time-stamp-button');

load();
for(let i=0;i<timeStampButtons.length; i++){
    const element = timeStampButtons[i];
    const event_name = timeStampButtons[i].innerHTML;
    element.addEventListener('click', function(evt){
        var message = element.innerText
        var set_status = ""
        if ( chatConf.clockin.toString() !== "" && event_name.match(/attendance-card-time-stamp-clock-in/)) {
            // クリックしたボタンは出勤だった場合
            message = chatConf.clockin.toString()
            set_status = chatConf.status
        } else if ( chatConf.clockout.toString() !== "" && event_name.match(/attendance-card-time-stamp-clock-out/)) {
            // クリックしたボタンは退勤だった場合
            message = chatConf.clockout.toString()
            set_status = "end"
        } else if ( chatConf.startbreak.toString() !== "" && event_name.match(/attendance-card-time-stamp-start-break/)) {
            // クリックしたボタンは休憩だった場合
            message = chatConf.startbreak.toString()
            set_status = "out"
        } else if ( chatCont.endbreak.toString() !== "" && event_name.match(/attendance-card-time-stamp-end-break/)) {
            // クリックしたボタンは戻りだった場合
            message = chatConf.endbreak.toString()
            set_status = chatConf.status
        }
        postIruca(message, set_status);
    });
}

// ローカルストレージが変更されたときにログを出力する
chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (let key in changes) {
      let storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
    load();
});

}); // jquery
