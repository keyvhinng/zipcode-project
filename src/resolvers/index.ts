import { Context } from '../context';

export async function getZipCodeInfo(zipCode: string, context: Context) {
  const zipCodeInfo = await context.prisma.zipCode.findUnique({
    where: {
      zipcode: zipCode,
    },
  });
  if (zipCodeInfo === null) {
    throw new Error('404');
  }
  return zipCodeInfo;
}
