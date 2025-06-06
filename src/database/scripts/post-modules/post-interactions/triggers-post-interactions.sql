-- trigger - Para aumentar likes o dislikes en comentarios
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

-- trigger - Para disminuir likes o dislikes en comentarios
create or replace function update_post_interaction_delete()
returns trigger as $$
begin
    if (old.type = 0) then
        update posts
        set dislikes = dislikes - 1
        where id_post = old.id_post;
    elsif (old.type = 1) then
        update posts
        set likes = likes - 1
        where id_post = old.id_post;
    end if;
    return old;
end;
$$ language plpgsql;
create trigger trg_update_post_interaction_delete
after delete on post_interactions
for each row
execute function update_post_interaction_delete();