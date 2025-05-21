-- trigger - Para aumentar likes o dislikes en comentarios
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

-- trigger - Para disminuir likes o dislikes en comentarios
create or replace function update_comment_interaction_delete()
returns trigger as $$
begin
    if (old.type = 0) then
        update comments
        set dislikes = dislikes - 1
        where id_comment = old.id_comment;
    elsif (old.type = 1) then
        update comments
        set likes = likes - 1
        where id_comment = old.id_comment;
    end if;
    return old;
end;
$$ language plpgsql;
create trigger trg_update_comment_interaction_delete
after delete on comment_interactions
for each row
execute function update_comment_interaction_delete();

-- trigger - Para actualizar likes/dislikes cuando cambia el type en comment_interactions
create or replace function update_comment_interaction_on_update()
returns trigger as $$
begin
    if (old.type <> new.type) then
        if (old.type = 0 and new.type = 1) then
            -- De dislike a like
            update comments
            set dislikes = dislikes - 1,
                likes = likes + 1
            where id_comment = new.id_comment;
        elsif (old.type = 1 and new.type = 0) then
            -- De like a dislike
            update comments
            set likes = likes - 1,
                dislikes = dislikes + 1
            where id_comment = new.id_comment;
        end if;
    end if;
    return new;
end;
$$ language plpgsql;

create trigger trg_update_comment_interaction_on_update
after update on comment_interactions
for each row
execute function update_comment_interaction_on_update();
