-- Trigger function para actualizar el promedio de estrellas en posts

CREATE OR REPLACE FUNCTION update_post_stars_avg()
RETURNS TRIGGER AS $$
DECLARE
    avg_stars numeric(5,2);
BEGIN
    SELECT AVG(number)
    INTO avg_stars
    FROM post_stars
    WHERE id_post = NEW.id_post;

    UPDATE posts
    SET stars = avg_stars
    WHERE id_post = NEW.id_post;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger que llama a la función después de insertar en post_stars
CREATE TRIGGER trg_update_post_stars_avg
AFTER INSERT ON post_stars
FOR EACH ROW
EXECUTE FUNCTION update_post_stars_avg();


-- Trigger que llama a la función después de actualizar en post_stars
CREATE TRIGGER trg_update_post_stars_avg_after_update
AFTER UPDATE ON post_stars
FOR EACH ROW
EXECUTE FUNCTION update_post_stars_avg();
