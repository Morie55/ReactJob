import express from "express";
const router = express.Router();
import { Job } from "../models/jobModel.js";

// Create a new job entry
router.post("/", async (req, res) => {
  try {
    const { title, type, location, description, salary, company } = req.body;

    // Validate all required fields
    if (
      !title ||
      !type ||
      !location ||
      !description ||
      !salary ||
      !company.name ||
      !company.contactEmail
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Create a new job entry
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();

    // Send the saved job as a response
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all job entries
router.get("/", async (req, res) => {
  try {
    const params = req.query;

    const jobs = await Job.find().limit(params._limit);
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get a job entry by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

//Update a job entry by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, type, location, description, salary, company } = req.body;

    if (
      !title ||
      !type ||
      !location ||
      !description ||
      !salary ||
      !company ||
      !company.name ||
      !company.contactEmail
    ) {
      return res.status(400).json({
        message: "All required fields must be provided.",
      });
    }

    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(updatedJob);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Delete a job entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await Job.findByIdAndDelete(id);

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
