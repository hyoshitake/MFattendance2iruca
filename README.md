# MFattendance2iruca
MF勤怠からIrucaを更新するツール

## Overview
[マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面にある出勤・退勤等の打刻のアクションで[Iruca](https://iruca.co/)のステータス変更を行うGoogleChrome拡張機能です。

## Install
### 拡張機能をダウンロードします
Chromeウェブストアに公開していないため、手動でインストールを行ってください。  
右上の「Code」から「Download ZIP」をクリックしてダウンロードします。
[![Image from Gyazo](https://i.gyazo.com/7da5385861545bd681fdac6b5b42c913.png)](https://gyazo.com/7da5385861545bd681fdac6b5b42c913)

### Chrome拡張機能のデベロッパーモードを有効にします
Chromeの右上にあるパズルピースのマークから「拡張機能を管理」をクリックします。あるいは、右上の参天リーダー > その他のツール > 拡張機能 をクリックします。
[![Image from Gyazo](https://i.gyazo.com/e1b45c10f423ded13a8b504f92569958.png)](https://gyazo.com/e1b45c10f423ded13a8b504f92569958)
2. Chrome拡張機能の **デベロッパーモード** を有効にして **パッケージ化されていない拡張機能の読み込み** で **[attendance-ext](https://github.com/sakasa/AttendanceChatPost-ChromeExtension/tree/master/attendance-ext)** フォルダを指定



- IrucaのRoomCodeとMemberIDを設定します

- [マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面で打刻のアクション（クリック）を行うとチャットツールのチャンネルにPOSTされます。


## 開発者向け情報
以下の箇所で指定しています。
- [background.js](https://github.com/sakasa/AttendanceChatPost-ChromeExtension/blob/master/attendance-ext/background.js) ・・・ Chrome拡張機能を動作させるURLの設定
```javascript
pageUrl: {
  hostEquals: 'attendance.moneyforward.com',
  pathEquals: '/my_page'
},
```

- [manifest.json](https://github.com/sakasa/AttendanceChatPost-ChromeExtension/blob/master/attendance-ext/manifest.json) ・・・ [contentScript.js](https://github.com/sakasa/AttendanceChatPost-ChromeExtension/blob/master/attendance-ext/contentScript.js) を動作させるURLの設定
```json
"content_scripts": [
  {
    "matches": ["https://attendance.moneyforward.com/my_page"],
    "js": ["contentScript.js"]
  }
],
```

## 参考


