'use client';

import { User } from "@/src/generated/client";

import axios from 'axios';
import React from 'react';
import { useRouter } from "next/navigation";
import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from './Question';




import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
} from "react-hook-form";
import "../index.css"



interface SurveyProps {
    currentUser?: User | null;
}







const SurveyComponent: React.FC<SurveyProps> = ({
    currentUser
}) => {
    const router = useRouter();

    const survey = new Model(json);
    const onSubmit: SubmitHandler<FieldValues> = (survey) => {
        //const onSubmit = async (survey: Model): Promise<void> => {

        const {
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10,
            question11,
            question12,
            question13,
            question14,
            question15,
            question16,
            question17,
            question18,
            question19,
            question20,
            question21,
            question22,
            question23,
            question24,
            question25,
        } = survey.data;

        const aggressive =
            parseInt(question5) +
            parseInt(question7) +
            parseInt(question12) +
            parseInt(question18) +
            parseInt(question22);
        const emotional =
            parseInt(question2) +
            parseInt(question10) +
            parseInt(question15) +
            parseInt(question21) +
            parseInt(question25);
        const restless =
            parseInt(question3) +
            parseInt(question8) +
            parseInt(question13) +
            parseInt(question16) +
            parseInt(question24);
        const friends =
            parseInt(question6) +
            parseInt(question11) +
            parseInt(question14) +
            parseInt(question19) +
            parseInt(question23);
        const society =
            parseInt(question1) +
            parseInt(question4) +
            parseInt(question9) +
            parseInt(question17) +
            parseInt(question20);

        const postData = {
            sdq_stu_aggressive_score: aggressive,
            sdq_stu_emotional_score: emotional,
            sdq_stu_restless_score: restless,
            sdq_stu_friends_score: friends,
            sdq_stu_society_score: society,
            sdq_stu_total_score: aggressive + emotional + restless + friends + society,
            user_id: currentUser?.id,

        };





        axios.post('/api/result', postData)
            .then(() => {
                toast.success('บันทึกข้อมูลสำเร็จ!');

            })
            .catch((error) => {
                toast.error(error.message);
            });



    }

    survey.onComplete.add((sender: Model, options: any): void => {

        onSubmit(sender);
        setTimeout(() => {
            router.push('/');

        }, 5000);

    });









    return (
        <Survey model={survey} />
    )

};

export default SurveyComponent;


