import ClientsType from '@/types/clients'
import ProcessType from '@/types/processes'
import ServicesType from '@/types/services'
import TestimonialsType from '@/types/testimonials'

import beyondallthenoiseLogo from '@/images/beyondallthenoise.png'
import bowleroLogo from '@/images/bowlero@x2.png'
import etherealLogo from '@/images/ethereal@x2.png'
import GSLogo from '@/images/gn@x2.png'
import horizenLogo from '@/images/horizen2.png'
import JGILogo from '@/images/jgi@x2.png'
import pipeflareLogo from '@/images/pipeflare@x2.png'
import advisoryIcon from '@/images/services/advisory.svg'
import gamesIcon from '@/images/services/games.svg'
import loyaltyIcon from '@/images/services/loyalty.svg'
import marketplaceIcon from '@/images/services/marketplace.svg'
import metaverseIcon from '@/images/services/metaverse.svg'
import tradingIcon from '@/images/services/trading.svg'
import styrLogo from '@/images/styr_new.png'
import christinePhoto from '@/images/team/christine-yoong.jpg'
import jonathanPhoto from '@/images/team/jonathan-teplitsky.png'
import liatPhoto from '@/images/team/liat-aaronson.png'
import mayPhoto from '@/images/team/may-lunawong_v2.png'
import robertPhoto from '@/images/team/robert-viglione.png'
import rosarioPhoto from '@/images/team/rosario-pabst.png'

const team = [
  {
    image: jonathanPhoto,
    name: 'Jonathan Teplitsky',
    position: 'CEO & Team Lead',
    text: 'JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.',
    linkedin: 'https://www.linkedin.com/in/jonathanteplitsky/',
  },
  {
    image: mayPhoto,
    name: 'May Lunawong',
    position: 'Product Manager',
    text: 'MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS. ',
    linkedin: 'https://www.linkedin.com/in/nutchara-lunawong-954183190/',
  },
  {
    image: robertPhoto,
    name: 'Robert Viglione',
    position: 'Company Advisor',
    text: 'CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS.  FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.',
    linkedin: 'https://www.linkedin.com/in/robert-viglione-2780634/',
  },
  {
    image: liatPhoto,
    name: 'Liat Aaronson',
    position: 'Company Advisor',
    text: 'COO AT HORIZEN LABS, HIGH-GROWTH STARTUP. INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.',
    linkedin: 'https://www.linkedin.com/in/liataaronson/',
  },
  {
    image: rosarioPhoto,
    name: 'Rosario Pabst',
    position: 'Company Advisor',
    text: 'SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.',
    linkedin: 'https://www.linkedin.com/in/dean-steinbeck/',
  },
  {
    image: christinePhoto,
    name: 'Christine Yoong',
    position: 'Company Advisor',
    text: 'Technology executive with a background in Cloud Infrastructure & Finance. MBA from Harvard Business School. Company builder & operator.',
    linkedin: 'https://www.linkedin.com/in/christineyoong/',
  },
]

const services = {
  col1: [
    {
      title: 'AI APPLICATIONS',
      text: 'Deploy your own AI-powered application in under 30 days and accept credit card payments',
      icon: marketplaceIcon,
    },
    {
      title: 'PLATFORM DEVELOPMENT',
      text: 'Create a platform for users to interact with intelligent agents and data',
      icon: tradingIcon,
    },
    {
      title: 'IMMERSIVE EXPERIENCES',
      text: "Create immersive experiences that add to your brand's value proposition",
      icon: metaverseIcon,
    },
  ] as ServicesType[],
  col2: [
    {
      title: 'LOYALTY PROGRAMS',
      text: 'Digitize your rewards program to increase engagement and retention',
      icon: loyaltyIcon,
    },
    {
      title: 'GAMING EXPERIENCES',
      text: 'Harness massive user attention through fun games built in unity',
      icon: gamesIcon,
    },
    {
      title: 'Advisory Services',
      text: "We'll help you integrate your AI strategy with your business goals",
      icon: advisoryIcon,
    },
  ] as ServicesType[],
}

const processes = [
  {
    title: 'STUDY',
    text: 'We study your unique business requirements and build software to fit your business goal',
  },
  {
    title: 'DEPLOY',
    text: 'We test and deploy your software',
  },
  {
    title: 'MANAGE',
    text: 'We manage the day-to-day backend operations',
  },
] as ProcessType[]

const clients = [
  {
    image: bowleroLogo,
    text: 'Digital asset marketplace and platform for league bowler certification program',
    width: 155,
    height: 44,
  },
  {
    image: styrLogo,
    text: 'High frequency trading asset backed sneaker marketplace',
    width: 200,
    height: 36,
  },
  {
    image: GSLogo,
    text: 'Digital wallet lead generation platform with gaming and rewards',
    width: 168,
    height: 43,
  },
  {
    image: JGILogo,
    text: 'Membership, charity, and digital ticketing platform for national sports organizations',
    width: 124,
    height: 51,
  },
  {
    image: etherealLogo,
    text: 'Digital strategy and implementation to preserve dr. goodalls legacy and research',
    width: 130,
    height: 51,
  },
  {
    image: pipeflareLogo,
    text: 'Gaming platform supporting 60,000 daily players and 7 custom games',
    width: 138,
    height: 77,
  },
] as ClientsType[]

const testimonials = [
  {
    logo: styrLogo,
    text: '“Layer 3 Labs helped us design and build an innovative sneaker trading platform. Together we turned an idea into a well architected trading application.”',
    // photo: GSLogo,
    name: 'Oscar R., Founder STYR Trade',
    width: 170,
    height: 30,
    company: 'STYR TRADE',
  },
  {
    logo: horizenLogo,
    text: '"Layer3Labs helped us build a game with AI-powered experiences and personalized engagement. The team has a fantastic understanding of our needs and delivered an easy-to-use and engaging game."',
    // photo: GSLogo,
    name: 'Manon, Senior Marketing Manager at Horizen',
    width: 175,
    height: 90,
    company: 'Horizen',
  },
  {
    logo: beyondallthenoiseLogo,
    text: '"It’s been a pleasure working with Jonathan’s team to build large-scale IP based games. His technology makes it easy for gamers to join."',
    // photo: GSLogo,
    name: 'Pat Doran, CEO of Beyond All The Noise',
    width: 220,
    height: 60,
    company: 'Beyond All The Noise',
  },
  {
    logo: GSLogo,
    text: '“I wanted to mention how fun, motivating, De-stressing and invigorating it is to work with layer III, everything went very smoothly.”',
    // photo: GSLogo,
    name: 'Jason Kovar, COO of GAMESTATION',
    width: 140,
    height: 41,
    company: 'Gamestation',
  },
] as TestimonialsType[]

export {team, services, processes, clients, testimonials}
