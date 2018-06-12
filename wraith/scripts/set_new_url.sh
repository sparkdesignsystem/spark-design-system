#!/bin/bash
search="http:\/\/localhost:3000"

if [ -n "$TRAVIS_PULL_REQUEST" ] && [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
  sed -i "" "s/${search}/${TRAVIS_PULL_REQUEST}/g" wraith/configs/capture.yaml
fi

