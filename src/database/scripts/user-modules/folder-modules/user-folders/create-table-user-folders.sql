create table user_folders (
    id_folder bigserial,
    id_user bigint not null,
    name varchar(100) not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_folder),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);