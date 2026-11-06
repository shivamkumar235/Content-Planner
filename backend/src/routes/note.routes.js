const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth.middleware");
const notecontroller = require("../controllers/note.controller");
const router = express.Router();

router.post("/createNotes", authMiddleware, notecontroller.createNote);
router.get("/getNotes", authMiddleware, notecontroller.getMyNotes);
router.get(
  "/getpriorityNotes",
  authMiddleware,
  notecontroller.getpriorityNotes,
);
router.get("/getIdeaNotes", authMiddleware, notecontroller.getIdeaNotes);
router.get("/getEditingNotes", authMiddleware, notecontroller.getEditingNotes);
router.get(
  "/getUploadedNotes",
  authMiddleware,
  notecontroller.getUploadedNotes,
);
router.delete("/deleteNote/:id", authMiddleware, notecontroller.deleteNote);

module.exports = router;
