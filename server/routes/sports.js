import express from 'express';
import {handleFeedRequest} from  "../utils/handleFeedRequest.js"
import sportsUrls from "../urls/sportsUrls.js";
const router = express.Router();

router.get('/:name', async (req, res) => {
    await handleFeedRequest(req, res, sportsUrls);
});
export default router;