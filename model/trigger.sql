
CREATE OR REPLACE FUNCTION delete_turn()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$

BEGIN

    INSERT INTO archived_turns (turn_id, direction_id, client_id) 
    VALUES 
    (
     OLD.turn_id, OLD.direction_id, OLD.client_id
    );

    RETURN OLD;

END
$$;

CREATE TRIGGER delete_trg
BEFORE DELETE
ON turns
FOR EACH ROW
EXECUTE PROCEDURE delete_turn();

