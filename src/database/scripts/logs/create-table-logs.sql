create table logs (
    id_log bigserial,
    event varchar(100),
    description varchar(300) not null,
    id_user bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_log),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);