const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const axios = require('axios');
const ProfileType = require('./ProfileType');
const AccountType = require('./AccountType');
const SummaryType = require('./SummaryType');
const instance = axios.create();
const SWS_Token = 'SWS IA%2F6vRTi%2FuXQGq8E6xXZ%2FSJVkThwwFCfHwRRSlaafuqkXaUL6B6qnfeaDMnE5soMf76DzrhhZ7UPDNG8fx2cUVGqAagkFXykHU7C0WluI0xwMcy5syGgE3QTaPrNg27i7BdrBtpvVY9SSlB1g3Hhv0EZXzybrhIgBQ8V5iGPfmjWzaqGsdAn2OWvsirUUG%2B8eZg6e4Y2N8JgMuf%2Bb0e2y7msaqbauVYW%2Ff5p9JRFQ3Ed8eHciYbGrcTzccNWobRTVrXWfP4KcD2P0K30eExprMeL36eCNKcDMNz2Ug1QevQ6txuwl76%2FeuCkVjSCLF49BMhqh2G4c72lMkthmGWK7muHKxzJF1DNf3XY%2FY3UteQ5WMd1V7dXO81jwkoCuepokJViqEVrVI79yUj8%2FpF%2F9A%3D%3D';
instance.defaults.headers.common['Authorization'] = SWS_Token;
const accountUrl = 'https://www.seek.com.au/api/v2/candidates/me/account';
const profileUrl = 'https://profile-web-experience-api.cloud.seek.com.au';
const Root = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    profile: {
      type: ProfileType,
      resolve: () => {
        return instance.get(profileUrl)
        .then(resp => resp.data);
      }
    },
    account: {
      type: AccountType,
      resolve: () => {
        return instance.get(accountUrl)
        .then(resp => resp.data);
      }
    }
  })
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation',
  fields: () => ({
    updateSummary: {
      type: SummaryType,
      args: {
        summary: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        console.log('parent', parent);
        console.log('args', args);
        // return 'fred'
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: Root,
  mutation
});
