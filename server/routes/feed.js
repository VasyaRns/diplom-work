import express from 'express';
import feedUrls from "../urls/feedUrls.js";
import {handleFeedRequest} from  "../utils/handleFeedRequest.js"
const router = express.Router();

router.get('/:name', async (req, res) => {
    await handleFeedRequest(req, res, feedUrls);
});
export default router;