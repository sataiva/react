webpackJsonp([0x84d3948090034800],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vysakh/docs/reactjs-sataiva/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-lodash/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-stage-0/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/react-intro/javascript-crash-course.jsx':function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var s=t("./node_modules/react/react.js"),o=a(s),r=t("./src/components/MainLayout.jsx"),l=a(r),i=t("./src/components/CtaButton.jsx"),c=a(i),u=t("./src/components/Block.jsx"),d=a(u),m='\nvar name;\nvar name = "Javascript";\n// Tip: Never ever use var, there are downsides\n\nconst name = "Javascript";\n// Always use const \n\nlet name;\nlet name = "Javascript";\nname = "js";\n// If you need to modify or \n// reassign your variable\n// instead of const, use let\n',f='\nconst name = "Javascript"\nconst rank = 1\nconst worth = 12000000.50\nconst friends = ["html", "css"]\nconst bio = {\n    debut: 1995,\n    nickname: "the rockstar cool kid"\n}\n',b="\nconst looksEasy = true;\nif(looksEasy) {\n} else {\n}\n// similar to most languages. yay! :)\n\nconst key = 12;\nswitch (key) {\n   case 12:\n   break;\n\n   default:\n   break;\n}\n// don't try to remember this.\n// you could use snippets feature of your editor\n",y="\nfor (let index = 0; index < 5; index++) {\n    ///...\n}\n// we will not use this most of the time.\n// there are plenty of other ways to loop.\n// we will see in few minutes. \n",p='\nfunction sum(a, b) {\n    return a+b;\n}\n\nconst sum = function(a, b) {\n    return a+b;\n}\n\nconst sum = (a, b) => {\n    return a+b;\n}\n\n// all these are a way to create a function named "sum"\nsum(1, 2)\n\n// the function can accept arguments of any \n// data types - string, float, array, object\n// and even another function.\n\nfunction brushTeeth() {\n    console.log("eeeee")\n}\n\nfunction wakeUp(activity) {\n    activity()\n}\nwakeup(brushTeeth) // eeeee\n\n',w='\n// in java or c++ or python, you have api to do \n// things with system -- like creating a file/dir, listening on port.\n// javascript runs in the browser. So it will have access to browser related\n// functionality through "window" object.\n\nwindow.console.log("I can write it to the console of the browser, yay!")\nwindow.location.host\nwindow.localStorage // access browser\'s storage.\nwindow.document.write("I can modify the DOM! DOM is like the PSD file of the browser")\n\n// window is optional, you can omit it.\nconsole.log("this works fine too")\n';n.default=function(e){return o.default.createElement(l.default,null,o.default.createElement(d.default,{title:"1. Variable declarations - 3 ways",value:m}),o.default.createElement(d.default,{title:"2. Variable types - 5 types",value:f}),o.default.createElement(d.default,{title:"3. Conditionals",value:b}),o.default.createElement(d.default,{title:"4. Looping",value:y}),o.default.createElement(d.default,{title:"5. Functions - 3 ways",value:p}),o.default.createElement(d.default,{title:"6. Environment api - window",value:w}),o.default.createElement("p",null,"Congratulations! You now know 80% javascript to work with most apps."),o.default.createElement("p",null,"Let's learn few more features that I think is a must if you work on any js project"),o.default.createElement(c.default,{to:"/react-intro/quiz-1"},"I'm ready, lets go"))},e.exports=n.default}});
//# sourceMappingURL=component---src-pages-react-intro-javascript-crash-course-jsx-df8e3369b4089812686a.js.map