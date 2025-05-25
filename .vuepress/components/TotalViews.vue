<template>
  <div class="total-views">
    <span>Total Views: {{ totalViews }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalViews: "Loading...",
    };
  },
  mounted() {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/client.js";
      script.onload = () => {
        window.gapi.load("client", () => {
          window.gapi.client.init({
            apiKey: "4ac92dbfa6878cce2e6dadd3e772efd82f6261d6", // From Google Cloud Console
            clientId: "107006201799679366649", // From Google Cloud OAuth
            scope: "https://www.googleapis.com/auth/analytics.readonly",
          }).then(() => {
            return window.gapi.client.request({
              path: "/analytics/v3/data/ga",
              params: {
                ids: "ga:YOUR_VIEW_ID",
                "start-date": "2025-01-01",
                "end-date": "today",
                metrics: "ga:pageviews",
              },
            });
          }).then((response) => {
            this.totalViews = response.result.totalsForAllResults["ga:pageviews"];
          }).catch((error) => {
            console.error("GA API Error:", error);
            this.totalViews = "N/A";
          });
        });
      };
      document.head.appendChild(script);
    }
  },
};
</script>