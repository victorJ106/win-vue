#!/bin/bash
#publish library bash
VERSION=`npx select-version-cli`
read -p "publish $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "publishing $VERSION ..."
  VERSION=$VERSION 
  echo "version $VERSION"
  # npm version $VERSION --message "[release] $VERSION"
  npm run clean
  npm run lib
  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else 
    npm publish
  fi
  echo "publish the bkrwin-ui library $VERSION"
fi