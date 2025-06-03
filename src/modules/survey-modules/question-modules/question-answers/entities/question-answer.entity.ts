import { SurveysAnswered } from "src/modules/survey-modules/surveys-answered/entities/surveys-answered.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { SurveyQuestion } from "../../survey-questions/entities/survey-question.entity";

@Entity('question_answers')
export class QuestionAnswer {
    @PrimaryGeneratedColumn({ name: 'id_answer' })
    id: number

    @ManyToOne(() => SurveysAnswered, (surveyAnswered) => surveyAnswered.answers)
    @JoinColumn({ name: 'id_survey_answered' })
    surveyAnswered: SurveysAnswered

    @ManyToOne(() => SurveyQuestion, (question) => question.questionsAnswered)
    @JoinColumn({ name: 'id_question' })
    question: SurveyQuestion

    @Column({ name: 'number' })
    number: number

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
