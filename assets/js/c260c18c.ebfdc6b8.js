"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[5545],{8624:function(A,e,t){t.d(e,{v:function(){return o}});var n=t(7294),a=t(7674),o=Object.assign({},a.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});e.Z=function(A){var e=A.options,t=void 0===e?o:e,i=A.children;return n.createElement(a.qs.Provider,{value:t},n.createElement(a.dZ,null,i))}},6671:function(A,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(7674),r=t(8624),l=["components"],s={title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide."},m=void 0,d={unversionedId:"more/contributing",id:"more/contributing",title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide.",source:"@site/docs/more/contributing.mdx",sourceDirName:"more",slug:"/more/contributing",permalink:"/more/contributing",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/more/contributing.mdx",tags:[],version:"current",lastUpdatedBy:"BobDotCom",lastUpdatedAt:1666046498,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide."},sidebar:"defaultSidebar",previous:{title:"Community Resources",permalink:"/more/community-resources"},next:{title:"Installing Git",permalink:"/more/git"}},p={},c=[{value:"Info",id:"info",level:2},{value:"Structure",id:"structure",level:2},{value:"Markdown Syntax",id:"markdown-syntax",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Discord Message Components",id:"discord-message-components",level:2},{value:"Slash Commands",id:"slash-commands",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Page Format",id:"page-format",level:2}],u={toc:c};function k(A){var e=A.components,s=(0,a.Z)(A,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page outlines some of the basic syntax you need to know to contribute to the guide. We recommend you also check out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/"},"Docusaurus's Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Pycord-Development/guide/blob/master/.github/CONTRIBUTING.md"},"Contributing Rules"))),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus v2")," to generate our guide. All of the guide pages are generated\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"mdx")," files in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/guide/tree/master/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"docs/"))," directory.\nMDX allows you to use JSX in your markdown content."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Let's visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/guide/tree/master/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"docs/"))," directory and check its file structure."),(0,o.kt)("p",null,"We can see various folders and a few files in it. Let's talk a bit about the ",(0,o.kt)("inlineCode",{parentName:"p"},"introduction.mdx")," file. At the top, you can see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Introduction\ndescription: ...\nsidebar_position: 1\n---\n")),(0,o.kt)("p",null,"Most pages have this at the top. The ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," defaults to the file name. Since the titles need to be Capitalized according to need while the file names are lowercased (sometimes, the file names are shorter than the title!), we set a title ourselves."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," field is also important. This is the text shown in an embed when the page's link is shared on Discord, Twitter or other websites that support embedded links. Make sure to give a nice an interesting description!"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar_position")," field is pretty self-explanatory. It sets the position of the page in the sidebar. Most files in categories do not need this since they are sorted alphabetically."),(0,o.kt)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,o.kt)("p",null,"This page quickly outlines some of the syntax that is used in markdown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},"Markdown syntax is pretty easy. You can add **bold**, _italic_ and _underline_ text. You can use ~~strikethrough~~. You can use `inline code blocks`.\n\n    ```python\n    print(\"We can use code blocks like this.\")\n    ```\n\nYou can add [links to other websites](https://pycord.dev). You can add images like this: ![alternate text that describes the image](https://pycord.dev/image.png).\n\n- You can create\n- unordered lists like this\n\n1. Or ordered lists\n2. Like this\n\n3. If you want markdown to automatically detect what number you are on, you can use `1.`\n4. Like this\n\n# Headers\n\n## Go\n\n### Like\n\n#### This\n\nYou can even use HTML in Markdown.\n\n<samp>This text is monospaced</samp>\nUse <br/> to add a break line.\n\n> We can use blockquotes too.\n\n2 ways to create tables:\n\n<table>\n    <tr>\n        <th>Header</th>\n        <th>Header</th>\n    </tr>\n    <tr>\n        <td>Cell</td>\n        <td>Cell</td>\n    </tr>\n</table>\n\n| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n\nHere's a line for us to start with.\n\nThis line is separated from the one above by two new lines, so it will be a _separate paragraph_.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the _same paragraph_.\n\nWe can use emojis too! :joy:\n\n- [x] We can have task lists too\n- [ ] This is a task\n- [ ] That's not done yet\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Preview"),(0,o.kt)("div",{class:"markdown-body"},(0,o.kt)("p",null,"Markdown syntax is pretty easy. You can add ",(0,o.kt)("strong",{parentName:"p"},"bold"),", ",(0,o.kt)("em",{parentName:"p"},"italic")," and ",(0,o.kt)("em",{parentName:"p"},"underline")," text. You can use ",(0,o.kt)("del",{parentName:"p"},"strikethrough"),". You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"inline code blocks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("We can use code blocks like this.")\n')),(0,o.kt)("p",null,"You can add ",(0,o.kt)("a",{parentName:"p",href:"https://pycord.dev"},"links to other websites"),". You can add images by adding ",(0,o.kt)("img",{alt:"alt text",src:t(7931).Z,width:"32",height:"32"}),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create"),(0,o.kt)("li",{parentName:"ul"},"unordered lists like this")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Or ordered lists")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Like this")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want markdown to automatically detect what number you are on, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"1."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Like this"),(0,o.kt)("h1",{parentName:"li",id:"headers"},"Headers"),(0,o.kt)("h2",{parentName:"li",id:"go"},"Go"),(0,o.kt)("h3",{parentName:"li",id:"like"},"Like"),(0,o.kt)("h4",{parentName:"li",id:"this"},"This"))),(0,o.kt)("p",null,"You can even use HTML in Markdown."),(0,o.kt)("samp",null,"This text is monospaced"),"Use ",(0,o.kt)("br",null)," to add a break line.",(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We can use blockquotes too.")),(0,o.kt)("p",null,"2 ways to create tables:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Header"),(0,o.kt)("th",null,"Header")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Cell"),(0,o.kt)("td",null,"Cell"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header"),(0,o.kt)("th",{parentName:"tr",align:null},"Header"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cell"),(0,o.kt)("td",{parentName:"tr",align:null},"Cell")))),(0,o.kt)("p",null,"Here's a line for us to start with."),(0,o.kt)("p",null,"This line is separated from the one above by two new lines, so it will be a ",(0,o.kt)("em",{parentName:"p"},"separate paragraph"),"."),(0,o.kt)("p",null,"This line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the ",(0,o.kt)("em",{parentName:"p"},"same paragraph"),"."),(0,o.kt)("p",null,"We can use emojis too! \ud83d\ude02"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","We can have task lists too"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This is a task"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","That's not done yet")))),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"We can add warnings, notes, etc. with the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::note\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::tip\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::info\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::caution\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::danger\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::important\n\nRemember that it's `:::important`, not `::: important` with a space!\n\n:::\n\n:::tip Cool Stuff\n\nYou can edit an admonition's title by adding text after the `:::` and name, like this!\n\n:::\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Preview"),(0,o.kt)("div",{class:"markdown-body"},(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Remember that it's ",(0,o.kt)("inlineCode",{parentName:"p"},":::important"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"::: important")," with a space!")),(0,o.kt)("admonition",{title:"Cool Stuff",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can edit an admonition's title by adding text after the ",(0,o.kt)("inlineCode",{parentName:"p"},":::")," and name, like this!")))),(0,o.kt)("h2",{id:"discord-message-components"},"Discord Message Components"),(0,o.kt)("p",null,"As most files already have the imports for these, it's not that hard to add them."),(0,o.kt)("p",null,"First, import the necessary components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  DiscordButton,\n  DiscordButtons,\n  DiscordInteraction,\n  DiscordMessage,\n  DiscordMessages,\n} from "discord-message-components/packages/react";\nimport "discord-message-components/packages/react/dist/style.css";\n\nimport DiscordComponent from "../../src/components/DiscordComponent";\n')),(0,o.kt)("p",null,"The div starts like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<DiscordComponent>\n\n</DiscordComponent>\n\n<br/>\n")),(0,o.kt)("p",null,"This is where you list a ",(0,o.kt)("inlineCode",{parentName:"p"},"DiscordMessage"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n    <DiscordMessage profile="bob">\n        Hello!\n    </DiscordMessage>\n</DiscordComponent>\n\n<br/>\n')),(0,o.kt)(r.Z,{mdxType:"DiscordComponent"},(0,o.kt)(i.kK,{profile:"bob",mdxType:"DiscordMessage"},"Hello!")),(0,o.kt)("br",null),(0,o.kt)("p",null,"It has a pretty straightforward syntax."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"<br/>")," to the end of a component to make the content below it look better.")),(0,o.kt)("h3",{id:"slash-commands"},"Slash Commands"),(0,o.kt)("p",null,"To make a message authored by a slash command, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n  <DiscordMessage profile="robocord">\n    <div slot="interactions">\n      <DiscordInteraction profile="bob" command>\n        update\n      </DiscordInteraction>\n    </div>\n    Updated dependencies to the latest version!\n  </DiscordMessage>\n</DiscordComponent>\n')),(0,o.kt)(r.Z,{mdxType:"DiscordComponent"},(0,o.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"update")),"Updated dependencies to the latest version!")),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"To make a message with buttons, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n  <DiscordMessage profile="robocord">\n    <div slot="interactions">\n      <DiscordInteraction profile="bob" command>\n        work\n      </DiscordInteraction>\n    </div>\n    Work Done!\n    <div slot="actions">\n      <DiscordButtons>\n        <DiscordButton type="primary" emoji="\ud83d\udcdd">Work More</DiscordButton>\n        <DiscordButton type="secondary" emoji="\ud83d\udecf\ufe0f">Sleep</DiscordButton>\n      </DiscordButtons>\n    </div>\n  </DiscordMessage>\n</DiscordComponent>\n')),(0,o.kt)(r.Z,{mdxType:"DiscordComponent"},(0,o.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"work")),"Work Done!",(0,o.kt)("div",{slot:"actions"},(0,o.kt)(i.jr,{mdxType:"DiscordButtons"},(0,o.kt)(i.qD,{type:"primary",emoji:"\ud83d\udcdd",mdxType:"DiscordButton"},"Work More"),(0,o.kt)(i.qD,{type:"secondary",emoji:"\ud83d\udecf\ufe0f",mdxType:"DiscordButton"},"Sleep"))))),(0,o.kt)("h2",{id:"page-format"},"Page Format"),(0,o.kt)("p",null,"There are a few things you need to take care of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that the spelling and grammar is perfect. We have a GitHub action configured that will warn you about spelling errors when you start a pull request. Make sure to commit your changes accordingly. "),(0,o.kt)("p",{parentName:"li"},"As for the grammar, you should try reading the changes you have done and wait for reviews from others.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A common mistake people make is incorrect header style. People often think that the less the important the topic is, the lower it's heading style should be."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n# Topic\n## Less Important Topic\n## Subtopic\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n# About\n[Introduction]\n\n## Installation\n[Content]\n\n### Windows\n[Content]\n")),(0,o.kt)("p",{parentName:"li"},"That's VERY wrong. Here's the correct example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n[Introduction]\n## Topic\n## Less Important Topic\n### Subtopic\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n[Introduction]\n\n## About\n[More Information]\n\n## Installation\n[Content]\n\n### Windows\n[Content]\n")),(0,o.kt)("p",{parentName:"li"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"---"),"s at the beginning have been skipped here."))))}k.isMDXComponent=!0},7931:function(A,e){e.Z="data:image/vnd.microsoft.icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOXp6gBtgYcA9/j4H/v8/Gv9/f2v/v7+2f7+/u/8/Pz7+/v7/v7+/vT+/v7l/f7+xvz9/ZH5+/tD8fP0CPb3+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADt8fEA3+XlAvr7+1T9/v7Q////+/////////////////////////////////////////////////7+//D8/PyX9ff3F/j5+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx9DSAP39/QD5+vtC/v7+6f////////////////////////////////////////////////3+/tD8/PyR/v7+1v/////8/P2JkaerAe3w8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq8PAA////AP39/Zj////////////////////////////////////////////////+///0+vv7Q////wD7+/xQ/////P7+/sT3+foL9/n6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOTr7QDa5OYD/P39rf////////////////////////////////////////////////////f6+/tWr7/BAfv8/GL////+/v//xvv9/gz7/f4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3+boANLd3wP8/f2s//////////////////////////////////////////////////////7+/uX9/v64/v7+6P/////+///G+fz9DPn8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf5+gA097gA/z9/az////////////////////////////////////+////+/////r////6/////P////7////7/////f7+/sH2+vsM9fr7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChbV8A7GdaAOFlWQTvbmIP8nFlEPJwYxDmnZYI/P39rP///////////////////////////////////+38/f1n+vz8TPr8/E76/PxO+vz8Tvr8/E76+/xP+fr7Pe309gXc6vAB5fD0AeDq7QH///8ASV1iAAAAAAAAAAAA4mJVAM9fUgHsZFc972VYpPJmWcvyZ1rM8mdayPBxZUH8//+p////////////////////////////////////9f7+/q/+/v6h/v7+ov7+/qL+/v6i/v7+ov7+/qL+/v6j/v7+pv7+/qb9/v6m/f7+oPz8/G/3+Pge////AOHm5wD7aFsA7GRXSvFlWOTyZVj/8mVY//JlWP/yZVj68W5iUfz//6j//////////////////////////////////////////////////////////////////////////////////////////////////////////v39/cz4+fk3////AOdiVhvwZVjI8mVY//JlWP/yZVj/8mVY//JlWPrxbmJR/P//qP////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/cL19/cb7WRXafJlWPryZVj/8mVY//JlWP/yZVj/8mVY+vBsYFD8//+l////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v8/HbvZViy8mVY//JlWP/yZVj/8mVY//JlWP/yZVj97WJVV/3//4n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39yPBlWN/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/uYVSC+v//QP7+/u3////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v718GVY9vJlWP/yZVj/8mVY//JlWP/yZVj/8mVY//BkV9Ppb2Mj+///Zv7+/uP////+///////////////////////////////////////////////////////////////////////////////////////////////////////////xZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY/+9kV6voYlYl9/f3K/z//2f8//+G+/7/ivv+/4r7/v+K+/7/ivv+/4r7/v+K+/7/ivv//4v9//+k/v7+3f////7///////////////////////////////////////////FlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY/vFlWNzwYlWd72BTf+9hVH7uYVR+7mFUfu5hVH7uYVR+7mFUfu5hVH7uYVR87WFUYeppXSv18vEk/P39ov////7/////////////////////////////////////8GVY9/JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj+8WVY4+5gUm3x2tgd/f7+xf/////////////////////////////////////wZVje8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8WVY8+xeUE38//9t/////////////////////////////////v7++O9lWK3yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8GJUn/r490X////2///////////////////////////9/v7T7WRXXfFlWPbyZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//JlWP/yZVj/8mVY//Jl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"}}]);