import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user-modules/user/user.module';
import { RolsModule } from './modules/user-modules/rols/rols.module';
import { RequestsInvestigatorModule } from './modules/user-modules/requests_investigator/requests_investigator.module';
import { DownloadUsersModule } from './modules/user-modules/download_users/download_users.module';
import { HistoryPostsModule } from './modules/user-modules/history_posts/history_posts.module';
import { UserForldersModule } from './modules/user-modules/folder-modules/user_forlders/user_forlders.module';
import { FolderPostsModule } from './modules/user-modules/folder-modules/folder_posts/folder_posts.module';
import { ComplaintStatusesModule } from './modules/complaint-modules/complaint_statuses/complaint_statuses.module';
import { CommentComplaintsModule } from './modules/complaint-modules/comment_complaints/comment_complaints.module';
import { PostComplaintsModule } from './modules/complaint-modules/post_complaints/post_complaints.module';
import { DepartamentsModule } from './modules/location-modules/departaments/departaments.module';
import { CitiesModule } from './modules/location-modules/cities/cities.module';
import { FileModule } from './modules/file-modules/file/file.module';
import { LogsModule } from './modules/logs/logs.module';
import { PostsModule } from './modules/post-modules/posts/posts.module';
import { PostTypesModule } from './modules/post-modules/post_types/post_types.module';
import { PostStatusesModule } from './modules/post-modules/post_statuses/post_statuses.module';
import { PostTagsModule } from './modules/post-modules/post_tags/post_tags.module';
import { PostStartsModule } from './modules/post-modules/post_starts/post_starts.module';
import { PostInteractionsModule } from './modules/post-modules/post_interactions/post_interactions.module';
import { CommentsModule } from './modules/post-modules/comment-modules/comments/comments.module';
import { CommentInteractionsModule } from './modules/post-modules/comment-modules/comment_interactions/comment_interactions.module';
import { TagsModule } from './modules/post-modules/tag-modules/tags/tags.module';
import { PostForumsModule } from './modules/post-modules/forum-modules/post_forums/post_forums.module';
import { PostForumMessagesModule } from './modules/post-modules/forum-modules/post_forum_messages/post_forum_messages.module';
import { EventsModule } from './modules/post-modules/event-modules/events/events.module';
import { EventForumsModule } from './modules/post-modules/event-modules/event_forums/event_forums.module';
import { EventForumMessagesModule } from './modules/post-modules/event-modules/event_forum_messages/event_forum_messages.module';
import { SurveysModule } from './modules/survey-modules/surveys/surveys.module';
import { SurveysAnsweredModule } from './modules/survey-modules/surveys_answered/surveys_answered.module';
import { QuestionsModule } from './modules/survey-modules/question-modules/questions/questions.module';
import { QuestionAnswersModule } from './modules/survey-modules/question-modules/question_answers/question_answers.module';

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
