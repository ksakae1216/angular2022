# Angular2022

## Overview

Angular の学びをまとめるリポジトリです。

## Mock

[msw](https://mswjs.io/)を使ってます。

## Deploy

GCP の Cloud Build を利用しています。
事前にローカルでビルドした Docker イメージを GCR にプッシュしておく必要があります。

```bash
# gcloudにログイン
gcloud auth login

# docker認証
gcloud auth configure-docker

# docker build
docker build -t gcr.io/{プロジェクトID}/pnpm:node-20.9.0 --platform linux/amd64 .

# push
docker push gcr.io/{プロジェクトID}/pnpm:node-20.9.0
```

## Login 方法

下記を参照ください。（ログイン ID、パスワードがわかります）
apps/myorg/src/mocks/login/login-api.ts
