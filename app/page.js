import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
export default function Home() {
  return (
    <main className="bg flex min-h-screen flex-col items-center justify-between p-[100px]">
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
      <Section5 />
    </main>
  );
}
