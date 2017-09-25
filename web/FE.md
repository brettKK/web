HTML CSS JS

+ HTML
	+ HTML5
	+ 表单form
+ HTML DOM树
		+ 改变HTML元素的innerHTML（在文档加载之后使用document.write()
			+ document.getElementById()
			+ innerHTML
			+ attribute(src, style.color,style.visibility,...)
		+ 改变css
			+ ....
		+ 对事件反应
			+ onclick
			+ document.getElementById("id").onclick=function(){displayDate()};
			+ onload,onunload
			+ input  text onchange
			+ onmouseover,onmouseout
			+ onmousedown,onmouseup, onclick
		+ 添加和删除HTML元素
			+ document.createElement
			+ document.createTextNode
			+ appendChild, removeChild. child.parentNode.removeChild(child)
+ CSS

---
+ JS
	+ reference from youtube Java Brains javascript tutorial
	+ why learn javascript
		+ client side web development
			+ Native javascript
			+ jQuery
			+ AngularJS, React, Ember
		+ Server side development
			+ NodeJS, Express
		+ Brower extensions
		+ Desktop applications
		+ Mobile applications
		+ IOT applications
	+ variable declaration
		+ color difference by different variable type
		+ number primitive type
		+ String
			+ no character type, one character is just a String of length 1
		+ boolean
		+ undefined
			+ is a type, just has one value: undefined
			+ a variable without definition, the value is undefined
			+ declaration and definition
				+ var value is declaration
				+ value = 42 is definition
		+ null
			+ is a type, just has one value: null
		+ the difference between undefined and null
	+ primitive types in JS
		+ Number
		+ String
		+ Boolean
		+ undefined
		+ null
		+ Symbol
	+ the typeof operator
		+ var a = 10; console.log(typeof a);
		+ the bug in js:
			+ var a = null; console.log(typeof a);
			+ result is object type; but should be null type
	+ type coercion and === operator
		+ === do not type conversation
		+ every type is associated with boolean
	+ Objects
	 	+ Objects in js behave more like a map
	+ the dot and bracket notations
		+ access to the object property
		+ the difference
			+ property is bad name, you should use bracket to get the value
	+ nested object
	+ revisit === for objects
	+ revisit undefined vs null
	+ delete properties with the delete operator
		+ delete person.age egs.
	+ introdus Arrays
	+ wrapper object
	+ Functions
	 	+ flexible argument counts
		+ no type for argument
		+ arguments in function is not a array
		+ functin is a object
	+ Arrays
		+ inbuilt objects
		+ push, pop, shift, etc Array methods
		+ forEach accept a function as a arguments, like Java8 function interface
	+ next steps
	 	+ Scopes and closures
		+ Objects and Prototypes
		+ Asynchronous javascript - Callbacks and Promises
		+ Client side frameworks
			+ angular js, jQuery, react, backbone
		+ Server side frameworks
			+ node.js
---
+ ..
	+ 表单验证 ***
	+ 通过javascript查找html元素
	 	+ 通过id
		+ 通过标签名
		+ 通过类名


+ ECMAScript
	+

	+ 代码执行步骤
		+ 进入上下文
			+ 初始化this，作用域链，变量对象
			+ 变量实例化
		+ 代码执行


全局上下文
函数上下文
eval上下文

+ 框架

+ Avalon MVVM 2012
	+ VM  view model
	+ 指令
	+ 插值表达式
	+ 双向绑定 只用于表单元素
