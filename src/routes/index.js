import { Router } from 'express';

const router = Router();

/** Healthcheck */
router.get("/healthcheck", async (req, res)=>{
    res.status(200);
    res.send({service: 'online'});
});


export default router;