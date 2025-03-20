// Add New Job

import axios from "axios";
const baseURL = "http://localhost:5555/api/";
axios.defaults.baseURL = baseURL;

export const addJob = async (newJob) => {
  try {
    const res = await axios.post("/jobs", newJob);
    return res.data;
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
};

// Delete Job
export const deleteJob = async (id) => {
  try {
    await axios.delete(`/jobs/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

// Update Job
export const updateJob = async (job) => {
  try {
    const res = await axios.put(`/jobs/${job.id}`, job);
    return res.data;
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
};
