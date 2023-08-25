import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
/
saya coba sebisanya karna kendala device cuma ada hp mau coba ke warnet lagi ga sempet jadi sayabelom tau ini jalan atu tidak :)
*/
public class SpotifyAPIExample {

    private static final String CLIENT_ID = "your_client_id";
    private static final String ACCESS_TOKEN = "your_access_token";

    public static void main(String[] args) {
        // Example track ID
        String trackId = "your_track_id";

        // Audio Analysis API
        String audioAnalysisEndpoint = "https://api.spotify.com/v1/audio-analysis/" + trackId;
        String audioAnalysisResponse = sendGetRequest(audioAnalysisEndpoint);
        System.out.println("Audio Analysis Response: " + audioAnalysisResponse);

        // Audio Playback
        String audioPlaybackUrl = "spotify:track:" + trackId;
        System.out.println("Audio Playback URL: " + audioPlaybackUrl);

        // Recommendations API
        String recommendationsEndpoint = "https://api.spotify.com/v1/recommendations?seed_tracks=" + trackId;
        String recommendationsResponse = sendGetRequest(recommendationsEndpoint);
        System.out.println("Recommendations Response: " + recommendationsResponse);
    }

    private static String sendGetRequest(String url) {
        try {
            URL apiUrl = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Authorization", "Bearer " + ACCESS_TOKEN);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            return response.toString();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
