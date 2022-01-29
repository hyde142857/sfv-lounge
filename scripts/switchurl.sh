#!/bin/bash

GITHUB_USERID=`echo $GITHUB_REPOSITORY | sed 's#/.*##g'`
GITHUB_REPOS=`echo $GITHUB_REPOSITORY | sed 's#.*/##g'`

sed -i "s#__HOMEPAGE_FULL_URL__#https://$GITHUB_USERID.github.io/$GITHUB_REPOS#g" public/index.html
