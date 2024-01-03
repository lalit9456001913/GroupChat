const User = require('../../models/User');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const editUser = async (userId, updatedUserData) => {
  try {
    const user = await User.findById(userId).select('-password -__v');

    if (!user) {
      throw new Error('User does not exist!');
    }

    // Update user fields
    user.username = updatedUserData.username || user.username;
    user.password = updatedUserData.password || user.password;
    user.email = updatedUserData.email || user.email;
    user.isAdmin = updatedUserData.isAdmin || user.isAdmin;

    await user.save();
    return { message: 'User updated successfully', user };
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password -__v');
    return user; // Return true if user exists, false otherwise
  } catch (error) {
    console.error(error);
    throw new Error('Error checking user existence');
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find().select('-password -__v');
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting all users');
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email }).select('-password -__v');

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting user by email');
  }
};

const deleteUser = async (userId) => {
  try {
    const result = await User.deleteOne({ _id: userId });

    return { success: result.deletedCount > 0, deletedCount: result.deletedCount };
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting user');
  }
};

module.exports = { deleteUser };

module.exports = {
  createUser,
  editUser,
  getUserById,
  getAllUsers,
  getUserByEmail,
  deleteUser
}
