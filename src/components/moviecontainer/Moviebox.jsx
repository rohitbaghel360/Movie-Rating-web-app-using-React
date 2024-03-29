import React from 'react';
import './moviebox.css';
import Detailscontainer from './detailscontainer';

export default function moviebox() {
    const movies = [
        {
            "score": 0.702486,
            "show": {
                "id": 42181,
                "url": "https://www.tvmaze.com/shows/42181/all-rise",
                "name": "All Rise",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Legal"
                ],
                "status": "Running",
                "runtime": 60,
                "averageRuntime": 60,
                "premiered": "2019-09-23",
                "ended": null,
                "officialSite": "https://www.oprah.com/sp/all-rise.html",
                "schedule": {
                    "time": "21:00",
                    "days": [
                        "Tuesday"
                    ]
                },
                "rating": {
                    "average": 6.6
                },
                "weight": 99,
                "network": {
                    "id": 236,
                    "name": "Oprah Winfrey Network",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": null
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 363841,
                    "imdb": "tt10329042"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
                },
                "summary": "<p><b>All Rise</b> is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who doesn't intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be.</p>",
                "updated": 1662811256,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/42181"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/2320791"
                    }
                }
            }
        },
        {
            "score": 0.7019465,
            "show": {
                "id": 34653,
                "url": "https://www.tvmaze.com/shows/34653/all-american",
                "name": "All American",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Sports"
                ],
                "status": "Running",
                "runtime": 60,
                "averageRuntime": 60,
                "premiered": "2018-10-10",
                "ended": null,
                "officialSite": "http://www.cwtv.com/shows/all-american/",
                "schedule": {
                    "time": "20:00",
                    "days": [
                        "Monday"
                    ]
                },
                "rating": {
                    "average": 6.5
                },
                "weight": 97,
                "network": {
                    "id": 5,
                    "name": "The CW",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "https://www.cwtv.com/"
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 348200,
                    "imdb": "tt7414406"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/401/1003157.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/401/1003157.jpg"
                },
                "summary": "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
                "updated": 1662803085,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/34653"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/2314264"
                    },
                    "nextepisode": {
                        "href": "https://api.tvmaze.com/episodes/2357510"
                    }
                }
            }
        },
        {
            "score": 0.69695616,
            "show": {
                "id": 31428,
                "url": "https://www.tvmaze.com/shows/31428/all-night",
                "name": "All Night",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Comedy"
                ],
                "status": "Ended",
                "runtime": null,
                "averageRuntime": 23,
                "premiered": "2018-05-11",
                "ended": "2018-05-11",
                "officialSite": "https://www.hulu.com/all-night",
                "schedule": {
                    "time": "",
                    "days": []
                },
                "rating": {
                    "average": 8
                },
                "weight": 86,
                "network": null,
                "webChannel": {
                    "id": 2,
                    "name": "Hulu",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "https://www.hulu.com/"
                },
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 346001,
                    "imdb": "tt7292950"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg"
                },
                "summary": "<p>After their graduation, the class of 2018 gathers to celebrate their last night together at their local rec center for \"Grad Night,\" an all-night party with dancing, karaoke, games—and a rule that no one can come in or out for twelve full hours. For most the night signals their last chance to accomplish some high school dream: Nerdy Cody wants to make his mark on the school, and popular Roni wants to finally lose her virginity to her boyfriend Oz. Valedictorian Melinda plans to sneakily sell alcohol to her classmates at the party to pay her tuition, and every-girl Deanna gets ready to finally admit her feelings for her best friend Fig, who only has eyes for Roni. As the night goes on, the kids' quests overlap, intertwine, and -in some cases- implode. What would you do with your last night in high school?</p>",
                "updated": 1651425957,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/31428"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/1461722"
                    }
                }
            }
        },
        {
            "score": 0.694781,
            "show": {
                "id": 6305,
                "url": "https://www.tvmaze.com/shows/6305/all-that",
                "name": "All That",
                "type": "Variety",
                "language": "English",
                "genres": [
                    "Comedy"
                ],
                "status": "Ended",
                "runtime": 25,
                "averageRuntime": 25,
                "premiered": "1994-12-24",
                "ended": "2005-10-22",
                "officialSite": null,
                "schedule": {
                    "time": "21:00",
                    "days": [
                        "Saturday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 82,
                "network": {
                    "id": 27,
                    "name": "Nickelodeon",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "https://www.nick.com/"
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 75208,
                    "imdb": "tt0111875"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg"
                },
                "summary": "<p><b>All That</b> is an American live-action, sketch comedy-variety show that aired on the Nickelodeon cable television network featuring short comedic sketches and weekly musical guests. ork.</p>",
                "updated": 1649599498,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/6305"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/1268569"
                    }
                }
            }
        },
        {
            "score": 0.694051,
            "show": {
                "id": 19227,
                "url": "https://www.tvmaze.com/shows/19227/all-out",
                "name": "All Out!!",
                "type": "Animation",
                "language": "Japanese",
                "genres": [
                    "Drama",
                    "Anime",
                    "Sports"
                ],
                "status": "Ended",
                "runtime": 25,
                "averageRuntime": 25,
                "premiered": "2016-10-06",
                "ended": "2017-03-30",
                "officialSite": "http://allout-anime.com",
                "schedule": {
                    "time": "00:00",
                    "days": [
                        "Thursday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 81,
                "network": {
                    "id": 132,
                    "name": "Tokyo MX",
                    "country": {
                        "name": "Japan",
                        "code": "JP",
                        "timezone": "Asia/Tokyo"
                    },
                    "officialSite": null
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 308030,
                    "imdb": "tt6738600"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/67/168214.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg"
                },
                "summary": "<p>In rugby, there is no ace striker, there is no number four batter, so who is the star of the team?</p><p>The story begins at school entrance ceremony of Kanagawa High School where Kenji Gion, a small but gutsy go-getter joins the rugby club. He joins with his classmate, Iwashimizu, who has a complicated past and sub-captain Hachiouji, who always takes good care of his Club members. Lastly, there is Captain Sekizan, who has overwhelming powers but keeps his cards close to his chest. With such differences in both personality and physical performance, the team must learn to work and grow together so they can become the best.</p>",
                "updated": 1661485177,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/19227"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/1096369"
                    }
                }
            }
        },
        {
            "score": 0.6935176,
            "show": {
                "id": 9526,
                "url": "https://www.tvmaze.com/shows/9526/all-saints",
                "name": "All Saints",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Medical"
                ],
                "status": "Ended",
                "runtime": 60,
                "averageRuntime": 60,
                "premiered": "1998-02-24",
                "ended": "2009-10-27",
                "officialSite": null,
                "schedule": {
                    "time": "20:30",
                    "days": [
                        "Tuesday"
                    ]
                },
                "rating": {
                    "average": 7.8
                },
                "weight": 76,
                "network": {
                    "id": 251,
                    "name": "Seven Network",
                    "country": {
                        "name": "Australia",
                        "code": "AU",
                        "timezone": "Australia/Sydney"
                    },
                    "officialSite": null
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 71815,
                    "imdb": "tt0163924"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/408/1022051.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg"
                },
                "summary": "<p><b>All Saints</b> follows the lives of the staff at All Saints Western General Hospital. Until its closure in 2004, the show primarily focused on the staff in Ward 17. Known as the \"garbage ward\" as it took all the overflow from the other wards.</p>",
                "updated": 1652618960,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/9526"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/512065"
                    }
                }
            }
        },
        {
            "score": 0.6903323,
            "show": {
                "id": 31147,
                "url": "https://www.tvmaze.com/shows/31147/all-wrong",
                "name": "All Wrong",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Comedy"
                ],
                "status": "Ended",
                "runtime": null,
                "averageRuntime": 10,
                "premiered": "2017-04-03",
                "ended": "2018-03-20",
                "officialSite": null,
                "schedule": {
                    "time": "",
                    "days": [
                        "Monday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 74,
                "network": null,
                "webChannel": {
                    "id": 186,
                    "name": "Blackpills",
                    "country": {
                        "name": "France",
                        "code": "FR",
                        "timezone": "Europe/Paris"
                    },
                    "officialSite": "https://blackpills.com/"
                },
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 328412,
                    "imdb": "tt6285708"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/124/310674.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/124/310674.jpg"
                },
                "summary": "<p>Carlos finds himself unemployed, broke, and in debt. When he finally manages to bring home a woman for a one-night stand, everything gets even worse.</p>",
                "updated": 1653823870,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/31147"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/2336093"
                    }
                }
            }
        },
        {
            "score": 0.6899696,
            "show": {
                "id": 42312,
                "url": "https://www.tvmaze.com/shows/42312/all-that",
                "name": "All That",
                "type": "Variety",
                "language": "English",
                "genres": [
                    "Comedy",
                    "Children",
                    "Music"
                ],
                "status": "Ended",
                "runtime": 30,
                "averageRuntime": 30,
                "premiered": "2019-06-15",
                "ended": "2020-12-17",
                "officialSite": "https://www.nick.com/shows/all-that",
                "schedule": {
                    "time": "21:00",
                    "days": [
                        "Saturday"
                    ]
                },
                "rating": {
                    "average": 6
                },
                "weight": 71,
                "network": {
                    "id": 27,
                    "name": "Nickelodeon",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "https://www.nick.com/"
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": null,
                    "imdb": "tt10309492"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/200/501970.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg"
                },
                "summary": "<p>The new kids of comedy bring the funny as <b>All That</b>, America's #1 kid's sketch comedy show, returns with a new cast and a few familiar faces. From Executive Producers Kenan Thompson and Kel Mitchell.</p>",
                "updated": 1652636973,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/42312"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/1969275"
                    }
                }
            }
        },
        {
            "score": 0.6883455,
            "show": {
                "id": 8600,
                "url": "https://www.tvmaze.com/shows/8600/all-access",
                "name": "All Access",
                "type": "Documentary",
                "language": "English",
                "genres": [
                    "Sports"
                ],
                "status": "Running",
                "runtime": 30,
                "averageRuntime": 30,
                "premiered": "2012-06-13",
                "ended": null,
                "officialSite": "http://www.sho.com/sho/all-access/home",
                "schedule": {
                    "time": "21:30",
                    "days": [
                        "Saturday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 71,
                "network": {
                    "id": 9,
                    "name": "Showtime",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": "https://www.sho.com/"
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 269888,
                    "imdb": null
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/75/189678.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/75/189678.jpg"
                },
                "summary": "<p><b>All Access</b> is an exclusive Showtime TV documentary series of 30-minute specials that chronicles the lives of athletes in unarmed combat sports.</p>",
                "updated": 1653765527,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/8600"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/2335729"
                    }
                }
            }
        },
        {
            "score": 0.6882169,
            "show": {
                "id": 32110,
                "url": "https://www.tvmaze.com/shows/32110/all-souls",
                "name": "All Souls",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Horror"
                ],
                "status": "Ended",
                "runtime": 60,
                "averageRuntime": 60,
                "premiered": "2001-04-17",
                "ended": "2001-08-31",
                "officialSite": null,
                "schedule": {
                    "time": "21:00",
                    "days": [
                        "Friday"
                    ]
                },
                "rating": {
                    "average": null
                },
                "weight": 70,
                "network": {
                    "id": 70,
                    "name": "UPN",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    },
                    "officialSite": null
                },
                "webChannel": null,
                "dvdCountry": null,
                "externals": {
                    "tvrage": null,
                    "thetvdb": 248561,
                    "imdb": "tt0280229"
                },
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"
                },
                "summary": "<p>In a haunted Boston hospital called <b>All Souls </b>Hospital, Dr. Mitchell Grace's tries to find out the truth about the hauntings that dated as far back as the civil war. All Souls Hospital's lower levels used to be a mental asylum, and are haunted by ghosts of dead patients. The ghosts notably include Lazarus, an orderly who has been benevolently haunting the hospital since his days working with Dr. Ambrosius after the Civil War.</p>",
                "updated": 1652621440,
                "_links": {
                    "self": {
                        "href": "https://api.tvmaze.com/shows/32110"
                    },
                    "previousepisode": {
                        "href": "https://api.tvmaze.com/episodes/1311156"
                    }
                }
            }
        }
        ]

    return (

        <>
            <div className="d-flex flex-row justify-content-around align-items-center md-4">
                <Detailscontainer imgsource= {movies[0]['show']['image']['medium']} title={movies[0]['show']['name']} rating= {movies[0]['show']['rating']['average']} url = {movies[0]['show']['url']}/>
                <Detailscontainer imgsource= {movies[1]['show']['image']['medium']} title={movies[1]['show']['name']} rating= {movies[1]['show']['rating']['average']} url = {movies[1]['show']['url']}/>
                <Detailscontainer imgsource= {movies[2]['show']['image']['medium']} title={movies[2]['show']['name']} rating= {movies[2]['show']['rating']['average']} url = {movies[2]['show']['url']}/>
                <Detailscontainer imgsource= {movies[3]['show']['image']['medium']} title={movies[3]['show']['name']} rating= {movies[3]['show']['rating']['average']} url = {movies[3]['show']['url']}/>
                <Detailscontainer imgsource= {movies[4]['show']['image']['medium']} title={movies[4]['show']['name']} rating= {movies[4]['show']['rating']['average']} url = {movies[4]['show']['url']}/>
                
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center md-4">
                <Detailscontainer imgsource= {movies[5]['show']['image']['medium']} title={movies[5]['show']['name']} rating= {movies[5]['show']['rating']['average']} url = {movies[5]['show']['url']}/>
                <Detailscontainer imgsource= {movies[6]['show']['image']['medium']} title={movies[6]['show']['name']} rating= {movies[6]['show']['rating']['average']} url = {movies[6]['show']['url']}/>
                <Detailscontainer imgsource= {movies[7]['show']['image']['medium']} title={movies[7]['show']['name']} rating= {movies[7]['show']['rating']['average']} url = {movies[7]['show']['url']}/>
                <Detailscontainer imgsource= {movies[8]['show']['image']['medium']} title={movies[3]['show']['name']} rating= {movies[8]['show']['rating']['average']} url = {movies[8]['show']['url']}/>
                <Detailscontainer imgsource= {movies[9]['show']['image']['medium']} title={movies[9]['show']['name']} rating= {movies[9]['show']['rating']['average']} url = {movies[9]['show']['url']}/>
                
            </div>
        </>
    )
}