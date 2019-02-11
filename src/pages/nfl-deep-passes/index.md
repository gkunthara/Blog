---
title: Should NFL teams throw more deep passes?
date: "2019-02"
---

This year I watched quite a few NFL games at home with my parents. My parents are HUGE football fans and try to never miss a Seahawks game. They are still picking up the intricacies such as field position ("No mom, we can't kick an 80 yard field goal")  and play calling - particularly the concept of running the football. My dad's suggestion is to throw a Hail Mary every play regardless of down and distance. But this got me thinking... Would this actually work?

I decided to look more into this. Obviously, a team probably wouldn't be able throw a Hail Mary every play, but what if they tried a deep pass every set of downs? Especially with defensive pass interference calls resulting at the spot of the foul, a team could gain a ton of yards even on incompletions!

The first step was to gather the relevant data. I found getting access to free sports data surprisingly difficult. I spent a decent amount of time searching for free NFL APIs or data sets and eventually found [MySportsDataFeed](http://mysportsfeeds.com) which gave me API access to all the data I needed free for non-commercial use.

The process I took was fairly straightforward. I gathered all passes thrown for every game in the 2018 NFL Regular Season and then filtered this for deep passes. The NFL considers a deep pass to be a pass thrown in the air greater than 20 yards. From this, I filtered the data into three different groups: completed passes,  interceptions, and passes that resulted in a defensive pass interference penalty. I was able to get my answers with the help of a little math and python manipulation.


**3.4%** of deep passes resulted in defensive pass interference

I was pretty shocked by this number as I thought it would be a lot higher. I hope most  fans would agree with me here, but it feels like defensive pass interference is called on almost every single deep pass. However, this stat might be one of those instances where we think it happens a lot more than it really does. What I did find out that I thought was really interesting is that **defensive pass interference got called more as the season progressed**. I'm curious as to why this is the case. I'm thinking it's because of fatigue -  DB's might be jostling more to keep up. 

**39.5%** of deep passes resulted in a catch

Maybe my dad might be onto something here because to me, this number is crazy high. How come teams don't throw the deep ball more if 40% of the time players are coming down with a catch?! I would say the biggest reason against throwing deep passes is the fear of an interception. But how often does that occur?

**3.7%** of deep passes resulted in an interception

This is surprisingly really low. Similar to defensive pass interference, deep ball interceptions might be something we think happens a lot more than they actually do.

Overall, about **43%** of deep passes resulted in either a catch or defensive pass interference penalty. Compare that to the 3.7% rate of interception and this sounds like a much greater reward considering the risk.  So teams should be throwing the deep ball almost every down right?

Turns out, out of all passes thrown in the regular season, **18.7%** were deep passes. This number is actually higher than I thought it would be. But even with that, I think this could be a lot higher. It's without a doubt the NFL has already turned into a pass-first league. So I'd say based on the numbers we can see successful teams throwing deep passes closer to 25% of the time.


These numbers don't tell the entire story. So many different factors come into play when deciding what play to run and who the QB throws to. Here are some additional questions that would give us a better idea whether or not teams should be throwing the deep pass more often such as:

- I only compiled data from the 2018 regular season. How do these numbers compare against the last 5-10 years?
- Do more interceptions actually happen on deep passes?
- What is the defense playing when a deep pass is thrown and how much of an effect does this have?
- Do teams that throw deep passes more, score more?
- Do defensive pass interference penalties occur more frequently when the ball is thrown down the sideline compared to down the middle?
- And so many more!

Thanks to MySportsDataFeed for providing me access to all this data. If you're interested in answering some of these questions or want to see my work - all the code is on Github [here](https://github.com/gkunthara/nfl-pass-data).

