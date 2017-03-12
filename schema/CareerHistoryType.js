const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const MonthType = require('./MonthType');

const CareerHistoryType = new GraphQLObjectType({
  name: 'CareerHistory',
  description: 'Career History Type',
  fields: () => ({
    id: { type: GraphQLString },
    companyName: { type: GraphQLString },
    roleTitle: { type: GraphQLString },
    startDate: { type: MonthType },
    endDate: { type: MonthType },
  })
})

module.exports = CareerHistoryType;
