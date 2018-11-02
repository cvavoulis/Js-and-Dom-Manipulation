// from data.js
var tableData = data;
console.log(tableData)
tbody=d3.select("tbody")

function buildTable(sighting){
    // tbody.html("");
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
};

tableData.forEach(buildTable);

d3.selectAll("#filter-btn").on("click", handleClick);

function handleClick(){
    d3.event.preventDefault();
    var inputValue = d3.select("#datetime").property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(buildTable)
}

// enterButton.on("click", function() {
//     d3.event.preventDefault();
//     var inputValue = d3.select("#datetime").property("value");

//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     console.log(filteredData);
//     });







