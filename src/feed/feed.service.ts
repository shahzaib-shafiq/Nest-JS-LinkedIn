import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedPostEntity } from './models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from './models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {
    const newPost = this.feedPostRepository.create(feedPost); // optional: validate or transform here
    return from(this.feedPostRepository.save(newPost));
  }
}
