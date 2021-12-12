# cds-programming-challenge

Convention Data Services Programming Challenge

Thank you for this fun challenge! I was originally going to write it in React, but since you had mentioned that jquery is going to be part of the job, I used this as an opportunity as a refresher.

I would have liked to have spent more time on styling but I realized that the point of the exercise was likely to make sure I was able to follow the directions. I believe I have satisfied every requirement.

I did not account for varying screen sizes as that did not appear to be part of the spirit of the assignment. I hope I guessed correctly :)

CDS Fix-The-Code Challenge:

With each of these, I did notice some possible breaks in convention (such as mixing camel case with underscores or capitalizing class names, etc) but found only one actual hard error in each, so I opted to list those errors rather than try to read the minds of whoever built these example tables :)

Answer 1:

Missing " after regInfo_p.asp

Answer 2:

missing " before HandicapBtn

Answer 3:

missing , between state_id and regionId

Answer 4:

SELECT firstname, lastname, optin, email
FROM TAB_Reg
WHERE (optin = 1)
ORDER BY lastname
