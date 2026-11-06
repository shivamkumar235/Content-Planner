const jwt = require("jsonwebtoken");
const noteModel = require("../models/notes.model");
// console.log(typeof authMiddleware, typeof createNote);

async function createNote(req, res) {
  try {
    const {
      theam,
      title,
      description,
      cotegory,
      status,
      youtube,
      instagram,
      facebook,
      priority,
      date,
    } = req.body;

    const note = await noteModel.create({
      theam,
      title,
      description,
      cotegory,
      status,
      youtube,
      instagram,
      facebook,
      priority,
      date,
      user: req.user.id,
    });

    res.status(201).json({ message: "note ban gaya", note });
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
}

async function getMyNotes(req, res) {
  try {
    // yahi token check dobara

    const notes = await noteModel.find({ user: req.user.id }).populate("user");
    res.status(200).json({ notes });
  } catch (err) {
    return res.status(500).json({ message: "invalid token" });
  }
}

async function getpriorityNotes(req, res) {
  try {
    const higher = await noteModel
      .find({ user: req.user.id, priority: "High" })
      .sort({ createdAt: -1 }) // naye notes pehle
      .limit(4);

    const recent = await noteModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 }) // naye notes pehle
      .limit(4);
    res.status(200).json({ higher, recent });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "server error" });
  }
}

async function getIdeaNotes(req, res) {
  try {
    const idea = await noteModel.find({ user: req.user.id, status: "Idea" });
    // naye notes pehle
    res.status(200).json({ idea });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "server error" });
  }
}

async function getEditingNotes(req, res) {
  try {
    const editing = await noteModel.find({
      user: req.user.id,
      status: "Editing",
    });
    // naye notes pehle
    res.status(200).json({ editing });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "server error" });
  }
}

async function getUploadedNotes(req, res) {
  try {
    const uploded = await noteModel.find({
      user: req.user.id,
      status: "idea",
    });
    // naye notes pehle
    res.status(200).json({ uploded });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "server error" });
  }
}

async function deleteNote(req, res) {
  try {
    const note = await noteModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id, // sirf apna note delete ho
    });

    if (!note) {
      return res.status(404).json({ message: "note nahi mila" });
    }

    res.status(200).json({ message: "note delete ho gaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
}

module.exports = {
  createNote,
  getMyNotes,
  getpriorityNotes,
  getIdeaNotes,
  getEditingNotes,
  getUploadedNotes,
  deleteNote,
};
