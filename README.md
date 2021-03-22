# ap-netsells-task

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Form fields

Details of the form fields required and any validation rules are provided below, and should be submitted using the associated field names. Any other validation rules will be returned in the 422 response so be sure to handle them appropriately.

| Label         | Field name    | Data type | Required? |
| ------------- |:-------------:|:---------:|:---------:|
| First name | first_name | string | :white_check_mark: |
| Last name | last_name | string |  |
| Email | email | string | :white_check_mark: |
| Phone number | phone_number | string |  |
| Do you live in the uk? | live_in_uk | boolean | :white_check_mark: |
| Git profile | git_profile | string | :white_check_mark: |
| Upload CV | cv | file | :white_check_mark: |
| Upload Cover Letter | cover_letter | file |  |
| About you | about_you | string | :white_check_mark: |

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
