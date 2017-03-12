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
const SWS_Token = '';
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
