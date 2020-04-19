#!/bin/bash

docker build -t eyaron94/swe645_frontend:latest $PWD
gcloud docker -- push eyaron94/swe645_frontend:latest
kubectl patch deployment swe645-frontend -p "{\"spec\": {\"template\": {\"metadata\": { \"labels\": {  \"redeploy\": \"$(date +%s)\"}}}}}"
