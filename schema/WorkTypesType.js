const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
const LinksType = require('./LinksType');

const WorkTypesType = new GraphQLObjectType({
  name: 'WorkTypes',
  description: 'Work Types Type',
  fields: () => ({
    items: { type: new GraphQLList(GraphQLString)},
    _links: { type: LinksType }
  })
})

module.exports = WorkTypesType;
