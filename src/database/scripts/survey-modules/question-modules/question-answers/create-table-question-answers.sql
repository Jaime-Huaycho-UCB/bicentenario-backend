create table question_answers (
    id_answer bigserial,
    id_survey_answered bigint not null,
    id_question bigint not null,
    number numeric(1,0) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_answer),
    Foreign Key (id_survey_answered) REFERENCES surveys_answered(id_sa) on delete cascade,
    Foreign Key (id_question) REFERENCES survey_questions(id_question) on delete cascade
);