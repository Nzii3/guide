"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[6336],{5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),o=n(6010),r="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),o=n(7294),r=n(6010),s=n(2389),i=n(7392),l=n(7094),m=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,s=e.lazy,p=e.block,u=e.defaultValue,h=e.values,k=e.groupId,g=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==x&&!b.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.U)(),w=v.tabGroupChoices,N=v.setTabGroupChoices,C=(0,o.useState)(x),T=C[0],D=C[1],E=[],P=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var M=w[k];null!=M&&M!==T&&b.some((function(e){return e.value===M}))&&D(M)}var H=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==T&&(P(t),D(a),null!=k&&N(k,String(a)))},K=function(e){var t,n=null;switch(e.key){case"Enter":H(e);break;case"ArrowRight":var a,o=E.indexOf(e.currentTarget)+1;n=null!=(a=E[o])?a:E[0];break;case"ArrowLeft":var r,s=E.indexOf(e.currentTarget)-1;n=null!=(r=E[s])?r:E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:K,onClick:H},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},8624:function(e,t,n){n.d(t,{v:function(){return r}});var a=n(7294),o=n(7674),r=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?r:t,s=e.children;return a.createElement(o.qs.Provider,{value:n},a.createElement(o.dZ,null,s))}},3678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(7674),i=n(8624),l=n(5488),m=n(5162),d=["components"],c={title:"Prefixed Commands",description:"Learn how to use the commands extension for Pycord."},p=void 0,u={unversionedId:"extensions/commands/prefixed-commands",id:"extensions/commands/prefixed-commands",title:"Prefixed Commands",description:"Learn how to use the commands extension for Pycord.",source:"@site/docs/extensions/commands/prefixed-commands.mdx",sourceDirName:"extensions/commands",slug:"/extensions/commands/prefixed-commands",permalink:"/extensions/commands/prefixed-commands",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/extensions/commands/prefixed-commands.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1667836577,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{title:"Prefixed Commands",description:"Learn how to use the commands extension for Pycord."},sidebar:"defaultSidebar",previous:{title:"Help Command",permalink:"/extensions/commands/help-command"},next:{title:"Pages",permalink:"/category/pages"}},h={},k=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:k};function f(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before Discord added slash commands, all bots had prefixed commands. A user would type the bot's prefix\nfollowed by a word or phrase to invoke a command, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"?help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"!help"),".\nHowever, this prefixed commands system isn't native to Discord! Developers made use of an ",(0,r.kt)("inlineCode",{parentName:"p"},"on_message"),'\nevent to check if the message began with a certain character, then invoke the command. Every time a\nmessage was sent, the bot would see the message and check for its "prefix"'),(0,r.kt)("p",null,"The syntax becomes a little more complicated when you want to have multiple commands. There are several\ndisadvantages to this system. This is where the commands extension comes in. ",(0,r.kt)("inlineCode",{parentName:"p"},"ext.commands")," has\nvarious advantages, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simpler syntax"),(0,r.kt)("li",{parentName:"ul"},"Easier to use"),(0,r.kt)("li",{parentName:"ul"},"Easier to parse user input"),(0,r.kt)("li",{parentName:"ul"},"Comes with built-in help commands"),(0,r.kt)("li",{parentName:"ul"},"Comes with a built-in system for categorizing commands")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"0",label:"Using Events to Create Prefixed Commands",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Prefixed Commands with Events"',title:'"Prefixed',Commands:!0,with:!0,'Events"':!0},'import discord\n\nclient = discord.Client()\n\n@client.event\nasync def on_message(message):\n    if message.content.startswith("!ping"):\n        await message.channel.send("Pong!")\n\n    elif message.content.startswith("!announce"):\n        if len(message.content.split(" ")) < 3:\n            await message.channel.send("You need to specify a title and a message. Correct usage: `!announce Hello Hello everyone!`")\n            return\n\n        msg = message.content.split(" ", 2)\n        title = msg[1]\n        content = msg[2]\n\n        await message.channel.send("**{}**\\n{}".format(title, content))\n\n    elif message.content.startswith("!"):\n        await message.channel.send("Unknown command.")\n')),(0,r.kt)(i.Z,{mdxType:"DiscordComponent"},(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!ping"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Pong!"),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!announce Hello Hello World!"),(0,r.kt)(s.kK,{profile:"robocord",t:!0,mdxType:"DiscordMessage"},(0,r.kt)("strong",null,"Hello"),(0,r.kt)("br",null),"Hello World!"),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Unknown Command."))),(0,r.kt)(m.Z,{value:"1",label:"Using the Commands Extension",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="The Commands Extension"',title:'"The',Commands:!0,'Extension"':!0},'import discord\nfrom discord.ext import commands\n\nbot = commands.Bot(command_prefix="!")\n\n@bot.command()\nasync def ping(ctx):\n    await ctx.send("Pong!")\n\n@bot.command()\nasync def announce(ctx, title, *, message):\n    await ctx.send("**{}**\\n{}".format(title, message))\n\n@bot.event\nasync def on_command_error(ctx, error):\n    if isinstance(error, commands.CommandNotFound):\n        await ctx.send("Unknown command.")\n')),(0,r.kt)(i.Z,{mdxType:"DiscordComponent"},(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!ping"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Pong!"),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!announce Hello Hello World!"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,r.kt)("strong",null,"Hello"),(0,r.kt)("br",null),"Hello World!"),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!pycord"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Unknown command."),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,r.kt)("code",null,"No Category:",(0,r.kt)("br",null),(0,r.kt)("div",{style:{paddingLeft:"2em"}},"!help Shows this message",(0,r.kt)("br",null),"!ping",(0,r.kt)("br",null),"!announce"),(0,r.kt)("br",null),"Type !help command for more info on a command.",(0,r.kt)("br",null),"You can also type !help category for more info on a category."))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The commands extension has many more uses. This example only showcases the basic features mentioned\nin the previous example. Other things you can do with the commands extension include using a different\nbuilt-in help command and creating your own. The following tutorials showcase these.")))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Before we check out the syntax, let's take a look at the bot classes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"discord.Client")," - Contains only events."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"discord.Bot")," - Subclasses ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.Client"),", adds commands."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"discord.ext.commands.Bot")," - Subclasses ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.Bot"),", adds prefixed commands, cogs, and more.")),(0,r.kt)("p",null,"This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.ext.commands.Bot")," has both slash commands and prefixed commands, as well as\nevents, cogs and more."),(0,r.kt)("p",null,"Now let's look at the syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="A Simple Prefixed Bot"',title:'"A',Simple:!0,Prefixed:!0,'Bot"':!0},'import discord\nfrom discord.ext import commands # Import the commands extension\n# discord.ext.commands are not the same as discord.commands!\n\nbot = commands.Bot(command_prefix="!") # You can change the command prefix to whatever you want.\n\n@bot.command() # This is the decorator we use to create a prefixed command.\nasync def ping(ctx): # This is the function we will use to create the command.\n    await ctx.send("Pong!") # This is the response the bot will send.\n\n\nbot.run("token") # Run the bot with your token.\n')),(0,r.kt)(i.Z,{mdxType:"DiscordComponent"},(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!ping"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Pong!"),(0,r.kt)(s.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help"),(0,r.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,r.kt)("code",null,"No Category:",(0,r.kt)("br",null),(0,r.kt)("div",{style:{paddingLeft:"2em"}},"!help Shows this message",(0,r.kt)("br",null),"!ping"),(0,r.kt)("br",null),"Type !help command for more info on a command.",(0,r.kt)("br",null),"You can also type !help category for more info on a category."))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The help command is a built-in command and is enabled by default. You will learn more about it in the\nfollowing guides.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Prefixed commands can take parameters, just like slash commands. You can specify the parameters in\nthe function itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Parameters Example 1"',title:'"Parameters',Example:!0,'1"':!0},"@bot.command()\nasync def echo(ctx, *, message):\n    await ctx.send(message)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," is the context of the message. ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," means that the parameter can be any number of words. ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"\nis the parameter. If you had not passed ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," would only have been one word."),(0,r.kt)("p",null,"For example, if a user had used ",(0,r.kt)("inlineCode",{parentName:"p"},"!echo hello world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," would have been ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),". Since we\npassed ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world"),", or the rest of the message."),(0,r.kt)("p",null,"We can pass multiple parameters too!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Parameters Example 2"',title:'"Parameters',Example:!0,'2"':!0},'@bot.command()\nasync def echo(ctx, channel:discord.TextChannel, title, *, message):\n    await channel.send("**{}**\\n{}".format(title, message))\n')),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," is a parameter that is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.TextChannel"),". When you\nspecify the type of the parameter, Pycord will automatically try to convert the parameter to that type.\nThat is why you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"channel.send")," directly without needing to convert it first."),(0,r.kt)("p",null,"We also have a new parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),". This does not have a type, so it will be a string. ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," means\nthat the rest of the message belongs to the next parameter, in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,r.kt)("p",null,"When a user types ",(0,r.kt)("inlineCode",{parentName:"p"},"!echo #general Greetings! Hello World!"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," will be the text channel\n",(0,r.kt)("inlineCode",{parentName:"p"},"#general"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Greetings!")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!"),"."),(0,r.kt)("p",null,"Let's take an example where the user passes ",(0,r.kt)("inlineCode",{parentName:"p"},"!echo #general Holiday Greetings! Greetings to you all!"),'.\nHere, the user wants the title to be "Holiday Greetings!" and the message to be "Greetings to you all!".\nHowever, since Pycord parses the message at whitespaces, the title will end up being "Holiday" and the\nmessage "Greetings! Greetings to you all!". The user can prevent this by typing ',(0,r.kt)("inlineCode",{parentName:"p"},'!echo "Holiday\nGreetings!" Greetings to you all!'),"."),(0,r.kt)(i.Z,{mdxType:"DiscordComponent"},(0,r.kt)(s.kK,{author:"Santa Claus",avatar:"blue",mdxType:"DiscordMessage"},"!echo #general Holiday Greetings! Greetings to you all!"),(0,r.kt)(s.kK,{author:"Elf",avatar:"red",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("strong",null,"Holiday"),(0,r.kt)("br",null),"Greetings! Greetings to you all!"),(0,r.kt)(s.kK,{author:"Mrs. Claus",avatar:"green",mdxType:"DiscordMessage"},'!echo #general "Holiday Greetings!" Greetings to you all!'),(0,r.kt)(s.kK,{author:"Elf",avatar:"red",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)("strong",null,"Holiday Greetings!"),(0,r.kt)("br",null),"Greetings to you all!")),(0,r.kt)("p",null,"Let's check out another example for parameters and parameter types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Parameters Example 3"',title:'"Parameters',Example:!0,'3"':!0},'import random\n\n@bot.command()\nasync def gtn(ctx, guess:int):\n    number = random.randint(1, 10)\n    if guess == number:\n        await ctx.send("You guessed it!)\n    else:\n        await ctx.send("Nope! Better luck next time :)")\n')),(0,r.kt)("p",null,"If you had not specified the type of the parameter, it would have been a string. And since ",(0,r.kt)("inlineCode",{parentName:"p"},'"5"')," is not\nthe same as ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),' in python, the bot would have responded with "Nope! Better luck next time :)".\nEven if you do not specify the type of the parameter, you can still convert it later on, in this case,\nwith ',(0,r.kt)("inlineCode",{parentName:"p"},"int(guess)"),"."),(0,r.kt)("admonition",{title:"Related Topics",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"groups"},"Command Groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../Getting-Started/rules-and-common-practices"},"Rules and Common Practices")))))}f.isMDXComponent=!0}}]);