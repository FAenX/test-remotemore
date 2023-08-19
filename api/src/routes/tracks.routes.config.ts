import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import axios from 'axios';

export class TracksRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TracksRoutes');
    }

    configureRoutes() {
        // (we'll add the actual route configuration here next)
        this.app.route(`/artist`)
        .get((req: express.Request, res: express.Response) => {
            console.log(req.query)
            const q = req.query.q
            const url = `https://api.deezer.com/artist/` + q;
            console.log(q);

            axios.get(url)
            .then((response) => {
                    console.log(response.data);
                    res.status(200).send(response.data);
            }).catch((error) => {
                console.log(error);
                res.status(500).send(error);
            });
        })


        this.app.route(`/tracks`)
        .get((req: express.Request, res: express.Response) => {
            console.log(req.query)
            const q = req.query.q
            const url = `https://api.deezer.com/` + q;
            console.log(q);

            axios.get(url)
            .then((response) => {
                    console.log(response.data);
                    res.status(200).send(response.data);
            }).catch((error) => {
                console.log(error);
                res.status(500).send(error);
            });
        })


        this.app.route(`/search`)
        .get((req: express.Request, res: express.Response) => {
            console.log(req.query)
            const q = req.query.q
            console.log(q);

            (async ()=>{
                const response = await axios.get(`https://api.deezer.com/search?q=${q}`);
                console.log(response.data);
                res.status(200).send(response.data);
            })();

        })

        return this.app;
    }

}