# MFattendance2iruca
MF勤怠からIrucaを更新するツール

## 概要
[マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面にある出勤・退勤等の打刻のアクションで[Iruca](https://iruca.co/)のステータス変更を行うGoogleChrome拡張機能です。

## インストールと初期セットアップ
### ChromeWebstoreで拡張機能を追加
リンク先を開きChromeに追加ボタンを押します。
リンク先：https://chromewebstore.google.com/detail/mfattendance2iruca/goeljddfchndglfanmijaojloioagdob?hl=ja
![image](https://github.com/hyoshitake/MFattendance2iruca/assets/63386751/544c5c93-dc1a-46a5-873f-1269b3bcfb1f)


### IrucaのROOM-CODEとMEMBER IDを取得する
Irucaのページから「ルーム設定」を開きます
[![Image from Gyazo](https://i.gyazo.com/f36b001bae12c5a05e338ba2eafbc4ae.png)](https://gyazo.com/f36b001bae12c5a05e338ba2eafbc4ae)


「外部連携」の「API利用情報」を開きます
[![Image from Gyazo](https://i.gyazo.com/acee10b399f733c4956f6d6fe175cad4.png)](https://gyazo.com/acee10b399f733c4956f6d6fe175cad4)


ROOM-CODEとMEMBER IDを控えます
[![Image from Gyazo](https://i.gyazo.com/0d1f2e150d56f633bb6caac5a696db2a.png)](https://gyazo.com/0d1f2e150d56f633bb6caac5a696db2a)

### 拡張機能に設定する
MoneyFowardを開いて、拡張機能の設定を開きます。
[![Image from Gyazo](https://i.gyazo.com/61a7442e8551df16b420b0932f0d48a3.png)](https://gyazo.com/61a7442e8551df16b420b0932f0d48a3)


「Change setting」を開きます
[![Image from Gyazo](https://i.gyazo.com/79e35fabfc24abfc1fb03e7cc8b043c3.png)](https://gyazo.com/79e35fabfc24abfc1fb03e7cc8b043c3)


RoomCodeとMemberIdに取得したIrucaのデータを入力します。
[![Image from Gyazo](https://i.gyazo.com/359d33baaf46d1e7914e67fe00c01bec.png)](https://gyazo.com/359d33baaf46d1e7914e67fe00c01bec)

**！！完了です！！**

### 使い方
- [マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面で打刻のアクション（クリック）を行うとIrucaのステータスが変更されます。

- 出勤ボタンを押したときのデフォルトステータスは拡張機能のオプションから設定してください。

- Irucaのメッセージは拡張機能のオプションから設定してください。

## 開発者向け情報
- attendance-ext\options.html
- attendance-ext\options.js
  拡張機能の設定画面です。manifest.jsonで起動設定されています。

- attendance-ext\popup.html
- attendance-ext\popup.js
  拡張機能をクリックしたときに表示される、設定情報表示画面です。manifest.jsonで起動設定されています。

- attendance-ext\manifest.json
  拡張機能の設定ファイルです。manifest_version 3に準拠しています。

- MFattendance2iruca\test
  MoneyFowardのテストページです。

## 参考
https://github.com/sakasa/AttendanceChatPost-ChromeExtension


