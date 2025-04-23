create table event_forums (
    id_forum bigserial not null,
    id_event bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_forum),
    Foreign Key (id_event) REFERENCES events(id_event) on delete cascade
);