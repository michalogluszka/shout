clear
pm2 kill

echo "Starting up build pipeline"

cd userService
rm -rf obj
dotnet restore
dotnet build
pm2 start --name userService dotnet -- run 

echo "User Service started"

cd ..

cd web
bower install
gulp publish

pm2 start index.js

cd ..

