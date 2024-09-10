#!/bin/bash

# 自動デプロイの設定
gcloud beta builds triggers create github \
  --name="nextjs-app-trigger3" \
  --repo-owner="dokosore" \
  --repo-name="ai-dokosore-01" \
  --branch-pattern="^main$" \
  --build-config="cloudbuild.yaml" \
  --service-account="cloud-build-sa@ai-dokosore-01.iam.gserviceaccount.com"