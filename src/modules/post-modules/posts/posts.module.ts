import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsValidator } from './services/posts.validator';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { CitiesModule } from 'src/modules/location-modules/cities/cities.module';
import { FilesModule } from 'src/modules/files/files.module';
import { PostStatusesModule } from '../post-statuses/post-statuses.module';
import { EventsModule } from '../event-modules/events/events.module';
import { StorageModule } from 'src/micro-services/storage/storage.module';
import { PostTagsModule } from '../tag-modules/post-tags/post-tags.module';
import { TagsModule } from '../tag-modules/tags/tags.module';
import { PostInteractionsModule } from '../post-interactions/post-interactions.module';
import { PostStarsModule } from '../post-stars/post-stars.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    UsersModule,
    CitiesModule,
    FilesModule,
    PostStatusesModule,
    EventsModule,
    StorageModule,
    PostTagsModule,
    TagsModule,
    forwardRef(() => PostInteractionsModule),
    forwardRef(() => PostStarsModule),
  ],
  controllers: [PostsController],
  providers: [PostsService,PostsValidator],
  exports: [PostsService]
})
export class PostsModule {}
