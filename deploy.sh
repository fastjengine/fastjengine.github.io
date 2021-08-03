npm run build
rm -r "docs/"
mkdir "docs"
sleep 5
mv -T "build" "docs"