import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user-modules/users/users.module';
import { RolsModule } from './modules/user-modules/rols/rols.module';
import { DownloadUsersModule } from './modules/user-modules/download-users/download-users.module';
import { FolderPostsModule } from './modules/user-modules/folder-modules/folder-posts/folder-posts.module';
import { ComplaintStatusesModule } from './modules/complaint-modules/complaint-statuses/complaint-statuses.module';
import { DepartamentsModule } from './modules/location-modules/departaments/departaments.module';
import { CitiesModule } from './modules/location-modules/cities/cities.module';
import { FilesModule } from './modules/files/files.module';
import { LogsModule } from './modules/logs/logs.module';
import { PostsModule } from './modules/post-modules/posts/posts.module';
import { PostStatusesModule } from './modules/post-modules/post-statuses/post-statuses.module';
import { PostTagsModule } from './modules/post-modules/tag-modules/post-tags/post-tags.module';
import { PostInteractionsModule } from './modules/post-modules/post-interactions/post-interactions.module';
import { CommentsModule } from './modules/post-modules/comment-modules/comments/comments.module';
import { CommentInteractionsModule } from './modules/post-modules/comment-modules/comment-interactions/comment-interactions.module';
import { TagsModule } from './modules/post-modules/tag-modules/tags/tags.module';
import { PostForumsModule } from './modules/post-modules/forum-modules/post-forums/post-forums.module';
import { PostForumMessagesModule } from './modules/post-modules/forum-modules/post-forum-messages/post-forum-messages.module';
import { EventsModule } from './modules/post-modules/event-modules/events/events.module';
import { EventForumsModule } from './modules/post-modules/event-modules/event-forums/event-forums.module';
import { EventForumMessagesModule } from './modules/post-modules/event-modules/event-forum_messages/event-forum_messages.module';
import { SurveysModule } from './modules/survey-modules/surveys/surveys.module';
import { SurveysAnsweredModule } from './modules/survey-modules/surveys-answered/surveys-answered.module';
import { QuestionsModule } from './modules/survey-modules/question-modules/questions/questions.module';
import { QuestionAnswersModule } from './modules/survey-modules/question-modules/question-answers/question-answers.module';
import { ConfigModule } from './config/config.module';
import { MyConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { StorageModule } from './micro-services/storage/storage.module';
import { ComplaintsModule } from './modules/complaint-modules/complaints/complaints.module';
import { ObjectsComplaintsModule } from './modules/complaint-modules/objects-complaints/objects-complaints.module';
import { PostStarsModule } from './modules/post-modules/post-stars/post-stars.module';
import { UserFoldersModule } from './modules/user-modules/folder-modules/user-folders/user-folders.module';
import { UserHistoriesModule } from './modules/user-modules/user-histories/user-histories.module';
import { ResearcherApplicationsModule } from './modules/user-modules/researcher-applications/researcher-applications.module';
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolsModule,
    DownloadUsersModule,
    FolderPostsModule,
    ComplaintStatusesModule,
    ComplaintsModule,
    ObjectsComplaintsModule,
    DepartamentsModule,
    CitiesModule,
    FilesModule,
    LogsModule,
    PostsModule,
    PostStatusesModule,
    PostTagsModule,
    PostInteractionsModule,
    CommentsModule,
    CommentInteractionsModule,
    TagsModule,
    PostForumsModule,
    PostForumMessagesModule,
    EventsModule,
    EventForumsModule,
    EventForumMessagesModule,
    SurveysModule,
    SurveysAnsweredModule,
    QuestionsModule,
    QuestionAnswersModule,
    StorageModule,
    PostStarsModule,
    UserFoldersModule,
    UserHistoriesModule,
    ResearcherApplicationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit{
  constructor(private readonly config: MyConfigService) {}
  onModuleInit() {
    console.log('✅ PORT:', this.config.get('PORT'));
  console.log('✅ LOGS:', this.config.get('LOGS'));

  console.log('🗄️ DB_HOST:', this.config.get('DB_HOST'));
  console.log('🗄️ DB_PORT:', this.config.get('DB_PORT'));
  console.log('🗄️ DB_USER:', this.config.get('DB_USER'));
  console.log('🗄️ DB_PASSWORD:', this.config.get('DB_PASSWORD'));
  console.log('🗄️ DB_NAME:', this.config.get('DB_NAME'));

  console.log('📧 USER_EMAIL:', this.config.get('USER_EMAIL'));
  console.log('📧 PASS_AUTH:', this.config.get('PASS_AUTH'));

  console.log('🔐 JWT_SECRET:', this.config.get('JWT_SECRET'));
  console.log('🔐 JWT_TIME_EXPIRE:', this.config.get('JWT_TIME_EXPIRE'));

  console.log('📁 FILE_SYSTEM_HOST:', this.config.get('FILE_SYSTEM_HOST'));
  console.log('🧾 PDF_SERVICE_URL:', this.config.get('PDF_SERVICE_URL'));

  console.log('🔑 GOOGLE_CLIENT_ID:', this.config.get('GOOGLE_CLIENT_ID'));
  console.log('🔑 GOOGLE_CLIENT_SECRET:', this.config.get('GOOGLE_CLIENT_SECRET'));
  }
}
