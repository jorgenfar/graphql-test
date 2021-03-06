import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Car',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: car => car.id,
    },
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
