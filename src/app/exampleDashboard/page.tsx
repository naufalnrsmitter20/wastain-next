// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/5bdvZCXLQsQ
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import { ResponsiveLine } from "@nivo/line";
// import { ResponsivePie } from "@nivo/pie";

// export default function Component() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="bg-[#1B5E20] px-6 py-4 text-white">
//         <div className="container mx-auto flex items-center justify-between">
//           <Link className="flex items-center gap-2" href="#">
//             <LeafIcon className="h-6 w-6" />
//             <span className="text-lg font-bold">Waste Wise</span>
//           </Link>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link className="hover:underline" href="#">
//               Home
//             </Link>
//             <Link className="hover:underline" href="#">
//               Insights
//             </Link>
//             <Link className="hover:underline" href="#">
//               Waste Management
//             </Link>
//             <Link className="hover:underline" href="#">
//               Settings
//             </Link>
//           </nav>
//         </div>
//       </header>
//       <main className="flex-1 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto py-8 md:py-12">
//           <section className="mb-8 md:mb-12">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Waste Management Dashboard</h1>
//                 <p className="text-gray-600 dark:text-gray-400">Get insights into your waste footprint and sustainability efforts.</p>
//               </div>
//               <div className="flex flex-col gap-2 sm:flex-row">
//                 <Button variant="primary">
//                   <PlusIcon className="h-4 w-4 mr-2" />
//                   Add Waste
//                 </Button>
//                 <Button variant="secondary">
//                   <DownloadIcon className="h-4 w-4 mr-2" />
//                   Export Report
//                 </Button>
//               </div>
//             </div>
//           </section>
//           <section className="mb-8 md:mb-12">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Total Waste</CardTitle>
//                   <TrashIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">2,345 kg</div>
//                   <p className="text-gray-500 dark:text-gray-400">+5% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recycled</CardTitle>
//                   <RecycleIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">1,234 kg</div>
//                   <p className="text-gray-500 dark:text-gray-400">+10% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Landfill</CardTitle>
//                   <Trash2Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">1,111 kg</div>
//                   <p className="text-gray-500 dark:text-gray-400">-2% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Diversion Rate</CardTitle>
//                   <PercentIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">52.7%</div>
//                   <p className="text-gray-500 dark:text-gray-400">+3.2% from last month</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//           <section className="mb-8 md:mb-12">
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Waste Trends</CardTitle>
//                   <LineChartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <LineChart className="aspect-[9/4]" />
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Waste by Category</CardTitle>
//                   <PieChartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <PieChart className="aspect-square" />
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//           <section>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Waste Reduction Goals</CardTitle>
//                   <TargetIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-col gap-4">
//                     <div>
//                       <p className="text-gray-600 dark:text-gray-400">Reduce total waste by 20% by the end of the year.</p>
//                       <div className="mt-2 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
//                         <div className="h-full w-[65%] rounded-full bg-[#1B5E20]" />
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 dark:text-gray-400">Increase recycling rate to 60% by the end of the year.</p>
//                       <div className="mt-2 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
//                         <div className="h-full w-[45%] rounded-full bg-[#1B5E20]" />
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Sustainability Tips</CardTitle>
//                   <LightbulbIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-col gap-4">
//                     <div className="group flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
//                       <RecycleIcon className="h-6 w-6 text-[#1B5E20] group-hover:text-gray-900 dark:group-hover:text-gray-50" />
//                       <div>
//                         <p className="text-gray-900 dark:text-gray-50 group-hover:text-gray-900 dark:group-hover:text-gray-50">Recycle Right</p>
//                         <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-400">Learn how to recycle properly.</p>
//                       </div>
//                     </div>
//                     <div className="group flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
//                       <Trash2Icon className="h-6 w-6 text-[#1B5E20] group-hover:text-gray-900 dark:group-hover:text-gray-50" />
//                       <div>
//                         <p className="text-gray-900 dark:text-gray-50 group-hover:text-gray-900 dark:group-hover:text-gray-50">Reduce Waste</p>
//                         <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-400">Tips to reduce your waste footprint.</p>
//                       </div>
//                     </div>
//                     <div className="group flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
//                       <LeafIcon className="h-6 w-6 text-[#1B5E20] group-hover:text-gray-900 dark:group-hover:text-gray-50" />
//                       <div>
//                         <p className="text-gray-900 dark:text-gray-50 group-hover:text-gray-900 dark:group-hover:text-gray-50">Sustainability Initiatives</p>
//                         <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-400">Learn about our sustainability efforts.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//         </div>
//       </main>
//       <div className="bg-[#1B5E20] px-6 py-4 text-white">
//         <div className="container mx-auto flex items-center justify-between">
//           <p className="text-sm">© 2024 Waste Wise. All rights reserved.</p>
//           <nav className="flex items-center gap-6">
//             <Link className="hover:underline" href="#">
//               Waste Tracking
//             </Link>
//             <Link className="hover:underline" href="#">
//               Recycling
//             </Link>
//             <Link className="hover:underline" href="#">
//               Sustainability Tips
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DownloadIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="7 10 12 15 17 10" />
//       <line x1="12" x2="12" y1="15" y2="3" />
//     </svg>
//   );
// }

// function LeafIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//       <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//     </svg>
//   );
// }

// function LightbulbIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//       <path d="M9 18h6" />
//       <path d="M10 22h4" />
//     </svg>
//   );
// }

// function LineChart(props: any) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }

// function LineChartIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 3v18h18" />
//       <path d="m19 9-5 5-4-4-3 3" />
//     </svg>
//   );
// }

// function PercentIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="19" x2="5" y1="5" y2="19" />
//       <circle cx="6.5" cy="6.5" r="2.5" />
//       <circle cx="17.5" cy="17.5" r="2.5" />
//     </svg>
//   );
// }

// function PieChart(props: any) {
//   return (
//     <div {...props}>
//       <ResponsivePie
//         data={[
//           { id: "Jan", value: 111 },
//           { id: "Feb", value: 157 },
//           { id: "Mar", value: 129 },
//           { id: "Apr", value: 150 },
//           { id: "May", value: 119 },
//           { id: "Jun", value: 72 },
//         ]}
//         sortByValue
//         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//         cornerRadius={0}
//         padAngle={0}
//         borderWidth={1}
//         borderColor={"#ffffff"}
//         enableArcLinkLabels={false}
//         arcLabel={(d: any) => `${d.id}`}
//         arcLabelsTextColor={"#ffffff"}
//         arcLabelsRadiusOffset={0.65}
//         colors={["#2563eb"]}
//         theme={{
//           labels: {
//             text: {
//               fontSize: "18px",
//             },
//           },
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }

// function PieChartIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
//       <path d="M22 12A10 10 0 0 0 12 2v10z" />
//     </svg>
//   );
// }

// function PlusIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }

// function RecycleIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
//       <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
//       <path d="m14 16-3 3 3 3" />
//       <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
//       <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
//       <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
//     </svg>
//   );
// }

// function TargetIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="12" r="6" />
//       <circle cx="12" cy="12" r="2" />
//     </svg>
//   );
// }

// function Trash2Icon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//       <line x1="10" x2="10" y1="11" y2="17" />
//       <line x1="14" x2="14" y1="11" y2="17" />
//     </svg>
//   );
// }

// function TrashIcon(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }
