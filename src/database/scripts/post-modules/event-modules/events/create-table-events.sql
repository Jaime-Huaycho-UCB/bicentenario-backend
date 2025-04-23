create table events (
    id_event bigserial,
    title varchar(200) not null,
    description varchar(800) not null,
    content varchar(2000) not null,
    id_city int not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_event),
    Foreign Key (id_city) REFERENCES cities(id_city)
);