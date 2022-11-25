npx create-react-app app --typescript 

Command Palette create HttpFunction

npm install -g @azure/static-web-apps-cli

cd app
npm install
npm run build

swa build --auto
swa start ./app --api-location ./api

https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/connect-client-to-api