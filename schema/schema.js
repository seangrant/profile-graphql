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

instance.defaults.headers.common['Authorization'] = 'SWS GJajqfj%2F1clbFWlDuxOilyzcCUpL%2BIlPXa%2FjI1NYOmI%2Fpc7gUpzLPvkyRzPU52PcZa%2FOa89TU1QwHIBqRHzXS2KZaRVzYzm%2Bfc0r78y4LlgUAfXTu9Zz0lB2QpMFEvCSNVVKfpaRv9oy22VF7jxfhqlpvIkDF6NCcZASOTgYBGt%2FFQmeJd%2FD7K8mN6l4RM095ST8tUa8fFkNgsv5egMCGk87AWlyR81N0fR0fayXRdDrj9%2FrOgbpsmgI6TQNnNMEzKUt9TVfCguY8dKpZhYgOx97iogk8f9Fp8lDsO0WitPTdDF%2Fv%2FocIy3M%2FYojeQSxZGapTGeiAnbaIQ5HtxmW67YiK%2FaS9rmNukg2GY%2FXntUP72P7prwvAL8a1NuvHxJRC%2BDLcDaoovDqj6W4nNSNYg%3D%3D';
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
