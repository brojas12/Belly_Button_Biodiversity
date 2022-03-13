const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData[0].location.longitude));

//retrive data from an external data file
// d3.json("samples.json").then(function(data){
//     wfreq=data.metadata.map(person=>person.wfreq).sort((a,b) => b-a);
//         filteredWfreq=wfreq.filter(value => value !=null)
//     console.log(filteredWfreq);
// });

//display the metadata of any individual from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
