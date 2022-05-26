import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { getZipCodeInfo } from '../resolvers';

export const ZipCodeInfo = objectType({
  name: 'ZipCodeInfo',
  definition(t) {
    t.nonNull.string('city');
    t.nonNull.string('county');
  },
});

export const ZipCodeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getZipCodeInfo', {
      type: 'ZipCodeInfo',
      args: {
        zipCode: nonNull(stringArg()),
      },
      resolve: async (parent, args, context, info) => {
        const { zipCode } = args;
        const zipCodeInfo = await getZipCodeInfo(zipCode, context);
        return zipCodeInfo;
      },
    });
  },
});
