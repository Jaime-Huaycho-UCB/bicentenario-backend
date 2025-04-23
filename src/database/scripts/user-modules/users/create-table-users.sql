create table users (
    id_user bigserial,
    name varchar(200) not null,
    email varchar(150) not null,
    password varchar(300) not null,
    age numeric(3,0) not null,
    id_rol int not null,
    strikes numeric(1,0) default 0,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_user),
    Foreign Key (id_rol) REFERENCES rols(id_rol) on delete cascade
);