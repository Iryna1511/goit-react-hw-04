import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 16,
      client_id: "L3oNBkxGmmmx6KxYA22nKxS9s3chFacv8PWv1laI7g4",
      orientation: "landscape",
    },
  });

  return response.data.hits;
};

//      "id": "obsBswnv7FI",
//     "slug": "low-light-photo-of-sun-obsBswnv7FI",
//     "alternative_slugs": {
//         "en": "low-light-photo-of-sun-obsBswnv7FI",
//         "es": "foto-de-sol-con-poca-luz-obsBswnv7FI",
//         "ja": "太陽の低照度写真-obsBswnv7FI",
//         "fr": "photo-du-soleil-en-basse-lumiere-obsBswnv7FI",
//         "it": "foto-del-sole-in-condizioni-di-scarsa-illuminazione-obsBswnv7FI",
//         "ko": "태양의-저조도-사진-obsBswnv7FI",
//         "de": "low-light-foto-der-sonne-obsBswnv7FI",
//         "pt": "foto-de-luz-baixa-do-sol-obsBswnv7FI"
//     },

//     "created_at": "2019-12-09T08:58:23Z",
//     "updated_at": "2024-05-17T10:05:12Z",
//     "promoted_at": null,
//     "width": 5184,
//     "height": 3456,
//     "color": "#26260c",
//     "blur_hash": "LB9Y-vAG1L}n^3NdI@-75p$#-Q9|",
//     "description": "Source of Energy",
//     "alt_description": "low-light photo of sun",
//     "breadcrumbs": [
//         {
//             "slug": "images",
//             "title": "1,000,000+ Free Images",
//             "index": 0,
//             "type": "landing_page"
//         },
//         {
//             "slug": "nature",
//             "title": "Nature Images",
//             "index": 1,
//             "type": "landing_page"
//         },
//         {
//             "slug": "sun",
//             "title": "Sun Images \u0026 Pictures",
//             "index": 2,
//             "type": "landing_page"
//         }
//     ],

//     "urls": {
//         "raw": "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww\u0026ixlib=rb-4.0.3",
//         "full": "https://images.unsplash.com/photo-1575881875475-31023242e3f9?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww\u0026ixlib=rb-4.0.3\u0026q=85",
//*        "regular": "https://images.unsplash.com/photo-1575881875475-31023242e3f9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
// *       "small": "https://images.unsplash.com/photo-1575881875475-31023242e3f9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
//         "thumb": "https://images.unsplash.com/photo-1575881875475-31023242e3f9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
//         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1575881875475-31023242e3f9"
//     },

//     "links": {
//         "self": "https://api.unsplash.com/photos/low-light-photo-of-sun-obsBswnv7FI",
//         "html": "https://unsplash.com/photos/low-light-photo-of-sun-obsBswnv7FI",
//         "download": "https://unsplash.com/photos/obsBswnv7FI/download?ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww",
//         "download_location": "https://api.unsplash.com/photos/obsBswnv7FI/download?ixid=M3w2MTMwNDh8MHwxfHNlYXJjaHwxfHxzdW58ZW58MHwwfHx8MTcxNjAxMDczOHww"
//     },

//     "likes": 432,
//     "liked_by_user": false,
//     "current_user_collections": [],
//     "sponsorship": null,
//     "topic_submissions": {},
//     "asset_type": "photo",
//     "user": {
//         "id": "PMnKmVeDvco",
//         "updated_at": "2023-10-08T17:20:13Z",
//         "username": "lenstravelier",
//         "name": "Lenstravelier",
//         "first_name": "Lenstravelier",
//         "last_name": null,
//         "twitter_username": null,
//         "portfolio_url": "https://www.lenstravelier.com/",
//         "bio": "Software Developer / Photographer /  Drone Pilot",
//         "location": "Gandhinagar, India",
//         "links": {
//             "self": "https://api.unsplash.com/users/lenstravelier",
//             "html": "https://unsplash.com/@lenstravelier",
//             "photos": "https://api.unsplash.com/users/lenstravelier/photos",
//             "likes": "https://api.unsplash.com/users/lenstravelier/likes",
//             "portfolio": "https://api.unsplash.com/users/lenstravelier/portfolio",
//             "following": "https://api.unsplash.com/users/lenstravelier/following",
//             "followers": "https://api.unsplash.com/users/lenstravelier/followers"
//         },
//         "profile_image": {
//             "small": "https://images.unsplash.com/profile-1632216916366-01cb752cd837image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
//             "medium": "https://images.unsplash.com/profile-1632216916366-01cb752cd837image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
//             "large": "https://images.unsplash.com/profile-1632216916366-01cb752cd837image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
//         },
//         "instagram_username": "lenstravelier",
//         "total_collections": 6,
//         "total_likes": 293,
//         "total_photos": 1012,
//         "total_promoted_photos": 11,
//         "total_illustrations": 0,
//         "total_promoted_illustrations": 0,
//         "accepted_tos": true,
//         "for_hire": true,
//         "social": {
//             "instagram_username": "lenstravelier",
//             "portfolio_url": "https://www.lenstravelier.com/",
//             "twitter_username": null,
//             "paypal_email": null
//         }
//     },

//     "tags": [
//         {
//             "type": "search",
//             "title": "india"
//         },
//         {
//             "type": "landing_page",
//             "title": "sun",
//             "source": {
//                 "ancestry": {
//                     "type": {
//                         "slug": "images",
//                         "pretty_slug": "Images"
//                     },
//                     "category": {
//                         "slug": "nature",
//                         "pretty_slug": "Nature"
//                     },
//                     "subcategory": {
//                         "slug": "sun",
//                         "pretty_slug": "Sun"
//                     }
//                 },
//                 "title": "Sun images \u0026 pictures",
//                 "subtitle": "Download free sun images",
//                 "description": "Choose from a curated selection of sun photos. Always free on Unsplash.",
//                 "meta_title": "Best 100+ Sun Images [HD] | Download Free Pictures on Unsplash",
//                 "meta_description": "Choose from hundreds of free sun pictures. Download HD sun photos for free on Unsplash.",
//                 "cover_photo": {
//                     "id": "xP_AGmeEa6s",
//                     "slug": "sunset-over-the-horizon-xP_AGmeEa6s",
//                     "alternative_slugs": {
//                         "en": "sunset-over-the-horizon-xP_AGmeEa6s",
//                         "es": "puesta-de-sol-en-el-horizonte-xP_AGmeEa6s",
//                         "ja": "地平線に沈む夕日-xP_AGmeEa6s",
//                         "fr": "coucher-de-soleil-a-lhorizon-xP_AGmeEa6s",
//                         "it": "tramonto-sullorizzonte-xP_AGmeEa6s",
//                         "ko": "수평선-너머로-지는-일몰-xP_AGmeEa6s",
//                         "de": "sonnenuntergang-uber-dem-horizont-xP_AGmeEa6s",
//                         "pt": "por-do-sol-no-horizonte-xP_AGmeEa6s"
//                     },
//                     "created_at": "2017-05-12T00:17:53Z",
//                     "updated_at": "2024-05-09T13:43:23Z",
//                     "promoted_at": "2017-05-12T09:39:01Z",
//                     "width": 3172,
//                     "height": 3172,
//                     "color": "#f3d9d9",
//                     "blur_hash": "L,KB2QxYIoWB%~aejsoL0zRkt7W=",
//                     "description": "burn bright.",
//                     "alt_description": "sunset over the horizon",
//                     "breadcrumbs": [
//                         {
//                             "slug": "backgrounds",
//                             "title": "HQ Background Images",
//                             "index": 0,
//                             "type": "landing_page"
//                         },
//                         {
//                             "slug": "nature",
//                             "title": "Nature Backgrounds",
//                             "index": 1,
//                             "type": "landing_page"
//                         },
//                         {
//                             "slug": "sunset",
//                             "title": "Sunset Backgrounds",
//                             "index": 2,
//                             "type": "landing_page"
//                         }
//                     ],

//                     "urls": {
//                         "raw": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3",
//                         "full": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
//                         "regular": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max",
//                         "small": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max",
//                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494548162494-384bba4ab999"
//                     },
//                     "links": {
//                         "self": "https://api.unsplash.com/photos/sunset-over-the-horizon-xP_AGmeEa6s",
//                         "html": "https://unsplash.com/photos/sunset-over-the-horizon-xP_AGmeEa6s",
//                         "download": "https://unsplash.com/photos/xP_AGmeEa6s/download",
//                         "download_location": "https://api.unsplash.com/photos/xP_AGmeEa6s/download"
//                     },
//                     "likes": 4228,
//                     "liked_by_user": false,
//                     "current_user_collections": [],
//                     "sponsorship": null,
//                     "topic_submissions": {},
//                     "asset_type": "photo",
//                     "premium": false,
//                     "plus": false,
//                     "user": {
//                         "id": "2Gb7QZCZ6f4",
//                         "updated_at": "2024-01-07T18:31:34Z",
//                         "username": "j_wozy",
//                         "name": "Jordan Wozniak",
//                         "first_name": "Jordan",
//                         "last_name": "Wozniak",
//                         "twitter_username": "j_wozy",
//                         "portfolio_url": "http://www.jordanwozy.com/",
//                         "bio": "Photographer, Director in Southern California. IG: @jordanwozy ",
//                         "location": "Los Angeles, CA",
//                         "links": {
//                             "self": "https://api.unsplash.com/users/j_wozy",
//                             "html": "https://unsplash.com/@j_wozy",
//                             "photos": "https://api.unsplash.com/users/j_wozy/photos",
//                             "likes": "https://api.unsplash.com/users/j_wozy/likes",
//                             "portfolio": "https://api.unsplash.com/users/j_wozy/portfolio",
//                             "following": "https://api.unsplash.com/users/j_wozy/following",
//                             "followers": "https://api.unsplash.com/users/j_wozy/followers"
//                         },
//                         "profile_image": {
//                             "small": "https://images.unsplash.com/profile-1494547972332-68fd6ba5e3f1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
//                             "medium": "https://images.unsplash.com/profile-1494547972332-68fd6ba5e3f1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
//                             "large": "https://images.unsplash.com/profile-1494547972332-68fd6ba5e3f1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
//                         },
//                         "instagram_username": "jordanwozy",
//                         "total_collections": 0,
//                         "total_likes": 5,
//                         "total_photos": 2,
//                         "total_promoted_photos": 1,
//                         "total_illustrations": 0,
//                         "total_promoted_illustrations": 0,
//                         "accepted_tos": false,
//                         "for_hire": true,
//                         "social": {
//                             "instagram_username": "jordanwozy",
//                             "portfolio_url": "http://www.jordanwozy.com/",
//                             "twitter_username": "j_wozy",
//                             "paypal_email": null
//                         }
//                     }
//                 }
//             }
//         },
//         {
//             "type": "search",
//             "title": "gujarat"
//         }
//     ]
// },
