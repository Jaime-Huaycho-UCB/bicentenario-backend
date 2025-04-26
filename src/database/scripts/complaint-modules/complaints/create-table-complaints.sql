create table complaints (
    id_complaint serial,
    title varchar(100) not null,
    report varchar(800) not null,
    id_object int not null,
    id_object_type bigint not null,
    id_status int not null,
    is_revised boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_complaint),
    Foreign Key (id_object_type) REFERENCES objects_complaint(id_object),
    Foreign Key (id_status) REFERENCES complaint_statuses(id_status)
);