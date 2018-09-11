#!/bin/bash

if [ ! -n "$1" ] ;then
    echo "you have not input a word!"
    exit 0
fi

git add .
git commit -m "$1"
git push github