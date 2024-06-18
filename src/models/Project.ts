import mongoose from "mongoose";

const { Schema } = mongoose;
const techUsedSchema = new Schema({
  value: {
    type: String,
    required: [true, "Tech value is required!"],
    trim: true,
  },
  label: {
    type: String,
    required: [true, "Tech label is required!"],
    trim: true,
  }
});
const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required!"],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, "Short Overview is required!"],
      trim: true,
    },
    
    techUsed: {
      type: [techUsedSchema],
      required: [true, "Tech used is required!"],
    },
    coverImage: {
      type: String,
      required: [true, "Hero Section thumbnail is required!"],
      trim: true,
    },
    fullPageImage: {
      type: String,
      required: [true, "Full Landing Section thumbnail is required!"],
      trim: true,
    },
    githubLink: {
      type: String,
      required: [true, "githubLink is required!"],
      trim: true,
    },
    liveLink: {
      type: String,
      required: [true, "Live Preview link is required!"],
      trim: true,
    },
    videoLink: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      enum: ["personal", "professional", "assignment"],
      required: [true, "category is required!"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project ?? mongoose.model("Project", ProjectSchema);

export default Project;
