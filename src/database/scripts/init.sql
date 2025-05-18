-- Active: 1734217355730@@127.0.0.1@1987@DbBicentenario
-- departaments 

DO $$ DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS public.' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;
END $$;

-- files
\i files/create-table-files.sql

\i location-modules/departaments/create-table-departaments.sql
\i location-modules/departaments/query-departaments.sql

-- cities
\i location-modules/cities/create-table-cities.sql
\i location-modules/cities/query-cities.sql

-- events
\i post-modules/event-modules/events/create-table-events.sql

-- rols
\i user-modules/rols/create-table-rols.sql
\i user-modules/rols/query-rols.sql

-- users
\i user-modules/users/create-table-users.sql

-- user-folders
\i user-modules/folder-modules/user-folders/create-table-user-folders.sql

-- investigator-requests
\i user-modules/investigator-requests/create-table-investigator-requests.sql

-- post-statues
\i post-modules/post-statuses/create-table-post-statuses.sql
\i post-modules/post-statuses/query-post-statuses.sql

-- pots
\i post-modules/posts/create-table-posts.sql

-- user-downloads
\i user-modules/user-downloads/create-table-user-downloads.sql

-- user-histories
\i user-modules/user-histories/create-table-user-histories.SQL

-- folder-posts
\i user-modules/folder-modules/folder-posts/create-table-folder-posts.sql

-- post-stars
\i post-modules/post-stars/create-table-post-stars.sql

-- post-interactions
\i post-modules/post-interactions/create-table-post-interactions.sql


-- comments
\i post-modules/comment-modules/comments/create-table-comments.sql

-- comments-interactions
\i post-modules/comment-modules/comment-interactions/create-table-comment-interactions.sql

-- tags
\i post-modules/tag-modules/tags/create-table-tags.sql
\i post-modules/tag-modules/tags/query-tags.sql

-- post-tags
\i post-modules/tag-modules/post-tags/create-table-post-tags.sql

-- complaint-statuses
\i complaint-modules/complaint-statuses/create-table-complaint-statuses.sql

-- objects-complaints
\i complaint-modules/objects-complaints/create-table-objects-complaints.sql
\i complaint-modules/objects-complaints/query-objects-complaints.sql

-- complaints
\i complaint-modules/complaints/create-table-complaints.sql

-- post-forums
\i post-modules/forum-modules/post-forums/create-table-post-forums.sql

-- post-forum-messages
\i post-modules/forum-modules/post-forum-messages/create-table-post-forum-messages.sql 

-- event-forums
\i post-modules/event-modules/event-forums/create-table-event-forums.sql

-- event-forum-messages
\i post-modules/event-modules/event-forum-messages/create-table-event-forum-messages.sql

-- surveys
\i survey-modules/surveys/create-table-surveys.sql

-- survey-questions
\i survey-modules/question-modules/survey-questions/create-table-survey-questions.sql

-- surveys-answered
\i survey-modules/surveys-answered/create-table-surveys-answered.sql

-- question-answers
\i survey-modules/question-modules/question-answers/create-table-question-answers.sql

-- logs
\i logs/create-table-logs.sql


-- TRIGGERS --

-- post-interactions
\i post-modules/post-interactions/triggers-post-interactions.sql

-- comment-interactions
\i post-modules/comment-modules/comment-interactions/triggers-comment-interactions.sql



