git switch -q main
git branch --merged | egrep -v main | xargs git branch -d
git fetch --prune
