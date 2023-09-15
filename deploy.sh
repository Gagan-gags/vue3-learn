
#/user/bin/env sh
set -e

npm run build 

cd prod

git init 
git add -A
git commit -m "new build" 
git push -f https://github.com/Gagan-gags/vue3-learn.git feat/main:gh-pages
cd -