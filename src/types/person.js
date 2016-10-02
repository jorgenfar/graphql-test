import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Person',
  fields: {
    ssn: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The person\'s social security number',
      resolve: person => person.ssn,
    },
    name: {
      type: GraphQLString,
      description: 'The person\'s name',
      resolve: person => person.name,
    },
    email: {
      type: GraphQLString,
      description: 'The person\'s email address',
      resolve: person => person.email,
    },
  },
});
