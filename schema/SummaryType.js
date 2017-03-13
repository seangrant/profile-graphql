const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const SummaryType = new GraphQLObjectType({
  name: 'Summary',
  description: 'Summary Type',
  fields: () => ({
    text: { type: GraphQLString }
  })
})

module.exports = SummaryType;
