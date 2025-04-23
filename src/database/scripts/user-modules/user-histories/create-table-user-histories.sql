create table user_histories (
    id_history bigserial,
    id_user bigint not null,
    id_post bigint not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_history),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);