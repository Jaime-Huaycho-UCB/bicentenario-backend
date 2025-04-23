create table survey_questions (
    id_question bigserial not null,
    id_survey bigint not null,
    question varchar(200) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_question),
    Foreign Key (id_survey) REFERENCES surveys(id_survey)
);