import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["Full-Time", "Part-Time", "Remote", "Internship"],
  },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: {
    type: String,
    required: true,
    enum: [
      "Under $50K",
      "$50K - 60K",
      "$60K - 70K",
      "$70K - 80K",
      "$80K - 90K",
      "$90K - 100K",
      "$100K - 125K",
      "$125K - 150K",
      "$150K - 175K",
      "$175K - 200K",
      "Over $200K",
    ],
  },
  company: {
    name: { type: String, required: true },
    description: { type: String },
    contactEmail: { type: String, required: true, match: /.+\@.+\..+/ },
    contactPhone: { type: String },
  },
  postDate: { type: Date, default: Date.now },
});

export const Job = mongoose.model("Job", jobSchema);
