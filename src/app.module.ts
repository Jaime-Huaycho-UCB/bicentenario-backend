import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user-modules/user/user.module';
import { RolsModule } from './modules/user-modules/rols/rols.module';
import { RequestsInvestigatorModule } from './modules/user-modules/requests-investigator/requests-investigator.module';
import { DownloadUsersModule } from './modules/user-modules/download-users/download-users.module';
import { HistoryPostsModule } from './modules/user-modules/history-posts/history-posts.module';
import { UserForldersModule } from './modules/user-modules/folder-modules/user-forlders/user-forlders.module';
import { FolderPostsModule } from './modules/user-modules/folder-modules/folder-posts/folder-posts.module';
import { ComplaintStatusesModule } from './modules/complaint-modules/complaint-statuses/complaint-statuses.module';
import { CommentComplaintsModule } from './modules/complaint-modules/comment-complaints/comment-complaints.module';
import { PostComplaintsModule } from './modules/complaint-modules/post-complaints/post-complaints.module';
import { DepartamentsModule } from './modules/location-modules/departaments/departaments.module';
import { CitiesModule } from './modules/location-modules/cities/cities.module';
import { FileModule } from './modules/file-modules/file/file.module';
import { LogsModule } from './modules/logs/logs.module';
import { PostsModule } from './modules/post-modules/posts/posts.module';
import { PostTypesModule } from './modules/post-modules/post-types/post-types.module';
import { PostStatusesModule } from './modules/post-modules/post-statuses/post-statuses.module';
import { PostTagsModule } from './modules/post-modules/post-tags/post-tags.module';
import { PostStartsModule } from './modules/post-modules/post-starts/post-starts.module';
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
@Module({
  imports: [
    UserModule,
    RolsModule,
    RequestsInvestigatorModule,
    DownloadUsersModule,
    HistoryPostsModule,
    UserForldersModule,
    FolderPostsModule,
    ComplaintStatusesModule,
    CommentComplaintsModule,
    PostComplaintsModule,
    DepartamentsModule,
    CitiesModule,
    FileModule,
    LogsModule,
    PostsModule,
    PostTypesModule,
    PostStatusesModule,
    PostTagsModule,
    PostStartsModule,
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
    QuestionAnswersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
