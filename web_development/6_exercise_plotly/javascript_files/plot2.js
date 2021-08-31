var year = [2015];
var arable_land_brazil = [33.8100342899258];
var country_name_brazil = 'Brazil';

var arable_land_germany = [47.9592041483809];
var country_name_germany = 'Germany';

var arable_land_china = [56.2229587724434];
var country_name_china = 'China';

var trace1 = {x: year, y: arable_land_brazil, type: 'bar', name: country_name_brazil
/* TODO: Use the country name and arable land data to make a bar chart */
};
var trace2 = {x: year, y: arable_land_germany, type: 'bar', name: country_name_germany
};
var trace3 = {x: year, y: arable_land_china, type: 'bar', name: country_name_china
};


var layout = {title:'Land Used for Agriculture 2015 by Land'
 /* TODO: include a title for the chart */
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('plot2', data, layout);