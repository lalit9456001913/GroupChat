const userService = require('../../services/users/userService');

const createUser = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(404).json({ error: 'User Already exist!' });
    }
    const user = await userService.createUser({ username, email, password, isAdmin });
    if (user) {
      const findCreatedUser = await userService.getUserByEmail(email);
      res.status(200).json(findCreatedUser);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const result = await userService.editUser(id, updatedUserData);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists before attempting to delete
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      return res.status(409).json({ error: 'User does not exist!' });
    }

    // If the user exists, proceed with deletion
    const result = await userService.deleteUser(userId);

    if (result.success) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(500).json({ error: 'Error deleting user' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { createUser, editUser, deleteUser, getUserById, getAllUsers };
