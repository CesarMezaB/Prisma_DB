const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const missionComander1 = await prisma.missionCommander.upsert({
        where: { name: 'Mc1' },
        update: {},
        create: {
         name: 'Mc1',
                 lang: 'JavaScript',
                 missionCommander: 'Carlo',
                 enrollments: 400,
                 hasCertification: true
        },
      });

     const missionComander2 = await prisma.missionCommander.upsert({
        where: { name: 'Mc2' },
        update: {},
        create: {
         name: 'Mc2',
                 lang: 'Java',
                 missionCommander: 'Fer',
                 enrollments: 300,
                 hasCertification: false
        },
      });

      const missionComander3 = await prisma.missionCommander.upsert({
        where: { name: 'Mc3' },
        update: {},
        create: {
         name: 'Mc3',
                 lang: 'Java',
                 missionCommander: 'pepe',
                 enrollments: 30,
                 hasCertification: true
        },
      });

      const missionComander4 = await prisma.missionCommander.upsert({
        where: { name: 'Mc4' },
        update: {},
        create: {
         name: 'Mc4',
                 lang: 'JavaScript',
                 missionCommander: 'pancho',
                 enrollments: 100,
                 hasCertification: false
        },
      });

    console.log('Create 3 explorers');
    console.log('Create Mission Commanders')
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();