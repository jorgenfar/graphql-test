import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import Car from './car';
import data from '../data';

const { cars } = data;

const flatten = arr => (
  arr.reduce((flat, toFlatten) =>
    flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  , [])
);

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
    cars: {
      type: new GraphQLList(Car),
      description: 'The list of a person\'s cars',
      resolve: person =>
        flatten(person.cars.map(carID =>
          cars.filter(car => car.id === carID)
        ),
      ),
    },
  },
});
