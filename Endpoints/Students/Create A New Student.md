# Create a new student

Category: Student

Description: Creating A New Student

Type: POST

URL: api/students

### Body Params

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| name | STRING | yes | Student’s Name |
| personalPhoneNumber | STRING 12DIGIT | yes | Student’s Phone |
| parentPhoneNumber | STRING 12DIGIT | yes | Parent’s Phone |
| groupId | NUMBER | yes | Group Which Student Belongs |

### Responses

|  | Response Body |
| --- | --- |
| 200 |  |
| 400 |  |