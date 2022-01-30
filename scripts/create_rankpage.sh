#!/bin/bash

for img in `cd ./public/rank;ls *.png`
do
    rank=`basename $img .png`
    cat scripts/rankpage.html.template \
        | sed "s#__RANKIMAGE_URL__#__HOMEPAGE_FULL_URL__/rank/$rank.png#g" \
        > public/rank/$rank.html
done
