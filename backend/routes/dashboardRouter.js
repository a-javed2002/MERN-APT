import express from 'express';
import { getCounts } from '../controllers/dashboardController.js'
import { requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

//routing
router.get('/counts', async (req, res) => {
    try {
        const counts = await getCounts();
        res.json(counts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;