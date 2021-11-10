import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
" " //token
);

gateway.on("message", (m) => {
    if (m.channel_id===" ") //neds channel id between quotes 
        let content = m.content ? m.content : { embeds: [m.embeds[0]] };
        client.sendWebhook(" ", content) //put webhook in quotes
  }
});
