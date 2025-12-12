import 'dotenv/config';
import { prisma } from '../src/index.js';

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo' },
    update: {},
    create: { slug: 'demo', name: 'Demo tenant' }
  });

  await prisma.user.upsert({
    where: { tenantId_email: { tenantId: tenant.id, email: 'admin@cajeer.com' } },
    update: {},
    create: { tenantId: tenant.id, email: 'admin@cajeer.com', displayName: 'Admin' }
  });

  await prisma.contentType.upsert({
    where: { tenantId_slug: { tenantId: tenant.id, slug: 'page' } },
    update: {},
    create: {
      tenantId: tenant.id,
      slug: 'page',
      name: 'Page',
      fields: [
        { key: 'title', kind: 'text', required: true },
        { key: 'body', kind: 'richText', required: false }
      ]
    }
  });

  // eslint-disable-next-line no-console
  console.log('Seeded demo tenant + admin + page content type.');
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
