export interface Testimonial {
    name: string;
    role: string;
    market: string;
    content: string;
    rating: number;
    avatar: string;
    image?: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "John Dovichi",
        role: "Full-time Forex Trader",
        market: "Forex",
        content: "The trend detection on GBP/JPY is incredibly precise. I've been using it to confirm my H4 breakouts and the results are consistently reliable.",
        rating: 5,
        avatar: "JD",
        image: "https://i.pravatar.cc/150?u=jd"
    },
    {
        name: "Elena Rodriguez",
        role: "Swing Trader",
        market: "Stocks",
        content: "As a tech stock trader, I rely on clean price action. This AI perfectly identifies supply and demand zones that I often overlook during market hours.",
        rating: 4.5,
        avatar: "ER",
        image: "https://i.pravatar.cc/150?u=er"
    },
    {
        name: "Michael Sterling",
        role: "Commodities Specialist",
        market: "Commodities",
        content: "Analyzed Gold (XAUUSD) during the recent volatility. The AI's resistance level predictions were spot on. A must-have tool for any serious trader.",
        rating: 5,
        avatar: "MS",
        image: "https://i.pravatar.cc/150?u=ms"
    },
    {
        name: "Sarah Jenkins",
        role: "Part-time Trader",
        market: "Forex",
        content: "Finally found a tool that doesn't just spam indicators. It actually reads the market structure. My win rate has improved since I started cross-checking with this.",
        rating: 4.5,
        avatar: "SJ",
        image: "https://i.pravatar.cc/150?u=sj"
    },
    {
        name: "David Kumar",
        role: "Portfolio Manager",
        market: "Stocks",
        content: "Professional-grade analysis in seconds. The reasoning provided for each signal is logical and institutional-level. Highly impressed with the depth.",
        rating: 5,
        avatar: "DK",
        image: "https://i.pravatar.cc/150?u=dk"
    },
    {
        name: "Ahmed Al-Farsi",
        role: "Crude Oil Trader",
        market: "Commodities",
        content: "The support/resistance mapping for Oil is excellent. It helps me filter out the noise and focus on high-probability setups.",
        rating: 5,
        avatar: "AA",
        image: "https://i.pravatar.cc/150?u=aa"
    },
    {
        name: "Emily Watson",
        role: "Day Trader",
        market: "Forex",
        content: "I use it for my daily EUR/USD analysis. The way it identifies liquidity sweeps is a game changer for my strategy.",
        rating: 5,
        avatar: "EW",
        image: "https://i.pravatar.cc/150?u=ew"
    },
    {
        name: "Kenji Sato",
        role: "Scalper",
        market: "Forex",
        content: "Super fast analysis. When I'm scalping the 5m chart, getting a quick AI second opinion on the trend saves me from so many false breakouts.",
        rating: 4,
        avatar: "KS",
        image: "https://i.pravatar.cc/150?u=ks"
    },
    {
        name: "Robert Miller",
        role: "Value Investor",
        market: "Stocks",
        content: "Even for long-term holds, getting the entry right matters. This tool helps me find the perfect dips in blue-chip stocks.",
        rating: 4.5,
        avatar: "RM",
        image: "https://i.pravatar.cc/150?u=rm"
    },
    {
        name: "Lisa Wong",
        role: "Commodities Trader",
        market: "Commodities",
        content: "Silver and Gold analysis is top-tier. It understands the relationship between DXY and commodities better than most bots I've tried.",
        rating: 5,
        avatar: "LW",
        image: "https://i.pravatar.cc/150?u=lw"
    },
    {
        name: "Thomas Berg",
        role: "Algo Trader",
        market: "Forex",
        content: "I've been manually verifying my algo signals with this AI. It's surprisingly good at identifying macro trend shifts early.",
        rating: 5,
        avatar: "TB",
        image: "https://i.pravatar.cc/150?u=tb"
    },
    {
        name: "Sofia Rossi",
        role: "Retail Trader",
        market: "Stocks",
        content: "Simple to use but very powerful. I just upload my screenshot and get a clear map of what to look for. No more second-guessing myself.",
        rating: 4.5,
        avatar: "SR",
        image: "https://i.pravatar.cc/150?u=sr"
    },
    {
        name: "Liam O'Connor",
        role: "Forex Enthusiast",
        market: "Forex",
        content: "The AI's ability to spot hidden divergence is incredible. It really adds an extra layer of confidence to my trades.",
        rating: 5,
        avatar: "LO",
        image: "https://i.pravatar.cc/150?u=lo"
    },
    {
        name: "Chen Wei",
        role: "Market Analyst",
        market: "Stocks",
        content: "Institutional levels of detail. The risk-reward scenarios are realistically drafted. It's like having a senior analyst by your side.",
        rating: 5,
        avatar: "CW",
        image: "https://i.pravatar.cc/150?u=cw"
    },
    {
        name: "Olivia Dumont",
        role: "Day Trader",
        market: "Commodities",
        content: "Traded Natural Gas with this over the last week. The AI accurately predicted the reversal at the key psychological level.",
        rating: 5,
        avatar: "OD",
        image: "https://i.pravatar.cc/150?u=od"
    },
    {
        name: "Carlos Mendez",
        role: "Forex Scalper",
        market: "Forex",
        content: "Great tool for quick checks. The 15m chart analysis is sharp and avoids much of the market noise.",
        rating: 4,
        avatar: "CM",
        image: "https://i.pravatar.cc/150?u=cm"
    },
    {
        name: "Isabella Martinez",
        role: "Swing Trader",
        market: "Stocks",
        content: "Love the multi-timeframe analysis logic. It keeps me on the right side of the primary trend while looking for entries.",
        rating: 5,
        avatar: "IM",
        image: "https://i.pravatar.cc/150?u=im"
    },
    {
        name: "James Wilson",
        role: "Full-time Trader",
        market: "Commodities",
        content: "Copper and Platinum analysis is surprisingly deep. This tool covers more than just the majors, which is great for diversification.",
        rating: 4.5,
        avatar: "JW",
        image: "https://i.pravatar.cc/150?u=jw"
    },
    {
        name: "Sanjay Gupta",
        role: "Nifty/Forex Trader",
        market: "Forex",
        content: "The AI understands price action patterns perfectly. Double tops, head and shoulders, flags—it picks them all up with high accuracy.",
        rating: 5,
        avatar: "SG",
        image: "https://i.pravatar.cc/150?u=sg"
    },
    {
        name: "Chloe Lefebvre",
        role: "Beginner Trader",
        market: "Stocks",
        content: "This taught me more about charts than most courses. Seeing how the AI builds its reasoning helps me learn what to look for.",
        rating: 5,
        avatar: "CL",
        image: "https://i.pravatar.cc/150?u=cl"
    },
    {
        name: "Noah Smith",
        role: "Professional Trader",
        market: "Forex",
        content: "One of the best AI tools I've used. It's fast, logical, and the interface is clean. Doesn't get in the way of your workflow.",
        rating: 5,
        avatar: "NS",
        image: "https://i.pravatar.cc/150?u=ns"
    },
    {
        name: "Amara Okoro",
        role: "Crypto/Forex Trader",
        market: "Forex",
        content: "Very impressed with how it handles high volatility periods. Most bots break down, but this stays calm and objective.",
        rating: 4.5,
        avatar: "AO",
        image: "https://i.pravatar.cc/150?u=ao"
    },
    {
        name: "Lucas Fischer",
        role: "Equity Trader",
        market: "Stocks",
        content: "Focusing on S&P 500 components, this AI provides excellent context on market sentiment and structure.",
        rating: 5,
        avatar: "LF",
        image: "https://i.pravatar.cc/150?u=lf"
    },
    {
        name: "Yasmine Belhaj",
        role: "Commodities Trader",
        market: "Commodities",
        content: "Gold analysis has been life-changing for my account. The precision on daily pivots is unbeatable.",
        rating: 5,
        avatar: "YB",
        image: "https://i.pravatar.cc/150?u=yb"
    },
    {
        name: "Peter Janssen",
        role: "Swing Trader",
        market: "Forex",
        content: "It's rare to find a tool that understands the 'why' behind price movement. This AI does. Five stars.",
        rating: 5,
        avatar: "PJ",
        image: "https://i.pravatar.cc/150?u=pj"
    },
    {
        name: "Grace Taylor",
        role: "Day Trader",
        market: "Stocks",
        content: "Excellent for quick bias checks. When you're in the heat of the moment, a second objective opinion is invaluable.",
        rating: 4,
        avatar: "GT",
        image: "https://i.pravatar.cc/150?u=gt"
    },
    {
        name: "Viktor Volkov",
        role: "Professional Scalper",
        market: "Forex",
        content: "Caught the GBP/USD reversal perfectly today. The AI spotted the rounding bottom before the breakout happened.",
        rating: 5,
        avatar: "VV",
        image: "https://i.pravatar.cc/150?u=vv"
    },
    {
        name: "Mia Andersson",
        role: "Small Account Trader",
        market: "Stocks",
        content: "Helped me grow my account by avoiding overtrading. I only take setups that the AI also likes.",
        rating: 4.5,
        avatar: "MA",
        image: "https://i.pravatar.cc/150?u=ma"
    },
    {
        name: "Daniel Cho",
        role: "Hedge Fund Analyst",
        market: "Forex",
        content: "I use it to verify my manual mapping. It's a great sanity check and often picks up minor details I miss.",
        rating: 5,
        avatar: "DC",
        image: "https://i.pravatar.cc/150?u=dc"
    },
    {
        name: "Hannah Wright",
        role: "Part-time Swing Trader",
        market: "Commodities",
        content: "Crude Oil signals are very consistent. The AI really excels at identifying broad trend exhaustion.",
        rating: 4.5,
        avatar: "HW",
        image: "https://i.pravatar.cc/150?u=hw"
    },
    {
        name: "Zoe Robinson",
        role: "Trend Follower",
        market: "Forex",
        content: "The best trend confirmation tool on the market. It keeps me in winning trades longer and gets me out of losers faster.",
        rating: 5,
        avatar: "ZR",
        image: "https://i.pravatar.cc/150?u=zr"
    },
    {
        name: "Ethan Walker",
        role: "Scalper",
        market: "Stocks",
        content: "Rapid-fire analysis that keeps up with my style. The precision on 1m and 5m charts is impressive for an AI.",
        rating: 4.5,
        avatar: "EW2",
        image: "https://i.pravatar.cc/150?u=ew2"
    },
    {
        name: "Ava Campbell",
        role: "Forex Day Trader",
        market: "Forex",
        content: "The AI's reasoning on the USD/CAD trap today was brilliant. It saved me from a huge drawdown.",
        rating: 5,
        avatar: "AC",
        image: "https://i.pravatar.cc/150?u=ac"
    },
    {
        name: "Benjamin Scott",
        role: "Commodities Trader",
        market: "Commodities",
        content: "Professional-grade mapping for XAU/USD. It respects historical levels perfectly. High degree of trust.",
        rating: 5,
        avatar: "BS",
        image: "https://i.pravatar.cc/150?u=bs"
    },
    {
        name: "Charlotte Evans",
        role: "Stock Market Investor",
        market: "Stocks",
        content: "Even for my long-term portfolio, getting the right technical entry is key. This AI makes it easy.",
        rating: 4,
        avatar: "CE",
        image: "https://i.pravatar.cc/150?u=ce"
    },
    {
        name: "Sebastian King",
        role: "Full-time Trader",
        market: "Forex",
        content: "Consistent, reliable, and logical. What more can you ask for from a trading tool? Best investment I've made lately.",
        rating: 5,
        avatar: "SK",
        image: "https://i.pravatar.cc/150?u=sk"
    },
    {
        name: "Layla Hassan",
        role: "Swing Trader",
        market: "Forex",
        content: "The EUR/GBP analysis helped me catch a 50-pip move yesterday. The logic behind the entry was flawless.",
        rating: 5,
        avatar: "LH",
        image: "https://i.pravatar.cc/150?u=lh"
    },
    {
        name: "Samuel Baker",
        role: "Day Trader",
        market: "Commodities",
        content: "Silver analysis is sharp. The AI caught the rejection at $30 perfectly. One of my best trades this month.",
        rating: 4.5,
        avatar: "SB",
        image: "https://i.pravatar.cc/150?u=sb"
    },
    {
        name: "Maya Patel",
        role: "Equity Analyst",
        market: "Stocks",
        content: "Great context on individual stocks. It helps me understand where the smart money is moving before the big breakouts.",
        rating: 5,
        avatar: "MP",
        image: "https://i.pravatar.cc/150?u=mp"
    },
    {
        name: "Oscar Nilsson",
        role: "Forex Trader",
        market: "Forex",
        content: "Been using it for the JPY pairs. It handles the 'carry trade' dynamics in the price action very well.",
        rating: 5,
        avatar: "ON",
        image: "https://i.pravatar.cc/150?u=on"
    },
    {
        name: "Aria Kim",
        role: "Scalper",
        market: "Stocks",
        content: "Quick, efficient, and visual. The mapping it provides on the chart is very easy to read and follow.",
        rating: 4,
        avatar: "AK",
        image: "https://i.pravatar.cc/150?u=ak"
    },
    {
        name: "Gabriel Garcia",
        role: "Professional Trader",
        market: "Forex",
        content: "A powerful edge in the market. I've recommended it to my entire trading circle and everyone is impressed.",
        rating: 5,
        avatar: "GG",
        image: "https://i.pravatar.cc/150?u=gg"
    },
    {
        name: "Nora Lind",
        role: "Commodities Trader",
        market: "Commodities",
        content: "Gold price action is its specialty. The AI never seems to miss a major order block on the H1/H4 timeframes.",
        rating: 5,
        avatar: "NL",
        image: "https://i.pravatar.cc/150?u=nl"
    },
    {
        name: "Felix Schmidt",
        role: "Index Trader",
        market: "Stocks",
        content: "Focusing on DAX and S&P 500, this tool provides excellent structural insights that help me stay on the right side of the trend.",
        rating: 4.5,
        avatar: "FS",
        image: "https://i.pravatar.cc/150?u=fs"
    },
    {
        name: "Stella Brown",
        role: "Day Trader",
        market: "Forex",
        content: "Saved me from a huge trap on the GBP/USD news release today. The AI correctly identified the fakeout.",
        rating: 5,
        avatar: "SB2",
        image: "https://i.pravatar.cc/150?u=sb2"
    },
    {
        name: "Hugo Martin",
        role: "Part-time Trader",
        market: "Forex",
        content: "Super reliable tool. It has helped me develop a more patient and objective approach to the markets.",
        rating: 5,
        avatar: "HM",
        image: "https://i.pravatar.cc/150?u=hm"
    },
    {
        name: "Aurora Lopez",
        role: "Swing Trader",
        market: "Stocks",
        content: "Identified the accumulation phase on Tesla weeks before the breakout. Truly incredible performance.",
        rating: 5,
        avatar: "AL",
        image: "https://i.pravatar.cc/150?u=al"
    },
    {
        name: "Julian Vogel",
        role: "Forex Professional",
        market: "Forex",
        content: "One of the most valuable resources in my arsenal. It provides elite-level analysis that used to take hours.",
        rating: 5,
        avatar: "JV",
        image: "https://i.pravatar.cc/150?u=jv"
    },
    {
        name: "Emma Wood",
        role: "Commodities Specialist",
        market: "Commodities",
        content: "The support/resistance mapping for Oil is second to none. High degree of professionalism in the output.",
        rating: 4.5,
        avatar: "EW3",
        image: "https://i.pravatar.cc/150?u=ew3"
    },
    {
        name: "Kofi Mensah",
        role: "Full-time Trader",
        market: "Forex",
        content: "A game changer for my trading psychology. Having a logic-based second opinion keeps my emotions in check.",
        rating: 5,
        avatar: "KM",
        image: "https://i.pravatar.cc/150?u=km"
    },
    {
        name: "Aarav Sharma",
        role: "Day Trader",
        market: "Forex",
        content: "I've tried many tools for EUR/USD analysis, but the precision here is world-class. Logical and sharp analysis every time!",
        rating: 5,
        avatar: "AS",
        image: "https://i.pravatar.cc/150?u=as"
    },
    {
        name: "Arjun Mehta",
        role: "Swing Trader",
        market: "Stocks",
        content: "Nifty analysis is quite sharp. The support zones identified by the AI really help in filtering daily noise.",
        rating: 4.5,
        avatar: "AM",
        image: "https://i.pravatar.cc/150?u=am"
    },
    {
        name: "Abir Hossain",
        role: "Forex Trader",
        market: "Forex",
        content: "Dhaka theke trade kori, and this tool has changed my perspective on GBP pairs. Khub bhalo tool!",
        rating: 5,
        avatar: "AH",
        image: "https://i.pravatar.cc/150?u=ah"
    },
    {
        name: "Ali Raza",
        role: "Commodities Specialist",
        market: "Commodities",
        content: "Gold price action is its strongest suit. In Karachi, we rely on technicals, and this AI adds huge value.",
        rating: 5,
        avatar: "AR",
        image: "https://i.pravatar.cc/150?u=ar"
    },
    {
        name: "Bimal Thapa",
        role: "Full-time Trader",
        market: "Stocks",
        content: "This tool is incredibly helpful for stock picking. It identifies key reversal zones with surprising accuracy and clean mapping.",
        rating: 4.5,
        avatar: "BT",
        image: "https://i.pravatar.cc/150?u=bt"
    },
    {
        name: "Diya Iyer",
        role: "Option Trader",
        market: "Stocks",
        content: "The institutional level reasoning provided by the AI is very impressive. It feels like a premium service.",
        rating: 5,
        avatar: "DI",
        image: "https://i.pravatar.cc/150?u=di"
    },
    {
        name: "Farah Sultana",
        role: "Swing Trader",
        market: "Forex",
        content: "User-friendly and very logic-driven. I appreciate that it explains the WHY behind every signal.",
        rating: 5,
        avatar: "FS2",
        image: "https://i.pravatar.cc/150?u=fs2"
    },
    {
        name: "Bilal Khan",
        role: "Day Trader",
        market: "Forex",
        content: "Fast as lightning! When I'm checking multiple pairs, this second opinion is exactly what I need.",
        rating: 4,
        avatar: "BK",
        image: "https://i.pravatar.cc/150?u=bk"
    },
    {
        name: "Deepa Adhikari",
        role: "Part-time Trader",
        market: "Commodities",
        content: "Support and resistance levels are very accurate. It helps me setup my trades before I go to work.",
        rating: 4.5,
        avatar: "DA",
        image: "https://i.pravatar.cc/150?u=da"
    },
    {
        name: "Ishaan Gupta",
        role: "Portfolio Manager",
        market: "Stocks",
        content: "High-quality market structure analysis. It's rare to find an AI that truly respects price action fundamentals.",
        rating: 5,
        avatar: "IG",
        image: "https://i.pravatar.cc/150?u=ig"
    },
    {
        name: "Hasan Mahmud",
        role: "Scalper",
        market: "Forex",
        content: "Bangladesh trading community needs this. The precision on the 15m timeframe is remarkable.",
        rating: 5,
        avatar: "HM2",
        image: "https://i.pravatar.cc/150?u=hm2"
    },
    {
        name: "Fatima Zahra",
        role: "Swing Trader",
        market: "Stocks",
        content: "Analysis is deep and trustworthy. I love how it highlights the potential risks alongside the rewards.",
        rating: 4.5,
        avatar: "FZ",
        image: "https://i.pravatar.cc/150?u=fz"
    },
    {
        name: "Jyoti KC",
        role: "Day Trader",
        market: "Forex",
        content: "Professional traders are going to love this. Logical explanations and sharp precision. Great work on the interface!",
        rating: 5,
        avatar: "JK",
        image: "https://i.pravatar.cc/150?u=jk"
    },
    {
        name: "Kavya Reddy",
        role: "Equity Trader",
        market: "Stocks",
        content: "The AI analysis is consistently objective. It keeps me from making emotional trades during market hours.",
        rating: 5,
        avatar: "KR",
        image: "https://i.pravatar.cc/150?u=kr"
    },
    {
        name: "Ismael Ahmed",
        role: "Commodities Specialist",
        market: "Commodities",
        content: "Silver and Gold analysis is its strongest area. The levels it identifies are pivotals during NY session.",
        rating: 5,
        avatar: "IA",
        image: "https://i.pravatar.cc/150?u=ia"
    },
    {
        name: "Haris Malik",
        role: "Forex Scalper",
        market: "Forex",
        content: "Simple interface but powerful engine. It accurately detects hidden patterns that most indicators miss.",
        rating: 4,
        avatar: "HM3",
        image: "https://i.pravatar.cc/150?u=hm3"
    },
    {
        name: "Milan Gurung",
        role: "Crypto Specialist",
        market: "Forex",
        content: "Very impressive. Caught the BTC trend reversal perfectly last week. Logical and clean mapping.",
        rating: 5,
        avatar: "MG",
        image: "https://i.pravatar.cc/150?u=mg"
    },
    {
        name: "Pranav Singh",
        role: "Day Trader",
        market: "Stocks",
        content: "Institutional levels of detail. The breakdown of market structure is exactly how I was taught by pros.",
        rating: 5,
        avatar: "PS",
        image: "https://i.pravatar.cc/150?u=ps"
    },
    {
        name: "Jannat Ara",
        role: "Swing Trader",
        market: "Forex",
        content: "Easy to use and very fast. I appreciate the detailed reasons provided for every trade scenario.",
        rating: 4.5,
        avatar: "JA",
        image: "https://i.pravatar.cc/150?u=ja"
    },
    {
        name: "Imaan Shah",
        role: "Forex Enthusiast",
        market: "Forex",
        content: "Pakistan's trading scene is getting better with tools like this. Precision is key, and this delivers.",
        rating: 5,
        avatar: "IS",
        image: "https://i.pravatar.cc/150?u=is"
    },
    {
        name: "Nitesh Pandey",
        role: "Full-time Trader",
        market: "Stocks",
        content: "Really good for bias confirmation. It helps me stay in winning trades longer by showing the bigger picture.",
        rating: 5,
        avatar: "NP",
        image: "https://i.pravatar.cc/150?u=np"
    },
    {
        name: "Rohan Das",
        role: "Swing Trader",
        market: "Commodities",
        content: "Commodities analysis is very deep here. Caught the Gold reversal at $2400 perfectly. Five stars!",
        rating: 4,
        avatar: "RD",
        image: "https://i.pravatar.cc/150?u=rd"
    },
    {
        name: "Kabir Khan",
        role: "Day Trader",
        market: "Forex",
        content: "Bhalo experience! The way it maps out the liquidity zones is better than most paid services.",
        rating: 5,
        avatar: "KK",
        image: "https://i.pravatar.cc/150?u=kk"
    },
    {
        name: "Khalid Iqbal",
        role: "Portfolio Manager",
        market: "Stocks",
        content: "Trustworthy and objective. The AI doesn't have emotions, which makes its analysis much more reliable.",
        rating: 4.5,
        avatar: "KI",
        image: "https://i.pravatar.cc/150?u=ki"
    },
    {
        name: "Pradip Rai",
        role: "Forex Trader",
        market: "Forex",
        content: "Catching the USD/JPY trend was easy with this. It kept showing the bullish market structure clearly.",
        rating: 5,
        avatar: "PR",
        image: "https://i.pravatar.cc/150?u=pr"
    },
    {
        name: "Sanaya Jain",
        role: "Scalper",
        market: "Stocks",
        content: "Quick results for fast markets. When things get volatile, this second opinion is my best friend.",
        rating: 5,
        avatar: "SJ2",
        image: "https://i.pravatar.cc/150?u=sj2"
    },
    {
        name: "Laila Akter",
        role: "Retail Trader",
        market: "Forex",
        content: "Bangladesh's best tool for chart mastery. It's helping me understand technicals much better.",
        rating: 4.5,
        avatar: "LA",
        image: "https://i.pravatar.cc/150?u=la"
    },
    {
        name: "Maryam Bibi",
        role: "Swing Trader",
        market: "Commodities",
        content: "Crude Oil insights are very consistent. I appreciate the clear invalidation levels it provides.",
        rating: 5,
        avatar: "MB",
        image: "https://i.pravatar.cc/150?u=mb"
    },
    {
        name: "Ranjit Saha",
        role: "Day Trader",
        market: "Stocks",
        content: "When trading stocks, these patterns are extremely helpful. The precision in identifying target zones is top-tier.",
        rating: 5,
        avatar: "RS",
        image: "https://i.pravatar.cc/150?u=rs"
    },
    {
        name: "Vivaan Kapoor",
        role: "Option Specialist",
        market: "Stocks",
        content: "Highly accurate and very logical. The institutional reasoning adds a layer of professionalism to my strategy.",
        rating: 5,
        avatar: "VK",
        image: "https://i.pravatar.cc/150?u=vk"
    },
    {
        name: "Nafis Iqbal",
        role: "Full-time Trader",
        market: "Forex",
        content: "Consistent results across multiple pairs. I love the way it breaks down market sentiment.",
        rating: 4,
        avatar: "NI",
        image: "https://i.pravatar.cc/150?u=ni"
    },
    {
        name: "Omar Sharif",
        role: "Market Analyst",
        market: "Commodities",
        content: "Gold price action analysis is simply elite. It respects historical pivots with remarkable accuracy.",
        rating: 5,
        avatar: "OS",
        image: "https://i.pravatar.cc/150?u=os"
    },
    {
        name: "Sabita Poudel",
        role: "Part-time Trader",
        market: "Forex",
        content: "Simple enough for beginners but deep enough for pros. It's my daily go-to for trend checks.",
        rating: 5,
        avatar: "SP",
        image: "https://i.pravatar.cc/150?u=sp"
    },
    {
        name: "Ananya Desai",
        role: "Swing Trader",
        market: "Stocks",
        content: "Helped me filter out so many bad trades. Now I only take setups where the AI confirms my bias.",
        rating: 4.5,
        avatar: "AD",
        image: "https://i.pravatar.cc/150?u=ad"
    },
    {
        name: "Rafiq Islam",
        role: "Day Trader",
        market: "Forex",
        content: "Bangladesh trading community needs tool like this. The precision and speed are world-class.",
        rating: 5,
        avatar: "RI",
        image: "https://i.pravatar.cc/150?u=ri"
    },
    {
        name: "Sana Gul",
        role: "Forex Enthusiast",
        market: "Forex",
        content: "Very impressive results during the recent FOMC volatility. It stayed calm and logical throughout.",
        rating: 5,
        avatar: "SG2",
        image: "https://i.pravatar.cc/150?u=sg2"
    },
    {
        name: "Tara Neupane",
        role: "Day Trader",
        market: "Stocks",
        content: "The patterns are detected perfectly by this AI. It has helped me significantly in refine my entry and exit strategies.",
        rating: 5,
        avatar: "TN",
        image: "https://i.pravatar.cc/150?u=tn"
    },
    {
        name: "Advait Joshi",
        role: "Portfolio Manager",
        market: "Stocks",
        content: "Premium analysis that saves me hours. The risk-reward scenarios are realistically drafted and professional.",
        rating: 4,
        avatar: "AJ",
        image: "https://i.pravatar.cc/150?u=aj"
    },
    {
        name: "Sadia Rahman",
        role: "Swing Trader",
        market: "Forex",
        content: "Love the logic-driven approach. It helps me focus on high-probability zones instead of chasing every move.",
        rating: 5,
        avatar: "SR2",
        image: "https://i.pravatar.cc/150?u=sr2"
    },
    {
        name: "Usman Ghani",
        role: "Commodities Trader",
        market: "Commodities",
        content: "Gold analysis has been life-changing for my results. The depth in price action is unbeatable.",
        rating: 5,
        avatar: "UG",
        image: "https://i.pravatar.cc/150?u=ug"
    },
    {
        name: "Umesh Shrestha",
        role: "Forex Scalper",
        market: "Forex",
        content: "Super fast and very accurate. Catching 10-20 pips every day has become much easier with this AI.",
        rating: 4.5,
        avatar: "US",
        image: "https://i.pravatar.cc/150?u=us"
    },
    {
        name: "Myra Varma",
        role: "Retail Trader",
        market: "Stocks",
        content: "Simple to use but very powerful engine. It accurately detects hidden divergence that I usually miss.",
        rating: 5,
        avatar: "MV",
        image: "https://i.pravatar.cc/150?u=mv"
    },
    {
        name: "Tanvir Ahmed",
        role: "Day Trader",
        market: "Forex",
        content: "Highly recommended for traders in Bangladesh. The AI's ability to map structure is simply elite.",
        rating: 5,
        avatar: "TA",
        image: "https://i.pravatar.cc/150?u=ta"
    },
    {
        name: "Zainab Ali",
        role: "Swing Trader",
        market: "Stocks",
        content: "Analysis is consistently logical and deep. I appreciate the emphasis on risk management in the scenarios.",
        rating: 4,
        avatar: "ZA",
        image: "https://i.pravatar.cc/150?u=za"
    },
    {
        name: "Sai Kiran",
        role: "Full-time Trader",
        market: "Forex",
        content: "A game changer for my account. Having a professional second opinion helps keep my trading disciplined.",
        rating: 5,
        avatar: "SK2",
        image: "https://i.pravatar.cc/150?u=sk2"
    },
    {
        name: "Yasmin Bakar",
        role: "Commodities Specialist",
        market: "Commodities",
        content: "Exceptional support/resistance mapping for XAU/USD. It identifies institutional levels perfectly.",
        rating: 5,
        avatar: "YB2",
        image: "https://i.pravatar.cc/150?u=yb2"
    },
    {
        name: "Zoya Khan",
        role: "Forex Day Trader",
        market: "Forex",
        content: "The best trading assistant I've found. It's fast, accurate, and provides high-quality market insights.",
        rating: 4.5,
        avatar: "ZK",
        image: "https://i.pravatar.cc/150?u=zk"
    }
];
