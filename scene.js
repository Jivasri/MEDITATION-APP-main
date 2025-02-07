import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.util.Duration;

public class VideoModalApp extends Application {
    private Timeline countdownTimer;
    private int timeLeft;
    private MediaPlayer mediaPlayer;

    @Override
    public void start(Stage primaryStage) {
        Button openModalButton = new Button("Open Modal");
        openModalButton.setOnAction(e -> openModal());

        StackPane root = new StackPane(openModalButton);
        Scene scene = new Scene(root, 300, 200);

        primaryStage.setTitle("JavaFX Video Modal");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void openModal() {
        Stage modalStage = new Stage();
        modalStage.initModality(Modality.APPLICATION_MODAL);
        modalStage.setTitle("Video Modal");

        String videoPath = "file:/path/to/your/video.mp4"; // Change this to your local video file
        Media media = new Media(videoPath);
        mediaPlayer = new MediaPlayer(media);
        MediaView mediaView = new MediaView(mediaPlayer);

        Button playPauseButton = new Button("Play/Pause");
        playPauseButton.setOnAction(e -> togglePlayPause());

        Button closeModalButton = new Button("Close Modal");
        closeModalButton.setOnAction(e -> {
            stopCountdown();
            mediaPlayer.stop();
            modalStage.close();
        });

        Button setLoop5MinButton = new Button("Loop 5 Min");
        setLoop5MinButton.setOnAction(e -> setVideoLoop(5));

        StackPane modalLayout = new StackPane(mediaView, playPauseButton, setLoop5MinButton, closeModalButton);
        Scene modalScene = new Scene(modalLayout, 600, 400);

        modalStage.setScene(modalScene);
        modalStage.show();
    }

    private void togglePlayPause() {
        if (mediaPlayer.getStatus() == MediaPlayer.Status.PLAYING) {
            mediaPlayer.pause();
        } else {
            mediaPlayer.play();
        }
    }

    private void setVideoLoop(int minutes) {
        timeLeft = minutes * 60;
        mediaPlayer.play();

        if (countdownTimer != null) {
            countdownTimer.stop();
        }

        countdownTimer = new Timeline(new KeyFrame(Duration.seconds(1), e -> {
            if (timeLeft <= 0) {
                mediaPlayer.pause();
                countdownTimer.stop();
            }
            timeLeft--;
        }));
        countdownTimer.setCycleCount(Timeline.INDEFINITE);
        countdownTimer.play();
    }

    private void stopCountdown() {
        if (countdownTimer != null) {
            countdownTimer.stop();
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
