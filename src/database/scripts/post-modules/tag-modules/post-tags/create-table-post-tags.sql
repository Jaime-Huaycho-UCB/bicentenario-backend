create table post_tags (
    id_pt bigserial,
    id_post bigint not null,
    id_tag int not null,
    primary key (id_pt),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade,
    Foreign Key (id_tag) REFERENCES tags(id_tag) on delete cascade
);