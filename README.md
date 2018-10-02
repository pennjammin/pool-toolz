Welcome to the Pool Toolz demo! This is a small app that helps track a game of straight pool (14.1/125 points).

PLEASE BE AWARE THAT THE FREE TIER OF ZEIT'S NOW HOSTING ARTIFACTS DEPLOYMENTS, ERGO, THE FIRST LOAD TAKES A BIT.

It is build in React and utilizes Styled Components as it's CSS-in-JS mechanism. Hence the remixed React logo! I tried to keep it minimal and sharp considering my audience. As this was to be a demo, I leveraged localStorage as suggested as a sort of faux backend. It was designed for mobile first as it makes way more sense being viewed from such a medium. It would work well as a PWA so I am building it out as such.

I will be adding planned features/bugs as issues (at the moment the only glaring one has to do with an edge case regarding the search functionality).

I would love any and all feed back (feel free to put an issue in and I will try and get to it quickly)!
I did not want to over-engineer this and that is why I went with straight React (plus create-react-app has a built-in service worker and I would like this to function as a PWA since it would be used primarily on mobile). Plus, I did not want there to be much boilerplate since this is supposed to showcase how I code. I tried to demo skills without over doing it for something small. It is currently being hosted on Zeit's now (free tier) and they freeze artifacts so if initial load is slow that is why. I would typically take the time to get CDN's and lots of other stuff invoved but again I was shooting more for speed. Let me know if there are any questions! Thanks a bunch for your time, I shall be busy refactoring/reviewing.

I saw the frontend guidelines that you recommend; I will be going through and attempting to make the code base adhere to it. Thanks!


DEVELOPMENT:
  -fork/pull down,
  cd pool-toolz,
  yarn,
  yarn start (yarn build for prod)
  

