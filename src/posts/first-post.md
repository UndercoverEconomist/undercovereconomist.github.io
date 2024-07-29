---
layout: layouts/post.njk
title: My First Blog Post
date: 2023-07-28
performance: "Some performance data"
---

# Welcome to my first blog post

Here's some example content with a D3.js visualization:

<div id="chart"></div>

<script>
const data = [
  {year: 2010, value: 10},
  {year: 2011, value: 20},
  {year: 2012, value: 15},
  {year: 2013, value: 25},
  {year: 2014, value: 22}
];

const margin = {top: 20, right: 20, bottom: 30, left: 40};
const width = 400 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleBand()
  .range([0, width])
  .padding(0.1);

const y = d3.scaleLinear()
  .range([height, 0]);

x.domain(data.map(d => d.year));
y.domain([0, d3.max(data, d => d.value)]);

svg.selectAll(".bar")
  .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.year))
    .attr("width", x.bandwidth())
    .attr("y", d => y(d.value))
    .attr("height", d => height - y(d.value));

svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

svg.append("g")
  .call(d3.axisLeft(y));
</script>

And here's some example code:

```javascript
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting("World"));
```