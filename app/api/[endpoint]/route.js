import connectToDB from "@/database/db";

export async function GET(request) {
  const client = await connectToDB();

  const combinedResponse = {};
  const parsed = parseURLParams(request.url);
  const numItems = parsed.numitems;

  const parsedList = parsed?.categories.split(",");
  for (let i = 0; i < parsedList.length; i++) {
    combinedResponse[parsedList[i]] = [];
  }

  console.log(parsedList.numitems);
  for (let i = 0; i < parsedList.length; i++) {
    if (parsedList[i][parsedList[i].length - 1] === "*") {
      const keys = await client.keys(parsedList[i]);
      parsedList.push(...keys.slice(0, numItems));
    } else {
      const response = await client.hGetAll(parsedList[i]);
      const cleansed = [];
      for (const key in response) {
        if (response[key] === "") {
          cleansed.push(key);
        }
      }
      if (cleansed.length > 0) combinedResponse[parsedList[i]] = cleansed;
      else combinedResponse[parsedList[i]] = response;
      //   console.log(response);
    }
    console.log(combinedResponse);
  }
  return Response.json(combinedResponse);
}

function parseURLParams(url) {
  const params = {};
  const queryString = url.split("?")[1];

  if (queryString) {
    const paramPairs = queryString.split("&");

    for (const pair of paramPairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }

  return params;
}
