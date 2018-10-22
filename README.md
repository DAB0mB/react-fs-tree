# react-fs-tree

I am a beautiful React.Component tree and I will help you present FS hierarchy within a React App. No dependencies, just pure awesomeness! My creator has created me after testing few alternatives for [tortilla.academy](https://tortilla.academy), and has found nothing which is as stylish and can show git-diff annotations right out of the box next to each file (here's [an example page](https://tortilla.academy/tutorial/chatty/version/2-0-0/diff/3-0-0) which was built with me).

<p align="center"><img src="https://user-images.githubusercontent.com/7648874/47314030-1794a200-d673-11e8-8af6-62b9a2ec6a99.png" alt="react-fs-tree" width="256"></p>

This is how I look like behind the scenes:

```js
import React from 'react'
import FSRoot from 'react-fs-tree'

const FSTree = () => (
  <FSRoot childNodes={[
    { name: 'file' },
    { name: 'added file', mode: 'a' },
    { name: 'deleted file', mode: 'd' },
    { name: 'modified file', mode: 'm' },
    { name: 'folder', childNodes: [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' },
    ] },
  ]} />
)
```

> A small demonstration app of me can be found in the [`demo` dir](https://github.com/DAB0mB/react-fs-tree/tree/master/demo).

My nodes will pop and glow once you click on them. I'll be sure to notify you whenever it happens ;-)

```js
const onSelect = (node) => {
  console.log(`node ${node.path} selected`)
}

const onOpen = (node) => {
  console.log(`node ${node.path} opened`)
}

<FSRoot onSelect={onSelect} onOpen={onOpen} childNodes={[
  // ...
]} />
```

I can also notify you on...

- **onSelect(node)**

- **onDeselect(node)**

- **onSelectChange(node)**

- **onOpen(node)**

- **onClose(node)**

- **onOpenChange(node)**

Each of my nodes is an entity of its own and will do exactly what you tell it to:

- **node.open()** - Will open the node.

- **node.close()** - Will close the node.

- **node.toggleOpen()** - Will open the node if closed and will close the node if opened.

- **node.select()** - Will select the node.

- **node.deselect()** - Will deselect the node.

- **node.toggleSelect()** - Will select the node if deselected and will deselect the node if selected.

You can also ask for any of its details, like...

- **node.name** - The name of the node e.g. `foo`.

- **node.path** - The full path of the node starting from the root e.g. `~/folder/foo`.

- **node.childNodes** - An array of the direct children of the node.

- **node.parentNode** - The parent of the node.

- **node.root** - The greatest ancestor of the node.

- **node.opened** - Whether the node is opened or not.

- **node.selected** - Whether the node is selected or not.

- **node.branchedOut** - Whether the node has offspring or not.

- **node.virtual** - Whether the node is currently rendered or is just a virtual representation of the its data*.

> \* A node is an actual instance of its belonging React.Component.

You should also know that...

- You can make me non interactive by passing me the `noninteractive` flag. When that happens my nodes won't respond to your clicks, and neither do I. You can ask each of my nodes whether it's interactive or not with `node.noninteractive`.

- You can pass a git-diff mode that will signify whether the node was added (`'a'`), deleted (`'d'`) or modified (`'m'`). You can ask the node what's its mode at anytime using `node.mode`.

If you like what you see you can install me with `npm`:

    $ npm install react-fs-tree

And since I have an **MIT** license feel free to use me!

<p align="right"><img src="https://user-images.githubusercontent.com/7648874/47303417-6bdd5900-d656-11e8-97e3-058f03d158db.jpg" alt="mit"></p>
