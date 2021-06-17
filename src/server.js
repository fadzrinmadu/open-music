const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongsService = require('./services/inMemory/SongsService');

require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  await server.register({
    plugin: songs,
    options: {
      service: SongsService,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
