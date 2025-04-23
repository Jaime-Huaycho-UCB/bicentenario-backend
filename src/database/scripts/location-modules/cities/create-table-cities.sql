create table cities (
    id_city serial,
    name varchar(100) not null,
    id_departament int not null,
    latitude float not null,
    longitude float not null,
    primary key (id_city),
    Foreign Key (id_departament) REFERENCES departaments(id_departament)
);