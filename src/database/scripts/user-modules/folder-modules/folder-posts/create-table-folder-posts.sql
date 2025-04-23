create table folder_posts (
    id_fp bigserial,
    id_folder bigint not null,
    id_post bigint not null,
    primary key (id_fp),
    Foreign Key (id_folder) REFERENCES user_folders(id_folder) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);