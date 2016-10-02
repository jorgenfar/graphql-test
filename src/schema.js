import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import data from './data';

const { people } = data;

const PersonType = new GraphQLObjectType({
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

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    person: {
      type: PersonType,
      args: {
        ssn: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (_, { ssn }) =>
        people.find(person => person.ssn === ssn),
    },
  },
});

const Schema = new GraphQLSchema({
  query: RootQueryType,
});

export default Schema;
