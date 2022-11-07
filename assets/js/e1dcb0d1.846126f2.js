"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[2383],{8624:function(e,n,t){t.d(n,{v:function(){return i}});var o=t(7294),a=t(7674),i=Object.assign({},a.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});n.Z=function(e){var n=e.options,t=void 0===n?i:n,r=e.children;return o.createElement(a.qs.Provider,{value:t},o.createElement(a.dZ,null,r))}},3792:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=t(7674),l=t(8624),c=["components"],s={title:"Wavelink Audio Player"},d="About",u={unversionedId:"voice/playing",id:"voice/playing",title:"Wavelink Audio Player",description:"Pycord and Wavelink try to keep the playing of audio as simple and easy as possible, to keep making Discord",source:"@site/docs/voice/playing.mdx",sourceDirName:"voice",slug:"/voice/playing",permalink:"/voice/playing",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/voice/playing.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1667836577,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{title:"Wavelink Audio Player"},sidebar:"defaultSidebar",previous:{title:"Voice",permalink:"/voice/"},next:{title:"Receiving Voice Samples",permalink:"/voice/receiving"}},p={},m=[{value:"Starting out",id:"starting-out",level:2},{value:"Making a play command",id:"making-a-play-command",level:3},{value:"Adding connect events",id:"adding-connect-events",level:3}],k={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about"},"About"),(0,i.kt)("p",null,"Pycord and Wavelink try to keep the playing of audio as simple and easy as possible, to keep making Discord\nbots of any kind easy for all audiences. This guide provides simple and easy examples of using the\naudio playing feature."),(0,i.kt)("p",null,"For users that want extra examples, you can find some in Pycord's\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/pycord/blob/master/examples/"},"GitHub repository"),"."),(0,i.kt)("h2",{id:"starting-out"},"Starting out"),(0,i.kt)("p",null,"First you need to run a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/freyacodes/Lavalink"},"Lavalink Server")," to connect with.\nThere a multiple documentations to do this, so we are not covering that here."),(0,i.kt)("p",null,"You also need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PythonistaGuild/Wavelink"},"wavelink")," library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Installing wavelink"',title:'"Installing','wavelink"':!0},"python3 -m pip install wavelink\n")),(0,i.kt)("p",null,"You will now want to connect to your server via a node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Connect Node with Lavalink"',title:'"Connect',Node:!0,with:!0,'Lavalink"':!0},'import discord\nimport wavelink\n\nbot = discord.Bot()\n\nasync def connect_nodes():\n  """Connect to our Lavalink nodes."""\n  await bot.wait_until_ready() # wait until the bot is ready\n\n  await wavelink.NodePool.create_node(\n    bot=bot,\n    host=\'0.0.0.0\',\n    port=2333,\n    password=\'youshallnotpass\'\n  ) # create a node\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now you are finished making your node! Next, you will want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Making a play command"),(0,i.kt)("li",{parentName:"ol"},"Adding connect events")),(0,i.kt)("h3",{id:"making-a-play-command"},"Making a play command"),(0,i.kt)("p",null,"To make a play command, you will need to make a function to connect and play audio in a voice channel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Play Command Example"',title:'"Play',Command:!0,'Example"':!0},'@bot.slash_command(name="play")\nasync def play(ctx, search: str):\n  vc = ctx.voice_client # define our voice client\n\n  if not vc: # check if the bot is not in a voice channel\n    vc = await ctx.author.voice.channel.connect(cls=wavelink.Player) # connect to the voice channel\n\n  if ctx.author.voice.channel.id != vc.channel.id: # check if the bot is not in the voice channel\n    return await ctx.respond("You must be in the same voice channel as the bot.") # return an error message\n\n  song = await wavelink.YouTubeTrack.search(query=search, return_first=True) # search for the song\n\n  if not song: # check if the song is not found\n    return await ctx.respond("No song found.") # return an error message\n\n  await vc.play(song) # play the song\n  await ctx.respond(f"Now playing: `{vc.source.title}`") # return a message\n')),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"play")),"Now playing:  ",(0,i.kt)("code",null,"Never Gonna Give You Up"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now that you've done this, the only thing left to do is make your connect events."),(0,i.kt)("h3",{id:"adding-connect-events"},"Adding connect events"),(0,i.kt)("p",null,"The final step to this guide is connecting the node to your server when the bot goes online."),(0,i.kt)("p",null,"To make it, you will want to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Adding connect events"',title:'"Adding',connect:!0,'events"':!0},'@bot.event\nasync def on_ready():\n  await connect_nodes() # connect to the server\n\n@bot.event\nasync def on_wavelink_node_ready(node: wavelink.Node):\n  print(f"{node.identifier} is ready.") # print a message\n\nbot.run("token")\n')),(0,i.kt)("p",null,"Congratulations! You have now implemented voice playing into your bot! Most bots and Discord API\nwrappers don't have this as a feature, so this is quite an accomplishment. Thankfully, Pycord makes\nit easy to make complex bots so that you can get even the most advanced of ideas down."),(0,i.kt)("admonition",{title:"Related Topics",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../getting-started/rules-and-common-practices"},"Rules and Common Practices")))))}v.isMDXComponent=!0}}]);