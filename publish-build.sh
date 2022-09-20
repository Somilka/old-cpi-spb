#!/bin/sh
# @changed 2022.09.20, 22:47

DATE=`date "+%Y.%m.%d %H:%M:%S"`
BUILD_FOLDER="./out"

echo "Publishing build..." \
&& . "./prepare-build.sh" "$BUILD_FOLDER" \
&& git add . -Av && git commit -m "build $DATE" && git push \
&& echo "Already published"
