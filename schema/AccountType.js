const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const PersonalDetailsType = new GraphQLObjectType({
  name: 'PersonalDetails',
  description: 'Personal Details Type',
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phoneNumber: { type: GraphQLString }
  })
})

const AccountType = new GraphQLObjectType({
  name: 'Account',
  description: 'Account Type',
  fields: () => ({
    id: { type: GraphQLInt },
    emailAddress: { type: GraphQLString },
    emailCorrelationId: { type: GraphQLString },
    emailSubscriptions: { type: GraphQLString },
    personalDetails: { type: PersonalDetailsType }
  })
});

module.exports = AccountType;
