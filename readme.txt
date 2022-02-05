npm i express
npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
npm i moongose 

script:
nodemon src/index.js --exec babel-node
"nodemon --exec npx babel-node src/index.js"
