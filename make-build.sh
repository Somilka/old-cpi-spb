#!/bin/sh
# @changed 2022.09.20, 22:47

BUILD_FOLDER="./out"

echo "Making build..." \
&& npm run -s build \
&& npm run -s export \
&& echo "Already made"
