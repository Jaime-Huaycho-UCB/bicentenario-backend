create table survey_questions (
    id_question bigserial not null,
    id_survey bigint not null,
    content varchar(200) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_question),
    Foreign Key (id_survey) REFERENCES surveys(id_survey)
);

insert into survey_questions (id_question, id_survey, content) values
(1, 1, 'Pregunta 1'),
(2, 1, 'Pregunta 2'),
(3, 1, 'Pregunta 3'),
(4, 1, 'Pregunta 4'),
(5, 1, 'Pregunta 5'),
(6, 1, 'Pregunta 6'),
(7, 1, 'Pregunta 7'),
(8, 1, 'Pregunta 8'),
(9, 1, 'Pregunta 9'),
(10, 1, 'Pregunta 10');