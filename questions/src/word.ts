export async function GenerateNewWord(env: Env, ctx: ExecutionContext) {
    try {
        const AI = env.AI;
        const KV = env.KV;
        const ai_response = await AI.run("@cf/meta/llama-2-7b-chat-fp16", {
            prompt: "Give me a single word subject for 20 questions. Only respond with that word."
        }
        );
        // @ts-ignore
        const word: string = ai_response['response'].split("\n")[1];
        const res = await KV.put("today_word", word);
        return 0;
    } catch (error) {
        console.error(error);
        return -1;
    }
}

export async function CheckWord(env: Env, word: string) {
    try {
        const KV = env.KV;
        const today_word = await KV.get("today_word");
        if (today_word === null) {
            return false;
        } else {
            if (today_word.trim().toLowerCase() === word.trim().toLowerCase()) {
                return true;
            } else {
                return false;
            }
        }

    } catch (error) {
        console.error(error);
        return false;
    }

}
