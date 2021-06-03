# svelte-json-tree

Svelte JsonTree

## Install

```
$ yarn add @mzaghetto/svelte-json-tree
```

or

```
$ npm i @mzaghetto/svelte-json-tree
```


## Usage

You can see an example here: https://svelte.dev/repl/1cf6feddd37243ac8a7c48d9c6ad26d3?version=3.38.2

**Props**

| Prop           | Type    | Options/notes                                                   |
|:---------------|:--------|:----------------------------------------------------------------|
| `key`          | String  | Set the key name to start your json tree                        |
| `data`         | JSON    | JSON data source                                                |
| `open`         | Boolean | Set if your tree started open or close                          |
| `indent`       | Number  | Set the indent tree in `em`                                     |
| `tabSize`      | Number  | Set the indent for child in `em`                                |
| `bold`         | -       | When pass this prop, the title will be bold                     |
| `svg`          | String  | Change SVG used to `open` state                                 |
| `svgClose`     | String  | Change SVG used to `close` state                                |
| `--fill`       | String  | Set the color to SVG, can be used `HSL`, `RGB`, `Color Name`    |
| `--width`      | String  | Set the width to SVG  in `px` or `em`                           |
| `--heigth`     | String  | Set the heigth to SVG  in `px` or `em`                          |

---

## License

MIT © [Marcos Zaghetto](https://github.com/mzaghetto)
