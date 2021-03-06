import {Router} from "express";
import HttpStatus from 'http-status-codes';

import users from "./users";
import auth from "./auth";

const router = Router();

router.get('/', (req: any, res: any) => {
    return res.status(HttpStatus.OK).json({
        status: 'active',
    });
});

router.use('/users', users);
router.use('/auth', auth);

export = router;