create table researcher_applications (
    id_application bigserial,
    id_user bigint not null,
    status numeric(1,0) default 0,
    justification varchar(800) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_application),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);