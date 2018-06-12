#!/bin/bash
search="http:\/\/localhost:3000"

if [ -n "$TRAVIS_PULL_REQUEST" ] && [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
  sed -i -- "s/${search}/https:\/\/deploy-preview-${TRAVIS_PULL_REQUEST}--spark-design-system.netlify.com\//g" wraith/configs/capture.yaml
fi

