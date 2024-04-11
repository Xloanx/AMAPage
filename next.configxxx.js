module.exports = {
    // Other Next.js configurations...
    // You can add more configurations here if needed
  
    // Define the location of the favicon
    async headers() {
      return [
        {
          source: '/favicon.png',
          headers: [
            {
              key: 'Content-Type',
              value: 'image/png',
            },
          ],
        },
      ]
    },
  }
  