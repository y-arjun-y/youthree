/* Opening */
anime({
  targets: "#openingheading",
  opacity: 100,
  easing: "linear",
  duration: 50000,
});

anime({
  targets: ".openingtext",
  delay: 2000,
  opacity: 100,
  easing: "linear",
  duration: 10000,
});

anime({
  targets: ".openingtext",
  delay: 2000,
  opacity: 100,
  easing: "linear",
  duration: 10000,
});

anime({
  targets: "#openingbutton",
  delay: 4000,
  left: 0,
  easing: "linear",
  duration: 40,
});

anime({
  targets: "#openingbutton",
  delay: 4000,
  opacity: 100,
  easing: "linear",
  duration: 75000,
});

/* Transitions */
function openingTransition() {
  anime({
    targets: "#openingheading",
    opacity: 0,
    easing: "linear",
    duration: 1000,
  });

  anime({
    targets: ".openingtext",
    opacity: 0,
    easing: "linear",
    duration: 1000,
  });

  anime({
    targets: "#openingbutton",
    opacity: 0,
    easing: "linear",
    duration: 1000,
  });

  setTimeout(function () {
    document.getElementById("openingheading").style.display = "none";
  }, 1000);

  setTimeout(function () {
    var elements = document.getElementsByClassName("openingtext");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }, 1000);

  setTimeout(function () {
    document.getElementById("openingbutton").style.display = "none";
    window.open("./countries", "_self");
  }, 1000);
}

setTimeout(function () {
  document.getElementById("countriesbody").style.display = "inline";
}, 10);

/* Custom Select */
document
  .querySelector(".countries-custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".countries-custom-select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".countries-custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".countries-custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".countries-custom-select").querySelector(
        ".countries-custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".countries-custom-select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

document
  .querySelector(".countries-unemployment-data-custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(
      ".countries-unemployment-data-custom-select"
    ).classList.toggle("open");
  });

for (const option of document.querySelectorAll(
  ".countries-unemployment-data-custom-option"
)) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".countries-unemployment-data-custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".countries-unemployment-data-custom-select").querySelector(
        ".countries-unemployment-data-custom-select__trigger span",
        ".countries-unemployment-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(
    ".countries-unemployment-data-custom-select"
  );
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

/* Unemployment */
document.getElementById("countries-unemployment-usa").style.display = "none";
document.getElementById("countries-unemployment-uk").style.display = "none";
document.getElementsByClassName("countries-graph")[0].style.display = "none";

window.addEventListener("click", function (e) {
  const update = document.getElementsByTagName("span")[0];
  if (!update.contains(e.target)) {
    country = update.innerText;
  }

  if (country.includes("U.S.A.")) {
    document.getElementById("countries-unemployment-usa").style.display =
      "inline";
    document.getElementById("countries-unemployment-uk").style.display = "none";
    document.getElementById("countries-unemployment-can").style.display =
      "none";
    document.getElementById("countries-unemployment-ger").style.display =
      "none";
    document.getElementById("countries-unemployment-aus").style.display =
      "none";
    document.getElementById("countries-unemployment-fr").style.display = "none";
    document.getElementById("countries-unemployment-nz").style.display = "none";
    document.getElementById("footer").style.bottom = "-850px";
  }

  if (country.includes("U.K.")) {
    document.getElementById("countries-unemployment-usa").style.display =
      "none";
    document.getElementById("countries-unemployment-uk").style.display =
      "inline";
    document.getElementById("countries-unemployment-can").style.display =
      "none";
    document.getElementById("countries-unemployment-ger").style.display =
      "none";
    document.getElementById("countries-unemployment-aus").style.display =
      "none";
    document.getElementById("countries-unemployment-nz").style.display = "none";
    document.getElementById("countries-unemployment-fr").style.display = "none";
    document.getElementById("footer").style.bottom = "-3px";
  }
});

/* D3 */
document
  .getElementById("countries-unemployment-graph-span-u1")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(","));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u1);
      });

    var svg = d3
      .select("#countries-graph-u1")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau1.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u1 = +d.u1;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);
      y.domain(
        d3.extent(data, function (d) {
          return d.u1;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U1 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U1:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u1")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u1) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u1").text(formatValue(d.u1));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-u2")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u2);
      });

    var svg = d3
      .select("#countries-graph-u2")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau2.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u2 = +d.u2;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.u2;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U2 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U2:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u2")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u2) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u2").text(formatValue(d.u2));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-u3")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u3);
      });

    var svg = d3
      .select("#countries-graph-u3")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau3.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u3 = +d.u3;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.u3;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U3 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U3:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u3")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u3) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u3").text(formatValue(d.u3));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-u4")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u4);
      });

    var svg = d3
      .select("#countries-graph-u4")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau4.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u4 = +d.u4;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.u4;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U4 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U4:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u4")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u4) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u4").text(formatValue(d.u4));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-u5")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u5);
      });

    var svg = d3
      .select("#countries-graph-u5")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau5.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u5 = +d.u5;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.u5;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U5 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U5:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u5")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u5) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u5").text(formatValue(d.u5));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-u6")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%m/%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%m/%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.u6);
      });

    var svg = d3
      .select("#countries-graph-u6")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americau6.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.u6 = +d.u6;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.u6;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("U6 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("U6:");

      focus
        .append("text")
        .attr("class", "countries-tooltip-u6")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.u6) + ")");
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-u6").text(formatValue(d.u6));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-lu2")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.lu2);
      });

    var svg = d3
      .select("#countries-graph-lu2")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americalu2.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.lu2 = +d.lu2;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.lu2;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("LU2 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("LU2: ");

      focus
        .append("text")
        .attr("class", "countries-tooltip-lu2")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr(
          "transform",
          "translate(" + x(d.year) + "," + y(d.lu2) + ")"
        );
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-lu2").text(formatValue(d.lu2));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-lu3")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "inline";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "none";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.lu3);
      });

    var svg = d3
      .select("#countries-graph-lu3")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americalu3.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.lu3 = +d.lu3;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.lu3;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("LU3 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("LU3: ");

      focus
        .append("text")
        .attr("class", "countries-tooltip-lu3")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr(
          "transform",
          "translate(" + x(d.year) + "," + y(d.lu3) + ")"
        );
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-lu3").text(formatValue(d.lu3));
      }
    });
  });

document
  .getElementById("countries-unemployment-graph-span-lu4")
  .addEventListener("click", function namedListener() {
    document.getElementsByClassName("countries-graph")[0].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[1].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[2].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[3].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[4].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[5].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[6].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[7].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[8].style.display =
      "none";
    document.getElementsByClassName("countries-graph")[9].style.display =
      "inline";

    var margin = { top: 30, right: 120, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      tooltip = { width: 100, height: 100, x: 10, y: -30 };

    var parseDate = d3.time.format("%Y").parse,
      bisectDate = d3.bisector(function (d) {
        return d.year;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.time.format("%Y");

    var x = d3.time.scale().range([0, width]);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format("s"));

    var line = d3.svg
      .line()
      .x(function (d) {
        return x(d.year);
      })
      .y(function (d) {
        return y(d.lu4);
      });

    var svg = d3
      .select("#countries-graph-lu4")
      .append("svg")
      .attr("class", "svg-graph")
      .attr("width", "1500")
      .attr("height", "500")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/americalu4.tsv", function (error, data) {
      if (error) throw error;

      data.forEach(function (d) {
        d.year = parseDate(d.year);
        d.lu4 = +d.lu4;
      });

      data.sort(function (a, b) {
        return a.year - b.year;
      });

      x.domain([data[0].year, data[data.length - 1].year]);

      y.domain(
        d3.extent(data, function (d) {
          return d.lu4;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", -18)
        .attr("x", 785)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Year");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("LU4 (in percentage)");

      svg.append("path").datum(data).attr("class", "line").attr("d", line);

      var focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle").attr("r", 5);

      focus
        .append("rect")
        .attr("class", "countries-tooltip")
        .attr("width", 100)
        .attr("height", 50)
        .attr("x", 10)
        .attr("y", -22)
        .attr("rx", 4)
        .attr("ry", 4);

      focus
        .append("text")
        .attr("class", "countries-tooltip-date")
        .attr("x", 18)
        .attr("y", -2);

      focus.append("text").attr("x", 18).attr("y", 18).text("LU4: ");

      focus
        .append("text")
        .attr("class", "countries-tooltip-lu4")
        .attr("x", 50)
        .attr("y", 18);

      svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
          focus.style("display", null);
        })
        .on("mouseout", function () {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;
        focus.attr(
          "transform",
          "translate(" + x(d.year) + "," + y(d.lu4) + ")"
        );
        focus.select(".countries-tooltip-date").text(dateFormatter(d.year));
        focus.select(".countries-tooltip-lu4").text(formatValue(d.lu4));
      }
    });
  });

/* Mobile Tooltips */
function tooltipMobile(minusone) {
  if (window.matchMedia("(max-width: 616px)").matches) {
    document.getElementsByClassName("tooltiptext")[minusone].style.visibility =
      "visible";
    document.getElementsByClassName("tooltiptext")[minusone].style.opacity =
      "1";
    setTimeout(function () {
      document.getElementsByClassName("tooltiptext")[minusone].style.display =
        "none";
    }, 3000);
  }
}
