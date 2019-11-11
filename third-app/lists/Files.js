const Files = require('@keystone/fields')


module.exports = {
    fields: {
        file: {
          type: File,
          adapter: fileAdapter,
          isRequired: true,
        },
      },
}