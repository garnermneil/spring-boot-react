package garnermneil.react.swapi.impl;

import garnermneil.react.swapi.SwapiService;
import garnermneil.react.swapi.dto.Film;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class SwapiServiceImpl implements SwapiService {

    @Override
    public Optional<List<Film>> retrieveFilms() {
        return Optional.of(Arrays.asList(
                FilmBuilder.get().withTitle("One").withEpisodeId(1).build(),
                FilmBuilder.get().withTitle("Two").withEpisodeId(2).build()
        ));
    }

    @Override
    public Optional<Film> retrieveFilmByEpisodeId(final Integer episodeId) {
        return Optional.of(
                FilmBuilder.get().withTitle("Film " + episodeId).withEpisodeId(episodeId).withOpening("Opening for " + episodeId).build()
        );
    }

    private static class FilmBuilder {
        private String title;
        private Integer episodeId;
        private String opening;

        static FilmBuilder get() {
            return new FilmBuilder();
        }

        FilmBuilder withTitle(final String title) {
            this.title = title;
            return this;
        }

        FilmBuilder withEpisodeId(final Integer episodeId) {
            this.episodeId = episodeId;
            return this;
        }

        Film build() {
            final Film film = new Film();
            film.setTitle(title);
            film.setEpisodeId(episodeId);
            film.setOpening(opening);
            return film;
        }

        public FilmBuilder withOpening(final String opening) {
            this.opening = opening;
            return this;
        }
    }

}
