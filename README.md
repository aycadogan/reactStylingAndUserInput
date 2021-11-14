##Styling and User Input

index.css -> your global css which is accessible across your components or your pages

app.css -> component based styling, globally scoped

Style components -> you can use module.css (css modules react) or you can use libraries from https://styled-components.com/

json server -> it will use db.json and serve it over the network. it will act like a fake rest api.
'yarn add -D json-server'
add     
"json": "json-server --watch ./data/db.json"
to scripts on package.json
'npm run json'
you will serve the json file on the local stream

To kill the port:
'lsof -i :port_number'
'kill -9 PID_number'
