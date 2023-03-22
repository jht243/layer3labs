import ClientsType from '@/types/clients';
import ProcessType from '@/types/processes';
import ServicesType from '@/types/services';
import TestimonialsType from '@/types/testimonials';

import bowleroLogo from '@/images/bowlero@x2.png';
import etherealLogo from '@/images/ethereal@x2.png';
import GSLogo from '@/images/gn@x2.png';
import JGILogo from '@/images/jgi@x2.png';
import pipeflareLogo from '@/images/pipeflare@x2.png';
import advisoryIcon from '@/images/services/advisory.svg';
import gamesIcon from '@/images/services/games.svg';
import loyaltyIcon from '@/images/services/loyalty.svg';
import marketplaceIcon from '@/images/services/marketplace.svg';
import metaverseIcon from '@/images/services/metaverse.svg';
import tradingIcon from '@/images/services/trading.svg';
import styrLogo from '@/images/styr@x2.png';
import deanPhoto from '@/images/team/dean-steinbeck.png';
import jonathanPhoto from '@/images/team/jonathan-teplitsky.png';
import liatPhoto from '@/images/team/liat-aaronson.png';
import mayPhoto from '@/images/team/may-lunawong.png';
import robertPhoto from '@/images/team/robert-viglione.png';
import rosarioPhoto from '@/images/team/rosario-pabst.png';

const team = [
  {
    image: jonathanPhoto,
    name: 'Jonathan Teplitsky',
    position: 'CEO & Team Lead',
    text: 'JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.',
    linkedin: 'https://www.linkedin.com/in/jonathanteplitsky/'
  },
  {
    image: mayPhoto,
    name: 'May Lunawong',
    position: 'Product Manager',
    text: 'MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS. ',
    linkedin: 'https://www.linkedin.com/in/nutchara-lunawong-954183190/'
  },
  {
    image: robertPhoto,
    name: 'Robert Viglione',
    position: 'Company Advisor',
    text: 'CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS.  FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.',
    linkedin: 'https://www.linkedin.com/in/robert-viglione-2780634/'
  },
  {
    image: liatPhoto,
    name: 'Liat Aaronson',
    position: 'Company Advisor',
    text: 'COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP. INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.',
    linkedin: 'https://www.linkedin.com/in/liataaronson/'
  },
  {
    image: rosarioPhoto,
    name: 'Rosario Pabst',
    position: 'Company Advisor',
    text: 'SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.',
    linkedin: 'https://www.linkedin.com/in/dean-steinbeck/'
  },
  {
    image: deanPhoto,
    name: 'Dean Steinbeck',
    position: 'Product Manager',
    text: 'PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS. 15 YEARS REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A FOCUS ON DATA. ',
    linkedin: 'https://www.linkedin.com/in/rosario-pabst/'
  }
]

const services = {
  col1: [
    {
      title: 'NFT MARKETPLACES',
      text: 'Deploy your own marketplace in under 30 days and accept credit card payments',
      icon: marketplaceIcon,
    },
    {
      title: 'TRADING PLATFORMS',
      text: 'Create a trading platforms for users to buy, sell, and hold digitized goods',
      icon: tradingIcon,
    },
    {
      title: 'METAVERSE BUILDS',
      text: 'Create metaverse experiences that add to your brand\'s value proposition',
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
      title: 'PLAY-TO-EARN GAMES',
      text: 'Harness massive user attention through fun p2e games built in unity',
      icon: gamesIcon,
    },
    {
      title: 'Advisory Services',
      text: 'We\'ll help you integrate your web3 strategy with your business goals',
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
] as ProcessType[];

const clients = [
  {
    image: bowleroLogo,
    text: 'NFT marketplace and minting platform for league bowler certification program',
    width: 155,
    height: 44,
  },
  {
    image: styrLogo,
    text: 'High frequency trading sneaker marketplace with asset backed nfts',
    width: 76,
    height: 61,
  },
  {
    image: GSLogo,
    text: 'Crypto micro-wallet lead generation platform with gaming and airdrops',
    width: 168,
    height: 43,
  },
  {
    image: JGILogo,
    text: 'membership, charity, and nft ticketing platform for national sports organizations',
    width: 124,
    height: 51,
  },
  {
    image: etherealLogo,
    text: 'Web3.0 strategy and implementation to preserve dr. goodalls legacy and research',
    width: 130,
    height: 51,
  },
  {
    image: pipeflareLogo,
    text: 'Play-to-earn gaming platform supporting 60,000 daily players and 7 custom games',
    width: 138,
    height: 77,
  },
] as ClientsType[];

const testimonials = [
  {
    logo: GSLogo,
    text: '“I wanted to mention how fun, motivating, De-stressing and invigorating it is to work with layer III, everything went very smoothly.”',
    // photo: GSLogo,
    name: 'JASON KOVAR, COO OF GAMESTATION',
    width: 140,
    height: 41,
    company: 'Bowlero Corporation'
  },
  // {
  //   logo: GSLogo,
  //   text: '“I wanted to mention how fun, motivating, De-stressing and invigorating it is to work with layer III, everything went very smoothly.”',
  //   photo: null,
  //   name: 'JASON KOVAR, COO OF GAMESTATION',
  //   width: 140,
  //   height: 41,
  //   company: 'Bowlero Corporation'
  // },
  // {
  //   logo: GSLogo,
  //   text: '“I wanted to mention how fun, motivating, De-stressing and invigorating it is to work with layer III, everything went very smoothly.”',
  //   photo: null,
  //   name: 'JASON KOVAR, COO OF GAMESTATION',
  //   width: 140,
  //   height: 41,
  //   company: 'Bowlero Corporation'
  // },
  // {
  //   logo: GSLogo,
  //   text: '“I wanted to mention how fun, motivating, De-stressing and invigorating it is to work with layer III, everything went very smoothly.”',
  //   photo: null,
  //   name: 'JASON KOVAR, COO OF GAMESTATION',
  //   width: 140,
  //   height: 41,
  //   company: 'Bowlero Corporation'
  // },
] as TestimonialsType[];

export { team, services, processes, clients, testimonials }
