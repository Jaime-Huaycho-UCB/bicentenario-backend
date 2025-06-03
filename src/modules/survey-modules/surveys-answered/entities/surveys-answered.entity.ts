import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Survey } from "../../surveys/entities/survey.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { QuestionAnswer } from "../../question-modules/question-answers/entities/question-answer.entity";

@Entity('surveys_answered')
export class SurveysAnswered {
    @PrimaryGeneratedColumn({ name: 'id_sa' })
    id: number

    @ManyToOne(() => Post, (post) => post.surveysAnswered)
    @JoinColumn({ name: 'id_post' })
    post: Post

    @ManyToOne(() => Survey, (survey) => survey.surveysAnswered)
    @JoinColumn({ name: 'id_survey' })
    survey: Survey

    @ManyToOne(() => User, (user) => user.surveysAnswered)
    @JoinColumn({ name: 'id_user' })
    user: User

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => QuestionAnswer,(answer) => answer.surveyAnswered)
    answers: QuestionAnswer[]
}
