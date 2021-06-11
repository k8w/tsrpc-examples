import { Chatroom } from "./Chatroom";

document.querySelectorAll('.chat-room').forEach((v, i) => {
    new Chatroom(v as HTMLDivElement, {
        title: `Client #${i + 1}`
    });
});

export { };
