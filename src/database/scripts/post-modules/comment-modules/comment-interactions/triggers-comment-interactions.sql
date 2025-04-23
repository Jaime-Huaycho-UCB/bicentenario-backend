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