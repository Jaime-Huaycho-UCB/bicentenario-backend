create table complaint_statuses (
    id_status serial,
    name varchar(50) not null,
    description varchar(300) not null,
    primary key (id_status)
);