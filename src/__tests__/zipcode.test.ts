import { MockContext, Context, createMockContext } from '../context';
import { getZipCodeInfo } from '../resolvers';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('should return info if zipcode exists', async () => {
  const user = {
    zipcode: '20710',
    city: 'Bladensburg',
    county: "Prince George's County",
  };
  mockCtx.prisma.zipCode.findUnique.mockResolvedValue(user);

  await expect(getZipCodeInfo('20710', ctx)).resolves.toEqual({
    zipcode: '20710',
    city: 'Bladensburg',
    county: "Prince George's County",
  });
});

test('should throw error 404 if zipcode does not exist', async () => {
  const user = null;
  mockCtx.prisma.zipCode.findUnique.mockResolvedValue(user);

  await expect(getZipCodeInfo('80000', ctx)).rejects.toEqual(new Error('404'));
});
