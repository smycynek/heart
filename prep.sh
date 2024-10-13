#! /bin/bash

# I make this manually for my projects
rm -rf dist


VERSION_PATH="./src/app/version.ts"
version=$(grep -o -m 1 "[0-9][0-9][0-9]" $VERSION_PATH)
echo "Current version"
echo $version
version_inc=$((version+1))
echo "Next version"
echo $version_inc
sed -i -e "s/[0-9][0-9][0-9]/$version_inc/g" $VERSION_PATH

rm "$VERSION_PATH-e" # remove temp file


ng build  --configuration=production --base-href /heart/

