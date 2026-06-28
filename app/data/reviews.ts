export type Review = {
  id: number
  name: string
  location?: string
  rating: 5
  text?: string
  photos?: string[]
  featured?: boolean
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Richard Ottis',
    rating: 5,
    text: "We were really impressed with Chad's roofing company. He was fast, polite, efficient. He returned our calls and texts, his crew Sean and Taylor were very professional, did the job in a fast and neat manner. I can't say enough good about Chad's and his business. I would absolutely recommend him to all my friends and family. Well done Chad's. Also, one of his crew accidentally broke one of our sprinklers, he told us and Chad came out to repair it himself. Other companies may not have even said anything, but they did. I can't tell you how much we appreciate him and his company. I'd give him 10 Stars if I could!",
    photos: ['/reviews/richard-1.jpg'],
    featured: true,
  },
  {
    id: 2,
    name: 'Bernie Rossi',
    rating: 5,
    text: "We used Chad of Chad Warren Roofing to replace our roof in January, 2022. He was very responsive to our call when our roof was leaking in several spots. We opted for a new roof rather than trying to repair our 40+ year old concrete tile roof. Chad returns calls and texts quickly and keeps you informed of the job's progress. He takes care that the client is happy and satisfied and has an efficient crew to get the job completed quickly and properly. We were very impressed with Chad and would not hesitate to recommend him for your roofing needs.",
    photos: ['/reviews/bernie-1.jpg', '/reviews/bernie-2.jpg'],
  },
  {
    id: 3,
    name: 'Katie Orlopp',
    rating: 5,
    text: 'Chad and his crew are efficient, communicative, and TIDY. They left my house immaculate. They showed up exactly when they said they would, answered all questions promptly, and their price was very fair. Highly recommend.',
    featured: true,
  },
  {
    id: 4,
    name: 'Sree',
    rating: 5,
    text: 'Chad and his team recently replaced our metal roof and I cannot recommend him more highly! Very professional on every level - hard working, efficient, friendly, gave regular updates across the job and very competitively priced as well. Look no further for your next roofer!',
    photos: ['/reviews/sree-1.jpg'],
  },
  {
    id: 5,
    name: 'Bill Roemer',
    rating: 5,
    text: "Chad and his crew did an excellent job on our new roof. I had trouble getting local contractors to respond when I requested recommendations on Facebook, Chad's company came up numerous times. He came out next day, and gave me a quote same day. Chad's reviews were stellar and I am glad to add my name to the list of very satisfied customers. If you need any repairs or a new roof, give Chad a call. You won't regret it.",
    photos: ['/reviews/bill-1.jpg'],
  },
  {
    id: 6,
    name: 'Sharon Howell',
    rating: 5,
    text: 'We highly recommend this company. They arrived early with a really great crew who were hard working, professional and courteous. Chad was on top of his crew, and was easy to contact with any questions. Completed the entire job in two days! Great job with clean-up afterward and roof looks fantastic!',
  },
  {
    id: 7,
    name: 'Nancy Purkey',
    rating: 5,
    text: 'Chad answered my call, came out the next day to look at my roof leaks and got it done within two days. He was prompt and professional. I highly recommend him for your roofing needs.',
  },
  {
    id: 8,
    name: 'Susan Souza',
    rating: 5,
    text: "Highly recommend Chad and his crew! Worked with our schedule, very professional. Cleaned up everything. Great work on repairing our roof rot, and replacing the comp. Can't say enough good things about our experience. Other roofers in our area were non-responsive, which turned out great for us, as the best came through!",
  },
  {
    id: 9,
    name: 'Scott Duncan',
    rating: 5,
    text: 'I was very pleased of the job that Chad and crew performed on my home. They were very professional and on time. I had some major leaks with damaged and dry rot. Chad and his crew worked through the cold weather and finished right before a major storm. Their clean up was very thorough. I would recommend them to anyone needing roof repair of any type. Thank you so very much.',
  },
  {
    id: 10,
    name: 'Ron Lynch',
    rating: 5,
    text: "Mother Lode Roofing did a stellar job removing and replacing my 25 year old roof. Up here in the snow country, they are one of the very best around. Highly recommend John and his crew if you're in the market for a new roof at a very good price. One less thing to worry about here in Blue Lakes Springs Arnold California!!! Thanks guys!!!",
    featured: true,
  },
  {
    id: 11,
    name: 'Brad Taylor',
    rating: 5,
    text: 'Chad and his team did a tear off, dry rot repair and reroof on our house. They showed up on time, did a great job, stayed on budget and left the site clean. I will be using Chad for all my future roofing needs and highly recommend him.',
    photos: ['/reviews/brad-1.jpg', '/reviews/brad-2.jpg', '/reviews/brad-3.jpg', '/reviews/brad-4.jpg'],
  },
  {
    id: 12,
    name: 'Diane Fish',
    rating: 5,
    text: 'While we only had some minor roof repair, Chad was still very responsive to our needs. Provided a bid in a very timely manner and work was completed as promised. We recommended him to some neighbors and they were also very pleased with the repairs he did for them. Highly recommend him!!',
  },
  {
    id: 13,
    name: 'Sky Emerald',
    rating: 5,
    text: "One of the best roofing businesses in the area. If you're within 100 miles of this business and need a repair or a new roof this is the business you want. Professional, skilled, and top quality end results.",
    photos: ['/reviews/sky-1.jpg'],
  },
  {
    id: 14,
    name: 'John Paulson',
    rating: 5,
    text: "Two trees fell on our cabin during a recent storm and we needed roof repairs as well as a new roof. Local roofing companies either didn't return my calls or came out to look at the damage and never followed up with an estimate. One company did give us an estimate but it was twice as much as insurance was willing to pay. I called Chad and he came out the next day and gave us an estimate that matched the insurance settlement. He was able to install the roof the next week. We also needed two rafters repaired, something roofers generally aren't licensed to do. Chad works with a general contractor, he described our situation to him and put us in contact with him. A couple days later the general contractor had repaired our rafters prior to the roof replacement. Highly recommend Chad Warren roofing.",
  },
  {
    id: 15,
    name: 'Danny Bahir',
    rating: 5,
    text: 'Chad reroofed our Cabin. He was super responsive and available to discuss options and any concerns we had. Him and his crew were punctual and adhered to the dates we agreed on. The new roof was in place just before a big storm came in and saved us from the perils of our previous 30 year old roof. Thanks Chad',
  },
  {
    id: 16,
    name: 'jef2neto',
    rating: 5,
    text: "On November 2019, a large tree fell on the roof of our cabin near Arnold, in Calaveras County, causing considerable damage to it and to the deck behind the cabin. After considering several contractors and estimates for the repair job, we came across this young man who gave us a very reasonable estimate for the repair, and we mean reasonable for the quality of his professional service. Chad Warren, a very good looking young man, with gentle manners and supreme knowledge of his trade, sat with us, patiently answered all our questions and concerns and explained in detail how he planned to proceed to accomplish a very complicated repair which included installing a new chimney, since the existing one had been damaged beyond repair. He also repaired our badly damaged deck, and siding which was damaged with dry rot. Chad was very prompt and punctual delivering all the materials needed and got to work immediately. We cannot recommend him highly enough, he indeed is a real pro. We are sure you won't regret hiring him for your project, he does not get five stars he really deserves ten. We will always be grateful having found him for the repair project of our beautiful cabin. Thank you Chad",
  },
  {
    id: 17,
    name: 'de luke',
    rating: 5,
    text: 'We are happy we went with Chad to do our roof, came out gave me a price the same day got the permit with no issues and keeps you informed. They came out early got started and finished our roof same day, great crew no surprises, when they were done they cleaned up everything, thanks for a great job roof looks great',
  },
  {
    id: 18,
    name: 'Hanasue Drilling',
    rating: 5,
    text: "I'm a realtor and have worked with Chad many times. He shows up on time, he and his crew put in a full day's work, they do an excellent job, complete the job in a timely manner and do a great cleanup!",
  },
  {
    id: 19,
    name: 'Todd Trowbridge',
    rating: 5,
    text: 'Excellent job! Chad was very responsive to a storm damaged roof and did a great job! Will definitely use again, if needed.',
  },
  {
    id: 20,
    name: 'Kasandra Smith',
    rating: 5,
    text: "Can't recommend Motherlode Roofing enough! If you are looking for someone to actually respond, quote accordingly, and provide quality work then Chad is your guy!",
    featured: true,
  },
  {
    id: 21,
    name: 'Carol Baughman',
    rating: 5,
    text: 'Chad provides on time expert service. I will use him again when we have any roofing needs.',
  },
  {
    id: 22,
    name: 'Dustin Hemphill',
    rating: 5,
    text: 'Chad did a great job installing a new roof on my house. I highly recommend Chad Warren Roofing',
  },
  {
    id: 23,
    name: 'Karen Furtado',
    rating: 5,
    text: "He was awesome! Very personable, professional and reasonable! He's a keeper!!",
  },
  {
    id: 24,
    name: 'Elijah',
    rating: 5,
    text: 'Best around',
  },
  { id: 25, name: 'stevie marie', rating: 5 },
  { id: 26, name: 'Tim Mathews', rating: 5 },
  { id: 27, name: 'Sheran Jones', rating: 5 },
  { id: 28, name: 'Jim Pauli', rating: 5 },
  { id: 29, name: 'Kathy Collins', rating: 5 },
  { id: 30, name: 'karen Lee', rating: 5 },
  { id: 31, name: 'Penny Dost', rating: 5 },
  { id: 32, name: 'Joseph Vargas', rating: 5 },
  { id: 33, name: 'Danny Ice', rating: 5 },
]

export const featuredReviews = reviews.filter((r) => r.featured)
