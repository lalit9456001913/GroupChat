// /src/routes/group.js
const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groups/groupController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new group
router.post('/', authMiddleware.authenticateUser, groupController.createGroup);

// Delete a group
router.delete('/:id', authMiddleware.authenticateUser, groupController.deleteGroup);

// get All groups
router.get("/", authMiddleware.authenticateUser, groupController.getAllGroups);

// get group by id
router.get("/:id", authMiddleware.authenticateUser, groupController.getGroupById);

router.get("/:id/users/:userId", authMiddleware.authenticateUser, groupController.updateGroup)

// get group messages

router.get("/:id/messages", authMiddleware.authenticateUser, groupController.getGroupMessage)

module.exports = router;
