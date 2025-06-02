import { Survey } from "src/modules/survey-modules/surveys/entities/survey.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('survey_questions')
export class SurveyQuestion {
    @PrimaryGeneratedColumn({ name: 'id_question' })
    id: number

    @ManyToOne(() => Survey, (survey) => survey.questions)
    @JoinColumn({ name: 'id_survey' })
    survey: Survey

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @Column({ name: 'content' })
    content: string
}
