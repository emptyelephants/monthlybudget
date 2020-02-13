// eslint-disable-next-line import/no-extraneous-dependencies
// fake server mockup using miragejs

import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },
    seeds(mock) {
      mock.create('user', { name: 'Bob' });
      mock.create('user', { name: 'Alice' });
    },
    routes() {
      this.namespace = 'api';
      this.get('/users', (schema) => schema.users.all());
    },
  });

  return server;
}
