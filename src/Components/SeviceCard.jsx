// import React from "react";
// import {
//   Tabs,
//   Tab,
//   TabList,
//   TabPanels,
//   TabPanel,
//   Button,
//   Center,
// } from "@chakra-ui/react";
// import ServiceCard from "./ServiceCard";
// const TabButton = () => {
//   const data1 = [
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/resume-database-1.jpg",
//       head: "Resume Database Access",
//       description:
//         "Find your next hire with all new RDA powered by Semantic Search technology that makes it easy and quick to find the talent matching your requirements.",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/Job-Posting-1.jpg",
//       head: "Job Posting",
//       description:
//         "Reach your next hire faster. Get relevant responses to your job ads with our new age technology.",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/Monster-Social-1.jpg",
//       head: "Monster Social Job Ads",
//       description:
//         "Use the power of MSJ to take your job posting to a large pool of active and passive job seekers on social media & beyond. Find Better, Faster",
//     },
//   ];

//   // 2nd data

//   const data2 = [
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/monster_assessment-1.jpg",
//       head: "Monster Assessments",
//       description:
//         "Monster Assessments allows recruiters to assess candidates across General Aptitude, IT (including Coding), Non-IT & Behavior Skills.",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/quinton-1.jpg",
//       head: "Quinton",
//       description:
//         "Save 70% of your efforts by automating your interview process with Monster Quinton (Quick Interview on Demand).",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/qhire-1.jpg",
//       head: "Q Hire",
//       description:
//         "Sourcing, Screening, Interview Scheduling and Offer – All in One. Q Hire is powered by AI-enabled semi-automated screening and matching engine.",
//     },
//   ];

//   //third data

//   const data3 = [
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/Career-Solution-1.jpg",
//       head: "Carrer Site Solution",
//       description:
//         "Connect with us for an SEO optimized, mobile compatible site that helps in recruiting and building your employer brand.",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/custom-job-1.jpg",
//       head: "Custom Job Template",
//       description:
//         "Get a customized job template with your branding and colour theme for your job postings!",
//     },
//     {
//       img: "https://media4.monsterindia.com/recruiter_2015/india/images/talent-1.jpg",
//       head: "Talent Bin",
//       description:
//         "A talent discovery tool which crawls relevant aggregated websites and gathers hard-to-find technical profiles.",
//     },
//   ];

//   return (
//     <div>
//       <Center>
//         <Tabs variant='ghost'>
//           <TabList width={"50%"} margin={"auto"} >
            
//             <Tab >
//               <Button
//                 borderRadius={"1"}
//                 bg={"#60489d"}
//                 color={"white"}
//                 _hover={{
//                   bg: "#60489d",
//                   color: "white",
//                 }}
//                 variant="outline"
//               >
//                 CORE SERVICES
//               </Button>
//             </Tab>
//             <Tab>
//               <Button
//                 borderRadius={"1"}
//                 bg={"#fff"}
//                 color={"black"}
//                 _hover={{
//                   bg: "#60489d",
//                   color: "white",
//                 }}
//                 variant="outline"
//               >
//                 BETTER TOGETHER
//               </Button>
//             </Tab>
//             <Tab>
//               <Button
//                 borderRadius={"1"}
//                 bg={"#fff"}
//                 color={"black"}
//                 _hover={{
//                   bg: "#60489d",
//                   color: "white",
//                 }}
//                 variant="outline"
//               >
//                 MORE SOLUTIONS
//               </Button>
//             </Tab>
//           </TabList>

//           <TabPanels>
//             <TabPanel>
//               <p>
//                 <div className="OurServices">
//                   {data1.map((item) => (
//                     <ServiceCard key={item.img} {...item} />
//                   ))}
//                 </div>
//               </p>
//             </TabPanel>
//             <TabPanel>
//               <p>
//                 <div className="OurServices">
//                   {data2.map((item) => (
//                     <ServiceCard key={item.img} {...item} />
//                   ))}
//                 </div>
//               </p>
//             </TabPanel>
//             <TabPanel>
//               <p>
//                 <div className="OurServices">
//                   {data3.map((item) => (
//                     <ServiceCard key={item.img} {...item} />
//                   ))}
//                 </div>
//               </p>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Center>
//     </div>
//   );
// };

// export default TabButton;