import Container from "@/app/components/Container";
import Image from "next/image";
//import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Link from "next/link";

const Home = async () => {
  const currentUser = 1;
  if (!currentUser) {
    return (
      <ClientOnly>
        <Container>


          <div className="pt-24 text-xl text-center">
            ทดลองลงชื่อเข้าใช้ที่มุมบนขวา<br />
            หรือลองสมัครสมาชิกเองใส่อีเมลมั่วๆได้<br />
            เช่น 123@123.com
          </div>
        </Container>
      </ClientOnly>
    )
  }

  //const testResults = currentUser?.test_result;
  //const firstTestResult = testResults[0];
  //const studentTotalScore = firstTestResult?.sdq_stu_total_score;



  return (
    <ClientOnly>
      <Container>



        <div className="grid grid-cols-2 gap-5 pt-24 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {0 != 0 || 0 == null ? (
            <div className="flex justify-center">
              <Link href="/sdq" className="flex justify-center">
                <Image src="/images/sdq-stu-banner.webp" alt="Image 1" width={500} height={500} className="h-auto max-w-full rounded-lg" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-center">
              <Image src="/images/sdq-stu-complete.webp" alt="Image 1" width={500} height={500} className="h-auto max-w-full rounded-lg" />
            </div>
          )}
          <div className="flex justify-center">
            <Image src="/images/soon.webp" alt="Image 1" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
          <div className="flex justify-center">
            <Image src="/images/soon.webp" alt="Image 1" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
          <div className="flex justify-center">
            <Image src="/images/soon.webp" alt="Image 1" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
        </div>



      </Container>
    </ClientOnly>
  )
}

export default Home;
