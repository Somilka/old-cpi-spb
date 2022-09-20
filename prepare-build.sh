#!/bin/sh
# @changed 2022.09.20, 22:47

if [ $# -lt 1 ]; then
  echo "Usage: $0 <BUILD_FOLDER>"
  exit 0
fi

BUILD_FOLDER="$1"

if [ -d "$BUILD_FOLDER/_next" ]; then
    echo "Processing '_next' files in '$BUILD_FOLDER'..." \
    && find-exe "$BUILD_FOLDER" -type f -name '*.html' -exec sed -i 's/\/\b_next\b\//\/next\//g' {} \; \
    && mv "$BUILD_FOLDER/_next" "$BUILD_FOLDER/next" \
    && echo "'_next' files processed"
else
    echo "'$BUILD_FOLDER/_next' folder not found!"
fi
