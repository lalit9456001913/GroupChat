// /src/services/groupService.js
const Group = require('../../models/Group');
const Message = require('../../models/Message');
// Create a new group
const createGroup = async ({ name, admin, members }) => {
  try {
    const group = new Group({ name, admin, members });
    const savedGroup = await group.save();
    return savedGroup;
  } catch (error) {
    throw error;
  }
};

// Get all groups
const getAllGroups = async () => {
  try {
    const groups = await Group.find().populate('members', 'username email');
    return groups;
  } catch (error) {
    throw error;
  }
};

// Get a group by ID
const getGroupById = async (groupId) => {
  try {
    const group = await Group.findById(groupId).populate('admin', 'username email').populate('members', 'username email');
    return group;
  } catch (error) {
    throw error;
  }
};

// Update a group by ID
const updateGroupById = async (groupId, updatedGroupData) => {
  try {
    const group = await Group.findById(groupId);

    if (!group) {
      throw new Error('Group not found');
    }

    // Update group fields
    group.name = updatedGroupData.name || group.name;
    group.admin = updatedGroupData.userId || group.userId;
    group.members = updatedGroupData.members || group.members;

    await group.save();
    return group;
  } catch (error) {
    throw error;
  }
};

// Delete a group by ID
const deleteGroupById = async (groupId) => {
  try {
    const result = await Group.deleteOne({ _id: groupId });
    return { success: result.deletedCount > 0, deletedCount: result.deletedCount };
  } catch (error) {
    throw error;
  }
};

const getGroupMessages = async (groupId) => {
  try {
    const groupMessages = await Message.find({ groupId }).sort({ _id: -1 }).limit(10);
    const reversedMessages = [...groupMessages].reverse();
    return reversedMessages;
  } catch (error) {
    throw error;
  }
}

module.exports = { createGroup, getAllGroups, getGroupById, updateGroupById, deleteGroupById, getGroupMessages };
