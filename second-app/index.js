// import necessary modules
const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { Text,Checkbox, Password } = require('@keystonejs/fields');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const TodosSchema = require('./lists/Todos.js');
const UsersSchema = require('./lists/Users.js');



// create an instance of Keystone app
const keystone = new Keystone({
  name: 'New Project',
  adapter: new MongooseAdapter(),
});


keystone.createList('User', UsersSchema);
keystone.createList('Todo', TodosSchema); 


const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
  });


module.exports = {
    keystone,
    apps: [new GraphQLApp(),new AdminUIApp({ enableDefaultRoute: true, authStrategy  })],
  };
  
