#!/usr/bin/expect -f

set timeout -1

set modules {
    {Modules/user-modules/user}
    {Modules/user-modules/rols}
    {Modules/user-modules/requests_investigator}
    {Modules/user-modules/download_users}
    {Modules/user-modules/history_posts}
    {Modules/user-modules/folder-modules/user_forlders}
    {Modules/user-modules/folder-modules/folder_posts}
    {Modules/complaint-modules/complaint_statuses}
    {Modules/complaint-modules/comment_complaints}
    {Modules/complaint-modules/post_complaints}
    {Modules/location-modules/departaments}
    {Modules/location-modules/cities}
    {Modules/file-modules/file}
    {Modules/logs}
    {Modules/post-modules/posts}
    {Modules/post-modules/post_types}
    {Modules/post-modules/post_statuses}
    {Modules/post-modules/post_tags}
    {Modules/post-modules/post_starts}
    {Modules/post-modules/post_interactions}
    {Modules/post-modules/comment-modules/comments}
    {Modules/post-modules/comment-modules/comment_interactions}
    {Modules/post-modules/tag-modules/tags}
    {Modules/post-modules/forum-modules/post_forums}
    {Modules/post-modules/forum-modules/post_forum_messages}
    {Modules/post-modules/event-modules/events}
    {Modules/post-modules/event-modules/event_forums}
    {Modules/post-modules/event-modules/event_forum_messages}
    {Modules/survey-modules/surveys}
    {Modules/survey-modules/surveys_answered}
    {Modules/survey-modules/question-modules/questions}
    {Modules/survey-modules/question-modules/question_answers}
}

foreach path $modules {
    spawn nest g resource $path
    expect "What transport layer do you use?" { send "REST\r" }
    expect "Would you like to generate CRUD entry points?" { send "y\r" }
    expect eof
}
