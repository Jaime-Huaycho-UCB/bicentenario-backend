create table complaint_statuses (
    id_status serial,
    name varchar(50) not null,
    description varchar(300) not null,
    primary key (id_status)
);

insert into complaint_statuses(id_status,name,description) values
(1,'Pendiente','La denuncia es en cola de revision'),
(2,'Aceptado','La denuncia fue acepta'),
(3,'Rechaza','La denuncia fue rechazada');