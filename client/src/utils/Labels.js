import React from 'react'
 
export const InfectionLabels = ()=> {
    const label =  {
        totalCaseLabel: "Total Cases:  Running Total",
        totalCaseTitle: "Regional Caseloads",
        lastDayLabel: "Last Daily Reported Cases (withing the last 24hrs)",
        dailyDeathsLabel: "Last Reported Daily fatalities (withing the last 24hrs)",
        lastDayTitle: "Daily Report",
        deltaCaseTitle: "Daily Change in Covid-19 Cases",
        deltaCaseLabel: "Daily Change (%)",
        totalDeathsLabel: "Total Deaths:  Running Total",
        totalDeathsTitle: "Regional Mortality",
        dailyDeathsTitle: "Daily Mortality Rate"
    }
    return label
}

export const TwitterLabels = ()=> {
    const label =  {
        wordTitle: "Twitter Word Count",
        hashTitle: "Twitter Hashtag Count",
        emojiTitle: "Twitter Emoji Count",
        sentimentTitle: "Twitter: Public Sentiment",
        firstSentimentLabel: "Sentiment:  12/11/20 - 12/25/20",
        secondSentimentLabel: "Sentiment:  12/26/20 - 1/05/21",
        thirdSentimentLabel: "Sentiment:  2/03/21 - 2/14/21",
        totalSentimentLabel: "Sentiment:  Running Total",
        firstWordLabel: "Word Count:  12/11/20 - 12/25/20",
        secondWordLabel: "Word Count:  12/26/20 - 1/05/21",
        secondHashtagLabel: "Hashtag Count:  12/26/20 - 1/05/21",
        totalWordLabel: "Word Count:  Running Total",
        totalHashtagLabel: "Hashtag Count:  Running Total",
        thirdWordLabel: "Word Count:  2/03/21 - 2/14/21",
        thirdHashtagLabel: "Hashtag Count:  2/03/21 - 2/14/21",
        firstHashLabel: "Hashtag Count:  12/11/20 - 12/25/20",
        totalEmojiLabel: "Emoji Count:  Running Total",
    }
    return label
}