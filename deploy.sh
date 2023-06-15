#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'yineng.world' > CNAME

if git rev-parse --is-inside-work-tree; then
  echo "inside git repo"
else
    git init
fi

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:hongting0813/hongting0813.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/hongting0813/Yineng.git main:gh-pages

cd -