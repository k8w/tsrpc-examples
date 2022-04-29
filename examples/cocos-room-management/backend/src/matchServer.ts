import { MatchServer } from "./MatchServer/MatchServer";

// env config
const port = parseInt(process.env['PORT'] || '3000');

export const matchServer = new MatchServer({
    port: port
});

// Entry function
async function main() {
    await matchServer.init();
    await matchServer.start();
}
main();

