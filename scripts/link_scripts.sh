#!/usr/bin/env bash

cd "$(dirname "$0")"

for file in *; do
    if [ "$file" != "$(basename "$0")" ]; then
        echo "Linking file: $file"
        rm -f /usr/local/bin/$file
        ln -s $(pwd)/$file /usr/local/bin/$file
    fi
done

