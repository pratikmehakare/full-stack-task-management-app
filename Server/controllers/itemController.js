const Item = require("../models/Item");

exports.getItem = async (req, res) => {
  try {
    const items = await Item.find();

    if (items.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No items found.",
      });
    }

    res.status(200).json({
        items,
      success: true,
      message: "Fetched successfully.",
    });
  } catch (error) {
    console.error("Error while fetching items:", error.message);
    res.status(500).json({
      success: false,
      message: "Error while fetching items.",
      error: error.message,
    });
  }
};


exports.addItem = async (req, res) => {
    try {
        const { title, category, price, image } = req.body;

        if (!title || !category || price == null || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const newItem = new Item({ title, category, price, image });
        await newItem.save();

        res.status(201).json({
            success: true,
            message: "Item added successfully.",
            item: newItem
        });

    } catch (error) {
        console.error("Error while adding item:", error.message);
        res.status(500).json({
            success: false,
            message: "Error while adding item.",
            error: error.message
        });
    }
};
