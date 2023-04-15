const app = require("./app");

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    app.listen(PORT, (error) => {
      if (error) {
        console.error("An error occurred when starting the server", error);
      } else {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log("Ctrl+C to exit.");
      }
    });
  } catch (error) {
    console.error("Something went wrong starting the server:", error);
  }
};

startServer();
