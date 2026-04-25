import { Hero } from "@/components/Hero";

import {  Testimonials } from "@/components/Testimonials";
import { CreditGame } from "@/components/CreditGame";
import { CreditReportSection } from "@/components/Creditreportsection";
import { AppDownloadSection } from "@/components/Appdownloadsection";
import PopularCalculators from "@/components/PopularCalculators";
import ProductComparison from "@/components/ProductComparison";
import { ProductCategories } from "@/components/ProductCategories";
import { Banks } from "@/components/Banks";
import { WhyUs } from "@/components/WhyUs";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { LatestBlogs } from "@/components/LatestBlogs";
import { HowItWorks } from "@/components/HowItWorks";

// ==================== API CALL ====================

async function getHomeData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/home`,
    {
      next: { revalidate: 60 }, // 60 sec cache
    }
  );

  if (!res.ok) throw new Error("Failed to fetch home data");

  const json = await res.json();
  return json.data;
}

// ==================== PAGE ====================

export default async function Home() {
  const data = await getHomeData();

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Hero categories={data.categories} subCategories={data.subCategories} />
      <ProductCategories categories={data.categories} subCategories={data.subCategories}/>
      <Banks partners={data.partners}/>
      <CreditReportSection />
      <FeaturedProducts products={data.products} />
      <ProductComparison />
      <PopularCalculators />
      <WhyUs />
      <CreditGame />
      <LatestBlogs blogs={data.blogs} />
      <HowItWorks />
     <Testimonials testimonials={data.testimonials} />
     <AppDownloadSection />
    </main>
  );
}