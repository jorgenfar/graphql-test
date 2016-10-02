import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Car',
  fields: {
    regnr: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: car => car.regnr,
    },
    make: {
      type: GraphQLString,
      resolve: car => car.make,
    },
    model: {
      type: GraphQLString,
      resolve: car => car.model,
    },
  },
});
