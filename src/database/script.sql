-- Inicio - Localicaciones
create table departaments (
    id_departament serial,
    name varchar(100) not null,
    primary key (id_departament)
);
select * from departaments;
-- Insertando los departamentos
INSERT INTO departaments (name) VALUES
('La Paz'),
('Santa Cruz'),
('Cochabamba'),
('Oruro'),
('Potosí'),
('Sucre'),
('Tarija'),
('Chuquisaca'),
('Beni'),
('Pando');

create table cities (
    id_city serial,
    name varchar(100) not null,
    id_departament int not null,
    latitude float not null,
    longitude float not null,
    primary key (id_city),
    Foreign Key (id_departament) REFERENCES departaments(id_departament)
);
select * from cities;
-- Insertando ciudades con latitud y longitud
INSERT INTO cities (name, id_departament, latitude, longitude) VALUES
-- La Paz
('La Paz', 1, -16.5000, -68.1193),
('El Alto', 1, -16.4897, -68.1193),
('Viacha', 1, -16.4333, -68.2333),
('Achocalla', 1, -16.8000, -68.1667),
('Cajuata', 1, -16.1000, -68.2500),
('Irupana', 1, -16.9333, -68.3167),
-- Santa Cruz
('Santa Cruz de la Sierra', 2, -17.7833, -63.1813),
('Warnes', 2, -17.7667, -63.4000),
('Montero', 2, -17.3667, -63.2000),
('Cotoca', 2, -17.7000, -63.0000),
('La Guardia', 2, -17.8000, -63.1000),
('Puerto Suarez', 2, -18.9833, -57.7000),
('Camba-Cuá', 2, -17.7462, -63.2189),
-- Cochabamba
('Cochabamba', 3, -17.3900, -66.1568),
('Quillacollo', 3, -17.6333, -66.2133),
('Sacaba', 3, -17.4333, -66.2500),
('Vinto', 3, -17.4333, -66.2833),
('Colomi', 3, -17.6333, -66.3667),
('Toco', 3, -17.5667, -66.3667),
-- Oruro
('Oruro', 4, -17.9833, -68.1000),
('Huanuni', 4, -17.9667, -67.9833),
('Machacamarca', 4, -17.3667, -68.3833),
('Caracollo', 4, -17.3667, -68.3167),
('Santiago de Andamarca', 4, -17.8333, -68.4167),
-- Potosí
('Potosí', 5, -19.5833, -65.7500),
('Sucre', 6, -19.0333, -65.2625),
('Villazón', 7, -21.2000, -65.3833),
('Yamparáez', 8, -19.3000, -65.9500),
('Tinguipaya', 5, -19.4000, -65.8000),
('Uyuni', 5, -20.4667, -66.8333),
-- Tarija
('Tarija', 7, -21.5333, -64.7333),
('Villazón', 7, -21.2000, -65.3833),
('Yacuiba', 7, -22.0000, -63.6667),
('Bermejo', 7, -22.2500, -64.2667),
('San Lorenzo', 7, -21.4000, -64.8000),
-- Chuquisaca
('Sucre', 8, -19.0333, -65.2625),
('Yamparáez', 8, -19.3000, -65.9500),
('Azurduy', 8, -19.3500, -65.6667),
('Poroma', 8, -19.0333, -65.4167),
-- Beni
('Trinidad', 9, -14.8333, -64.9000),
('Riberalta', 9, -11.0167, -67.7333),
('Cobija', 9, -11.0167, -68.1333),
('Santa Ana del Yacuma', 9, -13.8333, -65.1000),
('San Borja', 9, -13.5833, -67.4167),
-- Pando
('Cobija', 10, -11.0167, -68.1333),
('Bolívar', 10, -11.2500, -68.5000),
('Porvenir', 10, -10.7667, -68.2500),
('El Sena', 10, -10.5000, -68.4167),
('Santa Rosa', 10, -11.1333, -68.4000);

-- Fin - Localizaciones

-- Inicio - Eventos
create table events (
    id_event bigserial,
    title varchar(200) not null,
    description varchar(800) not null,
    content varchar(2000) not null,
    id_city int not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_event),
    Foreign Key (id_city) REFERENCES cities(id_city)
);
-- Fin - Eventos


-- Inicio - Usuario
create table rols (
    id_rol Serial,
    name varchar(50) not null,
    primary key (id_rol)
);
select * from rols;
insert into rols(id_rol,name) values 
(1,'Administrador'),
(2,'Curador'),
(3,'Investigador'),
(4,'Visitante');

create table users (
    id_user bigserial,
    name varchar(200) not null,
    email varchar(150) not null,
    password varchar(300) not null,
    age numeric(3,0) not null,
    id_rol int not null,
    strikes numeric(1,0) default 0,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_user),
    Foreign Key (id_rol) REFERENCES rols(id_rol) on delete cascade
);
select * from users;

create table user_folders (
    id_folder bigserial,
    id_user bigint not null,
    name varchar(100) not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_folder),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);

-- subInicio - Para solicitudes para ser investigador
create table investigator_requests (
    id_request bigserial,
    id_user bigint not null,
    status numeric(1,0) default 0,
    justification varchar(800) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_request),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);
-- subFin - Para solicitudes para ser investigador

-- Fin - Usuario

-- Inicio - Publicacion
-- subInicio - Para estados de post
create table post_statuses (
    id_status serial,
    name varchar(100) not null,
    primary key (id_status)
);
insert into post_statuses(name) values
('Enviado a revision'),
('Testimonio rechazado'),
('Testimonio aceptado');
-- subFin - Para estados de post

-- subInicio - Para archivos guardados de posts
create table files (
    id_file bigserial,
    name varchar(100) not null,
    route varchar(200) not null,
    type varchar(30) not null,
    size int not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_file)
);
-- subFin - Para archivos guardados de posts
create table posts (
    id_post bigserial,
    id_user bigserial not null,
    title varchar(300) not null,
    description varchar(800) not null,
    stars numeric(6,1) default 0,
    views bigint default 0,
    likes int default 0,
    dislikes int default 0,
    id_city int not null,
    type numeric(1,0),
    id_file int,
    content text,
    is_published boolean default false,
    id_curator bigint,
    id_status int not null,
    id_head int,
    id_child int,
    id_event bigint,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_post),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_city) REFERENCES cities(id_city) on delete cascade,
    Foreign Key (id_file) REFERENCES files(id_file) on delete cascade,
    Foreign Key (id_status) REFERENCES post_statuses(id_status) on delete cascade,
    Foreign Key (id_curator) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_event) REFERENCES events(id_event) on delete cascade
);

-- subInicio - Para el registro de descargar de usuario
create table user_downloads (
    id_download bigserial,
    id_user bigint not null,
    id_post bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_download),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);
-- subFin - Para el registro de descargar de usuario

-- subInicio - Para el historia del usuario
create table history_posts (
    id_history bigserial,
    id_user bigint not null,
    id_post bigint not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_history),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);
-- subfin - Para el historia del usuario

-- subInicio - Para colecciones de usuario
create table folder_posts (
    id_fp bigserial,
    id_folder bigint not null,
    id_post bigint not null,
    primary key (id_fp),
    Foreign Key (id_folder) REFERENCES user_folders(id_folder) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);
-- subfin - Para colecciones de usuario

create table post_starts (
    id_start bigserial,
    id_post bigint not null,
    id_user bigint not null,
    number numeric(1,0) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_start),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);

-- subInicio - interacion de post
create table post_interactions (
    id_interaction bigserial,
    id_user bigint not null,
    id_post bigint not null,
    type numeric(1,0) not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_interaction),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);

-- subInicio - trigger - Para aumentar likes o dislikes en comentarios
create or replace function update_post_interaction()
returns trigger as $$
begin
    if (new.type = 0) then
        update posts
        set dislikes = dislikes + 1
        where id_post = new.id_post;
    elsif (new.type = 1) then
        update posts
        set likes = likes + 1
        where id_post = new.id_post;
    end if;
    return new;
end;
$$ language plpgsql;

create trigger trg_update_post_interaction
after insert on post_interactions
for each row
execute function update_post_interaction();
-- subFin - trigger - Para aumentar likes o dislikes en comentarios
-- subFin - interacion de post


-- subInicio - Para comentarios de post
create table comments (
    id_comment bigserial,
    id_post bigint not null,
    id_user bigint not null,
    content varchar(500) not null,
    likes int default 0,
    dislikes int default 0,
    head bigint,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_comment),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);

create table comment_interactions (
    id_interaction bigserial,
    id_comment bigint not null,
    id_user bigint not null,
    type numeric(1,0) not null,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_interaction),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_comment) REFERENCES comments(id_comment) on delete cascade
);

-- subInicio - trigger - Para aumentar likes o dislikes en comentarios
create or replace function update_comment_interaction()
returns trigger as $$
begin
    if (new.type = 0) then
        update comments
        set dislikes = dislikes + 1
        where id_comment = new.id_comment;
    elsif (new.type = 1) then
        update comments
        set likes = likes + 1
        where id_comment = new.id_comment;
    end if;
    return new;
end;
$$ language plpgsql;

create trigger trg_update_comment_interaction
after insert on comment_interactions
for each row
execute function update_comment_interaction();
-- subFin - trigger - Para aumentar likes o dislikes en comentarios
-- subFin - Para comentarios de post

-- subInicio - etiquetas
create table tags (
    id_tag serial,
    name varchar(50) not null,
    primary key (id_tag)
);
select * from tags;
INSERT INTO tags (name) VALUES
('Bicentenario'),
('Independencia'),
('Patrimonio cultural'),
('Tradiciones bolivianas'),
('Colonización'),
('Movimientos sociales'),
('Luchas campesinas'),
('Exilio'),
('Revolución de 1952'),
('Resistencia indígena'),
('Mestizaje'),
('Folklore'),
('Fiestas tradicionales'),
('Indígenas'),
('Afrobolivianos'),
('Migrantes'),
('Pueblos originarios'),
('Desplazados'),
('Mujeres en Bolivia'),
('Jóvenes'),
('Vivienda rural'),
('Educación'),
('Justicia social'),
('Derechos humanos'),
('Testimonio de vida'),
('Historia de familia'),
('Historia personal'),
('Memoria colectiva'),
('Experiencia de guerra'),
('Relato de exilio'),
('Recuerdos de infancia'),
('Testimonio de pobreza'),
('Cambio social'),
('Luchas políticas'),
('Esperanza'),
('Superación'),
('Resiliencia'),
('Desafíos'),
('Lucha por la justicia'),
('Dificultades'),
('Reconstrucción'),
('Sueños'),
('Memoria histórica'),
('Trauma'),
('Orgullo');
create table post_tags (
    id_pt bigserial,
    id_post bigint not null,
    id_tag int not null,
    primary key (id_pt),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade,
    Foreign Key (id_tag) REFERENCES tags(id_tag) on delete cascade
);
-- subFin - etiquetas

-- Fin - Publicacion

-- Inicio - Denuncias
create table complaint_statuses (
    id_status serial,
    name varchar(50) not null,
    description varchar(300) not null,
    primary key (id_status)
);

create table objects_complaint (
    id_object serial,
    name varchar(50) not null,
    primary key (id_object)
);
insert into objects_complaint (name) values ('Testimonio'),('Comenntario');

create table complaints (
    id_complaint serial,
    title varchar(100) not null,
    report varchar(800) not null,
    id_object int not null,
    id_status int not null,
    is_revised boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_complaint),
    Foreign Key (id_object) REFERENCES objects_complaint(id_object),
    Foreign Key (id_status) REFERENCES complaint_statuses(id_status)
);
-- Fin - Denuncias

-- Inicio - Foros
create table post_forums (
    id_forum bigserial not null,
    id_post bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_forum),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade
);
create table post_forum_message (
    id_message bigserial,
    id_forum bigint not null,
    id_user bigint not null,
    content varchar(800) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_message),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_forum) REFERENCES post_forums(id_forum) on delete cascade
);

create table event_forums (
    id_forum bigserial not null,
    id_event bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_forum),
    Foreign Key (id_event) REFERENCES events(id_event) on delete cascade
);
create table event_forum_message (
    id_message bigserial,
    id_forum bigint not null,
    id_user bigint not null,
    content varchar(800) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_message),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade,
    Foreign Key (id_forum) REFERENCES event_forums(id_forum) on delete cascade
);
-- Fin - Foros

-- Inicio - Encuestas
create table surveys (
    id_survey bigserial,
    title varchar(400) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_survey)
);
create table survey_questions (
    id_question bigserial not null,
    id_survey bigint not null,
    question varchar(200) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_question),
    Foreign Key (id_survey) REFERENCES surveys(id_survey)
);

create table surveys_answered (
    id_sa bigserial,
    id_post bigint not null,
    id_survey bigint not null,
    id_user bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_sa),
    Foreign Key (id_post) REFERENCES posts(id_post) on delete cascade,
    Foreign Key (id_survey) REFERENCES surveys(id_survey) on delete cascade,
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);
create table question_answers (
    id_answer bigserial,
    id_answered bigint not null,
    id_question bigint not null,
    number numeric(1,0) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_answer),
    Foreign Key (id_answered) REFERENCES surveys_answered(id_sa) on delete cascade,
    Foreign Key (id_question) REFERENCES survey_questions(id_question) on delete cascade
);
-- Fin - Encuestas

-- Inicio - logs
create table logs (
    id_log bigserial,
    event varchar(100),
    description varchar(300) not null,
    id_user bigint not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id_log),
    Foreign Key (id_user) REFERENCES users(id_user) on delete cascade
);
-- Fin - logs