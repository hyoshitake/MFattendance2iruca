# MFattendance2iruca
MF勤怠からIrucaを更新するツール

## 概要
[マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面にある出勤・退勤等の打刻のアクションで[Iruca](https://iruca.co/)のステータス変更を行うGoogleChrome拡張機能です。

## インストールと初期セットアップ
### 拡張機能をダウンロードします
Chromeウェブストアに公開していないため、手動でインストールを行ってください。  
右上の「Code」から「Download ZIP」をクリックしてダウンロードし、解凍してください
[![Image from Gyazo](https://i.gyazo.com/7da5385861545bd681fdac6b5b42c913.png)](https://gyazo.com/7da5385861545bd681fdac6b5b42c913)

### Chrome拡張機能のデベロッパーモードを有効にします
Chromeの右上にあるパズルピースのマークから「拡張機能を管理」をクリックします。あるいは、右上の参天リーダー > その他のツール > 拡張機能 をクリックします。
[![Image from Gyazo](https://i.gyazo.com/e1b45c10f423ded13a8b504f92569958.png)](https://gyazo.com/e1b45c10f423ded13a8b504f92569958)

右上のトグルスイッチをクリックしてデベロッパーモードを有効にします
[![Image from Gyazo](https://i.gyazo.com/0c63d0402adb42dab1eaa76ef6349e45.png)](https://gyazo.com/0c63d0402adb42dab1eaa76ef6349e45)

### 拡張機能を読み込む
「パッケージ化されていない拡張機能を読み込む」をクリックします
[![Image from Gyazo](https://i.gyazo.com/2d85523d39eed15165de017e97e288fc.png)](https://gyazo.com/2d85523d39eed15165de017e97e288fc)
  

「attendance-ext」を選択します。
[![Image from Gyazo](https://i.gyazo.com/f4b7dc6be044ee7a4d6c5c0bc0dd8a90.png)](https://gyazo.com/f4b7dc6be044ee7a4d6c5c0bc0dd8a90)


追加されました。
[![Image from Gyazo](https://i.gyazo.com/e93dd5c8ef770a9ccccfc128c2f57f88.png)](https://gyazo.com/e93dd5c8ef770a9ccccfc128c2f57f88)

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


