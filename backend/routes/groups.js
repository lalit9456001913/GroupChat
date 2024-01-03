// /src/routes/group.js
const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groups/groupController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new group
router.post('/', groupController.createGroup);

// Delete a group
router.delete('/:id/users/:userId', groupController.deleteGroup);

// get All groups
router.get("/", groupController.getAllGroups);

// get group by id
router.get("/:id", groupController.getGroupById);

router.get("/:id/users/:userId", groupController.updateGroup)

// get group messages

router.get("/:id/messages", groupController.getGroupMessage)

module.exports = router;
