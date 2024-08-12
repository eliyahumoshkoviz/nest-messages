import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}
  findOne = (id: string) => this.messagesRepo.findOne(id);
  findAll = () => this.messagesRepo.findAll();
  create = (content: string) => this.messagesRepo.create(content);
}
