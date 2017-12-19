package garnermneil.react.swapi.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Film {
    private String title;

    @JsonProperty("episode_id")
    private Integer episodeId;

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setEpisodeId(final Integer episodeId) {
        this.episodeId = episodeId;
    }

    public Integer getEpisodeId() {
        return episodeId;
    }
}
