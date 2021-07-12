npm run build
mv "build" "fastj"
rm -r "../yeet/lucasstarsz.github.io/fastj"
mv "fastj" "../yeet/lucasstarsz.github.io"
cd "../yeet/lucasstarsz.github.io"
git add .
git commit -m "Update FastJ Website content to deploy"
sleep 5