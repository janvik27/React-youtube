const GOOGLE_API_KEY = "AIzaSyBS8SpnuS_MKIn5iZFTQc1GAD3WbtHnUn4";

export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
