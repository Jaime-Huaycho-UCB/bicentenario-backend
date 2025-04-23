create table event_forum_message (
    id_message bigserial,
    id_forum bigint not null,
    id_user bigint not null,
    content varchar(800) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_message),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_forum) REFERENCES event_forums(id_forum) on delete cascade
);