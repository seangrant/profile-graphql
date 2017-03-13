const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const AvailablilityType = require('./AvailabillityType');
const WorkTypesType = require('./WorkTypesType');

const RolePreferencesType = new GraphQLObjectType({
  name: 'RolePreferences',
  description: 'Role Preferences Type',
  fields: () => ({
    availablility: { type: AvailablilityType, resolve: (parent) => console.log('parent', parent) },
    workTypes: { type: WorkTypesType }
  })
});

module.exports = RolePreferencesType;
