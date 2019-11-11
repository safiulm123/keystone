const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password, File } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { NextApp } = require('@keystonejs/app-next');

const PROJECT_NAME = "third-app";


const Users = require('./lists/Users')
const Todos = require('./lists/Todo')
//const Files = require('./lists/Files')


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

const fileAdapter = new LocalFileAdapter({
  src : './public/static/img',
  path : './public/static/img'
});



keystone.createList('User',Users);
keystone.createList('Todo',Todos);

keystone.createList('Applicant', {
  fields: {
    file: {
      type: File,
      adapter: fileAdapter,
      isRequired: true,
    },
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    new AdminUIApp({ enableDefaultRoute: false, authStrategy,adminPath: '/admin'}),
    new NextApp({ dir: 'public' }),
  ],
};
