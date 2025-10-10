import Firstsection from "./Components/firstsection";
// import Navbar from "@/cws/components/Navbar";
import SecondSection from "./Components/secondsection";
import MembershipSection from "./Components/thirdsection";


export default function CoursesPlusCommunity() {
  return (
    <main className="w-full min-h-screen bg-[#FFF]">
      {/* <Navbar /> */}
      <Firstsection />
      <SecondSection />
      <MembershipSection />
    </main>
  );
}