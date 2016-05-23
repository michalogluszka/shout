clear

echo "Starting up build pipeline"

cd userService
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

