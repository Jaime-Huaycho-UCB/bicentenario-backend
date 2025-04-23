create table files (
    id_file bigserial,
    name varchar(100) not null,
    route varchar(200) not null,
    type varchar(30) not null,
    size int not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_file)
);