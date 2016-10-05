import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import data from './data';
import Person from './types/person';
import Car from './types/car';

const { people, cars } = data;

const Root = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    person: {
      type: new GraphQLList(Person),
      args: {
        ssn: {
          type: GraphQLInt,
          description: 'The person\'s social security number',
        },
        name: {
          type: GraphQLString,
          description: 'The person\'s name',
        },
      },
      resolve: (_, { ssn, name }) => {
        if (ssn) {
          return people.filter(person => person.ssn === ssn);
        }
        if (name) {
          return people.filter(person => person.name === name);
        }
        return people;
      },
    },
    car: {
      type: new GraphQLList(Car),
      args: {
        regnr: {
          type: GraphQLString,
        },
      },
      resolve: (_, { regnr }) => {
        if (regnr) {
          return cars.filter(car => car.regnr === regnr);
        }
        return cars;
      },
    },
  },
});

const Schema = new GraphQLSchema({
  query: Root,
});

export default Schema;
