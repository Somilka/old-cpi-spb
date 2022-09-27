#!/bin/sh
# @changed 2022.09.20, 22:47

PUBLISH_FOLDER="./publish"
GIT_URL="https://github.com/Somilka/somilka.github.io.git"

echo "Initializing publish folder..." \
&& git submodule add $GIT_URL $PUBLISH_FOLDER \
&& cd $PUBLISH_FOLDER \
&& git checkout master \
&& echo "Already initialized"
