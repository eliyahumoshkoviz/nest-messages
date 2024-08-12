import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  
  findOne = async (id: string) =>
    JSON.parse(await readFile('messages.json', 'utf8'))[id];

  findAll = async () => JSON.parse(await readFile('messages.json', 'utf8'));

  create = async (content: string) => {
    const messages = JSON.parse(await readFile('messages.json', 'utf8'));
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return messages[id];
  };
}
