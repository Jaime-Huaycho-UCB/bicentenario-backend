create table post_forums (
    id_forum bigserial not null,
    id_post bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_forum),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);