let listUrl = '	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240604';
let infoUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=';

//콜백지옥
fetch(listUrl)
    .then(res => res.json())
    .then(res => {
        let movieCd = res.boxOfficeResult.dailyBoxOfficeList[0].movieCd
        fetch(infoUrl + movieCd)
        .then(res => res.json())
        .then(res => console.log(res.movieInfoResult.movieInfo.directors[0].peopleNm))
    });

//async,await
async function movieInfo(){ //반드시 함수로 묶어줘야함
    let res = await fetch(listUrl) //변수에 넣어줘야함
                        .then(res => res.json())
    let movieCd = res.boxOfficeResult.dailyBoxOfficeList[0].movieCd;

    res = await fetch(infoUrl + movieCd)
        .then(res => res.json())

    console.log(res.movieInfoResult.movieInfo.actors)
}
movieInfo();

