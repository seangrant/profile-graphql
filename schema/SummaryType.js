const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

const SummaryType = new GraphQLObjectType({
  name: 'Summary',
  description: 'Summary Type',
  fields: () => ({
    text: { type: GraphQLString }
  })
})

module.exports = SummaryType;
