const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
const { values } = require('lodash');

const CareerHistoryType = require('./CareerHistoryType');
const ResumeType = require('./ResumeType');

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile Type',
  fields: () => ({
    id: { type: GraphQLString },
    defaultResume: { type: GraphQLString },
    careerHistory: {
      type: new GraphQLList(CareerHistoryType)
    },
    resumes: {
      type: new GraphQLList(ResumeType),
      resolve: (a, b) => {
        return values(a.resumes)
      }
    }
  })
})

module.exports = ProfileType;
