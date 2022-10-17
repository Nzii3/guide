"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[8339],{8624:function(e,t,o){o.d(t,{v:function(){return r}});var n=o(7294),i=o(7674),r=Object.assign({},i.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,o=void 0===t?r:t,a=e.children;return n.createElement(i.qs.Provider,{value:o},n.createElement(i.dZ,null,a))}},9384:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return u}});var n=o(7462),i=o(3366),r=(o(7294),o(3905)),a=o(7674),d=o(8624),s=["components"],m={title:"Bridge"},c=void 0,l={unversionedId:"extensions/bridge/index",id:"extensions/bridge/index",title:"Bridge",description:"Concept",source:"@site/docs/extensions/bridge/index.mdx",sourceDirName:"extensions/bridge",slug:"/extensions/bridge/",permalink:"/extensions/bridge/",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/extensions/bridge/index.mdx",tags:[],version:"current",lastUpdatedBy:"BobDotCom",lastUpdatedAt:1666046498,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Bridge"},sidebar:"defaultSidebar",previous:{title:"Extensions",permalink:"/category/extensions"},next:{title:"Commands",permalink:"/category/commands"}},p={},u=[{value:"Concept",id:"concept",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Using Bridge Commands in a Cog",id:"using-bridge-commands-in-a-cog",level:3},{value:"Deferring",id:"deferring",level:3},{value:"Options",id:"options",level:3}],b={toc:u};function g(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"Let's say that you want to make a command that is both a Slash Command and a Prefixed Command. Now, you could just copy and paste the code from the first command callback to the other and make some adjustments, but that's not very efficient."),(0,r.kt)("p",null,"This is where the ",(0,r.kt)("inlineCode",{parentName:"p"},"ext.bridge")," module comes in. It allows you to use one callback to make both a Slash Command and a Prefixed Command."),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import discord\nfrom discord.ext import bridge\n\nintents = discord.Intents()\nintents.message_content = True\n\nbot = bridge.Bot(command_prefix="!", intents=intents)\n\n@bot.bridge_command()\nasync def hello(ctx):\n  await ctx.respond("Hello!")\n\nbot.run("TOKEN")\n')),(0,r.kt)(d.Z,{mdxType:"DiscordComponent"},(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"hello")),"Hello!"),(0,r.kt)(a.kK,{profile:"bob",mdxType:"DiscordMessage"},"!hello"),(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",highlight:!0,mdxType:"DiscordInteraction"},"!hello")),"Hello!")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"First, instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.Bot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"commands.Bot"),", we use ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge.Bot"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge.Bot")," does inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"commands.Bot"),", so you can do anything with ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge.Bot")," that ",(0,r.kt)("inlineCode",{parentName:"p"},"commands.Bot")," can do.\nThen, we define a command with ",(0,r.kt)("inlineCode",{parentName:"p"},"@bot.bridge_command()"),". This makes a Bridge Command, which has both a Prefixed Command counterpart and a Slash Command counterpart.\nNext, the callback has access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," object, which is the context of the command. This context is either of ",(0,r.kt)("inlineCode",{parentName:"p"},"BridgeApplicationContext")," type or ",(0,r.kt)("inlineCode",{parentName:"p"},"BridgeExtContext"),". Because of that, it makes detecting how the function was called easier."),(0,r.kt)("h3",{id:"using-bridge-commands-in-a-cog"},"Using Bridge Commands in a Cog"),(0,r.kt)("p",null,"Like Slash Commands and Prefixed Commands, you can use Bridge Commands in a Cog. You can do this by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge_command")," decorator. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import discord\nfrom discord.ext import bridge, commands\n\nclass Greetings(commands.Cog):\n    def __init__(self, bot):\n        self.bot = bot\n\n    @bridge.bridge_command()\n    async def hello(self, ctx):\n        await ctx.respond("Hello!")\n\n    @bridge.bridge_command()\n    async def bye(self, ctx):\n        await ctx.respond("Bye!")\n        \ndef setup(bot):\n    bot.add_cog(Greetings(bot))\n')),(0,r.kt)("p",null,"The cog will automatically split the Bridge Command into their Slash Command and Prefixed Command counterparts."),(0,r.kt)(d.Z,{mdxType:"DiscordComponent"},(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"hello")),"Hello!"),(0,r.kt)(a.kK,{profile:"bob",mdxType:"DiscordMessage"},"!hello"),(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",highlight:!0,mdxType:"DiscordInteraction"},"!hello")),"Hello!"),(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"bye")),"Bye!"),(0,r.kt)(a.kK,{profile:"bob",mdxType:"DiscordMessage"},"!bye"),(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",highlight:!0,mdxType:"DiscordInteraction"},"!bye")),"Bye!")),(0,r.kt)("h3",{id:"deferring"},"Deferring"),(0,r.kt)("p",null,"You can defer if you want to communicate to the user that your bot is busy processing the command. This is done by using ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.defer()"),". For the Slash Command implementation, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.defer()"),' calls the function that gives out a "Bot is thinking" message. For the Prefixed Command implementation, ',(0,r.kt)("inlineCode",{parentName:"p"},"ctx.defer()")," enables the typing indicator."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Options are pretty straightforward. You just specify them like you do with prefixed commands, and you're all set!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import discord\nfrom discord.ext import bridge\n\nintents = discord.Intents()\nintents.message_content = True\n\nbot = bridge.Bot(command_prefix="!", intents=intents)\n\n@bot.bridge_command()\nasync def sum(ctx, a: int, b: int):\n  await ctx.respond(a + b)\n\nbot.run("TOKEN")\n')),(0,r.kt)(d.Z,{mdxType:"DiscordComponent"},(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"sum")),"4"),(0,r.kt)(a.kK,{profile:"bob",mdxType:"DiscordMessage"},"!sum 2 2"),(0,r.kt)(a.kK,{profile:"robocord",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(a.un,{profile:"bob",highlight:!0,mdxType:"DiscordInteraction"},"!sum 2 2")),"4")))}g.isMDXComponent=!0}}]);