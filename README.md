# typeorm-seeding-test

Demo of issue with @jorgebodega/typeorm-seeding

 - typeorm@0.3.17
 - @jorgebodega/typeorm-seeding

# Steps

```
npm install
npm run db:make
npm run seed:run
```

# Issue - No metadata for "Pet" was found.
```
C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test>npm run seed:run

> typeorm-seeding-test@1.0.0 seed:run
> ts-node ./node_modules/@jorgebodega/typeorm-seeding/dist/cli.js seed -d ./datasource.ts src/seeders/*.ts

✔ Datasource loaded
✔ Seeder imported
ℹ Executing seeders...
✖ Could not execute seeder!
SeederExecutionError: Could not execute seeder!
    at Command.run (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\@jorgebodega\typeorm-seeding\src\commands\seed.command.ts:55:11)
    at async Command.parseAsync (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\commander\lib\command.js:916:5)
    at async bootstrap (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\@jorgebodega\typeorm-seeding\src\commands\seed.command.ts:73:3) {
  [cause]: EntityMetadataNotFoundError: No metadata for "Pet" was found.
      at DataSource.getMetadata (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\src\data-source\DataSource.ts:444:30)
      at C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\src\persistence\EntityPersistExecutor.ts:85:30
      at Array.forEach (<anonymous>)
      at C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\src\persistence\EntityPersistExecutor.ts:77:30
      at Array.map (<anonymous>)
      at EntityPersistExecutor.execute (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\src\persistence\EntityPersistExecutor.ts:73:34)
      at async PetFactory.create (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\@jorgebodega\typeorm-factory\src\factory.ts:47:25)
      at async PetSeeder.run (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\src\seeders\Pet.ts:6:5)
      at async useSeeders (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\@jorgebodega\typeorm-seeding\src\helpers\useSeeders.ts:10:5)
      at async Command.run (C:\Users\Nathaniel\GitHub\jorgebodega\typeorm-seeding-test\node_modules\@jorgebodega\typeorm-seeding\src\commands\seed.command.ts:49:7)
}
```
