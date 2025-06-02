create table surveys (
    id_survey bigserial,
    title varchar(400) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_survey)
);

insert into surveys (id_survey,title) values
(1,'Encuesta 1');