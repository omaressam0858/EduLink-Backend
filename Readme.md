# EduLink API

## Time Zone

The API timestamps are provided in Coordinated Universal Time (UTC), which is equivalent to UTC +00:00. All date and time values returned by the API should be interpreted in this timezone. It's important to consider this when working with timestamps to ensure accurate handling of temporal data.

## Status Codes

HTTP response codes are used to indicate general classes of success and error. 

### Success Code

| HTTP Status Quote | Description |
| --- | --- |
| 200 | Successfully processed request. |

### Error Codes

Error responses contain more detail about the error in the response body, in the `"code"` and `"message"`properties.

| HTTP Status Quote | code | message |
| --- | --- | --- |
| 400 | invalid_json | The request body could not be decoded as JSON |
|  | invalid_request_url | This request URL is not valid. |
|  | invalid_request | This request is not supported. |
| 404 | not_found | Object not found |
