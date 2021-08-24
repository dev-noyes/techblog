---
sidebar_position: 2
---

# Markdown Example 

This page is a markdown example of docusaurus.

## Youtube

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Codepen

```
<p data-height="265" data-theme-id="0" data-slug-hash="dJgNLK" data-default-tab="js,result" data-user="tomoasleep" data-embed-version="2" data-pen-title="dJgNLK" class="codepen">See the Pen <a href="https://codepen.io/tomoasleep/pen/dJgNLK/">dJgNLK</a> by Tomoya Chiba (<a href="https://codepen.io/tomoasleep">@tomoasleep</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
```
<p data-height="265" data-theme-id="0" data-slug-hash="dJgNLK" data-default-tab="js,result" data-user="tomoasleep" data-embed-version="2" data-pen-title="dJgNLK" class="codepen">See the Pen <a href="https://codepen.io/tomoasleep/pen/dJgNLK/">dJgNLK</a> by Tomoya Chiba (<a href="https://codepen.io/tomoasleep">@tomoasleep</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Table

```
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |
```

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |

## Code Block - JSX

```
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Live Editor

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## Admonitions

### note
```
:::note
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::
```

:::note
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

### tip

```
:::tip
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::
```

:::tip
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

### info

```
:::info
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::
```

:::info
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

### caution

```
:::caution
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::
```
:::caution
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::

### danger

```
:::danger
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::
```
:::danger
Some **content** with _markdown_ `syntax`. Check [this `api`](#).
:::