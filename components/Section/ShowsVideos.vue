
<script setup>

const props = defineProps({
  videos: {
    type: Array,
    required: true
  }
})
  /**
   * Extracts the appropriate embed URL from a YouTube or Vimeo link.
   * Returns an empty string if the format is unrecognized or invalid.
   */
  function getEmbedUrlFromVideoLink(videoLink) {
    if (!videoLink) return ''
  
    try {
      const parsedUrl = new URL(videoLink)
      const hostname = parsedUrl.hostname
      const pathname = parsedUrl.pathname
  
      // YouTube - long link
      if (hostname.includes('youtube.com')) {
        const videoId = parsedUrl.searchParams.get('v')
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
      }
  
      // YouTube - short link
      if (hostname.includes('youtu.be')) {
        const videoId = pathname.slice(1)
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
      }
  
      // Vimeo
      if (hostname.includes('vimeo.com')) {
        const videoId = pathname.split('/').pop()
        return videoId ? `https://player.vimeo.com/video/${videoId}` : ''
      }
  
      return ''
    } catch (error) {
      return ''
    }
  }
</script>

<template>
    <div class="mainWidth marTop50" v-if="videos.length">
      <!-- <h3 class="creditTitle bodyTitle lightText credtitLeftBox">
        Vidéos
      </h3> -->
  
      <div class="video-grid marTop20">
        <div
          v-for="video in videos"
          :key="video.id"
          class="video-item"
        >
          <iframe
            v-if="getEmbedUrlFromVideoLink(video.link)"
            :src="getEmbedUrlFromVideoLink(video.link)"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
          <p v-else class="error-text">Lien vidéo invalide</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .video-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .video-item {
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    aspect-ratio: 16 / 9;
  }
  
  .video-item iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  
  .error-text {
    color: red;
    font-size: 0.9em;
  }
  </style>