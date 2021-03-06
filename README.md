# jump-jump 的前端 ETC 原则代码实践!

在实际开发项目的过程中，ETC 原则，即 Easier To Change，易于变更是非常重要的。为什么解耦很好？ 为什么单一职责很有用？ 为什么好的命名很重要？

因为这些设计原则让你的代码更容易发生变更。ETC 甚至可以说是其他原则的基石，可以说，我们现在所作的一切都是为了更容易变更！！

在软件开发中，我们有需要做很多决策。而好的决策会更易于将来的变更。

在项目的初期，经验丰富的开发者往往会推迟决策的时机，等到有更多的经验后再进行决策。但是我们还是要基于现有的知识把产品做出来，但是我们还是想要当前的产品可以进行少量的修改就可以适用于后续的开发，而不是有更多的经验后直接进行重写。

有时候，我们的经验不足以做出足够正确的决策，这种情况下，要么试着把写的代码都可替换，这样无论发生什么，这块代码不会成为路障。第二件事，不断记录在工程中面临的决策，有哪些选择以及选择之后的一些猜测。

ETC 原则来自《程序员修炼之道 第二版》，个人希望通过开发和实践结合其他开源项目整理出前端中 ETC(易于修改)的代码实践，包括 HTML CSS JavaScript 与 组件开发等。

该指北是为了个人在编写代码时易于修改，编写可维护的前端代码。同时该结合文档可以回避错误、减少纠结和使用反模式。当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。

该指北也是"强观点，弱立场"，如果你拥有与当前结论相悖的信息，我就会立刻对该实践进行修正。

主页为： https://wsafight.github.io/code-etc/


项目通过 [svelte](https://github.com/sveltejs/svelte) 框架, [mvp](https://github.com/andybrewer/mvp) css 样式库以及 [elderjs](https://github.com/Elderjs/elderjs) 生成器构建，非常感谢🙏
