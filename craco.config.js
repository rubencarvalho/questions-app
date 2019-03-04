module.exports = {
      babel: {
        ignore: ['craco.config.js'],
        plugins:
          process.env.NODE_ENV === 'development'
            ? ['babel-plugin-styled-components']
            : [
                'babel-plugin-styled-components',
                [
                  'babel-plugin-jsx-remove-data-test-id',
                  {
                    attributes: ['data-cy'],
                  },
                ],
              ],
      },
    }
