//BING NEWS CATEGORIES

// document.getElementById('getNews').addEventListener('click', (() => {
//     let category = document.getElementById('newsCat').value
//     console.log(category)
//     fetch(`https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/?Category=${category}`, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
//             }
//         })
//         .then(response => {
//             console.log(response.json().then(data => {
//                 console.log(data);
//             }));
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }))

fetch("https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
	}
})
.then(response => {
    response.json().then(data => {
        console.log(data);
        $('#newsImg1').attr('src', data.value[0].image.thumbnail.contentUrl)
        $('#newsImg2').attr('src', data.value[1].image.thumbnail.contentUrl)
        $('#newsImg3').attr('src', data.value[2].image.thumbnail.contentUrl)
        $('#newsImg4').attr('src', data.value[3].image.thumbnail.contentUrl)
        $('#newsImg5').attr('src', data.value[4].image.thumbnail.contentUrl)
        $('#newsImg6').attr('src', data.value[5].image.thumbnail.contentUrl)
        $('#newsImg7').attr('src', data.value[6].image.thumbnail.contentUrl)
        $('#newsImg8').attr('src', data.value[7].image.thumbnail.contentUrl)
        $('#newsImg9').attr('src', data.value[8].image.thumbnail.contentUrl)
        $('#newsImg10').attr('src', data.value[9].image.thumbnail.contentUrl)
        
        $('#headline').text(data.value[0].name)
        $('#headline2').text(data.value[1].name)
        $('#headline3').text(data.value[2].name)
        $('#headline4').text(data.value[3].name)
        $('#headline5').text(data.value[4].name)
        $('#headline6').text(data.value[5].name)
        $('#headline7').text(data.value[6].name)
        $('#headline8').text(data.value[7].name)
        $('#headline9').text(data.value[8].name)
        $('#headline10').text(data.value[9].name)
      
        $('#text').text(data.value[0].description)
        $('#text2').text(data.value[1].description)
        $('#text3').text(data.value[2].description)
        $('#text4').text(data.value[3].description)
        $('#text5').text(data.value[4].description)
        $('#text6').text(data.value[5].description)
        $('#text7').text(data.value[6].description)
        $('#text8').text(data.value[7].description)
        $('#text9').text(data.value[8].description)
        $('#text10').text(data.value[9].description)
      
        $('#link').attr('href', data.value[0].url)
        $('#link2').attr('href', data.value[1].url)
        $('#link3').attr('href', data.value[2].url)
        $('#link4').attr('href', data.value[3].url)
        $('#link5').attr('href', data.value[4].url)
        $('#link6').attr('href', data.value[5].url)
        $('#link7').attr('href', data.value[6].url)
        $('#link8').attr('href', data.value[7].url)
        $('#link9').attr('href', data.value[8].url)
        $('#link10').attr('href', data.value[9].url)

    });
})
.catch(err => {
	console.log(err);
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Melbourne,USA&appid=8f08a4c697c5e042edf4508bb3311246')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        $('#name').text(`${data.name}, ${data.sys.country}`);
        document.getElementById('name').addEventListener('mouseover', () => {
            $('#coordinates').text(` long : ${data.coord.lon}° lat : ${data.coord.lat}°`)
            $('#coordinates').css('display', 'block');
        })
        document.getElementById('name').addEventListener('mouseout', () => {
            $('#coordinates').css('display', 'none');
        })
        // Formula Kelvin => Fahrenheit (K − 273.15) × 9/5 + 32 = °F
        $('#temp').text(`${Math.round((data.main.temp - 273.15) * (9/5)+ 32)} °F \u00A0\u00A0 (Feels like : ${Math.round((data.main.feels_like - 273.15) * (9/5)+ 32)})`);
        $('#weather').text(`${data.weather[0].description.toUpperCase()}`);
        $('#temp_max').text(`H : ${Math.round((data.main.temp_max - 273.15) * (9/5)+ 32)} °F`);
        $('#temp_min').text(`L : ${Math.round((data.main.temp_min - 273.15) * (9/5)+ 32)} °F`);
      
        
        let zoneNumber = (data.timezone / 60) / 60;
        switch (zoneNumber) {
            case 0:
                zoneNumber = 'Greenwich Mean Time'
                break;
            case -1:
                zoneNumber = 'East Greenland Time'
                break;
            case -2:
                zoneNumber = 'Brazilian Summer Time'
                break;
            case -3:
                zoneNumber = 'Atlantic Time'
                break;
            case -4:
                zoneNumber = 'Atlantic Time'
                break;
            case -5:
                zoneNumber = 'Eastern Time'
                break;
            case -6:
                zoneNumber = 'Central Time'
                break;
            case -7:
                zoneNumber = 'Mountain Time'
                break;
            case -8:
                zoneNumber = 'Pacific Time'
                break;
            case -9:
                zoneNumber = 'Alaska Time'
                break;
            case -10:
                zoneNumber = 'Tahiti Time'
                break;
            case -11:
                zoneNumber = 'Samoa Standard Time'
                break;
            case -12:
                zoneNumber = 'Anywhere on Earth'
                break;
            case 1:
                zoneNumber = 'Central European Time'
                break;
            case 2:
                zoneNumber = 'Eastern European Time'
                break;
            case 3:
                zoneNumber = 'Further-Eastern European Time'
                break;
            case 4:
                zoneNumber = 'Kuybyshev Time'
                break;
            case 5:
                zoneNumber = 'Pakistan Standard Time'
                break;
            case 6:
                zoneNumber = 'Bhutan Time'
                break;
            case 7:
                zoneNumber = 'Christmas Island Time'
                break;
            case 8:
                zoneNumber = 'Malaysia Time'
                break;
            case 9:
                zoneNumber = 'Eastern Indonesian Time'
                break;
            case 10:
                zoneNumber = 'Papua New Guinea Time'
                break;
            case 11:
                zoneNumber = 'Solomon Islands Time'
                break;
            case 12:
                zoneNumber = 'New Zealand Standard Time'
                break;
            case 13:
                zoneNumber = 'Tonga Time'
                break;
            case 14:
                zoneNumber = 'Line Islands Time'
                break;
            default:
                zoneNumber
        }
        $('#visibility').text(`Visibility : ${Math.round(data.visibility / 1609)} miles`);
        $('#humidity').text(`Humidity : ${data.main.humidity} %`);
        let windDegree = data.wind.deg;
        switch (true) {
            case ((windDegree >= 348.75 && windDegree <= 360) || (windDegree >= 0 && windDegree <= 11.25)):
                windDegree = "N"
                break;
            case ((windDegree >= 11.26 && windDegree <= 33.75)):
                windDegree = "NNE"
                break;
            case ((windDegree >= 33.76 && windDegree <= 56.25)):
                windDegree = "NE"
                break;
            case ((windDegree >= 56.26 && windDegree <= 78.75)):
                windDegree = "ENE"
                break;
            case ((windDegree >= 78.76 && windDegree <= 101.25)):
                windDegree = "E"
                break;
            case ((windDegree >= 101.26 && windDegree <= 123.75)):
                windDegree = "ESE"
                break;
            case ((windDegree >= 123.76 && windDegree <= 146.25)):
                windDegree = "SE"
                break;
            case ((windDegree >= 146.26 && windDegree <= 168.75)):
                windDegree = "SSE"
                break;
            case ((windDegree >= 168.76 && windDegree <= 191.25)):
                windDegree = "S"
                break;
            case ((windDegree >= 191.26 && windDegree <= 213.75)):
                windDegree = "SSW"
                break;
            case ((windDegree >= 213.76 && windDegree <= 236.25)):
                windDegree = "SW"
                break;
            case ((windDegree >= 236.26 && windDegree <= 258.75)):
                windDegree = "WSW"
                break;
            case ((windDegree >= 258.76 && windDegree <= 281.25)):
                windDegree = "W"
                break;
            case ((windDegree >= 281.26 && windDegree <= 303.75)):
                windDegree = "WNW"
                break;
            case ((windDegree >= 303.76 && windDegree <= 326.25)):
                windDegree = "NW"
                break;
            case ((windDegree >= 326.26 && windDegree <= 348.75)):
                windDegree = "NNW"
                break;
            default:
                windDegree;
        }
        $('#wind').text(`Wind : ${Math.round(data.wind.speed * 2.237)} Mph ${windDegree}`);
        $('#cloudcover').text(`Cloud Coverage : ${data.clouds.all}%`);
        let unixSunRise = data.sys.sunrise;
        let dateRise = new Date(unixSunRise * 1000);
        $('#sunrise').text(`Sunrise : ${dateRise.toTimeString().substring(1,9)}AM`);
        let unixSunSet = data.sys.sunset;
        let dateSet = new Date(unixSunSet * 1000);
        $('#sunset').text(`Sunset : ${dateSet.toTimeString().substring(0,9)}PM`);
        
    })

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=AAPL", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        response.json().then(data => {
            console.log(data);
            $('#stockName').text(`${data.symbol}`)
            $('#price').text(`${data.price.regularMarketPrice.raw}`);
            $('#oldPrice').text(`(${data.price.regularMarketPreviousClose.raw})`);
            if(data.price.regularMarketChange.raw >= 0){
                $('#icon').attr('src', 'up.png')
            }else{
                $('#icon').attr('src', 'down.png')
            }
            $('#change').text(`${data.price.regularMarketChange.raw.toFixed(2)}`)

        });
    })
    .catch(err => {
        console.log(err);
    });

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=FB", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        response.json().then(data => {
            console.log(data);
            $('#stockName2').text(`${data.symbol}`)
            $('#price2').text(`${data.price.regularMarketPrice.raw}`);
            $('#oldPrice2').text(`(${data.price.regularMarketPreviousClose.raw})`);
            if(data.price.regularMarketChange.raw >= 0){
                $('#icon2').attr('src', 'up.png')
            }else{
                $('#icon2').attr('src', 'down.png')
            }
            $('#change2').text(`${data.price.regularMarketChange.raw.toFixed(2)}`)

        });
    })
    .catch(err => {
        console.log(err);
    });

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=DIS", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        response.json().then(data => {
            console.log(data);
            $('#stockName3').text(`${data.symbol}`)
            $('#price3').text(`${data.price.regularMarketPrice.raw}`);
            $('#oldPrice3').text(`(${data.price.regularMarketPreviousClose.raw})`);
            if(data.price.regularMarketChange.raw >= 0){
                $('#icon3').attr('src', 'up.png')
            }else{
                $('#icon3').attr('src', 'down.png')
            }
            $('#change3').text(`${data.price.regularMarketChange.raw.toFixed(2)}`)

        });
    })
    .catch(err => {
        console.log(err);
    });

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=GOOGL", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        response.json().then(data => {
            console.log(data);
            $('#stockName4').text(`${data.symbol}`)
            $('#price4').text(`${data.price.regularMarketPrice.raw}`);
            $('#oldPrice4').text(`(${data.price.regularMarketPreviousClose.raw})`);
            if(data.price.regularMarketChange.raw >= 0){
                $('#icon4').attr('src', 'up.png')
            }else{
                $('#icon4').attr('src', 'down.png')
            }
            $('#change4').text(`${data.price.regularMarketChange.raw.toFixed(2)}`)

        });
    })
    .catch(err => {
        console.log(err);
    });




//ENTERTAINMENT

document.getElementById('Entertainment').addEventListener('click', () => {

    $('#Entertainment').css('content', '\25BF')

    let E1 = document.getElementById('E1');
    let E2 = document.getElementById('E2');

    if(!E1.style.display || E1.style.display === 'none'){
        E1.style.display = 'block'; 
    }else{
        E1.style.display = 'none'; 
    }

    if(!E2.style.display || E2.style.display === 'none'){
        E2.style.display = 'block'; 
    }else{
        E2.style.display = 'none'; 
    }
})

//SPORTS

document.getElementById('Sports').addEventListener('click', () => {

    let S1 = document.getElementById('S1');
    let S2 = document.getElementById('S2');
    let S3 = document.getElementById('S3');
    let S4 = document.getElementById('S4');
    let S5 = document.getElementById('S5');
    let S6 = document.getElementById('S6');
    let S7 = document.getElementById('S7');
    let S8 = document.getElementById('S8');
    let S9 = document.getElementById('S9');

    if(!S1.style.display || S1.style.display === 'none'){
        S1.style.display = 'block'; 
    }else{
        S1.style.display = 'none'; 
    }

    if(!S2.style.display || S2.style.display === 'none'){
        S2.style.display = 'block'; 
    }else{
        S2.style.display = 'none'; 
    }
    if(!S3.style.display || S3.style.display === 'none'){
        S3.style.display = 'block'; 
    }else{
        S3.style.display = 'none'; 
    }

    if(!S4.style.display || S4.style.display === 'none'){
        S4.style.display = 'block'; 
    }else{
        S4.style.display = 'none'; 
    }
    if(!S5.style.display || S5.style.display === 'none'){
        S5.style.display = 'block'; 
    }else{
        S5.style.display = 'none'; 
    }

    if(!S6.style.display || S6.style.display === 'none'){
        S6.style.display = 'block'; 
    }else{
        S6.style.display = 'none'; 
    }
    if(!S7.style.display || S7.style.display === 'none'){
        S7.style.display = 'block'; 
    }else{
        S7.style.display = 'none'; 
    }

    if(!S8.style.display || S8.style.display === 'none'){
        S8.style.display = 'block'; 
    }else{
        S8.style.display = 'none'; 
    }
    if(!S9.style.display || S9.style.display === 'none'){
        S9.style.display = 'block'; 
    }else{
        S9.style.display = 'none'; 
    }
})

//US

document.getElementById('US').addEventListener('click', () => {

    let US1 = document.getElementById('US1');
    let US2 = document.getElementById('US2');
    let US3 = document.getElementById('US3');
    let US4 = document.getElementById('US4');

    if(!US1.style.display || US1.style.display === 'none'){
       US1.style.display = 'block'; 
    }else{
        US1.style.display = 'none'; 
    }

    if(!US2.style.display || US2.style.display === 'none'){
        US2.style.display = 'block'; 
    }else{
        US2.style.display = 'none'; 
    }

    if(!US3.style.display || US3.style.display === 'none'){
        US3.style.display = 'block'; 
    }else{
        US3.style.display = 'none'; 
    }

    if(!US4.style.display || US4.style.display === 'none'){
        US4.style.display = 'block'; 
    }else{
        US4.style.display = 'none'; 
    }
})

//WORLD

document.getElementById('World').addEventListener('click', () => {

    let World1 = document.getElementById('World1');
    let World2 = document.getElementById('World2');
    let World3 = document.getElementById('World3');
    let World4 = document.getElementById('World4');
    let World5 = document.getElementById('World5');

    if(!World1.style.display || World1.style.display === 'none'){
        World1.style.display = 'block'; 
    }else{
        World1.style.display = 'none'; 
    }

    if(!World2.style.display || World2.style.display === 'none'){
        World2.style.display = 'block'; 
    }else{
        World2.style.display = 'none'; 
    }

    if(!World3.style.display || World3.style.display === 'none'){
        World3.style.display = 'block'; 
    }else{
        World3.style.display = 'none'; 
    }

    if(!World4.style.display || World4.style.display === 'none'){
        World4.style.display = 'block'; 
    }else{
        World4.style.display = 'none'; 
    }

    if(!World5.style.display || World5.style.display === 'none'){
        World5.style.display = 'block'; 
    }else{
        World5.style.display = 'none'; 
    }

})


//List Of Categories EndPoints

//Business

//Entertainment
//Entertainment_MovieAndTv
//Entertainment_Music

//Health

//Politics

//Products

//Technology
//Science

//Sports
//Sports_Golf
//Sports_MLB
//Sports_NBA
//Sports_NFL
//Sports_NHL
//Sports_Soccer
//Sports_Tennis
//Sports_CFB
//Sports_CBB

//US
//US_Northeast
//US_South
//US_Midwest
//US_West

//World
//World_Africa
//World_Americas
//World_Asia
//World_Europe
//World_MiddleEast