create table user_downloads (
    id_download bigserial,
    id_user bigint not null,
    id_post bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_download),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);