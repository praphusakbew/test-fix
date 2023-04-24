
import Container from "@/app/components/Container";
//import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import SurveyComponent from "../components/Survey";

const SDQ_test = async () => {
  const currentUser = 1
  console.log(1)
  if (!currentUser) {
    return (
      <ClientOnly>
        <Container>

          <div className="pt-24 text-xl text-center">
            ทดลองลงชื่อเข้าใช้ที่มุมบนขวา<br />
            Email: test@gmail.com<br />
            Password: 123456

          </div>
        </Container>
      </ClientOnly>
    )
  }

  //  {currentUser.name}
  //  const testResults = currentUser?.test_result;
  //  const firstTestResult = testResults[0];
  //  const studentTotalScore = firstTestResult?.sdq_stu_total_score;
  //  <h1 className=" text-red-600 text-xl">Your total score is {studentTotalScore}.</h1>
  return (

    <ClientOnly>

      <div className="pt-24
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2  
        ">




        <SurveyComponent />

      </div>

    </ClientOnly>
  )
}

export default SDQ_test;
