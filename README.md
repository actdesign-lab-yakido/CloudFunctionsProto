# 概要
- GCP Cloud Functionsでexpress/ejsを使ったサンプルです
- dc2_proto_webがweb側、dc2_proto_apiがapi側のコードです

# デプロイ方法
- GCP Clouod Funtionsを有効化
- 右上のCLOUD SHELLを起動
- ソースコードをダウンロード
```
$ git clone このリポジトリ
```
- api側デプロイ
```
$ cd dc2_proto_api
$ gcloud functions deploy dc2_proto_api --runtime nodejs14 --trigger-http --entry-point app --region=asia-northeast1 --allow-unauthenticated 
```

- web側デプロイ
```
$ cd dc2_proto_web
$ gcloud functions deploy dc2_proto_web --runtime nodejs14 --trigger-http --entry-point app --region=asia-northeast1 --allow-unauthenticated --set-env-vars PROJECT=$DEVSHELL_PROJECT_ID,REGION=asia-northeast1
```

# 確認
- デプロイで生成された https://ドメイン/dc2_proto_web/ にアクセス 

# その他
- [VPC](https://cloud.google.com/functions/docs/networking/network-settings?hl=ja) を設定すれば内部ルーティングに制限できそう
