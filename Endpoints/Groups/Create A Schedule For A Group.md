# Create a Schedule For Group

Category: Groups

Description: Add a new schedule for a group (Saturday, Sunday , …….) 

Type: POST

URL: /api/groups/schedule

### Body Params

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| groupId | NUMBER | yes | The Group |
| day | STRING | yes | A Day Of Week (Saturday, Sunday , …….) |
| time | NUMBER | yes | 24 Hour Format (13 ‘1 P.M.’) |

### Responses

|  | Response Body |
| --- | --- |
| 200 |  |
| 400 |  |