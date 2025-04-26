import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from '../dto/create-complaint.dto';
import { UpdateComplaintDto } from '../dto/update-complaint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Complaint } from '../entities/complaint.entity';
import { Repository } from 'typeorm';
import { ComplaintStatusesService } from '../../complaint-statuses/complaint-statuses.service';
import { ObjectsComplaintsService } from '../../objects-complaints/objects-complaints.service';
import { EmailService } from 'src/micro-services/email/email.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';
import { CommentsService } from 'src/modules/post-modules/comment-modules/comments/comments.service';
import { getPostComplaintTemplate } from '../templates/post-complaint.template';
import { getComplaintCommentTemplate } from '../templates/comment-complaint.template';

@Injectable()
export class ComplaintsService {

	complaintPost = 1;
	complaintComment = 2;

	constructor(
		@InjectRepository(Complaint)
		private readonly complaintRepository: Repository<Complaint>,
		private readonly complaintStatusesService: ComplaintStatusesService,
		private readonly objectsComplaintsService: ObjectsComplaintsService,
		private readonly postsService: PostsService,
		private readonly commentsService: CommentsService,
		private readonly emailService: EmailService
	) { }

	async create(data: CreateComplaintDto) {

		const status = await this.complaintStatusesService.findOne(1);
		const objectType = await this.objectsComplaintsService.findOne(data.idObjectType);

		const object = await this.getObject(data.idObject,data.idObjectType);

		const complaint = new Complaint();
		complaint.title = data.title;
		complaint.report = data.report;
		complaint.object = data.idObject;
		complaint.status = status!;
		complaint.objectType = objectType!;
		const complaintSaved = await this.complaintRepository.save(complaint);
		await this.sendComplaint(complaintSaved,object)

		return 'La denuncia se envio a revision exitosamente';
	}

	async sendComplaint(complaint,object){
		const html = () => {
			if (complaint.objectType.id == 1){
				return getPostComplaintTemplate(object,complaint);
			}else if (complaint.objectType.id == 2){
				return getComplaintCommentTemplate(object.user.name,object.createdAt,object.content);
			}
			return '';
		}
		await this.emailService.sendEmail({
			title: 'Denuncia de '+ complaint.objectType.name,
			destination: object.user.email,
			html: html()
		});
	}

	async findAll(filters: {isRevised: string}) {
		const complaints = await this.complaintRepository.find({
			where: {
				...(filters.isRevised && (filters.isRevised === 'true' || filters.isRevised === 'false')? {
					isRevised: filters.isRevised === 'true'
				} : {})
			},
			relations: {
				status: true,
				objectType: true
			},
			order: {
				createdAt: 'DESC'
			}
		});
		return complaints;
	}

	async findOne(id: number) {
		let complaint = await this.complaintRepository.findOne({
			where: {
				id: id
			},
			relations: {
				status: true,
				objectType: true
			}
		});
		const object = await this.getObject(complaint!.object,complaint?.objectType.id);
		complaint!.object = object;
		

		return complaint;
	}

	async getObject(idObject,idObjectType){
		let object;
		if (idObjectType == 1){
			object = await this.postsService.findOneAll(idObject,{user: true});
		}else if (idObjectType == 2){
			object = await this.commentsService.findOne(idObject);
		}
		return object;
	}

	update(id: number, updateComplaintDto: UpdateComplaintDto) {
		return `This action updates a #${id} complaint`;
	}

	remove(id: number) {
		return `This action removes a #${id} complaint`;
	}
}
