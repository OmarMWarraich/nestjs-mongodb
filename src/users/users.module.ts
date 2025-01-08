import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [
    // Add the UsersService to the providers array
    UsersService,
  ],
  controllers: [
    // Add the UsersController to the controllers array
    UsersController,
  ],
})
export class UsersModule {}
