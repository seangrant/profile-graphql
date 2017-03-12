const {
  GraphQLObjectType,
  GraphQLInt
} = require('graphql');

const MonthType = new GraphQLObjectType({
  name: 'Month',
  description: 'Month Type',
  fields: () => ({
    month: {type: GraphQLInt},
    year: {type: GraphQLInt}
  })
})

module.exports = MonthType;
