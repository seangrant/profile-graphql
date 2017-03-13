const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const LinksType = require('./LinksType');

const AvailablilityType = new GraphQLObjectType({
  name: 'Availablility',
  description: 'Availablility Type',
  fields: () => ({
    weeks: { type: GraphQLInt },
    _links: { type: LinksType }

  })
});

module.exports = AvailablilityType;
