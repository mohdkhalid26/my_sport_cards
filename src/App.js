import "./App.css";
import React from "react";
import { useState } from "react";
// import { useEffect } from "react";

export default function App() {
  const [data] = useState([
    {
      id: "879144f0-2866-4f62-9e79-87db0a10ef86",
      name: "Hong Kong Women vs India A Women, 4th Match, Group A",
      matchType: "t20",
      status: "Match not started",
      venue: "Mission Road Ground, Mong Kok",
      date: "2023-06-13",
      dateTimeGMT: "2023-06-13T05:30:00",
      teams: ["Hong Kong Women", "India A Women"],
      teamInfo: [
        {
          name: "Hong Kong Women",
          shortname: "HKGW",
          img: "https://g.cricapi.com/iapi/1123-637877089446450033.webp?w=48",
        },
        {
          name: "India A Women",
          shortname: "IND-A",
          img: "https://g.cricapi.com/iapi/3151-638049769196782817.webp?w=48",
        },
      ],
      score: [],
      series_id: "700d6740-82d3-4621-9c07-e274afc8b640",
      fantasyEnabled: false,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "57f0e55c-bf53-481a-aaa0-602add993436",
      name: "Nepal Women vs Pakistan A Women, 3rd Match, Group A",
      matchType: "t20",
      status: "Pakistan A Women won by 9 runs",
      venue: "Mission Road Ground, Mong Kok",
      date: "2023-06-13",
      dateTimeGMT: "2023-06-13T01:00:00",
      teams: ["Nepal Women", "Pakistan A Women"],
      teamInfo: [
        {
          name: "Nepal Women",
          shortname: "NEPW",
          img: "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48",
        },
      ],
      score: [
        { r: 87, w: 10, o: 19.2, inning: "Pakistan A Women Inning 1" },
        { r: 78, w: 6, o: 20, inning: "Nepal Women Inning 1" },
      ],
      series_id: "700d6740-82d3-4621-9c07-e274afc8b640",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "c3ee7db9-2d7e-4871-a5d1-5972610f6004",
      name: "Bangladesh A Women vs Malaysia Women, 2nd Match, Group B",
      matchType: "t20",
      status: "Bangladesh A Women won by 97 runs",
      venue: "Mission Road Ground, Mong Kok",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T05:30:00",
      teams: ["Bangladesh A Women", "Malaysia Women"],
      teamInfo: [
        {
          name: "Bangladesh A Women",
          img: "https://h.cricapi.com/img/icon512.png",
        },
        {
          name: "Malaysia Women",
          shortname: "ML-W",
          img: "https://g.cricapi.com/iapi/1551-637926306213013515.webp?w=48",
        },
      ],
      score: [
        { r: 148, w: 6, o: 20, inning: "Bangladesh A Women Inning 1" },
        { r: 51, w: 8, o: 20, inning: "Malaysia Women Inning 1" },
      ],
      series_id: "700d6740-82d3-4621-9c07-e274afc8b640",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "caed374b-66a3-47db-ae5e-c0f44ed15a78",
      name: "Sri Lanka A Women vs United Arab Emirates Women, 1st Match, Group B",
      matchType: "t20",
      status: "Sri Lanka A Women won by 3 wkts",
      venue: "Mission Road Ground, Mong Kok",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T01:00:00",
      teams: ["Sri Lanka A Women", "United Arab Emirates Women"],
      teamInfo: [
        {
          name: "Sri Lanka A Women",
          img: "https://h.cricapi.com/img/icon512.png",
        },
        {
          name: "United Arab Emirates Women",
          shortname: "UAEW",
          img: "https://g.cricapi.com/iapi/1136-637877081374906304.webp?w=48",
        },
      ],
      score: [
        {
          r: 95,
          w: 10,
          o: 19.3,
          inning: "United Arab Emirates Women Inning 1",
        },
        { r: 96, w: 7, o: 19.5, inning: "Sri Lanka A Women Inning 1" },
      ],
      series_id: "700d6740-82d3-4621-9c07-e274afc8b640",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "94a3720e-6a61-49fd-a19e-0be992cfc278",
      name: "Germany vs Belgium, 4th T20I",
      matchType: "t20",
      status: "Germany won by 8 wkts",
      venue: "Bayer Uerdingen Cricket Ground, Krefeld",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T08:00:00",
      teams: ["Germany", "Belgium"],
      teamInfo: [
        {
          name: "Belgium",
          shortname: "BEL",
          img: "https://g.cricapi.com/iapi/585-637869109610124568.webp?w=48",
        },
        {
          name: "Germany",
          shortname: "GER",
          img: "https://g.cricapi.com/iapi/25-637877087673982104.webp?w=48",
        },
      ],
      score: [
        { r: 148, w: 9, o: 20, inning: "Belgium Inning 1" },
        { r: 150, w: 2, o: 13, inning: "Germany Inning 1" },
      ],
      series_id: "69c3a8c8-218e-47ec-8cd0-01def4c41412",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "42fa00bb-a8b3-4b44-a49e-c3082a070e45",
      name: "Germany vs Belgium, 3rd T20I",
      matchType: "t20",
      status: "Germany won by 4 wkts",
      venue: "Bayer Uerdingen Cricket Ground, Krefeld",
      date: "2023-06-10",
      dateTimeGMT: "2023-06-10T13:00:00",
      teams: ["Germany", "Belgium"],
      teamInfo: [
        {
          name: "Belgium",
          shortname: "BEL",
          img: "https://g.cricapi.com/iapi/585-637869109610124568.webp?w=48",
        },
        {
          name: "Germany",
          shortname: "GER",
          img: "https://g.cricapi.com/iapi/25-637877087673982104.webp?w=48",
        },
      ],
      score: [
        { r: 164, w: 10, o: 19.4, inning: "Belgium Inning 1" },
        { r: 167, w: 6, o: 19.3, inning: "Germany Inning 1" },
      ],
      series_id: "69c3a8c8-218e-47ec-8cd0-01def4c41412",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "d9330438-53e6-420f-a3b7-0ce4cbfa3615",
      name: "Kenya Women vs Botswana Women, 10th Match",
      matchType: "t20",
      status: "Kenya Women won by 8 wkts",
      venue: "Gahanga International Cricket Stadium, Kigali City",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T11:45:00",
      teams: ["Kenya Women", "Botswana Women"],
      teamInfo: [
        {
          name: "Botswana Women",
          img: "https://h.cricapi.com/img/icon512.png",
        },
        {
          name: "Kenya Women",
          shortname: "KEN-W",
          img: "https://g.cricapi.com/iapi/3613-638101762433901244.webp?w=48",
        },
      ],
      score: [
        { r: 51, w: 10, o: 17.1, inning: "Botswana Women Inning 1" },
        { r: 57, w: 2, o: 10.5, inning: "Kenya Women Inning 1" },
      ],
      series_id: "31494430-655e-4a9f-8c2c-e94b24608168",
      fantasyEnabled: true,
      bbbEnabled: true,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "4527e225-3398-446e-9002-bc87f50de17f",
      name: "Nigeria Women vs Uganda Women, 9th Match",
      matchType: "t20",
      status: "Uganda Women won by 5 wkts",
      venue: "Gahanga International Cricket Stadium, Kigali City",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T07:45:00",
      teams: ["Nigeria Women", "Uganda Women"],
      teamInfo: [
        {
          name: "Nigeria Women",
          shortname: "NGW",
          img: "https://g.cricapi.com/iapi/635-637867646765235442.webp?w=48",
        },
        {
          name: "Uganda Women",
          shortname: "UGAW",
          img: "https://g.cricapi.com/iapi/1135-637877086844153505.webp?w=48",
        },
      ],
      score: [
        { r: 100, w: 5, o: 20, inning: "Nigeria Women Inning 1" },
        { r: 101, w: 5, o: 18.1, inning: "Uganda Women Inning 1" },
      ],
      series_id: "31494430-655e-4a9f-8c2c-e94b24608168",
      fantasyEnabled: true,
      bbbEnabled: true,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "39e2e5bc-ef6c-44c1-9f43-e67d33115e47",
      name: "Botswana vs Rwanda, 7th Match",
      matchType: "t20",
      status: "Match not started",
      venue: "Gymkhana Club Ground, Nairobi",
      date: "2023-06-13",
      dateTimeGMT: "2023-06-13T06:30:00",
      teams: ["Botswana", "Rwanda"],
      teamInfo: [
        {
          name: "Botswana",
          shortname: "BOT",
          img: "https://g.cricapi.com/iapi/589-637867438995934034.webp?w=48",
        },
        {
          name: "Rwanda",
          shortname: "RWN",
          img: "https://g.cricapi.com/iapi/646-637873697602208351.webp?w=48",
        },
      ],
      score: [],
      series_id: "c9d237f3-3296-4ce0-9da2-c971eff462bb",
      fantasyEnabled: false,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: false,
      matchEnded: false,
    },
    {
      id: "116c0e85-f110-40d4-97f1-0ea9dc421e7e",
      name: "Lyca Kovai Kings vs IDream Tiruppur Tamizhans, 1st Match",
      matchType: "t20",
      status: "Lyca Kovai Kings won by 70 runs",
      venue: "SNR College Cricket Ground, Coimbatore",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T13:30:00",
      teams: ["Lyca Kovai Kings", "IDream Tiruppur Tamizhans"],
      teamInfo: [
        {
          name: "IDream Tiruppur Tamizhans",
          shortname: "ITT",
          img: "https://g.cricapi.com/iapi/181-637945148142038694.webp?w=48",
        },
        {
          name: "Lyca Kovai Kings",
          shortname: "LKK",
          img: "https://g.cricapi.com/iapi/216-637940203986869942.webp?w=48",
        },
      ],
      score: [
        { r: 179, w: 7, o: 20, inning: "Lyca Kovai Kings Inning 1" },
        {
          r: 109,
          w: 10,
          o: 20,
          inning: "IDream Tiruppur Tamizhans Inning 1",
        },
      ],
      series_id: "54e3f6e3-52c7-4723-9955-308cd74f05bb",
      fantasyEnabled: true,
      bbbEnabled: true,
      hasSquad: true,
      matchStarted: true,
      matchEnded: true,
    },
    {
      id: "d30e7c08-c1be-402e-a1e1-edd83dc63cf6",
      name: "Sussex vs Worcestershire, County Div 2",
      status: "Day 2: Stumps - Worcestershire lead by 61 runs",
      venue: "County Ground, Hove",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Sussex", "Worcestershire"],
      teamInfo: [
        {
          name: "Sussex",
          shortname: "SUSS",
          img: "https://g.cricapi.com/iapi/1134-637889091814592518.webp?w=48",
        },
        {
          name: "Worcestershire",
          shortname: "WRCS",
          img: "https://g.cricapi.com/iapi/1138-637889091123850841.webp?w=48",
        },
      ],
      score: [
        { r: 348, w: 10, o: 92.4, inning: "Sussex Inning 1" },
        { r: 409, w: 9, o: 91, inning: "Worcestershire Inning 1" },
      ],
      series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "64e0af94-fb4c-4396-abd9-2ccad647b165",
      name: "Derbyshire vs Yorkshire, County Div 2",
      status: "Day 2: Stumps - Derbyshire lead by 6 runs",
      venue: "Queen\u0027s Park, Chesterfield",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Derbyshire", "Yorkshire"],
      teamInfo: [
        {
          name: "Derbyshire",
          shortname: "DERB",
          img: "https://g.cricapi.com/iapi/1117-637889091569915358.webp?w=48",
        },
        {
          name: "Yorkshire",
          shortname: "YRK",
          img: "https://g.cricapi.com/iapi/1139-637885552795894277.webp?w=48",
        },
      ],
      score: [
        { r: 111, w: 10, o: 31.4, inning: "Derbyshire Inning 1" },
        { r: 353, w: 10, o: 85.3, inning: "Yorkshire Inning 1" },
        { r: 248, w: 4, o: 59, inning: "Derbyshire Inning 2" },
      ],
      series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "c8ffab5c-f138-4057-a09c-580b47e946bb",
      name: "Gloucestershire vs Leicestershire, County Div 2",
      status: "Day 2: Stumps - Leicestershire trail by 345 runs",
      venue: "County Ground, Bristol",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Gloucestershire", "Leicestershire"],
      teamInfo: [
        {
          name: "Gloucestershire",
          shortname: "GLOU",
          img: "https://g.cricapi.com/iapi/1121-637885550747990018.webp?w=48",
        },
        {
          name: "Leicestershire",
          shortname: "LECS",
          img: "https://g.cricapi.com/iapi/1126-637889090878436462.webp?w=48",
        },
      ],
      score: [
        { r: 368, w: 10, o: 112.4, inning: "Gloucestershire Inning 1" },
        { r: 23, w: 0, o: 5, inning: "Leicestershire Inning 1" },
      ],
      series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "45748c1e-a172-4bfc-8921-9a31a907e3d7",
      name: "Durham vs Glamorgan, County Div 2",
      status: "Day 2: Stumps - Durham lead by 21 runs",
      venue: "Riverside Ground, Chester-le-Street",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Durham", "Glamorgan"],
      teamInfo: [
        {
          name: "Durham",
          shortname: "DURH",
          img: "https://g.cricapi.com/iapi/1118-637889090599643548.webp?w=48",
        },
        {
          name: "Glamorgan",
          shortname: "GLAM",
          img: "https://g.cricapi.com/iapi/1120-637889090390357869.webp?w=48",
        },
      ],
      score: [
        { r: 390, w: 10, o: 92.5, inning: "Glamorgan Inning 1" },
        { r: 411, w: 5, o: 97, inning: "Durham Inning 1" },
      ],
      series_id: "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "cd3e3e3f-9ddb-4334-8524-2465754f3e90",
      name: "Nottinghamshire vs Warwickshire, County Div 1",
      status: "Day 2: Stumps - Nottinghamshire trail by 489 runs",
      venue: "Trent Bridge, Nottingham",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Nottinghamshire", "Warwickshire"],
      teamInfo: [
        {
          name: "Nottinghamshire",
          shortname: "NOT",
          img: "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48",
        },
        {
          name: "Warwickshire",
          shortname: "WRKS",
          img: "https://g.cricapi.com/iapi/1137-637885552592685258.webp?w=48",
        },
      ],
      score: [
        { r: 571, w: 9, o: 135.2, inning: "Warwickshire Inning 1" },
        { r: 82, w: 5, o: 31.4, inning: "Nottinghamshire Inning 1" },
      ],
      series_id: "a02fe535-9179-4d64-970b-c00014482057",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "65ce8daf-ac88-4d42-9a22-a7ff08949e58",
      name: "Essex vs Somerset, County Div 1",
      status: "Day 2: Stumps - Essex lead by 310 runs",
      venue: "County Ground, Chelmsford",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Essex", "Somerset"],
      teamInfo: [
        {
          name: "Essex",
          shortname: "ESX",
          img: "https://g.cricapi.com/iapi/1119-637885549753088458.webp?w=48",
        },
        {
          name: "Somerset",
          shortname: "SOM",
          img: "https://g.cricapi.com/iapi/1131-637885552070524344.webp?w=48",
        },
      ],
      score: [
        { r: 462, w: 9, o: 119, inning: "Essex Inning 1" },
        { r: 167, w: 10, o: 61.2, inning: "Somerset Inning 1" },
        { r: 15, w: 1, o: 7, inning: "Essex Inning 2" },
      ],
      series_id: "a02fe535-9179-4d64-970b-c00014482057",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "beeeb05d-4e02-4854-ba27-7cb5219821df",
      name: "Lancashire vs Hampshire, County Div 1",
      status: "Day 2: Stumps - Hampshire trail by 113 runs",
      venue: "Trafalgar Road Ground, Southport",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Lancashire", "Hampshire"],
      teamInfo: [
        {
          name: "Hampshire",
          shortname: "HAM",
          img: "https://g.cricapi.com/iapi/1122-637885550993657486.webp?w=48",
        },
        {
          name: "Lancashire",
          shortname: "LNCS",
          img: "https://g.cricapi.com/iapi/1125-637885551497331567.webp?w=48",
        },
      ],
      score: [
        { r: 142, w: 10, o: 60.4, inning: "Hampshire Inning 1" },
        { r: 374, w: 10, o: 90.5, inning: "Lancashire Inning 1" },
        { r: 119, w: 1, o: 40, inning: "Hampshire Inning 2" },
      ],
      series_id: "a02fe535-9179-4d64-970b-c00014482057",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "3c2192a4-4771-415c-abc3-c32357ad74c6",
      name: "Kent vs Surrey, County Div 1",
      status: "Day 2: Stumps - Kent lead by 353 runs",
      venue: "St Lawrence Ground, Canterbury",
      date: "2023-06-11",
      dateTimeGMT: "2023-06-11T10:00:00",
      teams: ["Kent", "Surrey"],
      teamInfo: [
        {
          name: "Kent",
          shortname: "KENT",
          img: "https://g.cricapi.com/iapi/1124-637885551212175895.webp?w=48",
        },
        {
          name: "Surrey",
          shortname: "SUR",
          img: "https://g.cricapi.com/iapi/1133-637885552361099530.webp?w=48",
        },
      ],
      score: [
        { r: 301, w: 10, o: 82.2, inning: "Kent Inning 1" },
        { r: 145, w: 10, o: 43.2, inning: "Surrey Inning 1" },
        { r: 197, w: 6, o: 57, inning: "Kent Inning 2" },
      ],
      series_id: "a02fe535-9179-4d64-970b-c00014482057",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "c5d02a41-312f-41c0-9b6c-214077d4374d",
      name: "Sri Lanka A vs South Africa A, 1st unofficial Test",
      matchType: "test",
      status: "Day 2: Match delayed due to rain - Sri Lanka A opt to bat",
      venue: "Rangiri Dambulla International Stadium, Dambulla",
      date: "2023-06-12",
      dateTimeGMT: "2023-06-12T04:30:00",
      teams: ["Sri Lanka A", "South Africa A"],
      teamInfo: [
        {
          name: "South Africa A",
          shortname: "SA-A",
          img: "https://g.cricapi.com/iapi/1132-637877069157056525.webp?w=48",
        },
        {
          name: "Sri Lanka A",
          shortname: "SLA",
          img: "https://g.cricapi.com/iapi/4191-638101639309122979.webp?w=48",
        },
      ],
      score: [{ r: 325, w: 10, o: 83, inning: "Sri Lanka A Inning 1" }],
      series_id: "4eeb97cf-9700-49a6-98f3-8854925befa0",
      fantasyEnabled: true,
      bbbEnabled: false,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
    {
      id: "5b270d56-89ea-4e48-a41b-ce85f9727650",
      name: "Ireland vs Bangladesh, 1st ODI",
      matchType: "odi",
      status: "No result (due to rain)",
      venue: "County Ground, Chelmsford",
      date: "2023-05-09",
      dateTimeGMT: "2023-05-09T09:45:00",
      teams: ["Ireland", "Bangladesh"],
      teamInfo: [
        {
          name: "Bangladesh",
          shortname: "BAN",
          img: "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48",
        },
        {
          name: "Ireland",
          shortname: "IRE",
          img: "https://g.cricapi.com/iapi/33-637926315578500224.png?w=48",
        },
      ],
      score: [
        { r: 246, w: 9, o: 50, inning: "Bangladesh Inning 1" },
        { r: 65, w: 3, o: 16.3, inning: "Ireland Inning 1" },
      ],
      series_id: "5bf9e811-8a06-446e-8b23-eb17dfb5c071",
      fantasyEnabled: true,
      bbbEnabled: true,
      hasSquad: true,
      matchStarted: true,
      matchEnded: false,
    },
  ]);

  // const fetch1 = () => {
  //   fetch(
  //     "https://api.cricapi.com/v1/currentMatches?apikey=9cc24a32-81ed-484b-b00e-cbd5bff66cc5&offset=0"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setData([res]));
  //   // console.log(data);
  // };

  // fetch1();

  // useEffect(() => {
  //   fetch1();
  // }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, []);

  // useEffect(() => {
  //   fetch1;
  // });

  return (
    <div className="maindiv">
      <h1>
        <u>MY SPORT CARDS</u>
      </h1>
      {data.map((data, index) => {
        return (
          <div key={index} className="datadiv">
            <div className="one">
              <p>
                <u>CONTEST NAME</u>
                <br />
                {`(${data.name})`}
              </p>
            </div>
            <div className="two">
              <p>COMPETITION: {`(${data.matchType})`}</p>
              <p>
                VENUE: <u>{data.venue}</u>
              </p>
              <p>DATE: {`(${data.date})`}</p>
            </div>
            <div className="three">
              <p>
                <u> {data.teams[0]} </u>{" "}
              </p>
              <p> VS </p>
              <p>
                <u> {data.teams[1]} </u>{" "}
              </p>
            </div>
            <div className="four">
              <p>RESULT: {data.status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
