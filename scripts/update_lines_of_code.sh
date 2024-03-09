#!/usr/bin/env bash

cd "$(dirname "$(readlink -f "$0")")"
cd ../
cloc --csv --exclude-dir=.cache,.yarn,node_modules --out ./stats/lines_of_code.csv $(git ls-files)