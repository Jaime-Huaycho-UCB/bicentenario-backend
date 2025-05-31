create table post_forums (
    id_forum bigserial not null,
    title varchar(100) not null,
    description varchar(500) not null,
    id_user bigint not null,
    id_post bigint not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_forum),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade,
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);