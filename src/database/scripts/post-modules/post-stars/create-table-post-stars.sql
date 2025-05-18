create table post_stars (
    id_star bigserial,
    id_post bigint not null,
    id_user bigint not null,
    number numeric(1,0) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_start),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);