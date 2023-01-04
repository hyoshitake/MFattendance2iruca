// 設定内容の読み込み
let chatConf = {};
function load(){
    chrome.storage.local.get(['roomcode', 'memberid', 'status', 'clockin', 'clockout', 'endbreak', 'startbreak'], function(data) {
        chatConf.roomcode = data.roomcode;
        chatConf.memberid = data.memberid;
        chatConf.status = data.status;
        chatConf.clockin = data.clockin;
        chatConf.clockout = data.clockout;
        chatConf.startbreak = data.startbreak;
        chatConf.endbreak = data.endbreak;
        
        getIruca()
        .then(iruca_data => {
            // ステータスを変更
            var dom = document.getElementById('iruca_status');
            dom.value = iruca_data.status
            
            // メッセージを変更
            var dom = document.getElementById('iruca_message');
            dom.value = iruca_data.message
        })
    });
};

function dataJson(text, status){
    let ret = {
        "status": status,
        "message": text
    };

    return ret;
}

async function getIruca(){
    const url = "https://iruca.co/api/rooms/" + chatConf.roomcode + "/members/" + chatConf.memberid
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (response.ok) {
        const jsonValue = await response.json(); // Get JSON value from the response body
        return Promise.resolve(jsonValue);
    } else {
        console.log('iruca api error');
    }
}

function postIruca(data){
    console.log(data);
    const url = "https://iruca.co/api/rooms/" + chatConf.roomcode + "/members/" + chatConf.memberid
    fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json();
        if (!response.ok) {
            console.log('response.ok:', response.ok);
            console.log('response.status:', response.status);
            console.log('response.statusText:', response.statusText);
            throw new Error(response.statusText);
        }
        alert("Iruca送信に成功しました");
    })
    .catch(e => {
        console.log(e);
        alert("Iruca送信に失敗しました");
    });
}

// 出勤ボタンをクリックした場合
let clock_in_form = document.getElementsByClassName('clock_in')[0];
if(clock_in_form !== undefined)
{
    clock_in_form.addEventListener('click', function (evt) {
        let message = chatConf.clockin.toString()
        let set_status = chatConf.status
        let data = dataJson(message, set_status);
        postIruca(data);
        getIruca()
        .then(iruca_data => {
            // ステータスを変更
            var dom = document.getElementById('iruca_status');
            dom.value = iruca_data.status
            
            // メッセージを変更
            var dom = document.getElementById('iruca_message');
            dom.value = iruca_data.message
        })
    });
}else{
    console.log("出勤ボタンが拾えませんでした")
}

// 休憩開始ボタンをクリックした場合
let start_break_form = document.getElementsByClassName('start_break')[0];
if(start_break_form !== undefined)
{
    start_break_form.addEventListener('click', function (evt) {
        let message = chatConf.startbreak.toString()
        let set_status = "out"
        let data = dataJson(message, set_status);
        postIruca(data);
        getIruca()
        .then(iruca_data => {
            // ステータスを変更
            var dom = document.getElementById('iruca_status');
            dom.value = iruca_data.status
            
            // メッセージを変更
            var dom = document.getElementById('iruca_message');
            dom.value = iruca_data.message
        })
    });
}else{
    console.log("休憩開始ボタンが拾えませんでした")
}

// 休憩開始ボタンをクリックした場合
let end_break_form = document.getElementsByClassName('end_break')[0];
if(end_break_form !== undefined)
{
    end_break_form.addEventListener('click', function (evt) {
        let message = chatConf.endbreak.toString()
        let set_status = chatConf.status
        let data = dataJson(message, set_status);
        postIruca(data);
        getIruca()
        .then(iruca_data => {
            // ステータスを変更
            var dom = document.getElementById('iruca_status');
            dom.value = iruca_data.status
            
            // メッセージを変更
            var dom = document.getElementById('iruca_message');
            dom.value = iruca_data.message
        })
    });
}else{
    console.log("休憩終了ボタンが拾えませんでした")
}

// 退勤ボタンをクリックした場合
let clock_out_form = document.getElementsByClassName('clock_out')[0];
if(clock_out_form !== undefined)
{
    clock_out_form.addEventListener('click', function (evt) {
        let message = chatConf.clockout.toString()
        let set_status = "end"
        let data = dataJson(message, set_status);
        postIruca(data);
        getIruca()
        .then(iruca_data => {
            // ステータスを変更
            var dom = document.getElementById('iruca_status');
            dom.value = iruca_data.status
            
            // メッセージを変更
            var dom = document.getElementById('iruca_message');
            dom.value = iruca_data.message
        })
    });
}else{
    console.log("退勤ボタンが拾えませんでした")
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

// irucaの状況を埋め込む
const reppsitory_header = document.getElementsByClassName('status-container')[0];
div1 = document.createElement('div');
div1.innerHTML = 'iruca: '
               + " <select id='iruca_status' value=''>"
               + "   <option value='wfh'>wfh</option>"
               + "   <option value='office'>office</option>"
               + "   <option value='out'>out</option>"
               + "   <option value='end'>end</option>"
               + " </select>"
               + " <input id='iruca_message' type='text' value='' style='width: 40vw;'/>"
               + " <input id='iruca_send_button' type='button' value='irucaに送信'/>"
               + " <input id='iruca_get_button' type='button' value='irucaから取得'/>"

reppsitory_header.insertBefore(div1, reppsitory_header.firstChild);

load();

// irucaに送信ボタンを押したときの処理
let iruca_send_button = document.getElementById('iruca_send_button');
iruca_send_button.addEventListener('click', function (evt) {
    // ステータスを変更
    var dom = document.getElementById('iruca_status');
    let set_status = dom.value
    
    // メッセージを変更
    var dom = document.getElementById('iruca_message');
    let message = dom.value
    let data = dataJson(message, set_status);
    postIruca(data);
});

// irucaから取得ボタンを押したときの処理
let iruca_get_button = document.getElementById('iruca_get_button');
iruca_get_button.addEventListener('click', function (evt) {
    getIruca()
    .then(iruca_data => {
        // ステータスを変更
        var dom = document.getElementById('iruca_status');
        dom.value = iruca_data.status
        
        // メッセージを変更
        var dom = document.getElementById('iruca_message');
        dom.value = iruca_data.message
    })
});