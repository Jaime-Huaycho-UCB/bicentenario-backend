create table departaments (
    id_departament serial,
    name varchar(100) not null,
    latitude float not null,
    longitude float not null,
    primary key (id_departament)
);