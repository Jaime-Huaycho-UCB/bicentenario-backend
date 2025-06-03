import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { SurveyQuestion } from "../../question-modules/survey-questions/entities/survey-question.entity";
import { SurveysAnswered } from "../../surveys-answered/entities/surveys-answered.entity";

@Entity('surveys')
export class Survey {
    @PrimaryGeneratedColumn({ name: 'id_survey' })
    id: number

    @Column({ name: 'title' })
    title: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => SurveyQuestion,(question) => question.survey)
    questions: SurveyQuestion[]

    @OneToMany(() => SurveysAnswered,(answer) => answer.survey)
    surveysAnswered: SurveysAnswered[]
}
