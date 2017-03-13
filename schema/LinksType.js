const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const HrefType = new GraphQLObjectType({
  name: 'Href',
  description: 'Href Type',
  fields: () => ({
    href: { type: GraphQLString }
  })
})

const LinksType = new GraphQLObjectType({
  name: 'Links',
  description: 'Links Type',
  fields: () => ({
    self: { type: HrefType }
  })
})

module.exports = LinksType;
