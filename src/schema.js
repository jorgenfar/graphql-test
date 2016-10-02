import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import data from './data';
import Person from './types/person';
import Car from './types/car';

const { people, cars } = data;

const Root = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    person: {
      type: Person,
      args: {
        ssn: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (_, { ssn }) =>
        people.find(person => person.ssn === ssn),
    },
    car: {
      type: Car,
      args: {
        regnr: {
          type: GraphQLString,
        },
      },
      resolve: (_, { regnr }) =>
        cars.find(car => car.regnr === regnr),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Root,
});

export default Schema;
