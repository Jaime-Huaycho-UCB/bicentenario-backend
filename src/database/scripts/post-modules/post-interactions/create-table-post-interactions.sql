create table post_interactions (
    id_interaction bigserial,
    id_user bigint not null,
    id_post bigint not null,
    type numeric(1,0) not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_interaction),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);