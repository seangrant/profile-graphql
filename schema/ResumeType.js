const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

const ResumeType = new GraphQLObjectType({
  name: 'Resume',
  description: 'Resume Type',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    size: { type: GraphQLString }
  })
})

module.exports = ResumeType;
