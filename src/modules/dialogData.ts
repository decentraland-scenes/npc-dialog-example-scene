class Dialog {
  text: string
  fontSize?: number
  positionY: number
  isQuestion?: boolean = false
  labelE?: {
    label: string
    fontSize?: number
    positionX?: number
    positionY?: number
  }
  ifPressE?: number
  labelF?: {
    label: string
    fontSize?: number
    positionX?: number
    positionY?: number
  }
  ifPressF?: number
  isEndOfDialog?: boolean = false
  portrait?: { path: string; positionX: number; positionY }
}

class Dialogs {
  dialogs: Dialog[]
}

export const robotDialog: Dialogs[] = [
  // Alice
  {
    dialogs: [
      {
        portrait: {
          path: "images/portraits/alice.png",
          positionX: -272,
          positionY: 5,
        },
        text:
          "Hi, I'm Alice - welcome to Genesis Plaza! Would you like to learn more about this place?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 2,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 1,
      },
      {
        text: "Okay, I'll be around if you get curious!",
        positionY: 18,
        isEndOfDialog: true,
      },
      {
        text:
          "We’re currently in the center of the Genesis City map, the roads fan out in all directions from here.",
        positionY: 18,
      },
      {
        text:
          "Genesis Plaza is built and maintained by the Decentraland Foundation but is still in many ways a community project.",
        positionY: 6,
      },
      {
        text:
          "If you venture out into the world, you’ll see that the content is created by our growing community.",
        positionY: 6,
      },
      {
        text:
          "Do you want to explore the rest of Genesis Plaza or explore the rest of the world?",
        positionY: 24,
        isQuestion: true,
        labelE: {
          label: "PLAZA",
          fontSize: 11,
          positionX: 67,
          positionY: -17.5,
        },
        ifPressE: 6,
        labelF: {
          label: "WORLD",
          fontSize: 11,
          positionX: -50,
          positionY: -17.5,
        },
        ifPressF: 17,
      },
      {
        text: "Great! There’s a lot to see right here.",
        positionY: 18,
      },
      {
        text:
          "If you walk around you might run into my buddies and each is an expert on a different topic.",
        positionY: 18,
      },
      {
        text:
          "You can learn a lot from them about how Decentraland works and what makes it special.",
        positionY: 18,
      },
      {
        text:
          "I recommend you start at that boat-shaped building to the North!",
        positionY: 18,
      },
      {
        text: "Do you also want to learn about what's beyond Genesis Plaza?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 11,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 27,
      },
      {
        text: "There’s a big world to explore out there!",
        positionY: 18,
      },
      {
        text:
          "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest.",
        positionY: 6,
      },
      {
        text:
          "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out.",
        positionY: 6,
      },
      {
        text:
          "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting.",
        positionY: 6,
      },
      {
        text:
          "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover.",
        positionY: 6,
      },
      {
        text: "So what are you waiting for? Go and explore the world!",
        positionY: 18,
        isEndOfDialog: true,
      },
      {
        text: "There’s a big world to explore out there!",
        positionY: 18,
      },
      {
        text:
          "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest.",
        positionY: 6,
      },
      {
        text:
          "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out.",
        positionY: 6,
      },
      {
        text:
          "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting.",
        positionY: 6,
      },
      {
        text:
          "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover.",
        positionY: 6,
      },
      {
        text: "Do you also want to find out what's here in Genesis Plaza?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 23,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 27,
      },
      {
        text: "Great! There’s a lot to see right here.",
        positionY: 18,
      },
      {
        text:
          "If you walk around you might run into my buddies and each is an expert on a different topic.",
        positionY: 18,
      },
      {
        text:
          "You can learn a lot from them about how Decentraland works and what makes it special.",
        positionY: 18,
      },
      {
        text:
          "I recommend you start at that boat-shaped building to the North!",
        positionY: 18,
      },
      {
        text:
          "Well that's it from me. So what are you waiting for? Go and explore the world!",
        positionY: 18,
        isEndOfDialog: true,
      },
    ],
  },
  // Bob
  {
    dialogs: [
      {
        text:
          "G'day human! My name is Bob and I'm a robot. Would you like to learn more about the history of Decentraland and how it all started?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 2,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 1,
        portrait: {
          path: "images/portraits/bob.png",
          positionX: -276,
          positionY: 30,
        },
      },
      {
        text: "Okay, I'll be around if you get curious.",
        positionY: 18,
        isEndOfDialog: true,
      },
      {
        text:
          "Decentraland's unique proposal is to create a virtual world governed by its users.",
        positionY: 18,
      },
      {
        text:
          "This little museum takes you through some of the milestones in Decentraland's history.",
        positionY: 18,
      },
      {
        text:
          "Some key events in the history of the project were: the Terraform Event, which had the first LAND sale.",
        positionY: 6,
      },
      {
        text:
          "The second auction in late 2018; the creation of Avatars and Wearables in 2019; the release of the open source client and the DAO in 2020.",
        positionY: 6,
      },
      {
        text: "So much has happened already, and we're just getting started...",
        positionY: 18,
      },
      {
        text:
          "Take a look around. If you're interested in any of the items, click on them and I'll tell you the background story.",
        positionY: 6,
        isEndOfDialog: true,
      },
    ],
  },

  // Charlie
  {
    dialogs: [
      {
        text:
          "Hey, I'm Charlie - a master trader. Would you like to learn more about the Decentraland Marketplace?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 2,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 1,
        portrait: {
          path: "images/portraits/charlie.png",
          positionX: -292,
          positionY: -10,
        },
      },
      {
        text: "Okay, I'll be around if you get curious.",
        positionY: 18,
        isEndOfDialog: true,
      },
      {
        text:
          "This is the Metaverse Trade Center. Here you can see live stats from the Decentraland Marketplace.",
        positionY: 6,
      },
      {
        text:
          "There’s a thriving economy behind Decentraland and every day people buy and sell unique items.",
        positionY: 18,
      },
      {
        text: "Items like LAND parcels, wearable items and reserved names.",
        positionY: 18,
      },
      {
        text:
          "As more trading happens on the platform, it grows and moves faster.",
        positionY: 18,
      },
      {
        text:
          "You can explore this building to find real-time stats about what goes on in the Marketplace.",
        positionY: 18,
      },
      {
        text:
          "Do you want to know more about how the Marketplace uses the blockchain?",
        positionY: 24,
        isQuestion: true,
        labelE: { label: "YES", fontSize: 14, positionX: 64, positionY: -19 },
        ifPressE: 8,
        labelF: { label: "NO", fontSize: 14, positionX: -56, positionY: -19 },
        ifPressF: 12,
      },
      {
        text:
          "All sales, bids and other operations are transactions on the blockchain.",
        positionY: 18,
      },
      {
        text:
          "Like all transactions, they require a small gas fee that is paid to the network of miners.",
        positionY: 18,
      },
      {
        text:
          "The Marketplace charges a small fee over all transactions. This fee doesn't go into anyone's pocket. Instead it gets burned.",
        positionY: 6,
      },
      {
        text:
          "'Burning' reduces the amount of MANA in circulation; the remaining MANA becomes more valuable, which benefits the wider community of MANA holders.",
        positionY: -4,
      },
      {
        text:
          "Remember to visit market.decentraland.org - over there you can buy or sell LAND, wearables or unique names. Happy shopping!",
        positionY: 6,
        isEndOfDialog: true,
      },
    ],
  },
]
