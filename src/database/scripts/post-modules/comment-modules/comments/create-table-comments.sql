create table comments (
    id_comment bigserial,
    id_post bigint not null,
    id_user bigint not null,
    content varchar(500) not null,
    likes int default 0,
    dislikes int default 0,
    head bigint,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_comment),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);