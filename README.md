# Admin-ui-challenge
### These are the requirements :

* Column titles must stand out from the entries.
* There should be a search bar that can filter on any property.
* You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
* You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
* You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
* Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

:point_right: **Users API**
* We provide you an Users API to list all the users and their properties.
* https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json


**Note :**
* The users are sorted by `id` field. There is no alphabetical sorting.

