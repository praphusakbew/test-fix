import { NextResponse } from "next/server";


//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()






export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    user_id,
    sdq_stu_aggressive_score,
    sdq_stu_emotional_score, 
    sdq_stu_restless_score,  
    sdq_stu_friends_score,    
    sdq_stu_society_score,   
    sdq_stu_total_score,
  } = body;

 /* const testResult = await prisma.testResult.create({
    data: {
      user_id,
      sdq_stu_aggressive_score,
      sdq_stu_emotional_score,
      sdq_stu_restless_score,
      sdq_stu_friends_score,
      sdq_stu_society_score,
      sdq_stu_total_score,
    }
  });

  */
  //return NextResponse.json(testResult);
}