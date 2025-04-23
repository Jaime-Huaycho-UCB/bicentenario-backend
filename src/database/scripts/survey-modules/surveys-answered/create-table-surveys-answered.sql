create table surveys_answered (
    id_sa bigserial,
    id_post bigint not null,
    id_survey bigint not null,
    id_user bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_sa),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade,
    Foreign Key (id_survey) REFERENCES surveys(id_survey) on delete cascade,
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);