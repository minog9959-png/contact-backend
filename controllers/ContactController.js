import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message, websiteLink } = req.body;

    // Basic Validation
    if (!name || !email || !message || !websiteLink) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save Data in MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
      websiteLink,
    });

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};