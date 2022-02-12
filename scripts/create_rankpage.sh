#!/bin/bash

IMGCAT=('rank' 'character' 'rankandchar')

for cat in "${IMGCAT[@]}"
do
    for img in `cd ./public/$cat;ls *.png`
    do
        imgname=`basename $img .png`
        cat scripts/rankpage.html.template \
            | sed "s#__RANKIMAGE_URL__#__HOMEPAGE_FULL_URL__/$cat/$imgname.png#g" \
            > public/$cat/$imgname.html
    done
done
