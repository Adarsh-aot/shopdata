const User = require('../model/usermodel');

const add = async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = new User({ name, email, age });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  }

  const update = async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email, age } = req.body;
      
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email, age },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      res.status(400).json({ message: 'Error updating user', error: error.message });
    }
  }


  const display = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ message: 'Users retrieved successfully', users });
    } catch (error) {
      res.status(400).json({ message: 'Error retrieving users', error: error.message });
    }
  }

  const displaybyid = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.status(200).json({ message: 'User retrieved successfully', user });
    } catch (error) {
      res.status(400).json({ message: 'Error retrieving user', error: error.message });
    }
  }

  const deletebyid = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findOneAndDelete(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error retrieving user', error: error.message });
    }
  }
module.exports  = {
    add ,
    update , 
    display ,
    displaybyid , 
    deletebyid
}