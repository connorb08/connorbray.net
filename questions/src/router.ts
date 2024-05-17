import { Router } from "itty-router";
import { CheckWord } from "./word";

const router = Router()

router.get('/', async (request) => {
    return new Response("Hello");
});

router.post('/guess', async (request, env) => {
    try {
        const body: Record<string, unknown> = await request.json();
        const guess = body.guess as string;
        return new Response(`${await CheckWord(env, guess) ? 'correct' : 'incorrect'}`);
    } catch (error) {
        console.error(error);
        return new Response('Error', { status: 500 });
    }

});

router.all('*', () => new Response('Not Found.', { status: 404 }))

export default router;
