// /src/controllers/groupController.js
const groupService = require('../../services/groups/groupService');

// Create a new group
const createGroup = async (req, res) => {
    try {
        const { name, userId: admin, members } = req.body;
        const savedGroup = await groupService.createGroup({ name, admin, members });
        res.status(201).json(savedGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all groups
const getAllGroups = async (req, res) => {
    try {
        const groups = await groupService.getAllGroups();
        res.status(200).json(groups);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a group by ID
const getGroupById = async (req, res) => {
    try {
        const groupId = req.params.id;
        const group = await groupService.getGroupById(groupId);

        if (group) {
            res.status(200).json(group);
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a group by ID
const updateGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.params.userId;
        const updatedGroupData = req.body;
        const getGroup = await groupService.getGroupById(groupId);
        if (getGroup.admin !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        const updatedGroup = await groupService.updateGroupById(groupId, updatedGroupData);

        if (updatedGroup) {
            res.status(200).json(updatedGroup);
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a group by ID
const deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.params.userId;
        const getGroup = await groupService.getGroupById(groupId);
        if (getGroup.admin !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        const result = await groupService.deleteGroupById(groupId);

        if (result) {
            res.status(200).json('Group deleted successfully');
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getGroupMessage = async (req, res) => {
    try {
        const groupId = req.params.id;
        const groupMessages = await groupService.getGroupMessages(groupId);
        res.status(200).json(groupMessages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createGroup, getAllGroups, getGroupById, updateGroup, deleteGroup, getGroupMessage };
