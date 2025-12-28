# Angular2022

## Overview

Angular の学びをまとめるリポジトリです。

## Mock

[msw](https://mswjs.io/)を使ってます。

## Deploy

GCP の Cloud Build を利用しています。
事前にローカルでビルドした Docker イメージを Artifact Registry にプッシュしておく必要があります。

```bash
# gcloudにログイン
gcloud auth login

# Artifact Registry用のdocker認証
gcloud auth configure-docker asia-northeast1-docker.pkg.dev

# docker build
docker build -t asia-northeast1-docker.pkg.dev/{プロジェクトID}/containers/pnpm:node-20.11.1 --platform linux/amd64 --build-arg NODE_VERSION=20.11.1 .

# push
docker push asia-northeast1-docker.pkg.dev/{プロジェクトID}/containers/pnpm:node-20.11.1
```

## Login 方法

下記を参照ください。（ログイン ID、パスワードがわかります）
apps/myorg/src/mocks/login/login-api.ts
