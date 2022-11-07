"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1721],{5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),o=n(6010),i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),o=n(7294),i=n(6010),s=n(2389),l=n(7392),r=n(7094),u=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,s=e.lazy,p=e.block,m=e.defaultValue,h=e.values,b=e.groupId,y=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.l)(w,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.U)(),N=v.tabGroupChoices,T=v.setTabGroupChoices,C=(0,o.useState)(g),_=C[0],B=C[1],S=[],V=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var x=N[b];null!=x&&x!==_&&w.some((function(e){return e.value===x}))&&B(x)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=w[n].value;a!==_&&(V(t),B(a),null!=b&&T(b,String(a)))},I=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,o=S.indexOf(e.currentTarget)+1;n=null!=(a=S[o])?a:S[0];break;case"ArrowLeft":var i,s=S.indexOf(e.currentTarget)-1;n=null!=(i=S[s])?i:S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},y)},w.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return S.push(e)},onKeyDown:I,onClick:D},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},8624:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(7294),o=n(7674),i=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?i:t,s=e.children;return a.createElement(o.qs.Provider,{value:n},a.createElement(o.dZ,null,s))}},2348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return b}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=n(7674),l=n(8624),r=n(5488),u=n(5162),d=["components"],c={title:"Buttons",description:"Learn all about implementing buttons in your Discord Bot using Pycord."},p=void 0,m={unversionedId:"interactions/ui-components/buttons",id:"interactions/ui-components/buttons",title:"Buttons",description:"Learn all about implementing buttons in your Discord Bot using Pycord.",source:"@site/docs/interactions/ui-components/buttons.mdx",sourceDirName:"interactions/ui-components",slug:"/interactions/ui-components/buttons",permalink:"/interactions/ui-components/buttons",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/interactions/ui-components/buttons.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1667836577,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{title:"Buttons",description:"Learn all about implementing buttons in your Discord Bot using Pycord."},sidebar:"defaultSidebar",previous:{title:"UI Components",permalink:"/category/ui-components"},next:{title:"Select Menus",permalink:"/interactions/ui-components/dropdowns"}},h={},b=[{value:"Concept",id:"concept",level:2},{value:"Usage Syntax",id:"usage-syntax",level:2},{value:"Button Styles",id:"button-styles",level:2},{value:"Action Rows",id:"action-rows",level:2},{value:"Disabling Buttons",id:"disabling-buttons",level:2},{value:"Pre-Disabled Buttons",id:"pre-disabled-buttons",level:3},{value:"Disabling Buttons on Press",id:"disabling-buttons-on-press",level:3},{value:"Timeouts",id:"timeouts",level:2},{value:"Persistent Views",id:"persistent-views",level:2},{value:"FAQ",id:"faq",level:2},{value:"How many buttons can I have in a message?",id:"how-many-buttons-can-i-have-in-a-message",level:4},{value:"Can I add more than one view to a message?",id:"can-i-add-more-than-one-view-to-a-message",level:4},{value:"Why are UI Components so confusing?",id:"why-are-ui-components-so-confusing",level:4},{value:'<span id="oop">What is OOP? What is subclassing?</span>',id:"what-is-oop-what-is-subclassing",level:4},{value:"Do buttons need any special permissions?",id:"do-buttons-need-any-special-permissions",level:4},{value:"Should I replace reactions with buttons for my bot?",id:"should-i-replace-reactions-with-buttons-for-my-bot",level:4}],y={toc:b};function k(e){var t=e.components,c=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},y,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On May 26, 2021, Discord added a new interaction called buttons. Instead of reactions, bots could now\nsend buttons and users could use them to interact with bots. This opened up a whole new world of\npossibilities for bots. Soon after, developers made calculators, polls, and games like blackjack, UNO,\nand even Minecraft! Buttons provided a clear and easy to use interface for interacting with bots."),(0,i.kt)("p",null,"So, let's learn how you can add buttons to your bot!"),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("p",null,"Buttons weren't the only update to the interactions system in Discord. Discord also added ",(0,i.kt)("a",{parentName:"p",href:"./dropdowns"},"Select Menus")," and ",(0,i.kt)("a",{parentName:"p",href:"./modal-dialogs"},"Modal Dialogs"),", both of which work very similarly to buttons."),(0,i.kt)("p",null,'These UI elements reside in a "view". To learn more about views, please refer to the\n',(0,i.kt)("a",{parentName:"p",href:"../../interactions"},"interactions page"),"."),(0,i.kt)("h2",{id:"usage-syntax"},"Usage Syntax"),(0,i.kt)("p",null,"Let's see how to create a simple responsive button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nbot = discord.Bot() # Create a bot object\n\nclass MyView(discord.ui.View): # Create a class called MyView that subclasses discord.ui.View\n    @discord.ui.button(label="Click me!", style=discord.ButtonStyle.primary, emoji="\ud83d\ude0e") # Create a button with the label "\ud83d\ude0e Click me!" with color Blurple\n    async def button_callback(self, button, interaction):\n        await interaction.response.send_message("You clicked the button!") # Send a message when the button is clicked\n\n@bot.slash_command() # Create a slash command\nasync def button(ctx):\n    await ctx.respond("This is a button!", view=MyView()) # Send a message with our View class that contains the button\n\nbot.run("TOKEN") # Run the bot\n')),(0,i.kt)("p",null,"Using this command should return the following message:"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(s.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(s.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"button")),"This is a button!",(0,i.kt)("div",{slot:"actions"},(0,i.kt)(s.jr,{mdxType:"DiscordButtons"},(0,i.kt)(s.qD,{type:"primary",emoji:"\ud83d\ude0e",mdxType:"DiscordButton"},"Click me!"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"As you can see, we create a class called ",(0,i.kt)("inlineCode",{parentName:"p"},"MyView")," that ",(0,i.kt)("a",{parentName:"p",href:"#oop"},"subclasses"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ui.View"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.ui.View")),"."),(0,i.kt)("p",null,"Then, we add a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"button_callback")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyView")," class with the decorator\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ui.button"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.ui.button")),".\nThis decorator adds a button to a component. This function takes two arguments: the button that was\nclicked and the interaction. These arguments are passed to the function when the button is clicked\nby the module. We use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.InteractionResponse.send_message"},(0,i.kt)("inlineCode",{parentName:"a"},"interaction.response.send_message")),"\nfunction to send a message to the channel where the interaction was sent."),(0,i.kt)("p",null,"Finally, we create a global slash command called ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," that sends the message, along with the view\nthat contains a button."),(0,i.kt)("p",null,"This is the basic syntax of creating a button. What you create with it is up to you. You can worry\nabout making your button do amazing things, while Pycord handles the rest!"),(0,i.kt)("h2",{id:"button-styles"},"Button Styles"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Color"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Primary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.primary")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.blurple")),(0,i.kt)("td",{parentName:"tr",align:null},"Blurple")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secondary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.secondary")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.grey")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.gray")),(0,i.kt)("td",{parentName:"tr",align:null},"Grey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Success"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.success")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.green")),(0,i.kt)("td",{parentName:"tr",align:null},"Green")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Danger"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.danger")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.red")),(0,i.kt)("td",{parentName:"tr",align:null},"Red")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Link"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.link")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"discord.ButtonStyle.url")),(0,i.kt)("td",{parentName:"tr",align:null},"Grey")))),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ButtonStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.ButtonStyle"))," class for more information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Different Button Styles",src:n(9448).Z,width:"849",height:"508"})),(0,i.kt)("p",null,"You can set a button's style by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," argument in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ui.button"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.ui.button"))," decorator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.button(label="Click me!", style=discord.ButtonStyle.success)\n    async def button_callback(self, button, interaction):\n        await interaction.response.send_message("You clicked the button!")\n')),(0,i.kt)("h2",{id:"action-rows"},"Action Rows"),(0,i.kt)("p",null,"We have discussed that Views can have 5 rows. Each row has 5 slots, and each button takes up 1 slot.\nSo, how do we move the buttons to another row?"),(0,i.kt)("p",null,"This can be done by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"row")," argument in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ui.button"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.ui.button")),"\ndecorator."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"row")," argument"),(0,i.kt)("p",{parentName:"admonition"},"The row argument specifies the relative row this button belongs to. A Discord component can only have 5 rows. By default, items are arranged automatically into those 5 rows. If you\u2019d like to control the relative positioning of the row then passing an index is advised. For example, row=1 will show up before row=2. Defaults to None, which is automatic ordering. The row number must be between 0 and 4 (i.e. zero indexed).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.button(label="Button 1", row=0, style=discord.ButtonStyle.primary)\n    async def first_button_callback(self, button, interaction):\n        await interaction.response.send_message("You pressed me!")\n\n    @discord.ui.button(label="Button 2", row=1, style=discord.ButtonStyle.primary)\n    async def second_button_callback(self, button, interaction):\n        await interaction.response.send_message("You pressed me!")\n')),(0,i.kt)("h2",{id:"disabling-buttons"},"Disabling Buttons"),(0,i.kt)("h3",{id:"pre-disabled-buttons"},"Pre-Disabled Buttons"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.button(label="A button", style=discord.ButtonStyle.primary, disabled=True) # pass `disabled=True` to make the button pre-disabled\n    async def button_callback(self, button, interaction):\n        ...\n\n@bot.command()\nasync def button(ctx):\n    await ctx.send("Press the button!", view=MyView())\n')),(0,i.kt)("h3",{id:"disabling-buttons-on-press"},"Disabling Buttons on Press"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"disabling-a-single-component",label:"Disabling a single component",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n  @discord.ui.button(label="A button", style=discord.ButtonStyle.primary)\n  async def button_callback(self, button, interaction):\n      button.disabled = True # set button.disabled to True to disable the button\n      button.label = "No more pressing!" # change the button\'s label to something else\n      await interaction.response.edit_message(view=self) # edit the message\'s view\n'))),(0,i.kt)(u.Z,{value:"disabling-all-children",label:"Disabling all the components of a view",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.button(emoji="\ud83d\ude00", label="Button 1", style=discord.ButtonStyle.primary)\n    async def button_callback(self, button, interaction):\n        for child in self.children: # loop through all the children of the view\n            child.disabled = True # set the button to disabled\n        await interaction.response.edit_message(view=self)\n\n    @discord.ui.button(label="Button 2", style=discord.ButtonStyle.primary)\n    async def second_button_callback(self, button, interaction):\n        for child in self.children:\n            child.disabled = True\n        await interaction.response.edit_message(view=self)\n')))),(0,i.kt)("h2",{id:"timeouts"},"Timeouts"),(0,i.kt)("p",null,"Sometimes, you want to have a button that is disabled after a certain amount of time. This is where timeouts come in."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"0",label:"Specifying time when creating a view object",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    async def on_timeout(self):\n        for child in self.children:\n            child.disabled = True\n        await self.message.edit(content="You took too long! Disabled all the components.", view=self)\n\n    @discord.ui.button()\n    async def button_callback(self, button, interaction):\n        ...\n\n@bot.command()\nasync def button(ctx):\n    await ctx.send("Press the button!", view=MyView(timeout=30))\n'))),(0,i.kt)(u.Z,{value:"1",label:"Specifying the time when subclassing",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    def __init__(self):\n        super().__init__(timeout=10) # specify the timeout here\n\n    async def on_timeout(self):\n        for child in self.children:\n            child.disabled = True\n        await self.message.edit(content="You took too long! Disabled all the components.", view=self)\n\n    @discord.ui.button()\n    async def button_callback(self, button, interaction):\n        ...\n')))),(0,i.kt)("p",null,"Here, we loop through all the children of the view (buttons and select menus in the view) and disable\nthem. Then, we edit the message to show that the timeout was reached."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_timeout")," coroutine is not present, the components will simply stop working after the specified time.")),(0,i.kt)("h2",{id:"persistent-views"},"Persistent Views"),(0,i.kt)("p",null,"Sometimes, instead of a button that is disabled after a certain amount of time, you want to have a\nbutton that is always working."),(0,i.kt)("p",null,"Normally, when the bot goes offline, all of its buttons stop working. You will be able to see the\nbuttons, but nothing will happen when you press them. This is a problem\nif you are trying to create a self-role system with buttons, for example. This is where persistent views come in."),(0,i.kt)("p",null,"Persistent views work forever. When the bot goes offline, the buttons will stop working. When the bot comes back online, however, the buttons will start working again."),(0,i.kt)("p",null,"In a Persistent View, the timeout must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," and all the children in the view much have a ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_id")," attribute set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@bot.event\nasync def on_ready():\n    bot.add_view(MyView()) # Registers a View for persistent listening\n\nclass MyView(discord.ui.View):\n    def __init__(self):\n        super().__init__(timeout=None) # timeout of the view must be set to None\n\n    @discord.ui.button(label="A button", custom_id="button-1", style=discord.ButtonStyle.primary, emoji="\ud83d\ude0e") # the button has a custom_id set\n    async def button_callback(self, button, interaction):\n        await interaction.response.send_message("Button was pressed", ephemeral=True)\n\n@bot.command()\nasync def button(ctx):\n    await ctx.send(f"Press the button! View persistence status: {MyView.is_persistent(MyView())}", view=MyView())\n')),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h4",{id:"how-many-buttons-can-i-have-in-a-message"},"How many buttons can I have in a message?"),(0,i.kt)("p",null,"Each message can have a maximum of 25 buttons. Views can have up to 5 rows, and each row has 5 slots. A button takes up one slot, while a select menu takes up all five slots."),(0,i.kt)("h4",{id:"can-i-add-more-than-one-view-to-a-message"},"Can I add more than one view to a message?"),(0,i.kt)("p",null,"No. As a Discord limitation, you can only have one view per message."),(0,i.kt)("h4",{id:"why-are-ui-components-so-confusing"},"Why are UI Components so confusing?"),(0,i.kt)("p",null,"They cannot be simple like commands. This system makes them flexible and doesn't limit your imagination. There are loads of different ways you can use UI Components. For example, you could subclass Buttons or Select Menus and add them to a view using the view's ",(0,i.kt)("inlineCode",{parentName:"p"},"add_item")," function."),(0,i.kt)("p",null,"UI Components aren't hard to use if you know Python. We recommend learning ",(0,i.kt)("a",{parentName:"p",href:"#oop"},"Object-Oriented Programming with Python"),"."),(0,i.kt)("h4",{id:"what-is-oop-what-is-subclassing"},(0,i.kt)("span",{id:"oop"},"What is OOP? What is subclassing?")),(0,i.kt)("p",null,"OOP (object-oriented programming) is a programming paradigm that allows you to create objects that have\ntheir own properties and methods. Almost everything in python is an object or a class. ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.Embed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.ui.View")," are both classes. When you use ",(0,i.kt)("inlineCode",{parentName:"p"},"view = discord.ui.View()")," to create a view, you are actually creating an object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.ui.View"),"."),(0,i.kt)("p",null,"Subclassing is a Python OOP concept. It means that you can create a class that inherits from another class. In other words, the class that subclasses another class can inherit all the methods and attributes of that class."),(0,i.kt)("p",null,"We highly recommend you learn about basic Python concepts like classes and inheritance before you start learning Pycord."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resources"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_classes.asp"},"W3Schools's Guide to Python Classes & Objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_inheritance.asp"},"W3Schools's Guide to Python Inheritance"))),(0,i.kt)("h4",{id:"do-buttons-need-any-special-permissions"},"Do buttons need any special permissions?"),(0,i.kt)("p",null,"No new permissions are needed for either the bot or the server to allow bots to use buttons."),(0,i.kt)("h4",{id:"should-i-replace-reactions-with-buttons-for-my-bot"},"Should I replace reactions with buttons for my bot?"),(0,i.kt)("p",null,"That is up to you. Buttons do provide a cleaner interface for your bot and are easier to use."),(0,i.kt)("admonition",{title:"Related Topics",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../application-commands/slash-commands"},"Slash Commands")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../interactions"},"Interactions Index")))))}k.isMDXComponent=!0},9448:function(e,t,n){t.Z=n.p+"assets/images/button-styles-6cde2084662b01fd98801e4444eb89ef.png"}}]);