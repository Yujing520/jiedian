const url = `https://eileidfd.api.s-cat.cn/api/load_user_info`;
const method = `GET`;
const headers = {
'content-type' : `text/plain`,
'ad-channel' : ``,
'pl' : `iOS`,
'fc' : `kjs`,
'ap' : `com.fast.freedom.ios`,
'tk' : `eyJpZCI6MTMxMzYwMywibmlkIjoiZjkzMDBiNjY2MSIsInVpZCI6ODE5MDc5NjcsInRlbCI6bnVsbCwibWFpbCI6bnVsbCwiY2huIjoia2pzIiwiYXBwaWQiOiI0IiwibG9naW5fYXBwaWQiOjQsInBsYXRmb3JtIjoiaU9TIiwiY3JlYXRlZF9hdCI6IjIwMjUtMDMtMTQgMjM6MzM6NTYiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMy0xNSAwMzoyMzoyMyIsInN1cF9sYXN0ZXIiOjk5OTk5OTk5OSwiaXNfc3VwIjoxLCJzdXBfaWQiOjAsInN2aXBfbGFzdGVyIjo5OTk5OTk5OTksImZ2aXBfbGFzdGVyIjoxNzQxOTY2NDM2LCJpZGZ2IjpudWxsLCJyZWdpc3Rlcl9pcCI6IjIxMS4yMDEuMTY5LjczIiwidWlwIjoiMjIxLjE1MC4xMDkuMjIiLCJzdGF0dXMiOjEsIndnX2tleSI6ImU1ZWY3NGZhNTU0YzgzYThjNDA0YWFjZWUwOWYxOWY2IiwidXNlcl9jaGFyZ2VfYW1vdW50IjoiMC4wMCIsImxhc3RfbG9naW5fdGltZSI6MTc0MTk4MDIwMywidWEiOiIoZGFydDppbykiLCJ1dWlkIjpudWxsLCJhZF9jaGFubmVsIjoiIiwiaW52aXRlX2lkIjpudWxsLCJpbnZpdGVfdGltZSI6bnVsbCwiaW52aXRlX251bSI6bnVsbCwieWtfaWQiOiJmMDE5ODI3NTllMGJjOWFiOTFlNDkwODg5OGYyYjQ3ZmY5ZDNjYmY2ZjI3M2VlY2UzZGViYzA0MDQyOTQxNTQ5IiwiY2FsbGJhY2tfYWQiOjAsInNpZ25fdGltZSI6MTc0MTk4MDIwM30.kdwaSKXIud-VRHk3ABtNqt9VviYNMYHAD_vwIOay-i4`,
'host' : `eileidfd.api.s-cat.cn`,
'user-agent' : `Dart/3.5 (dart:io)`,
'screen-size' : `1284*2778`,
'accept-encoding' : `gzip`,
'ch' : `kjs`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
