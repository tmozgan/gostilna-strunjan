const server = require('./server');

function init(){

  server.init()
    .then(()=>{

      console.log('Setup complete');

    });

}

init();