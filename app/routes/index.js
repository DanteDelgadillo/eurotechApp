const router = require("express").Router();
const CustomerCarFormRoutes = require("./CustomerCarForm.routes");
const CustomerLibraryRoutes = require("./CustomerLibrary.routes");

module.exports = router;

// API routes (group routing modules here - no empty lines between)
router.use("/api/customer", CustomerCarFormRoutes);
router.use("/api/customerLibrary", CustomerLibraryRoutes);

// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router);

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/api/*", (req, res, next) => {
    res.sendStatus(404);
  });

  // Handle API 500
  router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}
