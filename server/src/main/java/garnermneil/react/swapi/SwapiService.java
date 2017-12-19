package garnermneil.react.swapi;

import garnermneil.react.swapi.dto.Film;

import java.util.List;
import java.util.Optional;

public interface SwapiService {

    Optional<List<Film>> retrieveFilms();

    Optional<Film> retrieveFilmByEpisodeId(final Integer episodeId);

}
